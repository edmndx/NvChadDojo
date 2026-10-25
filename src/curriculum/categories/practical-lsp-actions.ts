import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Practical LSP Actions",
    "id": "rename-symbol",
    "title": "Rename a Symbol",
    "eyebrow": "Practical LSP Actions",
    "summary": "Neovim 0.11's grn default opens LSP rename for the symbol under the cursor when a capable server is attached.",
    "detail": "With the default input prompt, Ctrl+u clears the prefilled symbol name; type the replacement and press Enter. A supporting attached language server is required.",
    "keys": [
      "grn"
    ],
    "task": "Rename the symbol under the cursor to itemTotal and confirm it.",
    "sequence": "grn<C-u>itemTotal<Enter>",
    "code": [
      "const total = 12 + 8;",
      "console.log(total);",
      "console.log(total * 2);"
    ],
    "tip": "Neovim 0.11 supplies grn. Rename behavior and affected files come from the attached server.",
    "drills": [
      {
        "goal": "Rename the symbol under the cursor to itemTotal and confirm it. · repetition 1 of 3",
        "code": [
          "const total = 12 + 8;",
          "console.log(total);",
          "console.log(total * 2);"
        ]
      },
      {
        "goal": "Rename the symbol under the cursor to itemTotal and confirm it. · repetition 2 of 3",
        "code": [
          "const name = 'Ada';",
          "console.log(name);",
          "console.log(name.toUpperCase());"
        ]
      },
      {
        "goal": "Rename the symbol under the cursor to itemTotal and confirm it. · repetition 3 of 3",
        "code": [
          "const user = { name: 'Ada' };",
          "console.log(user.name);",
          "console.log(user);"
        ]
      }
    ],
    "commonMistake": "Place the cursor on the intended symbol or inside its call, and verify a supporting language server is attached.",
    "challenge": {
      "instruction": "Press grn, clear the prefilled name with Ctrl+u, type itemTotal, and press Enter.",
      "replacement": "itemTotal",
      "cursor": [
        0,
        6
      ],
      "hints": [
        "Start on the intended symbol in Normal mode and press grn.",
        "Clear the prefilled name with Ctrl+u, then type itemTotal.",
        "Press Enter to submit the rename to the attached server."
      ],
      "success": "Command sequence accepted for this rehearsal. Verify the result in an editor with a supporting language server."
    },
    "reviewItems": [
      {
        "key": "grn",
        "description": "With a supporting LSP, clear the prefilled rename prompt, enter itemTotal, and confirm.",
        "sequence": "grn<C-u>itemTotal<Enter>"
      }
    ],
    "language": "javascript"
  },
  {
    "group": "Practical LSP Actions",
    "id": "find-references",
    "title": "Find References",
    "eyebrow": "Practical LSP Actions",
    "summary": "Neovim 0.11's grr default requests semantic references for the symbol under the cursor.",
    "detail": "A capable attached language server supplies the results; their presentation depends on the active LSP handler.",
    "keys": [
      "grr"
    ],
    "task": "Find all references to the current symbol.",
    "sequence": "grr",
    "code": [
      "const total = 12 + 8;",
      "console.log(total);",
      "console.log(total * 2);"
    ],
    "tip": "Neovim 0.11 supplies grr. The default handler opens a quickfix list when references are returned.",
    "drills": [
      {
        "goal": "Find all references to the current symbol. · repetition 1 of 3",
        "code": [
          "const total = 12 + 8;",
          "console.log(total);",
          "console.log(total * 2);"
        ]
      },
      {
        "goal": "Find all references to the current symbol. · repetition 2 of 3",
        "code": [
          "const name = 'Ada';",
          "console.log(name);",
          "console.log(name.toUpperCase());"
        ]
      },
      {
        "goal": "Find all references to the current symbol. · repetition 3 of 3",
        "code": [
          "const user = { name: 'Ada' };",
          "console.log(user.name);",
          "console.log(user);"
        ]
      }
    ],
    "commonMistake": "Place the cursor on the intended symbol or inside its call, and verify a supporting language server is attached.",
    "challenge": {
      "instruction": "Find all references to the current symbol.",
      "cursor": [
        0,
        6
      ],
      "hints": [
        "Start on the intended symbol in Normal mode.",
        "Press the complete grr sequence.",
        "Wait for the attached server to return the reference list."
      ],
      "success": "Command sequence accepted for this rehearsal. Verify the result in an editor with a supporting language server."
    },
    "reviewItems": [
      {
        "key": "grr",
        "description": "With a supporting LSP, request references. The default handler opens a quickfix list.",
        "sequence": "grr"
      }
    ],
    "language": "javascript"
  },
  {
    "group": "Practical LSP Actions",
    "id": "code-actions",
    "title": "Code Actions",
    "eyebrow": "Practical LSP Actions",
    "summary": "Neovim 0.11's gra default requests supported refactors and quick fixes for the current position or Visual selection.",
    "detail": "With Neovim's default numbered selection prompt, type 1 and press Enter to choose the first action; Enter alone cancels. A replacement UI may use different selection controls.",
    "keys": [
      "gra"
    ],
    "task": "Open the available code actions and choose the first action.",
    "sequence": "gra1<Enter>",
    "code": [
      "// @ts-check",
      "const total = 1;",
      "console.log(totla);",
      "console.log(total);"
    ],
    "tip": "The JavaScript fixture intentionally misspells total as totla. Attach a JavaScript language server that offers a spelling fix, then choose the action.",
    "drills": [
      {
        "goal": "Open the available code actions and choose the first action. · repetition 1 of 3",
        "code": [
          "// @ts-check",
          "const total = 1;",
          "console.log(totla);",
          "console.log(total);"
        ]
      },
      {
        "goal": "Open the available code actions and choose the first action. · repetition 2 of 3",
        "code": [
          "// @ts-check",
          "const total = 1;",
          "console.log(totla);",
          "console.log(total);"
        ]
      },
      {
        "goal": "Open the available code actions and choose the first action. · repetition 3 of 3",
        "code": [
          "// @ts-check",
          "const total = 1;",
          "console.log(totla);",
          "console.log(total);"
        ]
      }
    ],
    "commonMistake": "Place the cursor on the intended symbol or inside its call, and verify a supporting language server is attached.",
    "challenge": {
      "instruction": "Press gra, then type 1 and press Enter in the default numbered selection prompt.",
      "cursor": [
        2,
        12
      ],
      "hints": [
        "Start in Normal mode at a position with an available LSP action and press gra.",
        "In the default numbered prompt, type 1 to choose its first action.",
        "Press Enter to apply the selected action; Enter without a number cancels."
      ],
      "success": "Command sequence accepted for this rehearsal. Verify the result in an editor with a supporting language server."
    },
    "reviewItems": [
      {
        "key": "gra",
        "description": "With an available code action, type 1 and Enter in Neovim's default numbered action prompt.",
        "sequence": "gra1<Enter>"
      }
    ],
    "language": "javascript"
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
      "const total = Math.max(1, 2);",
      "console.log(total);",
      "console.log(total * 2);"
    ],
    "tip": "Start inside a function call with an attached server supporting signature help. Ctrl+s in Normal mode saves in NVChad.",
    "drills": [
      {
        "goal": "Show signature help while entering function arguments. · repetition 1 of 3",
        "code": [
          "const total = Math.max(1, 2);",
          "console.log(total);",
          "console.log(total * 2);"
        ]
      },
      {
        "goal": "Show signature help while entering function arguments. · repetition 2 of 3",
        "code": [
          "const total = Math.min(1, 2);",
          "console.log(total);",
          "console.log(total * 2);"
        ]
      },
      {
        "goal": "Show signature help while entering function arguments. · repetition 3 of 3",
        "code": [
          "const total = Math.pow(2, 3);",
          "console.log(total);",
          "console.log(total * 2);"
        ]
      }
    ],
    "commonMistake": "Place the cursor on the intended symbol or inside its call, and verify a supporting language server is attached.",
    "challenge": {
      "instruction": "Enter Insert mode, request signature help with Ctrl+s, then return to Normal mode.",
      "cursor": [
        0,
        24
      ],
      "hints": [
        "Begin with i to enter Insert mode inside the function call.",
        "Press Ctrl+s to request signature help from the attached server.",
        "Press Esc to return to Normal mode; Normal-mode Ctrl+s saves instead."
      ],
      "success": "Command sequence accepted for this rehearsal. Verify the result in an editor with a supporting language server."
    },
    "reviewItems": [
      {
        "key": "Ctrl+s",
        "description": "Starting inside a function call, enter Insert mode, request LSP signature help, and leave Insert mode.",
        "sequence": "i<C-s><Esc>"
      }
    ],
    "language": "javascript"
  },
  {
    "group": "Practical LSP Actions",
    "id": "practical-lsp-actions-review",
    "title": "Practical LSP Actions Review",
    "eyebrow": "Practical LSP Actions",
    "summary": "Review every command introduced in Practical LSP Actions before moving to the next category.",
    "detail": "Review every command introduced in Practical LSP Actions before moving to the next category.",
    "keys": [
      "grn",
      "grr",
      "gra",
      "Ctrl+s"
    ],
    "task": "",
    "sequence": "grn",
    "code": [
      "const total = 12 + 8;",
      "console.log(total);",
      "console.log(total * 2);"
    ],
    "tip": "Return to any command in Practical LSP Actions that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "grn",
        "description": "With a supporting LSP, clear the prefilled rename prompt, enter itemTotal, and confirm.",
        "sequence": "grn<C-u>itemTotal<Enter>",
        "code": [
          "const total = 12 + 8;",
          "console.log(total);",
          "console.log(total * 2);"
        ],
        "cursor": [
          0,
          6
        ],
        "language": "javascript"
      },
      {
        "key": "grr",
        "description": "With a supporting LSP, request references. The default handler opens a quickfix list.",
        "sequence": "grr",
        "code": [
          "const total = 12 + 8;",
          "console.log(total);",
          "console.log(total * 2);"
        ],
        "cursor": [
          0,
          6
        ],
        "language": "javascript"
      },
      {
        "key": "gra",
        "description": "With an available code action, type 1 and Enter in Neovim's default numbered action prompt.",
        "sequence": "gra1<Enter>",
        "code": [
          "// @ts-check",
          "const total = 1;",
          "console.log(totla);",
          "console.log(total);"
        ],
        "cursor": [
          2,
          12
        ],
        "language": "javascript"
      },
      {
        "key": "Ctrl+s",
        "description": "Starting inside a function call, enter Insert mode, request LSP signature help, and leave Insert mode.",
        "sequence": "i<C-s><Esc>",
        "code": [
          "const total = Math.max(1, 2);",
          "console.log(total);",
          "console.log(total * 2);"
        ],
        "cursor": [
          0,
          24
        ],
        "language": "javascript"
      }
    ],
    "cursor": [
      0,
      6
    ],
    "language": "javascript"
  }
] satisfies readonly Lesson[];

export default lessons;
