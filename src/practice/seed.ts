import type { Lesson } from "../curriculum";
import { startingCursor } from "../lessonRuntime";
import { createVimState, type VimCursor } from "../vimEngine";
export function createLessonVimState(
  lesson: Lesson,
  lines: string[],
  cursor: VimCursor,
) {
  const state = createVimState(lines, cursor);
  if (lesson.id === "repeat-search") {
    state.lastSearch = "config";
    state.searchDirection = 1;
  }
  if (lesson.id === "reuse-search" || lesson.id === "substitution-review") {
    state.lastSearch = "old";
    state.searchDirection = 1;
  }
  if (lesson.id === "repeat-last-change" || lesson.id === "repeat-with-count")
    state.lastChange = ["x"];
  if (lesson.id === "yank-register" || lesson.id === "registers-review") {
    state.register = ["local yanked = true"];
    state.registerType = "line";
    state.registers['"'] = ["local yanked = true"];
    state.registers["0"] = ["local yanked = true"];
    state.registerTypes['"'] = "line";
    state.registerTypes["0"] = "line";
  }
  if (
    ["replay-macro", "repeat-macro", "macro-with-count"].includes(lesson.id)
  ) {
    state.macros.a = ["w"];
    state.lastMacro = "a";
  }
  if (lesson.id === "jump-list") {
    state.jumpList = [
      ...lines.map((_, line) => ({ line, col: 0 })),
      { ...cursor },
    ];
    state.jumpIndex = state.jumpList.length - 1;
  }
  if (lesson.id === "change-list") {
    state.changeList = [
      { line: 0, col: 0 },
      { line: Math.max(0, lines.length - 1), col: 0 },
    ];
    state.changeIndex = state.changeList.length - 1;
  }
  if (lesson.id === "last-edit") state.marks["."] = { line: 0, col: 0 };
  if (lesson.id === "jump-change-history-review") {
    state.changeList = [
      { line: 0, col: 0 },
      { line: 0, col: 0 },
    ];
    state.changeIndex = 1;
    state.marks["."] = { line: 0, col: 0 };
  }
  return state;
}

export function createLessonFixture(lesson: Lesson, lines: string[]) {
  const cursor = startingCursor(lesson, lines);
  return { cursor, state: createLessonVimState(lesson, lines, cursor) };
}
