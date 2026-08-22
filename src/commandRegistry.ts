import { referenceSections as sourceSections } from "./referenceSections";
import type { ReferenceRow, ReferenceRowOptions } from "./referenceSections";

export type CommandProvenance = "vim" | "neovim" | "nvchad" | "plugin";

export type CommandDefinition = {
  id: string;
  label: string;
  keys: string;
  section: string;
  tone: string;
  provenance: CommandProvenance;
  requirement?: string;
  presentation?: ReferenceRowOptions;
};

export type ReferenceDisplaySection = {
  title: string;
  tone: string;
  layout?: "wide";
  rows: readonly ReferenceRow[];
};

function slug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function provenanceFor(section: string): CommandProvenance {
  if (/gitsigns|lazygit|surround|trouble|nvim-dap/.test(section))
    return "plugin";
  if (/nvchad|telescope|nvimtree|cheats/.test(section)) return "nvchad";
  if (/completion|lsp|diagnostics|sessions/.test(section)) return "neovim";
  return "vim";
}

export const commandRegistry: readonly CommandDefinition[] =
  sourceSections.flatMap((section, sectionIndex) =>
    section.rows.map(([label, keys, presentation], rowIndex) => ({
      id: `${slug(section.title)}-${sectionIndex}-${rowIndex}`,
      label,
      keys,
      section: section.title,
      tone: section.tone,
      provenance: provenanceFor(section.title),
      ...(presentation ? { presentation } : {}),
      ...(/optional/.test(section.title)
        ? { requirement: "Optional plugin installation" }
        : /map these/.test(section.title)
          ? { requirement: "Custom mapping required" }
          : {}),
    })),
  );

export const referenceSections: readonly ReferenceDisplaySection[] =
  sourceSections.map((section) => ({
    title: section.title,
    tone: section.tone,
    ...(section.layout ? { layout: section.layout } : {}),
    rows: commandRegistry
      .filter((command) => command.section === section.title)
      .map(
        (command) =>
          (command.presentation
            ? [command.label, command.keys, command.presentation]
            : [command.label, command.keys]) as ReferenceRow,
      ),
  }));

export const referenceSearchText = commandRegistry
  .flatMap((command) => [
    command.section,
    command.label,
    command.keys,
    command.provenance,
  ])
  .join(" ")
  .toLowerCase();
