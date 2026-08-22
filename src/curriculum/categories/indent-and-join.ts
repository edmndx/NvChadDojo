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
      "if enabled then",
      "print('ready')",
      "end"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Indent the current line, then restore its indentation. · repetition 1 of 3",
        "code": [
          "if enabled then",
          "print('ready')",
          "end"
        ]
      },
      {
        "goal": "Indent the current line, then restore its indentation. · repetition 2 of 3",
        "code": [
          "local config = {",
          "theme = 'onedark',",
          "}"
        ]
      },
      {
        "goal": "Indent the current line, then restore its indentation. · repetition 3 of 3",
        "code": [
          "local message =",
          "  'ready'",
          "return message"
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
        "Begin with >>.",
        "Use only the keys introduced in Indent & Join.",
        "Compose the command from: >>, <<."
      ],
      "success": "Indent and Un-indent produced the requested buffer and cursor state."
    }
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
      "if enabled then",
      "print('ready')",
      "end"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Reindent the complete buffer. · repetition 1 of 3",
        "code": [
          "if enabled then",
          "print('ready')",
          "end"
        ]
      },
      {
        "goal": "Reindent the complete buffer. · repetition 2 of 3",
        "code": [
          "local config = {",
          "theme = 'onedark',",
          "}"
        ]
      },
      {
        "goal": "Reindent the complete buffer. · repetition 3 of 3",
        "code": [
          "local message =",
          "  'ready'",
          "return message"
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
        "Begin with gg.",
        "Use only the keys introduced in Indent & Join.",
        "Compose the command from: gg, =, G."
      ],
      "success": "Reindent the Whole File produced the requested buffer and cursor state."
    }
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
      "if enabled then",
      "print('ready')",
      "end"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Join the current line with the line below. · repetition 1 of 3",
        "code": [
          "if enabled then",
          "print('ready')",
          "end"
        ]
      },
      {
        "goal": "Join the current line with the line below. · repetition 2 of 3",
        "code": [
          "local config = {",
          "theme = 'onedark',",
          "}"
        ]
      },
      {
        "goal": "Join the current line with the line below. · repetition 3 of 3",
        "code": [
          "local message =",
          "  'ready'",
          "return message"
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
        "Begin with J.",
        "Use only the keys introduced in Indent & Join.",
        "Compose the command from: J, gJ."
      ],
      "success": "Join Lines produced the requested buffer and cursor state."
    }
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
      "if enabled then",
      "print('ready')",
      "end"
    ],
    "tip": "Return to any command in Indent & Join that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": ">>",
        "description": ">> shifts the current line right; << shifts it left again.",
        "sequence": ">><<"
      },
      {
        "key": "<<",
        "description": ">> shifts the current line right; << shifts it left again.",
        "sequence": ">><<"
      },
      {
        "key": "gg",
        "description": "gg=G applies Neovim's indentation rules from the first line through the end of the file.",
        "sequence": "gg=G"
      },
      {
        "key": "=",
        "description": "gg=G applies Neovim's indentation rules from the first line through the end of the file.",
        "sequence": "gg=G"
      },
      {
        "key": "G",
        "description": "gg=G applies Neovim's indentation rules from the first line through the end of the file.",
        "sequence": "gg=G"
      },
      {
        "key": "J",
        "description": "J joins the next line with a separating space; gJ joins without inserting one.",
        "sequence": "J"
      },
      {
        "key": "gJ",
        "description": "J joins the next line with a separating space; gJ joins without inserting one.",
        "sequence": "J"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
