import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Files & Command Line",
    "id": "save-file",
    "title": "Save and Keep Editing",
    "eyebrow": "Files & Command Line",
    "summary": ":w writes the current buffer to disk and keeps it open.",
    "detail": ":w writes the current buffer to disk and keeps it open.",
    "keys": [
      ":w",
      "Enter"
    ],
    "task": "Save the current buffer without closing it.",
    "sequence": ":w<Enter>",
    "code": [
      "-- edited init.lua",
      "local theme = 'onedark'",
      "return theme"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Save the current buffer without closing it. · repetition 1 of 3",
        "code": [
          "-- edited init.lua",
          "local theme = 'onedark'",
          "return theme"
        ]
      },
      {
        "goal": "Save the current buffer without closing it. · repetition 2 of 3",
        "code": [
          "-- unsaved mappings.lua",
          "vim.keymap.set('n', '<leader>x', close)",
          "return true"
        ]
      },
      {
        "goal": "Save the current buffer without closing it. · repetition 3 of 3",
        "code": [
          "-- finished configuration",
          "vim.o.number = true",
          "return true"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Save the current buffer without closing it.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with :w.",
        "Use only the keys introduced in Files & Command Line.",
        "Compose the command from: :w, Enter."
      ],
      "success": "Save and Keep Editing produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Files & Command Line",
    "id": "save-and-exit",
    "title": "Save or Exit Safely",
    "eyebrow": "Files & Command Line",
    "summary": ":wq saves and exits, :q exits an unchanged buffer, and :q! deliberately discards unsaved changes.",
    "detail": ":wq saves and exits, :q exits an unchanged buffer, and :q! deliberately discards unsaved changes.",
    "keys": [
      ":wq",
      ":q",
      ":q!"
    ],
    "task": "Save the current buffer and exit.",
    "sequence": ":wq<Enter>",
    "code": [
      "-- edited init.lua",
      "local theme = 'onedark'",
      "return theme"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Save the current buffer and exit. · repetition 1 of 3",
        "code": [
          "-- edited init.lua",
          "local theme = 'onedark'",
          "return theme"
        ]
      },
      {
        "goal": "Save the current buffer and exit. · repetition 2 of 3",
        "code": [
          "-- unsaved mappings.lua",
          "vim.keymap.set('n', '<leader>x', close)",
          "return true"
        ]
      },
      {
        "goal": "Save the current buffer and exit. · repetition 3 of 3",
        "code": [
          "-- finished configuration",
          "vim.o.number = true",
          "return true"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Save the current buffer and exit.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with :wq.",
        "Use only the keys introduced in Files & Command Line.",
        "Compose the command from: :wq, :q, :q!."
      ],
      "success": "Save or Exit Safely produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Files & Command Line",
    "id": "files-command-line-review",
    "title": "Files & Command Line Review",
    "eyebrow": "Files & Command Line",
    "summary": "Review every command introduced in Files & Command Line before moving to the next category.",
    "detail": "Review every command introduced in Files & Command Line before moving to the next category.",
    "keys": [
      ":w",
      "Enter",
      ":wq",
      ":q",
      ":q!"
    ],
    "task": "",
    "sequence": ":w<Enter>",
    "code": [
      "-- edited init.lua",
      "local theme = 'onedark'",
      "return theme"
    ],
    "tip": "Return to any command in Files & Command Line that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": ":w",
        "description": ":w writes the current buffer to disk and keeps it open.",
        "sequence": ":w<Enter>"
      },
      {
        "key": "Enter",
        "description": ":w writes the current buffer to disk and keeps it open.",
        "sequence": ":w<Enter>"
      },
      {
        "key": ":wq",
        "description": ":wq saves and exits, :q exits an unchanged buffer, and :q! deliberately discards unsaved changes.",
        "sequence": ":wq<Enter>"
      },
      {
        "key": ":q",
        "description": ":wq saves and exits, :q exits an unchanged buffer, and :q! deliberately discards unsaved changes.",
        "sequence": ":wq<Enter>"
      },
      {
        "key": ":q!",
        "description": ":wq saves and exits, :q exits an unchanged buffer, and :q! deliberately discards unsaved changes.",
        "sequence": ":wq<Enter>"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
