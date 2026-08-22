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
    "tip": "Keep your hands on the home row."
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
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Completion & Snippets",
    "id": "completion-open-close",
    "title": "Open or cancel completion",
    "eyebrow": "Completion & Snippets",
    "summary": "Ctrl+Space requests completion and Ctrl+e closes the menu without accepting an item.",
    "detail": "Ctrl+Space requests completion and Ctrl+e closes the menu without accepting an item.",
    "keys": [
      "Ctrl+Space",
      "Ctrl+e"
    ],
    "task": "Open the completion menu, then cancel it.",
    "sequence": "<C-Space><C-e>",
    "code": [
      "local result = trans",
      "> transform",
      "  transformAsync"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Completion & Snippets",
    "id": "completion-confirm",
    "title": "Confirm a completion",
    "eyebrow": "Completion & Snippets",
    "summary": "Enter accepts the selected completion item; NVChad allows the first item to be selected on confirmation.",
    "detail": "Enter accepts the selected completion item; NVChad allows the first item to be selected on confirmation.",
    "keys": [
      "Enter"
    ],
    "task": "Accept the selected completion item.",
    "sequence": "<Enter>",
    "code": [
      "local result = transform",
      "                  ^ selected",
      "return result"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Completion & Snippets",
    "id": "snippet-stops",
    "title": "Move through snippet placeholders",
    "eyebrow": "Completion & Snippets",
    "summary": "Tab jumps forward and Shift+Tab jumps backward when a LuaSnip placeholder is active.",
    "detail": "Tab jumps forward and Shift+Tab jumps backward when a LuaSnip placeholder is active.",
    "keys": [
      "Tab",
      "Shift+Tab"
    ],
    "task": "Move to the next snippet placeholder, then back.",
    "sequence": "<Tab><S-Tab>",
    "code": [
      "function ${1:name}(${2:args})",
      "  ${3:body}",
      "end"
    ],
    "tip": "Keep your hands on the home row."
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
    "tip": "Keep your hands on the home row."
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
        "description": "While the completion menu is visible, Ctrl+n selects the next item and Ctrl+p selects the previous item.",
        "sequence": "<C-n><C-p>"
      },
      {
        "key": "Ctrl+p",
        "description": "While the completion menu is visible, Ctrl+n selects the next item and Ctrl+p selects the previous item.",
        "sequence": "<C-n><C-p>"
      },
      {
        "key": "Ctrl+d",
        "description": "Ctrl+d scrolls documentation up and Ctrl+f scrolls it down without leaving the completion menu.",
        "sequence": "<C-f>"
      },
      {
        "key": "Ctrl+f",
        "description": "Ctrl+d scrolls documentation up and Ctrl+f scrolls it down without leaving the completion menu.",
        "sequence": "<C-f>"
      },
      {
        "key": "Ctrl+Space",
        "description": "Ctrl+Space requests completion and Ctrl+e closes the menu without accepting an item.",
        "sequence": "<C-Space><C-e>"
      },
      {
        "key": "Ctrl+e",
        "description": "Ctrl+Space requests completion and Ctrl+e closes the menu without accepting an item.",
        "sequence": "<C-Space><C-e>"
      },
      {
        "key": "Enter",
        "description": "Enter accepts the selected completion item; NVChad allows the first item to be selected on confirmation.",
        "sequence": "<Enter>"
      },
      {
        "key": "Tab",
        "description": "Tab jumps forward and Shift+Tab jumps backward when a LuaSnip placeholder is active.",
        "sequence": "<Tab><S-Tab>"
      },
      {
        "key": "Shift+Tab",
        "description": "Tab jumps forward and Shift+Tab jumps backward when a LuaSnip placeholder is active.",
        "sequence": "<Tab><S-Tab>"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
