import type { Lesson, PracticeSurface } from "../curriculum";
import { cloneVimState, type VimCursor, type VimState } from "../vimEngine";
import { surfaceFor, modeFor } from "./definition";
export type ScenarioState = {
  surface: PracticeSurface;
  mode: string;
  completed: boolean;
  lines: string[];
  cursor: VimCursor;
  message: string;
  trace: string[];
};

const outcomeBySurface: Record<PracticeSurface, string> = {
  editor: "Editor state updated",
  workspace: "Workspace state updated",
  terminal: "Terminal layout or mode updated",
  nvimtree: "Tree selection and filesystem prompt updated",
  telescope: "Picker selection updated",
  completion: "Completion or snippet selection updated",
  diagnostics: "Diagnostic or list position updated",
  lsp: "Language-server action completed",
  gitsigns: "Hunk and index state updated",
  lazygit: "LazyGit repository panel updated",
  trouble: "Trouble selection updated",
  configuration: "Configuration workflow advanced",
};

export function createScenarioState(lesson: Lesson): ScenarioState {
  const surface = surfaceFor(lesson);
  return {
    surface,
    mode: modeFor(lesson, surface),
    completed: false,
    lines: [`[${surface.toUpperCase()}]`, "Ready for the authored action"],
    cursor: { line: 1, col: 0 },
    message: `${surface.toUpperCase()} READY`,
    trace: [`${surface}:ready`],
  };
}

export function runScenario(lesson: Lesson, command: string): ScenarioState {
  const state = createScenarioState(lesson);
  const goal = (lesson.task || lesson.title).replace(/[.]$/, "");
  state.completed = true;
  state.lines = [
    `[${state.surface.toUpperCase()}] ${state.mode}`,
    `✓ ${outcomeBySurface[state.surface]}`,
    goal,
  ];
  state.cursor = { line: 1, col: 0 };
  state.message = `${state.surface.toUpperCase()} ACTION COMPLETE`;
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
  state.lines = [...scenario.lines];
  state.cursor = { ...scenario.cursor };
  state.message = scenario.message;
  state.transitionTrace.push(...scenario.trace);
  return state;
}
