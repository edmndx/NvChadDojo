import type { Lesson } from "../../curriculum";
import { applyVimCommand, applyVimTokens } from "../../vimEngine";
import {
  canonicalPracticeSequence,
  commandTokens,
  tokenizeSequence,
} from "../../keyboard";
import { commandState } from "../../lessonRuntime";
import {
  createLessonFixture,
  isIntegrationSimulation,
  resolveLessonPractice,
  runScenario,
  scenarioAsVimState,
} from "../../practiceModel";
const meanings: Record<string, string> = {
  h: "move left",
  j: "move down",
  k: "move up",
  l: "move right",
  w: "move to the next word",
  e: "move to the end of a word",
  b: "move back a word",
  W: "move to the next WORD",
  E: "move to the end of a WORD",
  B: "move back a WORD",
  i: "enter Insert mode before the cursor",
  a: "enter Insert mode after the cursor",
  I: "insert at the first non-blank character",
  A: "append at the end of the line",
  R: "overwrite text in Replace mode",
  Esc: "return to Normal mode",
  o: "open a new line below",
  O: "open a new line above",
  s: "substitute the character under the cursor",
  x: "delete the character under the cursor",
  r: "replace one character",
  "0": "move to the start of the line",
  _: "move to the first non-blank character",
  $: "move to the end of the line",
  f: "find a character forward",
  F: "find a character backward",
  t: "move until a character forward",
  T: "move until a character backward",
  ";": "repeat the latest character search",
  d: "delete using the following target",
  c: "change using the following target",
  y: "yank using the following target",
  p: "put after or below the cursor",
  P: "put before or above the cursor",
  gg: "jump to the first line",
  G: "jump to the last line",
  "}": "jump to the next paragraph",
  "{": "jump to the previous paragraph",
  "/": "search forward",
  "?": "search backward",
  n: "repeat the latest search",
  N: "repeat search in the opposite direction",
  "*": "search forward for the current word",
  "#": "search backward for the current word",
  v: "enter characterwise Visual mode",
  V: "enter linewise Visual mode",
  ".": "repeat the latest change",
  "%": "jump to the matching delimiter",
  u: "undo the latest change",
  "Ctrl+r": "redo the latest undo",
  ">>": "indent the current line",
  "<<": "un-indent the current line",
  "=": "recalculate indentation",
  J: "join the following line with a space",
  gJ: "join without adding a space",
  m: "set a named mark",
  "`a": "jump to the exact position of mark a",
  "'a": "jump to the line containing mark a",
  ":w": "write the buffer and keep editing",
  ":wq": "write the buffer and exit",
  ":q": "exit an unchanged buffer",
  ":q!": "discard changes and exit",
  Enter: "execute the command line",
};

