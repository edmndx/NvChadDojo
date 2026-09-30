import type { VimCursor, VimState } from "./types";
import {
  lineText,
  saveUndo,
  finishChange,
  writeRegister,
  clampCursor,
  cloneVimState,
} from "./state";
import { wordEnd, move } from "./motions";
export type Range = {
  start: VimCursor;
  end: VimCursor;
  linewise?: boolean;
  paragraph?: boolean;
};
export function objectRange(
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
  if (around && openChar === closeChar)
    while (open > 0 && /\s/.test(text[open - 1])) open--;
  return {
    start: { line, col: open + (around ? 0 : 1) },
    end: { line, col: close - (around ? 0 : 1) },
  };
}

export function extractRange(state: VimState, range: Range) {
  if (range.linewise)
    return state.lines.slice(range.start.line, range.end.line + 1);
  if (range.start.line === range.end.line)
    return [
      state.lines[range.start.line].slice(range.start.col, range.end.col + 1),
    ];
  return state.lines.slice(range.start.line, range.end.line + 1);
}
export function deleteRange(state: VimState, range: Range) {
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

export function indentRange(
  state: VimState,
  start: number,
  end: number,
  operator: ">" | "<" | "=",
) {
  const originalColumn = state.cursor.col;
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
  state.cursor.col = Math.min(
    originalColumn,
    Math.max(0, state.lines[start].length - 1),
  );
  finishChange(state, [operator]);
}

export function joinLine(state: VimState, keepWhitespace = false) {
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

export function applyOperator(
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
    range = {
      start,
      end: { line: start.line, col: wordEnd(lineText(state), start.col) },
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
