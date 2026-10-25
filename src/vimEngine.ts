import { tokenizeCommand } from "./vim/tokenize";
import type {
  VimCursor,
  VimRegisterType,
  VimSnapshot as Snapshot,
  VimState,
} from "./vim/types";

export { tokenizeCommand } from "./vim/tokenize";
export type { VimCursor, VimMode, VimState } from "./vim/types";

export function createVimState(
  lines: string[],
  cursor: VimCursor = { line: 0, col: 0 },
): VimState {
  return {
    lines: lines.length ? [...lines] : [""],
    cursor: clampCursor(lines, cursor),
    mode: "normal",
    pending: "",
    count: "",
    register: [],
    registerType: "character",
    registers: {},
    registerTypes: {},
    activeRegister: '"',
    recording: "",
    macroBuffer: [],
    macros: {},
    marks: {},
    lastMacro: "",
    input: "",
    searchDirection: 1,
    lastSearch: "",
    undo: [],
    redo: [],
    lastChange: [],
    changeKeys: [],
    jumpList: [],
    jumpIndex: -1,
    changeList: [],
    changeIndex: -1,
    viewportTop: 0,
    transitionTrace: [],
    message: "NORMAL",
  };
}

export const cloneVimState = (state: VimState): VimState => ({
  ...state,
  lines: [...state.lines],
  cursor: { ...state.cursor },
  register: [...state.register],
  registers: Object.fromEntries(
    Object.entries(state.registers).map(([name, value]) => [name, [...value]]),
  ),
  registerTypes: { ...state.registerTypes },
  macroBuffer: [...state.macroBuffer],
  macros: Object.fromEntries(
    Object.entries(state.macros).map(([name, value]) => [name, [...value]]),
  ),
  marks: Object.fromEntries(
    Object.entries(state.marks).map(([name, value]) => [name, { ...value }]),
  ),
  undo: [...state.undo],
  redo: [...state.redo],
  lastChange: [...state.lastChange],
  changeKeys: [...state.changeKeys],
  visualAnchor: state.visualAnchor ? { ...state.visualAnchor } : undefined,
  lastFind: state.lastFind ? { ...state.lastFind } : undefined,
  blockInsert: state.blockInsert ? { ...state.blockInsert } : undefined,
  confirmation: state.confirmation ? { ...state.confirmation } : undefined,
  jumpList: state.jumpList.map((cursor) => ({ ...cursor })),
  changeList: state.changeList.map((cursor) => ({ ...cursor })),
  transitionTrace: [...state.transitionTrace],
});
const snapshot = (state: VimState): Snapshot => ({
  lines: [...state.lines],
  cursor: { ...state.cursor },
});
const lineText = (state: VimState) => state.lines[state.cursor.line] || "";
const count = (state: VimState) => Math.max(1, Number(state.count) || 1);

function clampCursor(lines: string[], cursor: VimCursor): VimCursor {
  const safe = lines.length ? lines : [""];
  const line = Math.max(0, Math.min(safe.length - 1, cursor.line));
  return {
    line,
    col: Math.max(0, Math.min(Math.max(0, safe[line].length - 1), cursor.col)),
  };
}

function saveUndo(state: VimState) {
  state.undo.push(snapshot(state));
  state.redo = [];
}
function finishChange(state: VimState, keys: string[]) {
  state.lastChange = [...keys];
  state.changeKeys = [];
  state.marks["."] = { ...state.cursor };
  state.changeList.push({ ...state.cursor });
  state.changeIndex = state.changeList.length;
}
function writeRegister(
  state: VimState,
  value: string[],
  yank = false,
  type: VimRegisterType = "character",
) {
  const name = state.activeRegister;
  if (name !== "_") {
    state.register = [...value];
    state.registerType = type;
    state.registers['"'] = [...value];
    state.registerTypes['"'] = type;
    if (name !== "")
      state.registers[name.toLowerCase()] =
        name !== name.toLowerCase()
          ? [...(state.registers[name.toLowerCase()] || []), ...value]
          : [...value];
    state.registerTypes[name.toLowerCase()] = type;
    if (yank) {
      state.registers["0"] = [...value];
      state.registerTypes["0"] = type;
    }
  }
  state.activeRegister = '"';
}
function readRegister(state: VimState) {
  return [...(state.registers[state.activeRegister] || state.register)];
}

function readRegisterType(state: VimState) {
  return state.registerTypes[state.activeRegister] || state.registerType;
}

function wordSpans(text: string, big: boolean) {
  return [...text.matchAll(big ? /\S+/g : /\w+|[^\w\s]+/g)].map((match) => ({
    start: match.index,
    end: (match.index || 0) + match[0].length - 1,
  }));
}
function wordEnd(text: string, col: number, big = false) {
  const spans = wordSpans(text, big);
  const containing = spans.find((span) => span.start <= col && col < span.end);
  if (containing) return containing.end;
  return spans.find((span) => span.start > col)?.end ?? col;
}