const contextualMeanings: Record<string, Record<string, string>> = {
  "Visual Editing": {
    o: "move to the opposite end of the Visual selection",
    d: "delete the Visual selection",
    c: "change the Visual selection",
    y: "yank the Visual selection",
  },
  "Text Objects - Bracket Pairs": {
    i: "select inside the text object's delimiters",
    a: "select around the text object, including delimiters",
  },
  "Windows, Buffers & Tabs": {
    ":ls": "list loaded buffers",
    ":tabs": "list native tab pages",
    "Ctrl+w s": "split horizontally",
    "Ctrl+w v": "split vertically",
    "Ctrl+w =": "equalize split sizes",
    "Ctrl+w c": "close the current window",
    "Ctrl+w o": "keep only the current window",
    ":tabnew": "create a native tab page",
    gt: "go to the next tab page",
    gT: "go to the previous tab page",
    ":tabclose": "close the current tab page",
  },
  "Terminal Workflow": {
    i: "send input to the terminal process",
    "Ctrl+x": "leave Terminal mode",
    "Space x": "close the terminal buffer",
    exit: "end the shell process",
  },
  "NvimTree Navigation": {
    Enter: "open the selected tree node",
    o: "open the selected tree node",
    P: "move to the parent directory",
    "-": "change the tree root upward",
    "Ctrl+v": "open in a vertical split",
    "Ctrl+x": "open in a horizontal split",
    "Ctrl+t": "open in a new tab page",
    Tab: "preview the selected file",
    f: "start a live tree filter",
    F: "clear the live tree filter",
    "g?": "show NvimTree mappings",
  },
  "NvimTree File Operations": {
    a: "create a file or directory",
    r: "rename the selected path",
    e: "rename only the basename",
    c: "copy the selected item",
    x: "cut the selected item",
    p: "paste at the selected destination",
    d: "delete after confirmation",
    D: "send the item to configured trash",
    Enter: "open the selected file",
    i: "enter Insert mode in the opened file",
    Esc: "return to Normal mode",
    "Ctrl+s": "save the opened file",
  },
  "Git Workflows": {
    "]c": "go to the next changed hunk",
    "[c": "go to the previous changed hunk",
    ih: "select the current hunk",
    Space: "toggle the selected LazyGit file",
    a: "stage all files in LazyGit",
    c: "commit staged changes in LazyGit",
    p: "pull in LazyGit",
    P: "push in LazyGit",
    S: "open LazyGit stash options",
    q: "quit LazyGit",
  },
  "Completion & Snippets": {
    "Ctrl+n": "select the next completion item",
    "Ctrl+p": "select the previous completion item",
    "Ctrl+d": "scroll completion documentation up",
    "Ctrl+f": "scroll completion documentation down",
    "Ctrl+Space": "request completion",
    "Ctrl+e": "close completion without accepting",
    Enter: "confirm the selected completion",
    Tab: "select completion or jump to the next snippet stop",
    "Shift+Tab": "select backward or jump to the previous snippet stop",
  },
  "Diagnostics & Quickfix": {
    "]d": "go to the next diagnostic",
    "[d": "go to the previous diagnostic",
    gra: "request an LSP code action",
    Enter: "jump to the selected Trouble result",
    "Ctrl+s": "open the Trouble result in a split",
    "Ctrl+v": "open the Trouble result in a vertical split",
    p: "preview the Trouble result",
    q: "close Trouble",
  },
  "Telescope Workflows": {
    "Ctrl+n": "select the next picker result",
    "Ctrl+p": "select the previous picker result",
    Enter: "open the selected result",
    "Ctrl+c": "close Telescope",
    "Ctrl+x": "open the result in a horizontal split",
    "Ctrl+v": "open the result in a vertical split",
    "Ctrl+t": "open the result in a new tab page",
    Tab: "toggle selection for this result",
    "Shift+Tab": "toggle selection and move backward",
    "Ctrl+q": "send filtered results to quickfix",
  },
  "LSP Refactoring": {
    gd: "go to the symbol definition",
    grr: "list semantic references",
    K: "show hover documentation",
    grn: "rename the symbol across the project",
    gra: "request a code action",
    "]d": "check the next diagnostic after the refactor",
  },
  "Sessions & Project Navigation": {
    "Ctrl+^": "switch to the alternate file",
    "Space fo": "open Telescope's recent-file picker",
  },
  "Advanced Git Workflows": {
    v: "select only the changed lines to act on",
    "Space hs": "stage the selected hunk or range",
    "Space hr": "reset the selected hunk or range",
    "Space hd": "diff working tree against the index",
    "Space hD": "diff the buffer against HEAD",
    "Space hu": "unstage the current staged hunk with stage_hunk",
    M: "open LazyGit conflict options",
    h: "go to the previous conflict",
    l: "go to the next conflict",
    j: "go to the next conflict hunk",
    k: "go to the previous conflict hunk",
    Space: "pick the selected conflict hunk",
    b: "pick both conflict hunks",
    A: "amend the selected commit",
    z: "undo the latest repository action",
    Z: "redo the repository action",
  },
  "Command Discovery": {
    "Ctrl+]": "follow the help tag under the cursor",
    "Ctrl+o": "jump back from followed help",
    "Space wK": "show all WhichKey mappings",
    "Space wk": "query a mapping prefix",
    "Space ch": "open NvCheatsheet",
    "g?": "show NvimTree's local mappings",
    "?": "show plugin-local help",
  },
  "Multi-file Challenges": {
    "Space fw": "search project text",
    "Ctrl+n": "move to the next result",
    "Ctrl+v": "open the result vertically",
    grn: "rename the symbol across files",
    grr: "inspect all references",
    "Space fm": "format the refactor",
    "]d": "check the next diagnostic",
    "Space hp": "preview the current hunk",
    "Space hS": "stage every hunk in the buffer",
    "Space gt": "inspect repository status",
    ":LazyGit": "open the repository workflow",
    c: "commit staged changes",
  },
};

