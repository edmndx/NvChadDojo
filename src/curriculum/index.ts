import { groups, lessonSummaries } from "./catalog.generated";
import { enhanceLessonContent } from "./contentEnhancements";
import type { CurriculumModule, Lesson, LessonSummary } from "./schema";

const modules = import.meta.glob<CurriculumModule>("./categories/*.ts");
const summaryById = new Map(
  lessonSummaries.map((lesson) => [lesson.id, lesson]),
);
const categoryCache = new Map<string, Promise<readonly Lesson[]>>();

function modulePath(moduleId: string) {
  return `./categories/${moduleId}.ts`;
}

function loadCategory(moduleId: string) {
  const cached = categoryCache.get(moduleId);
  if (cached) return cached;
  const importer = modules[modulePath(moduleId)];
  if (!importer)
    return Promise.reject(new Error(`Unknown curriculum module: ${moduleId}`));
  const request = importer()
    .then((module) => module.default.map(enhanceLessonContent))
    .catch((error) => {
      categoryCache.delete(moduleId);
      throw error;
    });
  categoryCache.set(moduleId, request);
  return request;
}

export function getLessonSummary(id: string): LessonSummary | undefined {
  return summaryById.get(id);
}

export function loadLesson(id: string): Promise<Lesson> {
  const summary = getLessonSummary(id);
  if (!summary) return Promise.reject(new Error(`Unknown lesson: ${id}`));
  return loadCategory(summary.moduleId).then((lessons) => {
    const lesson = lessons.find((candidate) => candidate.id === id);
    if (!lesson)
      throw new Error(`Lesson ${id} is missing from ${summary.moduleId}`);
    return lesson;
  });
}

export function prefetchLesson(id: string) {
  const summary = getLessonSummary(id);
  if (summary) void loadCategory(summary.moduleId);
}

export async function loadAllLessons() {
  const categories = await Promise.all(
    [...new Set(lessonSummaries.map((lesson) => lesson.moduleId))].map(
      loadCategory,
    ),
  );
  const byId = new Map(categories.flat().map((lesson) => [lesson.id, lesson]));
  return lessonSummaries.map((summary) => {
    const lesson = byId.get(summary.id);
    if (!lesson) throw new Error(`Missing lesson detail for ${summary.id}`);
    return lesson;
  });
}

export { groups, lessonSummaries };
export type {
  Lesson,
  LessonKind,
  LessonPractice,
  LessonSummary,
  PracticeContext,
  PracticeStep,
  PracticeSurface,
} from "./schema";
