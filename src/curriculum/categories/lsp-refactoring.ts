import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "LSP Refactoring",
    "id": "refactor-understand-symbol",
    "title": "Understand a symbol before editing",
    "eyebrow": "LSP Refactoring",
    "summary": "Use gd for its definition, grr for references, and K for hover documentation before changing a shared symbol.",
    "detail": "Use gd for its definition, grr for references, and K for hover documentation before changing a shared symbol.",
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
    "summary": "grn performs a semantic project rename and gra requests supported refactors or quick fixes.",
    "detail": "grn performs a semantic project rename and gra requests supported refactors or quick fixes.",
    "keys": [
      "grn",
      "gra"
    ],
    "task": "Rename the symbol, then request a code action.",
    "sequence": "grngra",
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
        "description": "Use gd for its definition, grr for references, and K for hover documentation before changing a shared symbol.",
        "sequence": "gdgrrK"
      },
      {
        "key": "grr",
        "description": "Use gd for its definition, grr for references, and K for hover documentation before changing a shared symbol.",
        "sequence": "gdgrrK"
      },
      {
        "key": "K",
        "description": "Use gd for its definition, grr for references, and K for hover documentation before changing a shared symbol.",
        "sequence": "gdgrrK"
      },
      {
        "key": "grn",
        "description": "grn performs a semantic project rename and gra requests supported refactors or quick fixes.",
        "sequence": "grngra"
      },
      {
        "key": "gra",
        "description": "grn performs a semantic project rename and gra requests supported refactors or quick fixes.",
        "sequence": "grngra"
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
