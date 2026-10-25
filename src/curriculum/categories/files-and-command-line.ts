import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Files & Command Line",
    "id": "save-file",
    "title": "Save and Keep Editing",
    "eyebrow": "Files & Command Line",
    "summary": ":w writes the current buffer to disk and keeps it open.",
    "detail": ":w writes the current buffer to disk and keeps it open.",
    "keys": [
      ":w",
      "Enter"
    ],
    "task": "Save the current buffer without closing it.",
    "sequence": ":w<Enter>",
    "code": [
      "// Edited settings.js",
      "const theme = 'onedark';",
      "console.log(theme);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Save the current buffer without closing it. · repetition 1 of 3",
        "code": [
          "// Edited settings.js",
          "const theme = 'onedark';",
          "console.log(theme);"
        ]
      },
      {
        "goal": "Save the current buffer without closing it. · repetition 2 of 3",
        "code": [
          "// Unsaved shortcuts.js",
          "const shortcuts = { close: 'Escape' };",
          "console.log(shortcuts);"
        ]
      },
      {
        "goal": "Save the current buffer without closing it. · repetition 3 of 3",
        "code": [
          "// Finished settings.js",
          "const settings = { showLineNumbers: true };",
          "console.log(settings);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Save the current buffer without closing it.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode and type :w.",
        "Press Enter to write the named buffer.",
        "The buffer stays open after saving."
      ],
      "success": "Save and Keep Editing produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": ":w",
        "description": ":w writes the current buffer to disk and keeps it open.",
        "sequence": ":w<Enter>"
      },
      {
        "key": "Enter",
        "description": "After entering :w, Enter executes the write command.",
        "sequence": ":w<Enter>"
      }
    ],
    "language": "javascript"
  },
  {
    "group": "Files & Command Line",
    "id": "save-and-exit",
    "title": "Save or Exit Safely",
    "eyebrow": "Files & Command Line",
    "summary": ":wq saves and closes the current window; :q closes it unless unsaved changes would be abandoned; :q! closes without saving.",
    "detail": "Neovim exits when its last editing window closes. :q refuses to abandon unsaved changes; use :q! only when discarding them is intentional.",
    "keys": [
      ":wq",
      ":q",
      ":q!"
    ],
    "task": "Save the current buffer and close the current window.",
    "sequence": ":wq<Enter>",
    "code": [
      "// Edited settings.js",
      "const theme = 'onedark';",
      "console.log(theme);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Save the current buffer and close the current window. · repetition 1 of 3",
        "code": [
          "// Edited settings.js",
          "const theme = 'onedark';",
          "console.log(theme);"
        ]
      },
      {
        "goal": "Save the current buffer and close the current window. · repetition 2 of 3",
        "code": [
          "// Unsaved shortcuts.js",
          "const shortcuts = { close: 'Escape' };",
          "console.log(shortcuts);"
        ]
      },
      {
        "goal": "Save the current buffer and close the current window. · repetition 3 of 3",
        "code": [
          "// Finished settings.js",
          "const settings = { showLineNumbers: true };",
          "console.log(settings);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Save the current buffer and close the current window.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode and type :wq.",
        "Press Enter to write and close the current window.",
        "Neovim exits if this was its last window; :q and :q! are alternatives, not additional steps."
      ],
      "success": "Save or Exit Safely produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": ":wq",
        "description": "Write the current buffer and close the current window.",
        "sequence": ":wq<Enter>"
      },
      {
        "key": ":q",
        "description": "Close the current window unless doing so would abandon unsaved changes.",
        "sequence": ":q<Enter>"
      },
      {
        "key": ":q!",
        "description": "Close the current window without saving; unsaved changes may be discarded.",
        "sequence": ":q!<Enter>"
      }
    ],
    "language": "javascript"
  },
  {
    "group": "Files & Command Line",
    "id": "files-command-line-review",
    "title": "Files & Command Line Review",
    "eyebrow": "Files & Command Line",
    "summary": "Review every command introduced in Files & Command Line before moving to the next category.",
    "detail": "Review every command introduced in Files & Command Line before moving to the next category.",
    "keys": [
      ":w",
      "Enter",
      ":wq",
      ":q",
      ":q!"
    ],
    "task": "",
    "sequence": ":w<Enter>",
    "code": [
      "// Edited settings.js",
      "const theme = 'onedark';",
      "console.log(theme);"
    ],
    "tip": "Return to any command in Files & Command Line that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": ":w",
        "description": ":w writes the current buffer to disk and keeps it open.",
        "sequence": ":w<Enter>",
        "code": [
          "// Edited settings.js",
          "const theme = 'onedark';",
          "console.log(theme);"
        ],
        "cursor": [
          1,
          0
        ],
        "language": "javascript"
      },
      {
        "key": "Enter",
        "description": "After entering :w, Enter executes the write command.",
        "sequence": ":w<Enter>",
        "code": [
          "// Edited settings.js",
          "const theme = 'onedark';",
          "console.log(theme);"
        ],
        "cursor": [
          1,
          0
        ],
        "language": "javascript"
      },
      {
        "key": ":wq",
        "description": "Write the current buffer and close the current window.",
        "sequence": ":wq<Enter>",
        "code": [
          "// Edited settings.js",
          "const theme = 'onedark';",
          "console.log(theme);"
        ],
        "cursor": [
          1,
          0
        ],
        "language": "javascript"
      },
      {
        "key": ":q",
        "description": "Close the current window unless doing so would abandon unsaved changes.",
        "sequence": ":q<Enter>",
        "code": [
          "// Edited settings.js",
          "const theme = 'onedark';",
          "console.log(theme);"
        ],
        "cursor": [
          1,
          0
        ],
        "language": "javascript"
      },
      {
        "key": ":q!",
        "description": "Close the current window without saving; unsaved changes may be discarded.",
        "sequence": ":q!<Enter>",
        "code": [
          "// Edited settings.js",
          "const theme = 'onedark';",
          "console.log(theme);"
        ],
        "cursor": [
          1,
          0
        ],
        "language": "javascript"
      }
    ],
    "cursor": [
      1,
      0
    ],
    "language": "javascript"
  }
] satisfies readonly Lesson[];

export default lessons;
