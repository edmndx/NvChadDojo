import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Visual Editing",
    "id": "visual-mode-operators",
    "title": "Visual Mode Operators",
    "eyebrow": "Visual Editing",
    "summary": "A visual selection can be deleted, changed, or yanked with d, c, and y.",
    "detail": "A visual selection can be deleted, changed, or yanked with d, c, and y.",
    "keys": [
      "d",
      "c",
      "y"
    ],
    "task": "Select exactly the current word and delete it.",
    "sequence": "viwd",
    "code": [
      "settings.lineNumbers = true;",
      "settings.relativeNumbers = true;",
      "settings.wrap = false;"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Select exactly the current word and delete it. · repetition 1 of 3",
        "code": [
          "settings.lineNumbers = true;",
          "settings.relativeNumbers = true;",
          "settings.wrap = false;"
        ]
      },
      {
        "goal": "Select exactly the current word and delete it. · repetition 2 of 3",
        "code": [
          "const one = 1;",
          "const two = 2;",
          "const three = 3;"
        ]
      },
      {
        "goal": "Select exactly the current word and delete it. · repetition 3 of 3",
        "code": [
          "map('n', 'j', 'gj');",
          "map('n', 'k', 'gk');",
          "console.log(map);"
        ]
      }
    ],
    "commonMistake": "Enter Visual mode before applying the motion or operator. Escape cancels a selection.",
    "challenge": {
      "instruction": "Select exactly the current word with viw, then delete it.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: d, c, y."
      ],
      "success": "Visual Mode Operators produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "d",
        "description": "Select the current word and delete it.",
        "sequence": "viwd"
      },
      {
        "key": "c",
        "description": "Select the current word and change it to updated.",
        "sequence": "viwcupdated<Esc>"
      },
      {
        "key": "y",
        "description": "Select the current word and yank it.",
        "sequence": "viwy"
      }
    ]
  },
  {
    "group": "Visual Editing",
    "id": "switch-selection-ends",
    "title": "Switch Selection Ends",
    "eyebrow": "Visual Editing",
    "summary": "While selecting, o moves the cursor to the opposite end of the selection.",
    "detail": "While selecting, o moves the cursor to the opposite end of the selection.",
    "keys": [
      "v",
      "o"
    ],
    "task": "Select the current word, then switch active ends.",
    "sequence": "viwo",
    "code": [
      "settings.lineNumbers = true;",
      "settings.relativeNumbers = true;",
      "settings.wrap = false;"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Select the current word, then switch active ends. · repetition 1 of 3",
        "code": [
          "settings.lineNumbers = true;",
          "settings.relativeNumbers = true;",
          "settings.wrap = false;"
        ]
      },
      {
        "goal": "Select the current word, then switch active ends. · repetition 2 of 3",
        "code": [
          "const one = 1;",
          "const two = 2;",
          "const three = 3;"
        ]
      },
      {
        "goal": "Select the current word, then switch active ends. · repetition 3 of 3",
        "code": [
          "map('n', 'j', 'gj');",
          "map('n', 'k', 'gk');",
          "console.log(map);"
        ]
      }
    ],
    "commonMistake": "Enter Visual mode before applying the motion or operator. Escape cancels a selection.",
    "challenge": {
      "instruction": "Select the current word with viw, then switch active ends with o.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: v, o."
      ],
      "success": "Switch Selection Ends produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "v",
        "description": "Start a Visual selection of the current word.",
        "sequence": "viw"
      },
      {
        "key": "o",
        "description": "Switch to the other end of a selected word.",
        "sequence": "viwo"
      }
    ]
  },
  {
    "group": "Visual Editing",
    "id": "visual-line-mode",
    "title": "Visual Line Mode",
    "eyebrow": "Visual Editing",
    "summary": "V selects complete lines; Escape cancels and returns to Normal mode.",
    "detail": "V selects complete lines; Escape cancels and returns to Normal mode.",
    "keys": [
      "V",
      "Esc"
    ],
    "task": "Practice visual line mode.",
    "sequence": "V<Esc>",
    "code": [
      "settings.lineNumbers = true;",
      "settings.relativeNumbers = true;",
      "settings.wrap = false;"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice visual line mode. · repetition 1 of 3",
        "code": [
          "settings.lineNumbers = true;",
          "settings.relativeNumbers = true;",
          "settings.wrap = false;"
        ]
      },
      {
        "goal": "Practice visual line mode. · repetition 2 of 3",
        "code": [
          "const one = 1;",
          "const two = 2;",
          "const three = 3;"
        ]
      },
      {
        "goal": "Practice visual line mode. · repetition 3 of 3",
        "code": [
          "map('n', 'j', 'gj');",
          "map('n', 'k', 'gk');",
          "console.log(map);"
        ]
      }
    ],
    "commonMistake": "Enter Visual mode before applying the motion or operator. Escape cancels a selection.",
    "challenge": {
      "instruction": "Practice visual line mode.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: V, Esc."
      ],
      "success": "Visual Line Mode produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "V",
        "description": "V selects complete lines; Escape cancels and returns to Normal mode.",
        "sequence": "V<Esc>"
      },
      {
        "key": "Esc",
        "description": "V selects complete lines; Escape cancels and returns to Normal mode.",
        "sequence": "V<Esc>"
      }
    ]
  },
  {
    "group": "Visual Editing",
    "id": "switch-visual-line-ends",
    "title": "Switch Visual Line Ends",
    "eyebrow": "Visual Editing",
    "summary": "In Visual Line mode, o switches which end of the line selection is active.",
    "detail": "In Visual Line mode, o switches which end of the line selection is active.",
    "keys": [
      "V",
      "o"
    ],
    "task": "Select two lines, then switch ends.",
    "sequence": "Vjo",
    "code": [
      "settings.lineNumbers = true;",
      "settings.relativeNumbers = true;",
      "settings.wrap = false;"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Select two lines, then switch ends. · repetition 1 of 3",
        "code": [
          "settings.lineNumbers = true;",
          "settings.relativeNumbers = true;",
          "settings.wrap = false;"
        ]
      },
      {
        "goal": "Select two lines, then switch ends. · repetition 2 of 3",
        "code": [
          "const one = 1;",
          "const two = 2;",
          "const three = 3;"
        ]
      },
      {
        "goal": "Select two lines, then switch ends. · repetition 3 of 3",
        "code": [
          "map('n', 'j', 'gj');",
          "map('n', 'k', 'gk');",
          "console.log(map);"
        ]
      }
    ],
    "commonMistake": "Enter Visual mode before applying the motion or operator. Escape cancels a selection.",
    "challenge": {
      "instruction": "Select two lines, then switch ends.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: V, o."
      ],
      "success": "Switch Visual Line Ends produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "V",
        "description": "Select the current line and the next line.",
        "sequence": "Vj"
      },
      {
        "key": "o",
        "description": "Switch the active end of a two-line selection.",
        "sequence": "Vjo"
      }
    ]
  },
  {
    "group": "Visual Editing",
    "id": "visual-line-operators",
    "title": "Visual Line Operators",
    "eyebrow": "Visual Editing",
    "summary": "Linewise selections work naturally with delete and yank operators.",
    "detail": "Linewise selections work naturally with delete and yank operators.",
    "keys": [
      "V",
      "d",
      "y"
    ],
    "task": "Select two complete lines and yank them.",
    "sequence": "Vjy",
    "code": [
      "settings.lineNumbers = true;",
      "settings.relativeNumbers = true;",
      "settings.wrap = false;"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Select two complete lines and yank them. · repetition 1 of 3",
        "code": [
          "settings.lineNumbers = true;",
          "settings.relativeNumbers = true;",
          "settings.wrap = false;"
        ]
      },
      {
        "goal": "Select two complete lines and yank them. · repetition 2 of 3",
        "code": [
          "const one = 1;",
          "const two = 2;",
          "const three = 3;"
        ]
      },
      {
        "goal": "Select two complete lines and yank them. · repetition 3 of 3",
        "code": [
          "map('n', 'j', 'gj');",
          "map('n', 'k', 'gk');",
          "console.log(map);"
        ]
      }
    ],
    "commonMistake": "Enter Visual mode before applying the motion or operator. Escape cancels a selection.",
    "challenge": {
      "instruction": "Select two complete lines and yank them.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: V, d, y."
      ],
      "success": "Visual Line Operators produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "V",
        "description": "Select two complete lines.",
        "sequence": "Vj"
      },
      {
        "key": "d",
        "description": "Delete two selected lines.",
        "sequence": "Vjd"
      },
      {
        "key": "y",
        "description": "Yank two selected lines.",
        "sequence": "Vjy"
      }
    ]
  },
  {
    "group": "Visual Editing",
    "id": "visual-editing-review",
    "title": "Visual Editing Review",
    "eyebrow": "Visual Editing",
    "summary": "Review every command introduced in Visual Editing before moving to the next category.",
    "detail": "Review every command introduced in Visual Editing before moving to the next category.",
    "keys": [
      "d",
      "c",
      "y",
      "v",
      "o",
      "V",
      "Esc",
      "Vjo",
      "Vjd",
      "Vjy"
    ],
    "task": "",
    "sequence": "viwd",
    "code": [
      "settings.lineNumbers = true;",
      "settings.relativeNumbers = true;",
      "settings.wrap = false;"
    ],
    "tip": "Return to any command in Visual Editing that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "d",
        "description": "Select the current word and delete it.",
        "sequence": "viwd",
        "code": [
          "settings.lineNumbers = true;",
          "settings.relativeNumbers = true;",
          "settings.wrap = false;"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "c",
        "description": "Select the current word and change it to updated.",
        "sequence": "viwcupdated<Esc>",
        "code": [
          "settings.lineNumbers = true;",
          "settings.relativeNumbers = true;",
          "settings.wrap = false;"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "y",
        "description": "Select the current word and yank it.",
        "sequence": "viwy",
        "code": [
          "settings.lineNumbers = true;",
          "settings.relativeNumbers = true;",
          "settings.wrap = false;"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "v",
        "description": "Start a Visual selection of the current word.",
        "sequence": "viw",
        "code": [
          "settings.lineNumbers = true;",
          "settings.relativeNumbers = true;",
          "settings.wrap = false;"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "o",
        "description": "Switch to the other end of a selected word.",
        "sequence": "viwo",
        "code": [
          "settings.lineNumbers = true;",
          "settings.relativeNumbers = true;",
          "settings.wrap = false;"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "V",
        "description": "V selects complete lines; Escape cancels and returns to Normal mode.",
        "sequence": "V<Esc>",
        "code": [
          "settings.lineNumbers = true;",
          "settings.relativeNumbers = true;",
          "settings.wrap = false;"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "Esc",
        "description": "V selects complete lines; Escape cancels and returns to Normal mode.",
        "sequence": "V<Esc>",
        "code": [
          "settings.lineNumbers = true;",
          "settings.relativeNumbers = true;",
          "settings.wrap = false;"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "Vjo",
        "description": "Switch the active end of a two-line selection.",
        "sequence": "Vjo",
        "code": [
          "settings.lineNumbers = true;",
          "settings.relativeNumbers = true;",
          "settings.wrap = false;"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "Vjd",
        "description": "Delete two selected lines.",
        "sequence": "Vjd",
        "code": [
          "settings.lineNumbers = true;",
          "settings.relativeNumbers = true;",
          "settings.wrap = false;"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "Vjy",
        "description": "Yank two selected lines.",
        "sequence": "Vjy",
        "code": [
          "settings.lineNumbers = true;",
          "settings.relativeNumbers = true;",
          "settings.wrap = false;"
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