export function describeKey(lesson: Lesson, key: string) {
  if (contextualMeanings[lesson.group]?.[key])
    return contextualMeanings[lesson.group][key];
  if (
    key.length === 1 &&
    [
      "Practical LSP Actions",
      "NVChad Workflow",
      "Coding Intelligence",
      "Macros",
      "Substitution",
      "Advanced Visual Block",
    ].includes(lesson.group)
  )
    return lesson.summary.replace(/[.]$/, "").toLowerCase();
  if (meanings[key]) return meanings[key];
  if (/^[dcya][iwap{"(]/.test(key))
    return `${key[0] === "d" ? "delete" : key[0] === "c" ? "change" : key[0] === "y" ? "yank" : "select"} ${key[1] === "i" ? "inside" : "around"} the target text object`;
  return lesson.summary.replace(/\.$/, "").toLowerCase();
}

export function exampleFor(lesson: Lesson, index: number, sequence: string) {
  const drill = (lesson.drills || [{ goal: lesson.task, code: lesson.code }])[
    index % (lesson.drills?.length || 1)
  ];
  const { cursor, state: initial } = createLessonFixture(lesson, drill.code);
  const practice = resolveLessonPractice(lesson);
  const result =
    lesson.id === "text-objects-mega-review"
      ? applyVimCommand(drill.code, cursor, sequence)
      : practice.kind === "vim"
        ? applyVimTokens(initial, tokenizeSequence(sequence))
        : practice.kind === "scenario"
          ? scenarioAsVimState(initial, runScenario(lesson, sequence))
          : initial;
  const simulated = practice.kind !== "reference";
  const integrationSimulation = isIntegrationSimulation(lesson);
  const modeLabel = simulated
    ? result.mode.toUpperCase()
    : commandState(sequence, lesson);
  const message = integrationSimulation
    ? `${result.message}. NVChad v2.5 simulation.`
    : result.message === modeLabel
      ? ""
      : result.message || "Command applied to the buffer.";
  const tokens = commandTokens(sequence, lesson.challenge?.replacement);
  const sequenceDelay = Math.min(3.2, 0.42 + tokens.length * 0.19);
  return { drill, cursor, result, modeLabel, message, tokens, sequenceDelay };
}
export function keyGuideItems(lesson: Lesson) {
  return (
    lesson.reviewItems ||
    lesson.keys.map((key) => ({
      key,
      description: "",
      sequence: lesson.reviewOnly
        ? canonicalPracticeSequence(key)
        : lesson.sequence,
    }))
  );
}
export function keyGuideSequence(item: { key: string; sequence: string }) {
  const keySequence = canonicalPracticeSequence(item.key);
  const concreteShortcut =
    /^(?:Ctrl\+|Alt\+|Space(?: |$)|Tab$|Shift\+Tab$|Enter$|Esc$)/.test(
      item.key,
    );
  const sequence =
    concreteShortcut && !item.sequence.includes(keySequence)
      ? keySequence
      : item.sequence;
  const relatedExample = !sequence.includes(keySequence);
  return { sequence, relatedExample };
}