function moveWord(state: VimState, key: "w" | "W" | "b" | "B" | "e" | "E") {
  const big = key === key.toUpperCase();
  const spans = wordSpans(lineText(state), big);
  if (key === "w" || key === "W") {
    const originalLine = state.cursor.line;
    const next = spans.find((span) => span.start > state.cursor.col);
    if (next) state.cursor.col = next.start;
    else
      for (
        let line = state.cursor.line + 1;
        line < state.lines.length;
        line++
      ) {
        const first = wordSpans(state.lines[line], big)[0];
        if (first) {
          state.cursor = { line, col: first.start };
          break;
        }
      }
    if (
      !next &&
      state.cursor.line === originalLine &&
      originalLine === state.lines.length - 1
    )
      state.cursor.col = Math.max(0, lineText(state).length - 1);
    return;
  }
  if (key === "e" || key === "E") {
    const current = spans.find(
      (span) => span.start <= state.cursor.col && state.cursor.col < span.end,
    );
    const next = current || spans.find((span) => span.start > state.cursor.col);
    if (next) state.cursor.col = next.end;
    else
      for (
        let line = state.cursor.line + 1;
        line < state.lines.length;
        line++
      ) {
        const first = wordSpans(state.lines[line], big)[0];
        if (first) {
          state.cursor = { line, col: first.end };
          break;
        }
      }
    return;
  }
  const current = spans.find(
    (span) => span.start < state.cursor.col && state.cursor.col <= span.end,
  );
  const previous =
    current ||
    [...spans].reverse().find((span) => span.start < state.cursor.col);
  if (previous) state.cursor.col = previous.start;
  else
    for (let line = state.cursor.line - 1; line >= 0; line--) {
      const priorSpans = wordSpans(state.lines[line], big);
      const last = priorSpans[priorSpans.length - 1];
      if (last) {
        state.cursor = { line, col: last.start };
        break;
      }
    }
}

function move(state: VimState, key: string, amount = count(state)) {
  for (let n = 0; n < amount; n++) {
    const text = lineText(state);
    if (key === "h") state.cursor.col--;
    else if (key === "l") state.cursor.col++;
    else if (key === "j") state.cursor.line++;
    else if (key === "k") state.cursor.line--;
    else if (["w", "W", "b", "B", "e", "E"].includes(key))
      moveWord(state, key as "w" | "W" | "b" | "B" | "e" | "E");
    else if (key === "0") state.cursor.col = 0;
    else if (key === "^" || key === "_")
      state.cursor.col = Math.max(0, text.search(/\S|$/));
    else if (key === "$") state.cursor.col = Math.max(0, text.length - 1);
    else if (key === "G") state.cursor.line = state.lines.length - 1;
    else if (key === "gg") state.cursor.line = 0;
    else if (key === "}") {
      let next = state.cursor.line + 1;
      if (state.lines[state.cursor.line] === "")
        while (next < state.lines.length && state.lines[next] === "") next++;
      while (next < state.lines.length && state.lines[next] !== "") next++;
      state.cursor.line = Math.min(state.lines.length - 1, next);
      state.cursor.col = 0;
    } else if (key === "{") {
      let previous = state.cursor.line - 1;
      if (state.lines[state.cursor.line] === "")
        while (previous >= 0 && state.lines[previous] === "") previous--;
      while (previous >= 0 && state.lines[previous] !== "") previous--;
      state.cursor.line = Math.max(0, previous);
      state.cursor.col = 0;
    }
    state.cursor = clampCursor(state.lines, state.cursor);
  }
  state.count = "";
}

function findPair(state: VimState) {
  const text = lineText(state);
  const pairs: Record<string, string> = { "(": ")", "[": "]", "{": "}" };
  const reverse: Record<string, string> = { ")": "(", "]": "[", "}": "{" };
  let atCursor = state.cursor.col;
  while (
    atCursor < text.length &&
    !pairs[text[atCursor]] &&
    !reverse[text[atCursor]]
  )
    atCursor++;
  const char = text[atCursor];
  if (pairs[char]) {
    const at = text.indexOf(pairs[char], atCursor + 1);
    if (at >= 0) state.cursor.col = at;
  } else if (reverse[char]) {
    const at = text.lastIndexOf(reverse[char], atCursor - 1);
    if (at >= 0) state.cursor.col = at;
  }
}

function findCharacter(
  state: VimState,
  char: string,
  direction: 1 | -1,
  till: boolean,
  repeating = false,
) {
  const text = lineText(state);
  const amount = count(state);
  let position = state.cursor.col + (repeating && till ? direction : 0);
  for (let index = 0; index < amount; index++) {
    position =
      direction === 1
        ? text.indexOf(char, position + 1)
        : text.lastIndexOf(char, position - 1);
    if (position < 0) {
      state.count = "";
      return;
    }
  }
  state.cursor.col = Math.max(
    0,
    Math.min(text.length - 1, position - (till ? direction : 0)),
  );
  state.count = "";
}

