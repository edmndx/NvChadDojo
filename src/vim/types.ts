export type VimMode =
  | "normal"
  | "insert"
  | "replace"
  | "visual"
  | "visual-line"
  | "visual-block"
  | "search"
  | "command";
export type VimCursor = { line: number; col: number };
export type VimSnapshot = { lines: string[]; cursor: VimCursor };

export type VimState = {
  lines: string[];
  cursor: VimCursor;
  mode: VimMode;
  pending: string;
  count: string;
  register: string[];
  registers: Record<string, string[]>;
  activeRegister: string;
  recording: string;
  macroBuffer: string[];
  macros: Record<string, string[]>;
  marks: Record<string, VimCursor>;
  lastMacro: string;
  visualAnchor?: VimCursor;
  input: string;
  searchDirection: 1 | -1;
  lastSearch: string;
  undo: VimSnapshot[];
  redo: VimSnapshot[];
  lastChange: string[];
  changeKeys: string[];
  message: string;
};
