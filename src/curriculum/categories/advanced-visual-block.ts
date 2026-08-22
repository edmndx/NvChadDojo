import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Advanced Visual Block",
    "id": "block-insert",
    "title": "Insert Across Lines",
    "eyebrow": "Advanced Visual Block",
    "summary": "Visual Block plus I inserts the same prefix at the start of every selected line.",
    "detail": "Visual Block plus I inserts the same prefix at the start of every selected line.",
    "keys": [
      "Ctrl+v",
      "I",
      "Esc"
    ],
    "task": "Select two rows and insert at the start of the block.",
    "sequence": "<C-v>jI<Esc>",
    "code": [
      "alpha = true",
      "beta = true",
      "gamma = true"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Select two rows and insert at the start of the block. · repetition 1 of 3",
        "code": [
          "alpha = true",
          "beta = true",
          "gamma = true"
        ]
      },
      {
        "goal": "Select two rows and insert at the start of the block. · repetition 2 of 3",
        "code": [
          "'one'",
          "'two'",
          "'three'"
        ]
      },
      {
        "goal": "Select two rows and insert at the start of the block. · repetition 3 of 3",
        "code": [
          "TODO first",
          "TODO second",
          "TODO third"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Select two rows and insert at the start of the block.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with Ctrl+v.",
        "Use only the keys introduced in Advanced Visual Block.",
        "Compose the command from: Ctrl+v, I, Esc."
      ],
      "success": "Insert Across Lines produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Advanced Visual Block",
    "id": "block-append",
    "title": "Append Across Lines",
    "eyebrow": "Advanced Visual Block",
    "summary": "Visual Block plus A appends the same text to each selected row.",
    "detail": "Visual Block plus A appends the same text to each selected row.",
    "keys": [
      "Ctrl+v",
      "A",
      "Esc"
    ],
    "task": "Select two rows and append to the block.",
    "sequence": "<C-v>jA<Esc>",
    "code": [
      "alpha = true",
      "beta = true",
      "gamma = true"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Select two rows and append to the block. · repetition 1 of 3",
        "code": [
          "alpha = true",
          "beta = true",
          "gamma = true"
        ]
      },
      {
        "goal": "Select two rows and append to the block. · repetition 2 of 3",
        "code": [
          "'one'",
          "'two'",
          "'three'"
        ]
      },
      {
        "goal": "Select two rows and append to the block. · repetition 3 of 3",
        "code": [
          "TODO first",
          "TODO second",
          "TODO third"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Select two rows and append to the block.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with Ctrl+v.",
        "Use only the keys introduced in Advanced Visual Block.",
        "Compose the command from: Ctrl+v, A, Esc."
      ],
      "success": "Append Across Lines produced the requested buffer and cursor state."
    }
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
    "task": "Select a block and replace it with dashes.",
    "sequence": "<C-v>jr-",
    "code": [
      "alpha = true",
      "beta = true",
      "gamma = true"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Select a block and replace it with dashes. · repetition 1 of 3",
        "code": [
          "alpha = true",
          "beta = true",
          "gamma = true"
        ]
      },
      {
        "goal": "Select a block and replace it with dashes. · repetition 2 of 3",
        "code": [
          "'one'",
          "'two'",
          "'three'"
        ]
      },
      {
        "goal": "Select a block and replace it with dashes. · repetition 3 of 3",
        "code": [
          "TODO first",
          "TODO second",
          "TODO third"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Select a block and replace it with dashes.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with Ctrl+v.",
        "Use only the keys introduced in Advanced Visual Block.",
        "Compose the command from: Ctrl+v, r."
      ],
      "success": "Replace a Block produced the requested buffer and cursor state."
    }
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
    "sequence": "<C-v>jI<Esc>",
    "code": [
      "alpha = true",
      "beta = true",
      "gamma = true"
    ],
    "tip": "Return to any command in Advanced Visual Block that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "Ctrl+v",
        "description": "Visual Block plus I inserts the same prefix at the start of every selected line.",
        "sequence": "<C-v>jI<Esc>"
      },
      {
        "key": "I",
        "description": "Visual Block plus I inserts the same prefix at the start of every selected line.",
        "sequence": "<C-v>jI<Esc>"
      },
      {
        "key": "Esc",
        "description": "Visual Block plus I inserts the same prefix at the start of every selected line.",
        "sequence": "<C-v>jI<Esc>"
      },
      {
        "key": "A",
        "description": "Visual Block plus A appends the same text to each selected row.",
        "sequence": "<C-v>jA<Esc>"
      },
      {
        "key": "r",
        "description": "Visual Block plus r replaces every selected character with one chosen character.",
        "sequence": "<C-v>jr-"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
