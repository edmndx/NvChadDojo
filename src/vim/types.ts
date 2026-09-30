export type VimMode =
  | "normal"
  | "insert"
  | "replace"
  | "visual"
  | "visual-line"
  | "visual-block"
  | "search"
  | "command"
  | "confirm";
export type VimCursor = { line: number; col: number };
export type VimSnapshot = { lines: string[]; cursor: VimCursor };
export type VimRegisterType = "character" | "line" | "block";
export type VimFind = {
  char: string;
  direction: 1 | -1;
  till: boolean;
};
export type VimBlockInsert = {
  startLine: number;
  endLine: number;
  col: number;
  returnCol: number;
  offset: number;
};
export type VimConfirmation = {
  pattern: string;
  replacement: string;
  line: number;
  col: number;
  endLine: number;
  undoSaved: boolean;
};

export type VimState = {
  lines: string[];
  cursor: VimCursor;
  mode: VimMode;
  pending: string;
  count: string;
  register: string[];
  registerType: VimRegisterType;
  registers: Record<string, string[]>;
  registerTypes: Record<string, VimRegisterType>;
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
  lastFind?: VimFind;
  undo: VimSnapshot[];
  redo: VimSnapshot[];
  lastChange: string[];
  changeKeys: string[];
  blockInsert?: VimBlockInsert;
  confirmation?: VimConfirmation;
  jumpList: VimCursor[];
  jumpIndex: number;
  changeList: VimCursor[];
  changeIndex: number;
  viewportTop: number;
  transitionTrace: string[];
  message: string;
};
