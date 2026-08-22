import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Essential Motions",
    "id": "moving-big-words",
    "title": "Moving by WORDs",
    "eyebrow": "Essential Motions",
    "summary": "Uppercase word motions treat each whitespace-separated chunk as one WORD.",
    "detail": "Uppercase word motions treat each whitespace-separated chunk as one WORD.",
    "keys": [
      "W",
      "E",
      "B"
    ],
    "task": "Use W, E, then B.",
    "sequence": "WEB",
    "code": [
      "require('nvchad.configs.lspconfig').defaults()",
      "vim.lsp.enable({ 'html', 'cssls' })",
      "return true"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Use W, E, then B. · repetition 1 of 3",
        "code": [
          "require('nvchad.configs.lspconfig').defaults()",
          "vim.lsp.enable({ 'html', 'cssls' })",
          "return true"
        ]
      },
      {
        "goal": "Use W, E, then B. · repetition 2 of 3",
        "code": [
          "local result = transform(input, options)",
          "local label = 'ready:production'",
          "return result"
        ]
      },
      {
        "goal": "Use W, E, then B. · repetition 3 of 3",
        "code": [
          "map('<leader>ff', telescope.find_files)",
          "map('<leader>fw', telescope.live_grep)",
          "return telescope"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Use W, E, then B.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with W.",
        "Use only the keys introduced in Essential Motions.",
        "Compose the command from: W, E, B."
      ],
      "success": "Moving by WORDs produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Essential Motions",
    "id": "moving-line-ends",
    "title": "Moving to Line Ends",
    "eyebrow": "Essential Motions",
    "summary": "0 reaches column zero, _ reaches first non-blank text, and $ reaches the line end.",
    "detail": "0 reaches column zero, _ reaches first non-blank text, and $ reaches the line end.",
    "keys": [
      "0",
      "_",
      "$"
    ],
    "task": "Visit column zero, first text, then line end.",
    "sequence": "0_$",
    "code": [
      "require('nvchad.configs.lspconfig').defaults()",
      "vim.lsp.enable({ 'html', 'cssls' })",
      "return true"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Visit column zero, first text, then line end. · repetition 1 of 3",
        "code": [
          "require('nvchad.configs.lspconfig').defaults()",
          "vim.lsp.enable({ 'html', 'cssls' })",
          "return true"
        ]
      },
      {
        "goal": "Visit column zero, first text, then line end. · repetition 2 of 3",
        "code": [
          "local result = transform(input, options)",
          "local label = 'ready:production'",
          "return result"
        ]
      },
      {
        "goal": "Visit column zero, first text, then line end. · repetition 3 of 3",
        "code": [
          "map('<leader>ff', telescope.find_files)",
          "map('<leader>fw', telescope.live_grep)",
          "return telescope"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Visit column zero, first text, then line end.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with 0.",
        "Use only the keys introduced in Essential Motions.",
        "Compose the command from: 0, _, $."
      ],
      "alternatives": [
        "0_$",
        "0^$"
      ],
      "success": "Moving to Line Ends produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Essential Motions",
    "id": "find-character",
    "title": "Find Character",
    "eyebrow": "Essential Motions",
    "summary": "f finds forward, F finds backward, and semicolon repeats the latest character search.",
    "detail": "f finds forward, F finds backward, and semicolon repeats the latest character search.",
    "keys": [
      "f",
      "F",
      ";"
    ],
    "task": "Find ( forward, backward, then repeat twice.",
    "sequence": "f(F(;;",
    "code": [
      "require('nvchad.configs.lspconfig').defaults()",
      "vim.lsp.enable({ 'html', 'cssls' })",
      "return true"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Find ( forward, backward, then repeat twice. · repetition 1 of 3",
        "code": [
          "require('nvchad.configs.lspconfig').defaults()",
          "vim.lsp.enable({ 'html', 'cssls' })",
          "return true"
        ]
      },
      {
        "goal": "Find ( forward, backward, then repeat twice. · repetition 2 of 3",
        "code": [
          "local result = transform(input, options)",
          "local label = 'ready:production'",
          "return result"
        ]
      },
      {
        "goal": "Find ( forward, backward, then repeat twice. · repetition 3 of 3",
        "code": [
          "map('<leader>ff', telescope.find_files)",
          "map('<leader>fw', telescope.live_grep)",
          "return telescope"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Find ( forward, backward, then repeat twice.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with f.",
        "Use only the keys introduced in Essential Motions.",
        "Compose the command from: f, F, ;."
      ],
      "success": "Find Character produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Essential Motions",
    "id": "till-character",
    "title": "Till Character",
    "eyebrow": "Essential Motions",
    "summary": "t and T stop just before a target character; semicolon repeats the motion.",
    "detail": "t and T stop just before a target character; semicolon repeats the motion.",
    "keys": [
      "t",
      "T",
      ";"
    ],
    "task": "Move till ( forward, backward, then repeat twice.",
    "sequence": "t(T(;;",
    "code": [
      "require('nvchad.configs.lspconfig').defaults()",
      "vim.lsp.enable({ 'html', 'cssls' })",
      "return true"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Move till ( forward, backward, then repeat twice. · repetition 1 of 3",
        "code": [
          "require('nvchad.configs.lspconfig').defaults()",
          "vim.lsp.enable({ 'html', 'cssls' })",
          "return true"
        ]
      },
      {
        "goal": "Move till ( forward, backward, then repeat twice. · repetition 2 of 3",
        "code": [
          "local result = transform(input, options)",
          "local label = 'ready:production'",
          "return result"
        ]
      },
      {
        "goal": "Move till ( forward, backward, then repeat twice. · repetition 3 of 3",
        "code": [
          "map('<leader>ff', telescope.find_files)",
          "map('<leader>fw', telescope.live_grep)",
          "return telescope"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Move till ( forward, backward, then repeat twice.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with t.",
        "Use only the keys introduced in Essential Motions.",
        "Compose the command from: t, T, ;."
      ],
      "success": "Till Character produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Essential Motions",
    "id": "essential-motions-review",
    "title": "Essential Motions Review",
    "eyebrow": "Essential Motions",
    "summary": "Review every command introduced in Essential Motions before moving to the next category.",
    "detail": "Review every command introduced in Essential Motions before moving to the next category.",
    "keys": [
      "W",
      "E",
      "B",
      "0",
      "_",
      "$",
      "f",
      "F",
      ";",
      "t",
      "T"
    ],
    "task": "",
    "sequence": "WEB",
    "code": [
      "require('nvchad.configs.lspconfig').defaults()",
      "vim.lsp.enable({ 'html', 'cssls' })",
      "return true"
    ],
    "tip": "Return to any command in Essential Motions that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "W",
        "description": "Uppercase word motions treat each whitespace-separated chunk as one WORD.",
        "sequence": "WEB"
      },
      {
        "key": "E",
        "description": "Uppercase word motions treat each whitespace-separated chunk as one WORD.",
        "sequence": "WEB"
      },
      {
        "key": "B",
        "description": "Uppercase word motions treat each whitespace-separated chunk as one WORD.",
        "sequence": "WEB"
      },
      {
        "key": "0",
        "description": "0 reaches column zero, _ reaches first non-blank text, and $ reaches the line end.",
        "sequence": "0_$"
      },
      {
        "key": "_",
        "description": "0 reaches column zero, _ reaches first non-blank text, and $ reaches the line end.",
        "sequence": "0_$"
      },
      {
        "key": "$",
        "description": "0 reaches column zero, _ reaches first non-blank text, and $ reaches the line end.",
        "sequence": "0_$"
      },
      {
        "key": "f",
        "description": "f finds forward, F finds backward, and semicolon repeats the latest character search.",
        "sequence": "f(F(;;"
      },
      {
        "key": "F",
        "description": "f finds forward, F finds backward, and semicolon repeats the latest character search.",
        "sequence": "f(F(;;"
      },
      {
        "key": ";",
        "description": "f finds forward, F finds backward, and semicolon repeats the latest character search.",
        "sequence": "f(F(;;"
      },
      {
        "key": "t",
        "description": "t and T stop just before a target character; semicolon repeats the motion.",
        "sequence": "t(T(;;"
      },
      {
        "key": "T",
        "description": "t and T stop just before a target character; semicolon repeats the motion.",
        "sequence": "t(T(;;"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
