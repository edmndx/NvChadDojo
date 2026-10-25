import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Additional Text Objects",
    "id": "parentheses-objects",
    "title": "Parentheses",
    "eyebrow": "Additional Text Objects",
    "summary": "Parenthesis objects work from anywhere inside the surrounding pair.",
    "detail": "Parenthesis objects work from anywhere inside the surrounding pair.",
    "keys": [
      "i(",
      "a("
    ],
    "task": "Change the text inside the pair to options; in the next fresh fixture, delete the complete pair.",
    "sequence": "ci(options<Esc>",
    "code": [
      "// Function arguments",
      "call(first, second);",
      "console.log(result);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Change the text inside the pair to options; in the next fresh fixture, delete the complete pair. · repetition 1 of 3",
        "code": [
          "// Function arguments",
          "call(first, second);",
          "console.log(result);"
        ]
      },
      {
        "goal": "Change the text inside the pair to options; in the next fresh fixture, delete the complete pair. · repetition 2 of 3",
        "code": [
          "// Nested calls",
          "call(left, right);",
          "console.log(result);"
        ]
      },
      {
        "goal": "Change the text inside the pair to options; in the next fresh fixture, delete the complete pair. · repetition 3 of 3",
        "code": [
          "// Notification",
          "call(user.name);",
          "console.log(result);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Change the text inside the pair to options; in the next fresh fixture, delete the complete pair.",
      "replacement": "options",
      "cursor": [
        1,
        7
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Enter “options” before returning to Normal mode."
      ],
      "success": "The buffer now contains “options” in the intended location."
    },
    "reviewItems": [
      {
        "key": "i(",
        "description": "Change the contents of parentheses to options.",
        "sequence": "ci(options<Esc>"
      },
      {
        "key": "a(",
        "description": "Delete the parentheses and their contents.",
        "sequence": "da("
      }
    ]
  },
  {
    "group": "Additional Text Objects",
    "id": "square-bracket-objects",
    "title": "Square Brackets",
    "eyebrow": "Additional Text Objects",
    "summary": "Square-bracket objects target array and index expressions without manual selection.",
    "detail": "Square-bracket objects target array and index expressions without manual selection.",
    "keys": [
      "i[",
      "a["
    ],
    "task": "Change the text inside the pair to items; in the next fresh fixture, delete the complete pair.",
    "sequence": "ci[items<Esc>",
    "code": [
      "// Index expressions",
      "const values = [one, two];",
      "console.log(values);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Change the text inside the pair to items; in the next fresh fixture, delete the complete pair. · repetition 1 of 3",
        "code": [
          "// Index expressions",
          "const values = [one, two];",
          "console.log(values);"
        ]
      },
      {
        "goal": "Change the text inside the pair to items; in the next fresh fixture, delete the complete pair. · repetition 2 of 3",
        "code": [
          "// Selected entries",
          "const values = [left, right];",
          "console.log(values);"
        ]
      },
      {
        "goal": "Change the text inside the pair to items; in the next fresh fixture, delete the complete pair. · repetition 3 of 3",
        "code": [
          "// Array fixture",
          "const values = [alpha, beta];",
          "console.log(values);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Change the text inside the pair to items; in the next fresh fixture, delete the complete pair.",
      "replacement": "items",
      "cursor": [
        1,
        17
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Enter “items” before returning to Normal mode."
      ],
      "success": "The buffer now contains “items” in the intended location."
    },
    "reviewItems": [
      {
        "key": "i[",
        "description": "Change the contents of square brackets to items.",
        "sequence": "ci[items<Esc>"
      },
      {
        "key": "a[",
        "description": "Delete square brackets and their contents.",
        "sequence": "da["
      }
    ]
  },
  {
    "group": "Additional Text Objects",
    "id": "tag-objects",
    "title": "HTML and JSX Tags",
    "eyebrow": "Additional Text Objects",
    "summary": "it targets the contents of an HTML or JSX element; at targets the complete opening tag, contents, and closing tag.",
    "detail": "it and at are text-object targets, not complete edits. Pair them with an operator: cit changes the contents, while dat deletes the entire element.",
    "keys": [
      "it",
      "at"
    ],
    "task": "First change the contents of a tag to Save. Then delete a complete tag pair.",
    "sequence": "citSave<Esc>",
    "code": [
      "const markup =",
      "  '<button>Save changes</button>';",
      "console.log(markup);"
    ],
    "tip": "Read cit as change inside tag and dat as delete around tag.",
    "drills": [
      {
        "goal": "Practice changing inside and deleting around an HTML or JSX tag. · repetition 1 of 3",
        "code": [
          "const markup =",
          "  '<button>Save changes</button>';",
          "console.log(markup);"
        ]
      },
      {
        "goal": "Practice changing inside and deleting around an HTML or JSX tag. · repetition 2 of 3",
        "code": [
          "const markup =",
          "  '<button>Helpful text.</button>';",
          "console.log(markup);"
        ]
      },
      {
        "goal": "Practice changing inside and deleting around an HTML or JSX tag. · repetition 3 of 3",
        "code": [
          "const markup =",
          "  '<button>Old message</button>';",
          "console.log(markup);"
        ]
      }
    ],
    "commonMistake": "it and at only describe the target. Prefix them with an operator such as c or d to perform an edit.",
    "challenge": {
      "instruction": "Practice the inside and around tag text objects.",
      "replacement": "Save",
      "cursor": [
        1,
        12
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Pair d with at to form dat."
      ],
      "success": "You used both inside-tag and around-tag text objects successfully."
    },
    "reviewItems": [
      {
        "key": "it",
        "description": "it targets only the contents between the opening and closing tags. Pair it with c to form cit.",
        "sequence": "citSave<Esc>"
      },
      {
        "key": "at",
        "description": "at targets the opening tag, its contents, and the closing tag. Pair it with d to form dat.",
        "sequence": "dat"
      }
    ]
  },
  {
    "group": "Additional Text Objects",
    "id": "sentence-objects",
    "title": "Sentences",
    "eyebrow": "Additional Text Objects",
    "summary": "Sentence objects operate on prose bounded by punctuation and whitespace.",
    "detail": "Sentence objects operate on prose bounded by punctuation and whitespace.",
    "keys": [
      "is",
      "as"
    ],
    "task": "Change the current sentence to Configuration updated.; in the next fresh fixture, delete around the original sentence.",
    "sequence": "cisConfiguration updated.<Esc>",
    "code": [
      "/*",
      "  Review this setting. Keep this sentence.",
      "  Update this option. Preserve this sentence.",
      "  Finish this review. Leave this sentence.",
      "*/"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Change the current sentence to Configuration updated.; in the next fresh fixture, delete around the original sentence. · repetition 1 of 3",
        "code": [
          "/*",
          "  Review this setting. Keep this sentence.",
          "  Update this option. Preserve this sentence.",
          "  Finish this review. Leave this sentence.",
          "*/"
        ]
      },
      {
        "goal": "Change the current sentence to Configuration updated.; in the next fresh fixture, delete around the original sentence. · repetition 2 of 3",
        "code": [
          "/*",
          "  Save these changes. Keep a backup.",
          "  Review this message. Keep it concise.",
          "  Publish the result. Notify the team.",
          "*/"
        ]
      },
      {
        "goal": "Change the current sentence to Configuration updated.; in the next fresh fixture, delete around the original sentence. · repetition 3 of 3",
        "code": [
          "/*",
          "  Check the user name. Keep the identifier.",
          "  Validate the tuple. Preserve its order.",
          "  Return the result. Record the outcome.",
          "*/"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Change the current sentence to Configuration updated.; in the next fresh fixture, delete around the original sentence.",
      "replacement": "Configuration updated.",
      "cursor": [
        2,
        2
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Enter “Configuration updated.” before returning to Normal mode."
      ],
      "success": "The buffer now contains “Configuration updated.” in the intended location."
    },
    "reviewItems": [
      {
        "key": "is",
        "description": "Change the current sentence while preserving adjacent whitespace.",
        "sequence": "cisConfiguration updated.<Esc>"
      },
      {
        "key": "as",
        "description": "Delete the current sentence and adjacent whitespace.",
        "sequence": "das"
      }
    ]
  },
  {
    "group": "Additional Text Objects",
    "id": "additional-text-objects-review",
    "title": "Additional Text Objects Review",
    "eyebrow": "Additional Text Objects",
    "summary": "Review every command introduced in Additional Text Objects before moving to the next category.",
    "detail": "Review every command introduced in Additional Text Objects before moving to the next category.",
    "keys": [
      "i(",
      "a(",
      "i[",
      "a[",
      "it",
      "at",
      "is",
      "as"
    ],
    "task": "",
    "sequence": "ci(options<Esc>",
    "cursor": [
      1,
      18
    ],
    "code": [
      "render(['<section>Intro. Review this value. Keep this sentence.</section>']);",
      "render(['<section>Intro. Update this value. Preserve this sentence.</section>']);",
      "render(['<section>Intro. Finish this value. Retain this sentence.</section>']);"
    ],
    "tip": "Return to any command in Additional Text Objects that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "i(",
        "description": "Change the contents of parentheses to options.",
        "sequence": "ci(options<Esc>",
        "code": [
          "// Function arguments",
          "call(first, second);",
          "console.log(result);"
        ],
        "cursor": [
          1,
          7
        ]
      },
      {
        "key": "a(",
        "description": "Delete the parentheses and their contents.",
        "sequence": "da(",
        "code": [
          "// Function arguments",
          "call(first, second);",
          "console.log(result);"
        ],
        "cursor": [
          1,
          7
        ]
      },
      {
        "key": "i[",
        "description": "Change the contents of square brackets to items.",
        "sequence": "ci[items<Esc>",
        "code": [
          "// Index expressions",
          "const values = [one, two];",
          "console.log(values);"
        ],
        "cursor": [
          1,
          17
        ]
      },
      {
        "key": "a[",
        "description": "Delete square brackets and their contents.",
        "sequence": "da[",
        "code": [
          "// Index expressions",
          "const values = [one, two];",
          "console.log(values);"
        ],
        "cursor": [
          1,
          17
        ]
      },
      {
        "key": "it",
        "description": "it targets only the contents between the opening and closing tags. Pair it with c to form cit.",
        "sequence": "citSave<Esc>",
        "code": [
          "const markup =",
          "  '<button>Save changes</button>';",
          "console.log(markup);"
        ],
        "cursor": [
          1,
          12
        ]
      },
      {
        "key": "at",
        "description": "at targets the opening tag, its contents, and the closing tag. Pair it with d to form dat.",
        "sequence": "dat",
        "code": [
          "const markup =",
          "  '<button>Save changes</button>';",
          "console.log(markup);"
        ],
        "cursor": [
          1,
          12
        ]
      },
      {
        "key": "is",
        "description": "Change the current sentence while preserving adjacent whitespace.",
        "sequence": "cisConfiguration updated.<Esc>",
        "code": [
          "/*",
          "  Review this setting. Keep this sentence.",
          "  Update this option. Preserve this sentence.",
          "  Finish this review. Leave this sentence.",
          "*/"
        ],
        "cursor": [
          2,
          2
        ]
      },
      {
        "key": "as",
        "description": "Delete the current sentence and adjacent whitespace.",
        "sequence": "das",
        "code": [
          "/*",
          "  Review this setting. Keep this sentence.",
          "  Update this option. Preserve this sentence.",
          "  Finish this review. Leave this sentence.",
          "*/"
        ],
        "cursor": [
          2,
          2
        ]
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
