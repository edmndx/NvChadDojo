import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Registers",
    "id": "yank-register",
    "title": "Use the Yank Register",
    "eyebrow": "Registers",
    "summary": "Register 0 keeps the latest yank even after another delete changes the unnamed register.",
    "detail": "Register 0 keeps the latest yank even after another delete changes the unnamed register.",
    "keys": [
      "\"0",
      "p"
    ],
    "task": "Put the latest yanked text from register 0.",
    "sequence": "\"0p",
    "code": [
      "const copied = 'keep this text';",
      "const disposable = 'delete this';",
      "console.log(copied);"
    ],
    "tip": "The practice buffer seeds register 0 with the line `const yanked = true;`. In your editor, yank some text before using \"0p.",
    "drills": [
      {
        "goal": "Put the latest yanked text from register 0. · repetition 1 of 3",
        "code": [
          "const copied = 'keep this text';",
          "const disposable = 'delete this';",
          "console.log(copied);"
        ]
      },
      {
        "goal": "Put the latest yanked text from register 0. · repetition 2 of 3",
        "code": [
          "const alpha = 1;",
          "const beta = 2;",
          "const gamma = 3;"
        ]
      },
      {
        "goal": "Put the latest yanked text from register 0. · repetition 3 of 3",
        "code": [
          "map('n', 'x', action);",
          "map('n', 'y', other);",
          "console.log(map);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Put the latest yanked text from register 0.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: \"0, p."
      ],
      "success": "Use the Yank Register produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "\"0",
        "description": "Register 0 keeps the latest yank even after another delete changes the unnamed register.",
        "sequence": "\"0p"
      },
      {
        "key": "p",
        "description": "Register 0 keeps the latest yank even after another delete changes the unnamed register.",
        "sequence": "\"0p"
      }
    ]
  },
  {
    "group": "Registers",
    "id": "named-registers",
    "title": "Named Registers",
    "eyebrow": "Registers",
    "summary": "Named registers preserve text for deliberate reuse across edits.",
    "detail": "Named registers preserve text for deliberate reuse across edits.",
    "keys": [
      "\"a",
      "yy",
      "\"a",
      "p"
    ],
    "task": "Yank a line into register a, then put it.",
    "sequence": "\"ayy\"ap",
    "code": [
      "const copied = 'keep this text';",
      "const disposable = 'delete this';",
      "console.log(copied);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Yank a line into register a, then put it. · repetition 1 of 3",
        "code": [
          "const copied = 'keep this text';",
          "const disposable = 'delete this';",
          "console.log(copied);"
        ]
      },
      {
        "goal": "Yank a line into register a, then put it. · repetition 2 of 3",
        "code": [
          "const alpha = 1;",
          "const beta = 2;",
          "const gamma = 3;"
        ]
      },
      {
        "goal": "Yank a line into register a, then put it. · repetition 3 of 3",
        "code": [
          "map('n', 'x', action);",
          "map('n', 'y', other);",
          "console.log(map);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Yank a line into register a, then put it.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: \"a, yy, \"a, p."
      ],
      "success": "Named Registers produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "\"a",
        "description": "Named registers preserve text for deliberate reuse across edits.",
        "sequence": "\"ayy\"ap"
      },
      {
        "key": "yy",
        "description": "Named registers preserve text for deliberate reuse across edits.",
        "sequence": "\"ayy\"ap"
      },
      {
        "key": "p",
        "description": "Named registers preserve text for deliberate reuse across edits.",
        "sequence": "\"ayy\"ap"
      }
    ]
  },
  {
    "group": "Registers",
    "id": "black-hole-register",
    "title": "Delete Without Overwriting",
    "eyebrow": "Registers",
    "summary": "The black-hole register discards deleted text without replacing what you plan to paste.",
    "detail": "The black-hole register discards deleted text without replacing what you plan to paste.",
    "keys": [
      "\"_",
      "d",
      "w"
    ],
    "task": "Delete a word without changing the active paste register.",
    "sequence": "\"_dw",
    "code": [
      "const copied = 'keep this text';",
      "const disposable = 'delete this';",
      "console.log(copied);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Delete a word without changing the active paste register. · repetition 1 of 3",
        "code": [
          "const copied = 'keep this text';",
          "const disposable = 'delete this';",
          "console.log(copied);"
        ]
      },
      {
        "goal": "Delete a word without changing the active paste register. · repetition 2 of 3",
        "code": [
          "const alpha = 1;",
          "const beta = 2;",
          "const gamma = 3;"
        ]
      },
      {
        "goal": "Delete a word without changing the active paste register. · repetition 3 of 3",
        "code": [
          "map('n', 'x', action);",
          "map('n', 'y', other);",
          "console.log(map);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Delete a word without changing the active paste register.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: \"_, d, w."
      ],
      "success": "Delete Without Overwriting produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "\"_",
        "description": "The black-hole register discards deleted text without replacing what you plan to paste.",
        "sequence": "\"_dw"
      },
      {
        "key": "d",
        "description": "The black-hole register discards deleted text without replacing what you plan to paste.",
        "sequence": "\"_dw"
      },
      {
        "key": "w",
        "description": "The black-hole register discards deleted text without replacing what you plan to paste.",
        "sequence": "\"_dw"
      }
    ]
  },
  {
    "group": "Registers",
    "id": "inspect-registers",
    "title": "Inspect Registers",
    "eyebrow": "Registers",
    "summary": ":registers shows the current contents of named, numbered, and special registers.",
    "detail": ":registers shows the current contents of named, numbered, and special registers.",
    "keys": [
      ":registers",
      "Enter"
    ],
    "task": "Open the register list.",
    "sequence": ":registers<Enter>",
    "code": [
      "const copied = 'keep this text';",
      "const disposable = 'delete this';",
      "console.log(copied);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Open the register list. · repetition 1 of 3",
        "code": [
          "const copied = 'keep this text';",
          "const disposable = 'delete this';",
          "console.log(copied);"
        ]
      },
      {
        "goal": "Open the register list. · repetition 2 of 3",
        "code": [
          "const alpha = 1;",
          "const beta = 2;",
          "const gamma = 3;"
        ]
      },
      {
        "goal": "Open the register list. · repetition 3 of 3",
        "code": [
          "map('n', 'x', action);",
          "map('n', 'y', other);",
          "console.log(map);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Open the register list.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: :registers, Enter."
      ],
      "success": "Inspect Registers produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": ":registers",
        "description": ":registers shows the current contents of named, numbered, and special registers.",
        "sequence": ":registers<Enter>"
      },
      {
        "key": "Enter",
        "description": ":registers shows the current contents of named, numbered, and special registers.",
        "sequence": ":registers<Enter>"
      }
    ]
  },
  {
    "group": "Registers",
    "id": "registers-review",
    "title": "Registers Review",
    "eyebrow": "Registers",
    "summary": "Review every command introduced in Registers before moving to the next category.",
    "detail": "Review every command introduced in Registers before moving to the next category.",
    "keys": [
      "\"0",
      "p",
      "\"a",
      "yy",
      "\"_",
      "d",
      "w",
      ":registers",
      "Enter"
    ],
    "task": "",
    "sequence": "\"0p",
    "code": [
      "const copied = 'keep this text';",
      "const disposable = 'delete this';",
      "console.log(copied);"
    ],
    "tip": "Return to any command in Registers that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "\"0",
        "description": "Register 0 keeps the latest yank even after another delete changes the unnamed register.",
        "sequence": "\"0p",
        "code": [
          "const copied = 'keep this text';",
          "const disposable = 'delete this';",
          "console.log(copied);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "p",
        "description": "Register 0 keeps the latest yank even after another delete changes the unnamed register.",
        "sequence": "\"0p",
        "code": [
          "const copied = 'keep this text';",
          "const disposable = 'delete this';",
          "console.log(copied);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "\"a",
        "description": "Named registers preserve text for deliberate reuse across edits.",
        "sequence": "\"ayy\"ap",
        "code": [
          "const copied = 'keep this text';",
          "const disposable = 'delete this';",
          "console.log(copied);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "yy",
        "description": "Named registers preserve text for deliberate reuse across edits.",
        "sequence": "\"ayy\"ap",
        "code": [
          "const copied = 'keep this text';",
          "const disposable = 'delete this';",
          "console.log(copied);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "\"_",
        "description": "The black-hole register discards deleted text without replacing what you plan to paste.",
        "sequence": "\"_dw",
        "code": [
          "const copied = 'keep this text';",
          "const disposable = 'delete this';",
          "console.log(copied);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "d",
        "description": "The black-hole register discards deleted text without replacing what you plan to paste.",
        "sequence": "\"_dw",
        "code": [
          "const copied = 'keep this text';",
          "const disposable = 'delete this';",
          "console.log(copied);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "w",
        "description": "The black-hole register discards deleted text without replacing what you plan to paste.",
        "sequence": "\"_dw",
        "code": [
          "const copied = 'keep this text';",
          "const disposable = 'delete this';",
          "console.log(copied);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": ":registers",
        "description": ":registers shows the current contents of named, numbered, and special registers.",
        "sequence": ":registers<Enter>",
        "code": [
          "const copied = 'keep this text';",
          "const disposable = 'delete this';",
          "console.log(copied);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "Enter",
        "description": ":registers shows the current contents of named, numbered, and special registers.",
        "sequence": ":registers<Enter>",
        "code": [
          "const copied = 'keep this text';",
          "const disposable = 'delete this';",
          "console.log(copied);"
        ],
        "cursor": [
          1,
          0
        ]
      }
    ],
    "cursor": [
      1,
      2
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
