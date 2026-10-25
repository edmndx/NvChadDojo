import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Completion & Snippets",
    "id": "completion-navigate",
    "title": "Navigate completion suggestions",
    "eyebrow": "Completion & Snippets",
    "summary": "While the completion menu is visible, Ctrl+n selects the next item and Ctrl+p selects the previous item.",
    "detail": "These mappings apply in Insert mode while nvim-cmp is active.",
    "keys": [
      "Ctrl+n",
      "Ctrl+p"
    ],
    "task": "Move down and up through completion suggestions.",
    "sequence": "<C-n><C-p>",
    "code": [
      "transform",
      "transformAsync",
      "transformResult"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Ctrl+n",
        "description": "In Insert/Select mode with the relevant completion or snippet UI active: While the completion menu is visible, Ctrl+n selects the next item and Ctrl+p selects the previous item.",
        "sequence": "<C-n>"
      },
      {
        "key": "Ctrl+p",
        "description": "In Insert/Select mode with the relevant completion or snippet UI active: While the completion menu is visible, Ctrl+n selects the next item and Ctrl+p selects the previous item.",
        "sequence": "<C-p>"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "Completion & Snippets",
    "id": "completion-docs",
    "title": "Read completion documentation",
    "eyebrow": "Completion & Snippets",
    "summary": "Ctrl+d scrolls documentation up and Ctrl+f scrolls it down without leaving the completion menu.",
    "detail": "Ctrl+d scrolls documentation up and Ctrl+f scrolls it down without leaving the completion menu.",
    "keys": [
      "Ctrl+d",
      "Ctrl+f"
    ],
    "task": "Scroll down through the selected completion item's documentation.",
    "sequence": "<C-f>",
    "code": [
      "transform(input, options)",
      "Parameters:",
      "  input: source value"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Ctrl+d",
        "description": "In Insert/Select mode with the relevant completion or snippet UI active: Ctrl+d scrolls documentation up and Ctrl+f scrolls it down without leaving the completion menu.",
        "sequence": "<C-d>"
      },
      {
        "key": "Ctrl+f",
        "description": "In Insert/Select mode with the relevant completion or snippet UI active: Ctrl+d scrolls documentation up and Ctrl+f scrolls it down without leaving the completion menu.",
        "sequence": "<C-f>"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "Completion & Snippets",
    "id": "completion-open-close",
    "title": "Open or cancel completion",
    "eyebrow": "Completion & Snippets",
    "summary": "Ctrl+Space requests completion and Ctrl+e closes the menu without accepting an item.",
    "detail": "Ctrl+Space requests completion and Ctrl+e closes the menu without accepting an item. The first line is an unfinished JavaScript prefix; the following rows represent the completion UI.",
    "keys": [
      "Ctrl+Space",
      "Ctrl+e"
    ],
    "task": "Open the completion menu, then cancel it.",
    "sequence": "<C-Space><C-e>",
    "code": [
      "const result = trans",
      "> transform",
      "  transformAsync"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Ctrl+Space",
        "description": "In Insert/Select mode with the relevant completion or snippet UI active: Ctrl+Space requests completion and Ctrl+e closes the menu without accepting an item.",
        "sequence": "<C-Space>"
      },
      {
        "key": "Ctrl+e",
        "description": "In Insert/Select mode with the relevant completion or snippet UI active: Ctrl+Space requests completion and Ctrl+e closes the menu without accepting an item.",
        "sequence": "<C-e>"
      }
    ],
    "cursor": [
      0,
      20
    ],
    "language": "text"
  },
  {
    "group": "Completion & Snippets",
    "id": "completion-confirm",
    "title": "Confirm a completion",
    "eyebrow": "Completion & Snippets",
    "summary": "Enter accepts the selected completion item; NVChad allows the first item to be selected on confirmation.",
    "detail": "Enter accepts the selected completion item; NVChad allows the first item to be selected on confirmation. The first line is an unfinished JavaScript prefix; the following rows represent the completion UI.",
    "keys": [
      "Enter"
    ],
    "task": "Accept the selected completion item.",
    "sequence": "<Enter>",
    "code": [
      "const result = trans",
      "> transform  <- selected",
      "console.log(result);"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Enter",
        "description": "In Insert/Select mode with the relevant completion or snippet UI active: Enter accepts the selected completion item; NVChad allows the first item to be selected on confirmation.",
        "sequence": "<Enter>"
      }
    ],
    "cursor": [
      0,
      20
    ],
    "language": "text"
  },
  {
    "group": "Completion & Snippets",
    "id": "snippet-stops",
    "title": "Move through snippet placeholders",
    "eyebrow": "Completion & Snippets",
    "summary": "Tab jumps forward and Shift+Tab jumps backward when a LuaSnip placeholder is active.",
    "detail": "The buffer shows an expanded JavaScript function snippet. With active stops for name, args, and the return expression, Tab jumps forward and Shift+Tab jumps backward.",
    "keys": [
      "Tab",
      "Shift+Tab"
    ],
    "task": "Move to the next snippet placeholder, then back.",
    "sequence": "<Tab><S-Tab>",
    "code": [
      "function name(args) {",
      "  return args;",
      "}"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Tab",
        "description": "In Insert/Select mode with the relevant completion or snippet UI active: Tab jumps forward and Shift+Tab jumps backward when a LuaSnip placeholder is active.",
        "sequence": "<Tab>"
      },
      {
        "key": "Shift+Tab",
        "description": "In Insert/Select mode with the relevant completion or snippet UI active: Tab jumps forward and Shift+Tab jumps backward when a LuaSnip placeholder is active.",
        "sequence": "<S-Tab>"
      }
    ],
    "cursor": [
      0,
      9
    ],
    "language": "javascript"
  },
  {
    "group": "Completion & Snippets",
    "id": "tab-context",
    "title": "Know what Tab will do",
    "eyebrow": "Completion & Snippets",
    "summary": "In Insert mode Tab first selects completion, otherwise jumps through a snippet, and only then falls back; in Normal mode NVChad uses Tab for buffers.",
    "detail": "Check the mode and visible UI before interpreting Tab.",
    "keys": [
      "Tab",
      "Shift+Tab"
    ],
    "task": "Practice forward and backward Tab behavior in Insert context.",
    "sequence": "<Tab><S-Tab>",
    "code": [
      "completion visible -> select",
      "snippet active -> jump",
      "Normal mode -> change buffer"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Tab",
        "description": "In Insert/Select mode with the relevant completion or snippet UI active: In Insert mode Tab first selects completion, otherwise jumps through a snippet, and only then falls back; in Normal mode NVChad uses Tab for buffers.",
        "sequence": "<Tab>"
      },
      {
        "key": "Shift+Tab",
        "description": "In Insert/Select mode with the relevant completion or snippet UI active: In Insert mode Tab first selects completion, otherwise jumps through a snippet, and only then falls back; in Normal mode NVChad uses Tab for buffers.",
        "sequence": "<S-Tab>"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "Completion & Snippets",
    "id": "completion-snippets-review",
    "title": "Completion & Snippets Review",
    "eyebrow": "Completion & Snippets",
    "summary": "Review every command introduced in Completion & Snippets before moving to the next category.",
    "detail": "Review every command introduced in Completion & Snippets before moving to the next category.",
    "keys": [
      "Ctrl+n",
      "Ctrl+p",
      "Ctrl+d",
      "Ctrl+f",
      "Ctrl+Space",
      "Ctrl+e",
      "Enter",
      "Tab",
      "Shift+Tab"
    ],
    "task": "",
    "sequence": "<C-n><C-p>",
    "code": [
      "transform",
      "transformAsync",
      "transformResult"
    ],
    "tip": "Return to any command in Completion & Snippets that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "Ctrl+n",
        "description": "In Insert/Select mode with the relevant completion or snippet UI active: While the completion menu is visible, Ctrl+n selects the next item and Ctrl+p selects the previous item.",
        "sequence": "<C-n>",
        "code": [
          "transform",
          "transformAsync",
          "transformResult"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "Ctrl+p",
        "description": "In Insert/Select mode with the relevant completion or snippet UI active: While the completion menu is visible, Ctrl+n selects the next item and Ctrl+p selects the previous item.",
        "sequence": "<C-p>",
        "code": [
          "transform",
          "transformAsync",
          "transformResult"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "Ctrl+d",
        "description": "In Insert/Select mode with the relevant completion or snippet UI active: Ctrl+d scrolls documentation up and Ctrl+f scrolls it down without leaving the completion menu.",
        "sequence": "<C-d>",
        "code": [
          "transform(input, options)",
          "Parameters:",
          "  input: source value"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "Ctrl+f",
        "description": "In Insert/Select mode with the relevant completion or snippet UI active: Ctrl+d scrolls documentation up and Ctrl+f scrolls it down without leaving the completion menu.",
        "sequence": "<C-f>",
        "code": [
          "transform(input, options)",
          "Parameters:",
          "  input: source value"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "Ctrl+Space",
        "description": "In Insert/Select mode with the relevant completion or snippet UI active: Ctrl+Space requests completion and Ctrl+e closes the menu without accepting an item.",
        "sequence": "<C-Space>",
        "code": [
          "const result = trans",
          "> transform",
          "  transformAsync"
        ],
        "cursor": [
          0,
          20
        ],
        "language": "text"
      },
      {
        "key": "Ctrl+e",
        "description": "In Insert/Select mode with the relevant completion or snippet UI active: Ctrl+Space requests completion and Ctrl+e closes the menu without accepting an item.",
        "sequence": "<C-e>",
        "code": [
          "const result = trans",
          "> transform",
          "  transformAsync"
        ],
        "cursor": [
          0,
          20
        ],
        "language": "text"
      },
      {
        "key": "Enter",
        "description": "In Insert/Select mode with the relevant completion or snippet UI active: Enter accepts the selected completion item; NVChad allows the first item to be selected on confirmation.",
        "sequence": "<Enter>",
        "code": [
          "const result = trans",
          "> transform  <- selected",
          "console.log(result);"
        ],
        "cursor": [
          0,
          20
        ],
        "language": "text"
      },
      {
        "key": "Tab",
        "description": "In Insert/Select mode with the relevant completion or snippet UI active: Tab jumps forward and Shift+Tab jumps backward when a LuaSnip placeholder is active.",
        "sequence": "<Tab>",
        "code": [
          "function name(args) {",
          "  return args;",
          "}"
        ],
        "cursor": [
          0,
          9
        ],
        "language": "javascript"
      },
      {
        "key": "Shift+Tab",
        "description": "In Insert/Select mode with the relevant completion or snippet UI active: Tab jumps forward and Shift+Tab jumps backward when a LuaSnip placeholder is active.",
        "sequence": "<S-Tab>",
        "code": [
          "function name(args) {",
          "  return args;",
          "}"
        ],
        "cursor": [
          0,
          9
        ],
        "language": "javascript"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  }
] satisfies readonly Lesson[];

export default lessons;
