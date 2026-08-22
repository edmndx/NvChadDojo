import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Vim Modes",
    "id": "intro-modes",
    "title": "Normal and Insert Modes",
    "eyebrow": "Vim Modes",
    "summary": "Normal mode runs commands; Insert mode enters text. Escape returns to Normal mode.",
    "detail": "Normal mode runs commands; Insert mode enters text. Escape returns to Normal mode.",
    "keys": [
      "i",
      "Esc"
    ],
    "task": "Practice normal and insert modes.",
    "sequence": "i<Esc>",
    "code": [
      "local items = { 'alpha', 'beta', 'gamma' }",
      "local result = transform(items)",
      "return result"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice normal and insert modes. · repetition 1 of 3",
        "code": [
          "local items = { 'alpha', 'beta', 'gamma' }",
          "local result = transform(items)",
          "return result"
        ]
      },
      {
        "goal": "Practice normal and insert modes. · repetition 2 of 3",
        "code": [
          "function configure(options)",
          "  return setup(options)",
          "end"
        ]
      },
      {
        "goal": "Practice normal and insert modes. · repetition 3 of 3",
        "code": [
          "local user = find_user(users)",
          "notify(user.name)",
          "return user"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Practice normal and insert modes.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with i.",
        "Use only the keys introduced in Vim Modes.",
        "Compose the command from: i, Esc."
      ],
      "success": "Normal and Insert Modes produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Vim Modes",
    "id": "intro-visual-mode",
    "title": "Visual Mode",
    "eyebrow": "Vim Modes",
    "summary": "v begins a characterwise selection and Escape returns to Normal mode.",
    "detail": "v begins a characterwise selection and Escape returns to Normal mode.",
    "keys": [
      "v",
      "Esc"
    ],
    "task": "Practice visual mode.",
    "sequence": "v<Esc>",
    "code": [
      "local items = { 'alpha', 'beta', 'gamma' }",
      "local result = transform(items)",
      "return result"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice visual mode. · repetition 1 of 3",
        "code": [
          "local items = { 'alpha', 'beta', 'gamma' }",
          "local result = transform(items)",
          "return result"
        ]
      },
      {
        "goal": "Practice visual mode. · repetition 2 of 3",
        "code": [
          "function configure(options)",
          "  return setup(options)",
          "end"
        ]
      },
      {
        "goal": "Practice visual mode. · repetition 3 of 3",
        "code": [
          "local user = find_user(users)",
          "notify(user.name)",
          "return user"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Practice visual mode.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with v.",
        "Use only the keys introduced in Vim Modes.",
        "Compose the command from: v, Esc."
      ],
      "success": "Visual Mode produced the requested buffer and cursor state."
    }
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
      "local items = { 'alpha', 'beta', 'gamma' }",
      "local result = transform(items)",
      "return result"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Open Command-line mode and enable line numbers. · repetition 1 of 3",
        "code": [
          "local items = { 'alpha', 'beta', 'gamma' }",
          "local result = transform(items)",
          "return result"
        ]
      },
      {
        "goal": "Open Command-line mode and enable line numbers. · repetition 2 of 3",
        "code": [
          "function configure(options)",
          "  return setup(options)",
          "end"
        ]
      },
      {
        "goal": "Open Command-line mode and enable line numbers. · repetition 3 of 3",
        "code": [
          "local user = find_user(users)",
          "notify(user.name)",
          "return user"
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
        "Begin with :.",
        "Use only the keys introduced in Vim Modes.",
        "Compose the command from: :, Enter, Esc."
      ],
      "success": "Command-line Mode produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Vim Modes",
    "id": "replace-mode",
    "title": "Replace Mode",
    "eyebrow": "Vim Modes",
    "summary": "R enters Replace mode, overwriting existing characters until Escape returns to Normal mode.",
    "detail": "R enters Replace mode, overwriting existing characters until Escape returns to Normal mode.",
    "keys": [
      "R",
      "Esc"
    ],
    "task": "Replace four characters with mode, then return to Normal mode.",
    "sequence": "Rmode<Esc>",
    "code": [
      "local items = { 'alpha', 'beta', 'gamma' }",
      "local result = transform(items)",
      "return result"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Replace four characters with mode, then return to Normal mode. · repetition 1 of 3",
        "code": [
          "local items = { 'alpha', 'beta', 'gamma' }",
          "local result = transform(items)",
          "return result"
        ]
      },
      {
        "goal": "Replace four characters with mode, then return to Normal mode. · repetition 2 of 3",
        "code": [
          "function configure(options)",
          "  return setup(options)",
          "end"
        ]
      },
      {
        "goal": "Replace four characters with mode, then return to Normal mode. · repetition 3 of 3",
        "code": [
          "local user = find_user(users)",
          "notify(user.name)",
          "return user"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Replace four characters with mode, then return to Normal mode.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with R.",
        "Use only the keys introduced in Vim Modes.",
        "Compose the command from: R, Esc."
      ],
      "success": "Replace Mode produced the requested buffer and cursor state."
    }
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
      "R"
    ],
    "task": "",
    "sequence": "i<Esc>",
    "code": [
      "local items = { 'alpha', 'beta', 'gamma' }",
      "local result = transform(items)",
      "return result"
    ],
    "tip": "Return to any command in Vim Modes that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "i",
        "description": "Normal mode runs commands; Insert mode enters text. Escape returns to Normal mode.",
        "sequence": "i<Esc>"
      },
      {
        "key": "Esc",
        "description": "Normal mode runs commands; Insert mode enters text. Escape returns to Normal mode.",
        "sequence": "i<Esc>"
      },
      {
        "key": "v",
        "description": "v begins a characterwise selection and Escape returns to Normal mode.",
        "sequence": "v<Esc>"
      },
      {
        "key": ":",
        "description": "Colon opens Command-line mode; Enter executes the command and Escape cancels it.",
        "sequence": ":set number<Enter>"
      },
      {
        "key": "Enter",
        "description": "Colon opens Command-line mode; Enter executes the command and Escape cancels it.",
        "sequence": ":set number<Enter>"
      },
      {
        "key": "R",
        "description": "R enters Replace mode, overwriting existing characters until Escape returns to Normal mode.",
        "sequence": "Rmode<Esc>"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
