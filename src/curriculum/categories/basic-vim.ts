import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Basic Vim",
    "id": "basic-movement",
    "title": "Basic Movement",
    "eyebrow": "Basic Vim",
    "summary": "Move left, down, up, and right without leaving the home row.",
    "detail": "Move left, down, up, and right without leaving the home row.",
    "keys": [
      "h",
      "j",
      "k",
      "l"
    ],
    "task": "Move in all four directions: h, j, k, l.",
    "sequence": "hjkl",
    "code": [
      "const theme = 'onedark';",
      "const contrast = 'high';",
      "console.log(theme, contrast);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Move in all four directions: h, j, k, l. · repetition 1 of 3",
        "code": [
          "const theme = 'onedark';",
          "const contrast = 'high';",
          "console.log(theme, contrast);"
        ]
      },
      {
        "goal": "Move in all four directions: h, j, k, l. · repetition 2 of 3",
        "code": [
          "settings.lineNumbers = true;",
          "settings.mouse = 'all';",
          "settings.wrap = false;"
        ]
      },
      {
        "goal": "Move in all four directions: h, j, k, l. · repetition 3 of 3",
        "code": [
          "loadOptions();",
          "loadMappings();",
          "loadPlugins();"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Move in all four directions: h, j, k, l.",
      "cursor": [
        1,
        2
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: h, j, k, l."
      ],
      "success": "Basic Movement produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "h",
        "description": "Move one character left.",
        "sequence": "h"
      },
      {
        "key": "j",
        "description": "Move one buffer line down.",
        "sequence": "j"
      },
      {
        "key": "k",
        "description": "Move one buffer line up.",
        "sequence": "k"
      },
      {
        "key": "l",
        "description": "Move one character right.",
        "sequence": "l"
      }
    ]
  },
  {
    "group": "Basic Vim",
    "id": "moving-words",
    "title": "Moving by Words",
    "eyebrow": "Basic Vim",
    "summary": "w reaches the next word, e its end, and b the previous beginning.",
    "detail": "w reaches the next word, e its end, and b the previous beginning.",
    "keys": [
      "w",
      "e",
      "b"
    ],
    "task": "Use w, e, then b.",
    "sequence": "web",
    "code": [
      "const theme = 'onedark';",
      "const contrast = 'high';",
      "console.log(theme, contrast);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Use w, e, then b. · repetition 1 of 3",
        "code": [
          "const theme = 'onedark';",
          "const contrast = 'high';",
          "console.log(theme, contrast);"
        ]
      },
      {
        "goal": "Use w, e, then b. · repetition 2 of 3",
        "code": [
          "settings.lineNumbers = true;",
          "settings.mouse = 'all';",
          "settings.wrap = false;"
        ]
      },
      {
        "goal": "Use w, e, then b. · repetition 3 of 3",
        "code": [
          "loadOptions();",
          "loadMappings();",
          "loadPlugins();"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Use w, e, then b.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: w, e, b."
      ],
      "success": "Moving by Words produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "w",
        "description": "Move to the next word beginning.",
        "sequence": "w"
      },
      {
        "key": "e",
        "description": "Move to the end of a word.",
        "sequence": "e"
      },
      {
        "key": "b",
        "description": "Move to the previous word beginning.",
        "sequence": "b"
      }
    ]
  },
  {
    "group": "Basic Vim",
    "id": "insert-mode",
    "title": "Insert Mode",
    "eyebrow": "Basic Vim",
    "summary": "i inserts before the cursor, a appends after it, and Escape returns to Normal mode.",
    "detail": "The cursor starts on | inside a JavaScript string. i inserts before that character; a inserts after it. Both edits keep the declaration intact.",
    "keys": [
      "i",
      "a",
      "Esc"
    ],
    "task": "Add * before the | character with i, or after it with a, inside the label string. Press Esc to finish each edit.",
    "sequence": "i*<Esc>la*<Esc>",
    "code": [
      "const stage = 'build';",
      "const label = 'draft|ready';",
      "console.log(stage, label);"
    ],
    "tip": "After Esc, the cursor rests on the last inserted character. In the combined example, l returns to | before a appends after it.",
    "drills": [
      {
        "goal": "Add * before the | character with i, or after it with a, inside the label string. Press Esc to finish each edit. · repetition 1 of 3",
        "code": [
          "const stage = 'build';",
          "const label = 'draft|ready';",
          "console.log(stage, label);"
        ]
      },
      {
        "goal": "Add * before the | character with i, or after it with a, inside the label string. Press Esc to finish each edit. · repetition 2 of 3",
        "code": [
          "const stage = 'validate';",
          "const label = 'input|check';",
          "console.log(stage, label);"
        ]
      },
      {
        "goal": "Add * before the | character with i, or after it with a, inside the label string. Press Esc to finish each edit. · repetition 3 of 3",
        "code": [
          "const stage = 'deploy';",
          "const label = 'start|finish';",
          "console.log(stage, label);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Add * before the | character with i, or after it with a, inside the label string. Press Esc to finish each edit.",
      "replacement": "*",
      "cursor": [
        1,
        20
      ],
      "hints": [
        "The cursor starts on | inside the string.",
        "Use i for the position before | or a for the position after it.",
        "Type * and press Esc; keep the quotes and declaration intact."
      ],
      "success": "The label string contains the requested marker and remains valid JavaScript."
    },
    "reviewItems": [
      {
        "key": "i",
        "description": "Insert * immediately before | inside the label string, then press Esc.",
        "sequence": "i*<Esc>"
      },
      {
        "key": "a",
        "description": "Append * immediately after | inside the label string, then press Esc.",
        "sequence": "a*<Esc>"
      },
      {
        "key": "Esc",
        "description": "Finish inserting * inside the string and return to Normal mode.",
        "sequence": "i*<Esc>"
      }
    ]
  },
  {
    "group": "Basic Vim",
    "id": "basic-vim-review",
    "title": "Basic Vim Review",
    "eyebrow": "Basic Vim",
    "summary": "Review every command introduced in Basic Vim before moving to the next category.",
    "detail": "Review every command introduced in Basic Vim before moving to the next category.",
    "keys": [
      "h",
      "j",
      "k",
      "l",
      "w",
      "e",
      "b",
      "i",
      "a",
      "Esc"
    ],
    "task": "",
    "sequence": "hjkl",
    "code": [
      "const theme = 'onedark';",
      "const contrast = 'high';",
      "console.log(theme, contrast);"
    ],
    "tip": "Return to any command in Basic Vim that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "h",
        "description": "Move one character left.",
        "sequence": "h",
        "code": [
          "const theme = 'onedark';",
          "const contrast = 'high';",
          "console.log(theme, contrast);"
        ],
        "cursor": [
          1,
          2
        ]
      },
      {
        "key": "j",
        "description": "Move one buffer line down.",
        "sequence": "j",
        "code": [
          "const theme = 'onedark';",
          "const contrast = 'high';",
          "console.log(theme, contrast);"
        ],
        "cursor": [
          1,
          2
        ]
      },
      {
        "key": "k",
        "description": "Move one buffer line up.",
        "sequence": "k",
        "code": [
          "const theme = 'onedark';",
          "const contrast = 'high';",
          "console.log(theme, contrast);"
        ],
        "cursor": [
          1,
          2
        ]
      },
      {
        "key": "l",
        "description": "Move one character right.",
        "sequence": "l",
        "code": [
          "const theme = 'onedark';",
          "const contrast = 'high';",
          "console.log(theme, contrast);"
        ],
        "cursor": [
          1,
          2
        ]
      },
      {
        "key": "w",
        "description": "Move to the next word beginning.",
        "sequence": "w",
        "code": [
          "const theme = 'onedark';",
          "const contrast = 'high';",
          "console.log(theme, contrast);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "e",
        "description": "Move to the end of a word.",
        "sequence": "e",
        "code": [
          "const theme = 'onedark';",
          "const contrast = 'high';",
          "console.log(theme, contrast);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "b",
        "description": "Move to the previous word beginning.",
        "sequence": "b",
        "code": [
          "const theme = 'onedark';",
          "const contrast = 'high';",
          "console.log(theme, contrast);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "i",
        "description": "Insert * immediately before | inside the label string, then press Esc.",
        "sequence": "i*<Esc>",
        "code": [
          "const stage = 'build';",
          "const label = 'draft|ready';",
          "console.log(stage, label);"
        ],
        "cursor": [
          1,
          20
        ]
      },
      {
        "key": "a",
        "description": "Append * immediately after | inside the label string, then press Esc.",
        "sequence": "a*<Esc>",
        "code": [
          "const stage = 'build';",
          "const label = 'draft|ready';",
          "console.log(stage, label);"
        ],
        "cursor": [
          1,
          20
        ]
      },
      {
        "key": "Esc",
        "description": "Finish inserting * inside the string and return to Normal mode.",
        "sequence": "i*<Esc>",
        "code": [
          "const stage = 'build';",
          "const label = 'draft|ready';",
          "console.log(stage, label);"
        ],
        "cursor": [
          1,
          20
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
