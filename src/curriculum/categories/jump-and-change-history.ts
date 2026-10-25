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
      "function start() {",
      "  configure();",
      "  run();",
      "}",
      "console.log(start);"
    ],
    "tip": "The practice buffer seeds jump positions. In your editor, use jumps such as gg and G before navigating with Ctrl+o and Ctrl+i.",
    "drills": [
      {
        "goal": "Move backward and forward through the jump list. · repetition 1 of 3",
        "code": [
          "function start() {",
          "  configure();",
          "  run();",
          "}",
          "console.log(start);"
        ]
      },
      {
        "goal": "Move backward and forward through the jump list. · repetition 2 of 3",
        "code": [
          "const first = 1;",
          "",
          "const middle = 2;",
          "",
          "const last = 3;"
        ]
      },
      {
        "goal": "Move backward and forward through the jump list. · repetition 3 of 3",
        "code": [
          "setup({ theme: 'dark' });",
          "console.log(setup);",
          "// last edit was above"
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
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: Ctrl+o, Ctrl+i."
      ],
      "success": "Jump Back and Forward produced the requested buffer and cursor state."
    },
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
      }
    ]
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
    "task": "Visit the newest change, move to the older change, then return to the newer change.",
    "sequence": "g;g;g,",
    "code": [
      "function start() {",
      "  configure();",
      "  run();",
      "}",
      "console.log(start);"
    ],
    "tip": "The practice buffer seeds changes on the first and last lines. g; starts at the newest change before moving through older positions.",
    "drills": [
      {
        "goal": "Visit the newest change, move to the older change, then return to the newer change.",
        "code": [
          "function start() {",
          "  configure();",
          "  run();",
          "}",
          "console.log(start);"
        ]
      },
      {
        "goal": "Visit the newest change, move to the older change, then return to the newer change.",
        "code": [
          "const first = 1;",
          "",
          "const middle = 2;",
          "",
          "const last = 3;"
        ]
      },
      {
        "goal": "Visit the newest change, move to the older change, then return to the newer change.",
        "code": [
          "setup({ theme: 'dark' });",
          "console.log(setup);",
          "// last edit was above"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Visit the newest change, move to the older change, then return to the newer change.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: g;, g,."
      ],
      "success": "Navigate Recent Changes produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "g;",
        "description": "Visit the newest and then the previous change position.",
        "sequence": "g;g;"
      },
      {
        "key": "g,",
        "description": "Visit two change positions backward, then move one position forward.",
        "sequence": "g;g;g,"
      }
    ]
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
      "function start() {",
      "  configure(options);",
      "}"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Jump to the matching delimiter. · repetition 1 of 3",
        "code": [
          "function start() {",
          "  configure(options);",
          "}"
        ]
      },
      {
        "goal": "Jump to the matching delimiter. · repetition 2 of 3",
        "code": [
          "const first = 1;",
          "const middle = { enabled: true };",
          "console.log(middle);"
        ]
      },
      {
        "goal": "Jump to the matching delimiter. · repetition 3 of 3",
        "code": [
          "const settings = {};",
          "setup(settings);",
          "console.log(settings);"
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
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: %."
      ],
      "alternatives": [
        "%"
      ],
      "success": "Jump to a Matching Pair produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "%",
        "description": "% jumps between matching brackets, parentheses, and braces.",
        "sequence": "%"
      }
    ]
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
      "function start() {",
      "  configure();",
      "  run();",
      "}",
      "console.log(start);"
    ],
    "tip": "The practice buffer seeds a previous change at the beginning of the first line. The dot mark is unavailable before a real edit.",
    "drills": [
      {
        "goal": "Jump exactly to the latest edit position. · repetition 1 of 3",
        "code": [
          "function start() {",
          "  configure();",
          "  run();",
          "}",
          "console.log(start);"
        ]
      },
      {
        "goal": "Jump exactly to the latest edit position. · repetition 2 of 3",
        "code": [
          "const first = 1;",
          "",
          "const middle = 2;",
          "",
          "const last = 3;"
        ]
      },
      {
        "goal": "Jump exactly to the latest edit position. · repetition 3 of 3",
        "code": [
          "setup({ theme: 'dark' });",
          "console.log(setup);",
          "// last edit was above"
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
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: `.."
      ],
      "success": "Return to the Last Edit produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "`.",
        "description": "The dot mark stores the position of the most recent change.",
        "sequence": "`."
      }
    ]
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
      "function start() {",
      "  configure();",
      "  run();",
      "}",
      "console.log(start);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Save the current position as mark a. · repetition 1 of 3",
        "code": [
          "function start() {",
          "  configure();",
          "  run();",
          "}",
          "console.log(start);"
        ]
      },
      {
        "goal": "Save the current position as mark a. · repetition 2 of 3",
        "code": [
          "const first = 1;",
          "",
          "const middle = 2;",
          "",
          "const last = 3;"
        ]
      },
      {
        "goal": "Save the current position as mark a. · repetition 3 of 3",
        "code": [
          "setup({ theme: 'dark' });",
          "console.log(setup);",
          "// last edit was above"
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
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: m, a."
      ],
      "success": "Set a Mark produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "m",
        "description": "ma stores the current position in mark a; lowercase marks belong to the current buffer.",
        "sequence": "ma"
      },
      {
        "key": "a",
        "description": "ma stores the current position in mark a; lowercase marks belong to the current buffer.",
        "sequence": "ma"
      }
    ]
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
      "function start() {",
      "  configure();",
      "  run();",
      "}",
      "console.log(start);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Set mark a, move away, then return to its exact position. · repetition 1 of 3",
        "code": [
          "function start() {",
          "  configure();",
          "  run();",
          "}",
          "console.log(start);"
        ]
      },
      {
        "goal": "Set mark a, move away, then return to its exact position. · repetition 2 of 3",
        "code": [
          "const first = 1;",
          "",
          "const middle = 2;",
          "",
          "const last = 3;"
        ]
      },
      {
        "goal": "Set mark a, move away, then return to its exact position. · repetition 3 of 3",
        "code": [
          "setup({ theme: 'dark' });",
          "console.log(setup);",
          "// last edit was above"
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
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: `a, 'a."
      ],
      "success": "Return to a Mark produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "`a",
        "description": "Set mark a, move away, and return to its exact column.",
        "sequence": "maG`a"
      },
      {
        "key": "'a",
        "description": "Set mark a, move away, and return to the first non-blank character of its line.",
        "sequence": "maG'a"
      }
    ]
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
      "function start() {",
      "  configure();",
      "  run();",
      "}",
      "console.log(start);"
    ],
    "tip": "Return to any command in Jump & Change History that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "Ctrl+o",
        "description": "Create jumps to the first and last lines, then move backward and forward through them.",
        "sequence": "ggG<C-o><C-i>",
        "code": [
          "function start() {",
          "  configure();",
          "  run();",
          "}",
          "console.log(start);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "Ctrl+i",
        "description": "Create jumps to the first and last lines, then move backward and forward through them.",
        "sequence": "ggG<C-o><C-i>",
        "code": [
          "function start() {",
          "  configure();",
          "  run();",
          "}",
          "console.log(start);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "g;",
        "description": "Visit the newest and then the previous change position.",
        "sequence": "g;g;",
        "code": [
          "function start() {",
          "  configure();",
          "  run();",
          "}",
          "console.log(start);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "g,",
        "description": "Visit two change positions backward, then move one position forward.",
        "sequence": "g;g;g,",
        "code": [
          "function start() {",
          "  configure();",
          "  run();",
          "}",
          "console.log(start);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "%",
        "description": "% jumps between matching brackets, parentheses, and braces.",
        "sequence": "%",
        "code": [
          "function start() {",
          "  configure(options);",
          "}"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "`.",
        "description": "The dot mark stores the position of the most recent change.",
        "sequence": "`.",
        "code": [
          "function start() {",
          "  configure();",
          "  run();",
          "}",
          "console.log(start);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "m",
        "description": "ma stores the current position in mark a; lowercase marks belong to the current buffer.",
        "sequence": "ma",
        "code": [
          "function start() {",
          "  configure();",
          "  run();",
          "}",
          "console.log(start);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "a",
        "description": "ma stores the current position in mark a; lowercase marks belong to the current buffer.",
        "sequence": "ma",
        "code": [
          "function start() {",
          "  configure();",
          "  run();",
          "}",
          "console.log(start);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "`a",
        "description": "Set mark a, move away, and return to its exact column.",
        "sequence": "maG`a",
        "code": [
          "function start() {",
          "  configure();",
          "  run();",
          "}",
          "console.log(start);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "'a",
        "description": "Set mark a, move away, and return to the first non-blank character of its line.",
        "sequence": "maG'a",
        "code": [
          "function start() {",
          "  configure();",
          "  run();",
          "}",
          "console.log(start);"
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
