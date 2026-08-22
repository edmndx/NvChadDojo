import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Advanced Vertical Movement",
    "id": "relative-line-jumps",
    "title": "Relative Line Jumps",
    "eyebrow": "Advanced Vertical Movement",
    "summary": "Prefix j or k with a count to move an exact number of screen lines.",
    "detail": "Prefix j or k with a count to move an exact number of screen lines.",
    "keys": [
      "{n}",
      "j",
      "k"
    ],
    "task": "Move down five lines, then up three.",
    "sequence": "5j3k",
    "code": [
      "-- top of configuration",
      "local ui = {}",
      "ui.theme = 'onedark'",
      "ui.statusline = true",
      "ui.tabufline = true",
      "return ui"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Move down five lines, then up three. · repetition 1 of 3",
        "code": [
          "-- top of configuration",
          "local ui = {}",
          "ui.theme = 'onedark'",
          "ui.statusline = true",
          "ui.tabufline = true",
          "return ui"
        ]
      },
      {
        "goal": "Move down five lines, then up three. · repetition 2 of 3",
        "code": [
          "local alpha = 1",
          "",
          "local beta = 2",
          "",
          "local gamma = 3",
          "return gamma"
        ]
      },
      {
        "goal": "Move down five lines, then up three. · repetition 3 of 3",
        "code": [
          "function setup()",
          "  configure_ui()",
          "  configure_lsp()",
          "  configure_maps()",
          "end",
          "return setup"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Move down five lines, then up three.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with {n}.",
        "Use only the keys introduced in Advanced Vertical Movement.",
        "Compose the command from: {n}, j, k."
      ],
      "success": "Relative Line Jumps produced the requested buffer and cursor state."
    }
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
      "-- top of configuration",
      "local ui = {}",
      "ui.theme = 'onedark'",
      "ui.statusline = true",
      "ui.tabufline = true",
      "return ui"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Jump to the end, then the beginning. · repetition 1 of 3",
        "code": [
          "-- top of configuration",
          "local ui = {}",
          "ui.theme = 'onedark'",
          "ui.statusline = true",
          "ui.tabufline = true",
          "return ui"
        ]
      },
      {
        "goal": "Jump to the end, then the beginning. · repetition 2 of 3",
        "code": [
          "local alpha = 1",
          "",
          "local beta = 2",
          "",
          "local gamma = 3",
          "return gamma"
        ]
      },
      {
        "goal": "Jump to the end, then the beginning. · repetition 3 of 3",
        "code": [
          "function setup()",
          "  configure_ui()",
          "  configure_lsp()",
          "  configure_maps()",
          "end",
          "return setup"
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
        "Begin with gg.",
        "Use only the keys introduced in Advanced Vertical Movement.",
        "Compose the command from: gg, G."
      ],
      "success": "Absolute Line Jumps produced the requested buffer and cursor state."
    }
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
      "-- top of configuration",
      "local ui = {}",
      "ui.theme = 'onedark'",
      "ui.statusline = true",
      "ui.tabufline = true",
      "return ui"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Jump forward one paragraph, then back. · repetition 1 of 3",
        "code": [
          "-- top of configuration",
          "local ui = {}",
          "ui.theme = 'onedark'",
          "ui.statusline = true",
          "ui.tabufline = true",
          "return ui"
        ]
      },
      {
        "goal": "Jump forward one paragraph, then back. · repetition 2 of 3",
        "code": [
          "local alpha = 1",
          "",
          "local beta = 2",
          "",
          "local gamma = 3",
          "return gamma"
        ]
      },
      {
        "goal": "Jump forward one paragraph, then back. · repetition 3 of 3",
        "code": [
          "function setup()",
          "  configure_ui()",
          "  configure_lsp()",
          "  configure_maps()",
          "end",
          "return setup"
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
        "Begin with }.",
        "Use only the keys introduced in Advanced Vertical Movement.",
        "Compose the command from: }, {."
      ],
      "success": "Paragraph Jumps produced the requested buffer and cursor state."
    }
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
      "-- top of configuration",
      "local ui = {}",
      "ui.theme = 'onedark'",
      "ui.statusline = true",
      "ui.tabufline = true",
      "return ui"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Scroll up half a window, then down. · repetition 1 of 3",
        "code": [
          "-- top of configuration",
          "local ui = {}",
          "ui.theme = 'onedark'",
          "ui.statusline = true",
          "ui.tabufline = true",
          "return ui"
        ]
      },
      {
        "goal": "Scroll up half a window, then down. · repetition 2 of 3",
        "code": [
          "local alpha = 1",
          "",
          "local beta = 2",
          "",
          "local gamma = 3",
          "return gamma"
        ]
      },
      {
        "goal": "Scroll up half a window, then down. · repetition 3 of 3",
        "code": [
          "function setup()",
          "  configure_ui()",
          "  configure_lsp()",
          "  configure_maps()",
          "end",
          "return setup"
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
        "Begin with Ctrl+u.",
        "Use only the keys introduced in Advanced Vertical Movement.",
        "Compose the command from: Ctrl+u, Ctrl+d."
      ],
      "success": "Window Scrolls produced the requested buffer and cursor state."
    }
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
      "-- top of configuration",
      "local ui = {}",
      "ui.theme = 'onedark'",
      "ui.statusline = true",
      "ui.tabufline = true",
      "return ui"
    ],
    "tip": "Return to any command in Advanced Vertical Movement that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "{n}",
        "description": "Prefix j or k with a count to move an exact number of screen lines.",
        "sequence": "5j3k"
      },
      {
        "key": "j",
        "description": "Prefix j or k with a count to move an exact number of screen lines.",
        "sequence": "5j3k"
      },
      {
        "key": "k",
        "description": "Prefix j or k with a count to move an exact number of screen lines.",
        "sequence": "5j3k"
      },
      {
        "key": "gg",
        "description": "gg jumps to the first line and G jumps to the final line.",
        "sequence": "Ggg"
      },
      {
        "key": "G",
        "description": "gg jumps to the first line and G jumps to the final line.",
        "sequence": "Ggg"
      },
      {
        "key": "}",
        "description": "Closing brace moves to the next paragraph; opening brace moves to the previous one.",
        "sequence": "}{"
      },
      {
        "key": "{",
        "description": "Closing brace moves to the next paragraph; opening brace moves to the previous one.",
        "sequence": "}{"
      },
      {
        "key": "Ctrl+u",
        "description": "Ctrl+u scrolls half a window up and Ctrl+d scrolls half a window down.",
        "sequence": "<C-u><C-d>"
      },
      {
        "key": "Ctrl+d",
        "description": "Ctrl+u scrolls half a window up and Ctrl+d scrolls half a window down.",
        "sequence": "<C-u><C-d>"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
