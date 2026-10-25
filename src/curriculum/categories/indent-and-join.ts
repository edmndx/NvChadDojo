import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Indent & Join",
    "id": "indent-lines",
    "title": "Indent and Un-indent",
    "eyebrow": "Indent & Join",
    "summary": ">> shifts the current line right; << shifts it left again.",
    "detail": ">> shifts the current line right; << shifts it left again.",
    "keys": [
      ">>",
      "<<"
    ],
    "task": "Indent the current line, then restore its indentation.",
    "sequence": ">><<",
    "code": [
      "if (enabled) {",
      "  console.log('ready');",
      "}"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Indent the current line, then restore its indentation. · repetition 1 of 3",
        "code": [
          "if (enabled) {",
          "  console.log('ready');",
          "}"
        ]
      },
      {
        "goal": "Indent the current line, then restore its indentation. · repetition 2 of 3",
        "code": [
          "const config = {",
          "  theme: 'onedark',",
          "};"
        ]
      },
      {
        "goal": "Indent the current line, then restore its indentation. · repetition 3 of 3",
        "code": [
          "const message =",
          "  'ready';",
          "console.log(message);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Indent the current line, then restore its indentation.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: >>, <<."
      ],
      "success": "Indent and Un-indent produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": ">>",
        "description": "Indent the current line by shiftwidth.",
        "sequence": ">>"
      },
      {
        "key": "<<",
        "description": "Indent once, then remove one shiftwidth of indentation.",
        "sequence": ">><<"
      }
    ]
  },
  {
    "group": "Indent & Join",
    "id": "reindent-file",
    "title": "Reindent the Whole File",
    "eyebrow": "Indent & Join",
    "summary": "gg=G applies Neovim's indentation rules from the first line through the end of the file.",
    "detail": "gg=G applies Neovim's indentation rules from the first line through the end of the file.",
    "keys": [
      "gg",
      "=",
      "G"
    ],
    "task": "Reindent the complete buffer.",
    "sequence": "gg=G",
    "code": [
      "if (enabled) {",
      "console.log('ready');",
      "}"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Reindent the complete buffer. · repetition 1 of 3",
        "code": [
          "if (enabled) {",
          "console.log('ready');",
          "}"
        ]
      },
      {
        "goal": "Reindent the complete buffer. · repetition 2 of 3",
        "code": [
          "const config = {",
          "theme: 'onedark',",
          "};"
        ]
      },
      {
        "goal": "Reindent the complete buffer. · repetition 3 of 3",
        "code": [
          "const message =",
          "'ready';",
          "console.log(message);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Reindent the complete buffer.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: gg, =, G."
      ],
      "success": "Reindent the Whole File produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "gg",
        "description": "gg=G applies Neovim's indentation rules from the first line through the end of the file.",
        "sequence": "gg=G",
        "code": [
          "if (enabled) {",
          "console.log('ready');",
          "}"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "=",
        "description": "gg=G applies Neovim's indentation rules from the first line through the end of the file.",
        "sequence": "gg=G",
        "code": [
          "if (enabled) {",
          "console.log('ready');",
          "}"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "G",
        "description": "gg=G applies Neovim's indentation rules from the first line through the end of the file.",
        "sequence": "gg=G",
        "code": [
          "if (enabled) {",
          "console.log('ready');",
          "}"
        ],
        "cursor": [
          1,
          0
        ]
      }
    ]
  },
  {
    "group": "Indent & Join",
    "id": "join-lines",
    "title": "Join Lines",
    "eyebrow": "Indent & Join",
    "summary": "J joins the next line with a separating space; gJ joins without inserting one.",
    "detail": "J joins the next line with a separating space; gJ joins without inserting one.",
    "keys": [
      "J",
      "gJ"
    ],
    "task": "Join the current line with the line below.",
    "sequence": "J",
    "code": [
      "if (enabled) {",
      "  console.log('ready');",
      "}"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Join the current line with the line below. · repetition 1 of 3",
        "code": [
          "if (enabled) {",
          "  console.log('ready');",
          "}"
        ]
      },
      {
        "goal": "Join the current line with the line below. · repetition 2 of 3",
        "code": [
          "const config = {",
          "  theme: 'onedark',",
          "};"
        ]
      },
      {
        "goal": "Join the current line with the line below. · repetition 3 of 3",
        "code": [
          "const message =",
          "  'ready';",
          "console.log(message);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Join the current line with the line below.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: J, gJ."
      ],
      "success": "Join Lines produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "J",
        "description": "Join the next line, removing its leading indentation and normally adding a separator.",
        "sequence": "J"
      },
      {
        "key": "gJ",
        "description": "Join the next line without changing whitespace or adding a separator.",
        "sequence": "gJ"
      }
    ]
  },
  {
    "group": "Indent & Join",
    "id": "indent-join-review",
    "title": "Indent & Join Review",
    "eyebrow": "Indent & Join",
    "summary": "Review every command introduced in Indent & Join before moving to the next category.",
    "detail": "Review every command introduced in Indent & Join before moving to the next category.",
    "keys": [
      ">>",
      "<<",
      "gg",
      "=",
      "G",
      "J",
      "gJ"
    ],
    "task": "",
    "sequence": ">><<",
    "code": [
      "if (enabled) {",
      "  console.log('ready');",
      "}"
    ],
    "tip": "Return to any command in Indent & Join that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": ">>",
        "description": "Indent the current line by shiftwidth.",
        "sequence": ">>",
        "code": [
          "if (enabled) {",
          "  console.log('ready');",
          "}"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "<<",
        "description": "Indent once, then remove one shiftwidth of indentation.",
        "sequence": ">><<",
        "code": [
          "if (enabled) {",
          "  console.log('ready');",
          "}"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "gg",
        "description": "gg=G applies Neovim's indentation rules from the first line through the end of the file.",
        "sequence": "gg=G",
        "code": [
          "if (enabled) {",
          "console.log('ready');",
          "}"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "=",
        "description": "gg=G applies Neovim's indentation rules from the first line through the end of the file.",
        "sequence": "gg=G",
        "code": [
          "if (enabled) {",
          "console.log('ready');",
          "}"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "G",
        "description": "gg=G applies Neovim's indentation rules from the first line through the end of the file.",
        "sequence": "gg=G",
        "code": [
          "if (enabled) {",
          "console.log('ready');",
          "}"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "J",
        "description": "Join the next line, removing its leading indentation and normally adding a separator.",
        "sequence": "J",
        "code": [
          "if (enabled) {",
          "  console.log('ready');",
          "}"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "gJ",
        "description": "Join the next line without changing whitespace or adding a separator.",
        "sequence": "gJ",
        "code": [
          "if (enabled) {",
          "  console.log('ready');",
          "}"
        ],
        "cursor": [
          1,
          0
        ]
      }
    ],
    "cursor": [
      1,
      2
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
