import type { VimCursor, VimState } from "./types";
import { tokenizeCommand } from "./tokenize";
import {
  createVimState,
  cloneVimState,
  lineText,
  count,
  clampCursor,
  snapshot,
  saveUndo,
  finishChange,
  writeRegister,
  readRegister,
  readRegisterType,
} from "./state";
import { move, findPair, findCharacter } from "./motions";
import {
  objectRange,
  extractRange,
  deleteRange,
  indentRange,
  joinLine,
  applyOperator,
} from "./editing";
import { search, confirmReplacement, applyCommandMode } from "./commands";
import { applyInsertMode, applyVisualMode } from "./modes";
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
  if (state.mode === "insert" || state.mode === "replace")
    return applyInsertMode(state, key);
  if (state.mode === "confirm") {
    confirmReplacement(state, key);
    return state;
  }
  if (state.mode === "search" || state.mode === "command")
    return applyCommandMode(state, key);
  if (state.mode.startsWith("visual")) return applyVisualMode(state, key);
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
          state.lines.splice(
            range.start.line,
            range.end.line - range.start.line + 1,
            "",
          );
          state.cursor = { ...range.start };
        } else deleteRange(state, range);
        if (op === "c") {
          state.cursor = {
            line: range.start.line,
            col: Math.min(
              state.lines[range.start.line].length,
              range.start.col,
            ),
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
