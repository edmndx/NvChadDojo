import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Jump & Change History",
    "id": "jump-list",
    "title": "Jump Back and Forward",
    "eyebrow": "Jump & Change History",
    "summary": "Ctrl+o travels backward through jumps; Ctrl+i travels forward again.",
    "detail": "Ctrl+o travels backward through jumps; Ctrl+i travels forward again.",
    "keys": [
      "Ctrl+o",
      "Ctrl+i"
    ],
    "task": "Move backward and forward through the jump list.",
    "sequence": "<C-o><C-i>",
    "code": [
      "function start()",
      "  configure()",
      "  run()",
      "end",
      "return start"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Move backward and forward through the jump list. · repetition 1 of 3",
        "code": [
          "function start()",
          "  configure()",
          "  run()",
          "end",
          "return start"
        ]
      },
      {
        "goal": "Move backward and forward through the jump list. · repetition 2 of 3",
        "code": [
          "local first = 1",
          "",
          "local middle = 2",
          "",
          "local last = 3"
        ]
      },
      {
        "goal": "Move backward and forward through the jump list. · repetition 3 of 3",
        "code": [
          "setup({ theme = 'dark' })",
          "return setup",
          "-- last edit was above"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Move backward and forward through the jump list.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with Ctrl+o.",
        "Use only the keys introduced in Jump & Change History.",
        "Compose the command from: Ctrl+o, Ctrl+i."
      ],
      "success": "Jump Back and Forward produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Jump & Change History",
    "id": "change-list",
    "title": "Navigate Recent Changes",
    "eyebrow": "Jump & Change History",
    "summary": "g; visits older change positions and g, moves toward newer ones.",
    "detail": "g; visits older change positions and g, moves toward newer ones.",
    "keys": [
      "g;",
      "g,"
    ],
    "task": "Visit the previous and next change positions.",
    "sequence": "g;g,",
    "code": [
      "function start()",
      "  configure()",
      "  run()",
      "end",
      "return start"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Visit the previous and next change positions. · repetition 1 of 3",
        "code": [
          "function start()",
          "  configure()",
          "  run()",
          "end",
          "return start"
        ]
      },
      {
        "goal": "Visit the previous and next change positions. · repetition 2 of 3",
        "code": [
          "local first = 1",
          "",
          "local middle = 2",
          "",
          "local last = 3"
        ]
      },
      {
        "goal": "Visit the previous and next change positions. · repetition 3 of 3",
        "code": [
          "setup({ theme = 'dark' })",
          "return setup",
          "-- last edit was above"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Visit the previous and next change positions.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with g;.",
        "Use only the keys introduced in Jump & Change History.",
        "Compose the command from: g;, g,."
      ],
      "success": "Navigate Recent Changes produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Jump & Change History",
    "id": "matching-pair",
    "title": "Jump to a Matching Pair",
    "eyebrow": "Jump & Change History",
    "summary": "% jumps between matching brackets, parentheses, and braces.",
    "detail": "% jumps between matching brackets, parentheses, and braces.",
    "keys": [
      "%"
    ],
    "task": "Jump to the matching delimiter.",
    "sequence": "%",
    "code": [
      "function start()",
      "  configure()",
      "  run()",
      "end",
      "return start"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Jump to the matching delimiter. · repetition 1 of 3",
        "code": [
          "function start()",
          "  configure()",
          "  run()",
          "end",
          "return start"
        ]
      },
      {
        "goal": "Jump to the matching delimiter. · repetition 2 of 3",
        "code": [
          "local first = 1",
          "",
          "local middle = 2",
          "",
          "local last = 3"
        ]
      },
      {
        "goal": "Jump to the matching delimiter. · repetition 3 of 3",
        "code": [
          "setup({ theme = 'dark' })",
          "return setup",
          "-- last edit was above"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Jump to the matching delimiter.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with %.",
        "Use only the keys introduced in Jump & Change History.",
        "Compose the command from: %."
      ],
      "alternatives": [
        "%"
      ],
      "success": "Jump to a Matching Pair produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Jump & Change History",
    "id": "last-edit",
    "title": "Return to the Last Edit",
    "eyebrow": "Jump & Change History",
    "summary": "The dot mark stores the position of the most recent change.",
    "detail": "The dot mark stores the position of the most recent change.",
    "keys": [
      "`."
    ],
    "task": "Jump exactly to the latest edit position.",
    "sequence": "`.",
    "code": [
      "function start()",
      "  configure()",
      "  run()",
      "end",
      "return start"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Jump exactly to the latest edit position. · repetition 1 of 3",
        "code": [
          "function start()",
          "  configure()",
          "  run()",
          "end",
          "return start"
        ]
      },
      {
        "goal": "Jump exactly to the latest edit position. · repetition 2 of 3",
        "code": [
          "local first = 1",
          "",
          "local middle = 2",
          "",
          "local last = 3"
        ]
      },
      {
        "goal": "Jump exactly to the latest edit position. · repetition 3 of 3",
        "code": [
          "setup({ theme = 'dark' })",
          "return setup",
          "-- last edit was above"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Jump exactly to the latest edit position.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with `..",
        "Use only the keys introduced in Jump & Change History.",
        "Compose the command from: `.."
      ],
      "success": "Return to the Last Edit produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Jump & Change History",
    "id": "set-mark",
    "title": "Set a Mark",
    "eyebrow": "Jump & Change History",
    "summary": "ma stores the current position in mark a; lowercase marks belong to the current buffer.",
    "detail": "ma stores the current position in mark a; lowercase marks belong to the current buffer.",
    "keys": [
      "m",
      "a"
    ],
    "task": "Save the current position as mark a.",
    "sequence": "ma",
    "code": [
      "function start()",
      "  configure()",
      "  run()",
      "end",
      "return start"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Save the current position as mark a. · repetition 1 of 3",
        "code": [
          "function start()",
          "  configure()",
          "  run()",
          "end",
          "return start"
        ]
      },
      {
        "goal": "Save the current position as mark a. · repetition 2 of 3",
        "code": [
          "local first = 1",
          "",
          "local middle = 2",
          "",
          "local last = 3"
        ]
      },
      {
        "goal": "Save the current position as mark a. · repetition 3 of 3",
        "code": [
          "setup({ theme = 'dark' })",
          "return setup",
          "-- last edit was above"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Save the current position as mark a.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with m.",
        "Use only the keys introduced in Jump & Change History.",
        "Compose the command from: m, a."
      ],
      "success": "Set a Mark produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Jump & Change History",
    "id": "return-mark",
    "title": "Return to a Mark",
    "eyebrow": "Jump & Change History",
    "summary": "`a returns to the exact marked position; 'a returns to the marked line's first non-blank text.",
    "detail": "`a returns to the exact marked position; 'a returns to the marked line's first non-blank text.",
    "keys": [
      "`a",
      "'a"
    ],
    "task": "Set mark a, move away, then return to its exact position.",
    "sequence": "maG`a",
    "code": [
      "function start()",
      "  configure()",
      "  run()",
      "end",
      "return start"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Set mark a, move away, then return to its exact position. · repetition 1 of 3",
        "code": [
          "function start()",
          "  configure()",
          "  run()",
          "end",
          "return start"
        ]
      },
      {
        "goal": "Set mark a, move away, then return to its exact position. · repetition 2 of 3",
        "code": [
          "local first = 1",
          "",
          "local middle = 2",
          "",
          "local last = 3"
        ]
      },
      {
        "goal": "Set mark a, move away, then return to its exact position. · repetition 3 of 3",
        "code": [
          "setup({ theme = 'dark' })",
          "return setup",
          "-- last edit was above"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Set mark a, move away, then return to its exact position.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with `a.",
        "Use only the keys introduced in Jump & Change History.",
        "Compose the command from: `a, 'a."
      ],
      "success": "Return to a Mark produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Jump & Change History",
    "id": "jump-change-history-review",
    "title": "Jump & Change History Review",
    "eyebrow": "Jump & Change History",
    "summary": "Review every command introduced in Jump & Change History before moving to the next category.",
    "detail": "Review every command introduced in Jump & Change History before moving to the next category.",
    "keys": [
      "Ctrl+o",
      "Ctrl+i",
      "g;",
      "g,",
      "%",
      "`.",
      "m",
      "a",
      "`a",
      "'a"
    ],
    "task": "",
    "sequence": "<C-o><C-i>",
    "code": [
      "function start()",
      "  configure()",
      "  run()",
      "end",
      "return start"
    ],
    "tip": "Return to any command in Jump & Change History that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "Ctrl+o",
        "description": "Ctrl+o travels backward through jumps; Ctrl+i travels forward again.",
        "sequence": "<C-o><C-i>"
      },
      {
        "key": "Ctrl+i",
        "description": "Ctrl+o travels backward through jumps; Ctrl+i travels forward again.",
        "sequence": "<C-o><C-i>"
      },
      {
        "key": "g;",
        "description": "g; visits older change positions and g, moves toward newer ones.",
        "sequence": "g;g,"
      },
      {
        "key": "g,",
        "description": "g; visits older change positions and g, moves toward newer ones.",
        "sequence": "g;g,"
      },
      {
        "key": "%",
        "description": "% jumps between matching brackets, parentheses, and braces.",
        "sequence": "%"
      },
      {
        "key": "`.",
        "description": "The dot mark stores the position of the most recent change.",
        "sequence": "`."
      },
      {
        "key": "m",
        "description": "ma stores the current position in mark a; lowercase marks belong to the current buffer.",
        "sequence": "ma"
      },
      {
        "key": "a",
        "description": "ma stores the current position in mark a; lowercase marks belong to the current buffer.",
        "sequence": "ma"
      },
      {
        "key": "`a",
        "description": "`a returns to the exact marked position; 'a returns to the marked line's first non-blank text.",
        "sequence": "maG`a"
      },
      {
        "key": "'a",
        "description": "`a returns to the exact marked position; 'a returns to the marked line's first non-blank text.",
        "sequence": "maG`a"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
