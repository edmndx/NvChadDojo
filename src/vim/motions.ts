import type { VimState } from "./types";
import { lineText, count, clampCursor } from "./state";
function wordSpans(text: string, big: boolean) {
  return [...text.matchAll(big ? /\S+/g : /\w+|[^\w\s]+/g)].map((match) => ({
    start: match.index,
    end: (match.index || 0) + match[0].length - 1,
  }));
}
export function wordEnd(text: string, col: number, big = false) {
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

export function move(state: VimState, key: string, amount = count(state)) {
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
      while (next < state.lines.length && state.lines[next] === "") next++;
      if (state.lines[state.cursor.line] !== "") {
        while (next < state.lines.length && state.lines[next] !== "") next++;
        while (next < state.lines.length && state.lines[next] === "") next++;
      }
      state.cursor.line = Math.min(state.lines.length - 1, next);
      state.cursor.col = 0;
    } else if (key === "{") {
      let previousBlank = -1;
      for (let index = state.cursor.line - 1; index >= 0; index--)
        if (state.lines[index] === "") {
          previousBlank = index;
          break;
        }
      state.cursor.line = Math.max(0, previousBlank);
      state.cursor.col = 0;
    }
    state.cursor = clampCursor(state.lines, state.cursor);
  }
  state.count = "";
}

export function findPair(state: VimState) {
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

export function findCharacter(
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
