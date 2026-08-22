import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Terminal Workflow",
    "id": "new-terminal-splits",
    "title": "Create split terminals",
    "eyebrow": "Terminal Workflow",
    "summary": "Space h creates a horizontal terminal and Space v creates a vertical terminal.",
    "detail": "Space h creates a horizontal terminal and Space v creates a vertical terminal.",
    "keys": [
      "Space h",
      "Space v"
    ],
    "task": "Create a new horizontal terminal.",
    "sequence": "<Space>h",
    "code": [
      "editor",
      "-----------------------------",
      "$ npm test"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Terminal Workflow",
    "id": "toggle-terminal-splits",
    "title": "Toggle reusable split terminals",
    "eyebrow": "Terminal Workflow",
    "summary": "Alt+h and Alt+v show or hide persistent horizontal and vertical terminals.",
    "detail": "Alt+h and Alt+v show or hide persistent horizontal and vertical terminals.",
    "keys": [
      "Alt+h",
      "Alt+v"
    ],
    "task": "Toggle the horizontal terminal, then the vertical terminal.",
    "sequence": "<A-h><A-v>",
    "code": [
      "$ npm run dev",
      "$ git status",
      "-- reusable terminal buffers"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Terminal Workflow",
    "id": "terminal",
    "title": "Toggle a floating terminal",
    "eyebrow": "Terminal Workflow",
    "summary": "Alt+i opens or hides NVChad's reusable floating terminal.",
    "detail": "The same shortcut restores the same toggleable terminal; it does not start a fresh shell each time.",
    "keys": [
      "Alt+i"
    ],
    "task": "Toggle the floating terminal.",
    "sequence": "<A-i>",
    "code": [
      "╭─ Floating terminal ─────────╮",
      "│ $ npm run dev              │",
      "╰────────────────────────────╯"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Terminal Workflow",
    "id": "terminal-mode",
    "title": "Control Terminal mode",
    "eyebrow": "Terminal Workflow",
    "summary": "Press i to send input to the shell and Ctrl+x to return to Normal mode in NVChad.",
    "detail": "Press i to send input to the shell and Ctrl+x to return to Normal mode in NVChad.",
    "keys": [
      "i",
      "Ctrl+x"
    ],
    "task": "Enter Terminal mode, then return to Normal mode.",
    "sequence": "i<C-x>",
    "code": [
      "$ echo ready",
      "ready",
      "$ "
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Terminal Workflow",
    "id": "recover-terminals",
    "title": "Recover a hidden terminal",
    "eyebrow": "Terminal Workflow",
    "summary": "Space p t opens Telescope's terminal picker for terminal buffers hidden from the layout.",
    "detail": "Space p t opens Telescope's terminal picker for terminal buffers hidden from the layout.",
    "keys": [
      "Space pt"
    ],
    "task": "Open the hidden-terminal picker.",
    "sequence": "<Space>pt",
    "code": [
      "> Terminal buffers",
      "  1: npm run dev",
      "  2: git status"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Terminal Workflow",
    "id": "end-terminal",
    "title": "End or close a terminal",
    "eyebrow": "Terminal Workflow",
    "summary": "exit ends the shell process; after Ctrl+x, Space x closes the terminal buffer through NVChad's tabufline.",
    "detail": "exit ends the shell process; after Ctrl+x, Space x closes the terminal buffer through NVChad's tabufline.",
    "keys": [
      "exit",
      "Ctrl+x",
      "Space x"
    ],
    "task": "Leave Terminal mode and close its buffer.",
    "sequence": "<C-x><Space>x",
    "code": [
      "$ exit",
      "[Process exited 0]",
      "-- terminal buffer"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Terminal Workflow",
    "id": "terminal-workflow-review",
    "title": "Terminal Workflow Review",
    "eyebrow": "Terminal Workflow",
    "summary": "Review every command introduced in Terminal Workflow before moving to the next category.",
    "detail": "Review every command introduced in Terminal Workflow before moving to the next category.",
    "keys": [
      "Space h",
      "Space v",
      "Alt+h",
      "Alt+v",
      "Alt+i",
      "i",
      "Ctrl+x",
      "Space pt",
      "exit",
      "Space x"
    ],
    "task": "",
    "sequence": "<Space>h",
    "code": [
      "editor",
      "-----------------------------",
      "$ npm test"
    ],
    "tip": "Return to any command in Terminal Workflow that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "Space h",
        "description": "Space h creates a horizontal terminal and Space v creates a vertical terminal.",
        "sequence": "<Space>h"
      },
      {
        "key": "Space v",
        "description": "Space h creates a horizontal terminal and Space v creates a vertical terminal.",
        "sequence": "<Space>h"
      },
      {
        "key": "Alt+h",
        "description": "Alt+h and Alt+v show or hide persistent horizontal and vertical terminals.",
        "sequence": "<A-h><A-v>"
      },
      {
        "key": "Alt+v",
        "description": "Alt+h and Alt+v show or hide persistent horizontal and vertical terminals.",
        "sequence": "<A-h><A-v>"
      },
      {
        "key": "Alt+i",
        "description": "Alt+i opens or hides NVChad's reusable floating terminal.",
        "sequence": "<A-i>"
      },
      {
        "key": "i",
        "description": "Press i to send input to the shell and Ctrl+x to return to Normal mode in NVChad.",
        "sequence": "i<C-x>"
      },
      {
        "key": "Ctrl+x",
        "description": "Press i to send input to the shell and Ctrl+x to return to Normal mode in NVChad.",
        "sequence": "i<C-x>"
      },
      {
        "key": "Space pt",
        "description": "Space p t opens Telescope's terminal picker for terminal buffers hidden from the layout.",
        "sequence": "<Space>pt"
      },
      {
        "key": "exit",
        "description": "exit ends the shell process; after Ctrl+x, Space x closes the terminal buffer through NVChad's tabufline.",
        "sequence": "<C-x><Space>x"
      },
      {
        "key": "Space x",
        "description": "exit ends the shell process; after Ctrl+x, Space x closes the terminal buffer through NVChad's tabufline.",
        "sequence": "<C-x><Space>x"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
