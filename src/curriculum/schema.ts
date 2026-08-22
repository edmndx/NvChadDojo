export type LessonKind = "practice" | "review" | "reference";

export type LessonSummary = {
  id: string;
  group: string;
  title: string;
  keys: string[];
  moduleId: string;
  kind: LessonKind;
  index: number;
  searchText?: string;
};

export type Lesson = {
  id: string;
  group: string;
  title: string;
  eyebrow: string;
  summary: string;
  detail: string;
  keys: string[];
  keyLabels?: string[];
  task: string;
  sequence: string;
  code: string[];
  cursor?: [number, number];
  tip: string;
  drills?: { goal: string; code: string[] }[];
  commonMistake?: string;
  reviewOnly?: boolean;
  reviewItems?: { key: string; description: string; sequence: string }[];
  challenge?: {
    instruction: string;
    replacement?: string;
    cursor?: [number, number];
    hints: string[];
    alternatives?: string[];
    success: string;
  };
};

export type CurriculumModule = { default: readonly Lesson[] };