type Range = {
  start: VimCursor;
  end: VimCursor;
  linewise?: boolean;
  paragraph?: boolean;
};
function objectRange(
  state: VimState,
  around: boolean,
  object: string,
): Range | null {
  const text = lineText(state);
  const line = state.cursor.line;
  if (object === "w") {
    const matches = [...text.matchAll(/[A-Za-z0-9_]+/g)];
    const found =
      matches.find(
        (m) =>
          (m.index || 0) <= state.cursor.col &&
          (m.index || 0) + m[0].length > state.cursor.col,
      ) || matches.find((m) => (m.index || 0) >= state.cursor.col);
    if (!found || found.index === undefined) return null;
    let start = found.index,
      end = start + found[0].length - 1;
    if (around && /\s/.test(text[end + 1] || ""))
      while (/\s/.test(text[end + 1] || "")) end++;
    return { start: { line, col: start }, end: { line, col: end } };
  }
  if (object === "p") {
    let start = line,
      end = line;
    while (start > 0 && state.lines[start - 1] !== "") start--;
    while (end < state.lines.length - 1 && state.lines[end + 1] !== "") end++;
    if (around && end < state.lines.length - 1) end++;
    return {
      start: { line: start, col: 0 },
      end: { line: end, col: state.lines[end].length },
      linewise: true,
      paragraph: true,
    };
  }
  if (object === "s") {
    let start = 0;
    for (let index = state.cursor.col - 1; index >= 0; index--)
      if (/[.!?]/.test(text[index])) {
        start = index + 1;
        while (/\s/.test(text[start] || "")) start++;
        break;
      }
    while (/\s/.test(text[start] || "")) start++;
    const punctuation = text.slice(state.cursor.col).search(/[.!?]/);
    const end =
      punctuation < 0 ? text.length - 1 : state.cursor.col + punctuation;
    let rangeEnd = end;
    if (around) while (/\s/.test(text[rangeEnd + 1] || "")) rangeEnd++;
    return {
      start: { line, col: start },
      end: { line, col: rangeEnd },
    };
  }
  const pairMap: Record<string, [string, string]> = {
    "(": ["(", ")"],
    ")": ["(", ")"],
    "[": ["[", "]"],
    "]": ["[", "]"],
    "{": ["{", "}"],
    "}": ["{", "}"],
    '"': ['"', '"'],
    "'": ["'", "'"],
  };
  if (object === "t") {
    const open = text.lastIndexOf("<", state.cursor.col),
      close = text.indexOf(">", open);
    const endOpen = text.indexOf("</", close);
    const endClose = text.indexOf(">", endOpen);
    if (open < 0 || close < 0 || endOpen < 0) return null;
    return around
      ? { start: { line, col: open }, end: { line, col: endClose } }
      : { start: { line, col: close + 1 }, end: { line, col: endOpen - 1 } };
  }
  const pair = pairMap[object];
  if (!pair) return null;
  const [openChar, closeChar] = pair;
  let open = text.lastIndexOf(openChar, state.cursor.col);
  let close = text.indexOf(closeChar, Math.max(open + 1, state.cursor.col));
  if (openChar === closeChar) {
    const positions = [...text.matchAll(new RegExp(`\\${openChar}`, "g"))].map(
      (match) => match.index,
    );
    const containing = positions.findIndex(
      (position, index) =>
        index % 2 === 0 &&
        position < state.cursor.col &&
        (positions[index + 1] ?? -1) >= state.cursor.col,
    );
    const next = positions.findIndex(
      (position, index) => index % 2 === 0 && position >= state.cursor.col,
    );
    const pairIndex = containing >= 0 ? containing : next;
    open = pairIndex >= 0 ? positions[pairIndex] : -1;
    close = pairIndex >= 0 ? (positions[pairIndex + 1] ?? -1) : -1;
  } else {
    const stack: number[] = [];
    const pairs: Array<[number, number]> = [];
    for (let index = 0; index < text.length; index++) {
      if (text[index] === openChar) stack.push(index);
      else if (text[index] === closeChar && stack.length)
        pairs.push([stack.pop()!, index]);
    }
    const containing = pairs
      .filter(
        ([pairOpen, pairClose]) =>
          pairOpen <= state.cursor.col && state.cursor.col <= pairClose,
      )
      .sort(([leftOpen], [rightOpen]) => rightOpen - leftOpen)[0];
    const following = pairs
      .filter(([pairOpen]) => pairOpen >= state.cursor.col)
      .sort(([leftOpen], [rightOpen]) => leftOpen - rightOpen)[0];
    [open, close] = containing || following || [-1, -1];
  }
  if (open < 0 || close < 0) return null;
  if (around && openChar === closeChar) {
    if (/\s/.test(text[close + 1] || ""))
      while (/\s/.test(text[close + 1] || "")) close++;
    else while (open > 0 && /\s/.test(text[open - 1])) open--;
  }
  return {
    start: { line, col: open + (around ? 0 : 1) },
    end: { line, col: close - (around ? 0 : 1) },
  };
}

function extractRange(state: VimState, range: Range) {
  if (range.linewise)
    return state.lines.slice(range.start.line, range.end.line + 1);
  if (range.start.line === range.end.line)
    return [
      state.lines[range.start.line].slice(range.start.col, range.end.col + 1),
    ];
  return state.lines.slice(range.start.line, range.end.line + 1);
}
function deleteRange(state: VimState, range: Range) {
  writeRegister(
    state,
    extractRange(state, range),
    false,
    range.linewise ? "line" : "character",
  );
  if (range.linewise) {
    const desiredColumn = state.cursor.col;
    state.lines.splice(range.start.line, range.end.line - range.start.line + 1);
    if (!state.lines.length) state.lines = [""];
    state.cursor = {
      line: Math.min(range.start.line, state.lines.length - 1),
      col: desiredColumn,
    };
  } else {
    const text = state.lines[range.start.line];
    state.lines[range.start.line] =
      text.slice(0, range.start.col) + text.slice(range.end.col + 1);
    state.cursor = { ...range.start };
  }
  state.cursor = clampCursor(state.lines, state.cursor);
}

function indentRange(
  state: VimState,
  start: number,
  end: number,
  operator: ">" | "<" | "=",
) {
  const originalColumn = state.cursor.col;
  saveUndo(state);
  if (operator === "=") {
    let depth = 0;
    let continuation = false;
    for (let index = 0; index <= end; index++) {
      const trimmed = state.lines[index].trim();
      if (/^(?:end|[}\]])/.test(trimmed)) depth = Math.max(0, depth - 1);
      if (index >= start && trimmed)
        state.lines[index] =
          `${"  ".repeat(depth + Number(continuation))}${trimmed}`;
      continuation = /=\s*$/.test(trimmed);
      if (
        /(?:\bthen|\bdo|function\b|[{[])\s*$/.test(trimmed) &&
        !/^(?:end|[}\]])/.test(trimmed)
      )
        depth++;
    }
  } else {
    for (let index = start; index <= end; index++) {
      state.lines[index] =
        operator === ">"
          ? `  ${state.lines[index]}`
          : state.lines[index].replace(/^ {1,2}|^\t/, "");
    }
  }
  state.cursor.line = start;
  state.cursor.col = Math.min(
    originalColumn,
    Math.max(0, state.lines[start].length - 1),
  );
  finishChange(state, [operator]);
}

