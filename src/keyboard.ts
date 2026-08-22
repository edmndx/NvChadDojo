export type CommandToken =
  | { kind: "key"; value: string }
  | { kind: "special"; value: string }
  | { kind: "text"; value: string };

export function displayKey(raw: string) {
  return raw
    .replaceAll("<Space>", "Space ")
    .replaceAll("<Enter>", "↵")
    .replaceAll("<Esc>", "Esc")
    .replaceAll("<S-Tab>", "Shift+Tab")
    .replaceAll("<Tab>", "Tab")
    .replace(/<C-([^>]+)>/g, "Ctrl+$1")
    .replace(/<A-([^>]+)>/g, "Alt+$1")
    .trim();
}

export function normalizeKey(event: KeyboardEvent) {
  if (event.key === "Escape") return "<Esc>";
  if (event.key === "Enter") return "<Enter>";
  if (event.key === "Tab") return event.shiftKey ? "<S-Tab>" : "<Tab>";
  if (event.ctrlKey && event.key === " ") return "<C-Space>";
  if (event.key === " ") return "<Space>";
  if (event.ctrlKey && event.key.length === 1)
    return `<C-${event.key.toLowerCase()}>`;
  if (event.altKey && event.key.length === 1)
    return `<A-${event.key.toLowerCase()}>`;
  return event.key.length === 1 ? event.key : "";
}

export const tokenizeSequence = tokenizeCommand;

export function commandTokens(
  sequence: string,
  insertedText?: string,
): CommandToken[] {
  const rawTokens = tokenizeSequence(sequence);
  if (
    rawTokens.some(
      (value, index) =>
        [":", "/", "?"].includes(value) &&
        (index === 0 || ["<Enter>", "<Esc>"].includes(rawTokens[index - 1])),
    )
  ) {
    const grouped: CommandToken[] = [];
    for (let index = 0; index < rawTokens.length; index++) {
      const value = rawTokens[index];
      const startsCommandLine =
        [":", "/", "?"].includes(value) &&
        (index === 0 || ["<Enter>", "<Esc>"].includes(rawTokens[index - 1]));
      if (!startsCommandLine) {
        grouped.push({
          kind: value.startsWith("<") ? "special" : "key",
          value,
        });
        continue;
      }
      grouped.push({ kind: "key", value });
      let text = "";
      while (
        index + 1 < rawTokens.length &&
        !["<Enter>", "<Esc>"].includes(rawTokens[index + 1])
      )
        text += rawTokens[++index];
      if (text) grouped.push({ kind: "text", value: text });
      if (index + 1 < rawTokens.length) {
        const special = rawTokens[++index];
        grouped.push({ kind: "special", value: special });
      }
    }
    return grouped;
  }
  if (insertedText) {
    const start = sequence.indexOf(insertedText);
    if (start >= 0) {
      return [
        ...commandTokens(sequence.slice(0, start)),
        { kind: "text", value: insertedText } as const,
        ...commandTokens(sequence.slice(start + insertedText.length)),
      ];
    }
  }
  return rawTokens.map((value) => ({
    kind: value.startsWith("<") ? ("special" as const) : ("key" as const),
    value,
  }));
}

export function canonicalPracticeSequence(key: string) {
  if (key === "Esc") return "<Esc>";
  if (key === "Enter") return "<Enter>";
  if (key === "Space") return "<Space>";
  if (key === "Tab") return "<Tab>";
  if (key === "Shift+Tab") return "<S-Tab>";
  const ctrl = key.match(/^Ctrl\+(\S+)(?:\s+(.+))?$/);
  if (ctrl) return `<C-${ctrl[1]}>${ctrl[2]?.replaceAll(" ", "") || ""}`;
  const alt = key.match(/^Alt\+(\S+)(?:\s+(.+))?$/);
  if (alt) return `<A-${alt[1]}>${alt[2]?.replaceAll(" ", "") || ""}`;
  if (key.startsWith("Space "))
    return `<Space>${key.slice(6).replaceAll(" ", "")}`;
  return key.replaceAll(" ", "");
}
import { tokenizeCommand } from "./vim/tokenize";
