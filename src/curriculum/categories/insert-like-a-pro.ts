import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Insert Like a Pro",
    "id": "insert-line-ends",
    "title": "Insert at Line Ends",
    "eyebrow": "Insert Like a Pro",
    "summary": "I inserts at the first non-blank character; A appends at the end of the line.",
    "detail": "I inserts at the first non-blank character; A appends at the end of the line.",
    "keys": [
      "I",
      "A",
      "Esc"
    ],
    "task": "Use I, A, then Escape.",
    "sequence": "IA<Esc>",
    "code": [
      "local greeting = 'hello'",
      "print(greeting)",
      "return greeting"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Use I, A, then Escape. · repetition 1 of 3",
        "code": [
          "local greeting = 'hello'",
          "print(greeting)",
          "return greeting"
        ]
      },
      {
        "goal": "Use I, A, then Escape. · repetition 2 of 3",
        "code": [
          "local servers = { 'lua_ls' }",
          "vim.lsp.enable(servers)",
          "return servers"
        ]
      },
      {
        "goal": "Use I, A, then Escape. · repetition 3 of 3",
        "code": [
          "map('n', '<leader>w', save)",
          "map('n', '<leader>q', close)",
          "return map"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Use I, A, then Escape. Enter “ -- configured” where text is requested.",
      "replacement": " -- configured",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with I.",
        "Use only the keys introduced in Insert Like a Pro.",
        "Enter “ -- configured” before returning to Normal mode."
      ],
      "success": "The buffer now contains “ -- configured” in the intended location."
    }
  },
  {
    "group": "Insert Like a Pro",
    "id": "opening-lines",
    "title": "Opening New Lines",
    "eyebrow": "Insert Like a Pro",
    "summary": "o opens a line below and O opens one above; both enter Insert mode.",
    "detail": "o opens a line below and O opens one above; both enter Insert mode.",
    "keys": [
      "o",
      "O"
    ],
    "task": "Open below, escape, open above, and escape.",
    "sequence": "o<Esc>O<Esc>",
    "code": [
      "local greeting = 'hello'",
      "print(greeting)",
      "return greeting"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Open below, escape, open above, and escape. · repetition 1 of 3",
        "code": [
          "local greeting = 'hello'",
          "print(greeting)",
          "return greeting"
        ]
      },
      {
        "goal": "Open below, escape, open above, and escape. · repetition 2 of 3",
        "code": [
          "local servers = { 'lua_ls' }",
          "vim.lsp.enable(servers)",
          "return servers"
        ]
      },
      {
        "goal": "Open below, escape, open above, and escape. · repetition 3 of 3",
        "code": [
          "map('n', '<leader>w', save)",
          "map('n', '<leader>q', close)",
          "return map"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Open below, escape, open above, and escape. Enter “theme = 'onedark'” where text is requested.",
      "replacement": "theme = 'onedark'",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with o.",
        "Use only the keys introduced in Insert Like a Pro.",
        "Enter “theme = 'onedark'” before returning to Normal mode."
      ],
      "success": "The buffer now contains “theme = 'onedark'” in the intended location."
    }
  },
  {
    "group": "Insert Like a Pro",
    "id": "small-edits",
    "title": "Making Small Edits",
    "eyebrow": "Insert Like a Pro",
    "summary": "s substitutes a character, x deletes one, and r replaces one in place.",
    "detail": "s substitutes a character, x deletes one, and r replaces one in place.",
    "keys": [
      "s",
      "x",
      "r"
    ],
    "task": "Use s, Escape, x, then r.",
    "sequence": "s<Esc>xr",
    "code": [
      "local greeting = 'hello'",
      "print(greeting)",
      "return greeting"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Use s, Escape, x, then r. · repetition 1 of 3",
        "code": [
          "local greeting = 'hello'",
          "print(greeting)",
          "return greeting"
        ]
      },
      {
        "goal": "Use s, Escape, x, then r. · repetition 2 of 3",
        "code": [
          "local servers = { 'lua_ls' }",
          "vim.lsp.enable(servers)",
          "return servers"
        ]
      },
      {
        "goal": "Use s, Escape, x, then r. · repetition 3 of 3",
        "code": [
          "map('n', '<leader>w', save)",
          "map('n', '<leader>q', close)",
          "return map"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Use s, Escape, x, then r. Enter “n” where text is requested.",
      "replacement": "n",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with s.",
        "Use only the keys introduced in Insert Like a Pro.",
        "Enter “n” before returning to Normal mode."
      ],
      "success": "The buffer now contains “n” in the intended location."
    }
  },
  {
    "group": "Insert Like a Pro",
    "id": "insert-like-a-pro-review",
    "title": "Insert Like a Pro Review",
    "eyebrow": "Insert Like a Pro",
    "summary": "Review every command introduced in Insert Like a Pro before moving to the next category.",
    "detail": "Review every command introduced in Insert Like a Pro before moving to the next category.",
    "keys": [
      "I",
      "A",
      "Esc",
      "o",
      "O",
      "s",
      "x",
      "r"
    ],
    "task": "",
    "sequence": "IA<Esc>",
    "code": [
      "local greeting = 'hello'",
      "print(greeting)",
      "return greeting"
    ],
    "tip": "Return to any command in Insert Like a Pro that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "I",
        "description": "I inserts at the first non-blank character; A appends at the end of the line.",
        "sequence": "IA<Esc>"
      },
      {
        "key": "A",
        "description": "I inserts at the first non-blank character; A appends at the end of the line.",
        "sequence": "IA<Esc>"
      },
      {
        "key": "Esc",
        "description": "I inserts at the first non-blank character; A appends at the end of the line.",
        "sequence": "IA<Esc>"
      },
      {
        "key": "o",
        "description": "o opens a line below and O opens one above; both enter Insert mode.",
        "sequence": "o<Esc>O<Esc>"
      },
      {
        "key": "O",
        "description": "o opens a line below and O opens one above; both enter Insert mode.",
        "sequence": "o<Esc>O<Esc>"
      },
      {
        "key": "s",
        "description": "s substitutes a character, x deletes one, and r replaces one in place.",
        "sequence": "s<Esc>xr"
      },
      {
        "key": "x",
        "description": "s substitutes a character, x deletes one, and r replaces one in place.",
        "sequence": "s<Esc>xr"
      },
      {
        "key": "r",
        "description": "s substitutes a character, x deletes one, and r replaces one in place.",
        "sequence": "s<Esc>xr"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