function joinLine(state: VimState, keepWhitespace = false) {
  if (state.cursor.line >= state.lines.length - 1) return;
  saveUndo(state);
  const current = state.lines[state.cursor.line].replace(/\s+$/, "");
  const next = keepWhitespace
    ? state.lines[state.cursor.line + 1]
    : state.lines[state.cursor.line + 1].trimStart();
  const separator = keepWhitespace || !current || !next ? "" : " ";
  state.cursor.col = current.length;
  state.lines.splice(state.cursor.line, 2, `${current}${separator}${next}`);
  finishChange(state, [keepWhitespace ? "gJ" : "J"]);
}

function applyOperator(
  state: VimState,
  op: string,
  motion: string,
  keys: string[],
) {
  const start = { ...state.cursor };
  let range: Range | null = null;
  if (motion === op)
    range = {
      start: { line: start.line, col: 0 },
      end: { line: start.line, col: lineText(state).length },
      linewise: true,
    };
  else if (motion === "j" || motion === "k") {
    const other = Math.max(
      0,
      Math.min(state.lines.length - 1, start.line + (motion === "j" ? 1 : -1)),
    );
    if (other === start.line) return;
    range = {
      start: { line: Math.min(start.line, other), col: 0 },
      end: {
        line: Math.max(start.line, other),
        col: state.lines[Math.max(start.line, other)].length,
      },
      linewise: true,
    };
  } else if (op === "c" && motion === "w") {
    const span = wordSpans(lineText(state), false).find(
      (word) => word.start <= start.col && start.col <= word.end,
    );
    range = {
      start,
      end: {
        line: start.line,
        col: span?.end ?? wordEnd(lineText(state), start.col),
      },
    };
  } else {
    const temp = cloneVimState(state);
    move(temp, motion, 1);
    const end = { ...temp.cursor };
    range = {
      start: start.col <= end.col ? start : end,
      end: start.col <= end.col ? end : start,
    };
    if (motion === "w" && end.col > start.col)
      range.end.col = Math.max(start.col, end.col - 1);
  }
  if (!range) return;
  if (op === "y") {
    writeRegister(
      state,
      extractRange(state, range),
      true,
      range.linewise ? "line" : "character",
    );
    state.message = "YANKED";
    return;
  }
  saveUndo(state);
  deleteRange(state, range);
  if (op === "c") {
    state.mode = "insert";
    state.changeKeys = [...keys];
  } else finishChange(state, keys);
}

function search(state: VimState, reverse = false) {
  const historyPattern = state.input || state.lastSearch;
  if (!historyPattern) return;
  const pattern = historyPattern.replace(/^\\</, "").replace(/\\>$/, "");
  state.lastSearch = historyPattern;
  const direction = (reverse ? -1 : 1) * state.searchDirection;
  let i = state.cursor.line;
  for (let n = 0; n < state.lines.length; n++) {
    i = (i + direction + state.lines.length) % state.lines.length;
    const col =
      direction === 1
        ? state.lines[i].indexOf(pattern)
        : state.lines[i].lastIndexOf(pattern);
    if (col >= 0) {
      state.cursor = { line: i, col };
      break;
    }
  }
}

function nextConfirmation(
  state: VimState,
  pattern: string,
  startLine: number,
  startCol: number,
  endLine: number,
) {
  for (let line = startLine; line <= endLine; line++) {
    const col = state.lines[line].indexOf(
      pattern,
      line === startLine ? startCol : 0,
    );
    if (col >= 0) return { line, col };
  }
  return null;
}

function startConfirmation(
  state: VimState,
  pattern: string,
  replacement: string,
  wholeBuffer: boolean,
) {
  const startLine = wholeBuffer ? 0 : state.cursor.line;
  const endLine = wholeBuffer ? state.lines.length - 1 : state.cursor.line;
  const first = nextConfirmation(state, pattern, startLine, 0, endLine);
  if (!first) {
    state.mode = "normal";
    state.message = `PATTERN NOT FOUND: ${pattern}`;
    return;
  }
  state.mode = "confirm";
  state.cursor = first;
  state.confirmation = {
    pattern,
    replacement,
    line: first.line,
    col: first.col,
    endLine,
    undoSaved: false,
  };
  state.message = `replace with ${replacement}? (y/n/a/q/l)`;
}

function finishConfirmation(
  state: VimState,
  message = "SUBSTITUTION COMPLETE",
  resetColumn = false,
) {
  state.mode = "normal";
  if (resetColumn) state.cursor.col = 0;
  state.confirmation = undefined;
  state.message = message;
  state.input = "";
}

function confirmReplacement(state: VimState, choice: string) {
  const confirmation = state.confirmation;
  if (!confirmation || !["y", "n", "a", "q", "l"].includes(choice)) return;
  if (choice === "q") {
    finishConfirmation(state, "SUBSTITUTION STOPPED");
    return;
  }
  const replaceCurrent = choice === "y" || choice === "a" || choice === "l";
  if (replaceCurrent) {
    if (!confirmation.undoSaved) {
      saveUndo(state);
      confirmation.undoSaved = true;
    }
    const text = state.lines[confirmation.line];
    state.lines[confirmation.line] =
      text.slice(0, confirmation.col) +
      confirmation.replacement +
      text.slice(confirmation.col + confirmation.pattern.length);
  }
  if (choice === "a") {
    for (let line = confirmation.line; line <= confirmation.endLine; line++) {
      const start =
        line === confirmation.line
          ? confirmation.col + confirmation.replacement.length
          : 0;
      const prefix = state.lines[line].slice(0, start);
      if (state.lines[line].slice(start).includes(confirmation.pattern))
        state.cursor.line = line;
      const suffix = state.lines[line]
        .slice(start)
        .split(confirmation.pattern)
        .join(confirmation.replacement);
      state.lines[line] = prefix + suffix;
    }
    finishChange(state, [":substitute-confirm", "a"]);
    finishConfirmation(state, "SUBSTITUTION COMPLETE", true);
    return;
  }
  if (choice === "l") {
    finishChange(state, [":substitute-confirm", "l"]);
    finishConfirmation(state, "LAST REPLACEMENT ACCEPTED", true);
    return;
  }
  const nextStart = replaceCurrent
    ? confirmation.col + confirmation.replacement.length
    : confirmation.col + confirmation.pattern.length;
  const next = nextConfirmation(
    state,
    confirmation.pattern,
    confirmation.line,
    nextStart,
    confirmation.endLine,
  );
  if (!next) {
    if (confirmation.undoSaved)
      finishChange(state, [":substitute-confirm", choice]);
    finishConfirmation(state);
    return;
  }
  confirmation.line = next.line;
  confirmation.col = next.col;
  state.cursor = next;
  state.message = `replace with ${confirmation.replacement}? (y/n/a/q/l)`;
}

