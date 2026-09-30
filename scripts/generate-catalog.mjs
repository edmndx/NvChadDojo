import { readdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const categoriesDir = resolve(root, "src/curriculum/categories");
const output = resolve(root, "src/curriculum/catalog.generated.ts");
const files = (await readdir(categoriesDir))
  .filter((file) => file.endsWith(".ts"))
  .sort();
const summaries = [];
const groups = [];
const referenceModule = await import(
  `${pathToFileURL(resolve(root, "src/referenceSections.ts")).href}?search=${Date.now()}`
);
const referenceSearchText = referenceModule.referenceSections
  .flatMap((section) => [
    section.title,
    ...section.rows.flatMap((row) => [row[0], row[1]]),
  ])
  .join(" ");

for (const file of files) {
  const moduleId = file.replace(/\.ts$/, "");
  const imported = await import(
    `${pathToFileURL(resolve(categoriesDir, file)).href}?catalog=${Date.now()}`
  );
  for (const [categoryIndex, lesson] of imported.default.entries()) {
    if (!groups.includes(lesson.group)) groups.push(lesson.group);
    summaries.push({
      id: lesson.id,
      group: lesson.group,
      title: lesson.title,
      keys: lesson.keys,
      moduleId,
      kind:
        lesson.id === "essential-command-reference"
          ? "reference"
          : lesson.reviewOnly
            ? "review"
            : "practice",
      ...(lesson.id === "essential-command-reference"
        ? { searchText: referenceSearchText }
        : {}),
      categoryIndex,
    });
  }
}

// Preserve course order independently from alphabetical module filenames.
const previous = await import(
  `${pathToFileURL(output).href}?previous=${Date.now()}`
).catch(() => null);
const orderedLessons = previous?.lessonSummaries;
if (orderedLessons) {
  const groupOrder = new Map();
  for (const lesson of orderedLessons) {
    if (!groupOrder.has(lesson.group))
      groupOrder.set(lesson.group, groupOrder.size);
  }
  summaries.sort((a, b) => {
    const groupDifference =
      (groupOrder.get(a.group) ?? groupOrder.size) -
      (groupOrder.get(b.group) ?? groupOrder.size);
    return groupDifference || a.categoryIndex - b.categoryIndex;
  });
  groups.length = 0;
  for (const summary of summaries)
    if (!groups.includes(summary.group)) groups.push(summary.group);
}

const indexed = summaries.map(
  ({ categoryIndex: _categoryIndex, ...summary }, index) => ({
    ...summary,
    index,
  }),
);
if (orderedLessons && !process.argv.includes("--allow-identity-change")) {
  const previousIdentity = orderedLessons.map(({ id, group, title }) => ({
    id,
    group,
    title,
  }));
  const nextIdentity = indexed.map(({ id, group, title }) => ({
    id,
    group,
    title,
  }));
  const changes = nextIdentity.flatMap((lesson, index) => {
    const previousLesson = previousIdentity[index];
    return JSON.stringify(previousLesson) === JSON.stringify(lesson)
      ? []
      : [
          `index ${index}: ${JSON.stringify(previousLesson)} -> ${JSON.stringify(lesson)}`,
        ];
  });
  if (previousIdentity.length !== nextIdentity.length)
    changes.unshift(
      `lesson count: ${previousIdentity.length} -> ${nextIdentity.length}`,
    );
  if (changes.length)
    throw new Error(
      `Curriculum identities, titles, groups, or order changed. Preserve the public contract or rerun explicitly with --allow-identity-change.\n${changes.join("\n")}`,
    );
}
const source = [
  'import type { LessonSummary } from "./schema";',
  "",
  `export const lessonSummaries = ${JSON.stringify(indexed, null, 2)} satisfies readonly LessonSummary[];`,
  "",
  `export const groups = ${JSON.stringify(groups, null, 2)} as const;`,
  "",
].join("\n");
await writeFile(output, source, "utf8");
console.log(
  `Generated catalog for ${indexed.length} lessons in ${groups.length} groups.`,
);
