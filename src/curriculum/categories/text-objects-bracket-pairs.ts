import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Text Objects - Bracket Pairs",
    "id": "intro-text-objects",
    "title": "Intro to Text Objects",
    "eyebrow": "Text Objects - Bracket Pairs",
    "summary": "Text objects describe structured regions: i means inside and a means around, including delimiters.",
    "detail": "Text objects describe structured regions: i means inside and a means around, including delimiters.",
    "keys": [
      "i",
      "a"
    ],
    "task": "Delete inside a bracket pair.",
    "sequence": "di{",
    "code": [
      "local opts = { old = true, debug = false }",
      "setup({ theme = 'onedark' })",
      "return opts"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Delete inside a bracket pair. · repetition 1 of 3",
        "code": [
          "local opts = { old = true, debug = false }",
          "setup({ theme = 'onedark' })",
          "return opts"
        ]
      },
      {
        "goal": "Delete inside a bracket pair. · repetition 2 of 3",
        "code": [
          "vim.lsp.enable({ 'html', 'cssls', 'lua_ls' })",
          "local palette = { green = '#98c379' }",
          "return palette"
        ]
      },
      {
        "goal": "Delete inside a bracket pair. · repetition 3 of 3",
        "code": [
          "map('n', '<leader>x', function() close() end)",
          "configure({ ui = { border = 'single' } })",
          "return true"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Delete inside a bracket pair.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with i.",
        "Read the command as operator, inside/around, then object.",
        "Compose the command from: i, a."
      ],
      "success": "Intro to Text Objects produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Text Objects - Bracket Pairs",
    "id": "delete-inside-brackets",
    "title": "Delete Inside Brackets",
    "eyebrow": "Text Objects - Bracket Pairs",
    "summary": "di{ deletes the contents of the surrounding curly brackets.",
    "detail": "di{ deletes the contents of the surrounding curly brackets.",
    "keys": [
      "d",
      "i",
      "{"
    ],
    "task": "Practice delete inside brackets.",
    "sequence": "di{",
    "code": [
      "local opts = { old = true, debug = false }",
      "setup({ theme = 'onedark' })",
      "return opts"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice delete inside brackets. · repetition 1 of 3",
        "code": [
          "local opts = { old = true, debug = false }",
          "setup({ theme = 'onedark' })",
          "return opts"
        ]
      },
      {
        "goal": "Practice delete inside brackets. · repetition 2 of 3",
        "code": [
          "vim.lsp.enable({ 'html', 'cssls', 'lua_ls' })",
          "local palette = { green = '#98c379' }",
          "return palette"
        ]
      },
      {
        "goal": "Practice delete inside brackets. · repetition 3 of 3",
        "code": [
          "map('n', '<leader>x', function() close() end)",
          "configure({ ui = { border = 'single' } })",
          "return true"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Practice delete inside brackets.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with d.",
        "Read the command as operator, inside/around, then object.",
        "Compose the command from: d, i, {."
      ],
      "alternatives": [
        "di{",
        "di}"
      ],
      "success": "Delete Inside Brackets produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Text Objects - Bracket Pairs",
    "id": "delete-around-brackets",
    "title": "Delete Around Brackets",
    "eyebrow": "Text Objects - Bracket Pairs",
    "summary": "da{ deletes the bracket contents and the curly brackets themselves.",
    "detail": "da{ deletes the bracket contents and the curly brackets themselves.",
    "keys": [
      "d",
      "a",
      "{"
    ],
    "task": "Practice delete around brackets.",
    "sequence": "da{",
    "code": [
      "local opts = { old = true, debug = false }",
      "setup({ theme = 'onedark' })",
      "return opts"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice delete around brackets. · repetition 1 of 3",
        "code": [
          "local opts = { old = true, debug = false }",
          "setup({ theme = 'onedark' })",
          "return opts"
        ]
      },
      {
        "goal": "Practice delete around brackets. · repetition 2 of 3",
        "code": [
          "vim.lsp.enable({ 'html', 'cssls', 'lua_ls' })",
          "local palette = { green = '#98c379' }",
          "return palette"
        ]
      },
      {
        "goal": "Practice delete around brackets. · repetition 3 of 3",
        "code": [
          "map('n', '<leader>x', function() close() end)",
          "configure({ ui = { border = 'single' } })",
          "return true"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Practice delete around brackets.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with d.",
        "Read the command as operator, inside/around, then object.",
        "Compose the command from: d, a, {."
      ],
      "alternatives": [
        "da{",
        "da}"
      ],
      "success": "Delete Around Brackets produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Text Objects - Bracket Pairs",
    "id": "change-inside-brackets",
    "title": "Change Inside Brackets",
    "eyebrow": "Text Objects - Bracket Pairs",
    "summary": "ci{ clears bracket contents and enters Insert mode while preserving the pair.",
    "detail": "ci{ clears bracket contents and enters Insert mode while preserving the pair.",
    "keys": [
      "c",
      "i",
      "{"
    ],
    "task": "Change inside curly brackets, then escape.",
    "sequence": "ci{<Esc>",
    "code": [
      "local opts = { old = true, debug = false }",
      "setup({ theme = 'onedark' })",
      "return opts"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Change inside curly brackets, then escape. · repetition 1 of 3",
        "code": [
          "local opts = { old = true, debug = false }",
          "setup({ theme = 'onedark' })",
          "return opts"
        ]
      },
      {
        "goal": "Change inside curly brackets, then escape. · repetition 2 of 3",
        "code": [
          "vim.lsp.enable({ 'html', 'cssls', 'lua_ls' })",
          "local palette = { green = '#98c379' }",
          "return palette"
        ]
      },
      {
        "goal": "Change inside curly brackets, then escape. · repetition 3 of 3",
        "code": [
          "map('n', '<leader>x', function() close() end)",
          "configure({ ui = { border = 'single' } })",
          "return true"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Change inside curly brackets, then escape. Enter “theme = 'onedark'” where text is requested.",
      "replacement": "theme = 'onedark'",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with c.",
        "Read the command as operator, inside/around, then object.",
        "Enter “theme = 'onedark'” before returning to Normal mode."
      ],
      "success": "The buffer now contains “theme = 'onedark'” in the intended location."
    }
  },
  {
    "group": "Text Objects - Bracket Pairs",
    "id": "change-around-brackets",
    "title": "Change Around Brackets",
    "eyebrow": "Text Objects - Bracket Pairs",
    "summary": "ca{ replaces the contents and surrounding curly brackets.",
    "detail": "ca{ replaces the contents and surrounding curly brackets.",
    "keys": [
      "c",
      "a",
      "{"
    ],
    "task": "Change around curly brackets, then escape.",
    "sequence": "ca{<Esc>",
    "code": [
      "local opts = { old = true, debug = false }",
      "setup({ theme = 'onedark' })",
      "return opts"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Change around curly brackets, then escape. · repetition 1 of 3",
        "code": [
          "local opts = { old = true, debug = false }",
          "setup({ theme = 'onedark' })",
          "return opts"
        ]
      },
      {
        "goal": "Change around curly brackets, then escape. · repetition 2 of 3",
        "code": [
          "vim.lsp.enable({ 'html', 'cssls', 'lua_ls' })",
          "local palette = { green = '#98c379' }",
          "return palette"
        ]
      },
      {
        "goal": "Change around curly brackets, then escape. · repetition 3 of 3",
        "code": [
          "map('n', '<leader>x', function() close() end)",
          "configure({ ui = { border = 'single' } })",
          "return true"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Change around curly brackets, then escape. Enter “{ enabled = true }” where text is requested.",
      "replacement": "{ enabled = true }",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with c.",
        "Read the command as operator, inside/around, then object.",
        "Enter “{ enabled = true }” before returning to Normal mode."
      ],
      "success": "The buffer now contains “{ enabled = true }” in the intended location."
    }
  },
  {
    "group": "Text Objects - Bracket Pairs",
    "id": "brackets-review",
    "title": "Brackets Review",
    "eyebrow": "Text Objects - Bracket Pairs",
    "summary": "Review delete and change with inside and around bracket objects.",
    "detail": "Review delete and change with inside and around bracket objects.",
    "keys": [
      "di{",
      "da{",
      "ci{",
      "ca{"
    ],
    "task": "Run all four bracket operations.",
    "sequence": "di{da{ci{<Esc>ca{<Esc>",
    "code": [
      "local opts = { old = true, debug = false }",
      "setup({ theme = 'onedark' })",
      "return opts"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Run all four bracket operations. · repetition 1 of 3",
        "code": [
          "local opts = { old = true, debug = false }",
          "setup({ theme = 'onedark' })",
          "return opts"
        ]
      },
      {
        "goal": "Run all four bracket operations. · repetition 2 of 3",
        "code": [
          "vim.lsp.enable({ 'html', 'cssls', 'lua_ls' })",
          "local palette = { green = '#98c379' }",
          "return palette"
        ]
      },
      {
        "goal": "Run all four bracket operations. · repetition 3 of 3",
        "code": [
          "map('n', '<leader>x', function() close() end)",
          "configure({ ui = { border = 'single' } })",
          "return true"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Run all four bracket operations.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with di{.",
        "Read the command as operator, inside/around, then object.",
        "Compose the command from: di{, da{, ci{, ca{."
      ],
      "success": "Brackets Review produced the requested buffer and cursor state."
    },
    "reviewOnly": true
  }
] satisfies readonly Lesson[];

export default lessons;
