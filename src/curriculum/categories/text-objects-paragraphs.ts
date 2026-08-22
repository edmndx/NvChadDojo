import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Text Objects - Paragraphs",
    "id": "delete-inside-paragraph",
    "title": "Delete Inside Paragraph",
    "eyebrow": "Text Objects - Paragraphs",
    "summary": "dip deletes paragraph text while leaving surrounding blank-line structure.",
    "detail": "dip deletes paragraph text while leaving surrounding blank-line structure.",
    "keys": [
      "d",
      "i",
      "p"
    ],
    "task": "Practice delete inside paragraph.",
    "sequence": "dip",
    "code": [
      "local ui = {}",
      "ui.theme = 'onedark'",
      "",
      "local lsp = {}",
      "lsp.enabled = true"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice delete inside paragraph. · repetition 1 of 3",
        "code": [
          "local ui = {}",
          "ui.theme = 'onedark'",
          "",
          "local lsp = {}",
          "lsp.enabled = true"
        ]
      },
      {
        "goal": "Practice delete inside paragraph. · repetition 2 of 3",
        "code": [
          "function configure_ui()",
          "  return { border = true }",
          "end",
          "",
          "function configure_lsp()",
          "  return true",
          "end"
        ]
      },
      {
        "goal": "Practice delete inside paragraph. · repetition 3 of 3",
        "code": [
          "-- first configuration block",
          "require('options')",
          "",
          "-- second configuration block",
          "require('mappings')"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Practice delete inside paragraph.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with d.",
        "Read the command as operator, inside/around, then object.",
        "Compose the command from: d, i, p."
      ],
      "success": "Delete Inside Paragraph produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Text Objects - Paragraphs",
    "id": "delete-around-paragraph",
    "title": "Delete Around Paragraph",
    "eyebrow": "Text Objects - Paragraphs",
    "summary": "dap deletes the paragraph and its surrounding separation.",
    "detail": "dap deletes the paragraph and its surrounding separation.",
    "keys": [
      "d",
      "a",
      "p"
    ],
    "task": "Practice delete around paragraph.",
    "sequence": "dap",
    "code": [
      "local ui = {}",
      "ui.theme = 'onedark'",
      "",
      "local lsp = {}",
      "lsp.enabled = true"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice delete around paragraph. · repetition 1 of 3",
        "code": [
          "local ui = {}",
          "ui.theme = 'onedark'",
          "",
          "local lsp = {}",
          "lsp.enabled = true"
        ]
      },
      {
        "goal": "Practice delete around paragraph. · repetition 2 of 3",
        "code": [
          "function configure_ui()",
          "  return { border = true }",
          "end",
          "",
          "function configure_lsp()",
          "  return true",
          "end"
        ]
      },
      {
        "goal": "Practice delete around paragraph. · repetition 3 of 3",
        "code": [
          "-- first configuration block",
          "require('options')",
          "",
          "-- second configuration block",
          "require('mappings')"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Practice delete around paragraph.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with d.",
        "Read the command as operator, inside/around, then object.",
        "Compose the command from: d, a, p."
      ],
      "success": "Delete Around Paragraph produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Text Objects - Paragraphs",
    "id": "change-inside-paragraph",
    "title": "Change Inside Paragraph",
    "eyebrow": "Text Objects - Paragraphs",
    "summary": "cip replaces paragraph contents and enters Insert mode.",
    "detail": "cip replaces paragraph contents and enters Insert mode.",
    "keys": [
      "c",
      "i",
      "p"
    ],
    "task": "Change inside a paragraph, then escape.",
    "sequence": "cip<Esc>",
    "code": [
      "local ui = {}",
      "ui.theme = 'onedark'",
      "",
      "local lsp = {}",
      "lsp.enabled = true"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Change inside a paragraph, then escape. · repetition 1 of 3",
        "code": [
          "local ui = {}",
          "ui.theme = 'onedark'",
          "",
          "local lsp = {}",
          "lsp.enabled = true"
        ]
      },
      {
        "goal": "Change inside a paragraph, then escape. · repetition 2 of 3",
        "code": [
          "function configure_ui()",
          "  return { border = true }",
          "end",
          "",
          "function configure_lsp()",
          "  return true",
          "end"
        ]
      },
      {
        "goal": "Change inside a paragraph, then escape. · repetition 3 of 3",
        "code": [
          "-- first configuration block",
          "require('options')",
          "",
          "-- second configuration block",
          "require('mappings')"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Change inside a paragraph, then escape. Enter “local configured = true” where text is requested.",
      "replacement": "local configured = true",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with c.",
        "Read the command as operator, inside/around, then object.",
        "Enter “local configured = true” before returning to Normal mode."
      ],
      "success": "The buffer now contains “local configured = true” in the intended location."
    }
  },
  {
    "group": "Text Objects - Paragraphs",
    "id": "paragraphs-review",
    "title": "Paragraphs Review",
    "eyebrow": "Text Objects - Paragraphs",
    "summary": "Review deletion and replacement across entire paragraphs.",
    "detail": "Review deletion and replacement across entire paragraphs.",
    "keys": [
      "dip",
      "dap",
      "cip"
    ],
    "task": "Run all three paragraph operations.",
    "sequence": "dipdapcip<Esc>",
    "code": [
      "local ui = {}",
      "ui.theme = 'onedark'",
      "",
      "local lsp = {}",
      "lsp.enabled = true"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Run all three paragraph operations. · repetition 1 of 3",
        "code": [
          "local ui = {}",
          "ui.theme = 'onedark'",
          "",
          "local lsp = {}",
          "lsp.enabled = true"
        ]
      },
      {
        "goal": "Run all three paragraph operations. · repetition 2 of 3",
        "code": [
          "function configure_ui()",
          "  return { border = true }",
          "end",
          "",
          "function configure_lsp()",
          "  return true",
          "end"
        ]
      },
      {
        "goal": "Run all three paragraph operations. · repetition 3 of 3",
        "code": [
          "-- first configuration block",
          "require('options')",
          "",
          "-- second configuration block",
          "require('mappings')"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Run all three paragraph operations.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with dip.",
        "Read the command as operator, inside/around, then object.",
        "Compose the command from: dip, dap, cip."
      ],
      "success": "Paragraphs Review produced the requested buffer and cursor state."
    },
    "reviewOnly": true
  }
] satisfies readonly Lesson[];

export default lessons;
