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
    "task": "Practice each bracket, quote, word, and paragraph operation on a fresh fixture.",
    "sequence": "di{",
    "code": [
      "/* Keep the introduction. */",
      "",
      "setup({ theme: '\"legacy\"' });",
      "/* Keep this paragraph line. */",
      "",
      "/* Keep the closing paragraph. */"
    ],
    "tip": "Each operation resets the fixture. The cursor starts inside a quoted word, inside braces, within the middle paragraph.",
    "drills": [
      {
        "goal": "Practice each bracket, quote, word, and paragraph operation on a fresh fixture. · repetition 1 of 3",
        "code": [
          "/* Keep the introduction. */",
          "",
          "setup({ theme: '\"legacy\"' });",
          "/* Keep this paragraph line. */",
          "",
          "/* Keep the closing paragraph. */"
        ]
      },
      {
        "goal": "Practice each bracket, quote, word, and paragraph operation on a fresh fixture. · repetition 2 of 3",
        "code": [
          "/* Keep the heading. */",
          "",
          "setup({ theme: '\"outdated\"' });",
          "/* Preserve this second line. */",
          "",
          "/* Keep the footer. */"
        ]
      },
      {
        "goal": "Practice each bracket, quote, word, and paragraph operation on a fresh fixture. · repetition 3 of 3",
        "code": [
          "/* Keep the first paragraph. */",
          "",
          "setup({ theme: '\"temporary\"' });",
          "/* Retain this paragraph line. */",
          "",
          "/* Keep the final paragraph. */"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Practice each bracket, quote, word, and paragraph operation on a fresh fixture.",
      "replacement": "updated",
      "cursor": [
        2,
        19
      ],
      "hints": [
        "Begin with di{.",
        "Read the command as operator, inside/around, then object.",
        "Enter “updated” before returning to Normal mode."
      ],
      "success": "The buffer now contains “updated” in the intended location."
    },
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "di{",
        "description": "Delete the indicated object.",
        "sequence": "di{"
      },
      {
        "key": "ca\"",
        "description": "Change the indicated object to updated.",
        "sequence": "ca\"updated<Esc>"
      },
      {
        "key": "ciw",
        "description": "Change the indicated object to updated.",
        "sequence": "ciwupdated<Esc>"
      },
      {
        "key": "dap",
        "description": "Delete the indicated object.",
        "sequence": "dap"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
