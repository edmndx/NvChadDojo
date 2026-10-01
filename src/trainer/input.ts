import type { Lesson } from "../curriculum";
import { challengeReached } from "../challengeModel";
import { applyVimKey } from "../vimEngine";
import { startingCursor } from "../lessonRuntime";
import {
  displayKey,
  matchAcceptedInput,
  normalizeKey,
  shouldCancelPendingInput,
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
};
export type TimedTrainerAction = {
  kind: "result" | "short";
  delayMs: number;
  action: () => TrainerAction;
};
export function processTrainerKey(
  event: KeyboardEvent,
  context: TrainerKeyContext,
) {
  const {
    lesson,
    session,
    preferences,
    remaps,
    gameKeys,
    gameTargets,
    drills,
    drill,
    initialCursor,
    outcomeEnabled,
    scenarioEnabled,
    accepted,
    steps,
    required,
    challengeDefinition,
  } = context;
  const actions: TrainerAction[] = [];
  const timers: TimedTrainerAction[] = [];
  const output = { actions, timers };

  if (session.tab === "minigame") {
    const token = normalizeKey(event);
    if (!token || !gameKeys.length) return output;
    if (token === gameKeys[session.gameIndex]) {
      if (session.gameIndex + 1 === gameKeys.length) {
        const currentTarget = Math.max(
          0,
          gameTargets.indexOf(session.gameTarget),
        );
        const nextTarget = gameTargets.length
          ? gameTargets[(currentTarget + 1) % gameTargets.length]
          : session.gameTarget;
        actions.push({
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
        actions.push({
          type: "patch",
          value: { gameIndex: session.gameIndex + 1 },
        });
    } else {
      actions.push({
        type: "patch",
        value: {
          gameMisses: session.gameMisses + 1,
          attempts: session.attempts + 1,
          streak: 0,
          wrong: true,
        },
      });
      timers.push({
        kind: "short",
        delayMs: 180,
        action: () => ({ type: "patch", value: { wrong: false } }),
      });
    }
    return output;
  }
  if (session.tab !== "challenge") return output;

  if (session.result) return output;
  if (event.key === "Backspace") {
    actions.push({
      type: "patch",
      value: {
        typed: "",
        wrong: false,
        feedback: "Pending command cleared. You are back in Normal mode.",
      },
    });
    return output;
  }
  const arrowMap: Record<string, string> = {
    ArrowLeft: "h",
    ArrowDown: "j",
    ArrowUp: "k",
    ArrowRight: "l",
  };
  if (arrowMap[event.key] && !preferences.arrowKeysEnabled) {
    actions.push({
      type: "patch",
      value: {
        attempts: session.attempts + 1,
        feedback: `Arrow keys are disabled here. Use ${arrowMap[event.key]} instead.`,
      },
    });
    return output;
  }
  const rawToken = arrowMap[event.key] || normalizeKey(event);
  if (!rawToken) return output;
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
      actions.push({
        type: "patch",
        value: {
          remapPending: candidate,
          feedback: `mapping: ${candidate}…`,
        },
      });
      return output;
    }
    token = mapped;
  } else if (session.remapPending) {
    typedPrefix = session.remapPending;
    engineBase = outcomeEnabled
      ? applyVimKey(session.engine, session.remapPending)
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
    actions.push({
      type: "patch",
      value: {
        typed: "",
        remapPending: "",
        feedback: "Pending command cancelled. Normal mode restored.",
        engine: createLessonVimState(lesson, drill.code, initialCursor),
      },
    });
    return output;
  }
  const matchedInput = matchAcceptedInput(
    session.typed,
    typedPrefix,
    token,
    accepted,
  );
  const nextTyped = matchedInput.value;
  const nextEngine = outcomeEnabled
    ? applyVimKey(engineBase, token)
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
    actions.push({
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
      const moreSteps = session.step + 1 < steps.length;
      actions.push({
        type: "patch",
        value: {
          typed: "",
          hint: 0,
          result: resultState,
          feedback: moreSteps
            ? `Good. Step ${session.step + 1} worked.`
            : lesson.challenge?.success || "Target state reached.",
          streak: moreSteps ? session.streak : session.streak + 1,
        },
      });
      timers.push({
        kind: "result",
        delayMs: preferences.animateResults ? 1500 : 350,
        action: () => {
          const nextStep = moreSteps ? session.step + 1 : 0;
          const nextRound = moreSteps
            ? session.round
            : (session.round + 1) % drills.length;
          const nextDrill = drills[Math.min(nextRound, drills.length - 1)];
          return {
            type: "patch",
            value: {
              step: nextStep,
              round: nextRound,
              result: null,
              engine: createLessonVimState(
                lesson,
                nextDrill.code,
                startingCursor(lesson, nextDrill.code),
              ),
            },
          };
        },
      });
    }
  } else {
    const expected =
      (accepted.find((option) => option.startsWith(session.typed)) || required)
        .slice(session.typed.length)
        .match(/^<[^>]+>|./)?.[0] || "the next key";
    actions.push({
      type: "patch",
      value: {
        attempts: session.attempts + 1,
        streak: 0,
        wrong: true,
        remapPending: "",
        feedback: `That breaks the command. Expected ${displayKey(expected)}, not ${displayKey(token)}.`,
      },
    });
    timers.push({
      kind: "short",
      delayMs: 650,
      action: () => ({
        type: "patch",
        value: {
          wrong: false,
          typed: "",
          engine: createLessonVimState(lesson, drill.code, initialCursor),
        },
      }),
    });
  }

  return output;
}
