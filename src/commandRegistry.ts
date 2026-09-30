import { referenceSections as sourceSections } from "./referenceSections";
import type { ReferenceRow, ReferenceRowOptions } from "./referenceSections";

export type CommandProvenance =
  "vim" | "neovim" | "nvchad" | "plugin" | "shell";
export type CommandMode =
  "normal" | "insert" | "visual" | "command-line" | "terminal" | "panel";
export type CommandMappingKind =
  | "native-default"
  | "nvchad-default"
  | "plugin-local"
  | "suggested-custom"
  | "optional-command"
  | "mixed";

export type CommandSource = {
  keys: string;
  provenance: CommandProvenance;
  version: string;
  source: string;
};

export type CommandDefinition = {
  id: string;
  label: string;
  keys: string;
  section: string;
  tone: string;
  provenance: CommandProvenance;
  sources: readonly CommandSource[];
  modes: readonly CommandMode[];
  surface: string;
  requirements: readonly string[];
  mappingKind: CommandMappingKind;
  verified: "2026-08-22";
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

type CommandMetadata = Pick<
  CommandDefinition,
  | "provenance"
  | "sources"
  | "modes"
  | "surface"
  | "requirements"
  | "mappingKind"
>;

const neovimSource =
  "https://github.com/neovim/neovim/tree/v0.11.4/runtime/doc";
const neovimLspSource =
  "https://github.com/neovim/neovim/blob/v0.11.4/runtime/doc/lsp.txt";
const nvchadMappingsSource =
  "https://github.com/NvChad/NvChad/blob/add44b952d631981614bbb8cfc6f7002f296dfe6/lua/nvchad/mappings.lua";
const nvchadLspSource =
  "https://github.com/NvChad/NvChad/blob/add44b952d631981614bbb8cfc6f7002f296dfe6/lua/nvchad/configs/lspconfig.lua";
const telescopeMappingsSource =
  "https://github.com/nvim-telescope/telescope.nvim/blob/master/lua/telescope/mappings.lua";
const nvimtreeMappingsSource =
  "https://github.com/nvim-tree/nvim-tree.lua/blob/master/doc/nvim-tree-lua.txt";

function source(
  keys: string,
  provenance: CommandProvenance,
  version: string,
  url: string,
): CommandSource {
  return { keys, provenance, version, source: url };
}

const native: CommandMetadata = {
  provenance: "vim",
  sources: [source("all row keys", "vim", "Neovim 0.11.4", neovimSource)],
  modes: ["normal"],
  surface: "editor buffer",
  requirements: [],
  mappingKind: "native-default",
};
const nvchad: CommandMetadata = {
  provenance: "nvchad",
  sources: [
    source(
      "all row keys",
      "nvchad",
      "NVChad v2.5 add44b95",
      nvchadMappingsSource,
    ),
  ],
  modes: ["normal"],
  surface: "editor buffer",
  requirements: ["NVChad v2.5"],
  mappingKind: "nvchad-default",
};
const telescopePicker: CommandMetadata = {
  provenance: "plugin",
  sources: [
    source("all row keys", "plugin", "Telescope", telescopeMappingsSource),
  ],
  modes: ["insert", "normal"],
  surface: "Telescope picker",
  requirements: ["Telescope picker open"],
  mappingKind: "plugin-local",
};
const nvimtreePanel: CommandMetadata = {
  provenance: "plugin",
  sources: [
    source("all row keys", "plugin", "nvim-tree", nvimtreeMappingsSource),
  ],
  modes: ["panel"],
  surface: "NvimTree panel",
  requirements: ["NvimTree enabled and focused"],
  mappingKind: "plugin-local",
};

const metadataBySection: Record<string, CommandMetadata> = {
  modes: native,
  movement: native,
  select: { ...native, modes: ["normal", "visual"] },
  "text objects": native,
  copy: { ...native, modes: ["normal", "visual", "command-line"] },
  delete: { ...native, modes: ["normal", "visual", "command-line"] },
  search: native,
  format: { ...native, modes: ["normal", "visual"] },
  "visual actions": { ...native, modes: ["visual"] },
  repeat: native,
  registers: { ...native, modes: ["normal", "command-line"] },
  macros: native,
  "visual block": { ...native, modes: ["normal", "visual"] },
  "jump history": native,
  substitute: { ...native, modes: ["command-line"] },
  "more objects": native,
  files: { ...native, modes: ["normal", "command-line"] },
  "windows & tab pages": { ...native, modes: ["normal", "command-line"] },
  "buffers & tabufline": {
    ...nvchad,
    requirements: ["NVChad v2.5", "NVChad tabufline enabled"],
    surface: "NVChad tabufline",
  },
  "nvchad general": nvchad,
  telescope: {
    ...nvchad,
    surface: "editor buffer",
    requirements: ["NVChad Telescope integration"],
  },
  "nvchad terminals": {
    ...nvchad,
    modes: ["normal", "terminal"],
    surface: "NVChad terminal",
  },
  "nvimtree navigation": nvimtreePanel,
  "nvimtree file actions": nvimtreePanel,
  "cheats & plugins": {
    ...nvchad,
    surface: "editor buffer",
  },
  "completion & snippets": {
    provenance: "plugin",
    sources: [
      source(
        "all row keys",
        "plugin",
        "NVChad v2.5 plugin configuration",
        "https://github.com/NvChad/NvChad/tree/add44b952d631981614bbb8cfc6f7002f296dfe6/lua/nvchad/configs",
      ),
    ],
    modes: ["insert"],
    surface: "completion or snippet menu",
    requirements: ["Completion or snippet integration active"],
    mappingKind: "plugin-local",
  },
  "lsp actions": {
    provenance: "neovim",
    sources: [
      source("all row keys", "neovim", "Neovim 0.11.4", neovimLspSource),
    ],
    modes: ["normal"],
    surface: "LSP-attached editor buffer",
    requirements: ["An attached server supporting the requested LSP method"],
    mappingKind: "native-default",
  },
  "gitsigns · map these": {
    provenance: "plugin",
    sources: [
      source(
        "all row keys",
        "plugin",
        "Gitsigns docs verified 2026-08-22",
        "https://github.com/lewis6991/gitsigns.nvim/blob/main/doc/gitsigns.txt",
      ),
    ],
    modes: ["normal", "visual"],
    surface: "Git worktree buffer",
    requirements: ["Gitsigns attached", "Suggested custom mappings configured"],
    mappingKind: "suggested-custom",
  },
  "lazygit · optional": {
    provenance: "plugin",
    sources: [
      source(
        "all row keys",
        "plugin",
        "LazyGit docs verified 2026-08-22",
        "https://github.com/jesseduffield/lazygit/tree/master/docs",
      ),
    ],
    modes: ["panel"],
    surface: "LazyGit panel",
    requirements: [
      "LazyGit installed",
      "Optional Neovim integration installed",
    ],
    mappingKind: "optional-command",
  },
  "diagnostics & lists": {
    provenance: "neovim",
    sources: [source("all row keys", "neovim", "Neovim 0.11.4", neovimSource)],
    modes: ["normal", "command-line"],
    surface: "editor, quickfix, or location list",
    requirements: [],
    mappingKind: "native-default",
  },
  "sessions & projects": { ...native, modes: ["normal", "command-line"] },
  "command discovery": {
    ...native,
    modes: ["normal", "command-line", "panel"],
  },
  "surround · optional": {
    provenance: "plugin",
    sources: [
      source(
        "all row keys",
        "plugin",
        "nvim-surround docs verified 2026-08-22",
        "https://github.com/kylechui/nvim-surround/blob/main/doc/nvim-surround.txt",
      ),
    ],
    modes: ["normal", "visual"],
    surface: "editor buffer",
    requirements: ["nvim-surround installed"],
    mappingKind: "optional-command",
  },
  "trouble · map these": {
    provenance: "plugin",
    sources: [
      source(
        "all row keys",
        "plugin",
        "Trouble docs verified 2026-08-22",
        "https://github.com/folke/trouble.nvim/blob/main/README.md",
      ),
    ],
    modes: ["normal", "panel"],
    surface: "Trouble panel",
    requirements: ["Trouble installed", "Suggested custom mappings configured"],
    mappingKind: "suggested-custom",
  },
  "nvim-dap · map these": {
    provenance: "plugin",
    sources: [
      source(
        "all row keys",
        "plugin",
        "nvim-dap docs verified 2026-08-22",
        "https://github.com/mfussenegger/nvim-dap/blob/master/doc/dap.txt",
      ),
    ],
    modes: ["normal"],
    surface: "debug session",
    requirements: [
      "nvim-dap installed",
      "Suggested custom mappings configured",
    ],
    mappingKind: "suggested-custom",
  },
};

const rowMetadata: Record<string, Partial<CommandMetadata>> = {
  "format::Format buffer or selection": nvchad,
  "telescope::Next / previous result": telescopePicker,
  "telescope::Open / close picker": telescopePicker,
  "telescope::Horizontal / vertical / tab": telescopePicker,
  "telescope::Select result / send to quickfix": telescopePicker,
  "nvimtree navigation::Toggle / focus tree": {
    ...nvchad,
    requirements: ["NvimTree enabled"],
  },
  "cheats & plugins::Plugin manager": {
    provenance: "plugin",
    sources: [
      source(
        ":Lazy",
        "plugin",
        "lazy.nvim",
        "https://github.com/folke/lazy.nvim/blob/main/doc/lazy.nvim.txt",
      ),
    ],
    modes: ["command-line"],
    mappingKind: "optional-command",
  },
  "cheats & plugins::Install configured tools": {
    provenance: "nvchad",
    sources: [
      source(
        ":MasonInstallAll",
        "nvchad",
        "NVChad v2.5",
        "https://nvchad.com/docs/quickstart/install/",
      ),
    ],
    modes: ["command-line"],
    mappingKind: "optional-command",
  },
  "cheats & plugins::Tool package manager": {
    provenance: "plugin",
    sources: [
      source(
        ":Mason",
        "plugin",
        "mason.nvim",
        "https://github.com/mason-org/mason.nvim/blob/main/doc/mason.txt",
      ),
    ],
    modes: ["command-line"],
    mappingKind: "optional-command",
  },
  "cheats & plugins::Neovim health report": {
    ...native,
    provenance: "neovim",
    sources: [source(":checkhealth", "neovim", "Neovim 0.11.4", neovimSource)],
    modes: ["command-line"],
  },
  "nvchad terminals::End shell process": {
    provenance: "shell",
    sources: [
      source(
        "exit",
        "shell",
        "POSIX shell",
        "https://pubs.opengroup.org/onlinepubs/009695399/utilities/exit.html",
      ),
    ],
    modes: ["terminal"],
    surface: "terminal shell",
    requirements: ["Shell running inside the terminal"],
    mappingKind: "optional-command",
  },
  "lsp actions::Format after refactor": nvchad,
  "diagnostics & lists::Diagnostics location list": nvchad,
  "command discovery::WhichKey all / prefix": nvchad,
  "command discovery::NVChad cheatsheet": nvchad,
  "command discovery::Plugin-local help": {
    ...nvimtreePanel,
    sources: [
      source("g?", "plugin", "nvim-tree", nvimtreeMappingsSource),
      source(
        "?",
        "plugin",
        "LazyGit",
        "https://github.com/jesseduffield/lazygit/tree/master/docs",
      ),
    ],
  },
  "copy::Selection to system clipboard": {
    requirements: ["A working Neovim clipboard provider"],
  },
  "copy::Whole file to clipboard": {
    requirements: ["A working Neovim clipboard provider"],
  },
  "visual actions::Copy to clipboard": {
    requirements: ["A working Neovim clipboard provider"],
  },
  "files::Write and keep editing": {
    provenance: "neovim",
    sources: [
      source(":w", "vim", "Neovim 0.11.4", neovimSource),
      source("Ctrl+s", "nvchad", "NVChad v2.5 add44b95", nvchadMappingsSource),
    ],
    mappingKind: "mixed",
  },
  "lsp actions::Definition / references": {
    provenance: "neovim",
    sources: [
      source("gd", "nvchad", "NVChad v2.5 add44b95", nvchadLspSource),
      source("grr", "neovim", "Neovim 0.11.4", neovimLspSource),
    ],
    mappingKind: "mixed",
  },
  "lsp actions::Signature help in Insert mode": {
    modes: ["insert"],
  },
  "completion & snippets::Normal-mode buffer cycling": {
    provenance: "nvchad",
    sources: [
      source(
        "Tab / Shift+Tab",
        "nvchad",
        "NVChad v2.5 add44b95",
        nvchadMappingsSource,
      ),
    ],
    modes: ["normal"],
    surface: "NVChad tabufline",
    requirements: ["NVChad tabufline enabled"],
    mappingKind: "nvchad-default",
  },
  "nvchad terminals::Toggle horizontal / vertical": {
    requirements: ["NVChad v2.5", "A terminal that forwards Alt+h and Alt+v"],
  },
  "nvchad terminals::Toggle floating terminal": {
    requirements: ["NVChad v2.5", "A terminal that forwards Alt+i"],
  },
};

function metadataFor(section: string, label: string): CommandMetadata {
  const base = metadataBySection[section];
  if (!base) throw new Error(`Missing command metadata for ${section}`);
  return { ...base, ...rowMetadata[`${section}::${label}`] };
}

export const commandRegistry: readonly CommandDefinition[] =
  sourceSections.flatMap((section, sectionIndex) =>
    section.rows.map(([label, keys, presentation], rowIndex) => {
      const metadata = metadataFor(section.title, label);
      return {
        id: `${slug(section.title)}-${sectionIndex}-${rowIndex}`,
        label,
        keys,
        section: section.title,
        tone: section.tone,
        ...metadata,
        verified: "2026-08-22" as const,
        ...(metadata.requirements.length
          ? { requirement: metadata.requirements.join("; ") }
          : {}),
        ...(presentation ? { presentation } : {}),
      };
    }),
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
