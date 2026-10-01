import { useMemo } from "react";
import type { Lesson } from "../curriculum";
import { createChallengeDefinition } from "../challengeModel";
import {
  createLessonFixture,
  miniGameTargets,
  resolveLessonPractice,
} from "../practiceModel";
import { createTrainerSession, type TrainerSession } from "./session";

export function createLessonTrainerSession(lesson: Lesson) {
  const drill = (lesson.drills || [
    { goal: lesson.task, code: lesson.code },
  ])[0];
  const { cursor, state } = createLessonFixture(lesson, drill.code);
  return createTrainerSession(
    lesson,
    drill.code,
    cursor,
    state,
    miniGameTargets(lesson)[0] || lesson.sequence,
  );
}

export function useTrainerExercise(lesson: Lesson, session: TrainerSession) {
  const drills = lesson.drills || [{ goal: lesson.task, code: lesson.code }];
  const practice = useMemo(() => resolveLessonPractice(lesson), [lesson]);
  const gameTargets = useMemo(() => miniGameTargets(lesson), [lesson]);
  const drill = drills[Math.min(session.round, drills.length - 1)];
  const steps = useMemo(
    () =>
      practice.kind === "reference"
        ? []
        : practice.steps.map(
            (step) => step.acceptedSequences[0] || lesson.sequence,
          ),
    [lesson.sequence, practice],
  );
  const required = steps[Math.min(session.step, steps.length - 1)];
  const accepted = useMemo(() => {
    if (practice.kind === "reference") return [];
    return [
      ...(practice.steps[Math.min(session.step, practice.steps.length - 1)]
        ?.acceptedSequences || [required]),
    ];
  }, [practice, required, session.step]);
  const { cursor: initialCursor, state: initialState } = useMemo(
    () => createLessonFixture(lesson, drill.code),
    [lesson, drill.code],
  );
  const outcomeEnabled = practice.kind === "vim";
  const scenarioEnabled = practice.kind === "scenario";
  const challengeDefinition = useMemo(
    () =>
      outcomeEnabled
        ? createChallengeDefinition(
            drill.code,
            initialCursor,
            drill.goal,
            accepted,
            initialState,
          )
        : null,
    [
      accepted,
      drill.code,
      drill.goal,
      initialCursor,
      initialState,
      outcomeEnabled,
    ],
  );

  return {
    drills,
    practice,
    gameTargets,
    drill,
    steps,
    required,
    accepted,
    initialCursor,
    outcomeEnabled,
    scenarioEnabled,
    challengeDefinition,
  };
}
