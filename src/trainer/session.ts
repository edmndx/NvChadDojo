import type { Lesson } from "../curriculum";
import {
  cloneVimState,
  createVimState,
  type VimCursor,
  type VimState,
} from "../vimEngine";

export type TrainerTab = "challenge" | "minigame" | "settings";

export type TrainerSession = {
  typed: string;
  wrong: boolean;
  round: number;
  feedback: string;
  result: VimState | null;
  attempts: number;
  step: number;
  tab: TrainerTab;
  hint: number;
  engine: VimState;
  streak: number;
  gameIndex: number;
  gameMisses: number;
  gameRounds: number;
  gameTarget: string;
  remapPending: string;
};

export type TrainerAction =
  | { type: "update"; value: Partial<TrainerSession> }
  | { type: "patch"; value: Partial<TrainerSession> }
  | { type: "reset"; value: TrainerSession }
  | { type: "select-tab"; tab: TrainerTab }
  | { type: "next-hint" };

export function reduceTrainerSession(
  state: TrainerSession,
  action: TrainerAction,
): TrainerSession {
  if (action.type === "reset") return action.value;
  if (action.type === "select-tab") return { ...state, tab: action.tab };
  if (action.type === "next-hint")
    return { ...state, hint: Math.min(3, state.hint + 1) };
  return { ...state, ...action.value };
}

export function createTrainerSession(
  lesson: Lesson,
  code: string[],
  cursor: VimCursor,
  initialState?: VimState,
  gameTarget = lesson.sequence,
): TrainerSession {
  return {
    typed: "",
    wrong: false,
    round: 0,
    feedback: "",
    result: null,
    attempts: 0,
    step: 0,
    tab: "challenge",
    hint: 0,
    engine: initialState
      ? cloneVimState(initialState)
      : createVimState(code, cursor),
    streak: 0,
    gameIndex: 0,
    gameMisses: 0,
    gameRounds: 0,
    gameTarget,
    remapPending: "",
  };
}
