import { useMemo } from "react";
import type { Lesson } from "../curriculum";
import { createChallengeDefinition } from "../challengeModel";
import { getPracticeFixture } from "../lessonExamples";
import {
  createLessonVimState,
  miniGameTargets,
  resolveLessonPractice,
} from "../practiceModel";
import { createTrainerSession, type TrainerSession } from "./session";
export function createLessonTrainerSession(lesson: Lesson) {
  const drills = lesson.drills || [{ goal: lesson.task, code: lesson.code }];
  const practice = resolveLessonPractice(lesson);
  const gameTargets = miniGameTargets(lesson);
  const firstFixture = getPracticeFixture(
    lesson,
    practice.kind === "reference"
      ? lesson.sequence
      : practice.steps[0]?.acceptedSequences[0] || lesson.sequence,
    drills[0].code,
  );
  const firstCursor = firstFixture.cursor;

  return createTrainerSession(
    lesson,
    firstFixture.code,
    firstCursor,
    createLessonVimState(lesson, firstFixture.code, firstCursor),
    gameTargets[0] || lesson.sequence,
  );
}
export function useTrainerExercise(lesson: Lesson, session: TrainerSession) {
  const drills = lesson.drills || [{ goal: lesson.task, code: lesson.code }];
  const practice = useMemo(() => resolveLessonPractice(lesson), [lesson]);
  const gameTargets = useMemo(() => miniGameTargets(lesson), [lesson]);
  const roundDrill = drills[Math.min(session.round, drills.length - 1)];
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
  const fixture = getPracticeFixture(
    lesson,
    required || lesson.sequence,
    roundDrill.code,
  );
  const drill = { ...roundDrill, code: fixture.code };
  const accepted = useMemo(() => {
    if (practice.kind === "reference") return [];
    return [
      ...(practice.steps[Math.min(session.step, practice.steps.length - 1)]
        ?.acceptedSequences || [required]),
    ];
  }, [practice, required, session.step]);
  const initialCursor = useMemo(
    () => fixture.cursor,
    [fixture.cursor.line, fixture.cursor.col],
  );
  const initialState = useMemo(
    () => createLessonVimState(lesson, drill.code, initialCursor),
    [drill.code, initialCursor, lesson],
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
    steps,
    required,
    fixture,
    drill,
    accepted,
    initialCursor,
    initialState,
    outcomeEnabled,
    scenarioEnabled,
    challengeDefinition,
  };
}
