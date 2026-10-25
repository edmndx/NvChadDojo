import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "LSP Refactoring",
    "id": "refactor-understand-symbol",
    "title": "Understand a symbol before editing",
    "eyebrow": "LSP Refactoring",
    "summary": "Use NVChad's gd definition mapping, Neovim 0.11's grr references default, and buffer-local K hover before changing a shared symbol.",
    "detail": "Start on a symbol with a capable attached server. After grr opens its quickfix list, Ctrl+w p returns to the code window before K requests hover.",
    "keys": [
      "gd",
      "grr",
      "K"
    ],
    "task": "Visit a definition, inspect references, and read hover documentation.",
    "sequence": "gdgrr<C-w>pK",
    "code": [
      "const total = calculate([12, 8]);",
      "console.log(total);",
      "",
      "function calculate(items) {",
      "  return items.reduce((sum, item) => sum + item, 0);",
      "}"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "gd",
        "description": "In an LSP-attached buffer, use NVChad's gd mapping to request a definition.",
        "sequence": "gd"
      },
      {
        "key": "grr",
        "description": "With a supporting LSP, request references. The default handler opens a quickfix list.",
        "sequence": "grr"
      },
      {
        "key": "K",
        "description": "Use NVChad's gd definition mapping, Neovim 0.11's grr references default, and buffer-local K hover before changing a shared symbol.",
        "sequence": "K"
      }
    ],
    "cursor": [
      0,
      14
    ],
    "language": "javascript"
  },
  {
    "group": "LSP Refactoring",
    "id": "refactor-rename-fix",
    "title": "Rename and apply a code action",
    "eyebrow": "LSP Refactoring",
    "summary": "Neovim 0.11 defaults grn and gra to semantic rename and code actions when a capable language server is attached.",
    "detail": "Clear the default rename prompt with Ctrl+u, type newName, and confirm. Wait for the rename to finish before gra; type 1 and Enter in the default numbered code-action prompt.",
    "keys": [
      "grn",
      "gra"
    ],
    "task": "Rename the symbol to newName, then choose the first code action.",
    "sequence": "grn<C-u>newName<Enter>gra1<Enter>",
    "code": [
      "function oldName(value) {",
      "  return value;",
      "}",
      "",
      "console.log(oldName(42));"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "grn",
        "description": "With a supporting LSP, clear the prefilled rename prompt, enter newName, and confirm.",
        "sequence": "grn<C-u>newName<Enter>"
      },
      {
        "key": "gra",
        "description": "With an available code action, type 1 and Enter in Neovim's default numbered action prompt.",
        "sequence": "gra1<Enter>"
      }
    ],
    "cursor": [
      0,
      9
    ],
    "language": "javascript"
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
      "// @ts-check",
      "const renamed = 42;",
      "/** @type {string} */",
      "const label = renamed;",
      "console.log(renamed, label);"
    ],
    "tip": "With JavaScript type checking enabled, label deliberately assigns a number to a JSDoc string type. After ]d, grr inspects the label symbol at that diagnostic.",
    "reviewItems": [
      {
        "key": "Space fm",
        "description": "In Normal or Visual mode, format through Conform with an available formatter or LSP fallback.",
        "sequence": "<Space>fm"
      },
      {
        "key": "]d",
        "description": "After an LSP edit, format with Space f m, visit diagnostics with ]d, and inspect references again with grr.",
        "sequence": "]d"
      },
      {
        "key": "grr",
        "description": "With a supporting LSP, request references. The default handler opens a quickfix list.",
        "sequence": "grr"
      }
    ],
    "cursor": [
      1,
      6
    ],
    "language": "javascript"
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
      "const total = calculate([12, 8]);",
      "console.log(total);",
      "",
      "function calculate(items) {",
      "  return items.reduce((sum, item) => sum + item, 0);",
      "}"
    ],
    "tip": "Return to any command in LSP Refactoring that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "gd",
        "description": "In an LSP-attached buffer, use NVChad's gd mapping to request a definition.",
        "sequence": "gd",
        "code": [
          "const total = calculate([12, 8]);",
          "console.log(total);",
          "",
          "function calculate(items) {",
          "  return items.reduce((sum, item) => sum + item, 0);",
          "}"
        ],
        "cursor": [
          0,
          14
        ],
        "language": "javascript"
      },
      {
        "key": "grr",
        "description": "With a supporting LSP, request references. The default handler opens a quickfix list.",
        "sequence": "grr",
        "code": [
          "const total = calculate([12, 8]);",
          "console.log(total);",
          "",
          "function calculate(items) {",
          "  return items.reduce((sum, item) => sum + item, 0);",
          "}"
        ],
        "cursor": [
          0,
          14
        ],
        "language": "javascript"
      },
      {
        "key": "K",
        "description": "Use NVChad's gd definition mapping, Neovim 0.11's grr references default, and buffer-local K hover before changing a shared symbol.",
        "sequence": "K",
        "code": [
          "const total = calculate([12, 8]);",
          "console.log(total);",
          "",
          "function calculate(items) {",
          "  return items.reduce((sum, item) => sum + item, 0);",
          "}"
        ],
        "cursor": [
          0,
          14
        ],
        "language": "javascript"
      },
      {
        "key": "grn",
        "description": "With a supporting LSP, clear the prefilled rename prompt, enter newName, and confirm.",
        "sequence": "grn<C-u>newName<Enter>",
        "code": [
          "function oldName(value) {",
          "  return value;",
          "}",
          "",
          "console.log(oldName(42));"
        ],
        "cursor": [
          0,
          9
        ],
        "language": "javascript"
      },
      {
        "key": "gra",
        "description": "With an available code action, type 1 and Enter in Neovim's default numbered action prompt.",
        "sequence": "gra1<Enter>",
        "code": [
          "function oldName(value) {",
          "  return value;",
          "}",
          "",
          "console.log(oldName(42));"
        ],
        "cursor": [
          0,
          9
        ],
        "language": "javascript"
      },
      {
        "key": "Space fm",
        "description": "In Normal or Visual mode, format through Conform with an available formatter or LSP fallback.",
        "sequence": "<Space>fm",
        "code": [
          "// @ts-check",
          "const renamed = 42;",
          "/** @type {string} */",
          "const label = renamed;",
          "console.log(renamed, label);"
        ],
        "cursor": [
          1,
          6
        ],
        "language": "javascript"
      },
      {
        "key": "]d",
        "description": "After an LSP edit, format with Space f m, visit diagnostics with ]d, and inspect references again with grr.",
        "sequence": "]d",
        "code": [
          "// @ts-check",
          "const renamed = 42;",
          "/** @type {string} */",
          "const label = renamed;",
          "console.log(renamed, label);"
        ],
        "cursor": [
          1,
          6
        ],
        "language": "javascript"
      }
    ],
    "cursor": [
      0,
      14
    ],
    "language": "javascript"
  }
] satisfies readonly Lesson[];

export default lessons;
