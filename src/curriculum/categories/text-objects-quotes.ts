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
      "const theme = \"replace-this-theme\";",
      "const mode = \"production\";",
      "console.log(theme, mode);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice delete inside quotes. · repetition 1 of 3",
        "code": [
          "const theme = \"replace-this-theme\";",
          "const mode = \"production\";",
          "console.log(theme, mode);"
        ]
      },
      {
        "goal": "Practice delete inside quotes. · repetition 2 of 3",
        "code": [
          "notify(\"server started successfully\");",
          "const icon = \"ready\";",
          "console.log(icon);"
        ]
      },
      {
        "goal": "Practice delete inside quotes. · repetition 3 of 3",
        "code": [
          "bindKey(\"findFiles\", picker);",
          "const label = \"Find files\";",
          "console.log(label);"
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
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: d, i, \"."
      ],
      "success": "Delete Inside Quotes produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "d",
        "description": "di\" removes quoted content while retaining both quote marks.",
        "sequence": "di\""
      },
      {
        "key": "i",
        "description": "di\" removes quoted content while retaining both quote marks.",
        "sequence": "di\""
      },
      {
        "key": "\"",
        "description": "di\" removes quoted content while retaining both quote marks.",
        "sequence": "di\""
      }
    ]
  },
  {
    "group": "Text Objects - Quotes",
    "id": "delete-around-quotes",
    "title": "Delete Around Quotes",
    "eyebrow": "Text Objects - Quotes",
    "summary": "da\" removes quoted content, both quote marks, and adjacent whitespace when available.",
    "detail": "da\" removes quoted content, both quote marks, and adjacent whitespace when available.",
    "keys": [
      "d",
      "a",
      "\""
    ],
    "task": "Practice delete around quotes.",
    "sequence": "da\"",
    "code": [
      "const theme = \"replace-this-theme\";",
      "const mode = \"production\";",
      "console.log(theme, mode);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice delete around quotes. · repetition 1 of 3",
        "code": [
          "const theme = \"replace-this-theme\";",
          "const mode = \"production\";",
          "console.log(theme, mode);"
        ]
      },
      {
        "goal": "Practice delete around quotes. · repetition 2 of 3",
        "code": [
          "notify(\"server started successfully\");",
          "const icon = \"ready\";",
          "console.log(icon);"
        ]
      },
      {
        "goal": "Practice delete around quotes. · repetition 3 of 3",
        "code": [
          "bindKey(\"findFiles\", picker);",
          "const label = \"Find files\";",
          "console.log(label);"
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
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: d, a, \"."
      ],
      "success": "Delete Around Quotes produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "d",
        "description": "da\" removes quoted content, both quote marks, and adjacent whitespace when available.",
        "sequence": "da\""
      },
      {
        "key": "a",
        "description": "da\" removes quoted content, both quote marks, and adjacent whitespace when available.",
        "sequence": "da\""
      },
      {
        "key": "\"",
        "description": "da\" removes quoted content, both quote marks, and adjacent whitespace when available.",
        "sequence": "da\""
      }
    ]
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
    "sequence": "ci\"catppuccin<Esc>",
    "code": [
      "const theme = \"replace-this-theme\";",
      "const mode = \"production\";",
      "console.log(theme, mode);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Change inside quotes, then escape. · repetition 1 of 3",
        "code": [
          "const theme = \"replace-this-theme\";",
          "const mode = \"production\";",
          "console.log(theme, mode);"
        ]
      },
      {
        "goal": "Change inside quotes, then escape. · repetition 2 of 3",
        "code": [
          "notify(\"server started successfully\");",
          "const icon = \"ready\";",
          "console.log(icon);"
        ]
      },
      {
        "goal": "Change inside quotes, then escape. · repetition 3 of 3",
        "code": [
          "bindKey(\"findFiles\", picker);",
          "const label = \"Find files\";",
          "console.log(label);"
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
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Enter “catppuccin” before returning to Normal mode."
      ],
      "success": "The buffer now contains “catppuccin” in the intended location."
    },
    "reviewItems": [
      {
        "key": "c",
        "description": "ci\" replaces quoted content while preserving the quotes.",
        "sequence": "ci\"catppuccin<Esc>"
      },
      {
        "key": "i",
        "description": "ci\" replaces quoted content while preserving the quotes.",
        "sequence": "ci\"catppuccin<Esc>"
      },
      {
        "key": "\"",
        "description": "ci\" replaces quoted content while preserving the quotes.",
        "sequence": "ci\"catppuccin<Esc>"
      }
    ]
  },
  {
    "group": "Text Objects - Quotes",
    "id": "change-around-quotes",
    "title": "Change Around Quotes",
    "eyebrow": "Text Objects - Quotes",
    "summary": "ca\" replaces quoted content, both quote marks, and adjacent whitespace when available.",
    "detail": "ca\" replaces quoted content, both quote marks, and adjacent whitespace when available.",
    "keys": [
      "c",
      "a",
      "\""
    ],
    "task": "Change around quotes, then escape.",
    "sequence": "ca\"\"catppuccin\"<Esc>",
    "code": [
      "const theme = \"replace-this-theme\";",
      "const mode = \"production\";",
      "console.log(theme, mode);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Change around quotes, then escape. · repetition 1 of 3",
        "code": [
          "const theme = \"replace-this-theme\";",
          "const mode = \"production\";",
          "console.log(theme, mode);"
        ]
      },
      {
        "goal": "Change around quotes, then escape. · repetition 2 of 3",
        "code": [
          "notify(\"server started successfully\");",
          "const icon = \"ready\";",
          "console.log(icon);"
        ]
      },
      {
        "goal": "Change around quotes, then escape. · repetition 3 of 3",
        "code": [
          "bindKey(\"findFiles\", picker);",
          "const label = \"Find files\";",
          "console.log(label);"
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
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Enter “\"catppuccin\"” before returning to Normal mode."
      ],
      "success": "The buffer now contains “\"catppuccin\"” in the intended location."
    },
    "reviewItems": [
      {
        "key": "c",
        "description": "ca\" replaces quoted content, both quote marks, and adjacent whitespace when available.",
        "sequence": "ca\"\"catppuccin\"<Esc>"
      },
      {
        "key": "a",
        "description": "ca\" replaces quoted content, both quote marks, and adjacent whitespace when available.",
        "sequence": "ca\"\"catppuccin\"<Esc>"
      },
      {
        "key": "\"",
        "description": "ca\" replaces quoted content, both quote marks, and adjacent whitespace when available.",
        "sequence": "ca\"\"catppuccin\"<Esc>"
      }
    ]
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
    "task": "Practice each listed operation separately from a fresh copy of the fixture.",
    "sequence": "di\"",
    "code": [
      "const theme = \"replace-this-theme\";",
      "const mode = \"production\";",
      "console.log(theme, mode);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice each listed operation separately from a fresh copy of the fixture. · repetition 1 of 3",
        "code": [
          "const theme = \"replace-this-theme\";",
          "const mode = \"production\";",
          "console.log(theme, mode);"
        ]
      },
      {
        "goal": "Practice each listed operation separately from a fresh copy of the fixture. · repetition 2 of 3",
        "code": [
          "notify(\"server started successfully\");",
          "const icon = \"ready\";",
          "console.log(icon);"
        ]
      },
      {
        "goal": "Practice each listed operation separately from a fresh copy of the fixture. · repetition 3 of 3",
        "code": [
          "bindKey(\"findFiles\", picker);",
          "const label = \"Find files\";",
          "console.log(label);"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Practice each listed operation separately from a fresh copy of the fixture.",
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
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "di\"",
        "description": "Delete the indicated object.",
        "sequence": "di\""
      },
      {
        "key": "da\"",
        "description": "Delete the indicated object.",
        "sequence": "da\""
      },
      {
        "key": "ci\"",
        "description": "Change the indicated object to updated.",
        "sequence": "ci\"updated<Esc>"
      },
      {
        "key": "ca\"",
        "description": "Change the indicated object to updated.",
        "sequence": "ca\"updated<Esc>"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
