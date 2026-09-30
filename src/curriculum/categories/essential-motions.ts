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
    "summary": "f and F find a character forward or backward; ; repeats that direction and , repeats it in reverse.",
    "detail": "The target character is part of the command. Repeating with ; keeps the last direction, while , deliberately reverses it.",
    "keys": [
      "f",
      "F",
      ";",
      ","
    ],
    "task": "Find commas forward, backward, and in both repeat directions.",
    "sequence": "f,;F,;,",
    "code": [
      "local values = collect(alpha, beta, gamma, delta)",
      "notify(one, two, three, four)",
      "return values"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Find commas forward, backward, and in both repeat directions. · repetition 1 of 3",
        "code": [
          "local values = collect(alpha, beta, gamma, delta)",
          "notify(one, two, three, four)",
          "return values"
        ]
      },
      {
        "goal": "Find commas forward, backward, and in both repeat directions. · repetition 2 of 3",
        "code": [
          "local result = transform(input, options, cache, logger)",
          "emit(name, status, duration, retries)",
          "return result"
        ]
      },
      {
        "goal": "Find commas forward, backward, and in both repeat directions. · repetition 3 of 3",
        "code": [
          "map('n', 'ff', telescope.find_files, opts)",
          "map('n', 'fw', telescope.live_grep, opts)",
          "return telescope"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Find commas forward with f and ;, backward with F and ;, then reverse once with ,.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with f.",
        "Use only the keys introduced in Essential Motions.",
        "Use ; for the same direction and , for the opposite direction."
      ],
      "success": "Find Character produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Essential Motions",
    "id": "till-character",
    "title": "Till Character",
    "eyebrow": "Essential Motions",
    "summary": "t and T stop just before a target character; ; repeats that direction and , reverses it.",
    "detail": "Unlike f and F, till motions leave the cursor adjacent to the target. Their repeat direction is still controlled by ; and ,.",
    "keys": [
      "t",
      "T",
      ";",
      ","
    ],
    "task": "Move till commas forward, backward, and in both repeat directions.",
    "sequence": "t,;T,;,",
    "code": [
      "local values = collect(alpha, beta, gamma, delta)",
      "notify(one, two, three, four)",
      "return values"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Move till commas forward, backward, and in both repeat directions. · repetition 1 of 3",
        "code": [
          "local values = collect(alpha, beta, gamma, delta)",
          "notify(one, two, three, four)",
          "return values"
        ]
      },
      {
        "goal": "Move till commas forward, backward, and in both repeat directions. · repetition 2 of 3",
        "code": [
          "local result = transform(input, options, cache, logger)",
          "emit(name, status, duration, retries)",
          "return result"
        ]
      },
      {
        "goal": "Move till commas forward, backward, and in both repeat directions. · repetition 3 of 3",
        "code": [
          "map('n', 'ff', telescope.find_files, opts)",
          "map('n', 'fw', telescope.live_grep, opts)",
          "return telescope"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Move till commas forward with t and ;, backward with T and ;, then reverse once with ,.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with t.",
        "Use only the keys introduced in Essential Motions.",
        "Use ; for the same direction and , for the opposite direction."
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
      "T",
      ","
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
        "description": "f finds forward; ; repeats in that direction and , repeats in reverse.",
        "sequence": "f,;F,;,"
      },
      {
        "key": "F",
        "description": "F finds backward; ; repeats in that direction and , repeats in reverse.",
        "sequence": "f,;F,;,"
      },
      {
        "key": ";",
        "description": "; repeats the latest f, F, t, or T motion in the same direction.",
        "sequence": "f,;F,;,"
      },
      {
        "key": "t",
        "description": "t stops before a target ahead; ; repeats and , reverses the direction.",
        "sequence": "t,;T,;,"
      },
      {
        "key": "T",
        "description": "T stops after a target behind; ; repeats and , reverses the direction.",
        "sequence": "t,;T,;,"
      },
      {
        "key": ",",
        "description": ", repeats the latest character-find motion in the opposite direction.",
        "sequence": "f,;F,;,"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
