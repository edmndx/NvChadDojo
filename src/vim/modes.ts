import type { VimState } from "./types";
import { lineText, saveUndo, finishChange, writeRegister } from "./state";
import { move } from "./motions";
import { objectRange, extractRange, deleteRange, type Range } from "./editing";
export function applyInsertMode(state: VimState, key: string): VimState {
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
      for (let line = insertion.startLine; line <= insertion.endLine; line++) {
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
export function applyVisualMode(state: VimState, key: string): VimState {
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
        key.repeat(Math.max(0, Math.min(text.length, endCol + 1) - startCol)) +
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
