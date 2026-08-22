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
    "task": "Select through a word and delete it.",
    "sequence": "vwd",
    "code": [
      "vim.o.number = true",
      "vim.o.relativenumber = true",
      "vim.o.wrap = false"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Select through a word and delete it. · repetition 1 of 3",
        "code": [
          "vim.o.number = true",
          "vim.o.relativenumber = true",
          "vim.o.wrap = false"
        ]
      },
      {
        "goal": "Select through a word and delete it. · repetition 2 of 3",
        "code": [
          "local one = 1",
          "local two = 2",
          "local three = 3"
        ]
      },
      {
        "goal": "Select through a word and delete it. · repetition 3 of 3",
        "code": [
          "map('n', 'j', 'gj')",
          "map('n', 'k', 'gk')",
          "return map"
        ]
      }
    ],
    "commonMistake": "Enter Visual mode before applying the motion or operator. Escape cancels a selection.",
    "challenge": {
      "instruction": "Select through a word and delete it.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with d.",
        "Use only the keys introduced in Visual Editing.",
        "Compose the command from: d, c, y."
      ],
      "success": "Visual Mode Operators produced the requested buffer and cursor state."
    }
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
    "task": "Select through a word, then switch ends.",
    "sequence": "vwo",
    "code": [
      "vim.o.number = true",
      "vim.o.relativenumber = true",
      "vim.o.wrap = false"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Select through a word, then switch ends. · repetition 1 of 3",
        "code": [
          "vim.o.number = true",
          "vim.o.relativenumber = true",
          "vim.o.wrap = false"
        ]
      },
      {
        "goal": "Select through a word, then switch ends. · repetition 2 of 3",
        "code": [
          "local one = 1",
          "local two = 2",
          "local three = 3"
        ]
      },
      {
        "goal": "Select through a word, then switch ends. · repetition 3 of 3",
        "code": [
          "map('n', 'j', 'gj')",
          "map('n', 'k', 'gk')",
          "return map"
        ]
      }
    ],
    "commonMistake": "Enter Visual mode before applying the motion or operator. Escape cancels a selection.",
    "challenge": {
      "instruction": "Select through a word, then switch ends.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with v.",
        "Use only the keys introduced in Visual Editing.",
        "Compose the command from: v, o."
      ],
      "success": "Switch Selection Ends produced the requested buffer and cursor state."
    }
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
      "vim.o.number = true",
      "vim.o.relativenumber = true",
      "vim.o.wrap = false"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice visual line mode. · repetition 1 of 3",
        "code": [
          "vim.o.number = true",
          "vim.o.relativenumber = true",
          "vim.o.wrap = false"
        ]
      },
      {
        "goal": "Practice visual line mode. · repetition 2 of 3",
        "code": [
          "local one = 1",
          "local two = 2",
          "local three = 3"
        ]
      },
      {
        "goal": "Practice visual line mode. · repetition 3 of 3",
        "code": [
          "map('n', 'j', 'gj')",
          "map('n', 'k', 'gk')",
          "return map"
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
        "Begin with V.",
        "Use only the keys introduced in Visual Editing.",
        "Compose the command from: V, Esc."
      ],
      "success": "Visual Line Mode produced the requested buffer and cursor state."
    }
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
      "vim.o.number = true",
      "vim.o.relativenumber = true",
      "vim.o.wrap = false"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Select two lines, then switch ends. · repetition 1 of 3",
        "code": [
          "vim.o.number = true",
          "vim.o.relativenumber = true",
          "vim.o.wrap = false"
        ]
      },
      {
        "goal": "Select two lines, then switch ends. · repetition 2 of 3",
        "code": [
          "local one = 1",
          "local two = 2",
          "local three = 3"
        ]
      },
      {
        "goal": "Select two lines, then switch ends. · repetition 3 of 3",
        "code": [
          "map('n', 'j', 'gj')",
          "map('n', 'k', 'gk')",
          "return map"
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
        "Begin with V.",
        "Use only the keys introduced in Visual Editing.",
        "Compose the command from: V, o."
      ],
      "success": "Switch Visual Line Ends produced the requested buffer and cursor state."
    }
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
      "vim.o.number = true",
      "vim.o.relativenumber = true",
      "vim.o.wrap = false"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Select two complete lines and yank them. · repetition 1 of 3",
        "code": [
          "vim.o.number = true",
          "vim.o.relativenumber = true",
          "vim.o.wrap = false"
        ]
      },
      {
        "goal": "Select two complete lines and yank them. · repetition 2 of 3",
        "code": [
          "local one = 1",
          "local two = 2",
          "local three = 3"
        ]
      },
      {
        "goal": "Select two complete lines and yank them. · repetition 3 of 3",
        "code": [
          "map('n', 'j', 'gj')",
          "map('n', 'k', 'gk')",
          "return map"
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
        "Begin with V.",
        "Use only the keys introduced in Visual Editing.",
        "Compose the command from: V, d, y."
      ],
      "success": "Visual Line Operators produced the requested buffer and cursor state."
    }
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
      "Esc"
    ],
    "task": "",
    "sequence": "vwd",
    "code": [
      "vim.o.number = true",
      "vim.o.relativenumber = true",
      "vim.o.wrap = false"
    ],
    "tip": "Return to any command in Visual Editing that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "d",
        "description": "A visual selection can be deleted, changed, or yanked with d, c, and y.",
        "sequence": "vwd"
      },
      {
        "key": "c",
        "description": "A visual selection can be deleted, changed, or yanked with d, c, and y.",
        "sequence": "vwd"
      },
      {
        "key": "y",
        "description": "A visual selection can be deleted, changed, or yanked with d, c, and y.",
        "sequence": "vwd"
      },
      {
        "key": "v",
        "description": "While selecting, o moves the cursor to the opposite end of the selection.",
        "sequence": "vwo"
      },
      {
        "key": "o",
        "description": "While selecting, o moves the cursor to the opposite end of the selection.",
        "sequence": "vwo"
      },
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
  }
] satisfies readonly Lesson[];

export default lessons;