function applyVimKeyCore(source: VimState, key: string): VimState {
  const state = cloneVimState(source);
  if (state.recording) {
    if (key === "q") {
      state.macros[state.recording] = [...state.macroBuffer];
      state.lastMacro = state.recording;
      state.recording = "";
      state.macroBuffer = [];
      state.message = "RECORDING STOPPED";
      return state;
    }
    state.macroBuffer.push(key);
  }
  if (state.mode === "insert" || state.mode === "replace") {
    if (key === "<Esc>") {
      state.mode = "normal";
      state.cursor = state.blockInsert
        ? {
            line: state.blockInsert.startLine,
            col: state.blockInsert.returnCol,
          }
        : { ...state.cursor, col: Math.max(0, state.cursor.col - 1) };
      state.blockInsert = undefined;
      finishChange(state, [...state.changeKeys, key]);
      state.message = "NORMAL";
      return state;
    }
    const insertedKey = key === "<Space>" ? " " : key;
    if (insertedKey.length === 1) {
      if (state.blockInsert) {
        const insertion = state.blockInsert;
        const at = insertion.col + insertion.offset;
        for (
          let line = insertion.startLine;
          line <= insertion.endLine;
          line++
        ) {
          const text = state.lines[line];
          const padded = text.padEnd(at, " ");
          state.lines[line] =
            padded.slice(0, at) + insertedKey + padded.slice(at);
        }
        insertion.offset++;
        state.cursor.col = at + 1;
        state.changeKeys.push(key);
        return state;
      }
      const text = lineText(state);
      const tail =
        state.mode === "replace"
          ? text.slice(Math.min(text.length, state.cursor.col + 1))
          : text.slice(state.cursor.col);
      state.lines[state.cursor.line] =
        text.slice(0, state.cursor.col) + insertedKey + tail;
      state.cursor.col++;
      state.changeKeys.push(key);
    }
    return state;
  }
  if (state.mode === "confirm") {
    confirmReplacement(state, key);
    return state;
  }
  if (state.mode === "search" || state.mode === "command") {
    if (key === "<Esc>") {
      state.mode = "normal";
      state.input = "";
      return state;
    }
    if (key === "<Enter>") {
      if (state.mode === "search") search(state);
      else if (/^%?s/.test(state.input)) {
        const match = state.input.match(
          /^%?s\/([^/]*)\/([^/]*)(?:\/([gc]*))?$/,
        );
        if (match) {
          const pattern = match[1] || state.lastSearch;
          const flags = match[3] || "";
          const wholeBuffer = state.input.startsWith("%");
          const targets = wholeBuffer
            ? state.lines.map((_, i) => i)
            : [state.cursor.line];
          state.lastSearch = pattern;
          if (flags.includes("c")) {
            state.input = "";
            startConfirmation(state, pattern, match[2], wholeBuffer);
            return state;
          }
          saveUndo(state);
          for (const i of targets) {
            if (!state.lines[i].includes(pattern)) continue;
            state.lines[i] = flags.includes("g")
              ? state.lines[i].split(pattern).join(match[2])
              : state.lines[i].replace(pattern, match[2]);
            state.cursor = { line: i, col: 0 };
          }
          finishChange(state, [":substitute"]);
        }
      } else if (/^(?:w|wq|q|q!)$/.test(state.input))
        state.message =
          state.input === "w"
            ? "WRITTEN"
            : state.input === "q!"
              ? "CHANGES DISCARDED"
              : "BUFFER CLOSED";
      else if (state.input === "checkhealth")
        state.message = "HEALTHCHECK OPENED";
      state.mode = "normal";
      state.input = "";
      return state;
    }
    if (key.length === 1) state.input += key;
    return state;
  }
  if (state.mode.startsWith("visual")) {
    if (state.pending === "visual-i" || state.pending === "visual-a") {
      const range = objectRange(state, state.pending === "visual-a", key);
      state.pending = "";
      if (range) {
        state.visualAnchor = { ...range.start };
        state.cursor = { ...range.end };
        if (range.linewise) state.mode = "visual-line";
      }
      return state;
    }
    if (state.pending === "visual-block-r" && state.visualAnchor) {
      const startLine = Math.min(state.visualAnchor.line, state.cursor.line);
      const endLine = Math.max(state.visualAnchor.line, state.cursor.line);
      const startCol = Math.min(state.visualAnchor.col, state.cursor.col);
      const endCol = Math.max(state.visualAnchor.col, state.cursor.col);
      saveUndo(state);
      for (let line = startLine; line <= endLine; line++) {
        const text = state.lines[line];
        state.lines[line] =
          text.slice(0, startCol) +
          key.repeat(
            Math.max(0, Math.min(text.length, endCol + 1) - startCol),
          ) +
          text.slice(endCol + 1);
      }
      state.cursor = { line: startLine, col: startCol };
      state.mode = "normal";
      state.pending = "";
      state.visualAnchor = undefined;
      finishChange(state, ["<C-v>", "r", key]);
      return state;
    }
    if (key === "<Esc>") {
      state.mode = "normal";
      state.visualAnchor = undefined;
      return state;
    }
    if (key === "o" && state.visualAnchor) {
      const previous = { ...state.cursor };
      state.cursor = { ...state.visualAnchor };
      state.visualAnchor = previous;
      state.message = "VISUAL ENDPOINT SWITCHED";
      return state;
    }
    if ((key === "i" || key === "a") && state.mode !== "visual-block") {
      state.pending = `visual-${key}`;
      return state;
    }
    if ((key === "I" || key === "A") && state.mode === "visual-block") {
      const anchor = state.visualAnchor || state.cursor;
      const startLine = Math.min(anchor.line, state.cursor.line);
      const endLine = Math.max(anchor.line, state.cursor.line);
      const selectedStart = Math.min(anchor.col, state.cursor.col);
      const selectedEnd = Math.max(anchor.col, state.cursor.col);
      saveUndo(state);
      state.blockInsert = {
        startLine,
        endLine,
        col: key === "I" ? selectedStart : selectedEnd + 1,
        returnCol: selectedStart,
        offset: 0,
      };
      state.cursor = {
        line: startLine,
        col: key === "I" ? selectedStart : selectedEnd + 1,
      };
      state.visualAnchor = undefined;
      state.mode = "insert";
      state.changeKeys = ["<C-v>", key];
      return state;
    }
    if (key === "r" && state.mode === "visual-block") {
      state.pending = "visual-block-r";
      state.message = "BLOCK REPLACE PENDING";
      return state;
    }
    if (["h", "j", "k", "l", "w", "e", "b", "0", "$"].includes(key)) {
      move(state, key);
      return state;
    }
    if (["d", "c", "y"].includes(key) && state.visualAnchor) {
      const a = state.visualAnchor,
        b = state.cursor;
      const linewise = state.mode === "visual-line";
      const range: Range = {
        start: a.line < b.line || (a.line === b.line && a.col <= b.col) ? a : b,
        end: a.line < b.line || (a.line === b.line && a.col <= b.col) ? b : a,
        linewise,
      };
      if (key === "y")
        writeRegister(
          state,
          extractRange(state, range),
          true,
          range.linewise ? "line" : "character",
        );
      else {
        saveUndo(state);
        deleteRange(state, range);
      }
      state.mode = key === "c" ? "insert" : "normal";
      if (key === "y") state.cursor = { ...range.start };
      state.visualAnchor = undefined;
      return state;
    }
    return state;
  }
  if (key === "<Esc>") {
    state.pending = "";
    state.count = "";
    state.message = "NORMAL";
    return state;
  }
  if (/^\d$/.test(key) && !(key === "0" && !state.count)) {
    state.count += key;
    return state;
  }
  if (state.pending) {
    const pending = state.pending;
    if (["f", "F", "t", "T"].includes(pending)) {
      const direction = pending === "f" || pending === "t" ? 1 : -1;
      const till = pending === "t" || pending === "T";
      findCharacter(state, key, direction, till);
      state.lastFind = { char: key, direction, till };
      state.pending = "";
      state.message = "CHARACTER FOUND";
      return state;
    }
    if (pending === "m") {
      state.marks[key] = { ...state.cursor };
      state.pending = "";
      state.message = `MARK ${key} SET`;
      return state;
    }
    if (pending === "`" || pending === "'") {
      const mark = state.marks[key];
      state.pending = "";
      if (mark) {
        state.cursor = { ...mark };
        if (pending === "'")
          state.cursor.col = Math.max(0, lineText(state).search(/\S|$/));
        state.cursor = clampCursor(state.lines, state.cursor);
        state.message = `MARK ${key}`;
      }
      return state;
    }
    if (pending === '"') {
      state.activeRegister = key;
      state.pending = "";
      state.message = `REGISTER ${key}`;
      return state;
    }
    if (pending === "q") {
      state.recording = key;
      state.macroBuffer = [];
      state.pending = "";
      state.message = `RECORDING @${key}`;
      return state;
    }
    if (pending === "@") {
      const name = key === "@" ? state.lastMacro : key;
      state.pending = "";
      if (!name || !state.macros[name]) return state;
      state.lastMacro = name;
      const times = count(state);
      state.count = "";
      let replay = state;
      for (let i = 0; i < times; i++)
        replay = applyVimTokens(replay, state.macros[name]);
      replay.message = `MACRO @${name}`;
      return replay;
    }
    if (pending === "g") {
      state.pending = "";
      if (key === "g") move(state, "gg");
      else if (key === "J") joinLine(state, true);
      else if (key === ";" && state.changeList.length) {
        state.changeIndex = Math.max(0, state.changeIndex - 1);
        state.cursor = { ...state.changeList[state.changeIndex] };
        state.message = "PREVIOUS CHANGE";
      } else if (key === "," && state.changeList.length) {
        state.changeIndex = Math.min(
          state.changeList.length - 1,
          state.changeIndex + 1,
        );
        state.cursor = { ...state.changeList[state.changeIndex] };
        state.message = "NEXT CHANGE";
      }
      return state;
    }
    if (pending === "r") {
      saveUndo(state);
      const text = lineText(state);
      state.lines[state.cursor.line] =
        text.slice(0, state.cursor.col) +
        key.repeat(count(state)) +
        text.slice(state.cursor.col + count(state));
      finishChange(state, ["r", key]);
      state.pending = "";
      state.count = "";
      return state;
    }
    if (/^[dcy][ia]$/.test(pending)) {
      const op = pending[0],
        around = pending[1] === "a",
        range = objectRange(state, around, key);
      state.pending = "";
      if (!range) return state;
      if (op === "y")
        writeRegister(
          state,
          extractRange(state, range),
          true,
          range.linewise ? "line" : "character",
        );
      else {
        saveUndo(state);
        if (op === "c" && range.paragraph) {
          writeRegister(state, extractRange(state, range), false, "line");
          const before = state.lines
            .slice(0, range.start.line)
            .join("\n")
            .replace(
              /'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`(?:\\[\s\S]|[^`\\])*`|\/\/[^\n]*/g,
              "",
            );
          const indentation =
            before.lastIndexOf("/*") > before.lastIndexOf("*/") ? "  " : "";
          state.lines.splice(
            range.start.line,
            range.end.line - range.start.line + 1,
            indentation,
          );
          state.cursor = { line: range.start.line, col: indentation.length };
        } else deleteRange(state, range);
        if (op === "c") {
          state.cursor = {
            line: range.start.line,
            col: range.paragraph
              ? state.cursor.col
              : Math.min(state.lines[range.start.line].length, range.start.col),
          };
          state.mode = "insert";
          state.changeKeys = [op, around ? "a" : "i", key];
        } else finishChange(state, [op, around ? "a" : "i", key]);
      }
      return state;
    }
    if (/^[dcy]$/.test(pending)) {
      if (key === "i" || key === "a") {
        state.pending += key;
        return state;
      }
      applyOperator(state, pending, key, [pending, key]);
      state.pending = "";
      return state;
    }
    if (/^[><=]$/.test(pending)) {
      const operator = pending as ">" | "<" | "=";
      let other = state.cursor.line;
      if (key === operator) other = state.cursor.line;
      else if (key === "j")
        other = Math.min(
          state.lines.length - 1,
          state.cursor.line + count(state),
        );
      else if (key === "k")
        other = Math.max(0, state.cursor.line - count(state));
      else if (key === "G") other = state.lines.length - 1;
      else {
        state.pending = "";
        return state;
      }
      indentRange(
        state,
        Math.min(state.cursor.line, other),
        Math.max(state.cursor.line, other),
        operator,
      );
      state.pending = "";
      state.count = "";
      return state;
    }
  }
  if (
    [
      "h",
      "j",
      "k",
      "l",
      "w",
      "e",
      "b",
      "W",
      "E",
      "B",
      "0",
      "^",
      "_",
      "$",
      "G",
      "{",
      "}",
    ].includes(key)
  ) {
    move(state, key);
    return state;
  }
  if (key === "g") {
    state.pending = "g";
    return state;
  }
  if (key === "%") {
    findPair(state);
    return state;
  }
  if (key === "<C-u>" || key === "<C-d>") {
    const direction = key === "<C-u>" ? -1 : 1;
    state.cursor.line += direction * 6;
    state.viewportTop = Math.max(0, state.viewportTop + direction * 6);
    state.cursor = clampCursor(state.lines, state.cursor);
    return state;
  }
  if ((key === "<C-o>" || key === "<C-i>") && state.jumpList.length) {
    state.jumpIndex = Math.max(
      0,
      Math.min(
        state.jumpList.length - 1,
        state.jumpIndex + (key === "<C-o>" ? -1 : 1),
      ),
    );
    state.cursor = { ...state.jumpList[state.jumpIndex] };
    state.message = key === "<C-o>" ? "OLDER JUMP" : "NEWER JUMP";
    return state;
  }
  if (["f", "F", "t", "T"].includes(key)) {
    state.pending = key;
    state.message = `${key} TARGET`;
    return state;
  }
  if ((key === ";" || key === ",") && state.lastFind) {
    const direction =
      key === ";" ? state.lastFind.direction : -state.lastFind.direction;
    findCharacter(
      state,
      state.lastFind.char,
      direction as 1 | -1,
      state.lastFind.till,
      true,
    );
    state.message = key === ";" ? "FIND REPEATED" : "FIND REVERSED";
    return state;
  }
  if (key === "m" || key === "`" || key === "'") {
    state.pending = key;
    state.message = key === "m" ? "SET MARK" : "GO TO MARK";
    return state;
  }
  if (key === ">" || key === "<" || key === "=") {
    state.pending = key;
    state.message = `${key} PENDING`;
    return state;
  }
  if (["d", "c", "y"].includes(key)) {
    state.pending = key;
    state.message = `${key.toUpperCase()} PENDING`;
    return state;
  }
  if (key === '"') {
    state.pending = '"';
    state.message = "REGISTER PENDING";
    return state;
  }
  if (key === "q") {
    state.pending = "q";
    state.message = "RECORD INTO REGISTER";
    return state;
  }
  if (key === "@") {
    state.pending = "@";
    state.message = "PLAY MACRO";
    return state;
  }
  if (key === "x" || key === "s") {
    saveUndo(state);
    const text = lineText(state);
    writeRegister(
      state,
      [text.slice(state.cursor.col, state.cursor.col + count(state))],
      false,
      "character",
    );
    state.lines[state.cursor.line] =
      text.slice(0, state.cursor.col) +
      text.slice(state.cursor.col + count(state));
    state.count = "";
    if (key === "s") {
      state.mode = "insert";
      state.changeKeys = ["s"];
    } else finishChange(state, ["x"]);
    return state;
  }
  if (key === "D") {
    const text = lineText(state);
    if (!text.length) return state;
    saveUndo(state);
    deleteRange(state, {
      start: { ...state.cursor },
      end: { line: state.cursor.line, col: text.length - 1 },
    });
    finishChange(state, ["D"]);
    return state;
  }
  if (key === "r") {
    state.pending = "r";
    return state;
  }
  if (key === "R") {
    saveUndo(state);
    state.mode = "replace";
    state.changeKeys = ["R"];
    state.message = "REPLACE";
    return state;
  }
  if (["i", "a", "I", "A", "o", "O"].includes(key)) {
    saveUndo(state);
    if (key === "a")
      state.cursor.col = Math.min(lineText(state).length, state.cursor.col + 1);
    if (key === "I")
      state.cursor.col = Math.max(0, lineText(state).search(/\S|$/));
    if (key === "A") state.cursor.col = lineText(state).length;
    if (key === "o" || key === "O") {
      const at = state.cursor.line + (key === "o" ? 1 : 0);
      state.lines.splice(at, 0, "");
      state.cursor = { line: at, col: 0 };
    }
    state.mode = "insert";
    state.changeKeys = [key];
    return state;
  }
  if (key === "p" || key === "P") {
    saveUndo(state);
    const value = readRegister(state);
    const registerType = readRegisterType(state);
    if (registerType === "line") {
      const at = state.cursor.line + (key === "p" ? 1 : 0);
      state.lines.splice(at, 0, ...value);
      state.cursor = { line: at, col: 0 };
    } else if (registerType === "block") {
      const at = state.cursor.col + (key === "p" ? 1 : 0);
      value.forEach((blockLine, offset) => {
        const line = Math.min(
          state.lines.length - 1,
          state.cursor.line + offset,
        );
        const text = state.lines[line].padEnd(at, " ");
        state.lines[line] = text.slice(0, at) + blockLine + text.slice(at);
      });
      state.cursor.col = at;
    } else {
      const inserted = value.join("\n");
      const at = state.cursor.col + (key === "p" ? 1 : 0);
      const text = lineText(state);
      state.lines[state.cursor.line] =
        text.slice(0, at) + inserted + text.slice(at);
      state.cursor.col = Math.max(at, at + inserted.length - 1);
    }
    state.activeRegister = '"';
    finishChange(state, [key]);
    return state;
  }
  if (key === "v" || key === "V" || key === "<C-v>") {
    state.visualAnchor = { ...state.cursor };
    state.mode =
      key === "v" ? "visual" : key === "V" ? "visual-line" : "visual-block";
    return state;
  }
  if (key === "/" || key === "?") {
    state.mode = "search";
    state.searchDirection = key === "/" ? 1 : -1;
    state.input = "";
    return state;
  }
  if (key === ":") {
    state.mode = "command";
    state.input = "";
    return state;
  }
  if (key === "n" || key === "N") {
    state.input = state.lastSearch;
    search(state, key === "N");
    return state;
  }
  if (key === "*" || key === "#") {
    const word = objectRange(state, false, "w");
    if (word) {
      state.input = extractRange(state, word)[0];
      state.searchDirection = key === "*" ? 1 : -1;
      search(state);
      state.lastSearch = `\\<${state.input}\\>`;
    }
    return state;
  }
  if (key === "u" && state.undo.length) {
    state.redo.push(snapshot(state));
    const old = state.undo.pop()!;
    state.lines = old.lines;
    state.cursor = old.cursor;
    return state;
  }
  if (key === "<C-r>" && state.redo.length) {
    state.undo.push(snapshot(state));
    const redo = state.redo.pop()!;
    state.lines = redo.lines;
    state.cursor = redo.cursor;
    return state;
  }
  if (key === "." && state.lastChange.length) {
    const times = count(state);
    state.count = "";
    if (state.lastChange.length === 1 && state.lastChange[0] === "x") {
      state.count = String(times);
      return applyVimTokens(state, state.lastChange, true);
    }
    let repeated = state;
    for (let index = 0; index < times; index++)
      repeated = applyVimTokens(repeated, state.lastChange, true);
    return repeated;
  }
  if (key === "J") {
    joinLine(state);
    return state;
  }
  return state;
}

