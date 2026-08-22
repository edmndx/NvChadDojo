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
      "local copied = 'keep this text'",
      "local disposable = 'delete this'",
      "return copied"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Put the latest yanked text from register 0. · repetition 1 of 3",
        "code": [
          "local copied = 'keep this text'",
          "local disposable = 'delete this'",
          "return copied"
        ]
      },
      {
        "goal": "Put the latest yanked text from register 0. · repetition 2 of 3",
        "code": [
          "local alpha = 1",
          "local beta = 2",
          "local gamma = 3"
        ]
      },
      {
        "goal": "Put the latest yanked text from register 0. · repetition 3 of 3",
        "code": [
          "map('n', 'x', action)",
          "map('n', 'y', other)",
          "return map"
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
        "Begin with \"0.",
        "Use only the keys introduced in Registers.",
        "Compose the command from: \"0, p."
      ],
      "success": "Use the Yank Register produced the requested buffer and cursor state."
    }
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
      "local copied = 'keep this text'",
      "local disposable = 'delete this'",
      "return copied"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Yank a line into register a, then put it. · repetition 1 of 3",
        "code": [
          "local copied = 'keep this text'",
          "local disposable = 'delete this'",
          "return copied"
        ]
      },
      {
        "goal": "Yank a line into register a, then put it. · repetition 2 of 3",
        "code": [
          "local alpha = 1",
          "local beta = 2",
          "local gamma = 3"
        ]
      },
      {
        "goal": "Yank a line into register a, then put it. · repetition 3 of 3",
        "code": [
          "map('n', 'x', action)",
          "map('n', 'y', other)",
          "return map"
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
        "Begin with \"a.",
        "Use only the keys introduced in Registers.",
        "Compose the command from: \"a, yy, \"a, p."
      ],
      "success": "Named Registers produced the requested buffer and cursor state."
    }
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
      "local copied = 'keep this text'",
      "local disposable = 'delete this'",
      "return copied"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Delete a word without changing the active paste register. · repetition 1 of 3",
        "code": [
          "local copied = 'keep this text'",
          "local disposable = 'delete this'",
          "return copied"
        ]
      },
      {
        "goal": "Delete a word without changing the active paste register. · repetition 2 of 3",
        "code": [
          "local alpha = 1",
          "local beta = 2",
          "local gamma = 3"
        ]
      },
      {
        "goal": "Delete a word without changing the active paste register. · repetition 3 of 3",
        "code": [
          "map('n', 'x', action)",
          "map('n', 'y', other)",
          "return map"
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
        "Begin with \"_.",
        "Use only the keys introduced in Registers.",
        "Compose the command from: \"_, d, w."
      ],
      "success": "Delete Without Overwriting produced the requested buffer and cursor state."
    }
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
      "local copied = 'keep this text'",
      "local disposable = 'delete this'",
      "return copied"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Open the register list. · repetition 1 of 3",
        "code": [
          "local copied = 'keep this text'",
          "local disposable = 'delete this'",
          "return copied"
        ]
      },
      {
        "goal": "Open the register list. · repetition 2 of 3",
        "code": [
          "local alpha = 1",
          "local beta = 2",
          "local gamma = 3"
        ]
      },
      {
        "goal": "Open the register list. · repetition 3 of 3",
        "code": [
          "map('n', 'x', action)",
          "map('n', 'y', other)",
          "return map"
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
        "Begin with :registers.",
        "Use only the keys introduced in Registers.",
        "Compose the command from: :registers, Enter."
      ],
      "success": "Inspect Registers produced the requested buffer and cursor state."
    }
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
      "local copied = 'keep this text'",
      "local disposable = 'delete this'",
      "return copied"
    ],
    "tip": "Return to any command in Registers that still requires conscious recall.",
    "reviewOnly": true,
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
      },
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
      },
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
  }
] satisfies readonly Lesson[];

export default lessons;
