import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Text Objects - Bracket Pairs",
    "id": "intro-text-objects",
    "title": "Intro to Text Objects",
    "eyebrow": "Text Objects - Bracket Pairs",
    "summary": "Text objects describe structured regions: i means inside and a means around, including delimiters.",
    "detail": "Text objects describe structured regions: i means inside and a means around, including delimiters.",
    "keys": [
      "i",
      "a"
    ],
    "task": "Delete inside a bracket pair.",
    "sequence": "di{",
    "code": [
      "const options = { old: true, debug: false };",
      "setup({ theme: 'onedark' });",
      "console.log(options);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Delete inside a bracket pair. · repetition 1 of 3",
        "code": [
          "const options = { old: true, debug: false };",
          "setup({ theme: 'onedark' });",
          "console.log(options);"
        ]
      },
      {
        "goal": "Delete inside a bracket pair. · repetition 2 of 3",
        "code": [
          "enableServers(['html', 'css', 'typescript']);",
          "const palette = { green: '#98c379' };",
          "console.log(palette);"
        ]
      },
      {
        "goal": "Delete inside a bracket pair. · repetition 3 of 3",
        "code": [
          "bindKey('close', () => closeFile());",
          "configure({ ui: { border: 'single' } });",
          "console.log(settings);"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Delete inside a bracket pair.",
      "cursor": [
        1,
        18
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: i, a."
      ],
      "success": "Intro to Text Objects produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "i",
        "description": "Delete inside braces while keeping the delimiters.",
        "sequence": "di{"
      },
      {
        "key": "a",
        "description": "Delete around braces, including the delimiters.",
        "sequence": "da{"
      }
    ]
  },
  {
    "group": "Text Objects - Bracket Pairs",
    "id": "delete-inside-brackets",
    "title": "Delete Inside Brackets",
    "eyebrow": "Text Objects - Bracket Pairs",
    "summary": "di{ deletes the contents of the surrounding curly brackets.",
    "detail": "di{ deletes the contents of the surrounding curly brackets.",
    "keys": [
      "d",
      "i",
      "{"
    ],
    "task": "Practice delete inside brackets.",
    "sequence": "di{",
    "code": [
      "const options = { old: true, debug: false };",
      "setup({ theme: 'onedark' });",
      "console.log(options);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice delete inside brackets. · repetition 1 of 3",
        "code": [
          "const options = { old: true, debug: false };",
          "setup({ theme: 'onedark' });",
          "console.log(options);"
        ]
      },
      {
        "goal": "Practice delete inside brackets. · repetition 2 of 3",
        "code": [
          "enableServers(['html', 'css', 'typescript']);",
          "const palette = { green: '#98c379' };",
          "console.log(palette);"
        ]
      },
      {
        "goal": "Practice delete inside brackets. · repetition 3 of 3",
        "code": [
          "bindKey('close', () => closeFile());",
          "configure({ ui: { border: 'single' } });",
          "console.log(settings);"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Practice delete inside brackets.",
      "cursor": [
        1,
        18
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: d, i, {."
      ],
      "alternatives": [
        "di{",
        "di}"
      ],
      "success": "Delete Inside Brackets produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "d",
        "description": "di{ deletes the contents of the surrounding curly brackets.",
        "sequence": "di{"
      },
      {
        "key": "i",
        "description": "di{ deletes the contents of the surrounding curly brackets.",
        "sequence": "di{"
      },
      {
        "key": "{",
        "description": "di{ deletes the contents of the surrounding curly brackets.",
        "sequence": "di{"
      }
    ]
  },
  {
    "group": "Text Objects - Bracket Pairs",
    "id": "delete-around-brackets",
    "title": "Delete Around Brackets",
    "eyebrow": "Text Objects - Bracket Pairs",
    "summary": "da{ deletes the bracket contents and the curly brackets themselves.",
    "detail": "da{ deletes the bracket contents and the curly brackets themselves.",
    "keys": [
      "d",
      "a",
      "{"
    ],
    "task": "Practice delete around brackets.",
    "sequence": "da{",
    "code": [
      "const options = { old: true, debug: false };",
      "setup({ theme: 'onedark' });",
      "console.log(options);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice delete around brackets. · repetition 1 of 3",
        "code": [
          "const options = { old: true, debug: false };",
          "setup({ theme: 'onedark' });",
          "console.log(options);"
        ]
      },
      {
        "goal": "Practice delete around brackets. · repetition 2 of 3",
        "code": [
          "enableServers(['html', 'css', 'typescript']);",
          "const palette = { green: '#98c379' };",
          "console.log(palette);"
        ]
      },
      {
        "goal": "Practice delete around brackets. · repetition 3 of 3",
        "code": [
          "bindKey('close', () => closeFile());",
          "configure({ ui: { border: 'single' } });",
          "console.log(settings);"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Practice delete around brackets.",
      "cursor": [
        1,
        18
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: d, a, {."
      ],
      "alternatives": [
        "da{",
        "da}"
      ],
      "success": "Delete Around Brackets produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "d",
        "description": "da{ deletes the bracket contents and the curly brackets themselves.",
        "sequence": "da{"
      },
      {
        "key": "a",
        "description": "da{ deletes the bracket contents and the curly brackets themselves.",
        "sequence": "da{"
      },
      {
        "key": "{",
        "description": "da{ deletes the bracket contents and the curly brackets themselves.",
        "sequence": "da{"
      }
    ]
  },
  {
    "group": "Text Objects - Bracket Pairs",
    "id": "change-inside-brackets",
    "title": "Change Inside Brackets",
    "eyebrow": "Text Objects - Bracket Pairs",
    "summary": "ci{ clears bracket contents and enters Insert mode while preserving the pair.",
    "detail": "ci{ clears bracket contents and enters Insert mode while preserving the pair.",
    "keys": [
      "c",
      "i",
      "{"
    ],
    "task": "Change inside curly brackets, then escape.",
    "sequence": "ci{theme: 'onedark'<Esc>",
    "code": [
      "const options = { old: true, debug: false };",
      "setup({ theme: 'onedark' });",
      "console.log(options);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Change inside curly brackets, then escape. · repetition 1 of 3",
        "code": [
          "const options = { old: true, debug: false };",
          "setup({ theme: 'onedark' });",
          "console.log(options);"
        ]
      },
      {
        "goal": "Change inside curly brackets, then escape. · repetition 2 of 3",
        "code": [
          "enableServers(['html', 'css', 'typescript']);",
          "const palette = { green: '#98c379' };",
          "console.log(palette);"
        ]
      },
      {
        "goal": "Change inside curly brackets, then escape. · repetition 3 of 3",
        "code": [
          "bindKey('close', () => closeFile());",
          "configure({ ui: { border: 'single' } });",
          "console.log(settings);"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Change inside curly brackets, then escape. Enter “theme: 'onedark'” where text is requested.",
      "replacement": "theme: 'onedark'",
      "cursor": [
        1,
        18
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Enter “theme: 'onedark'” before returning to Normal mode."
      ],
      "success": "The buffer now contains “theme: 'onedark'” in the intended location."
    },
    "reviewItems": [
      {
        "key": "c",
        "description": "ci{ clears bracket contents and enters Insert mode while preserving the pair.",
        "sequence": "ci{theme: 'onedark'<Esc>"
      },
      {
        "key": "i",
        "description": "ci{ clears bracket contents and enters Insert mode while preserving the pair.",
        "sequence": "ci{theme: 'onedark'<Esc>"
      },
      {
        "key": "{",
        "description": "ci{ clears bracket contents and enters Insert mode while preserving the pair.",
        "sequence": "ci{theme: 'onedark'<Esc>"
      }
    ]
  },
  {
    "group": "Text Objects - Bracket Pairs",
    "id": "change-around-brackets",
    "title": "Change Around Brackets",
    "eyebrow": "Text Objects - Bracket Pairs",
    "summary": "ca{ replaces the contents and surrounding curly brackets.",
    "detail": "ca{ replaces the contents and surrounding curly brackets.",
    "keys": [
      "c",
      "a",
      "{"
    ],
    "task": "Change around curly brackets, then escape.",
    "sequence": "ca{{ enabled: true }<Esc>",
    "code": [
      "const options = { old: true, debug: false };",
      "setup({ theme: 'onedark' });",
      "console.log(options);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Change around curly brackets, then escape. · repetition 1 of 3",
        "code": [
          "const options = { old: true, debug: false };",
          "setup({ theme: 'onedark' });",
          "console.log(options);"
        ]
      },
      {
        "goal": "Change around curly brackets, then escape. · repetition 2 of 3",
        "code": [
          "enableServers(['html', 'css', 'typescript']);",
          "const palette = { green: '#98c379' };",
          "console.log(palette);"
        ]
      },
      {
        "goal": "Change around curly brackets, then escape. · repetition 3 of 3",
        "code": [
          "bindKey('close', () => closeFile());",
          "configure({ ui: { border: 'single' } });",
          "console.log(settings);"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Change around curly brackets, then escape. Enter “{ enabled: true }” where text is requested.",
      "replacement": "{ enabled: true }",
      "cursor": [
        1,
        18
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Enter “{ enabled: true }” before returning to Normal mode."
      ],
      "success": "The buffer now contains “{ enabled: true }” in the intended location."
    },
    "reviewItems": [
      {
        "key": "c",
        "description": "ca{ replaces the contents and surrounding curly brackets.",
        "sequence": "ca{{ enabled: true }<Esc>"
      },
      {
        "key": "a",
        "description": "ca{ replaces the contents and surrounding curly brackets.",
        "sequence": "ca{{ enabled: true }<Esc>"
      },
      {
        "key": "{",
        "description": "ca{ replaces the contents and surrounding curly brackets.",
        "sequence": "ca{{ enabled: true }<Esc>"
      }
    ]
  },
  {
    "group": "Text Objects - Bracket Pairs",
    "id": "brackets-review",
    "title": "Brackets Review",
    "eyebrow": "Text Objects - Bracket Pairs",
    "summary": "Review delete and change with inside and around bracket objects.",
    "detail": "Review delete and change with inside and around bracket objects.",
    "keys": [
      "di{",
      "da{",
      "ci{",
      "ca{"
    ],
    "task": "Practice each listed operation separately from a fresh copy of the fixture.",
    "sequence": "di{",
    "code": [
      "const options = { old: true, debug: false };",
      "setup({ theme: 'onedark' });",
      "console.log(options);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Practice each listed operation separately from a fresh copy of the fixture. · repetition 1 of 3",
        "code": [
          "const options = { old: true, debug: false };",
          "setup({ theme: 'onedark' });",
          "console.log(options);"
        ]
      },
      {
        "goal": "Practice each listed operation separately from a fresh copy of the fixture. · repetition 2 of 3",
        "code": [
          "enableServers(['html', 'css', 'typescript']);",
          "const palette = { green: '#98c379' };",
          "console.log(palette);"
        ]
      },
      {
        "goal": "Practice each listed operation separately from a fresh copy of the fixture. · repetition 3 of 3",
        "code": [
          "bindKey('close', () => closeFile());",
          "configure({ ui: { border: 'single' } });",
          "console.log(settings);"
        ]
      }
    ],
    "commonMistake": "Keep the order operator → inside/around → object. For example: d + i + w.",
    "challenge": {
      "instruction": "Practice each listed operation separately from a fresh copy of the fixture.",
      "cursor": [
        1,
        18
      ],
      "hints": [
        "Begin with di{.",
        "Read the command as operator, inside/around, then object.",
        "Compose the command from: di{, da{, ci{, ca{."
      ],
      "success": "Brackets Review produced the requested buffer and cursor state."
    },
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "di{",
        "description": "Delete the indicated object.",
        "sequence": "di{"
      },
      {
        "key": "da{",
        "description": "Delete the indicated object.",
        "sequence": "da{"
      },
      {
        "key": "ci{",
        "description": "Change the indicated object to updated.",
        "sequence": "ci{updated<Esc>"
      },
      {
        "key": "ca{",
        "description": "Change the indicated object to updated.",
        "sequence": "ca{updated<Esc>"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
