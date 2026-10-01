import type {
  Lesson,
  LessonPractice,
  PracticeContext,
  PracticeSurface,
} from "../curriculum";
import {
  acceptedCommands,
  challengeSteps,
  runtimeProfileFor,
  supportsOutcomeValidation,
} from "../lessonRuntime";
const nativeStrictIds = new Set([
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

export function surfaceFor(lesson: Lesson): PracticeSurface {
  const profileSurface = runtimeProfileFor(lesson).surface;
  if (profileSurface) return profileSurface;
  if (lesson.id.startsWith("lazygit-")) return "lazygit";
  if (lesson.id.startsWith("trouble-")) return "trouble";
  return groupSurfaces[lesson.group] || "editor";
}

export function modeFor(lesson: Lesson, surface: PracticeSurface) {
  if (surface === "terminal") return "TERMINAL";
  if (surface === "completion") return "INSERT / COMPLETION";
  if (["nvimtree", "telescope", "lazygit", "trouble"].includes(surface))
    return `${surface.toUpperCase()} PANEL`;
  if (surface === "lsp" && lesson.keys.includes("Ctrl+s"))
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
    supportsOutcomeValidation(lesson) || nativeStrictIds.has(lesson.id)
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
        .filter(isCompletePracticeSequence),
    ),
  ];
}

export function isCompletePracticeSequence(sequence: string) {
  if (!sequence.length || /…|\b(?:then|or)\b/i.test(sequence)) return false;
  if (
    /\{(?:key|motion|text|char|register|count|name|pattern|replacement|command|file|path)\}/i.test(
      sequence,
    )
  )
    return false;
  if (sequence.startsWith(":") && !/(?:<Enter>|<Esc>)/.test(sequence))
    return false;
  if (/^[/?]/.test(sequence) && !/<Enter>/.test(sequence)) return false;
  if (/^[dcyrfFtTmq@"gz[]$/.test(sequence)) return false;
  if (/^[ia][wWsSpP()[\]{}'"`]$/.test(sequence)) return false;
  return true;
}

export function isIntegrationSimulation(lesson: Lesson) {
  const practice = resolveLessonPractice(lesson);
  return practice.kind === "scenario" && practice.surface !== "editor";
}
