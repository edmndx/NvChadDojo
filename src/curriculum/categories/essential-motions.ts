import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Essential Motions",
    "id": "moving-big-words",
    "title": "Moving by WORDs",
    "eyebrow": "Essential Motions",
    "summary": "Uppercase word motions treat each whitespace-separated chunk as one WORD.",
    "detail": "Uppercase word motions treat each whitespace-separated chunk as one WORD.",
    "keys": [
      "W",
      "E",
      "B"
    ],
    "task": "Use W, E, then B.",
    "sequence": "WEB",
    "code": [
      "configureDefaults();",
      "enableServers(['html', 'css']);",
      "console.log(settings);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Use W, E, then B. · repetition 1 of 3",
        "code": [
          "configureDefaults();",
          "enableServers(['html', 'css']);",
          "console.log(settings);"
        ]
      },
      {
        "goal": "Use W, E, then B. · repetition 2 of 3",
        "code": [
          "const result = transform(input, options);",
          "const label = 'ready:production';",
          "console.log(result, label);"
        ]
      },
      {
        "goal": "Use W, E, then B. · repetition 3 of 3",
        "code": [
          "bindKey('findFiles', search.findFiles);",
          "bindKey('findText', search.findText);",
          "console.log(search);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Use W, E, then B.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: W, E, B."
      ],
      "success": "Moving by WORDs produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "W",
        "description": "Move to the next whitespace-separated WORD.",
        "sequence": "W"
      },
      {
        "key": "E",
        "description": "Move to the end of a WORD.",
        "sequence": "E"
      },
      {
        "key": "B",
        "description": "Move to the previous WORD beginning.",
        "sequence": "B"
      }
    ]
  },
  {
    "group": "Essential Motions",
    "id": "moving-line-ends",
    "title": "Moving to Line Ends",
    "eyebrow": "Essential Motions",
    "summary": "0 reaches column zero, _ reaches first non-blank text, and $ reaches the line end.",
    "detail": "0 reaches column zero, _ reaches first non-blank text, and $ reaches the line end.",
    "keys": [
      "0",
      "_",
      "$"
    ],
    "task": "Visit column zero, first text, then line end.",
    "sequence": "0_$",
    "code": [
      "if (ready) {",
      "  enableServers(['html', 'css']);",
      "}"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Visit column zero, first text, then line end. · repetition 1 of 3",
        "code": [
          "if (ready) {",
          "  enableServers(['html', 'css']);",
          "}"
        ]
      },
      {
        "goal": "Visit column zero, first text, then line end. · repetition 2 of 3",
        "code": [
          "if (ready) {",
          "  const label = 'ready:production';",
          "}"
        ]
      },
      {
        "goal": "Visit column zero, first text, then line end. · repetition 3 of 3",
        "code": [
          "if (ready) {",
          "  bindKey('findText', search.findText);",
          "}"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Visit column zero, first text, then line end.",
      "cursor": [
        1,
        5
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: 0, _, $."
      ],
      "alternatives": [
        "0_$",
        "0^$"
      ],
      "success": "Moving to Line Ends produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "0",
        "description": "Move to the first column of the line.",
        "sequence": "0"
      },
      {
        "key": "_",
        "description": "Move to the first non-blank character; a count selects a later line.",
        "sequence": "_"
      },
      {
        "key": "$",
        "description": "Move to the final character of the line.",
        "sequence": "$"
      }
    ]
  },
  {
    "group": "Essential Motions",
    "id": "find-character",
    "title": "Find Character",
    "eyebrow": "Essential Motions",
    "summary": "f and F find a character forward or backward; ; repeats that direction and , repeats it in reverse.",
    "detail": "The target character is part of the command. Repeating with ; keeps the last direction, while , deliberately reverses it.",
    "keys": [
      "f",
      "F",
      ";",
      ","
    ],
    "task": "Find commas forward, backward, and in both repeat directions.",
    "sequence": "f,;;F,;,",
    "code": [
      "const values = collect(alpha, beta, gamma, delta);",
      "notify(one, two, three, four);",
      "console.log(values);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Find commas forward, backward, and in both repeat directions. · repetition 1 of 3",
        "code": [
          "const values = collect(alpha, beta, gamma, delta);",
          "notify(one, two, three, four);",
          "console.log(values);"
        ]
      },
      {
        "goal": "Find commas forward, backward, and in both repeat directions. · repetition 2 of 3",
        "code": [
          "const result = transform(input, options, cache, logger);",
          "emit(name, status, duration, retries);",
          "console.log(result);"
        ]
      },
      {
        "goal": "Find commas forward, backward, and in both repeat directions. · repetition 3 of 3",
        "code": [
          "bindKey('normal', 'ff', search.findFiles, options);",
          "bindKey('normal', 'fw', search.findText, options);",
          "console.log(bindings);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Find commas forward with f and ;, backward with F and ;, then reverse once with ,.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Use ; for the same direction and , for the opposite direction."
      ],
      "success": "Find Character produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "f",
        "description": "Find the next comma.",
        "sequence": "f,"
      },
      {
        "key": "F",
        "description": "Go to line end, then find a comma backward.",
        "sequence": "$F,"
      },
      {
        "key": ";",
        "description": "Find a comma, then find the next comma in the same direction.",
        "sequence": "f,;"
      },
      {
        "key": ",",
        "description": "Find two commas forward, then find a comma in reverse.",
        "sequence": "f,;,"
      }
    ]
  },
  {
    "group": "Essential Motions",
    "id": "till-character",
    "title": "Till Character",
    "eyebrow": "Essential Motions",
    "summary": "t stops immediately before a target to the right; T stops immediately after a target to the left. ; repeats the motion and , reverses its direction.",
    "detail": "Unlike f and F, till motions leave the cursor adjacent to the target. Their repeat direction is still controlled by ; and ,.",
    "keys": [
      "t",
      "T",
      ";",
      ","
    ],
    "task": "Move till commas forward, backward, and in both repeat directions.",
    "sequence": "t,;;T,;,",
    "code": [
      "const values = collect(alpha, beta, gamma, delta);",
      "notify(one, two, three, four);",
      "console.log(values);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Move till commas forward, backward, and in both repeat directions. · repetition 1 of 3",
        "code": [
          "const values = collect(alpha, beta, gamma, delta);",
          "notify(one, two, three, four);",
          "console.log(values);"
        ]
      },
      {
        "goal": "Move till commas forward, backward, and in both repeat directions. · repetition 2 of 3",
        "code": [
          "const result = transform(input, options, cache, logger);",
          "emit(name, status, duration, retries);",
          "console.log(result);"
        ]
      },
      {
        "goal": "Move till commas forward, backward, and in both repeat directions. · repetition 3 of 3",
        "code": [
          "bindKey('normal', 'ff', search.findFiles, options);",
          "bindKey('normal', 'fw', search.findText, options);",
          "console.log(bindings);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Move till commas forward with t and ;, backward with T and ;, then reverse once with ,.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Use ; for the same direction and , for the opposite direction."
      ],
      "success": "Till Character produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "t",
        "description": "Stop immediately before the next comma.",
        "sequence": "t,"
      },
      {
        "key": "T",
        "description": "Go to line end, then stop immediately after a comma behind the cursor.",
        "sequence": "$T,"
      },
      {
        "key": ";",
        "description": "Stop before a comma, then repeat in the same direction.",
        "sequence": "t,;"
      },
      {
        "key": ",",
        "description": "Repeat a till motion in the opposite direction.",
        "sequence": "t,;,"
      }
    ]
  },
  {
    "group": "Essential Motions",
    "id": "essential-motions-review",
    "title": "Essential Motions Review",
    "eyebrow": "Essential Motions",
    "summary": "Review every command introduced in Essential Motions before moving to the next category.",
    "detail": "Review every command introduced in Essential Motions before moving to the next category.",
    "keys": [
      "W",
      "E",
      "B",
      "0",
      "_",
      "$",
      "f",
      "F",
      ";",
      "t",
      "T",
      ",",
      "t,;",
      "t,;,"
    ],
    "task": "",
    "sequence": "WEB",
    "code": [
      "if (ready) {",
      "  notify(one, two, three, four);",
      "}"
    ],
    "tip": "Return to any command in Essential Motions that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "W",
        "description": "Move to the next whitespace-separated WORD.",
        "sequence": "W",
        "code": [
          "configureDefaults();",
          "enableServers(['html', 'css']);",
          "console.log(settings);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "E",
        "description": "Move to the end of a WORD.",
        "sequence": "E",
        "code": [
          "configureDefaults();",
          "enableServers(['html', 'css']);",
          "console.log(settings);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "B",
        "description": "Move to the previous WORD beginning.",
        "sequence": "B",
        "code": [
          "configureDefaults();",
          "enableServers(['html', 'css']);",
          "console.log(settings);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "0",
        "description": "Move to the first column of the line.",
        "sequence": "0",
        "code": [
          "if (ready) {",
          "  enableServers(['html', 'css']);",
          "}"
        ],
        "cursor": [
          1,
          5
        ]
      },
      {
        "key": "_",
        "description": "Move to the first non-blank character; a count selects a later line.",
        "sequence": "_",
        "code": [
          "if (ready) {",
          "  enableServers(['html', 'css']);",
          "}"
        ],
        "cursor": [
          1,
          5
        ]
      },
      {
        "key": "$",
        "description": "Move to the final character of the line.",
        "sequence": "$",
        "code": [
          "if (ready) {",
          "  enableServers(['html', 'css']);",
          "}"
        ],
        "cursor": [
          1,
          5
        ]
      },
      {
        "key": "f",
        "description": "Find the next comma.",
        "sequence": "f,",
        "code": [
          "const values = collect(alpha, beta, gamma, delta);",
          "notify(one, two, three, four);",
          "console.log(values);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "F",
        "description": "Go to line end, then find a comma backward.",
        "sequence": "$F,",
        "code": [
          "const values = collect(alpha, beta, gamma, delta);",
          "notify(one, two, three, four);",
          "console.log(values);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": ";",
        "description": "Find a comma, then find the next comma in the same direction.",
        "sequence": "f,;",
        "code": [
          "const values = collect(alpha, beta, gamma, delta);",
          "notify(one, two, three, four);",
          "console.log(values);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "t",
        "description": "Stop immediately before the next comma.",
        "sequence": "t,",
        "code": [
          "const values = collect(alpha, beta, gamma, delta);",
          "notify(one, two, three, four);",
          "console.log(values);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "T",
        "description": "Go to line end, then stop immediately after a comma behind the cursor.",
        "sequence": "$T,",
        "code": [
          "const values = collect(alpha, beta, gamma, delta);",
          "notify(one, two, three, four);",
          "console.log(values);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": ",",
        "description": "Find two commas forward, then find a comma in reverse.",
        "sequence": "f,;,",
        "code": [
          "const values = collect(alpha, beta, gamma, delta);",
          "notify(one, two, three, four);",
          "console.log(values);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "t,;",
        "description": "Stop before a comma, then repeat in the same direction.",
        "sequence": "t,;",
        "code": [
          "const values = collect(alpha, beta, gamma, delta);",
          "notify(one, two, three, four);",
          "console.log(values);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "t,;,",
        "description": "Repeat a till motion in the opposite direction.",
        "sequence": "t,;,",
        "code": [
          "const values = collect(alpha, beta, gamma, delta);",
          "notify(one, two, three, four);",
          "console.log(values);"
        ],
        "cursor": [
          1,
          0
        ]
      }
    ],
    "cursor": [
      1,
      5
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
