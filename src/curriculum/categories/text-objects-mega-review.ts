import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Text Objects - Mega Review",
    "id": "text-objects-mega-review",
    "title": "Text Objects Mega Review",
    "eyebrow": "Text Objects - Mega Review",
    "summary": "Mix brackets, quotes, words, and paragraphs until operator plus object feels like one phrase.",
    "detail": "Mix brackets, quotes, words, and paragraphs until operator plus object feels like one phrase.",
    "keys": [
      "di{",
      "ca\"",
      "ciw",
      "dap"
    ],
    "task": "Complete the bracket, quote, word, and paragraph sequence.",
    "sequence": "di{ca\"<Esc>ciw<Esc>dap",
    "code": [
      "setup({ old = true })",
      "local theme = \"replace-me\"",
      "local temporary = enabled",
      "",
      "Remove this whole paragraph."
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Complete the bracket, quote, word, and paragraph sequence. · repetition 1 of 3",
        "code": [
          "setup({ old = true })",
          "local theme = \"replace-me\"",
          "local temporary = enabled",
          "",
          "Remove this whole paragraph."
        ]
      },
      {
        "goal": "Complete the bracket, quote, word, and paragraph sequence. · repetition 2 of 3",
        "code": [
          "configure({ plugins = { 'old' } })",
          "local mode = \"debug\"",
          "local stale_value = true",
          "",
          "Another disposable paragraph."
        ]
      },
      {
        "goal": "Complete the bracket, quote, word, and paragraph sequence. · repetition 3 of 3",
        "code": [
          "run({ command = { 'legacy' } })",
          "local label = \"outdated\"",
          "local unused_item = false",
          "",
          "Final review paragraph."
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Complete the bracket, quote, word, and paragraph sequence. Enter “updated” where text is requested.",
      "replacement": "updated",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with di{.",
        "Read the command as operator, inside/around, then object.",
        "Enter “updated” before returning to Normal mode."
      ],
      "success": "The buffer now contains “updated” in the intended location."
    },
    "reviewOnly": true
  }
] satisfies readonly Lesson[];

export default lessons;
