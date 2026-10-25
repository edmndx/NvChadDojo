import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Insert Like a Pro",
    "id": "insert-line-ends",
    "title": "Insert at Line Ends",
    "eyebrow": "Insert Like a Pro",
    "summary": "I inserts at the first non-blank character; A appends at the end of the line.",
    "detail": "I inserts at the first non-blank character; A appends at the end of the line.",
    "keys": [
      "I",
      "A",
      "Esc"
    ],
    "task": "Use I to insert text at the first non-blank character; after Esc, use A to append text at line end.",
    "sequence": "I// configured<Space><Esc>A<Space>// configured<Esc>",
    "code": [
      "const greeting = 'hello';",
      "console.log(greeting);",
      "showGreeting(greeting);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Use I to insert text at the first non-blank character; after Esc, use A to append text at line end. · repetition 1 of 3",
        "code": [
          "const greeting = 'hello';",
          "console.log(greeting);",
          "showGreeting(greeting);"
        ]
      },
      {
        "goal": "Use I to insert text at the first non-blank character; after Esc, use A to append text at line end. · repetition 2 of 3",
        "code": [
          "const servers = ['typescript'];",
          "enableServers(servers);",
          "console.log(servers);"
        ]
      },
      {
        "goal": "Use I to insert text at the first non-blank character; after Esc, use A to append text at line end. · repetition 3 of 3",
        "code": [
          "bindKey('save', saveFile);",
          "bindKey('close', closeFile);",
          "console.log(bindings);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Use I to insert text at the first non-blank character; after Esc, use A to append text at line end.",
      "replacement": " // configured",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Enter “ // configured” before returning to Normal mode."
      ],
      "success": "The buffer now contains “ // configured” in the intended location."
    },
    "reviewItems": [
      {
        "key": "I",
        "description": "Insert // and a space at the first non-blank character.",
        "sequence": "I//<Space><Esc>"
      },
      {
        "key": "A",
        "description": "Append a space and // at line end.",
        "sequence": "A<Space>//<Esc>"
      },
      {
        "key": "Esc",
        "description": "Finish the append and return to Normal mode.",
        "sequence": "A<Space>//<Esc>"
      }
    ]
  },
  {
    "group": "Insert Like a Pro",
    "id": "opening-lines",
    "title": "Opening New Lines",
    "eyebrow": "Insert Like a Pro",
    "summary": "o opens a line below and O opens one above; both enter Insert mode.",
    "detail": "Both commands open a fresh line and enter Insert mode. Add a complete logging statement, then press Esc to return to Normal mode.",
    "keys": [
      "o",
      "O"
    ],
    "task": "Open a new line below with o or above with O, type console.log('ready');, then press Esc.",
    "sequence": "oconsole.log('ready');<Esc>Oconsole.log('ready');<Esc>",
    "code": [
      "const greeting = 'hello';",
      "console.log(greeting);",
      "showGreeting(greeting);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Open a new line below with o or above with O, type console.log('ready');, then press Esc. · repetition 1 of 3",
        "code": [
          "const greeting = 'hello';",
          "console.log(greeting);",
          "showGreeting(greeting);"
        ]
      },
      {
        "goal": "Open a new line below with o or above with O, type console.log('ready');, then press Esc. · repetition 2 of 3",
        "code": [
          "const servers = ['typescript'];",
          "enableServers(servers);",
          "console.log(servers);"
        ]
      },
      {
        "goal": "Open a new line below with o or above with O, type console.log('ready');, then press Esc. · repetition 3 of 3",
        "code": [
          "bindKey('save', saveFile);",
          "bindKey('close', closeFile);",
          "console.log(bindings);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Open a new line below with o or above with O, type console.log('ready');, then press Esc.",
      "replacement": "console.log('ready');",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed statement.",
        "Use o for a new line below or O for a new line above.",
        "Type console.log('ready'); and press Esc."
      ],
      "success": "The new line contains a complete JavaScript logging statement."
    },
    "reviewItems": [
      {
        "key": "o",
        "description": "Open a line below, type console.log('ready');, and return to Normal mode.",
        "sequence": "oconsole.log('ready');<Esc>"
      },
      {
        "key": "O",
        "description": "Open a line above, type console.log('ready');, and return to Normal mode.",
        "sequence": "Oconsole.log('ready');<Esc>"
      }
    ]
  },
  {
    "group": "Insert Like a Pro",
    "id": "small-edits",
    "title": "Making Small Edits",
    "eyebrow": "Insert Like a Pro",
    "summary": "s substitutes a character, x deletes one, and r replaces one in place.",
    "detail": "s substitutes a character, x deletes one, and r replaces one in place.",
    "keys": [
      "s",
      "x",
      "r"
    ],
    "task": "Substitute one character with n using s, press Esc, delete one character with x, then replace one with rn.",
    "sequence": "sn<Esc>xrn",
    "code": [
      "const greeting = 'hello';",
      "console.log(greeting);",
      "showGreeting(greeting);"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Substitute one character with n using s, press Esc, delete one character with x, then replace one with rn. · repetition 1 of 3",
        "code": [
          "const greeting = 'hello';",
          "console.log(greeting);",
          "showGreeting(greeting);"
        ]
      },
      {
        "goal": "Substitute one character with n using s, press Esc, delete one character with x, then replace one with rn. · repetition 2 of 3",
        "code": [
          "const servers = ['typescript'];",
          "enableServers(servers);",
          "console.log(servers);"
        ]
      },
      {
        "goal": "Substitute one character with n using s, press Esc, delete one character with x, then replace one with rn. · repetition 3 of 3",
        "code": [
          "bindKey('save', saveFile);",
          "bindKey('close', closeFile);",
          "console.log(bindings);"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Substitute one character with n using s, press Esc, delete one character with x, then replace one with rn.",
      "replacement": "n",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Enter “n” before returning to Normal mode."
      ],
      "success": "The buffer now contains “n” in the intended location."
    },
    "reviewItems": [
      {
        "key": "s",
        "description": "Replace one character with n using Insert mode.",
        "sequence": "sn<Esc>"
      },
      {
        "key": "x",
        "description": "Delete the character under the cursor.",
        "sequence": "x"
      },
      {
        "key": "r",
        "description": "Replace the character under the cursor with n without entering Insert mode.",
        "sequence": "rn"
      }
    ]
  },
  {
    "group": "Insert Like a Pro",
    "id": "insert-like-a-pro-review",
    "title": "Insert Like a Pro Review",
    "eyebrow": "Insert Like a Pro",
    "summary": "Review every command introduced in Insert Like a Pro before moving to the next category.",
    "detail": "Review every command introduced in Insert Like a Pro before moving to the next category.",
    "keys": [
      "I",
      "A",
      "Esc",
      "o",
      "O",
      "s",
      "x",
      "r"
    ],
    "task": "",
    "sequence": "I//<Space><Esc>A<Space>//<Esc>",
    "code": [
      "const greeting = 'hello';",
      "console.log(greeting);",
      "showGreeting(greeting);"
    ],
    "tip": "Return to any command in Insert Like a Pro that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "I",
        "description": "Insert // and a space at the first non-blank character.",
        "sequence": "I//<Space><Esc>",
        "code": [
          "const greeting = 'hello';",
          "console.log(greeting);",
          "showGreeting(greeting);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "A",
        "description": "Append a space and // at line end.",
        "sequence": "A<Space>//<Esc>",
        "code": [
          "const greeting = 'hello';",
          "console.log(greeting);",
          "showGreeting(greeting);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "Esc",
        "description": "Finish the append and return to Normal mode.",
        "sequence": "A<Space>//<Esc>",
        "code": [
          "const greeting = 'hello';",
          "console.log(greeting);",
          "showGreeting(greeting);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "o",
        "description": "Open a line below, type console.log('ready');, and return to Normal mode.",
        "sequence": "oconsole.log('ready');<Esc>",
        "code": [
          "const greeting = 'hello';",
          "console.log(greeting);",
          "showGreeting(greeting);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "O",
        "description": "Open a line above, type console.log('ready');, and return to Normal mode.",
        "sequence": "Oconsole.log('ready');<Esc>",
        "code": [
          "const greeting = 'hello';",
          "console.log(greeting);",
          "showGreeting(greeting);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "s",
        "description": "Replace one character with n using Insert mode.",
        "sequence": "sn<Esc>",
        "code": [
          "const greeting = 'hello';",
          "console.log(greeting);",
          "showGreeting(greeting);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "x",
        "description": "Delete the character under the cursor.",
        "sequence": "x",
        "code": [
          "const greeting = 'hello';",
          "console.log(greeting);",
          "showGreeting(greeting);"
        ],
        "cursor": [
          1,
          0
        ]
      },
      {
        "key": "r",
        "description": "Replace the character under the cursor with n without entering Insert mode.",
        "sequence": "rn",
        "code": [
          "const greeting = 'hello';",
          "console.log(greeting);",
          "showGreeting(greeting);"
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
