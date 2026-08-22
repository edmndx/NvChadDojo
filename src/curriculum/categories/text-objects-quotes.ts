import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Text Objects - Quotes",
    "id": "delete-inside-quotes",
    "title": "Delete Inside Quotes",
    "eyebrow": "Text Objects - Quotes",
    "summary": "di\" removes quoted content while retaining both quote marks.",
    "detail": "di\" removes quoted content while retaining both quote marks.",
    "keys": [
      "d",
      "i",
      "\""
    ],
    "task": "Practice delete inside quotes.",
    "sequence": "di\"",
    "code": [
      "local theme = \"replace-this-theme\"",
      "local mode = \"production\"",
      "return theme"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice delete inside quotes. · repetition 1 of 3",
        "code": [
          "local theme = \"replace-this-theme\"",
          "local mode = \"production\"",
          "return theme"
        ]
      },
      {
        "goal": "Practice delete inside quotes. · repetition 2 of 3",
        "code": [
          "notify(\"server started successfully\")",
          "local icon = \"󰢱\"",
          "return icon"
        ]
      },
      {
        "goal": "Practice delete inside quotes. · repetition 3 of 3",
        "code": [
          "map(\"n\", \"<leader>ff\", picker)",
          "local label = \"Find files\"",
          "return label"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Practice delete inside quotes.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with d.",
        "Read the command as operator, inside/around, then object.",
        "Compose the command from: d, i, \"."
      ],
      "success": "Delete Inside Quotes produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Text Objects - Quotes",
    "id": "delete-around-quotes",
    "title": "Delete Around Quotes",
    "eyebrow": "Text Objects - Quotes",
    "summary": "da\" removes the content and its surrounding quote marks.",
    "detail": "da\" removes the content and its surrounding quote marks.",
    "keys": [
      "d",
      "a",
      "\""
    ],
    "task": "Practice delete around quotes.",
    "sequence": "da\"",
    "code": [
      "local theme = \"replace-this-theme\"",
      "local mode = \"production\"",
      "return theme"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice delete around quotes. · repetition 1 of 3",
        "code": [
          "local theme = \"replace-this-theme\"",
          "local mode = \"production\"",
          "return theme"
        ]
      },
      {
        "goal": "Practice delete around quotes. · repetition 2 of 3",
        "code": [
          "notify(\"server started successfully\")",
          "local icon = \"󰢱\"",
          "return icon"
        ]
      },
      {
        "goal": "Practice delete around quotes. · repetition 3 of 3",
        "code": [
          "map(\"n\", \"<leader>ff\", picker)",
          "local label = \"Find files\"",
          "return label"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Practice delete around quotes.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with d.",
        "Read the command as operator, inside/around, then object.",
        "Compose the command from: d, a, \"."
      ],
      "success": "Delete Around Quotes produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Text Objects - Quotes",
    "id": "change-inside-quotes",
    "title": "Change Inside Quotes",
    "eyebrow": "Text Objects - Quotes",
    "summary": "ci\" replaces quoted content while preserving the quotes.",
    "detail": "ci\" replaces quoted content while preserving the quotes.",
    "keys": [
      "c",
      "i",
      "\""
    ],
    "task": "Change inside quotes, then escape.",
    "sequence": "ci\"<Esc>",
    "code": [
      "local theme = \"replace-this-theme\"",
      "local mode = \"production\"",
      "return theme"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Change inside quotes, then escape. · repetition 1 of 3",
        "code": [
          "local theme = \"replace-this-theme\"",
          "local mode = \"production\"",
          "return theme"
        ]
      },
      {
        "goal": "Change inside quotes, then escape. · repetition 2 of 3",
        "code": [
          "notify(\"server started successfully\")",
          "local icon = \"󰢱\"",
          "return icon"
        ]
      },
      {
        "goal": "Change inside quotes, then escape. · repetition 3 of 3",
        "code": [
          "map(\"n\", \"<leader>ff\", picker)",
          "local label = \"Find files\"",
          "return label"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Change inside quotes, then escape. Enter “catppuccin” where text is requested.",
      "replacement": "catppuccin",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with c.",
        "Read the command as operator, inside/around, then object.",
        "Enter “catppuccin” before returning to Normal mode."
      ],
      "success": "The buffer now contains “catppuccin” in the intended location."
    }
  },
  {
    "group": "Text Objects - Quotes",
    "id": "change-around-quotes",
    "title": "Change Around Quotes",
    "eyebrow": "Text Objects - Quotes",
    "summary": "ca\" replaces both quoted content and its delimiters.",
    "detail": "ca\" replaces both quoted content and its delimiters.",
    "keys": [
      "c",
      "a",
      "\""
    ],
    "task": "Change around quotes, then escape.",
    "sequence": "ca\"<Esc>",
    "code": [
      "local theme = \"replace-this-theme\"",
      "local mode = \"production\"",
      "return theme"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Change around quotes, then escape. · repetition 1 of 3",
        "code": [
          "local theme = \"replace-this-theme\"",
          "local mode = \"production\"",
          "return theme"
        ]
      },
      {
        "goal": "Change around quotes, then escape. · repetition 2 of 3",
        "code": [
          "notify(\"server started successfully\")",
          "local icon = \"󰢱\"",
          "return icon"
        ]
      },
      {
        "goal": "Change around quotes, then escape. · repetition 3 of 3",
        "code": [
          "map(\"n\", \"<leader>ff\", picker)",
          "local label = \"Find files\"",
          "return label"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Change around quotes, then escape. Enter “\"catppuccin\"” where text is requested.",
      "replacement": "\"catppuccin\"",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with c.",
        "Read the command as operator, inside/around, then object.",
        "Enter “\"catppuccin\"” before returning to Normal mode."
      ],
      "success": "The buffer now contains “\"catppuccin\"” in the intended location."
    }
  },
  {
    "group": "Text Objects - Quotes",
    "id": "quotes-review",
    "title": "Quotes Review",
    "eyebrow": "Text Objects - Quotes",
    "summary": "Review every delete and change combination for double-quoted text.",
    "detail": "Review every delete and change combination for double-quoted text.",
    "keys": [
      "di\"",
      "da\"",
      "ci\"",
      "ca\""
    ],
    "task": "Run all four quote operations.",
    "sequence": "di\"da\"ci\"<Esc>ca\"<Esc>",
    "code": [
      "local theme = \"replace-this-theme\"",
      "local mode = \"production\"",
      "return theme"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Run all four quote operations. · repetition 1 of 3",
        "code": [
          "local theme = \"replace-this-theme\"",
          "local mode = \"production\"",
          "return theme"
        ]
      },
      {
        "goal": "Run all four quote operations. · repetition 2 of 3",
        "code": [
          "notify(\"server started successfully\")",
          "local icon = \"󰢱\"",
          "return icon"
        ]
      },
      {
        "goal": "Run all four quote operations. · repetition 3 of 3",
        "code": [
          "map(\"n\", \"<leader>ff\", picker)",
          "local label = \"Find files\"",
          "return label"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Run all four quote operations.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with di\".",
        "Read the command as operator, inside/around, then object.",
        "Compose the command from: di\", da\", ci\", ca\"."
      ],
      "success": "Quotes Review produced the requested buffer and cursor state."
    },
    "reviewOnly": true
  }
] satisfies readonly Lesson[];

export default lessons;
