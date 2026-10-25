export type LessonKind = "practice" | "review" | "reference";
export type SnippetLanguage = "javascript" | "lua" | "text";

export type PracticeSurface =
  | "editor"
  | "workspace"
  | "terminal"
  | "nvimtree"
  | "telescope"
  | "completion"
  | "diagnostics"
  | "lsp"
  | "gitsigns"
  | "lazygit"
  | "trouble"
  | "configuration";

export type PracticeContext = {
  mode: string;
  surface: PracticeSurface;
  prerequisites?: readonly string[];
};

export type PracticeStep = {
  prompt: string;
  context: PracticeContext;
  acceptedSequences: readonly string[];
  expected: {
    state: string;
    trace: readonly string[];
  };
  sourceCommandIds?: readonly string[];
};

export type LessonPractice =
  | {
      kind: "vim";
      initial?: {
        search?: string;
        register?: string;
        macro?: string;
        mark?: [number, number];
      };
      steps: readonly PracticeStep[];
    }
  | {
      kind: "scenario";
      surface: PracticeSurface;
      seed: string;
      steps: readonly PracticeStep[];
    }
  | { kind: "reference" };

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
  language?: SnippetLanguage;
  cursor?: [number, number];
  tip: string;
  drills?: { goal: string; code: string[] }[];
  commonMistake?: string;
  reviewOnly?: boolean;
  reviewItems?: {
    key: string;
    description: string;
    sequence: string;
    code?: string[];
    language?: SnippetLanguage;
    cursor?: [number, number];
    /** Authored example output, not an executed plugin result. */
    expectedCode?: string[];
  }[];
  challenge?: {
    instruction: string;
    replacement?: string;
    cursor?: [number, number];
    hints: string[];
    alternatives?: string[];
    success: string;
  };
  practice?: LessonPractice;
};

export type CurriculumModule = { default: readonly Lesson[] };
