import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Text Objects - Words",
    "id": "delete-inside-word",
    "title": "Delete Inside Word",
    "eyebrow": "Text Objects - Words",
    "summary": "diw deletes the word under the cursor without consuming adjacent whitespace.",
    "detail": "diw deletes the word under the cursor without consuming adjacent whitespace.",
    "keys": [
      "d",
      "i",
      "w"
    ],
    "task": "Practice delete inside word.",
    "sequence": "diw",
    "code": [
      "const temporaryValue = enabled;",
      "console.log(enabled);",
      ""
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice delete inside word. · repetition 1 of 3",
        "code": [
          "const temporaryValue = enabled;",
          "console.log(enabled);",
          ""
        ]
      },
      {
        "goal": "Practice delete inside word. · repetition 2 of 3",
        "code": [
          "const theme = outdatedThemeName;",
          "apply(theme);",
          "console.log(theme);"
        ]
      },
      {
        "goal": "Practice delete inside word. · repetition 3 of 3",
        "code": [
          "const flags = [alpha, beta, gamma];",
          "const chosen = beta;",
          "console.log(flags, chosen);"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Practice delete inside word.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: d, i, w."
      ],
      "success": "Delete Inside Word produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "d",
        "description": "diw deletes the word under the cursor without consuming adjacent whitespace.",
        "sequence": "diw"
      },
      {
        "key": "i",
        "description": "diw deletes the word under the cursor without consuming adjacent whitespace.",
        "sequence": "diw"
      },
      {
        "key": "w",
        "description": "diw deletes the word under the cursor without consuming adjacent whitespace.",
        "sequence": "diw"
      }
    ]
  },
  {
    "group": "Text Objects - Words",
    "id": "delete-around-word",
    "title": "Delete Around Word",
    "eyebrow": "Text Objects - Words",
    "summary": "daw deletes the current word and adjacent whitespace, preferring whitespace after the word.",
    "detail": "daw deletes the current word and adjacent whitespace, preferring whitespace after the word.",
    "keys": [
      "d",
      "a",
      "w"
    ],
    "task": "Practice delete around word.",
    "sequence": "daw",
    "code": [
      "const temporaryValue = enabled;",
      "console.log(enabled);",
      ""
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice delete around word. · repetition 1 of 3",
        "code": [
          "const temporaryValue = enabled;",
          "console.log(enabled);",
          ""
        ]
      },
      {
        "goal": "Practice delete around word. · repetition 2 of 3",
        "code": [
          "const theme = outdatedThemeName;",
          "apply(theme);",
          "console.log(theme);"
        ]
      },
      {
        "goal": "Practice delete around word. · repetition 3 of 3",
        "code": [
          "const flags = [alpha, beta, gamma];",
          "const chosen = beta;",
          "console.log(flags, chosen);"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Practice delete around word.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: d, a, w."
      ],
      "success": "Delete Around Word produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "d",
        "description": "daw deletes the current word and adjacent whitespace, preferring whitespace after the word.",
        "sequence": "daw"
      },
      {
        "key": "a",
        "description": "daw deletes the current word and adjacent whitespace, preferring whitespace after the word.",
        "sequence": "daw"
      },
      {
        "key": "w",
        "description": "daw deletes the current word and adjacent whitespace, preferring whitespace after the word.",
        "sequence": "daw"
      }
    ]
  },
  {
    "group": "Text Objects - Words",
    "id": "change-inside-word",
    "title": "Change Inside Word",
    "eyebrow": "Text Objects - Words",
    "summary": "ciw replaces the word under the cursor from any position within it.",
    "detail": "ciw replaces the word under the cursor from any position within it.",
    "keys": [
      "c",
      "i",
      "w"
    ],
    "task": "Change inside a word, then escape.",
    "sequence": "ciwenabled<Esc>",
    "code": [
      "const temporaryValue = enabled;",
      "console.log(enabled);",
      ""
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Change inside a word, then escape. · repetition 1 of 3",
        "code": [
          "const temporaryValue = enabled;",
          "console.log(enabled);",
          ""
        ]
      },
      {
        "goal": "Change inside a word, then escape. · repetition 2 of 3",
        "code": [
          "const theme = outdatedThemeName;",
          "apply(theme);",
          "console.log(theme);"
        ]
      },
      {
        "goal": "Change inside a word, then escape. · repetition 3 of 3",
        "code": [
          "const flags = [alpha, beta, gamma];",
          "const chosen = beta;",
          "console.log(flags, chosen);"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Change inside a word, then escape. Enter “enabled” where text is requested.",
      "replacement": "enabled",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Enter “enabled” before returning to Normal mode."
      ],
      "success": "The buffer now contains “enabled” in the intended location."
    },
    "reviewItems": [
      {
        "key": "c",
        "description": "ciw replaces the word under the cursor from any position within it.",
        "sequence": "ciwenabled<Esc>"
      },
      {
        "key": "i",
        "description": "ciw replaces the word under the cursor from any position within it.",
        "sequence": "ciwenabled<Esc>"
      },
      {
        "key": "w",
        "description": "ciw replaces the word under the cursor from any position within it.",
        "sequence": "ciwenabled<Esc>"
      }
    ]
  },
  {
    "group": "Text Objects - Words",
    "id": "words-review",
    "title": "Words Review",
    "eyebrow": "Text Objects - Words",
    "summary": "Review precise word deletion and replacement with inside and around objects.",
    "detail": "Review precise word deletion and replacement with inside and around objects.",
    "keys": [
      "diw",
      "daw",
      "ciw"
    ],
    "task": "Practice each listed operation separately from a fresh copy of the fixture.",
    "sequence": "diw",
    "code": [
      "const temporaryValue = enabled;",
      "console.log(enabled);",
      ""
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice each listed operation separately from a fresh copy of the fixture. · repetition 1 of 3",
        "code": [
          "const temporaryValue = enabled;",
          "console.log(enabled);",
          ""
        ]
      },
      {
        "goal": "Practice each listed operation separately from a fresh copy of the fixture. · repetition 2 of 3",
        "code": [
          "const theme = outdatedThemeName;",
          "apply(theme);",
          "console.log(theme);"
        ]
      },
      {
        "goal": "Practice each listed operation separately from a fresh copy of the fixture. · repetition 3 of 3",
        "code": [
          "const flags = [alpha, beta, gamma];",
          "const chosen = beta;",
          "console.log(flags, chosen);"
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
        "Begin with diw.",
        "Read the command as operator, inside/around, then object.",
        "Compose the command from: diw, daw, ciw."
      ],
      "success": "Words Review produced the requested buffer and cursor state."
    },
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "diw",
        "description": "Delete the indicated object.",
        "sequence": "diw"
      },
      {
        "key": "daw",
        "description": "Delete the indicated object.",
        "sequence": "daw"
      },
      {
        "key": "ciw",
        "description": "Change the indicated object to updated.",
        "sequence": "ciwupdated<Esc>"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
