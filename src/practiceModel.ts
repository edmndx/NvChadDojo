import type {
  Lesson,
  LessonPractice,
  PracticeContext,
  PracticeSurface,
} from "./curriculum";
import {
  acceptedCommands,
  challengeSteps,
  runtimeProfileFor,
  supportsOutcomeValidation,
} from "./lessonRuntime";
import {
  cloneVimState,
  createVimState,
  type VimCursor,
  type VimState,
} from "./vimEngine";

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

const nativeStrictIds = new Set([
  "advanced-visual-block-review",
  "find-character",
  "till-character",
  "repeat-search",
  "quick-word-search",
  "visual-mode-operators",
  "switch-selection-ends",
  "visual-line-mode",
  "switch-visual-line-ends",
  "visual-line-operators",
  "block-insert",
  "block-append",
  "block-replace",
  "confirm-substitution",
  "reuse-search",
  "repeat-last-change",
  "repeat-with-count",
  "yank-register",
  "named-registers",
  "black-hole-register",
  "record-macro",
  "replay-macro",
  "repeat-macro",
  "macro-with-count",
  "jump-list",
  "change-list",
  "last-edit",
  "set-mark",
  "return-mark",
]);

const groupSurfaces: Record<string, PracticeSurface> = {
  "Files & Command Line": "workspace",
  "Windows, Buffers & Tabs": "workspace",
  "Terminal Workflow": "terminal",
  "Git Workflows": "gitsigns",
  "Advanced Git Workflows": "gitsigns",
  "NvimTree Navigation": "nvimtree",
  "NvimTree File Operations": "nvimtree",
  "Completion & Snippets": "completion",
  "Diagnostics & Quickfix": "diagnostics",
  "Telescope Workflows": "telescope",
  "Coding Intelligence": "lsp",
  "Practical LSP Actions": "lsp",
  "LSP Refactoring": "lsp",
  "Sessions & Project Navigation": "workspace",
  "Configure NVChad": "configuration",
  "NVChad Workflow": "configuration",
  "Command Discovery": "configuration",
  "Multi-file Challenges": "workspace",
};

function surfaceFor(lesson: Lesson): PracticeSurface {
  const profileSurface = runtimeProfileFor(lesson).surface;
  if (profileSurface) return profileSurface;
  if (lesson.id.startsWith("lazygit-")) return "lazygit";
  if (lesson.id.startsWith("trouble-")) return "trouble";
  return groupSurfaces[lesson.group] || "editor";
}

function modeFor(lesson: Lesson, surface: PracticeSurface) {
  if (/^(?:<Space>|:|<A-)/.test(lesson.sequence)) return "NORMAL";
  if (surface === "terminal") return "TERMINAL";
  if (surface === "completion") return "INSERT / COMPLETION";
  if (["nvimtree", "telescope", "lazygit", "trouble"].includes(surface))
    return `${surface.toUpperCase()} PANEL`;
  if (
    surface === "lsp" &&
    lesson.keys.includes("Ctrl+s") &&
    !lesson.sequence.startsWith("i")
  )
    return "INSERT / LSP";
  return "NORMAL";
}

function prerequisitesFor(
  lesson: Lesson,
  surface: PracticeSurface,
): readonly string[] | undefined {
  const requirements: string[] = [];
  if (surface === "lsp")
    requirements.push("An attached language server supporting this action");
  if (surface === "gitsigns")
    requirements.push("Gitsigns attached to a file in a Git worktree");
  if (surface === "lazygit")
    requirements.push("LazyGit and its Neovim integration installed");
  if (surface === "trouble") requirements.push("Trouble installed and open");
  if (surface === "nvimtree") requirements.push("Focus in the NvimTree panel");
  if (surface === "telescope")
    requirements.push("A Telescope picker with selectable results");
  if (/tabufline/i.test(`${lesson.summary} ${lesson.detail}`))
    requirements.push("NVChad tabufline enabled");
  if (lesson.keys.some((key) => key.startsWith("Alt+")))
    requirements.push("A terminal that forwards Alt key combinations");
  if (/clipboard/i.test(`${lesson.summary} ${lesson.detail} ${lesson.task}`))
    requirements.push("A working Neovim clipboard provider");
  return requirements.length ? requirements : undefined;
}

