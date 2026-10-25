import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Vim Modes",
    "id": "intro-modes",
    "title": "Normal and Insert Modes",
    "eyebrow": "Vim Modes",
    "summary": "Normal mode runs commands; Insert mode enters text. Escape returns to Normal mode.",
    "detail": "Start on the first letter inside the quoted label. The surrounding JavaScript declaration stays intact while the text changes.",
    "keys": [
      "i",
      "Esc"
    ],
    "task": "Enter Insert mode with i, add * inside the label string, then press Esc to return to Normal mode.",
    "sequence": "i*<Esc>",
    "code": [
      "const option = 'theme';",
      "const label = 'ready';",
      "console.log(option, label);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Enter Insert mode with i, add * inside the label string, then press Esc to return to Normal mode. · repetition 1 of 3",
        "code": [
          "const option = 'theme';",
          "const label = 'ready';",
          "console.log(option, label);"
        ]
      },
      {
        "goal": "Enter Insert mode with i, add * inside the label string, then press Esc to return to Normal mode. · repetition 2 of 3",
        "code": [
          "const option = 'theme';",
          "const label = 'draft';",
          "console.log(option, label);"
        ]
      },
      {
        "goal": "Enter Insert mode with i, add * inside the label string, then press Esc to return to Normal mode. · repetition 3 of 3",
        "code": [
          "const option = 'theme';",
          "const label = 'start';",
          "console.log(option, label);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Enter Insert mode with i, add * inside the label string, then press Esc to return to Normal mode.",
      "cursor": [
        1,
        15
      ],
      "hints": [
        "The cursor starts on the first character inside the label string.",
        "Press i to enter Insert mode before the cursor.",
        "Type *, then press Esc."
      ],
      "success": "The label was edited and the complete declaration remains valid JavaScript.",
      "replacement": "*"
    },
    "reviewItems": [
      {
        "key": "i",
        "description": "Insert * inside the string, then return to Normal mode with Esc.",
        "sequence": "i*<Esc>"
      },
      {
        "key": "Esc",
        "description": "Insert * inside the string, then return to Normal mode with Esc.",
        "sequence": "i*<Esc>"
      }
    ]
  },
  {
    "group": "Vim Modes",
    "id": "intro-visual-mode",
    "title": "Visual Mode",
    "eyebrow": "Vim Modes",
    "summary": "v begins a characterwise selection and Escape returns to Normal mode.",
    "detail": "Entering Visual mode selects the character under the cursor. Pressing Esc cancels the selection without changing the text.",
    "keys": [
      "v",
      "Esc"
    ],
    "task": "Press v to begin a characterwise selection, then Esc to cancel it.",
    "sequence": "v<Esc>",
    "code": [
      "const items = ['alpha', 'beta', 'gamma'];",
      "const result = transform(items);",
      "console.log(result);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Press v to begin a characterwise selection, then Esc to cancel it. · repetition 1 of 3",
        "code": [
          "const items = ['alpha', 'beta', 'gamma'];",
          "const result = transform(items);",
          "console.log(result);"
        ]
      },
      {
        "goal": "Press v to begin a characterwise selection, then Esc to cancel it. · repetition 2 of 3",
        "code": [
          "function configure(options) {",
          "  return setup(options);",
          "}"
        ]
      },
      {
        "goal": "Press v to begin a characterwise selection, then Esc to cancel it. · repetition 3 of 3",
        "code": [
          "const user = findUser(users);",
          "notify(user.name);",
          "console.log(user);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Press v to begin a characterwise selection, then Esc to cancel it.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: v, Esc."
      ],
      "success": "Visual Mode produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "v",
        "description": "v begins a characterwise selection and Escape returns to Normal mode.",
        "sequence": "v<Esc>"
      },
      {
        "key": "Esc",
        "description": "v begins a characterwise selection and Escape returns to Normal mode.",
        "sequence": "v<Esc>"
      }
    ]
  },
  {
    "group": "Vim Modes",
    "id": "command-line-mode",
    "title": "Command-line Mode",
    "eyebrow": "Vim Modes",
    "summary": "Colon opens Command-line mode; Enter executes the command and Escape cancels it.",
    "detail": "Colon opens Command-line mode; Enter executes the command and Escape cancels it.",
    "keys": [
      ":",
      "Enter",
      "Esc"
    ],
    "task": "Open Command-line mode and enable line numbers.",
    "sequence": ":set number<Enter>",
    "code": [
      "const items = ['alpha', 'beta', 'gamma'];",
      "const result = transform(items);",
      "console.log(result);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Open Command-line mode and enable line numbers. · repetition 1 of 3",
        "code": [
          "const items = ['alpha', 'beta', 'gamma'];",
          "const result = transform(items);",
          "console.log(result);"
        ]
      },
      {
        "goal": "Open Command-line mode and enable line numbers. · repetition 2 of 3",
        "code": [
          "function configure(options) {",
          "  return setup(options);",
          "}"
        ]
      },
      {
        "goal": "Open Command-line mode and enable line numbers. · repetition 3 of 3",
        "code": [
          "const user = findUser(users);",
          "notify(user.name);",
          "console.log(user);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Open Command-line mode and enable line numbers.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: :, Enter, Esc."
      ],
      "success": "Command-line Mode produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": ":",
        "description": "Open Command-line mode and enable line numbers.",
        "sequence": ":set number<Enter>"
      },
      {
        "key": "Enter",
        "description": "Execute the typed Ex command.",
        "sequence": ":set number<Enter>"
      },
      {
        "key": "Esc",
        "description": "Cancel a typed Ex command without executing it.",
        "sequence": ":set number<Esc>"
      }
    ]
  },
  {
    "group": "Vim Modes",
    "id": "replace-mode",
    "title": "Replace Mode",
    "eyebrow": "Vim Modes",
    "summary": "R enters Replace mode, overwriting existing characters until Escape returns to Normal mode.",
    "detail": "Start on the first letter inside the quoted label. The surrounding JavaScript declaration stays intact while the text changes.",
    "keys": [
      "R",
      "Esc"
    ],
    "task": "Replace the four letters inside the label string with mode using R, then press Esc.",
    "sequence": "Rmode<Esc>",
    "code": [
      "const option = 'theme';",
      "const label = 'test';",
      "console.log(option, label);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Replace the four letters inside the label string with mode using R, then press Esc. · repetition 1 of 3",
        "code": [
          "const option = 'theme';",
          "const label = 'test';",
          "console.log(option, label);"
        ]
      },
      {
        "goal": "Replace the four letters inside the label string with mode using R, then press Esc. · repetition 2 of 3",
        "code": [
          "const option = 'theme';",
          "const label = 'demo';",
          "console.log(option, label);"
        ]
      },
      {
        "goal": "Replace the four letters inside the label string with mode using R, then press Esc. · repetition 3 of 3",
        "code": [
          "const option = 'theme';",
          "const label = 'temp';",
          "console.log(option, label);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Replace the four letters inside the label string with mode using R, then press Esc.",
      "cursor": [
        1,
        15
      ],
      "hints": [
        "The cursor starts on the first character inside the label string.",
        "Press R to overwrite characters.",
        "Type mode, then press Esc."
      ],
      "success": "The label was edited and the complete declaration remains valid JavaScript.",
      "replacement": "mode"
    },
    "reviewItems": [
      {
        "key": "R",
        "description": "Overwrite four letters inside the string with mode, then return to Normal mode.",
        "sequence": "Rmode<Esc>"
      },
      {
        "key": "Esc",
        "description": "Overwrite four letters inside the string with mode, then return to Normal mode.",
        "sequence": "Rmode<Esc>"
      }
    ]
  },
  {
    "group": "Vim Modes",
    "id": "vim-modes-review",
    "title": "Vim Modes Review",
    "eyebrow": "Vim Modes",
    "summary": "Review every command introduced in Vim Modes before moving to the next category.",
    "detail": "Review every command introduced in Vim Modes before moving to the next category.",
    "keys": [
      "i",
      "Esc",
      "v",
      ":",
      "Enter",
      "R",
      ":<Esc>"
    ],
    "task": "",
    "sequence": "i*<Esc>",
    "code": [
      "const option = 'theme';",
      "const label = 'ready';",
      "console.log(option, label);"
    ],
    "tip": "Return to any command in Vim Modes that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "i",
        "description": "Insert * inside the string, then return to Normal mode with Esc.",
        "sequence": "i*<Esc>",
        "code": [
          "const option = 'theme';",
          "const label = 'ready';",
          "console.log(option, label);"
        ],
        "cursor": [
          1,
          15
        ]
      },
      {
        "key": "Esc",
        "description": "Insert * inside the string, then return to Normal mode with Esc.",
        "sequence": "i*<Esc>",
        "code": [
          "const option = 'theme';",
          "const label = 'ready';",
          "console.log(option, label);"
        ],
        "cursor": [
          1,
          15
        ]
      },
      {
        "key": "v",
        "description": "v begins a characterwise selection and Escape returns to Normal mode.",
        "sequence": "v<Esc>",
        "code": [
          "const items = ['alpha', 'beta', 'gamma'];",
          "const result = transform(items);",
          "console.log(result);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": ":",
        "description": "Open Command-line mode and enable line numbers.",
        "sequence": ":set number<Enter>",
        "code": [
          "const items = ['alpha', 'beta', 'gamma'];",
          "const result = transform(items);",
          "console.log(result);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "Enter",
        "description": "Execute the typed Ex command.",
        "sequence": ":set number<Enter>",
        "code": [
          "const items = ['alpha', 'beta', 'gamma'];",
          "const result = transform(items);",
          "console.log(result);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "R",
        "description": "Overwrite four letters inside the string with mode, then return to Normal mode.",
        "sequence": "Rmode<Esc>",
        "code": [
          "const option = 'theme';",
          "const label = 'test';",
          "console.log(option, label);"
        ],
        "cursor": [
          1,
          15
        ]
      },
      {
        "key": ":<Esc>",
        "description": "Cancel a typed Ex command without executing it.",
        "sequence": ":set number<Esc>",
        "code": [
          "const items = ['alpha', 'beta', 'gamma'];",
          "const result = transform(items);",
          "console.log(result);"
        ],
        "cursor": [
          1,
          0
        ]
      }
    ],
    "cursor": [
      1,
      15
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
