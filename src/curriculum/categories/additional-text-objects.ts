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
    "task": "Change inside, then delete around parentheses.",
    "sequence": "ci(<Esc>da(",
    "code": [
      "call(first, second)",
      "local values = [one, two]",
      "return values"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Change inside, then delete around parentheses. · repetition 1 of 3",
        "code": [
          "call(first, second)",
          "local values = [one, two]",
          "return values"
        ]
      },
      {
        "goal": "Change inside, then delete around parentheses. · repetition 2 of 3",
        "code": [
          "<Button>Save changes</Button>",
          "<p>Helpful sentence.</p>",
          "return view"
        ]
      },
      {
        "goal": "Change inside, then delete around parentheses. · repetition 3 of 3",
        "code": [
          "notify(user.name)",
          "local tuple = [left, right]",
          "return tuple"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Change inside, then delete around parentheses. Enter “options” where text is requested.",
      "replacement": "options",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with i(.",
        "Read the command as operator, inside/around, then object.",
        "Enter “options” before returning to Normal mode."
      ],
      "success": "The buffer now contains “options” in the intended location."
    }
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
    "task": "Change inside, then delete around square brackets.",
    "sequence": "ci[<Esc>da[",
    "code": [
      "call(first, second)",
      "local values = [one, two]",
      "return values"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Change inside, then delete around square brackets. · repetition 1 of 3",
        "code": [
          "call(first, second)",
          "local values = [one, two]",
          "return values"
        ]
      },
      {
        "goal": "Change inside, then delete around square brackets. · repetition 2 of 3",
        "code": [
          "<Button>Save changes</Button>",
          "<p>Helpful sentence.</p>",
          "return view"
        ]
      },
      {
        "goal": "Change inside, then delete around square brackets. · repetition 3 of 3",
        "code": [
          "notify(user.name)",
          "local tuple = [left, right]",
          "return tuple"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Change inside, then delete around square brackets. Enter “items” where text is requested.",
      "replacement": "items",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with i[.",
        "Read the command as operator, inside/around, then object.",
        "Enter “items” before returning to Normal mode."
      ],
      "success": "The buffer now contains “items” in the intended location."
    }
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
      "return (",
      "  <Button>Save changes</Button>",
      ")"
    ],
    "tip": "Read cit as change inside tag and dat as delete around tag.",
    "drills": [
      {
        "goal": "Practice changing inside and deleting around an HTML or JSX tag. · repetition 1 of 3",
        "code": [
          "return (",
          "  <Button>Save changes</Button>",
          ")"
        ]
      },
      {
        "goal": "Practice changing inside and deleting around an HTML or JSX tag. · repetition 2 of 3",
        "code": [
          "const help = (",
          "  <p>Helpful sentence.</p>",
          ")"
        ]
      },
      {
        "goal": "Practice changing inside and deleting around an HTML or JSX tag. · repetition 3 of 3",
        "code": [
          "return (",
          "  <Alert>Old message</Alert>",
          ")"
        ]
      }
    ],
    "commonMistake": "it and at only describe the target. Prefix them with an operator such as c or d to perform an edit.",
    "challenge": {
      "instruction": "Practice the inside and around tag text objects.",
      "replacement": "Save",
      "cursor": [
        1,
        2
      ],
      "hints": [
        "Pair c with it to form cit.",
        "Type Save, then press Esc to finish the change.",
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
    "task": "Change inside, then delete around a sentence.",
    "sequence": "cis<Esc>das",
    "code": [
      "Review this setting. Keep this sentence.",
      "Update this option. Preserve this sentence.",
      "Finish this review. Leave this sentence."
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Change inside, then delete around a sentence. · repetition 1 of 3",
        "code": [
          "Review this setting. Keep this sentence.",
          "Update this option. Preserve this sentence.",
          "Finish this review. Leave this sentence."
        ]
      },
      {
        "goal": "Change inside, then delete around a sentence. · repetition 2 of 3",
        "code": [
          "Save these changes. Keep a backup.",
          "Review this message. Keep it concise.",
          "Publish the result. Notify the team."
        ]
      },
      {
        "goal": "Change inside, then delete around a sentence. · repetition 3 of 3",
        "code": [
          "Check the user name. Keep the identifier.",
          "Validate the tuple. Preserve its order.",
          "Return the result. Record the outcome."
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Change inside, then delete around a sentence. Enter “Configuration updated.” where text is requested.",
      "replacement": "Configuration updated.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with is.",
        "Read the command as operator, inside/around, then object.",
        "Enter “Configuration updated.” before returning to Normal mode."
      ],
      "success": "The buffer now contains “Configuration updated.” in the intended location."
    }
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
    "sequence": "ci(<Esc>da(",
    "cursor": [
      1,
      18
    ],
    "code": [
      "([<Panel>Intro. Review this value. Keep this sentence.</Panel>])",
      "([<Panel>Intro. Update this value. Preserve this sentence.</Panel>])",
      "([<Panel>Intro. Finish this value. Retain this sentence.</Panel>])"
    ],
    "tip": "Return to any command in Additional Text Objects that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "i(",
        "description": "Parenthesis objects work from anywhere inside the surrounding pair.",
        "sequence": "ci(<Esc>da("
      },
      {
        "key": "a(",
        "description": "Parenthesis objects work from anywhere inside the surrounding pair.",
        "sequence": "ci(<Esc>da("
      },
      {
        "key": "i[",
        "description": "Square-bracket objects target array and index expressions without manual selection.",
        "sequence": "ci[<Esc>da["
      },
      {
        "key": "a[",
        "description": "Square-bracket objects target array and index expressions without manual selection.",
        "sequence": "ci[<Esc>da["
      },
      {
        "key": "it",
        "description": "Tag objects target element contents or the complete opening and closing tag pair.",
        "sequence": "cit<Esc>dat"
      },
      {
        "key": "at",
        "description": "Tag objects target element contents or the complete opening and closing tag pair.",
        "sequence": "cit<Esc>dat"
      },
      {
        "key": "is",
        "description": "Sentence objects operate on prose bounded by punctuation and whitespace.",
        "sequence": "cis<Esc>"
      },
      {
        "key": "as",
        "description": "Sentence objects operate on prose bounded by punctuation and whitespace.",
        "sequence": "das"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
