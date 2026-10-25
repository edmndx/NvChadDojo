import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Advanced Vertical Movement",
    "id": "relative-line-jumps",
    "title": "Relative Line Jumps",
    "eyebrow": "Advanced Vertical Movement",
    "summary": "Prefix j or k with a count to move that many buffer lines, stopping at the file boundary.",
    "detail": "Native j and k count buffer lines. Wrapped screen lines use gj and gk; NVChad may map uncounted j and k to those motions.",
    "keys": [
      "{n}",
      "j",
      "k"
    ],
    "task": "Move down five lines, then up three.",
    "sequence": "5j3k",
    "code": [
      "// UI configuration.",
      "const ui = {};",
      "ui.theme = 'onedark';",
      "ui.statusLine = true;",
      "ui.tabs = true;",
      "console.log(ui);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Move down five lines, then up three. · repetition 1 of 3",
        "code": [
          "// UI configuration.",
          "const ui = {};",
          "ui.theme = 'onedark';",
          "ui.statusLine = true;",
          "ui.tabs = true;",
          "console.log(ui);"
        ]
      },
      {
        "goal": "Move down five lines, then up three. · repetition 2 of 3",
        "code": [
          "const alpha = 1;",
          "",
          "const beta = 2;",
          "",
          "const gamma = 3;",
          "console.log(alpha, beta, gamma);"
        ]
      },
      {
        "goal": "Move down five lines, then up three. · repetition 3 of 3",
        "code": [
          "function setup() {",
          "  configureUi();",
          "  configureLanguageServer();",
          "  configureMappings();",
          "}",
          "console.log(setup);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Move down five lines, then up three.",
      "cursor": [
        0,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: {n}, j, k."
      ],
      "success": "Relative Line Jumps produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "{n}",
        "description": "Counts select how many buffer lines to move.",
        "sequence": "5j3k"
      },
      {
        "key": "j",
        "description": "Move down five buffer lines.",
        "sequence": "5j"
      },
      {
        "key": "k",
        "description": "Move down five lines, then up three.",
        "sequence": "5j3k"
      }
    ]
  },
  {
    "group": "Advanced Vertical Movement",
    "id": "absolute-line-jumps",
    "title": "Absolute Line Jumps",
    "eyebrow": "Advanced Vertical Movement",
    "summary": "gg jumps to the first line and G jumps to the final line.",
    "detail": "gg jumps to the first line and G jumps to the final line.",
    "keys": [
      "gg",
      "G"
    ],
    "task": "Jump to the end, then the beginning.",
    "sequence": "Ggg",
    "code": [
      "// UI configuration.",
      "const ui = {};",
      "ui.theme = 'onedark';",
      "ui.statusLine = true;",
      "ui.tabs = true;",
      "console.log(ui);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Jump to the end, then the beginning. · repetition 1 of 3",
        "code": [
          "// UI configuration.",
          "const ui = {};",
          "ui.theme = 'onedark';",
          "ui.statusLine = true;",
          "ui.tabs = true;",
          "console.log(ui);"
        ]
      },
      {
        "goal": "Jump to the end, then the beginning. · repetition 2 of 3",
        "code": [
          "const alpha = 1;",
          "",
          "const beta = 2;",
          "",
          "const gamma = 3;",
          "console.log(alpha, beta, gamma);"
        ]
      },
      {
        "goal": "Jump to the end, then the beginning. · repetition 3 of 3",
        "code": [
          "function setup() {",
          "  configureUi();",
          "  configureLanguageServer();",
          "  configureMappings();",
          "}",
          "console.log(setup);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Jump to the end, then the beginning.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: gg, G."
      ],
      "success": "Absolute Line Jumps produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "gg",
        "description": "Jump to the first line.",
        "sequence": "gg"
      },
      {
        "key": "G",
        "description": "Jump to the last line.",
        "sequence": "G"
      }
    ]
  },
  {
    "group": "Advanced Vertical Movement",
    "id": "paragraph-jumps",
    "title": "Paragraph Jumps",
    "eyebrow": "Advanced Vertical Movement",
    "summary": "Closing brace moves to the next paragraph; opening brace moves to the previous one.",
    "detail": "Closing brace moves to the next paragraph; opening brace moves to the previous one.",
    "keys": [
      "}",
      "{"
    ],
    "task": "Jump forward one paragraph, then back.",
    "sequence": "}{",
    "code": [
      "// UI settings.",
      "const ui = {};",
      "",
      "// Language server settings.",
      "const languageServer = {};",
      "",
      "console.log(ui, languageServer);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Jump forward one paragraph, then back. · repetition 1 of 3",
        "code": [
          "// UI settings.",
          "const ui = {};",
          "",
          "// Language server settings.",
          "const languageServer = {};",
          "",
          "console.log(ui, languageServer);"
        ]
      },
      {
        "goal": "Jump forward one paragraph, then back. · repetition 2 of 3",
        "code": [
          "let alpha = 1;",
          "alpha += 1;",
          "",
          "const beta = 2;",
          "",
          "console.log(alpha, beta);"
        ]
      },
      {
        "goal": "Jump forward one paragraph, then back. · repetition 3 of 3",
        "code": [
          "function setup() {",
          "  configureUi();",
          "}",
          "",
          "setup();",
          "",
          "console.log(setup);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Jump forward one paragraph, then back.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: }, {."
      ],
      "success": "Paragraph Jumps produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "}",
        "description": "Move to the next paragraph boundary.",
        "sequence": "}"
      },
      {
        "key": "{",
        "description": "Move forward to a boundary, then back to the previous boundary.",
        "sequence": "}{"
      }
    ]
  },
  {
    "group": "Advanced Vertical Movement",
    "id": "window-scrolls",
    "title": "Window Scrolls",
    "eyebrow": "Advanced Vertical Movement",
    "summary": "Ctrl+u scrolls half a window up and Ctrl+d scrolls half a window down.",
    "detail": "Ctrl+u scrolls half a window up and Ctrl+d scrolls half a window down.",
    "keys": [
      "Ctrl+u",
      "Ctrl+d"
    ],
    "task": "Scroll up half a window, then down.",
    "sequence": "<C-u><C-d>",
    "code": [
      "// UI configuration.",
      "const ui = {};",
      "ui.theme = 'onedark';",
      "ui.statusLine = true;",
      "ui.tabs = true;",
      "console.log(ui);"
    ],
    "tip": "Ctrl+u and Ctrl+d use half the current window height by default. This short fixture reaches file boundaries; actual scrolling depends on the terminal height.",
    "drills": [
      {
        "goal": "Scroll up half a window, then down. · repetition 1 of 3",
        "code": [
          "// UI configuration.",
          "const ui = {};",
          "ui.theme = 'onedark';",
          "ui.statusLine = true;",
          "ui.tabs = true;",
          "console.log(ui);"
        ]
      },
      {
        "goal": "Scroll up half a window, then down. · repetition 2 of 3",
        "code": [
          "const alpha = 1;",
          "",
          "const beta = 2;",
          "",
          "const gamma = 3;",
          "console.log(alpha, beta, gamma);"
        ]
      },
      {
        "goal": "Scroll up half a window, then down. · repetition 3 of 3",
        "code": [
          "function setup() {",
          "  configureUi();",
          "  configureLanguageServer();",
          "  configureMappings();",
          "}",
          "console.log(setup);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Scroll up half a window, then down.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: Ctrl+u, Ctrl+d."
      ],
      "success": "Window Scrolls produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "Ctrl+u",
        "description": "Move upward by the scroll amount, normally half a window.",
        "sequence": "<C-u>"
      },
      {
        "key": "Ctrl+d",
        "description": "Move downward by the scroll amount, normally half a window.",
        "sequence": "<C-d>"
      }
    ]
  },
  {
    "group": "Advanced Vertical Movement",
    "id": "advanced-vertical-movement-review",
    "title": "Advanced Vertical Movement Review",
    "eyebrow": "Advanced Vertical Movement",
    "summary": "Review every command introduced in Advanced Vertical Movement before moving to the next category.",
    "detail": "Review every command introduced in Advanced Vertical Movement before moving to the next category.",
    "keys": [
      "{n}",
      "j",
      "k",
      "gg",
      "G",
      "}",
      "{",
      "Ctrl+u",
      "Ctrl+d"
    ],
    "task": "",
    "sequence": "5j3k",
    "code": [
      "// UI configuration.",
      "const ui = {};",
      "ui.theme = 'onedark';",
      "ui.statusLine = true;",
      "ui.tabs = true;",
      "console.log(ui);"
    ],
    "tip": "Return to any command in Advanced Vertical Movement that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "{n}",
        "description": "Counts select how many buffer lines to move.",
        "sequence": "5j3k",
        "code": [
          "// UI configuration.",
          "const ui = {};",
          "ui.theme = 'onedark';",
          "ui.statusLine = true;",
          "ui.tabs = true;",
          "console.log(ui);"
        ],
        "cursor": [
          0,
          0
        ]
      },
      {
        "key": "j",
        "description": "Move down five buffer lines.",
        "sequence": "5j",
        "code": [
          "// UI configuration.",
          "const ui = {};",
          "ui.theme = 'onedark';",
          "ui.statusLine = true;",
          "ui.tabs = true;",
          "console.log(ui);"
        ],
        "cursor": [
          0,
          0
        ]
      },
      {
        "key": "k",
        "description": "Move down five lines, then up three.",
        "sequence": "5j3k",
        "code": [
          "// UI configuration.",
          "const ui = {};",
          "ui.theme = 'onedark';",
          "ui.statusLine = true;",
          "ui.tabs = true;",
          "console.log(ui);"
        ],
        "cursor": [
          0,
          0
        ]
      },
      {
        "key": "gg",
        "description": "Jump to the first line.",
        "sequence": "gg",
        "code": [
          "// UI configuration.",
          "const ui = {};",
          "ui.theme = 'onedark';",
          "ui.statusLine = true;",
          "ui.tabs = true;",
          "console.log(ui);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "G",
        "description": "Jump to the last line.",
        "sequence": "G",
        "code": [
          "// UI configuration.",
          "const ui = {};",
          "ui.theme = 'onedark';",
          "ui.statusLine = true;",
          "ui.tabs = true;",
          "console.log(ui);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "}",
        "description": "Move to the next paragraph boundary.",
        "sequence": "}",
        "code": [
          "// UI settings.",
          "const ui = {};",
          "",
          "// Language server settings.",
          "const languageServer = {};",
          "",
          "console.log(ui, languageServer);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "{",
        "description": "Move forward to a boundary, then back to the previous boundary.",
        "sequence": "}{",
        "code": [
          "// UI settings.",
          "const ui = {};",
          "",
          "// Language server settings.",
          "const languageServer = {};",
          "",
          "console.log(ui, languageServer);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "Ctrl+u",
        "description": "Move upward by the scroll amount, normally half a window.",
        "sequence": "<C-u>",
        "code": [
          "// UI configuration.",
          "const ui = {};",
          "ui.theme = 'onedark';",
          "ui.statusLine = true;",
          "ui.tabs = true;",
          "console.log(ui);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "Ctrl+d",
        "description": "Move downward by the scroll amount, normally half a window.",
        "sequence": "<C-d>",
        "code": [
          "// UI configuration.",
          "const ui = {};",
          "ui.theme = 'onedark';",
          "ui.statusLine = true;",
          "ui.tabs = true;",
          "console.log(ui);"
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
