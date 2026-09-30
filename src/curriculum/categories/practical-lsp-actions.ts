import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Practical LSP Actions",
    "id": "rename-symbol",
    "title": "Rename a Symbol",
    "eyebrow": "Practical LSP Actions",
    "summary": "Neovim 0.11's grn default opens LSP rename for the symbol under the cursor when a capable server is attached.",
    "detail": "Rename is not complete after grn alone: enter the new identifier in the prompt and confirm it with Enter.",
    "keys": [
      "g",
      "r",
      "n"
    ],
    "task": "Rename the symbol under the cursor to itemTotal and confirm it.",
    "sequence": "grnitemTotal<Enter>",
    "code": [
      "local total = calculate(items)",
      "print(total)",
      "return total"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Rename the symbol under the cursor to itemTotal and confirm it. · repetition 1 of 3",
        "code": [
          "local total = calculate(items)",
          "print(total)",
          "return total"
        ]
      },
      {
        "goal": "Rename the symbol under the cursor to itemTotal and confirm it. · repetition 2 of 3",
        "code": [
          "function greet(name)",
          "  return 'Hello ' .. name",
          "end"
        ]
      },
      {
        "goal": "Rename the symbol under the cursor to itemTotal and confirm it. · repetition 3 of 3",
        "code": [
          "local user = find_user(id)",
          "notify(user.name)",
          "return user"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Press grn, enter itemTotal in the rename prompt, then confirm with Enter.",
      "replacement": "itemTotal",
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
    "summary": "Neovim 0.11's grr default requests semantic references for the symbol under the cursor.",
    "detail": "A capable attached language server supplies the results; their presentation depends on the active LSP handler.",
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
    "summary": "Neovim 0.11's gra default requests supported refactors and quick fixes for the current position or Visual selection.",
    "detail": "After the action menu opens, move to the intended action and press Enter; opening the menu alone does not apply a fix.",
    "keys": [
      "g",
      "r",
      "a"
    ],
    "task": "Open the available code actions and choose the first action.",
    "sequence": "gra<Enter>",
    "code": [
      "local total = calculate(items)",
      "print(total)",
      "return total"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Open the available code actions and choose the first action. · repetition 1 of 3",
        "code": [
          "local total = calculate(items)",
          "print(total)",
          "return total"
        ]
      },
      {
        "goal": "Open the available code actions and choose the first action. · repetition 2 of 3",
        "code": [
          "function greet(name)",
          "  return 'Hello ' .. name",
          "end"
        ]
      },
      {
        "goal": "Open the available code actions and choose the first action. · repetition 3 of 3",
        "code": [
          "local user = find_user(id)",
          "notify(user.name)",
          "return user"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Press gra to open code actions, then press Enter to choose the first available action.",
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
    "detail": "This is a Neovim 0.11 Insert-mode default. It only produces help when an attached language server supports signatureHelp for the current call.",
    "keys": [
      "Ctrl+s"
    ],
    "task": "Show signature help while entering function arguments.",
    "sequence": "i<C-s><Esc>",
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
      "instruction": "Enter Insert mode, request signature help with Ctrl+s, then return to Normal mode.",
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
        "sequence": "grnitemTotal<Enter>"
      },
      {
        "key": "r",
        "description": "Neovim's LSP rename updates a symbol consistently across the project.",
        "sequence": "grnitemTotal<Enter>"
      },
      {
        "key": "n",
        "description": "Neovim's LSP rename updates a symbol consistently across the project.",
        "sequence": "grnitemTotal<Enter>"
      },
      {
        "key": "a",
        "description": "Code actions expose supported refactors and quick fixes for the current position or selection.",
        "sequence": "gra<Enter>"
      },
      {
        "key": "Ctrl+s",
        "description": "In Insert mode, Ctrl+s requests parameter and signature information from the attached language server.",
        "sequence": "i<C-s><Esc>"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
