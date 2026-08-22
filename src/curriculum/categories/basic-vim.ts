import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Basic Vim",
    "id": "basic-movement",
    "title": "Basic Movement",
    "eyebrow": "Basic Vim",
    "summary": "Move left, down, up, and right without leaving the home row.",
    "detail": "Move left, down, up, and right without leaving the home row.",
    "keys": [
      "h",
      "j",
      "k",
      "l"
    ],
    "task": "Move in all four directions: h, j, k, l.",
    "sequence": "hjkl",
    "code": [
      "local theme = 'onedark'",
      "local contrast = 'high'",
      "return theme"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Move in all four directions: h, j, k, l. · repetition 1 of 3",
        "code": [
          "local theme = 'onedark'",
          "local contrast = 'high'",
          "return theme"
        ]
      },
      {
        "goal": "Move in all four directions: h, j, k, l. · repetition 2 of 3",
        "code": [
          "vim.o.number = true",
          "vim.o.mouse = 'a'",
          "vim.o.wrap = false"
        ]
      },
      {
        "goal": "Move in all four directions: h, j, k, l. · repetition 3 of 3",
        "code": [
          "require('options')",
          "require('mappings')",
          "require('plugins')"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Move in all four directions: h, j, k, l.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with h.",
        "Use only the keys introduced in Basic Vim.",
        "Compose the command from: h, j, k, l."
      ],
      "success": "Basic Movement produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Basic Vim",
    "id": "moving-words",
    "title": "Moving by Words",
    "eyebrow": "Basic Vim",
    "summary": "w reaches the next word, e its end, and b the previous beginning.",
    "detail": "w reaches the next word, e its end, and b the previous beginning.",
    "keys": [
      "w",
      "e",
      "b"
    ],
    "task": "Use w, e, then b.",
    "sequence": "web",
    "code": [
      "local theme = 'onedark'",
      "local contrast = 'high'",
      "return theme"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Use w, e, then b. · repetition 1 of 3",
        "code": [
          "local theme = 'onedark'",
          "local contrast = 'high'",
          "return theme"
        ]
      },
      {
        "goal": "Use w, e, then b. · repetition 2 of 3",
        "code": [
          "vim.o.number = true",
          "vim.o.mouse = 'a'",
          "vim.o.wrap = false"
        ]
      },
      {
        "goal": "Use w, e, then b. · repetition 3 of 3",
        "code": [
          "require('options')",
          "require('mappings')",
          "require('plugins')"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Use w, e, then b.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with w.",
        "Use only the keys introduced in Basic Vim.",
        "Compose the command from: w, e, b."
      ],
      "success": "Moving by Words produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Basic Vim",
    "id": "insert-mode",
    "title": "Insert Mode",
    "eyebrow": "Basic Vim",
    "summary": "i inserts before the cursor, a appends after it, and Escape returns to Normal mode.",
    "detail": "i inserts before the cursor, a appends after it, and Escape returns to Normal mode.",
    "keys": [
      "i",
      "a",
      "Esc"
    ],
    "task": "Use i, a, then Escape.",
    "sequence": "ia<Esc>",
    "code": [
      "local theme = 'onedark'",
      "local contrast = 'high'",
      "return theme"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Use i, a, then Escape. · repetition 1 of 3",
        "code": [
          "local theme = 'onedark'",
          "local contrast = 'high'",
          "return theme"
        ]
      },
      {
        "goal": "Use i, a, then Escape. · repetition 2 of 3",
        "code": [
          "vim.o.number = true",
          "vim.o.mouse = 'a'",
          "vim.o.wrap = false"
        ]
      },
      {
        "goal": "Use i, a, then Escape. · repetition 3 of 3",
        "code": [
          "require('options')",
          "require('mappings')",
          "require('plugins')"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Use i, a, then Escape. Enter “local” where text is requested.",
      "replacement": "local",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with i.",
        "Use only the keys introduced in Basic Vim.",
        "Enter “local” before returning to Normal mode."
      ],
      "success": "The buffer now contains “local” in the intended location."
    }
  },
  {
    "group": "Basic Vim",
    "id": "basic-vim-review",
    "title": "Basic Vim Review",
    "eyebrow": "Basic Vim",
    "summary": "Review every command introduced in Basic Vim before moving to the next category.",
    "detail": "Review every command introduced in Basic Vim before moving to the next category.",
    "keys": [
      "h",
      "j",
      "k",
      "l",
      "w",
      "e",
      "b",
      "i",
      "a",
      "Esc"
    ],
    "task": "",
    "sequence": "hjkl",
    "code": [
      "local theme = 'onedark'",
      "local contrast = 'high'",
      "return theme"
    ],
    "tip": "Return to any command in Basic Vim that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "h",
        "description": "Move left, down, up, and right without leaving the home row.",
        "sequence": "hjkl"
      },
      {
        "key": "j",
        "description": "Move left, down, up, and right without leaving the home row.",
        "sequence": "hjkl"
      },
      {
        "key": "k",
        "description": "Move left, down, up, and right without leaving the home row.",
        "sequence": "hjkl"
      },
      {
        "key": "l",
        "description": "Move left, down, up, and right without leaving the home row.",
        "sequence": "hjkl"
      },
      {
        "key": "w",
        "description": "w reaches the next word, e its end, and b the previous beginning.",
        "sequence": "web"
      },
      {
        "key": "e",
        "description": "w reaches the next word, e its end, and b the previous beginning.",
        "sequence": "web"
      },
      {
        "key": "b",
        "description": "w reaches the next word, e its end, and b the previous beginning.",
        "sequence": "web"
      },
      {
        "key": "i",
        "description": "i inserts before the cursor, a appends after it, and Escape returns to Normal mode.",
        "sequence": "ia<Esc>"
      },
      {
        "key": "a",
        "description": "i inserts before the cursor, a appends after it, and Escape returns to Normal mode.",
        "sequence": "ia<Esc>"
      },
      {
        "key": "Esc",
        "description": "i inserts before the cursor, a appends after it, and Escape returns to Normal mode.",
        "sequence": "ia<Esc>"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
