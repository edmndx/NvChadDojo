import type { Lesson } from "./curriculum";
import type { SnippetLanguage } from "./curriculum/schema";
import { challengeSteps, startingCursor } from "./lessonRuntime";

// Each row owns its command and fixture. Cycling unrelated drills by row index
// can demonstrate the right keys on a buffer where they do something else.
export function getLessonExamples(lesson: Lesson) {
  const items: NonNullable<Lesson["reviewItems"]> =
    lesson.reviewItems ||
    lesson.keys.map((key) => ({
      key,
      description: "",
      sequence: challengeSteps(lesson)[0] || lesson.sequence,
    }));
  return items.map((item) => {
    const code = item.code
      ? item.code
      : lesson.drills?.[0]?.code || lesson.code;
    const cursor = item.cursor
      ? startingCursor(
          { ...lesson, cursor: item.cursor, challenge: undefined },
          code,
        )
      : startingCursor(lesson, code);
    const language: SnippetLanguage =
      item.language || lesson.language || "javascript";
    return { ...item, code, cursor, language };
  });
}

export function getPracticeFixture(
  lesson: Lesson,
  sequence: string,
  code: string[],
) {
  const example = lesson.reviewOnly
    ? getLessonExamples(lesson).find(
        (item) =>
          item.sequence.replaceAll(" ", "<Space>") ===
          sequence.replaceAll(" ", "<Space>"),
      )
    : undefined;
  return (
    example || {
      code,
      cursor: startingCursor(lesson, code),
      language: lesson.language || "javascript",
    }
  );
}
