import { tokenizeCommand } from "./vim/tokenize";
import type { VimCursor, VimSnapshot as Snapshot, VimState } from "./vim/types";

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
    registers: {},
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
    message: "NORMAL",
  };
}

const copyState = (state: VimState): VimState => ({
  ...state,
  lines: [...state.lines],
  cursor: { ...state.cursor },
  register: [...state.register],
  registers: Object.fromEntries(
    Object.entries(state.registers).map(([name, value]) => [name, [...value]]),
  ),
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
}
function writeRegister(state: VimState, value: string[], yank = false) {
  const name = state.activeRegister;
  if (name !== "_") {
    state.register = [...value];
    state.registers['"'] = [...value];
    if (name !== "")
      state.registers[name.toLowerCase()] =
        name !== name.toLowerCase()
          ? [...(state.registers[name.toLowerCase()] || []), ...value]
          : [...value];
    if (yank) state.registers["0"] = [...value];
  }
  state.activeRegister = '"';
}
function readRegister(state: VimState) {
  return [...(state.registers[state.activeRegister] || state.register)];
}

function wordForward(text: string, col: number, big = false) {
  const rest = text.slice(Math.min(text.length, col + 1));
  const match = rest.match(big ? /\s+\S/ : /(?:\w+|[^\w\s]+)?\s*(\w|[^\w\s])/);
  return match?.index === undefined
    ? Math.max(0, text.length - 1)
    : Math.min(text.length - 1, col + 1 + match.index + match[0].length - 1);
}
function wordBack(text: string, col: number, big = false) {
  const left = text.slice(0, col).replace(/\s+$/, "");
  const match = left.match(big ? /\S+$/ : /(?:\w+|[^\w\s]+)$/);
  return match?.index ?? 0;
}
function wordEnd(text: string, col: number, big = false) {
  const rest = text.slice(col);
  const match = rest.match(big ? /\S+/ : /(?:\w+|[^\w\s]+)/);
  return match?.index === undefined
    ? col
    : Math.min(text.length - 1, col + match.index + match[0].length - 1);
}

function move(state: VimState, key: string, amount = count(state)) {
  for (let n = 0; n < amount; n++) {
    const text = lineText(state);
    if (key === "h") state.cursor.col--;
    else if (key === "l") state.cursor.col++;
    else if (key === "j") state.cursor.line++;
    else if (key === "k") state.cursor.line--;
    else if (key === "w" || key === "W")
      state.cursor.col = wordForward(text, state.cursor.col, key === "W");
    else if (key === "b" || key === "B")
      state.cursor.col = wordBack(text, state.cursor.col, key === "B");
    else if (key === "e" || key === "E")
      state.cursor.col = wordEnd(text, state.cursor.col, key === "E");
    else if (key === "0") state.cursor.col = 0;
    else if (key === "^" || key === "_")
      state.cursor.col = Math.max(0, text.search(/\S|$/));
    else if (key === "$") state.cursor.col = Math.max(0, text.length - 1);
    else if (key === "G") state.cursor.line = state.lines.length - 1;
    else if (key === "gg") state.cursor.line = 0;
    else if (key === "}") {
      const next = state.lines.findIndex(
        (line, i) => i > state.cursor.line && line === "",
      );
      state.cursor.line =
        next < 0
          ? state.lines.length - 1
          : Math.min(state.lines.length - 1, next + 1);
    } else if (key === "{") {
      let previous = 0;
      for (let i = state.cursor.line - 1; i >= 0; i--)
        if (state.lines[i] === "") {
          previous = i + 1;
          break;
        }
      state.cursor.line = previous;
    }
    state.cursor = clampCursor(state.lines, state.cursor);
  }
  state.count = "";
}

function findPair(state: VimState) {
  const text = lineText(state);
  const pairs: Record<string, string> = { "(": ")", "[": "]", "{": "}" };
  const reverse: Record<string, string> = { ")": "(", "]": "[", "}": "{" };
  const char = text[state.cursor.col];
  if (pairs[char]) {
    const at = text.indexOf(pairs[char], state.cursor.col + 1);
    if (at >= 0) state.cursor.col = at;
  } else if (reverse[char]) {
    const at = text.lastIndexOf(reverse[char], state.cursor.col - 1);
    if (at >= 0) state.cursor.col = at;
  }
}

type Range = { start: VimCursor; end: VimCursor; linewise?: boolean };
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
      close = text.indexOf(">", state.cursor.col);
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
    open = text.lastIndexOf(openChar, state.cursor.col - 1);
    close = text.indexOf(closeChar, state.cursor.col);
  }
  if (open < 0 || close < 0) return null;
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
  writeRegister(state, extractRange(state, range));
  if (range.linewise) {
    state.lines.splice(range.start.line, range.end.line - range.start.line + 1);
    if (!state.lines.length) state.lines = [""];
    state.cursor = {
      line: Math.min(range.start.line, state.lines.length - 1),
      col: 0,
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
  saveUndo(state);
  if (operator === "=") {
    let depth = 0;
    for (let index = 0; index <= end; index++) {
      const trimmed = state.lines[index].trim();
      if (/^(?:end|[}\]])/.test(trimmed)) depth = Math.max(0, depth - 1);
      if (index >= start && trimmed)
        state.lines[index] = `${"  ".repeat(depth)}${trimmed}`;
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
  state.cursor.col = Math.max(0, state.lines[start].search(/\S|$/));
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
    range = {
      start: { line: Math.min(start.line, other), col: 0 },
      end: {
        line: Math.max(start.line, other),
        col: state.lines[Math.max(start.line, other)].length,
      },
      linewise: true,
    };
  } else {
    const temp = copyState(state);
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
    writeRegister(state, extractRange(state, range), true);
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
  const pattern = state.input || state.lastSearch;
  if (!pattern) return;
  state.lastSearch = pattern;
  const direction = (reverse ? -1 : 1) * state.searchDirection;
  let i = state.cursor.line;
  for (let n = 0; n < state.lines.length; n++) {
    i = (i + direction + state.lines.length) % state.lines.length;
    const col = state.lines[i].indexOf(pattern);
    if (col >= 0) {
      state.cursor = { line: i, col };
      break;
    }
  }
}

export function applyVimKey(source: VimState, key: string): VimState {
  const state = copyState(source);
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
      state.cursor.col = Math.max(0, state.cursor.col - 1);
      finishChange(state, [...state.changeKeys, key]);
      state.message = "NORMAL";
      return state;
    }
    if (key.length === 1) {
      const text = lineText(state);
      const tail =
        state.mode === "replace"
          ? text.slice(Math.min(text.length, state.cursor.col + 1))
          : text.slice(state.cursor.col);
      state.lines[state.cursor.line] =
        text.slice(0, state.cursor.col) + key + tail;
      state.cursor.col++;
      state.changeKeys.push(key);
    }
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
        const match = state.input.match(/^%?s\/([^/]*)\/([^/]*)\/([gc]*)/);
        if (match) {
          saveUndo(state);
          const all = state.input.startsWith("%") || match[3].includes("g");
          const targets = state.input.startsWith("%")
            ? state.lines.map((_, i) => i)
            : [state.cursor.line];
          for (const i of targets)
            state.lines[i] = state.lines[i].replace(
              all ? new RegExp(match[1], "g") : match[1],
              match[2],
            );
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
    if (key === "<Esc>") {
      state.mode = "normal";
      state.visualAnchor = undefined;
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
      if (key === "y") writeRegister(state, extractRange(state, range), true);
      else {
        saveUndo(state);
        deleteRange(state, range);
      }
      state.mode = key === "c" ? "insert" : "normal";
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
      if (op === "y") writeRegister(state, extractRange(state, range), true);
      else {
        saveUndo(state);
        deleteRange(state, range);
        if (op === "c") {
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
    state.register = [
      text.slice(state.cursor.col, state.cursor.col + count(state)),
    ];
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
    const at = state.cursor.line + (key === "p" ? 1 : 0);
    state.lines.splice(at, 0, ...value);
    state.cursor = { line: at, col: 0 };
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
  if (key === "." && state.lastChange.length)
    return applyVimTokens(state, state.lastChange, true);
  if (key === "J") {
    joinLine(state);
    return state;
  }
  return state;
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
    a.lines.length === b.lines.length &&
    a.lines.every((line, i) => line === b.lines[i])
  );
}
