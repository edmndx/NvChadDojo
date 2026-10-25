import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Text Objects - Paragraphs",
    "id": "delete-inside-paragraph",
    "title": "Delete Inside Paragraph",
    "eyebrow": "Text Objects - Paragraphs",
    "summary": "dip deletes paragraph text while leaving surrounding blank-line structure.",
    "detail": "dip deletes paragraph text while leaving surrounding blank-line structure.",
    "keys": [
      "d",
      "i",
      "p"
    ],
    "task": "Practice delete inside paragraph.",
    "sequence": "dip",
    "code": [
      "/*",
      "",
      "Configure the interface.",
      "Apply the selected theme.",
      "",
      "Configure the language server.",
      "Enable diagnostics.",
      "",
      "*/"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice delete inside paragraph. · repetition 1 of 3",
        "code": [
          "/*",
          "",
          "Configure the interface.",
          "Apply the selected theme.",
          "",
          "Configure the language server.",
          "Enable diagnostics.",
          "",
          "*/"
        ]
      },
      {
        "goal": "Practice delete inside paragraph. · repetition 2 of 3",
        "code": [
          "/*",
          "",
          "Configure the theme.",
          "Keep the border enabled.",
          "",
          "Configure diagnostics.",
          "Keep the server enabled.",
          "",
          "*/"
        ]
      },
      {
        "goal": "Practice delete inside paragraph. · repetition 3 of 3",
        "code": [
          "/*",
          "",
          "First configuration block.",
          "Load the editor options.",
          "",
          "Second configuration block.",
          "Load the key mappings.",
          "",
          "*/"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Practice delete inside paragraph.",
      "cursor": [
        2,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: d, i, p."
      ],
      "success": "Delete Inside Paragraph produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "d",
        "description": "dip deletes paragraph text while leaving surrounding blank-line structure.",
        "sequence": "dip"
      },
      {
        "key": "i",
        "description": "dip deletes paragraph text while leaving surrounding blank-line structure.",
        "sequence": "dip"
      },
      {
        "key": "p",
        "description": "dip deletes paragraph text while leaving surrounding blank-line structure.",
        "sequence": "dip"
      }
    ]
  },
  {
    "group": "Text Objects - Paragraphs",
    "id": "delete-around-paragraph",
    "title": "Delete Around Paragraph",
    "eyebrow": "Text Objects - Paragraphs",
    "summary": "dap deletes the current paragraph and adjacent blank lines, preferring the blank lines after it.",
    "detail": "dap deletes the current paragraph and adjacent blank lines, preferring the blank lines after it.",
    "keys": [
      "d",
      "a",
      "p"
    ],
    "task": "Practice delete around paragraph.",
    "sequence": "dap",
    "code": [
      "/*",
      "",
      "Configure the interface.",
      "Apply the selected theme.",
      "",
      "Configure the language server.",
      "Enable diagnostics.",
      "",
      "*/"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice delete around paragraph. · repetition 1 of 3",
        "code": [
          "/*",
          "",
          "Configure the interface.",
          "Apply the selected theme.",
          "",
          "Configure the language server.",
          "Enable diagnostics.",
          "",
          "*/"
        ]
      },
      {
        "goal": "Practice delete around paragraph. · repetition 2 of 3",
        "code": [
          "/*",
          "",
          "Configure the theme.",
          "Keep the border enabled.",
          "",
          "Configure diagnostics.",
          "Keep the server enabled.",
          "",
          "*/"
        ]
      },
      {
        "goal": "Practice delete around paragraph. · repetition 3 of 3",
        "code": [
          "/*",
          "",
          "First configuration block.",
          "Load the editor options.",
          "",
          "Second configuration block.",
          "Load the key mappings.",
          "",
          "*/"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Practice delete around paragraph.",
      "cursor": [
        2,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: d, a, p."
      ],
      "success": "Delete Around Paragraph produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "d",
        "description": "dap deletes the current paragraph and adjacent blank lines, preferring the blank lines after it.",
        "sequence": "dap"
      },
      {
        "key": "a",
        "description": "dap deletes the current paragraph and adjacent blank lines, preferring the blank lines after it.",
        "sequence": "dap"
      },
      {
        "key": "p",
        "description": "dap deletes the current paragraph and adjacent blank lines, preferring the blank lines after it.",
        "sequence": "dap"
      }
    ]
  },
  {
    "group": "Text Objects - Paragraphs",
    "id": "change-inside-paragraph",
    "title": "Change Inside Paragraph",
    "eyebrow": "Text Objects - Paragraphs",
    "summary": "cip replaces paragraph contents and enters Insert mode.",
    "detail": "cip replaces paragraph contents and enters Insert mode.",
    "keys": [
      "c",
      "i",
      "p"
    ],
    "task": "Change inside a paragraph, then escape.",
    "sequence": "cipConfiguration updated.<Esc>",
    "code": [
      "/*",
      "",
      "Configure the interface.",
      "Apply the selected theme.",
      "",
      "Configure the language server.",
      "Enable diagnostics.",
      "",
      "*/"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Change inside a paragraph, then escape. · repetition 1 of 3",
        "code": [
          "/*",
          "",
          "Configure the interface.",
          "Apply the selected theme.",
          "",
          "Configure the language server.",
          "Enable diagnostics.",
          "",
          "*/"
        ]
      },
      {
        "goal": "Change inside a paragraph, then escape. · repetition 2 of 3",
        "code": [
          "/*",
          "",
          "Configure the theme.",
          "Keep the border enabled.",
          "",
          "Configure diagnostics.",
          "Keep the server enabled.",
          "",
          "*/"
        ]
      },
      {
        "goal": "Change inside a paragraph, then escape. · repetition 3 of 3",
        "code": [
          "/*",
          "",
          "First configuration block.",
          "Load the editor options.",
          "",
          "Second configuration block.",
          "Load the key mappings.",
          "",
          "*/"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Change inside a paragraph, then escape. Enter “Configuration updated.” where text is requested.",
      "replacement": "Configuration updated.",
      "cursor": [
        2,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Enter “Configuration updated.” before returning to Normal mode."
      ],
      "success": "The buffer now contains “Configuration updated.” in the intended location."
    },
    "reviewItems": [
      {
        "key": "c",
        "description": "cip replaces paragraph contents and enters Insert mode.",
        "sequence": "cipConfiguration updated.<Esc>"
      },
      {
        "key": "i",
        "description": "cip replaces paragraph contents and enters Insert mode.",
        "sequence": "cipConfiguration updated.<Esc>"
      },
      {
        "key": "p",
        "description": "cip replaces paragraph contents and enters Insert mode.",
        "sequence": "cipConfiguration updated.<Esc>"
      }
    ]
  },
  {
    "group": "Text Objects - Paragraphs",
    "id": "paragraphs-review",
    "title": "Paragraphs Review",
    "eyebrow": "Text Objects - Paragraphs",
    "summary": "Review deletion and replacement across entire paragraphs.",
    "detail": "Review deletion and replacement across entire paragraphs.",
    "keys": [
      "dip",
      "dap",
      "cip"
    ],
    "task": "Practice each listed operation separately from a fresh copy of the fixture.",
    "sequence": "dip",
    "code": [
      "/*",
      "",
      "Configure the interface.",
      "Apply the selected theme.",
      "",
      "Configure the language server.",
      "Enable diagnostics.",
      "",
      "*/"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice each listed operation separately from a fresh copy of the fixture. · repetition 1 of 3",
        "code": [
          "/*",
          "",
          "Configure the interface.",
          "Apply the selected theme.",
          "",
          "Configure the language server.",
          "Enable diagnostics.",
          "",
          "*/"
        ]
      },
      {
        "goal": "Practice each listed operation separately from a fresh copy of the fixture. · repetition 2 of 3",
        "code": [
          "/*",
          "",
          "Configure the theme.",
          "Keep the border enabled.",
          "",
          "Configure diagnostics.",
          "Keep the server enabled.",
          "",
          "*/"
        ]
      },
      {
        "goal": "Practice each listed operation separately from a fresh copy of the fixture. · repetition 3 of 3",
        "code": [
          "/*",
          "",
          "First configuration block.",
          "Load the editor options.",
          "",
          "Second configuration block.",
          "Load the key mappings.",
          "",
          "*/"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Practice each listed operation separately from a fresh copy of the fixture.",
      "cursor": [
        2,
        0
      ],
      "hints": [
        "Begin with dip.",
        "Read the command as operator, inside/around, then object.",
        "Compose the command from: dip, dap, cip."
      ],
      "success": "Paragraphs Review produced the requested buffer and cursor state."
    },
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "dip",
        "description": "Delete the indicated object.",
        "sequence": "dip"
      },
      {
        "key": "dap",
        "description": "Delete the indicated object.",
        "sequence": "dap"
      },
      {
        "key": "cip",
        "description": "Change the indicated object to updated.",
        "sequence": "cipupdated<Esc>"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
