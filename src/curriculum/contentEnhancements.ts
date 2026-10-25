import type { Lesson } from "./schema";

const genericTips = new Set([
  "These are native Vim motions and work inside NVChad.",
  "Keep your hands on the home row.",
]);

const genericNormalModeMistake =
  "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.";

const surfaceContext: Partial<Record<string, [string, string]>> = {
  "Windows, Buffers & Tabs": [
    "the editor workspace",
    "Use an existing buffer, window, or tab page; NVChad tabufline keys require tabufline to be enabled.",
  ],
  "Terminal Workflow": [
    "the editor or terminal named by the example",
    "Launch terminals from Normal mode; terminal-local keys require terminal focus. Alt-key forwarding depends on the terminal emulator.",
  ],
  "NvimTree Navigation": [
    "the editor or NvimTree panel named by the example",
    "Launch or focus NvimTree from the editor; use panel-local keys only while the tree is focused.",
  ],
  "NvimTree File Operations": [
    "the NvimTree panel",
    "Focus NvimTree and use the deterministic practice tree; filesystem prompts still require confirmation.",
  ],
  "Git Workflows": [
    "the indicated Gitsigns or LazyGit surface",
    "Use a repository with the seeded hunk state; LazyGit actions require the optional integration.",
  ],
  "Advanced Git Workflows": [
    "the indicated Gitsigns or LazyGit surface",
    "Use the seeded worktree/index state and confirm repository-changing prompts.",
  ],
  "Completion & Snippets": [
    "Insert mode with the completion menu open",
    "A configured completion or snippet source must provide candidates.",
  ],
  "Diagnostics & Quickfix": [
    "the editor, list, or Trouble panel named by the exercise",
    "Seeded diagnostics or list entries must exist; Trouble keys are panel-local.",
  ],
  "Telescope Workflows": [
    "the editor or Telescope picker named by the example",
    "Launch a picker from Normal mode; use picker-local keys only while that picker is focused.",
  ],
  "Coding Intelligence": [
    "an LSP-enabled buffer",
    "Attach a language server that supports the requested operation.",
  ],
  "Practical LSP Actions": [
    "an LSP-enabled buffer",
    "Attach a capable language server; signature help starts in Insert mode.",
  ],
  "LSP Refactoring": [
    "an LSP-enabled project",
    "Attach a capable language server and wait for project symbols and diagnostics.",
  ],
  "Sessions & Project Navigation": [
    "the editor workspace",
    "Use the seeded buffers, argument list, working directory, or session named by the exercise.",
  ],
  "Configure NVChad": [
    "the NVChad configuration surface",
    "Use the pinned NVChad v2.5 layout and restart or reload only when the exercise requests it.",
  ],
  "Command Discovery": [
    "the help, mappings, Mason, or plugin view named by the exercise",
    "Open the requested view first because many discovery keys are buffer-local.",
  ],
  "Multi-file Challenges": [
    "the named editor or plugin surface",
    "Complete every prompt, selection, confirmation, and return step in the composed workflow.",
  ],
};

function nativeContext(lesson: Lesson) {
  if (/^(v|V|<C-v>)/.test(lesson.sequence))
    return "Start in Normal mode, then enter Visual mode as shown";
  if (/^[:/?]/.test(lesson.sequence))
    return "Start in Normal mode, then open the command line or search as shown";
  if (/^(i|a|I|A|o|O|R|s)/.test(lesson.sequence))
    return "Normal mode, entering Insert or Replace mode as directed";
  return "Normal mode in the seeded practice buffer";
}

function lessonContext(lesson: Lesson): [string, string] {
  const surface = surfaceContext[lesson.group];
  if (surface) return surface;
  const clipboard =
    `${lesson.summary} ${lesson.task} ${lesson.keys.join(" ")}`.includes('"+');
  return [
    nativeContext(lesson),
    clipboard
      ? "A working Neovim clipboard provider is required for the system clipboard register."
      : "Start from the displayed fixture and cursor position.",
  ];
}

function likelyMistake(lesson: Lesson) {
  const command = lesson.sequence || lesson.keys.join(" then ");
  if (lesson.group === "Macros")
    return "Start recording with q followed by a register; press q to stop, then replay with @ followed by that register.";
  if (lesson.group === "Registers")
    return "Keep the register prefix attached to the complete yank, delete, or put command and verify its characterwise or linewise type.";
  if (surfaceContext[lesson.group])
    return "Check the starting mode and focused window, then complete each prompt or selection shown in the example.";
  if (/^[dcy][ia]/.test(command))
    return "Keep the order operator → inside/around → object; inside excludes delimiters while around includes them.";
  if (
    /^[fFtT]/.test(command) ||
    lesson.keys.some((key) => /^[fFtT;,]$/.test(key))
  )
    return "Use a character that occurs more than once: f/F land on it, t/T stop beside it, ; repeats, and , reverses direction.";
  if (/^(v|V|<C-v>)/.test(command))
    return "Visual selections include their endpoint; use o to switch the active end before applying the operator when needed.";
  if (/^[:/?]/.test(command))
    return "Complete the command or search with Enter; Escape cancels it without producing the expected state.";
  if (/^(i|a|I|A|o|O|R|s)/.test(command) || /^c./.test(command))
    return "Enter the requested text and press Escape; finishing in the wrong mode is not a completed edit.";
  if (/^[dcy]$/.test(command))
    return `The operator ${command} needs a motion or text object; an operator-pending state is not the finished action.`;
  if (lesson.group === "Search")
    return "Seed or complete the first search before repeating it, and verify the cursor reaches the intended match.";
  return `Run ${command} from the stated cursor position and verify both the resulting text and final mode.`;
}

export function enhanceLessonContent(lesson: Lesson): Lesson {
  if (lesson.id === "text-objects-mega-review" || lesson.reviewOnly)
    return lesson;

  const [context, prerequisite] = lessonContext(lesson);
  const detail =
    lesson.detail === lesson.summary
      ? `Expected result: ${lesson.challenge?.instruction || lesson.task}`
      : lesson.detail;
  const tip = genericTips.has(lesson.tip)
    ? `Context: ${context}. Prerequisite: ${prerequisite}`
    : lesson.tip;
  const commonMistake =
    !lesson.commonMistake || lesson.commonMistake === genericNormalModeMistake
      ? likelyMistake(lesson)
      : lesson.commonMistake;

  if (
    detail === lesson.detail &&
    tip === lesson.tip &&
    commonMistake === lesson.commonMistake
  )
    return lesson;
  return { ...lesson, detail, tip, commonMistake };
}
