import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Macros",
    "id": "record-macro",
    "title": "Record a Macro",
    "eyebrow": "Macros",
    "summary": "qa records subsequent commands into register a until q stops recording.",
    "detail": "qa records subsequent commands into register a until q stops recording.",
    "keys": [
      "q",
      "a"
    ],
    "task": "Record a word-change macro into register a.",
    "sequence": "qaciwchanged<Esc>q",
    "code": [
      "user.oldName = 'Ada';",
      "user.oldName = 'Linus';",
      "user.oldName = 'Grace';"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Record a word-change macro into register a. · repetition 1 of 3",
        "code": [
          "user.oldName = 'Ada';",
          "user.oldName = 'Linus';",
          "user.oldName = 'Grace';"
        ]
      },
      {
        "goal": "Record a word-change macro into register a. · repetition 2 of 3",
        "code": [
          "plugin.enabled = false;",
          "theme.enabled = false;",
          "lsp.enabled = false;"
        ]
      },
      {
        "goal": "Record a word-change macro into register a. · repetition 3 of 3",
        "code": [
          "const alpha = legacy(input.alpha);",
          "const beta = legacy(input.beta);",
          "const gamma = legacy(input.gamma);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Record a word-change macro into register a.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: q, a."
      ],
      "success": "Record a Macro produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "q",
        "description": "qa records subsequent commands into register a until q stops recording.",
        "sequence": "qaciwchanged<Esc>q"
      },
      {
        "key": "a",
        "description": "qa records subsequent commands into register a until q stops recording.",
        "sequence": "qaciwchanged<Esc>q"
      }
    ]
  },
  {
    "group": "Macros",
    "id": "replay-macro",
    "title": "Replay a Macro",
    "eyebrow": "Macros",
    "summary": "@a executes the commands stored in register a.",
    "detail": "@a executes the commands stored in register a.",
    "keys": [
      "@",
      "a"
    ],
    "task": "Replay macro a once.",
    "sequence": "@a",
    "code": [
      "user.oldName = 'Ada';",
      "user.oldName = 'Linus';",
      "user.oldName = 'Grace';"
    ],
    "tip": "This practice buffer seeds register a with the motion w. Record your own macro with qa, commands, then q before replaying it in your editor.",
    "drills": [
      {
        "goal": "Replay macro a once. · repetition 1 of 3",
        "code": [
          "user.oldName = 'Ada';",
          "user.oldName = 'Linus';",
          "user.oldName = 'Grace';"
        ]
      },
      {
        "goal": "Replay macro a once. · repetition 2 of 3",
        "code": [
          "plugin.enabled = false;",
          "theme.enabled = false;",
          "lsp.enabled = false;"
        ]
      },
      {
        "goal": "Replay macro a once. · repetition 3 of 3",
        "code": [
          "const alpha = legacy(input.alpha);",
          "const beta = legacy(input.beta);",
          "const gamma = legacy(input.gamma);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Replay macro a once.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: @, a."
      ],
      "success": "Replay a Macro produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "@",
        "description": "@a executes the commands stored in register a.",
        "sequence": "@a"
      },
      {
        "key": "a",
        "description": "@a executes the commands stored in register a.",
        "sequence": "@a"
      }
    ]
  },
  {
    "group": "Macros",
    "id": "repeat-macro",
    "title": "Repeat the Latest Macro",
    "eyebrow": "Macros",
    "summary": "@@ repeats the most recently executed macro without naming its register again.",
    "detail": "@@ repeats the most recently executed macro without naming its register again.",
    "keys": [
      "@",
      "@"
    ],
    "task": "Repeat the latest macro.",
    "sequence": "@@",
    "code": [
      "user.oldName = 'Ada';",
      "user.oldName = 'Linus';",
      "user.oldName = 'Grace';"
    ],
    "tip": "This practice buffer seeds a macro containing w and remembers it as the latest executed macro. In your editor, execute @a before using @@.",
    "drills": [
      {
        "goal": "Repeat the latest macro. · repetition 1 of 3",
        "code": [
          "user.oldName = 'Ada';",
          "user.oldName = 'Linus';",
          "user.oldName = 'Grace';"
        ]
      },
      {
        "goal": "Repeat the latest macro. · repetition 2 of 3",
        "code": [
          "plugin.enabled = false;",
          "theme.enabled = false;",
          "lsp.enabled = false;"
        ]
      },
      {
        "goal": "Repeat the latest macro. · repetition 3 of 3",
        "code": [
          "const alpha = legacy(input.alpha);",
          "const beta = legacy(input.beta);",
          "const gamma = legacy(input.gamma);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Repeat the latest macro.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: @, @."
      ],
      "success": "Repeat the Latest Macro produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "@",
        "description": "@@ repeats the most recently executed macro without naming its register again.",
        "sequence": "@@"
      }
    ]
  },
  {
    "group": "Macros",
    "id": "macro-with-count",
    "title": "Run a Macro with a Count",
    "eyebrow": "Macros",
    "summary": "A count applies a recorded workflow repeatedly across predictable data.",
    "detail": "A count applies a recorded workflow repeatedly across predictable data.",
    "keys": [
      "10",
      "@",
      "a"
    ],
    "task": "Execute macro a ten times.",
    "sequence": "10@a",
    "code": [
      "user.oldName = 'Ada';",
      "user.oldName = 'Linus';",
      "user.oldName = 'Grace';"
    ],
    "tip": "This practice buffer seeds register a with the motion w. Record your own macro with qa, commands, then q before replaying it in your editor.",
    "drills": [
      {
        "goal": "Execute macro a ten times. · repetition 1 of 3",
        "code": [
          "user.oldName = 'Ada';",
          "user.oldName = 'Linus';",
          "user.oldName = 'Grace';"
        ]
      },
      {
        "goal": "Execute macro a ten times. · repetition 2 of 3",
        "code": [
          "plugin.enabled = false;",
          "theme.enabled = false;",
          "lsp.enabled = false;"
        ]
      },
      {
        "goal": "Execute macro a ten times. · repetition 3 of 3",
        "code": [
          "const alpha = legacy(input.alpha);",
          "const beta = legacy(input.beta);",
          "const gamma = legacy(input.gamma);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Execute macro a ten times.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: 10, @, a."
      ],
      "success": "Run a Macro with a Count produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "10",
        "description": "A count applies a recorded workflow repeatedly across predictable data.",
        "sequence": "10@a"
      },
      {
        "key": "@",
        "description": "A count applies a recorded workflow repeatedly across predictable data.",
        "sequence": "10@a"
      },
      {
        "key": "a",
        "description": "A count applies a recorded workflow repeatedly across predictable data.",
        "sequence": "10@a"
      }
    ]
  },
  {
    "group": "Macros",
    "id": "macros-review",
    "title": "Macros Review",
    "eyebrow": "Macros",
    "summary": "Review every command introduced in Macros before moving to the next category.",
    "detail": "Review every command introduced in Macros before moving to the next category.",
    "keys": [
      "q",
      "a",
      "@",
      "10",
      "@@"
    ],
    "task": "",
    "sequence": "qaciwchanged<Esc>q",
    "code": [
      "user.oldName = 'Ada';",
      "user.oldName = 'Linus';",
      "user.oldName = 'Grace';"
    ],
    "tip": "Return to any command in Macros that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "q",
        "description": "qa records subsequent commands into register a until q stops recording.",
        "sequence": "qaciwchanged<Esc>q",
        "code": [
          "user.oldName = 'Ada';",
          "user.oldName = 'Linus';",
          "user.oldName = 'Grace';"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "a",
        "description": "qa records subsequent commands into register a until q stops recording.",
        "sequence": "qaciwchanged<Esc>q",
        "code": [
          "user.oldName = 'Ada';",
          "user.oldName = 'Linus';",
          "user.oldName = 'Grace';"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "@",
        "description": "Record w into a with qawq, then replay it with @a.",
        "sequence": "qawq@a",
        "code": [
          "user.oldName = 'Ada';",
          "user.oldName = 'Linus';",
          "user.oldName = 'Grace';"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "10",
        "description": "Record w into a, then execute it with a count of ten.",
        "sequence": "qawq10@a",
        "code": [
          "user.oldName = 'Ada';",
          "user.oldName = 'Linus';",
          "user.oldName = 'Grace';"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "@@",
        "description": "Record a macro, execute it once, then repeat the latest executed macro.",
        "sequence": "qawq@a@@"
      }
    ],
    "cursor": [
      1,
      2
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
