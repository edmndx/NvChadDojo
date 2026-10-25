import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Advanced Visual Block",
    "id": "block-insert",
    "title": "Insert Across Lines",
    "eyebrow": "Advanced Visual Block",
    "summary": "Visual Block plus I inserts at the left edge of the selected block on each selected line.",
    "detail": "Start the block in column zero to add a line prefix; at another column, I inserts at that block column.",
    "keys": [
      "Ctrl+v",
      "I",
      "Esc"
    ],
    "task": "Select two rows and insert // at the start of the block.",
    "sequence": "<C-v>jI//<Space><Esc>",
    "code": [
      "const alpha = true;",
      "const bravo = true;",
      "const gamma = true;"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Select two rows and insert // at the start of the block. · repetition 1 of 3",
        "code": [
          "const alpha = true;",
          "const bravo = true;",
          "const gamma = true;"
        ]
      },
      {
        "goal": "Select two rows and insert // at the start of the block. · repetition 2 of 3",
        "code": [
          "const first = 'one';",
          "const other = 'two';",
          "const third = 'six';"
        ]
      },
      {
        "goal": "Select two rows and insert // at the start of the block. · repetition 3 of 3",
        "code": [
          "const first = 10;",
          "const other = 20;",
          "const third = 30;"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Select two rows, press I, type // followed by a space, then press Esc.",
      "replacement": "// ",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: Ctrl+v, I, Esc."
      ],
      "success": "Insert Across Lines produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "Ctrl+v",
        "description": "Visual Block plus I inserts at the left edge of the selected block on each selected line.",
        "sequence": "<C-v>jI//<Space><Esc>"
      },
      {
        "key": "I",
        "description": "Visual Block plus I inserts at the left edge of the selected block on each selected line.",
        "sequence": "<C-v>jI//<Space><Esc>"
      },
      {
        "key": "Esc",
        "description": "Visual Block plus I inserts at the left edge of the selected block on each selected line.",
        "sequence": "<C-v>jI//<Space><Esc>"
      }
    ]
  },
  {
    "group": "Advanced Visual Block",
    "id": "block-append",
    "title": "Append Across Lines",
    "eyebrow": "Advanced Visual Block",
    "summary": "Visual Block plus A appends just after the right edge of the selected block on each selected row.",
    "detail": "A one-column block inserts after that column. Extend the block with $ first when you want to append at each line end.",
    "keys": [
      "Ctrl+v",
      "A",
      "Esc"
    ],
    "task": "Select two rows and append // ready at each line end.",
    "sequence": "<C-v>j$A<Space>//<Space>ready<Esc>",
    "code": [
      "const alpha = true;",
      "const bravo = true;",
      "const gamma = true;"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Select two rows and append // ready at each line end. · repetition 1 of 3",
        "code": [
          "const alpha = true;",
          "const bravo = true;",
          "const gamma = true;"
        ]
      },
      {
        "goal": "Select two rows and append // ready at each line end. · repetition 2 of 3",
        "code": [
          "const first = 'one';",
          "const other = 'two';",
          "const third = 'six';"
        ]
      },
      {
        "goal": "Select two rows and append // ready at each line end. · repetition 3 of 3",
        "code": [
          "const first = 10;",
          "const other = 20;",
          "const third = 30;"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Select two rows, extend the block with $, press A, type a space and // ready, then press Esc.",
      "replacement": " // ready",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: Ctrl+v, A, Esc."
      ],
      "success": "Append Across Lines produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "Ctrl+v",
        "description": "Visual Block plus A appends just after the right edge of the selected block on each selected row.",
        "sequence": "<C-v>j$A<Space>//<Space>ready<Esc>"
      },
      {
        "key": "A",
        "description": "Visual Block plus A appends just after the right edge of the selected block on each selected row.",
        "sequence": "<C-v>j$A<Space>//<Space>ready<Esc>"
      },
      {
        "key": "Esc",
        "description": "Visual Block plus A appends just after the right edge of the selected block on each selected row.",
        "sequence": "<C-v>j$A<Space>//<Space>ready<Esc>"
      }
    ]
  },
  {
    "group": "Advanced Visual Block",
    "id": "block-replace",
    "title": "Replace a Block",
    "eyebrow": "Advanced Visual Block",
    "summary": "Visual Block plus r replaces every selected character with one chosen character.",
    "detail": "Visual Block plus r replaces every selected character with one chosen character.",
    "keys": [
      "Ctrl+v",
      "r"
    ],
    "task": "Select the first character of two variable names and replace each with an underscore.",
    "sequence": "<C-v>jr_",
    "code": [
      "const alpha = true;",
      "const bravo = true;",
      "const gamma = true;"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Select the first character of two variable names and replace each with an underscore. · repetition 1 of 3",
        "code": [
          "const alpha = true;",
          "const bravo = true;",
          "const gamma = true;"
        ]
      },
      {
        "goal": "Select the first character of two variable names and replace each with an underscore. · repetition 2 of 3",
        "code": [
          "const first = 'one';",
          "const other = 'two';",
          "const third = 'six';"
        ]
      },
      {
        "goal": "Select the first character of two variable names and replace each with an underscore. · repetition 3 of 3",
        "code": [
          "const first = 10;",
          "const other = 20;",
          "const third = 30;"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Select the first character of two variable names and replace each with an underscore.",
      "cursor": [
        1,
        6
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: Ctrl+v, r."
      ],
      "success": "Replace a Block produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "Ctrl+v",
        "description": "Visual Block plus r replaces every selected character with one chosen character.",
        "sequence": "<C-v>jr_"
      },
      {
        "key": "r",
        "description": "Visual Block plus r replaces every selected character with one chosen character.",
        "sequence": "<C-v>jr_"
      }
    ]
  },
  {
    "group": "Advanced Visual Block",
    "id": "advanced-visual-block-review",
    "title": "Advanced Visual Block Review",
    "eyebrow": "Advanced Visual Block",
    "summary": "Review every command introduced in Advanced Visual Block before moving to the next category.",
    "detail": "Review every command introduced in Advanced Visual Block before moving to the next category.",
    "keys": [
      "Ctrl+v",
      "I",
      "Esc",
      "A",
      "r"
    ],
    "task": "",
    "sequence": "<C-v>jI//<Space><Esc>",
    "code": [
      "const alpha = true;",
      "const bravo = true;",
      "const gamma = true;"
    ],
    "tip": "Return to any command in Advanced Visual Block that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "Ctrl+v",
        "description": "Visual Block plus I inserts at the left edge of the selected block on each selected line.",
        "sequence": "<C-v>jI//<Space><Esc>",
        "code": [
          "const alpha = true;",
          "const bravo = true;",
          "const gamma = true;"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "I",
        "description": "Visual Block plus I inserts at the left edge of the selected block on each selected line.",
        "sequence": "<C-v>jI//<Space><Esc>",
        "code": [
          "const alpha = true;",
          "const bravo = true;",
          "const gamma = true;"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "Esc",
        "description": "Visual Block plus I inserts at the left edge of the selected block on each selected line.",
        "sequence": "<C-v>jI//<Space><Esc>",
        "code": [
          "const alpha = true;",
          "const bravo = true;",
          "const gamma = true;"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "A",
        "description": "Visual Block plus A appends just after the right edge of the selected block on each selected row.",
        "sequence": "<C-v>j$A<Space>//<Space>ready<Esc>",
        "code": [
          "const alpha = true;",
          "const bravo = true;",
          "const gamma = true;"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "r",
        "description": "Visual Block plus r replaces every selected character with one chosen character.",
        "sequence": "<C-v>jr_",
        "code": [
          "const alpha = true;",
          "const bravo = true;",
          "const gamma = true;"
        ],
        "cursor": [
          1,
          6
        ]
      }
    ],
    "cursor": [
      1,
      0
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
