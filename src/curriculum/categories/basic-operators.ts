import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Basic Operators",
    "id": "intro-operators",
    "title": "Intro to Operators",
    "eyebrow": "Basic Operators",
    "summary": "Operators combine with motions: d deletes, c changes, and y copies.",
    "detail": "Operators combine with motions: d deletes, c changes, and y copies.",
    "keys": [
      "d",
      "c",
      "y"
    ],
    "task": "Delete a word with dw, change the next word to updated with cw, then use b and yw to yank the changed word.",
    "sequence": "dwcwupdated<Esc>byw",
    "code": [
      "const unused = 'remove me';",
      "const active = 'keep me';",
      "console.log(active);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Delete a word with dw, change the next word to updated with cw, then use b and yw to yank the changed word.",
        "code": [
          "const unused = 'remove me';",
          "const active = 'keep me';",
          "console.log(active);"
        ]
      },
      {
        "goal": "Delete a word with dw, change the next word to updated with cw, then use b and yw to yank the changed word.",
        "code": [
          "const oldName = calculateTotal(items);",
          "notify(oldName);",
          "console.log(oldName);"
        ]
      },
      {
        "goal": "Delete a word with dw, change the next word to updated with cw, then use b and yw to yank the changed word.",
        "code": [
          "// Duplicate this configuration.",
          "settings.theme = 'onedark';",
          "console.log(settings);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Delete a word with dw, change the next word to updated with cw, then use b and yw to yank the changed word.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: d, c, y."
      ],
      "success": "Intro to Operators produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "d",
        "description": "Delete through the next word boundary.",
        "sequence": "dw"
      },
      {
        "key": "c",
        "description": "Change the current word to updated.",
        "sequence": "cwupdated<Esc>"
      },
      {
        "key": "y",
        "description": "Yank through the next word boundary.",
        "sequence": "yw"
      }
    ]
  },
  {
    "group": "Basic Operators",
    "id": "delete-words",
    "title": "Delete Words",
    "eyebrow": "Basic Operators",
    "summary": "Combine delete with the w motion to remove through the next word boundary.",
    "detail": "dw starts deleting at the cursor and moves forward; it leaves any earlier part of the word intact. Use diw to target the whole word from a position inside it.",
    "keys": [
      "d",
      "w"
    ],
    "task": "Use dw to delete through the next word boundary.",
    "sequence": "dw",
    "code": [
      "const unused = 'remove me';",
      "const active = 'keep me';",
      "console.log(active);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Use dw to delete through the next word boundary. · repetition 1 of 3",
        "code": [
          "const unused = 'remove me';",
          "const active = 'keep me';",
          "console.log(active);"
        ]
      },
      {
        "goal": "Use dw to delete through the next word boundary. · repetition 2 of 3",
        "code": [
          "const oldName = calculateTotal(items);",
          "notify(oldName);",
          "console.log(oldName);"
        ]
      },
      {
        "goal": "Use dw to delete through the next word boundary. · repetition 3 of 3",
        "code": [
          "// Duplicate this configuration.",
          "settings.theme = 'onedark';",
          "console.log(settings);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Use dw to delete through the next word boundary.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: d, w."
      ],
      "alternatives": [
        "dw"
      ],
      "success": "Delete Words produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "d",
        "description": "Combine delete with the w motion to remove through the next word boundary.",
        "sequence": "dw"
      },
      {
        "key": "w",
        "description": "Combine delete with the w motion to remove through the next word boundary.",
        "sequence": "dw"
      }
    ]
  },
  {
    "group": "Basic Operators",
    "id": "change-words",
    "title": "Change Words",
    "eyebrow": "Basic Operators",
    "summary": "cw removes to the end of a word and enters Insert mode.",
    "detail": "cw removes to the end of a word and enters Insert mode.",
    "keys": [
      "c",
      "w"
    ],
    "task": "Change a word, then return to Normal mode.",
    "sequence": "cwcatppuccin<Esc>",
    "code": [
      "const unused = 'remove me';",
      "const active = 'keep me';",
      "console.log(active);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Change a word, then return to Normal mode. · repetition 1 of 3",
        "code": [
          "const unused = 'remove me';",
          "const active = 'keep me';",
          "console.log(active);"
        ]
      },
      {
        "goal": "Change a word, then return to Normal mode. · repetition 2 of 3",
        "code": [
          "const oldName = calculateTotal(items);",
          "notify(oldName);",
          "console.log(oldName);"
        ]
      },
      {
        "goal": "Change a word, then return to Normal mode. · repetition 3 of 3",
        "code": [
          "// Duplicate this configuration.",
          "settings.theme = 'onedark';",
          "console.log(settings);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Change a word, then return to Normal mode. Enter “catppuccin” where text is requested.",
      "replacement": "catppuccin",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Enter “catppuccin” before returning to Normal mode."
      ],
      "success": "The buffer now contains “catppuccin” in the intended location."
    },
    "reviewItems": [
      {
        "key": "c",
        "description": "cw removes to the end of a word and enters Insert mode.",
        "sequence": "cwcatppuccin<Esc>"
      },
      {
        "key": "w",
        "description": "cw removes to the end of a word and enters Insert mode.",
        "sequence": "cwcatppuccin<Esc>"
      }
    ]
  },
  {
    "group": "Basic Operators",
    "id": "delete-lines",
    "title": "Delete Lines",
    "eyebrow": "Basic Operators",
    "summary": "dd deletes a complete line; D deletes from the cursor to the line end.",
    "detail": "dd deletes a complete line; D deletes from the cursor to the line end.",
    "keys": [
      "d",
      "d",
      "D"
    ],
    "task": "Delete a line, then delete to line end.",
    "sequence": "ddD",
    "code": [
      "const unused = 'remove me';",
      "const active = 'keep me';",
      "console.log(active);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Delete a line, then delete to line end. · repetition 1 of 3",
        "code": [
          "const unused = 'remove me';",
          "const active = 'keep me';",
          "console.log(active);"
        ]
      },
      {
        "goal": "Delete a line, then delete to line end. · repetition 2 of 3",
        "code": [
          "const oldName = calculateTotal(items);",
          "notify(oldName);",
          "console.log(oldName);"
        ]
      },
      {
        "goal": "Delete a line, then delete to line end. · repetition 3 of 3",
        "code": [
          "// Duplicate this configuration.",
          "settings.theme = 'onedark';",
          "console.log(settings);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Delete a line, then delete to line end.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: d, d, D."
      ],
      "success": "Delete Lines produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "d",
        "description": "Delete the complete current line.",
        "sequence": "dd"
      },
      {
        "key": "D",
        "description": "Delete from the cursor to line end.",
        "sequence": "D"
      }
    ]
  },
  {
    "group": "Basic Operators",
    "id": "delete-multiple-lines",
    "title": "Delete Multiple Lines",
    "eyebrow": "Basic Operators",
    "summary": "dj deletes this line and the one below; dk covers this line and the one above.",
    "detail": "dj deletes this line and the one below; dk covers this line and the one above.",
    "keys": [
      "d",
      "j",
      "k"
    ],
    "task": "Delete this line and the next with dj, undo with u, then delete this line and the previous one with dk.",
    "sequence": "djudk",
    "code": [
      "const unused = 'remove me';",
      "const active = 'keep me';",
      "console.log(active);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Delete this line and the next with dj, undo with u, then delete this line and the previous one with dk. · repetition 1 of 3",
        "code": [
          "const unused = 'remove me';",
          "const active = 'keep me';",
          "console.log(active);"
        ]
      },
      {
        "goal": "Delete this line and the next with dj, undo with u, then delete this line and the previous one with dk. · repetition 2 of 3",
        "code": [
          "const oldName = calculateTotal(items);",
          "notify(oldName);",
          "console.log(oldName);"
        ]
      },
      {
        "goal": "Delete this line and the next with dj, undo with u, then delete this line and the previous one with dk. · repetition 3 of 3",
        "code": [
          "// Duplicate this configuration.",
          "settings.theme = 'onedark';",
          "console.log(settings);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Delete this line and the next with dj, undo with u, then delete this line and the previous one with dk.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: d, j, k."
      ],
      "success": "Delete Multiple Lines produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "d",
        "description": "Delete the current line and the next line.",
        "sequence": "dj"
      },
      {
        "key": "j",
        "description": "Use j as a linewise motion for deletion.",
        "sequence": "dj"
      },
      {
        "key": "k",
        "description": "Use k to delete this line and the previous line.",
        "sequence": "dk"
      }
    ]
  },
  {
    "group": "Basic Operators",
    "id": "copy-paste-lines",
    "title": "Copy/Paste Lines",
    "eyebrow": "Basic Operators",
    "summary": "yy yanks a full line, p puts it below, and P puts it above.",
    "detail": "yy yanks a full line, p puts it below, and P puts it above.",
    "keys": [
      "y",
      "p",
      "P"
    ],
    "task": "Yank a line, then put below and above.",
    "sequence": "yypP",
    "code": [
      "const unused = 'remove me';",
      "const active = 'keep me';",
      "console.log(active);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Yank a line, then put below and above. · repetition 1 of 3",
        "code": [
          "const unused = 'remove me';",
          "const active = 'keep me';",
          "console.log(active);"
        ]
      },
      {
        "goal": "Yank a line, then put below and above. · repetition 2 of 3",
        "code": [
          "const oldName = calculateTotal(items);",
          "notify(oldName);",
          "console.log(oldName);"
        ]
      },
      {
        "goal": "Yank a line, then put below and above. · repetition 3 of 3",
        "code": [
          "// Duplicate this configuration.",
          "settings.theme = 'onedark';",
          "console.log(settings);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Yank a line, then put below and above.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: y, p, P."
      ],
      "success": "Copy/Paste Lines produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "y",
        "description": "Yank the current line.",
        "sequence": "yy"
      },
      {
        "key": "p",
        "description": "Yank a line and put it below.",
        "sequence": "yyp"
      },
      {
        "key": "P",
        "description": "Yank a line and put it above.",
        "sequence": "yyP"
      }
    ]
  },
  {
    "group": "Basic Operators",
    "id": "basic-operators-review",
    "title": "Basic Operators Review",
    "eyebrow": "Basic Operators",
    "summary": "Review every command introduced in Basic Operators before moving to the next category.",
    "detail": "Review every command introduced in Basic Operators before moving to the next category.",
    "keys": [
      "d",
      "c",
      "y",
      "w",
      "D",
      "j",
      "k",
      "p",
      "P",
      "dd"
    ],
    "task": "",
    "sequence": "dwyw",
    "code": [
      "const unused = 'remove me';",
      "const active = 'keep me';",
      "console.log(active);"
    ],
    "tip": "Return to any command in Basic Operators that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "d",
        "description": "Delete through the next word boundary.",
        "sequence": "dw",
        "code": [
          "const unused = 'remove me';",
          "const active = 'keep me';",
          "console.log(active);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "c",
        "description": "Change the current word to updated.",
        "sequence": "cwupdated<Esc>",
        "code": [
          "const unused = 'remove me';",
          "const active = 'keep me';",
          "console.log(active);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "y",
        "description": "Yank through the next word boundary.",
        "sequence": "yw",
        "code": [
          "const unused = 'remove me';",
          "const active = 'keep me';",
          "console.log(active);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "w",
        "description": "Combine delete with the w motion to remove through the next word boundary.",
        "sequence": "dw",
        "code": [
          "const unused = 'remove me';",
          "const active = 'keep me';",
          "console.log(active);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "D",
        "description": "Delete from the cursor to line end.",
        "sequence": "D",
        "code": [
          "const unused = 'remove me';",
          "const active = 'keep me';",
          "console.log(active);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "j",
        "description": "Use j as a linewise motion for deletion.",
        "sequence": "dj",
        "code": [
          "const unused = 'remove me';",
          "const active = 'keep me';",
          "console.log(active);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "k",
        "description": "Use k to delete this line and the previous line.",
        "sequence": "dk",
        "code": [
          "const unused = 'remove me';",
          "const active = 'keep me';",
          "console.log(active);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "p",
        "description": "Yank a line and put it below.",
        "sequence": "yyp",
        "code": [
          "const unused = 'remove me';",
          "const active = 'keep me';",
          "console.log(active);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "P",
        "description": "Yank a line and put it above.",
        "sequence": "yyP",
        "code": [
          "const unused = 'remove me';",
          "const active = 'keep me';",
          "console.log(active);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "dd",
        "description": "Delete the complete current line.",
        "sequence": "dd",
        "code": [
          "const unused = 'remove me';",
          "const active = 'keep me';",
          "console.log(active);"
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
