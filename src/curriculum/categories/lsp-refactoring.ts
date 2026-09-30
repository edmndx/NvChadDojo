import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "LSP Refactoring",
    "id": "refactor-understand-symbol",
    "title": "Understand a symbol before editing",
    "eyebrow": "LSP Refactoring",
    "summary": "Use NVChad's gd definition mapping, Neovim 0.11's grr references default, and buffer-local K hover before changing a shared symbol.",
    "detail": "All three actions require an attached language server with the corresponding capability; gd is supplied by NVChad at this baseline, while grr is a Neovim 0.11 default.",
    "keys": [
      "gd",
      "grr",
      "K"
    ],
    "task": "Visit a definition, inspect references, and read hover documentation.",
    "sequence": "gdgrrK",
    "code": [
      "const total = calculate(items)",
      "-- calculate is shared",
      "return total"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "LSP Refactoring",
    "id": "refactor-rename-fix",
    "title": "Rename and apply a code action",
    "eyebrow": "LSP Refactoring",
    "summary": "Neovim 0.11 defaults grn and gra to semantic rename and code actions when a capable language server is attached.",
    "detail": "Enter and confirm the new name after grn, then choose an action from the menu opened by gra; the key prefixes alone do not apply either change.",
    "keys": [
      "grn",
      "gra"
    ],
    "task": "Rename the symbol to newName, then choose the first code action.",
    "sequence": "grnnewName<Enter>gra<Enter>",
    "code": [
      "function oldName(value)",
      "  return value",
      "end"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "LSP Refactoring",
    "id": "refactor-verify",
    "title": "Verify a refactor",
    "eyebrow": "LSP Refactoring",
    "summary": "After an LSP edit, format with Space f m, visit diagnostics with ]d, and inspect references again with grr.",
    "detail": "After an LSP edit, format with Space f m, visit diagnostics with ]d, and inspect references again with grr.",
    "keys": [
      "Space fm",
      "]d",
      "grr"
    ],
    "task": "Format, check the next diagnostic, and inspect remaining references.",
    "sequence": "<Space>fm]dgrr",
    "code": [
      "local renamed = calculate(items)",
      "return renamed",
      "-- verify every caller"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "LSP Refactoring",
    "id": "lsp-refactoring-review",
    "title": "LSP Refactoring Review",
    "eyebrow": "LSP Refactoring",
    "summary": "Review every command introduced in LSP Refactoring before moving to the next category.",
    "detail": "Review every command introduced in LSP Refactoring before moving to the next category.",
    "keys": [
      "gd",
      "grr",
      "K",
      "grn",
      "gra",
      "Space fm",
      "]d"
    ],
    "task": "",
    "sequence": "gdgrrK",
    "code": [
      "const total = calculate(items)",
      "-- calculate is shared",
      "return total"
    ],
    "tip": "Return to any command in LSP Refactoring that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "gd",
        "description": "NVChad v2.5 supplies gd in an LSP-attached buffer; grr is a Neovim 0.11 default.",
        "sequence": "gdgrrK"
      },
      {
        "key": "grr",
        "description": "grr is a Neovim 0.11 default requiring a capable attached language server.",
        "sequence": "gdgrrK"
      },
      {
        "key": "K",
        "description": "K shows hover documentation in an LSP-attached buffer unless keywordprg or another mapping overrides it.",
        "sequence": "gdgrrK"
      },
      {
        "key": "grn",
        "description": "grn opens rename; enter the new name and confirm before continuing.",
        "sequence": "grnnewName<Enter>gra<Enter>"
      },
      {
        "key": "gra",
        "description": "gra opens code actions; select an action and confirm it with Enter.",
        "sequence": "grnnewName<Enter>gra<Enter>"
      },
      {
        "key": "Space fm",
        "description": "After an LSP edit, format with Space f m, visit diagnostics with ]d, and inspect references again with grr.",
        "sequence": "<Space>fm]dgrr"
      },
      {
        "key": "]d",
        "description": "After an LSP edit, format with Space f m, visit diagnostics with ]d, and inspect references again with grr.",
        "sequence": "<Space>fm]dgrr"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
