import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Multi-file Challenges",
    "id": "capstone-find-open",
    "title": "Find and open a symbol in a split",
    "eyebrow": "Multi-file Challenges",
    "summary": "Search project text, choose a result, and open it in a vertical split without leaving the picker workflow.",
    "detail": "Ripgrep must be installed and the project must contain matches. Type the query and wait for results before moving or opening a split.",
    "keys": [
      "Space fw",
      "Ctrl+n",
      "Ctrl+v"
    ],
    "task": "Search for calculateTotal with live grep, choose the next result, and open it vertically.",
    "sequence": "<Space>fwcalculateTotal<C-n><C-v>",
    "code": [
      "> Live Grep: calculateTotal",
      "  src/cart.ts",
      "  src/checkout.ts"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Space fw",
        "description": "Search project text, choose a result, and open it in a vertical split without leaving the picker workflow.",
        "sequence": "<Space>fw"
      },
      {
        "key": "Ctrl+n",
        "description": "Search project text, choose a result, and open it in a vertical split without leaving the picker workflow.",
        "sequence": "<C-n>"
      },
      {
        "key": "Ctrl+v",
        "description": "Search project text, choose a result, and open it in a vertical split without leaving the picker workflow.",
        "sequence": "<C-v>"
      }
    ],
    "cursor": [
      1,
      2
    ],
    "language": "text"
  },
  {
    "group": "Multi-file Challenges",
    "id": "capstone-refactor",
    "title": "Refactor across several files",
    "eyebrow": "Multi-file Challenges",
    "summary": "Rename a symbol semantically, inspect references, format the result, and check the next diagnostic.",
    "detail": "Clear the prefilled rename prompt before entering renamed. Wait for rename and references; after the default references quickfix opens, Ctrl+w p returns to the editor before formatting. A diagnostic must exist to navigate to one.",
    "keys": [
      "grn",
      "grr",
      "Space fm",
      "]d"
    ],
    "task": "Rename, inspect references, format, and check diagnostics.",
    "sequence": "grn<C-u>renamed<Enter>grr<C-w>p<Space>fm]d",
    "code": [
      "const total = calculateTotal([12, 8]);",
      "console.log(total);",
      "",
      "function calculateTotal(items) {",
      "  return items.reduce((sum, item) => sum + item, 0);",
      "}"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "grn",
        "description": "With a supporting LSP, clear the prefilled rename prompt, enter newName, and confirm.",
        "sequence": "grn<C-u>newName<Enter>"
      },
      {
        "key": "grr",
        "description": "With a supporting LSP, request references. The default handler opens a quickfix list.",
        "sequence": "grr"
      },
      {
        "key": "Space fm",
        "description": "In Normal or Visual mode, format through Conform with an available formatter or LSP fallback.",
        "sequence": "<Space>fm"
      },
      {
        "key": "]d",
        "description": "Rename a symbol semantically, inspect references, format the result, and check the next diagnostic.",
        "sequence": "]d"
      }
    ],
    "cursor": [
      0,
      14
    ],
    "language": "javascript"
  },
  {
    "group": "Multi-file Challenges",
    "id": "capstone-review-commit",
    "title": "Review and commit a refactor",
    "eyebrow": "Multi-file Challenges",
    "summary": "Preview changed hunks, stage the buffer, inspect Git status, then open LazyGit to commit.",
    "detail": "With the suggested Gitsigns mappings configured, preview and stage the current buffer. Inspect Telescope Git status, close its picker with Ctrl+c, then launch LazyGit and commit the staged work. Other changed buffers require separate review/staging.",
    "keys": [
      "Space hp",
      "Space hS",
      "Space gt",
      ":LazyGit",
      "c"
    ],
    "task": "Preview, stage, inspect status, and commit with the message refactor complete.",
    "sequence": "<Space>hp<Space>hS<Space>gt<C-c>:LazyGit<Enter>crefactor<Space>complete<Enter>",
    "code": [
      "M src/cart.ts",
      "M src/checkout.ts",
      "M tests/cart.test.ts"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Space hp",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Preview changed hunks, stage the buffer, inspect Git status, then open LazyGit to commit.",
        "sequence": "<Space>hp"
      },
      {
        "key": "Space hS",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Preview changed hunks, stage the buffer, inspect Git status, then open LazyGit to commit.",
        "sequence": "<Space>hS"
      },
      {
        "key": "Space gt",
        "description": "Preview changed hunks, stage the buffer, inspect Git status, then open LazyGit to commit.",
        "sequence": "<Space>gt"
      },
      {
        "key": ":LazyGit",
        "description": "Preview changed hunks, stage the buffer, inspect Git status, then open LazyGit to commit.",
        "sequence": ":LazyGit<Enter>"
      },
      {
        "key": "c",
        "description": "Preview changed hunks, stage the buffer, inspect Git status, then open LazyGit to commit.",
        "sequence": "c"
      }
    ],
    "cursor": [
      0,
      2
    ],
    "language": "text"
  },
  {
    "group": "Multi-file Challenges",
    "id": "multi-file-challenges-review",
    "title": "Multi-file Challenges Review",
    "eyebrow": "Multi-file Challenges",
    "summary": "Review the search, refactoring, verification, and Git commands used across the multi-file challenges.",
    "detail": "Review the search, refactoring, verification, and Git commands used across the multi-file challenges.",
    "keys": [
      "Space fw",
      "Ctrl+n",
      "Ctrl+v",
      "grn",
      "grr",
      "Space fm",
      "]d",
      "Space hp",
      "Space hS",
      "Space gt",
      ":LazyGit",
      "c"
    ],
    "task": "",
    "sequence": "<Space>fw<C-n><C-v>",
    "code": [
      "> Live Grep: calculateTotal",
      "  src/cart.ts",
      "  src/checkout.ts"
    ],
    "tip": "Return to any multi-file workflow that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "Space fw",
        "description": "Search project text, choose a result, and open it in a vertical split without leaving the picker workflow.",
        "sequence": "<Space>fw",
        "code": [
          "> Live Grep: calculateTotal",
          "  src/cart.ts",
          "  src/checkout.ts"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "Ctrl+n",
        "description": "Search project text, choose a result, and open it in a vertical split without leaving the picker workflow.",
        "sequence": "<C-n>",
        "code": [
          "> Live Grep: calculateTotal",
          "  src/cart.ts",
          "  src/checkout.ts"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "Ctrl+v",
        "description": "Search project text, choose a result, and open it in a vertical split without leaving the picker workflow.",
        "sequence": "<C-v>",
        "code": [
          "> Live Grep: calculateTotal",
          "  src/cart.ts",
          "  src/checkout.ts"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "grn",
        "description": "With a supporting LSP, clear the prefilled rename prompt, enter newName, and confirm.",
        "sequence": "grn<C-u>newName<Enter>",
        "code": [
          "const total = calculateTotal([12, 8]);",
          "console.log(total);",
          "",
          "function calculateTotal(items) {",
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
          "const total = calculateTotal([12, 8]);",
          "console.log(total);",
          "",
          "function calculateTotal(items) {",
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
        "key": "Space fm",
        "description": "In Normal or Visual mode, format through Conform with an available formatter or LSP fallback.",
        "sequence": "<Space>fm",
        "code": [
          "const total = calculateTotal([12, 8]);",
          "console.log(total);",
          "",
          "function calculateTotal(items) {",
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
        "key": "]d",
        "description": "Rename a symbol semantically, inspect references, format the result, and check the next diagnostic.",
        "sequence": "]d",
        "code": [
          "const total = calculateTotal([12, 8]);",
          "console.log(total);",
          "",
          "function calculateTotal(items) {",
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
        "key": "Space hp",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Preview changed hunks, stage the buffer, inspect Git status, then open LazyGit to commit.",
        "sequence": "<Space>hp",
        "code": [
          "M src/cart.ts",
          "M src/checkout.ts",
          "M tests/cart.test.ts"
        ],
        "cursor": [
          0,
          2
        ],
        "language": "text"
      },
      {
        "key": "Space hS",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Preview changed hunks, stage the buffer, inspect Git status, then open LazyGit to commit.",
        "sequence": "<Space>hS",
        "code": [
          "M src/cart.ts",
          "M src/checkout.ts",
          "M tests/cart.test.ts"
        ],
        "cursor": [
          0,
          2
        ],
        "language": "text"
      },
      {
        "key": "Space gt",
        "description": "Preview changed hunks, stage the buffer, inspect Git status, then open LazyGit to commit.",
        "sequence": "<Space>gt",
        "code": [
          "M src/cart.ts",
          "M src/checkout.ts",
          "M tests/cart.test.ts"
        ],
        "cursor": [
          0,
          2
        ],
        "language": "text"
      },
      {
        "key": ":LazyGit",
        "description": "Preview changed hunks, stage the buffer, inspect Git status, then open LazyGit to commit.",
        "sequence": ":LazyGit<Enter>",
        "code": [
          "M src/cart.ts",
          "M src/checkout.ts",
          "M tests/cart.test.ts"
        ],
        "cursor": [
          0,
          2
        ],
        "language": "text"
      },
      {
        "key": "c",
        "description": "Preview changed hunks, stage the buffer, inspect Git status, then open LazyGit to commit.",
        "sequence": "c",
        "code": [
          "M src/cart.ts",
          "M src/checkout.ts",
          "M tests/cart.test.ts"
        ],
        "cursor": [
          0,
          2
        ],
        "language": "text"
      }
    ],
    "cursor": [
      1,
      2
    ],
    "language": "text"
  }
] satisfies readonly Lesson[];

export default lessons;
