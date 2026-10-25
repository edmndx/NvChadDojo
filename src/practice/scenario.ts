import type { Lesson, PracticeSurface } from "../curriculum";
import { cloneVimState, type VimCursor, type VimState } from "../vimEngine";
import { surfaceFor, modeFor, resolveLessonPractice } from "./definition";
export type ScenarioState = {
  surface: PracticeSurface;
  mode: string;
  completed: boolean;
  lines: string[];
  cursor: VimCursor;
  message: string;
  trace: string[];
  preview?: { before: string[]; after: string[] };
};

export function createScenarioState(lesson: Lesson): ScenarioState {
  const surface = surfaceFor(lesson);
  return {
    surface,
    mode: modeFor(lesson, surface),
    completed: false,
    lines: [...lesson.code],
    cursor: { line: lesson.cursor?.[0] || 0, col: lesson.cursor?.[1] || 0 },
    message:
      "Practice the shortcut here; use it in Neovim to perform the action.",
    trace: [`${surface}:ready`],
  };
}

export function runScenario(lesson: Lesson, command: string): ScenarioState {
  const state = createScenarioState(lesson);
  const practice = resolveLessonPractice(lesson);
  const normalize = (keys: string) => keys.replaceAll(" ", "<Space>");
  const sequences =
    practice.kind === "reference"
      ? []
      : practice.steps.flatMap((step) => step.acceptedSequences);
  sequences.push(...(lesson.reviewItems || []).map((item) => item.sequence));
  if (
    !command ||
    !sequences.some((sequence) => normalize(sequence) === normalize(command))
  ) {
    state.message = "Sequence incomplete or not part of this exercise.";
    return state;
  }
  const example = lesson.reviewItems?.find(
    (item) => normalize(item.sequence) === normalize(command),
  );
  const goal = example?.description || lesson.task || lesson.title;
  // Completion means the authored sequence was entered, not that a plugin ran.
  state.completed = true;
  state.message = goal;
  if (example?.expectedCode)
    state.preview = {
      before: example.code || lesson.drills?.[0].code || lesson.code,
      after: example.expectedCode,
    };
  state.trace.push(`keys:${command}`, `${state.surface}:complete`);
  return state;
}

export function scenarioReached(
  expected: ScenarioState,
  actual: ScenarioState,
) {
  return (
    actual.completed &&
    actual.surface === expected.surface &&
    actual.mode === expected.mode &&
    JSON.stringify(actual.lines) === JSON.stringify(expected.lines) &&
    JSON.stringify(actual.trace) === JSON.stringify(expected.trace)
  );
}

export function scenarioAsVimState(base: VimState, scenario: ScenarioState) {
  const state = cloneVimState(base);
  if (
    scenario.completed &&
    scenario.preview &&
    JSON.stringify(base.lines) === JSON.stringify(scenario.preview.before)
  ) {
    state.lines = [...scenario.preview.after];
    state.cursor.line = Math.min(state.cursor.line, state.lines.length - 1);
    state.cursor.col = Math.min(
      state.cursor.col,
      Math.max(0, state.lines[state.cursor.line].length - 1),
    );
  }
  state.message = scenario.message;
  state.transitionTrace.push(...scenario.trace);
  return state;
}
