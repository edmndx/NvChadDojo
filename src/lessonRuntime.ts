import type { Lesson } from "./curriculum";
import {
  lessonRuntimeProfiles,
  type LessonRuntimeProfile,
} from "./curriculum/runtimeProfiles.generated";
import type { VimCursor } from "./vimEngine";

const runtimeProfiles: Record<string, LessonRuntimeProfile> =
  lessonRuntimeProfiles;
export const runtimeProfileFor = (lesson: Lesson) =>
  runtimeProfiles[lesson.id] || {
    outcomeValidation: false,
    visual: false,
  };

export function startingCursor(lesson: Lesson, lines: string[]): VimCursor {
  const requested = lesson.challenge?.cursor || lesson.cursor;
  if (requested) {
    const line = Math.max(0, Math.min(lines.length - 1, requested[0]));
    return {
      line,
      col: Math.max(0, Math.min((lines[line] || "").length, requested[1])),
    };
  }
  const [profileLine, profileCol] = runtimeProfileFor(lesson).cursor || [0, 0];
  const line = Math.max(0, Math.min(lines.length - 1, profileLine));
  return {
    line,
    col: Math.max(0, Math.min((lines[line] || "").length, profileCol)),
  };
}

function reviewSequence(key: string, replacement: string) {
  const command = key.replace(/<Esc>$/, "");
  return /^(?:c(?:[ia].|[weWEsSpP$0^_]|c)|[iaIAsRoO])$/.test(command)
    ? `${command}${replacement}<Esc>`
    : key;
}

export function challengeSteps(lesson: Lesson) {
  const replacement = lesson.challenge?.replacement || "nvchad";
  const specific: Record<string, string[]> = {
    "insert-mode": [`i${replacement}<Esc>`, `a${replacement}<Esc>`],
    "insert-line-ends": [`I${replacement}<Esc>`, `A${replacement}<Esc>`],
    "opening-lines": [`o${replacement}<Esc>`, `O${replacement}<Esc>`],
    "small-edits": ["x", `s${replacement}<Esc>`, `r${replacement[0] || "n"}`],
    "command-line-mode": [":set number<Enter>", ":<Esc>"],
    "tag-objects": [`cit${replacement}<Esc>`, "dat"],
    "sentence-objects": [`cis${replacement}<Esc>`, "das"],
    "parentheses-objects": [`ci(${replacement}<Esc>`, "da("],
    "square-bracket-objects": [`ci[${replacement}<Esc>`, "da["],
  };
  if (specific[lesson.id]) return specific[lesson.id];
  if (
    lesson.reviewOnly &&
    lesson.id !== "text-objects-mega-review" &&
    lesson.reviewItems?.length
  )
    return [
      ...new Set(
        lesson.reviewItems.map((item) =>
          reviewSequence(item.sequence, replacement),
        ),
      ),
    ];
  if (lesson.reviewOnly)
    return lesson.keys.map((key) => reviewSequence(key, replacement));
  return [reviewSequence(lesson.sequence, replacement)];
}

export function acceptedCommands(lesson: Lesson, required: string) {
  const canonicalize = (sequence: string) =>
    sequence.replaceAll(" ", "<Space>");
  if (lesson.challenge?.alternatives?.length)
    return lesson.challenge.alternatives.map(canonicalize);
  return [canonicalize(required)];
}

export function supportsOutcomeValidation(lesson: Lesson) {
  return runtimeProfileFor(lesson).outcomeValidation;
}

export function commandState(typed: string, lesson: Lesson) {
  if (!typed) return "NORMAL";
  const profile = runtimeProfileFor(lesson);
  if (profile.surface === "completion") return "INSERT / COMPLETION";
  if (profile.surface === "terminal")
    return typed.includes("<C-x>") ? "NORMAL" : "TERMINAL";
  if (profile.surface) return profile.surface.toUpperCase();
  if (/^[:/?]/.test(typed)) return "COMMAND";
  if (profile.visual && /^(v|V|<C-v>)/.test(typed)) return "VISUAL";
  if (/^[dcy]$/.test(typed)) return "OPERATOR PENDING";
  if (/^[><=]$/.test(typed)) return "INDENT PENDING";
  if (/^[m`']$/.test(typed)) return "MARK PENDING";
  if (/^[dcy][ia]$/.test(typed)) return "OBJECT PENDING";
  if (typed.startsWith("R") && !typed.includes("<Esc>")) return "REPLACE";
  if (
    (/^(i|a|I|A|o|O|s)/.test(typed) || /^c.+/.test(typed)) &&
    !typed.includes("<Esc>")
  )
    return "INSERT";
  if (/^q[a-z]/.test(typed)) return "RECORDING";
  return "NORMAL";
}

export function challengeInstruction(
  lesson: Lesson,
  required: string,
  fallback: string,
) {
  if (lesson.id === "tag-objects")
    return required.startsWith("cit")
      ? `Change inside the tag with cit. Type “${lesson.challenge?.replacement || "Save"}”, then press Esc to return to Normal mode.`
      : "Delete the complete tag pair with dat.";
  if (!lesson.reviewOnly) return fallback;
  const searchPrompts: Record<string, string> = {
    "/return<Enter>": "Search forward for return.",
    "/return<Enter>n": "Search for return, then visit the next match.",
    "/return<Enter>N":
      "Search for return, then visit the match in the opposite direction.",
    "*": "Search forward for the word under the cursor.",
    "#": "Search backward for the word under the cursor.",
  };
  if (searchPrompts[required]) return searchPrompts[required];
  const match = required.match(/^([dc])([ia])([w{}"p])/);
  if (!match) return fallback;
  const actions: Record<string, string> = { d: "Delete", c: "Change" };
  const scopes: Record<string, string> = { i: "inside", a: "around" };
  const objects: Record<string, string> = {
    w: "the current word",
    "{": "the surrounding braces",
    "}": "the surrounding braces",
    '"': "the surrounding quotes",
    p: "the current paragraph",
  };
  const replacement =
    lesson.challenge?.replacement ||
    (required.includes("nvchad") ? "nvchad" : "");
  return `${actions[match[1]]} ${scopes[match[2]]} ${objects[match[3]]}. Choose the shortest text-object command.${match[1] === "c" && replacement ? ` Enter “${replacement}” and return to Normal mode.` : ""}`;
}
