import {
  useEffect,
  useReducer,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import type { Lesson } from "../curriculum";
import { tokenizeSequence } from "../keyboard";
import { getPracticeFixture } from "../lessonExamples";
import { createLessonVimState } from "../practiceModel";
import {
  defaultRemaps,
  loadTrainerPreferences,
  parseRemaps,
  saveTrainerPreferences,
  type RemapSet,
  type TrainerPreferences,
} from "../trainerSettings";
import { reduceTrainerSession, type TrainerTab } from "./session";
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
  const {
    drills,
    steps,
    required,
    fixture,
    drill,
    initialCursor,
    scenarioEnabled,
  } = exercise;
  const shownState = session.result || session.engine;
  const language = fixture.language;
  const gameKeys = tokenizeSequence(session.gameTarget);
  const moreSteps = session.step + 1 < steps.length;
  const advance = () => {
    const nextStep = moreSteps ? session.step + 1 : 0;
    const nextRound = moreSteps
      ? session.round
      : (session.round + 1) % drills.length;
    const nextDrill = drills[Math.min(nextRound, drills.length - 1)];
    const nextFixture = getPracticeFixture(
      lesson,
      steps[nextStep],
      nextDrill.code,
    );
    dispatch({
      type: "patch",
      value: {
        step: nextStep,
        round: nextRound,
        result: null,
        ...(scenarioEnabled ? { feedback: "", typed: "", hint: 0 } : {}),
        engine: createLessonVimState(
          lesson,
          nextFixture.code,
          nextFixture.cursor,
        ),
      },
    });
    if (scenarioEnabled) box.current?.focus();
  };

  const reset = () => {
    window.clearTimeout(resultTimer.current);
    shortTimers.current.forEach(window.clearTimeout);
    shortTimers.current = [];
    dispatch({
      type: "reset",
      value: createLessonTrainerSession(lesson),
    });
    setClockKey((value) => value + 1);
    box.current?.focus();
  };

  const selectTab = (tab: TrainerTab) => {
    window.clearTimeout(resultTimer.current);
    shortTimers.current.forEach(window.clearTimeout);
    shortTimers.current = [];
    dispatch({
      type: "patch",
      value: {
        tab,
        typed: "",
        remapPending: "",
        result: null,
        wrong: false,
        feedback: "",
        gameIndex: 0,
        engine: createLessonVimState(lesson, drill.code, initialCursor),
      },
    });
    if (tab !== "settings") box.current?.focus();
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

  const handleKey = (event: ReactKeyboardEvent<HTMLDivElement>) =>
    processTrainerKey(event, {
      ...exercise,
      lesson,
      session,
      preferences,
      remaps,
      gameKeys,
      moreSteps,
      dispatch,
      advance,
      resultTimer,
      shortTimers,
    });

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
    selectTab,
    shownState,
    language,
    gameKeys,
    entered,
    insertedText,
    moreSteps,
    advance,
  };
}
