import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Editing Safety",
    "id": "undo-change",
    "title": "Undo the Last Change",
    "eyebrow": "Editing Safety",
    "summary": "u reverses the latest change so experimentation stays safe.",
    "detail": "u reverses the latest change so experimentation stays safe.",
    "keys": [
      "x",
      "u"
    ],
    "task": "Delete one character with x, then undo that edit.",
    "sequence": "xu",
    "code": [
      "const theme = 'old-theme';",
      "const contrast = 'high';",
      "console.log(theme, contrast);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Delete one character with x, then undo that edit. · repetition 1 of 3",
        "code": [
          "const theme = 'old-theme';",
          "const contrast = 'high';",
          "console.log(theme, contrast);"
        ]
      },
      {
        "goal": "Delete one character with x, then undo that edit. · repetition 2 of 3",
        "code": [
          "settings.wrap = true;",
          "settings.lineNumbers = true;",
          "console.log(settings);"
        ]
      },
      {
        "goal": "Delete one character with x, then undo that edit. · repetition 3 of 3",
        "code": [
          "const server = 'typescript';",
          "enable(server);",
          "console.log(server);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Delete one character with x, then undo that edit.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: x, u."
      ],
      "success": "Undo the Last Change produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "x",
        "description": "Delete the character under the cursor.",
        "sequence": "xu"
      },
      {
        "key": "u",
        "description": "Undo the latest change.",
        "sequence": "xu"
      }
    ]
  },
  {
    "group": "Editing Safety",
    "id": "redo-change",
    "title": "Redo an Undo",
    "eyebrow": "Editing Safety",
    "summary": "Ctrl+r reapplies the change most recently removed by undo.",
    "detail": "Ctrl+r reapplies the change most recently removed by undo.",
    "keys": [
      "x",
      "u",
      "Ctrl+r"
    ],
    "task": "Delete one character, undo it, then restore the deletion with redo.",
    "sequence": "xu<C-r>",
    "code": [
      "const theme = 'old-theme';",
      "const contrast = 'high';",
      "console.log(theme, contrast);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Delete one character, undo it, then restore the deletion with redo. · repetition 1 of 3",
        "code": [
          "const theme = 'old-theme';",
          "const contrast = 'high';",
          "console.log(theme, contrast);"
        ]
      },
      {
        "goal": "Delete one character, undo it, then restore the deletion with redo. · repetition 2 of 3",
        "code": [
          "settings.wrap = true;",
          "settings.lineNumbers = true;",
          "console.log(settings);"
        ]
      },
      {
        "goal": "Delete one character, undo it, then restore the deletion with redo. · repetition 3 of 3",
        "code": [
          "const server = 'typescript';",
          "enable(server);",
          "console.log(server);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Delete one character, undo it, then restore the deletion with redo.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: x, u, Ctrl+r."
      ],
      "success": "Redo an Undo produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "x",
        "description": "Delete the character under the cursor.",
        "sequence": "xu<C-r>"
      },
      {
        "key": "u",
        "description": "Undo the latest change.",
        "sequence": "xu<C-r>"
      },
      {
        "key": "Ctrl+r",
        "description": "Redo the change most recently undone.",
        "sequence": "xu<C-r>"
      }
    ]
  },
  {
    "group": "Editing Safety",
    "id": "editing-safety-review",
    "title": "Editing Safety Review",
    "eyebrow": "Editing Safety",
    "summary": "Review every command introduced in Editing Safety before moving to the next category.",
    "detail": "Review every command introduced in Editing Safety before moving to the next category.",
    "keys": [
      "x",
      "u",
      "Ctrl+r"
    ],
    "task": "",
    "sequence": "xu",
    "code": [
      "const theme = 'old-theme';",
      "const contrast = 'high';",
      "console.log(theme, contrast);"
    ],
    "tip": "Return to any command in Editing Safety that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "x",
        "description": "Delete the character under the cursor.",
        "sequence": "xu",
        "code": [
          "const theme = 'old-theme';",
          "const contrast = 'high';",
          "console.log(theme, contrast);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "u",
        "description": "Undo the latest change.",
        "sequence": "xu",
        "code": [
          "const theme = 'old-theme';",
          "const contrast = 'high';",
          "console.log(theme, contrast);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "Ctrl+r",
        "description": "Redo the change most recently undone.",
        "sequence": "xu<C-r>",
        "code": [
          "const theme = 'old-theme';",
          "const contrast = 'high';",
          "console.log(theme, contrast);"
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
