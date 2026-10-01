import type { Lesson } from "../../curriculum";
const followUps: Record<string, [string, string, string]> = {
  "Basic Vim": [
    "Build the Normal-mode habit",
    "Return to Normal mode whenever you finish entering text. From there, motions stay predictable and every operator is available.",
    "NVChad keeps the active mode visible in its statusline.",
  ],
  "Insert Like a Pro": [
    "Enter Insert mode at the destination",
    "Choose the command that places the cursor where typing should begin.",
    "These native commands behave the same inside NVChad buffers.",
  ],
  "Essential Motions": [
    "Let punctuation define your motion",
    "Lowercase motions treat punctuation as boundaries; uppercase WORD motions treat whitespace as the boundary.",
    "Plugin input fields may capture keys differently from editing buffers.",
  ],
  "Basic Operators": [
    "Say the edit as verb plus target",
    "Compose an operator with a motion or text object.",
    "This grammar transfers to any standard Neovim setup.",
  ],
  "Editing Safety": [
    "Experiment without fear",
    "Make a small change, undo it, then redo it so the history model becomes predictable.",
    "Undo and redo are native Neovim commands inside every NVChad buffer.",
  ],
  Search: [
    "Turn matches into destinations",
    "Start one search, then travel with n and N.",
    "Use Space f w for project-wide live grep in NVChad.",
  ],
  "Visual Editing": [
    "Select first when the range is unusual",
    "Visual mode is clearest for irregular ranges.",
    'Use the system clipboard register when text must leave Neovim: "+y.',
  ],
  "Indent & Join": [
    "Reshape lines without retyping",
    "Use indentation operators for structure and J when two physical lines should become one.",
    "Space f m remains the NVChad workflow for formatter-driven project style.",
  ],
  "Files & Command Line": [
    "Know the safe exit path",
    "Write deliberately, and only use :q! when discarding changes is intentional.",
    "NVChad also maps Ctrl+s to save and Space x to close a buffer.",
  ],
  "Vim Modes": [
    "Let the mode define what keys mean",
    "Use the statusline to confirm whether keys will edit text, select text, or execute a command.",
    "NVChad keeps the active mode visible in its statusline.",
  ],
  "Windows, Buffers & Tabs": [
    "Choose the right workspace container",
    "Use buffers for files, windows for simultaneous views, and tab pages for separate layouts.",
    "NVChad's tabufline manages buffers inside each tab page.",
  ],
  "Terminal Workflow": [
    "Keep shell work inside the editor",
    "Use a fresh terminal for one-off work and a toggleable terminal for a recurring process.",
    "NVChad supports horizontal, vertical, and floating terminal layouts.",
  ],
  "NvimTree Navigation": [
    "Navigate the project without losing context",
    "Use the tree for structural browsing and Telescope when you already know part of a filename.",
    "NvimTree mappings apply only while its tree buffer is focused.",
  ],
  "NvimTree File Operations": [
    "Change project structure deliberately",
    "Create, rename, move, or remove items from the tree where their destination is visible.",
    "Confirm destructive prompts and save edited buffers before closing them.",
  ],
  "Git Workflows": [
    "Use the narrowest Git interface that fits",
    "Use Gitsigns for the current buffer and LazyGit when the task spans the repository.",
    "Gitsigns shortcuts are custom mappings; LazyGit is optional.",
  ],
  "Completion & Snippets": [
    "Let visible context decide what Tab means",
    "Use completion keys only while entering text; once back in Normal mode, Tab returns to buffer navigation.",
    "NVChad combines nvim-cmp with LuaSnip for this context-sensitive behavior.",
  ],
  "Diagnostics & Quickfix": [
    "Turn errors into a navigable queue",
    "Use location lists for one window and quickfix for project-wide results; add Trouble when a richer view helps.",
    "Native lists work without Trouble, while Space x mappings require the optional plugin.",
  ],
  "Telescope Workflows": [
    "Search first, then choose the destination",
    "Pick the narrowest data source, filter it, and decide whether the result belongs in the current window, a split, or a tab.",
    "NVChad supplies picker launch mappings; movement and layout keys are Telescope-local.",
  ],
  "LSP Refactoring": [
    "Understand, change, then verify",
    "Inspect definitions and references before semantic edits, then format and re-check diagnostics afterward.",
    "These actions require an attached language server with the relevant capability.",
  ],
  "Sessions & Project Navigation": [
    "Preserve project context intentionally",
    "Use scoped directories, argument lists, alternate files, and sessions according to how much state must survive.",
    "Session files restore editor state; they do not replace version control.",
  ],
  "Advanced Git Workflows": [
    "Separate staging mistakes from lost edits",
    "Use Gitsigns for precise buffer changes and LazyGit for conflicts or history-changing repository actions.",
    "Gitsigns mappings are suggested custom keys; LazyGit undo cannot recover discarded working-tree text.",
  ],
  "Command Discovery": [
    "Verify instead of guessing",
    "Read local help and inspect the source of a mapping whenever a key behaves differently than expected.",
    "NVChad, plugins, and your mappings can all define context-sensitive shortcuts.",
  ],
  "Multi-file Challenges": [
    "Combine tools into one development loop",
    "Treat search, refactoring, diagnostics, formatting, review, and commit as one repeatable workflow.",
    "Capstones intentionally reuse commands from earlier categories without redefining them.",
  ],
};

export function LessonFollowUp({ lesson }: { lesson: Lesson }) {
  const note = followUps[lesson.group] || [
    lesson.group.startsWith("Text Objects")
      ? "Target structure from anywhere inside it"
      : `Put ${lesson.title} into a real edit`,
    lesson.tip,
    lesson.commonMistake ||
      "Practice slowly until the command and result feel like one action.",
  ];
  return (
    <section className="lesson-note">
      <h2>
        <span>#</span> {note[0]}
      </h2>
      <p className="lesson-recap">{lesson.summary}</p>
      <h3>When to use it</h3>
      <p>{note[1]}</p>
      <h3>NVChad connection</h3>
      <p>{note[2]}</p>
    </section>
  );
}
