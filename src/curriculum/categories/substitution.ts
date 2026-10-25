import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Substitution",
    "id": "substitute-once",
    "title": "Replace Once",
    "eyebrow": "Substitution",
    "summary": ":s replaces the first matching occurrence on the current line.",
    "detail": ":s replaces the first matching occurrence on the current line.",
    "keys": [
      ":s",
      "Enter"
    ],
    "task": "Replace old with new on the current line.",
    "sequence": ":s/old/new<Enter>",
    "code": [
      "const oldValue = config.oldValue;",
      "notify('old value');",
      "console.log(oldValue);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Replace old with new on the current line. · repetition 1 of 3",
        "code": [
          "const oldValue = config.oldValue;",
          "notify('old value');",
          "console.log(oldValue);"
        ]
      },
      {
        "goal": "Replace old with new on the current line. · repetition 2 of 3",
        "code": [
          "const oldName = oldValue;",
          "const oldLabel = oldName;",
          "console.log(oldLabel);"
        ]
      },
      {
        "goal": "Replace old with new on the current line. · repetition 3 of 3",
        "code": [
          "const theme = 'old';",
          "const fallback = 'old';",
          "console.log(theme);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Replace old with new on the current line.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: :s, Enter."
      ],
      "success": "Replace Once produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": ":s",
        "description": ":s replaces the first matching occurrence on the current line.",
        "sequence": ":s/old/new<Enter>"
      },
      {
        "key": "Enter",
        "description": ":s replaces the first matching occurrence on the current line.",
        "sequence": ":s/old/new<Enter>"
      }
    ]
  },
  {
    "group": "Substitution",
    "id": "substitute-file",
    "title": "Replace Throughout a File",
    "eyebrow": "Substitution",
    "summary": ":%s with the g flag replaces every matching occurrence in the buffer.",
    "detail": ":%s with the g flag replaces every matching occurrence in the buffer.",
    "keys": [
      ":%s",
      "g"
    ],
    "task": "Replace every old value in the file.",
    "sequence": ":%s/old/new/g<Enter>",
    "code": [
      "const oldValue = config.oldValue;",
      "notify('old value');",
      "console.log(oldValue);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Replace every old value in the file. · repetition 1 of 3",
        "code": [
          "const oldValue = config.oldValue;",
          "notify('old value');",
          "console.log(oldValue);"
        ]
      },
      {
        "goal": "Replace every old value in the file. · repetition 2 of 3",
        "code": [
          "const oldName = oldValue;",
          "const oldLabel = oldName;",
          "console.log(oldLabel);"
        ]
      },
      {
        "goal": "Replace every old value in the file. · repetition 3 of 3",
        "code": [
          "const theme = 'old';",
          "const fallback = 'old';",
          "console.log(theme);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Replace every old value in the file.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: :%s, g."
      ],
      "success": "Replace Throughout a File produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": ":%s",
        "description": ":%s with the g flag replaces every matching occurrence in the buffer.",
        "sequence": ":%s/old/new/g<Enter>"
      },
      {
        "key": "g",
        "description": ":%s with the g flag replaces every matching occurrence in the buffer.",
        "sequence": ":%s/old/new/g<Enter>"
      }
    ]
  },
  {
    "group": "Substitution",
    "id": "confirm-substitution",
    "title": "Confirm Replacements",
    "eyebrow": "Substitution",
    "summary": "The c flag pauses at each match; y accepts, n skips, a accepts all, l replaces the current match and stops, and q stops.",
    "detail": "Submitting :%s with gc opens a confirmation stage instead of replacing immediately. This exercise accepts one match, skips one, then uses l to replace the current match and stop.",
    "keys": [
      ":%s",
      "gc",
      "y",
      "n",
      "a",
      "l",
      "q"
    ],
    "task": "Start a confirmed replacement, accept one match, skip one, then replace the current match and stop.",
    "sequence": ":%s/old/new/gc<Enter>ynl",
    "code": [
      "const oldValue = config.oldValue;",
      "notify('old value');",
      "console.log(oldValue);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Start a confirmed replacement, accept one match, skip one, then replace the current match and stop. · repetition 1 of 3",
        "code": [
          "const oldValue = config.oldValue;",
          "notify('old value');",
          "console.log(oldValue);"
        ]
      },
      {
        "goal": "Start a confirmed replacement, accept one match, skip one, then replace the current match and stop. · repetition 2 of 3",
        "code": [
          "const oldName = oldValue;",
          "const oldLabel = oldName;",
          "console.log(oldLabel);"
        ]
      },
      {
        "goal": "Start a confirmed replacement, accept one match, skip one, then replace the current match and stop. · repetition 3 of 3",
        "code": [
          "const theme = 'old';",
          "const fallback = 'old';",
          "const label = 'old';",
          "console.log(theme);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Run the confirmed replacement, press y for the first match, n for the second, then l to replace the current match and stop.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "After Enter, use y, n, then l at the confirmation prompts."
      ],
      "success": "Confirm Replacements produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": ":%s",
        "description": "The c flag pauses at each match; y accepts, n skips, a accepts all, l replaces the current match and stops, and q stops.",
        "sequence": ":%s/old/new/gc<Enter>ynl"
      },
      {
        "key": "gc",
        "description": "The c flag pauses at each match; y accepts, n skips, a accepts all, l replaces the current match and stops, and q stops.",
        "sequence": ":%s/old/new/gc<Enter>ynl"
      },
      {
        "key": "y",
        "description": "Accept the first replacement, then quit.",
        "sequence": ":%s/old/new/gc<Enter>yq"
      },
      {
        "key": "n",
        "description": "Skip the first match, then quit.",
        "sequence": ":%s/old/new/gc<Enter>nq"
      },
      {
        "key": "a",
        "description": "Accept this replacement and every remaining match.",
        "sequence": ":%s/old/new/gc<Enter>a"
      },
      {
        "key": "l",
        "description": "Replace this match and stop, even if more matches remain.",
        "sequence": ":%s/old/new/gc<Enter>l"
      },
      {
        "key": "q",
        "description": "Quit confirmation without replacing the current match.",
        "sequence": ":%s/old/new/gc<Enter>q"
      }
    ]
  },
  {
    "group": "Substitution",
    "id": "reuse-search",
    "title": "Reuse the Previous Search",
    "eyebrow": "Substitution",
    "summary": "An empty substitute pattern reuses the latest search pattern.",
    "detail": "An empty substitute pattern reuses the latest search pattern.",
    "keys": [
      ":%s//",
      "g"
    ],
    "task": "Replace every match from the previous search.",
    "sequence": ":%s//new/g<Enter>",
    "code": [
      "const oldValue = config.oldValue;",
      "notify('old value');",
      "console.log(oldValue);"
    ],
    "tip": "The practice buffer starts with old as the last search pattern. In your editor, search for /old before using an empty substitute pattern.",
    "drills": [
      {
        "goal": "Replace every match from the previous search. · repetition 1 of 3",
        "code": [
          "const oldValue = config.oldValue;",
          "notify('old value');",
          "console.log(oldValue);"
        ]
      },
      {
        "goal": "Replace every match from the previous search. · repetition 2 of 3",
        "code": [
          "const oldName = oldValue;",
          "const oldLabel = oldName;",
          "console.log(oldLabel);"
        ]
      },
      {
        "goal": "Replace every match from the previous search. · repetition 3 of 3",
        "code": [
          "const theme = 'old';",
          "const fallback = 'old';",
          "console.log(theme);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Replace every match from the previous search.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: :%s//, g."
      ],
      "success": "Reuse the Previous Search produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": ":%s//",
        "description": "An empty substitute pattern reuses the latest search pattern.",
        "sequence": ":%s//new/g<Enter>"
      },
      {
        "key": "g",
        "description": "An empty substitute pattern reuses the latest search pattern.",
        "sequence": ":%s//new/g<Enter>"
      }
    ]
  },
  {
    "group": "Substitution",
    "id": "substitution-review",
    "title": "Substitution Review",
    "eyebrow": "Substitution",
    "summary": "Review every command introduced in Substitution before moving to the next category.",
    "detail": "Review every command introduced in Substitution before moving to the next category.",
    "keys": [
      ":s",
      "Enter",
      ":%s",
      "g",
      "gc",
      "y",
      "n",
      "a",
      "l",
      "q",
      ":%s//"
    ],
    "task": "",
    "sequence": ":s/old/new<Enter>",
    "code": [
      "const oldValue = config.oldValue;",
      "notify('old value');",
      "console.log(oldValue);"
    ],
    "tip": "Return to any command in Substitution that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": ":s",
        "description": ":s replaces the first matching occurrence on the current line.",
        "sequence": ":s/old/new<Enter>",
        "code": [
          "const oldValue = config.oldValue;",
          "notify('old value');",
          "console.log(oldValue);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "Enter",
        "description": ":s replaces the first matching occurrence on the current line.",
        "sequence": ":s/old/new<Enter>",
        "code": [
          "const oldValue = config.oldValue;",
          "notify('old value');",
          "console.log(oldValue);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": ":%s",
        "description": ":%s with the g flag replaces every matching occurrence in the buffer.",
        "sequence": ":%s/old/new/g<Enter>",
        "code": [
          "const oldValue = config.oldValue;",
          "notify('old value');",
          "console.log(oldValue);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "g",
        "description": ":%s with the g flag replaces every matching occurrence in the buffer.",
        "sequence": ":%s/old/new/g<Enter>",
        "code": [
          "const oldValue = config.oldValue;",
          "notify('old value');",
          "console.log(oldValue);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "gc",
        "description": "The c flag pauses at each match; y accepts, n skips, a accepts all, l replaces the current match and stops, and q stops.",
        "sequence": ":%s/old/new/gc<Enter>ynl",
        "code": [
          "const oldValue = config.oldValue;",
          "notify('old value');",
          "console.log(oldValue);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "y",
        "description": "Accept the first replacement, then quit.",
        "sequence": ":%s/old/new/gc<Enter>yq",
        "code": [
          "const oldValue = config.oldValue;",
          "notify('old value');",
          "console.log(oldValue);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "n",
        "description": "Skip the first match, then quit.",
        "sequence": ":%s/old/new/gc<Enter>nq",
        "code": [
          "const oldValue = config.oldValue;",
          "notify('old value');",
          "console.log(oldValue);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "a",
        "description": "Accept this replacement and every remaining match.",
        "sequence": ":%s/old/new/gc<Enter>a",
        "code": [
          "const oldValue = config.oldValue;",
          "notify('old value');",
          "console.log(oldValue);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "l",
        "description": "Replace this match and stop, even if more matches remain.",
        "sequence": ":%s/old/new/gc<Enter>l",
        "code": [
          "const oldValue = config.oldValue;",
          "notify('old value');",
          "console.log(oldValue);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "q",
        "description": "Quit confirmation without replacing the current match.",
        "sequence": ":%s/old/new/gc<Enter>q",
        "code": [
          "const oldValue = config.oldValue;",
          "notify('old value');",
          "console.log(oldValue);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": ":%s//",
        "description": "An empty substitute pattern reuses the latest search pattern.",
        "sequence": ":%s//new/g<Enter>",
        "code": [
          "const oldValue = config.oldValue;",
          "notify('old value');",
          "console.log(oldValue);"
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
