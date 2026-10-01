import {
  useEffect,
  useReducer,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import type { Lesson } from "../curriculum";
import { tokenizeSequence } from "../keyboard";
import {
  defaultRemaps,
  loadTrainerPreferences,
  parseRemaps,
  saveTrainerPreferences,
  type RemapSet,
  type TrainerPreferences,
} from "../trainerSettings";
import { reduceTrainerSession } from "./session";
import { createLessonTrainerSession, useTrainerExercise } from "./exercise";
import { processTrainerKey } from "./input";

export function useTrainer(lesson: Lesson) {
  const [session, dispatch] = useReducer(
    reduceTrainerSession,
    lesson,
    createLessonTrainerSession,
  );
  const [preferences, setPreferences] = useState<TrainerPreferences>(
    loadTrainerPreferences,
  );
  const [remapText, setRemapText] = useState(preferences.remapText);
  const [savedRemapText, setSavedRemapText] = useState(preferences.remapText);
  const [remaps, setRemaps] = useState<RemapSet>(
    () => parseRemaps(preferences.remapText).remaps,
  );
  const [remapStatus, setRemapStatus] = useState("");
  const [clockKey, setClockKey] = useState(0);
  const box = useRef<HTMLDivElement>(null);
  const resultTimer = useRef<number | undefined>(undefined);
  const shortTimers = useRef<number[]>([]);
  const exercise = useTrainerExercise(lesson, session);
  const { required } = exercise;
  const shownState = session.result || session.engine;
  const gameKeys = tokenizeSequence(session.gameTarget);

  const reset = () => {
    window.clearTimeout(resultTimer.current);
    dispatch({ type: "reset", value: createLessonTrainerSession(lesson) });
    setClockKey((value) => value + 1);
    box.current?.focus();
  };

  useEffect(() => {
    reset();
    const focusTimer = window.setTimeout(() => box.current?.focus(), 40);
    return () => {
      window.clearTimeout(focusTimer);
      window.clearTimeout(resultTimer.current);
      shortTimers.current.forEach(window.clearTimeout);
      shortTimers.current = [];
    };
  }, [lesson.id]);
  useEffect(() => {
    saveTrainerPreferences({ ...preferences, remapText: savedRemapText });
  }, [preferences, savedRemapText]);

  const handleKey = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (session.tab === "settings") return;
    event.preventDefault();
    const { actions, timers } = processTrainerKey(event, {
      ...exercise,
      lesson,
      session,
      preferences,
      remaps,
      gameKeys,
    });
    actions.forEach(dispatch);
    for (const timer of timers) {
      const id = window.setTimeout(
        () => dispatch(timer.action()),
        timer.delayMs,
      );
      if (timer.kind === "result") resultTimer.current = id;
      else shortTimers.current.push(id);
    }
  };

  const saveRemaps = () => {
    const parsed = parseRemaps(remapText);
    if (parsed.errors.length) {
      setRemapStatus(
        `Could not parse ${parsed.errors.join(", ")}. Use nnoremap or inoremap.`,
      );
      return;
    }
    setRemaps(parsed.remaps);
    setSavedRemapText(remapText);
    setRemapStatus("Saved.");
  };
  const resetRemaps = () => {
    setRemapText(defaultRemaps);
    setSavedRemapText(defaultRemaps);
    setRemaps(parseRemaps(defaultRemaps).remaps);
    setRemapStatus("Mappings restored.");
  };
  const entered =
    session.typed || session.remapPending || (session.result ? required : "");
  const insertedText =
    lesson.challenge?.replacement ||
    (required.includes("nvchad") ? "nvchad" : undefined);

  return {
    ...exercise,
    session,
    dispatch,
    preferences,
    setPreferences,
    remapText,
    setRemapText,
    remapStatus,
    setRemapStatus,
    saveRemaps,
    resetRemaps,
    clockKey,
    box,
    handleKey,
    reset,
    shownState,
    gameKeys,
    entered,
    insertedText,
  };
}
