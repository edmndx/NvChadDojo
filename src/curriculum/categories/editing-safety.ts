import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Editing Safety",
    "id": "undo-change",
    "title": "Undo the Last Change",
    "eyebrow": "Editing Safety",
    "summary": "u reverses the latest change so experimentation stays safe.",
    "detail": "u reverses the latest change so experimentation stays safe.",
    "keys": [
      "x",
      "u"
    ],
    "task": "Delete one character with x, then undo that edit.",
    "sequence": "xu",
    "code": [
      "local theme = 'old-theme'",
      "local contrast = 'high'",
      "return theme"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Delete one character with x, then undo that edit. · repetition 1 of 3",
        "code": [
          "local theme = 'old-theme'",
          "local contrast = 'high'",
          "return theme"
        ]
      },
      {
        "goal": "Delete one character with x, then undo that edit. · repetition 2 of 3",
        "code": [
          "vim.o.wrap = true",
          "vim.o.number = true",
          "return true"
        ]
      },
      {
        "goal": "Delete one character with x, then undo that edit. · repetition 3 of 3",
        "code": [
          "local server = 'lua_ls'",
          "enable(server)",
          "return server"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Delete one character with x, then undo that edit.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with x.",
        "Use only the keys introduced in Editing Safety.",
        "Compose the command from: x, u."
      ],
      "success": "Undo the Last Change produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Editing Safety",
    "id": "redo-change",
    "title": "Redo an Undo",
    "eyebrow": "Editing Safety",
    "summary": "Ctrl+r reapplies the change most recently removed by undo.",
    "detail": "Ctrl+r reapplies the change most recently removed by undo.",
    "keys": [
      "x",
      "u",
      "Ctrl+r"
    ],
    "task": "Delete one character, undo it, then restore the deletion with redo.",
    "sequence": "xu<C-r>",
    "code": [
      "local theme = 'old-theme'",
      "local contrast = 'high'",
      "return theme"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Delete one character, undo it, then restore the deletion with redo. · repetition 1 of 3",
        "code": [
          "local theme = 'old-theme'",
          "local contrast = 'high'",
          "return theme"
        ]
      },
      {
        "goal": "Delete one character, undo it, then restore the deletion with redo. · repetition 2 of 3",
        "code": [
          "vim.o.wrap = true",
          "vim.o.number = true",
          "return true"
        ]
      },
      {
        "goal": "Delete one character, undo it, then restore the deletion with redo. · repetition 3 of 3",
        "code": [
          "local server = 'lua_ls'",
          "enable(server)",
          "return server"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Delete one character, undo it, then restore the deletion with redo.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with x.",
        "Use only the keys introduced in Editing Safety.",
        "Compose the command from: x, u, Ctrl+r."
      ],
      "success": "Redo an Undo produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Editing Safety",
    "id": "editing-safety-review",
    "title": "Editing Safety Review",
    "eyebrow": "Editing Safety",
    "summary": "Review every command introduced in Editing Safety before moving to the next category.",
    "detail": "Review every command introduced in Editing Safety before moving to the next category.",
    "keys": [
      "x",
      "u",
      "Ctrl+r"
    ],
    "task": "",
    "sequence": "xu",
    "code": [
      "local theme = 'old-theme'",
      "local contrast = 'high'",
      "return theme"
    ],
    "tip": "Return to any command in Editing Safety that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "x",
        "description": "u reverses the latest change so experimentation stays safe.",
        "sequence": "xu"
      },
      {
        "key": "u",
        "description": "u reverses the latest change so experimentation stays safe.",
        "sequence": "xu"
      },
      {
        "key": "Ctrl+r",
        "description": "Ctrl+r reapplies the change most recently removed by undo.",
        "sequence": "xu<C-r>"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