export function resolveLessonPractice(lesson: Lesson): LessonPractice {
  if (lesson.practice) return lesson.practice;
  if (lesson.id === "essential-command-reference") return { kind: "reference" };
  const surface = surfaceFor(lesson);
  const kind =
    surface === "editor" &&
    (supportsOutcomeValidation(lesson) || nativeStrictIds.has(lesson.id))
      ? "vim"
      : "scenario";
  const context: PracticeContext = {
    mode: modeFor(lesson, surface),
    surface,
    ...(prerequisitesFor(lesson, surface)
      ? { prerequisites: prerequisitesFor(lesson, surface) }
      : {}),
  };
  const steps = challengeSteps(lesson).map((sequence, index) => ({
    prompt:
      index === 0
        ? lesson.challenge?.instruction || lesson.task || lesson.title
        : `Complete step ${index + 1} of ${lesson.title}.`,
    context,
    acceptedSequences: acceptedCommands(lesson, sequence),
    expected: {
      state: kind === "vim" ? "vim-state" : `${surface}-state`,
      trace: [`${surface}:ready`, `${surface}:complete`],
    },
  }));
  return kind === "vim"
    ? { kind, steps }
    : { kind, surface, seed: `${lesson.id}:nvchad-2.5`, steps };
}

export function practiceContextLabel(lesson: Lesson) {
  const practice = resolveLessonPractice(lesson);
  if (practice.kind === "reference") return "REFERENCE";
  const context = practice.steps[0]?.context;
  return context?.mode || context?.surface.toUpperCase() || "NORMAL";
}

export function miniGameTargets(lesson: Lesson) {
  const practice = resolveLessonPractice(lesson);
  if (practice.kind === "reference") return [];
  return [
    ...new Set(
      practice.steps
        .flatMap((step) => step.acceptedSequences)
        .filter((sequence) =>
          isCompletePracticeSequence(
            sequence,
            practice.kind === "scenario" ? practice.surface : "editor",
          ),
        ),
    ),
  ];
}

export function isCompletePracticeSequence(
  sequence: string,
  surface: PracticeSurface = "editor",
) {
  if (!sequence.length || /…|\b(?:then|or)\b/i.test(sequence)) return false;
  if (
    /\{(?:key|motion|text|char|register|count|name|pattern|replacement|command|file|path)\}/i.test(
      sequence,
    )
  )
    return false;
  if (sequence.startsWith(":") && !/(?:<Enter>|<Esc>)/.test(sequence))
    return false;
  if (surface === "editor") {
    if (/^[/?]/.test(sequence) && !/<Enter>/.test(sequence)) return false;
    if (/^[dcyrfFtTmq@"gz[]$/.test(sequence)) return false;
    if (/^[ia][wWsSpP()[\]{}'"`]$/.test(sequence)) return false;
  }
  return true;
}

export function createLessonVimState(
  lesson: Lesson,
  lines: string[],
  cursor: VimCursor,
) {
  const state = createVimState(lines, cursor);
  const practice = resolveLessonPractice(lesson);
  if (
    practice.kind === "scenario" &&
    practice.steps[0]?.context.mode.startsWith("INSERT")
  ) {
    state.mode = "insert";
    state.cursor.col = Math.max(
      0,
      Math.min(lines[state.cursor.line]?.length || 0, cursor.col),
    );
  }
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
    state.register = ["const yanked = true;"];
    state.registerType = "line";
    state.registers['"'] = ["const yanked = true;"];
    state.registers["0"] = ["const yanked = true;"];
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
    state.changeIndex = state.changeList.length;
  }
  if (lesson.id === "last-edit") state.marks["."] = { line: 0, col: 0 };
  if (lesson.id === "jump-change-history-review") {
    state.changeList = [
      { line: 0, col: 0 },
      { line: Math.max(0, lines.length - 1), col: 0 },
    ];
    state.changeIndex = state.changeList.length;
    state.marks["."] = { line: Math.max(0, lines.length - 1), col: 0 };
  }
  return state;
}

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

export function isIntegrationSimulation(lesson: Lesson) {
  const practice = resolveLessonPractice(lesson);
  return practice.kind === "scenario" && practice.surface !== "editor";
}
