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
      "local temporary_value = enabled",
      "return enabled",
      ""
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice delete inside word. · repetition 1 of 3",
        "code": [
          "local temporary_value = enabled",
          "return enabled",
          ""
        ]
      },
      {
        "goal": "Practice delete inside word. · repetition 2 of 3",
        "code": [
          "local theme = outdated_theme_name",
          "apply(theme)",
          "return theme"
        ]
      },
      {
        "goal": "Practice delete inside word. · repetition 3 of 3",
        "code": [
          "local flags = alpha beta gamma",
          "local chosen = beta",
          "return chosen"
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
        "Begin with d.",
        "Read the command as operator, inside/around, then object.",
        "Compose the command from: d, i, w."
      ],
      "success": "Delete Inside Word produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Text Objects - Words",
    "id": "delete-around-word",
    "title": "Delete Around Word",
    "eyebrow": "Text Objects - Words",
    "summary": "daw deletes the current word and helpful surrounding whitespace.",
    "detail": "daw deletes the current word and helpful surrounding whitespace.",
    "keys": [
      "d",
      "a",
      "w"
    ],
    "task": "Practice delete around word.",
    "sequence": "daw",
    "code": [
      "local temporary_value = enabled",
      "return enabled",
      ""
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice delete around word. · repetition 1 of 3",
        "code": [
          "local temporary_value = enabled",
          "return enabled",
          ""
        ]
      },
      {
        "goal": "Practice delete around word. · repetition 2 of 3",
        "code": [
          "local theme = outdated_theme_name",
          "apply(theme)",
          "return theme"
        ]
      },
      {
        "goal": "Practice delete around word. · repetition 3 of 3",
        "code": [
          "local flags = alpha beta gamma",
          "local chosen = beta",
          "return chosen"
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
        "Begin with d.",
        "Read the command as operator, inside/around, then object.",
        "Compose the command from: d, a, w."
      ],
      "success": "Delete Around Word produced the requested buffer and cursor state."
    }
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
    "sequence": "ciw<Esc>",
    "code": [
      "local temporary_value = enabled",
      "return enabled",
      ""
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Change inside a word, then escape. · repetition 1 of 3",
        "code": [
          "local temporary_value = enabled",
          "return enabled",
          ""
        ]
      },
      {
        "goal": "Change inside a word, then escape. · repetition 2 of 3",
        "code": [
          "local theme = outdated_theme_name",
          "apply(theme)",
          "return theme"
        ]
      },
      {
        "goal": "Change inside a word, then escape. · repetition 3 of 3",
        "code": [
          "local flags = alpha beta gamma",
          "local chosen = beta",
          "return chosen"
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
        "Begin with c.",
        "Read the command as operator, inside/around, then object.",
        "Enter “enabled” before returning to Normal mode."
      ],
      "success": "The buffer now contains “enabled” in the intended location."
    }
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
    "task": "Run all three word operations.",
    "sequence": "diwdawciw<Esc>",
    "code": [
      "local temporary_value = enabled",
      "return enabled",
      ""
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Run all three word operations. · repetition 1 of 3",
        "code": [
          "local temporary_value = enabled",
          "return enabled",
          ""
        ]
      },
      {
        "goal": "Run all three word operations. · repetition 2 of 3",
        "code": [
          "local theme = outdated_theme_name",
          "apply(theme)",
          "return theme"
        ]
      },
      {
        "goal": "Run all three word operations. · repetition 3 of 3",
        "code": [
          "local flags = alpha beta gamma",
          "local chosen = beta",
          "return chosen"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Run all three word operations.",
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
    "reviewOnly": true
  }
] satisfies readonly Lesson[];

export default lessons;
