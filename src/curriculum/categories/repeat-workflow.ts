import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Repeat Workflow",
    "id": "repeat-last-change",
    "title": "Repeat Last Change",
    "eyebrow": "Repeat Workflow",
    "summary": "The dot command repeats the most recent change at the current cursor position.",
    "detail": "The dot command repeats the most recent change at the current cursor position.",
    "keys": [
      "."
    ],
    "task": "Repeat the previous edit once.",
    "sequence": ".",
    "code": [
      "const firstItem = 'alpha';",
      "const secondItem = 'beta';",
      "const thirdItem = 'gamma';"
    ],
    "tip": "The practice buffer seeds x as the previous change. In your editor, make a change before using dot.",
    "drills": [
      {
        "goal": "Repeat the previous edit once. · repetition 1 of 3",
        "code": [
          "const firstItem = 'alpha';",
          "const secondItem = 'beta';",
          "const thirdItem = 'gamma';"
        ]
      },
      {
        "goal": "Repeat the previous edit once. · repetition 2 of 3",
        "code": [
          "enable('html');",
          "enable('cssls');",
          "enable('ts_ls');"
        ]
      },
      {
        "goal": "Repeat the previous edit once. · repetition 3 of 3",
        "code": [
          "theme.old = true;",
          "theme.old = true;",
          "theme.old = true;"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Repeat the previous edit once.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: .."
      ],
      "success": "Repeat Last Change produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": ".",
        "description": "The dot command repeats the most recent change at the current cursor position.",
        "sequence": "."
      }
    ]
  },
  {
    "group": "Repeat Workflow",
    "id": "repeat-with-count",
    "title": "Repeat with a Count",
    "eyebrow": "Repeat Workflow",
    "summary": "A count before dot replaces the count of the previous change.",
    "detail": "With x seeded as the previous edit, 3. deletes three characters as one repeated change. It does not run three separate undoable edits.",
    "keys": [
      "3",
      "."
    ],
    "task": "Use 3. to repeat the seeded deletion with a count of three.",
    "sequence": "3.",
    "code": [
      "const firstItem = 'alpha';",
      "const secondItem = 'beta';",
      "const thirdItem = 'gamma';"
    ],
    "tip": "The practice buffer seeds x as the previous change; 3. repeats it as 3x.",
    "drills": [
      {
        "goal": "Use 3. to repeat the seeded deletion with a count of three. · repetition 1 of 3",
        "code": [
          "const firstItem = 'alpha';",
          "const secondItem = 'beta';",
          "const thirdItem = 'gamma';"
        ]
      },
      {
        "goal": "Use 3. to repeat the seeded deletion with a count of three. · repetition 2 of 3",
        "code": [
          "enable('html');",
          "enable('cssls');",
          "enable('ts_ls');"
        ]
      },
      {
        "goal": "Use 3. to repeat the seeded deletion with a count of three. · repetition 3 of 3",
        "code": [
          "theme.old = true;",
          "theme.old = true;",
          "theme.old = true;"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Use 3. to repeat the seeded deletion with a count of three.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: 3, .."
      ],
      "success": "Repeat with a Count produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "3",
        "description": "A count before dot replaces the count of the previous change.",
        "sequence": "3."
      },
      {
        "key": ".",
        "description": "A count before dot replaces the count of the previous change.",
        "sequence": "3."
      }
    ]
  },
  {
    "group": "Repeat Workflow",
    "id": "repeat-ex-command",
    "title": "Repeat Last Ex Command",
    "eyebrow": "Repeat Workflow",
    "summary": "@: executes the latest command-line command again.",
    "detail": "@: executes the latest command-line command again.",
    "keys": [
      "@",
      ":"
    ],
    "task": "Run :set number, then repeat that command with @:.",
    "sequence": ":set number<Enter>@:",
    "code": [
      "const firstItem = 'alpha';",
      "const secondItem = 'beta';",
      "const thirdItem = 'gamma';"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Run :set number, then repeat that command with @:. · repetition 1 of 3",
        "code": [
          "const firstItem = 'alpha';",
          "const secondItem = 'beta';",
          "const thirdItem = 'gamma';"
        ]
      },
      {
        "goal": "Run :set number, then repeat that command with @:. · repetition 2 of 3",
        "code": [
          "enable('html');",
          "enable('cssls');",
          "enable('ts_ls');"
        ]
      },
      {
        "goal": "Run :set number, then repeat that command with @:. · repetition 3 of 3",
        "code": [
          "theme.old = true;",
          "theme.old = true;",
          "theme.old = true;"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Run :set number, then repeat that command with @:.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: @, :."
      ],
      "success": "Repeat Last Ex Command produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "@",
        "description": "@: executes the latest command-line command again.",
        "sequence": ":set number<Enter>@:"
      },
      {
        "key": ":",
        "description": "@: executes the latest command-line command again.",
        "sequence": ":set number<Enter>@:"
      }
    ]
  },
  {
    "group": "Repeat Workflow",
    "id": "repeat-workflow-review",
    "title": "Repeat Workflow Review",
    "eyebrow": "Repeat Workflow",
    "summary": "Review every command introduced in Repeat Workflow before moving to the next category.",
    "detail": "Review every command introduced in Repeat Workflow before moving to the next category.",
    "keys": [
      ".",
      "3",
      "@",
      ":"
    ],
    "task": "",
    "sequence": ".",
    "code": [
      "const firstItem = 'alpha';",
      "const secondItem = 'beta';",
      "const thirdItem = 'gamma';"
    ],
    "tip": "Return to any command in Repeat Workflow that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": ".",
        "description": "Delete a character, undo, then repeat the deletion with dot.",
        "sequence": "xu.",
        "code": [
          "const firstItem = 'alpha';",
          "const secondItem = 'beta';",
          "const thirdItem = 'gamma';"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "3",
        "description": "Delete a character, undo, then repeat with the original count replaced by three.",
        "sequence": "xu3.",
        "code": [
          "const firstItem = 'alpha';",
          "const secondItem = 'beta';",
          "const thirdItem = 'gamma';"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "@",
        "description": "@: executes the latest command-line command again.",
        "sequence": ":set number<Enter>@:",
        "code": [
          "const firstItem = 'alpha';",
          "const secondItem = 'beta';",
          "const thirdItem = 'gamma';"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": ":",
        "description": "@: executes the latest command-line command again.",
        "sequence": ":set number<Enter>@:",
        "code": [
          "const firstItem = 'alpha';",
          "const secondItem = 'beta';",
          "const thirdItem = 'gamma';"
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
