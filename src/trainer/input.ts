import type { Dispatch, KeyboardEvent as ReactKeyboardEvent } from "react";
import type { Lesson } from "../curriculum";
import { challengeReached } from "../challengeModel";
import { applyVimTokens } from "../vimEngine";
import {
  displayKey,
  matchAcceptedInput,
  normalizeKey,
  shouldCancelPendingInput,
  tokenizeSequence,
} from "../keyboard";
import {
  createLessonVimState,
  runScenario,
  scenarioAsVimState,
  scenarioReached,
} from "../practiceModel";
import type { RemapSet, TrainerPreferences } from "../trainerSettings";
import type { TrainerAction, TrainerSession } from "./session";
import type { useTrainerExercise } from "./exercise";
type TrainerKeyContext = ReturnType<typeof useTrainerExercise> & {
  lesson: Lesson;
  session: TrainerSession;
  preferences: TrainerPreferences;
  remaps: RemapSet;
  gameKeys: string[];
  moreSteps: boolean;
  dispatch: Dispatch<TrainerAction>;
  advance: () => void;
  resultTimer: { current: number | undefined };
  shortTimers: { current: number[] };
};
export function processTrainerKey(
  event: ReactKeyboardEvent<HTMLDivElement>,
  context: TrainerKeyContext,
) {
  const {
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
    gameTargets,
    drill,
    initialCursor,
    outcomeEnabled,
    scenarioEnabled,
    accepted,
    required,
    challengeDefinition,
  } = context;

  if (event.target !== event.currentTarget) return;
  if (event.metaKey) return;
  if (session.tab === "minigame") {
    const token =
      event.key === "Backspace" ? "<BS>" : normalizeKey(event.nativeEvent);
    if (!token || !gameKeys.length) return;
    const expected =
      gameKeys[session.gameIndex] === " "
        ? "<Space>"
        : gameKeys[session.gameIndex];
    if (event.key === "Tab" && token !== expected) return;
    event.preventDefault();
    if (token === expected) {
      if (session.gameIndex + 1 === gameKeys.length) {
        const currentTarget = Math.max(
          0,
          gameTargets.indexOf(session.gameTarget),
        );
        const nextTarget = gameTargets.length
          ? gameTargets[(currentTarget + 1) % gameTargets.length]
          : session.gameTarget;
        dispatch({
          type: "patch",
          value: {
            gameRounds: session.gameRounds + 1,
            streak: session.streak + 1,
            gameIndex: 0,
            gameTarget: nextTarget,
            engine: createLessonVimState(lesson, drill.code, initialCursor),
          },
        });
      } else
        dispatch({
          type: "patch",
          value: { gameIndex: session.gameIndex + 1 },
        });
    } else {
      if (token === "<Esc>" || event.key === "Backspace") {
        dispatch({
          type: "patch",
          value: {
            gameIndex:
              token === "<Esc>" ? 0 : Math.max(0, session.gameIndex - 1),
            wrong: false,
          },
        });
        return;
      }
      dispatch({
        type: "patch",
        value: {
          gameMisses: session.gameMisses + 1,
          attempts: session.attempts + 1,
          streak: 0,
          wrong: true,
        },
      });
      shortTimers.current.push(
        window.setTimeout(
          () => dispatch({ type: "patch", value: { wrong: false } }),
          180,
        ),
      );
    }
    return;
  }
  if (session.tab !== "challenge") return;
  if (session.result && scenarioEnabled) {
    if (event.key === "Enter") {
      event.preventDefault();
      advance();
    }
    return;
  }
  if (
    event.key === "Tab" &&
    !accepted.some((option) =>
      option.startsWith(session.typed + normalizeKey(event.nativeEvent)),
    )
  )
    return;
  event.preventDefault();
  if (session.result) return;
  if (event.key === "Backspace") {
    dispatch({
      type: "patch",
      value: {
        typed: "",
        remapPending: "",
        wrong: false,
        feedback: "Attempt reset to its starting state.",
        engine: createLessonVimState(lesson, drill.code, initialCursor),
      },
    });
    return;
  }
  const arrowMap: Record<string, string> = {
    ArrowLeft: "h",
    ArrowDown: "j",
    ArrowUp: "k",
    ArrowRight: "l",
  };
  if (arrowMap[event.key] && !preferences.arrowKeysEnabled) {
    dispatch({
      type: "patch",
      value: {
        attempts: session.attempts + 1,
        feedback: `Arrow keys are disabled here. Use ${arrowMap[event.key]} instead.`,
      },
    });
    return;
  }
  const rawToken = arrowMap[event.key] || normalizeKey(event.nativeEvent);
  if (!rawToken) return;
  const activeRemaps =
    session.engine.mode === "insert" ? remaps.insert : remaps.normal;
  const candidate = session.remapPending + rawToken;
  const prefix = Object.keys(activeRemaps).find((source) =>
    source.startsWith(candidate),
  );
  let token = rawToken;
  let typedPrefix = "";
  let engineBase = session.engine;
  if (prefix) {
    const mapped = activeRemaps[candidate];
    if (!mapped) {
      dispatch({
        type: "patch",
        value: {
          remapPending: candidate,
          feedback: `mapping: ${candidate}…`,
        },
      });
      return;
    }
    token = mapped;
  } else if (session.remapPending) {
    typedPrefix = session.remapPending;
    engineBase = outcomeEnabled
      ? applyVimTokens(session.engine, tokenizeSequence(session.remapPending))
      : session.engine;
  } else if (activeRemaps[rawToken]) token = activeRemaps[rawToken];
  if (
    shouldCancelPendingInput(
      token,
      session.engine.mode,
      session.engine.pending,
      session.typed,
      session.remapPending,
      accepted,
    )
  ) {
    dispatch({
      type: "patch",
      value: {
        typed: "",
        remapPending: "",
        feedback: "Attempt cancelled and reset to its starting state.",
        engine: createLessonVimState(lesson, drill.code, initialCursor),
      },
    });
    return;
  }
  const matchedInput = matchAcceptedInput(
    session.typed,
    typedPrefix,
    token,
    accepted,
  );
  const nextTyped = matchedInput.value;
  const nextEngine = outcomeEnabled
    ? applyVimTokens(engineBase, tokenizeSequence(token))
    : session.engine;
  const completeCommand = accepted.includes(nextTyped);
  const expectedScenario =
    scenarioEnabled && completeCommand
      ? runScenario(
          lesson,
          accepted.find((option) => option === nextTyped)!,
        )
      : null;
  const actualScenario =
    scenarioEnabled && completeCommand ? runScenario(lesson, nextTyped) : null;
  const reached = challengeDefinition
    ? completeCommand && challengeReached(challengeDefinition, nextEngine)
    : expectedScenario && actualScenario
      ? scenarioReached(expectedScenario, actualScenario)
      : completeCommand;
  const resultState = actualScenario
    ? scenarioAsVimState(nextEngine, actualScenario)
    : nextEngine;
  const viable = matchedInput.viable;
  if (viable || reached) {
    dispatch({
      type: "patch",
      value: {
        typed: nextTyped,
        remapPending: "",
        wrong: false,
        feedback: "",
        engine: nextEngine,
      },
    });
    if (reached) {
      dispatch({
        type: "patch",
        value: {
          typed: "",
          hint: 0,
          result: resultState,
          feedback: scenarioEnabled
            ? moreSteps
              ? `Correct shortcut for step ${session.step + 1}.`
              : "Correct shortcut."
            : moreSteps
              ? `Good. Step ${session.step + 1} worked.`
              : lesson.challenge?.success || "Target state reached.",
          streak: moreSteps ? session.streak : session.streak + 1,
        },
      });
      if (!scenarioEnabled)
        resultTimer.current = window.setTimeout(
          advance,
          preferences.animateResults ? 1500 : 350,
        );
    }
  } else {
    const expected =
      (accepted.find((option) => option.startsWith(session.typed)) || required)
        .slice(session.typed.length)
        .match(/^<[^>]+>|./)?.[0] || "the next key";
    dispatch({
      type: "patch",
      value: {
        attempts: session.attempts + 1,
        streak: 0,
        wrong: true,
        remapPending: "",
        typed: "",
        engine: createLessonVimState(lesson, drill.code, initialCursor),
        feedback: `Expected ${displayKey(expected)}; received ${displayKey(token)}. Try the sequence again from the starting state.`,
      },
    });
    shortTimers.current.push(
      window.setTimeout(
        () =>
          dispatch({
            type: "patch",
            value: {
              wrong: false,
            },
          }),
        650,
      ),
    );
  }
}
