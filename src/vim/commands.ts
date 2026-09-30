import type { VimState } from "./types";
import { saveUndo, finishChange } from "./state";
export function search(state: VimState, reverse = false) {
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

export function startConfirmation(
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

export function confirmReplacement(state: VimState, choice: string) {
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

export function applyCommandMode(state: VimState, key: string): VimState {
  if (key === "<Esc>") {
    state.mode = "normal";
    state.input = "";
    return state;
  }
  if (key === "<Enter>") {
    if (state.mode === "search") search(state);
    else if (/^%?s/.test(state.input)) {
      const match = state.input.match(/^%?s\/([^/]*)\/([^/]*)(?:\/([gc]*))?$/);
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
