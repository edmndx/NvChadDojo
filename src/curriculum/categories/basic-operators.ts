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
    "task": "Delete a word, then yank a word.",
    "sequence": "dwyw",
    "code": [
      "local unused = 'remove me'",
      "local active = 'keep me'",
      "return active"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Delete a word, then yank a word. · repetition 1 of 3",
        "code": [
          "local unused = 'remove me'",
          "local active = 'keep me'",
          "return active"
        ]
      },
      {
        "goal": "Delete a word, then yank a word. · repetition 2 of 3",
        "code": [
          "local old_name = calculate_total(items)",
          "notify(old_name)",
          "return old_name"
        ]
      },
      {
        "goal": "Delete a word, then yank a word. · repetition 3 of 3",
        "code": [
          "-- duplicate this configuration",
          "base46.theme = 'onedark'",
          "return base46"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Delete a word, then yank a word.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with d.",
        "Use only the keys introduced in Basic Operators.",
        "Compose the command from: d, c, y."
      ],
      "success": "Intro to Operators produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Basic Operators",
    "id": "delete-words",
    "title": "Delete Words",
    "eyebrow": "Basic Operators",
    "summary": "Combine delete with the w motion to remove through the next word boundary.",
    "detail": "Combine delete with the w motion to remove through the next word boundary.",
    "keys": [
      "d",
      "w"
    ],
    "task": "Practice delete words.",
    "sequence": "dw",
    "code": [
      "local unused = 'remove me'",
      "local active = 'keep me'",
      "return active"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice delete words. · repetition 1 of 3",
        "code": [
          "local unused = 'remove me'",
          "local active = 'keep me'",
          "return active"
        ]
      },
      {
        "goal": "Practice delete words. · repetition 2 of 3",
        "code": [
          "local old_name = calculate_total(items)",
          "notify(old_name)",
          "return old_name"
        ]
      },
      {
        "goal": "Practice delete words. · repetition 3 of 3",
        "code": [
          "-- duplicate this configuration",
          "base46.theme = 'onedark'",
          "return base46"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Practice delete words.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with d.",
        "Use only the keys introduced in Basic Operators.",
        "Compose the command from: d, w."
      ],
      "alternatives": [
        "dw",
        "de"
      ],
      "success": "Delete Words produced the requested buffer and cursor state."
    }
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
    "sequence": "cw<Esc>",
    "code": [
      "local unused = 'remove me'",
      "local active = 'keep me'",
      "return active"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Change a word, then return to Normal mode. · repetition 1 of 3",
        "code": [
          "local unused = 'remove me'",
          "local active = 'keep me'",
          "return active"
        ]
      },
      {
        "goal": "Change a word, then return to Normal mode. · repetition 2 of 3",
        "code": [
          "local old_name = calculate_total(items)",
          "notify(old_name)",
          "return old_name"
        ]
      },
      {
        "goal": "Change a word, then return to Normal mode. · repetition 3 of 3",
        "code": [
          "-- duplicate this configuration",
          "base46.theme = 'onedark'",
          "return base46"
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
        "Begin with c.",
        "Use only the keys introduced in Basic Operators.",
        "Enter “catppuccin” before returning to Normal mode."
      ],
      "success": "The buffer now contains “catppuccin” in the intended location."
    }
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
      "local unused = 'remove me'",
      "local active = 'keep me'",
      "return active"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Delete a line, then delete to line end. · repetition 1 of 3",
        "code": [
          "local unused = 'remove me'",
          "local active = 'keep me'",
          "return active"
        ]
      },
      {
        "goal": "Delete a line, then delete to line end. · repetition 2 of 3",
        "code": [
          "local old_name = calculate_total(items)",
          "notify(old_name)",
          "return old_name"
        ]
      },
      {
        "goal": "Delete a line, then delete to line end. · repetition 3 of 3",
        "code": [
          "-- duplicate this configuration",
          "base46.theme = 'onedark'",
          "return base46"
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
        "Begin with d.",
        "Use only the keys introduced in Basic Operators.",
        "Compose the command from: d, d, D."
      ],
      "success": "Delete Lines produced the requested buffer and cursor state."
    }
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
    "task": "Delete downward, then upward.",
    "sequence": "djdk",
    "code": [
      "local unused = 'remove me'",
      "local active = 'keep me'",
      "return active"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Delete downward, then upward. · repetition 1 of 3",
        "code": [
          "local unused = 'remove me'",
          "local active = 'keep me'",
          "return active"
        ]
      },
      {
        "goal": "Delete downward, then upward. · repetition 2 of 3",
        "code": [
          "local old_name = calculate_total(items)",
          "notify(old_name)",
          "return old_name"
        ]
      },
      {
        "goal": "Delete downward, then upward. · repetition 3 of 3",
        "code": [
          "-- duplicate this configuration",
          "base46.theme = 'onedark'",
          "return base46"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Delete downward, then upward.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with d.",
        "Use only the keys introduced in Basic Operators.",
        "Compose the command from: d, j, k."
      ],
      "success": "Delete Multiple Lines produced the requested buffer and cursor state."
    }
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
      "local unused = 'remove me'",
      "local active = 'keep me'",
      "return active"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Yank a line, then put below and above. · repetition 1 of 3",
        "code": [
          "local unused = 'remove me'",
          "local active = 'keep me'",
          "return active"
        ]
      },
      {
        "goal": "Yank a line, then put below and above. · repetition 2 of 3",
        "code": [
          "local old_name = calculate_total(items)",
          "notify(old_name)",
          "return old_name"
        ]
      },
      {
        "goal": "Yank a line, then put below and above. · repetition 3 of 3",
        "code": [
          "-- duplicate this configuration",
          "base46.theme = 'onedark'",
          "return base46"
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
        "Begin with y.",
        "Use only the keys introduced in Basic Operators.",
        "Compose the command from: y, p, P."
      ],
      "success": "Copy/Paste Lines produced the requested buffer and cursor state."
    }
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
      "P"
    ],
    "task": "",
    "sequence": "dwyw",
    "code": [
      "local unused = 'remove me'",
      "local active = 'keep me'",
      "return active"
    ],
    "tip": "Return to any command in Basic Operators that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "d",
        "description": "Operators combine with motions: d deletes, c changes, and y copies.",
        "sequence": "dwyw"
      },
      {
        "key": "c",
        "description": "Operators combine with motions: d deletes, c changes, and y copies.",
        "sequence": "dwyw"
      },
      {
        "key": "y",
        "description": "Operators combine with motions: d deletes, c changes, and y copies.",
        "sequence": "dwyw"
      },
      {
        "key": "w",
        "description": "Combine delete with the w motion to remove through the next word boundary.",
        "sequence": "dw"
      },
      {
        "key": "D",
        "description": "dd deletes a complete line; D deletes from the cursor to the line end.",
        "sequence": "ddD"
      },
      {
        "key": "j",
        "description": "dj deletes this line and the one below; dk covers this line and the one above.",
        "sequence": "djdk"
      },
      {
        "key": "k",
        "description": "dj deletes this line and the one below; dk covers this line and the one above.",
        "sequence": "djdk"
      },
      {
        "key": "p",
        "description": "yy yanks a full line, p puts it below, and P puts it above.",
        "sequence": "yypP"
      },
      {
        "key": "P",
        "description": "yy yanks a full line, p puts it below, and P puts it above.",
        "sequence": "yypP"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
