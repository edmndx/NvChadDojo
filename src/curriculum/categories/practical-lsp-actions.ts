import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Practical LSP Actions",
    "id": "rename-symbol",
    "title": "Rename a Symbol",
    "eyebrow": "Practical LSP Actions",
    "summary": "Neovim's LSP rename updates a symbol consistently across the project.",
    "detail": "Neovim's LSP rename updates a symbol consistently across the project.",
    "keys": [
      "g",
      "r",
      "n"
    ],
    "task": "Rename the symbol under the cursor.",
    "sequence": "grn",
    "code": [
      "local total = calculate(items)",
      "print(total)",
      "return total"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Rename the symbol under the cursor. · repetition 1 of 3",
        "code": [
          "local total = calculate(items)",
          "print(total)",
          "return total"
        ]
      },
      {
        "goal": "Rename the symbol under the cursor. · repetition 2 of 3",
        "code": [
          "function greet(name)",
          "  return 'Hello ' .. name",
          "end"
        ]
      },
      {
        "goal": "Rename the symbol under the cursor. · repetition 3 of 3",
        "code": [
          "local user = find_user(id)",
          "notify(user.name)",
          "return user"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Rename the symbol under the cursor.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with g.",
        "Use only the keys introduced in Practical LSP Actions.",
        "Compose the command from: g, r, n."
      ],
      "success": "Rename a Symbol produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Practical LSP Actions",
    "id": "find-references",
    "title": "Find References",
    "eyebrow": "Practical LSP Actions",
    "summary": "LSP references lists every semantic use of the symbol under the cursor.",
    "detail": "LSP references lists every semantic use of the symbol under the cursor.",
    "keys": [
      "g",
      "r",
      "r"
    ],
    "task": "Find all references to the current symbol.",
    "sequence": "grr",
    "code": [
      "local total = calculate(items)",
      "print(total)",
      "return total"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Find all references to the current symbol. · repetition 1 of 3",
        "code": [
          "local total = calculate(items)",
          "print(total)",
          "return total"
        ]
      },
      {
        "goal": "Find all references to the current symbol. · repetition 2 of 3",
        "code": [
          "function greet(name)",
          "  return 'Hello ' .. name",
          "end"
        ]
      },
      {
        "goal": "Find all references to the current symbol. · repetition 3 of 3",
        "code": [
          "local user = find_user(id)",
          "notify(user.name)",
          "return user"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Find all references to the current symbol.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with g.",
        "Use only the keys introduced in Practical LSP Actions.",
        "Compose the command from: g, r, r."
      ],
      "success": "Find References produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Practical LSP Actions",
    "id": "code-actions",
    "title": "Code Actions",
    "eyebrow": "Practical LSP Actions",
    "summary": "Code actions expose supported refactors and quick fixes for the current position or selection.",
    "detail": "Code actions expose supported refactors and quick fixes for the current position or selection.",
    "keys": [
      "g",
      "r",
      "a"
    ],
    "task": "Open the available code actions.",
    "sequence": "gra",
    "code": [
      "local total = calculate(items)",
      "print(total)",
      "return total"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Open the available code actions. · repetition 1 of 3",
        "code": [
          "local total = calculate(items)",
          "print(total)",
          "return total"
        ]
      },
      {
        "goal": "Open the available code actions. · repetition 2 of 3",
        "code": [
          "function greet(name)",
          "  return 'Hello ' .. name",
          "end"
        ]
      },
      {
        "goal": "Open the available code actions. · repetition 3 of 3",
        "code": [
          "local user = find_user(id)",
          "notify(user.name)",
          "return user"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Open the available code actions.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with g.",
        "Use only the keys introduced in Practical LSP Actions.",
        "Compose the command from: g, r, a."
      ],
      "success": "Code Actions produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Practical LSP Actions",
    "id": "signature-help",
    "title": "Signature Help",
    "eyebrow": "Practical LSP Actions",
    "summary": "In Insert mode, Ctrl+s requests parameter and signature information from the attached language server.",
    "detail": "In Insert mode, Ctrl+s requests parameter and signature information from the attached language server.",
    "keys": [
      "Ctrl+s"
    ],
    "task": "Show signature help while entering function arguments.",
    "sequence": "<C-s>",
    "code": [
      "local total = calculate(items)",
      "print(total)",
      "return total"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Show signature help while entering function arguments. · repetition 1 of 3",
        "code": [
          "local total = calculate(items)",
          "print(total)",
          "return total"
        ]
      },
      {
        "goal": "Show signature help while entering function arguments. · repetition 2 of 3",
        "code": [
          "function greet(name)",
          "  return 'Hello ' .. name",
          "end"
        ]
      },
      {
        "goal": "Show signature help while entering function arguments. · repetition 3 of 3",
        "code": [
          "local user = find_user(id)",
          "notify(user.name)",
          "return user"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Show signature help while entering function arguments.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with Ctrl+s.",
        "Use only the keys introduced in Practical LSP Actions.",
        "Compose the command from: Ctrl+s."
      ],
      "success": "Signature Help produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Practical LSP Actions",
    "id": "practical-lsp-actions-review",
    "title": "Practical LSP Actions Review",
    "eyebrow": "Practical LSP Actions",
    "summary": "Review every command introduced in Practical LSP Actions before moving to the next category.",
    "detail": "Review every command introduced in Practical LSP Actions before moving to the next category.",
    "keys": [
      "g",
      "r",
      "n",
      "a",
      "Ctrl+s"
    ],
    "task": "",
    "sequence": "grn",
    "code": [
      "local total = calculate(items)",
      "print(total)",
      "return total"
    ],
    "tip": "Return to any command in Practical LSP Actions that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "g",
        "description": "Neovim's LSP rename updates a symbol consistently across the project.",
        "sequence": "grn"
      },
      {
        "key": "r",
        "description": "Neovim's LSP rename updates a symbol consistently across the project.",
        "sequence": "grn"
      },
      {
        "key": "n",
        "description": "Neovim's LSP rename updates a symbol consistently across the project.",
        "sequence": "grn"
      },
      {
        "key": "a",
        "description": "Code actions expose supported refactors and quick fixes for the current position or selection.",
        "sequence": "gra"
      },
      {
        "key": "Ctrl+s",
        "description": "In Insert mode, Ctrl+s requests parameter and signature information from the attached language server.",
        "sequence": "<C-s>"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
