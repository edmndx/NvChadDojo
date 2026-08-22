import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Multi-file Challenges",
    "id": "capstone-find-open",
    "title": "Find and open a symbol in a split",
    "eyebrow": "Multi-file Challenges",
    "summary": "Search project text, choose a result, and open it in a vertical split without leaving the picker workflow.",
    "detail": "Search project text, choose a result, and open it in a vertical split without leaving the picker workflow.",
    "keys": [
      "Space fw",
      "Ctrl+n",
      "Ctrl+v"
    ],
    "task": "Open live grep, move to a result, and open it vertically.",
    "sequence": "<Space>fw<C-n><C-v>",
    "code": [
      "> Live Grep: calculateTotal",
      "  src/cart.ts",
      "  src/checkout.ts"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Multi-file Challenges",
    "id": "capstone-refactor",
    "title": "Refactor across several files",
    "eyebrow": "Multi-file Challenges",
    "summary": "Rename a symbol semantically, inspect references, format the result, and check the next diagnostic.",
    "detail": "Rename a symbol semantically, inspect references, format the result, and check the next diagnostic.",
    "keys": [
      "grn",
      "grr",
      "Space fm",
      "]d"
    ],
    "task": "Rename, inspect references, format, and check diagnostics.",
    "sequence": "grngrr<Space>fm]d",
    "code": [
      "src/cart.ts",
      "src/checkout.ts",
      "tests/cart.test.ts"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Multi-file Challenges",
    "id": "capstone-review-commit",
    "title": "Review and commit a refactor",
    "eyebrow": "Multi-file Challenges",
    "summary": "Preview changed hunks, stage the buffer, inspect Git status, then open LazyGit to commit.",
    "detail": "Preview changed hunks, stage the buffer, inspect Git status, then open LazyGit to commit.",
    "keys": [
      "Space hp",
      "Space hS",
      "Space gt",
      ":LazyGit",
      "c"
    ],
    "task": "Preview, stage, inspect status, and open the commit workflow.",
    "sequence": "<Space>hp<Space>hS<Space>gt:LazyGit<Enter>c",
    "code": [
      "M src/cart.ts",
      "M src/checkout.ts",
      "M tests/cart.test.ts"
    ],
    "tip": "Keep your hands on the home row."
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
      "src/cart.ts",
      "src/checkout.ts",
      "tests/cart.test.ts"
    ],
    "tip": "Return to any multi-file workflow that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "Space fw",
        "description": "Open live grep to search project text before choosing a destination.",
        "sequence": "<Space>fw"
      },
      {
        "key": "Ctrl+n",
        "description": "Move to the next Telescope result while keeping the picker open.",
        "sequence": "<C-n>"
      },
      {
        "key": "Ctrl+v",
        "description": "Open the selected Telescope result in a vertical split.",
        "sequence": "<C-v>"
      },
      {
        "key": "grn",
        "description": "Rename a symbol semantically across the project.",
        "sequence": "grn"
      },
      {
        "key": "grr",
        "description": "Inspect every reference to the symbol after the rename.",
        "sequence": "grr"
      },
      {
        "key": "Space fm",
        "description": "Format the edited buffer after the refactor.",
        "sequence": "<Space>fm"
      },
      {
        "key": "]d",
        "description": "Move to the next diagnostic and verify the refactor.",
        "sequence": "]d"
      },
      {
        "key": "Space hp",
        "description": "Preview the current Git hunk before staging it.",
        "sequence": "<Space>hp"
      },
      {
        "key": "Space hS",
        "description": "Stage all hunks in the current buffer.",
        "sequence": "<Space>hS"
      },
      {
        "key": "Space gt",
        "description": "Open Telescope Git status to inspect the working tree.",
        "sequence": "<Space>gt"
      },
      {
        "key": ":LazyGit",
        "description": "Launch LazyGit for the final repository review and commit workflow.",
        "sequence": ":LazyGit<Enter>"
      },
      {
        "key": "c",
        "description": "Create a commit from the staged changes in LazyGit.",
        "sequence": "c"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
