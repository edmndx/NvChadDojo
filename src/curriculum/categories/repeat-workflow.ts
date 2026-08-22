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
      "local item = 'alpha'",
      "local item = 'beta'",
      "local item = 'gamma'"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Repeat the previous edit once. · repetition 1 of 3",
        "code": [
          "local item = 'alpha'",
          "local item = 'beta'",
          "local item = 'gamma'"
        ]
      },
      {
        "goal": "Repeat the previous edit once. · repetition 2 of 3",
        "code": [
          "enable('html')",
          "enable('cssls')",
          "enable('lua_ls')"
        ]
      },
      {
        "goal": "Repeat the previous edit once. · repetition 3 of 3",
        "code": [
          "theme.old = true",
          "theme.old = true",
          "theme.old = true"
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
        "Begin with ..",
        "Use only the keys introduced in Repeat Workflow.",
        "Compose the command from: .."
      ],
      "success": "Repeat Last Change produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Repeat Workflow",
    "id": "repeat-with-count",
    "title": "Repeat with a Count",
    "eyebrow": "Repeat Workflow",
    "summary": "A count before dot repeats the previous change several times.",
    "detail": "A count before dot repeats the previous change several times.",
    "keys": [
      "3",
      "."
    ],
    "task": "Repeat the previous change three times.",
    "sequence": "3.",
    "code": [
      "local item = 'alpha'",
      "local item = 'beta'",
      "local item = 'gamma'"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Repeat the previous change three times. · repetition 1 of 3",
        "code": [
          "local item = 'alpha'",
          "local item = 'beta'",
          "local item = 'gamma'"
        ]
      },
      {
        "goal": "Repeat the previous change three times. · repetition 2 of 3",
        "code": [
          "enable('html')",
          "enable('cssls')",
          "enable('lua_ls')"
        ]
      },
      {
        "goal": "Repeat the previous change three times. · repetition 3 of 3",
        "code": [
          "theme.old = true",
          "theme.old = true",
          "theme.old = true"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Repeat the previous change three times.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with 3.",
        "Use only the keys introduced in Repeat Workflow.",
        "Compose the command from: 3, .."
      ],
      "success": "Repeat with a Count produced the requested buffer and cursor state."
    }
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
    "task": "Repeat the most recent Ex command.",
    "sequence": "@:",
    "code": [
      "local item = 'alpha'",
      "local item = 'beta'",
      "local item = 'gamma'"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Repeat the most recent Ex command. · repetition 1 of 3",
        "code": [
          "local item = 'alpha'",
          "local item = 'beta'",
          "local item = 'gamma'"
        ]
      },
      {
        "goal": "Repeat the most recent Ex command. · repetition 2 of 3",
        "code": [
          "enable('html')",
          "enable('cssls')",
          "enable('lua_ls')"
        ]
      },
      {
        "goal": "Repeat the most recent Ex command. · repetition 3 of 3",
        "code": [
          "theme.old = true",
          "theme.old = true",
          "theme.old = true"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Repeat the most recent Ex command.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with @.",
        "Use only the keys introduced in Repeat Workflow.",
        "Compose the command from: @, :."
      ],
      "success": "Repeat Last Ex Command produced the requested buffer and cursor state."
    }
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
      "local item = 'alpha'",
      "local item = 'beta'",
      "local item = 'gamma'"
    ],
    "tip": "Return to any command in Repeat Workflow that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": ".",
        "description": "The dot command repeats the most recent change at the current cursor position.",
        "sequence": "."
      },
      {
        "key": "3",
        "description": "A count before dot repeats the previous change several times.",
        "sequence": "3."
      },
      {
        "key": "@",
        "description": "@: executes the latest command-line command again.",
        "sequence": "@:"
      },
      {
        "key": ":",
        "description": "@: executes the latest command-line command again.",
        "sequence": "@:"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
