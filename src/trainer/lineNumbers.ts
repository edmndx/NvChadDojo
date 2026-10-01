import type { LineNumberMode } from "../trainerSettings";
export function lineNumber(
  mode: LineNumberMode,
  index: number,
  cursorLine: number,
) {
  if (mode === "absolute") return String(index + 1);
  if (mode === "relative") return String(Math.abs(index - cursorLine));
  if (mode === "both")
    return String(
      index === cursorLine ? index + 1 : Math.abs(index - cursorLine),
    );
  return `${index + 1} ${Math.abs(index - cursorLine)}`;
}
