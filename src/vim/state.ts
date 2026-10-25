import type {
  VimCursor,
  VimRegisterType,
  VimSnapshot as Snapshot,
  VimState,
} from "./types";
export function createVimState(
  lines: string[],
  cursor: VimCursor = { line: 0, col: 0 },
): VimState {
  return {
    lines: lines.length ? [...lines] : [""],
    cursor: clampCursor(lines, cursor),
    mode: "normal",
    pending: "",
    count: "",
    register: [],
    registerType: "character",
    registers: {},
    registerTypes: {},
    activeRegister: '"',
    recording: "",
    macroBuffer: [],
    macros: {},
    marks: {},
    lastMacro: "",
    input: "",
    searchDirection: 1,
    lastSearch: "",
    undo: [],
    redo: [],
    lastChange: [],
    changeKeys: [],
    jumpList: [],
    jumpIndex: -1,
    changeList: [],
    changeIndex: -1,
    viewportTop: 0,
    transitionTrace: [],
    message: "NORMAL",
  };
}

export const cloneVimState = (state: VimState): VimState => ({
  ...state,
  lines: [...state.lines],
  cursor: { ...state.cursor },
  register: [...state.register],
  registers: Object.fromEntries(
    Object.entries(state.registers).map(([name, value]) => [name, [...value]]),
  ),
  registerTypes: { ...state.registerTypes },
  macroBuffer: [...state.macroBuffer],
  macros: Object.fromEntries(
    Object.entries(state.macros).map(([name, value]) => [name, [...value]]),
  ),
  marks: Object.fromEntries(
    Object.entries(state.marks).map(([name, value]) => [name, { ...value }]),
  ),
  undo: [...state.undo],
  redo: [...state.redo],
  lastChange: [...state.lastChange],
  changeKeys: [...state.changeKeys],
  visualAnchor: state.visualAnchor ? { ...state.visualAnchor } : undefined,
  lastFind: state.lastFind ? { ...state.lastFind } : undefined,
  blockInsert: state.blockInsert ? { ...state.blockInsert } : undefined,
  confirmation: state.confirmation ? { ...state.confirmation } : undefined,
  jumpList: state.jumpList.map((cursor) => ({ ...cursor })),
  changeList: state.changeList.map((cursor) => ({ ...cursor })),
  transitionTrace: [...state.transitionTrace],
});
export const snapshot = (state: VimState): Snapshot => ({
  lines: [...state.lines],
  cursor: { ...state.cursor },
});
export const lineText = (state: VimState) =>
  state.lines[state.cursor.line] || "";
export const count = (state: VimState) => Math.max(1, Number(state.count) || 1);

export function clampCursor(lines: string[], cursor: VimCursor): VimCursor {
  const safe = lines.length ? lines : [""];
  const line = Math.max(0, Math.min(safe.length - 1, cursor.line));
  return {
    line,
    col: Math.max(0, Math.min(Math.max(0, safe[line].length - 1), cursor.col)),
  };
}

export function saveUndo(state: VimState) {
  state.undo.push(snapshot(state));
  state.redo = [];
}
export function finishChange(state: VimState, keys: string[]) {
  state.lastChange = [...keys];
  state.changeKeys = [];
  state.marks["."] = { ...state.cursor };
  state.changeList.push({ ...state.cursor });
  state.changeIndex = state.changeList.length;
}
export function writeRegister(
  state: VimState,
  value: string[],
  yank = false,
  type: VimRegisterType = "character",
) {
  const name = state.activeRegister;
  if (name !== "_") {
    state.register = [...value];
    state.registerType = type;
    state.registers['"'] = [...value];
    state.registerTypes['"'] = type;
    if (name !== "")
      state.registers[name.toLowerCase()] =
        name !== name.toLowerCase()
          ? [...(state.registers[name.toLowerCase()] || []), ...value]
          : [...value];
    state.registerTypes[name.toLowerCase()] = type;
    if (yank) {
      state.registers["0"] = [...value];
      state.registerTypes["0"] = type;
    }
  }
  state.activeRegister = '"';
}
export function readRegister(state: VimState) {
  return [...(state.registers[state.activeRegister] || state.register)];
}

export function readRegisterType(state: VimState) {
  return state.registerTypes[state.activeRegister] || state.registerType;
}

export function sameOutcome(a: VimState, b: VimState) {
  return (
    a.cursor.line === b.cursor.line &&
    a.cursor.col === b.cursor.col &&
    a.mode === b.mode &&
    a.pending === b.pending &&
    a.lines.length === b.lines.length &&
    a.lines.every((line, i) => line === b.lines[i]) &&
    a.registerType === b.registerType &&
    JSON.stringify(a.register) === JSON.stringify(b.register) &&
    JSON.stringify(a.registers) === JSON.stringify(b.registers) &&
    JSON.stringify(a.registerTypes) === JSON.stringify(b.registerTypes) &&
    a.activeRegister === b.activeRegister &&
    a.lastSearch === b.lastSearch &&
    a.searchDirection === b.searchDirection &&
    JSON.stringify(a.lastFind) === JSON.stringify(b.lastFind) &&
    JSON.stringify(a.macros) === JSON.stringify(b.macros) &&
    a.recording === b.recording &&
    a.lastMacro === b.lastMacro &&
    JSON.stringify(a.marks) === JSON.stringify(b.marks) &&
    JSON.stringify(a.undo) === JSON.stringify(b.undo) &&
    JSON.stringify(a.redo) === JSON.stringify(b.redo) &&
    JSON.stringify(a.lastChange) === JSON.stringify(b.lastChange) &&
    JSON.stringify(a.jumpList) === JSON.stringify(b.jumpList) &&
    a.jumpIndex === b.jumpIndex &&
    JSON.stringify(a.changeList) === JSON.stringify(b.changeList) &&
    a.changeIndex === b.changeIndex &&
    a.viewportTop === b.viewportTop &&
    a.message === b.message &&
    JSON.stringify(a.transitionTrace) === JSON.stringify(b.transitionTrace)
  );
}