export function applyVimKey(source: VimState, key: string): VimState {
  const next = applyVimKeyCore(source, key);
  next.transitionTrace.push(
    `${source.mode}${source.pending ? `:${source.pending}` : ""} --${key}--> ${next.mode}${next.pending ? `:${next.pending}` : ""}`,
  );
  return next;
}

export function applyVimTokens(
  state: VimState,
  keys: string[],
  repeating = false,
) {
  let next = state;
  for (const key of keys) next = applyVimKey(next, key);
  if (repeating) next.message = "CHANGE REPEATED";
  return next;
}
export function applyVimCommand(
  lines: string[],
  cursor: VimCursor,
  command: string,
) {
  return applyVimTokens(
    createVimState(lines, cursor),
    tokenizeCommand(command),
  );
}
export function sameOutcome(a: VimState, b: VimState) {
  return (
    a.cursor.line === b.cursor.line &&
    a.cursor.col === b.cursor.col &&
    a.mode === b.mode &&
    a.pending === b.pending &&
    a.lines.length === b.lines.length &&
    a.lines.every((line, i) => line === b.lines[i]) &&
    a.registerType === b.registerType &&
    JSON.stringify(a.register) === JSON.stringify(b.register) &&
    JSON.stringify(a.registers) === JSON.stringify(b.registers) &&
    JSON.stringify(a.registerTypes) === JSON.stringify(b.registerTypes) &&
    a.activeRegister === b.activeRegister &&
    a.lastSearch === b.lastSearch &&
    a.searchDirection === b.searchDirection &&
    JSON.stringify(a.lastFind) === JSON.stringify(b.lastFind) &&
    JSON.stringify(a.macros) === JSON.stringify(b.macros) &&
    a.recording === b.recording &&
    a.lastMacro === b.lastMacro &&
    JSON.stringify(a.marks) === JSON.stringify(b.marks) &&
    JSON.stringify(a.undo) === JSON.stringify(b.undo) &&
    JSON.stringify(a.redo) === JSON.stringify(b.redo) &&
    JSON.stringify(a.lastChange) === JSON.stringify(b.lastChange) &&
    JSON.stringify(a.jumpList) === JSON.stringify(b.jumpList) &&
    a.jumpIndex === b.jumpIndex &&
    JSON.stringify(a.changeList) === JSON.stringify(b.changeList) &&
    a.changeIndex === b.changeIndex &&
    a.viewportTop === b.viewportTop &&
    a.message === b.message &&
    JSON.stringify(a.transitionTrace) === JSON.stringify(b.transitionTrace)
  );
}
