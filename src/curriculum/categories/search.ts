import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Search",
    "id": "search-forward-back",
    "title": "Search",
    "eyebrow": "Search",
    "summary": "/ searches forward and ? searches backward from the cursor.",
    "detail": "/ searches forward and ? searches backward from the cursor.",
    "keys": [
      "/",
      "?"
    ],
    "task": "Search forward for config, then backward for const.",
    "sequence": "/config<Enter>?const<Enter>",
    "code": [
      "function getConfig() {",
      "  const config = loadConfig();",
      "  config.theme = 'onedark';",
      "  return config;",
      "}"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Search forward for config, then backward for const. · repetition 1 of 3",
        "code": [
          "function getConfig() {",
          "  const config = loadConfig();",
          "  config.theme = 'onedark';",
          "  return config;",
          "}"
        ]
      },
      {
        "goal": "Search forward for config, then backward for const. · repetition 2 of 3",
        "code": [
          "function getConfig() {",
          "  const config = loadConfig();",
          "  config.theme = 'dark';",
          "  return config;",
          "}"
        ]
      },
      {
        "goal": "Search forward for config, then backward for const. · repetition 3 of 3",
        "code": [
          "function getConfig() {",
          "  const config = { theme: true };",
          "  config.theme = false;",
          "  return config;",
          "}"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Search forward for config, then backward for const.",
      "cursor": [
        2,
        2
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: /, ?."
      ],
      "success": "Search produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "/",
        "description": "Search forward for config.",
        "sequence": "/config<Enter>"
      },
      {
        "key": "?",
        "description": "Search backward for const.",
        "sequence": "?const<Enter>"
      }
    ]
  },
  {
    "group": "Search",
    "id": "repeat-search",
    "title": "Repeat Search",
    "eyebrow": "Search",
    "summary": "n repeats in the active search direction; N repeats in the opposite direction.",
    "detail": "n repeats in the active search direction; N repeats in the opposite direction.",
    "keys": [
      "n",
      "N"
    ],
    "task": "Repeat the seeded forward search for config with n, then return with N.",
    "sequence": "nN",
    "code": [
      "function getConfig() {",
      "  const config = loadConfig();",
      "  config.theme = 'onedark';",
      "  return config;",
      "}"
    ],
    "tip": "The practice buffer starts with config as the previous forward search. Use /config then Enter to establish it in your own editor.",
    "drills": [
      {
        "goal": "Repeat the seeded forward search for config with n, then return with N. · repetition 1 of 3",
        "code": [
          "function getConfig() {",
          "  const config = loadConfig();",
          "  config.theme = 'onedark';",
          "  return config;",
          "}"
        ]
      },
      {
        "goal": "Repeat the seeded forward search for config with n, then return with N. · repetition 2 of 3",
        "code": [
          "function getConfig() {",
          "  const config = loadConfig();",
          "  config.theme = 'dark';",
          "  return config;",
          "}"
        ]
      },
      {
        "goal": "Repeat the seeded forward search for config with n, then return with N. · repetition 3 of 3",
        "code": [
          "function getConfig() {",
          "  const config = { theme: true };",
          "  config.theme = false;",
          "  return config;",
          "}"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Repeat the seeded forward search for config with n, then return with N.",
      "cursor": [
        2,
        2
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: n, N."
      ],
      "success": "Repeat Search produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "n",
        "description": "Repeat the seeded config search in its forward direction.",
        "sequence": "n"
      },
      {
        "key": "N",
        "description": "Repeat the seeded config search in the opposite direction.",
        "sequence": "N"
      }
    ]
  },
  {
    "group": "Search",
    "id": "quick-word-search",
    "title": "Quick Word Search",
    "eyebrow": "Search",
    "summary": "* searches forward for the word under the cursor; # searches backward.",
    "detail": "* searches forward for the word under the cursor; # searches backward.",
    "keys": [
      "*",
      "#"
    ],
    "task": "Search the current word forward and backward.",
    "sequence": "*#",
    "code": [
      "function getConfig() {",
      "  const config = loadConfig();",
      "  config.theme = 'onedark';",
      "  return config;",
      "}"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Search the current word forward and backward. · repetition 1 of 3",
        "code": [
          "function getConfig() {",
          "  const config = loadConfig();",
          "  config.theme = 'onedark';",
          "  return config;",
          "}"
        ]
      },
      {
        "goal": "Search the current word forward and backward. · repetition 2 of 3",
        "code": [
          "function getConfig() {",
          "  const config = loadConfig();",
          "  config.theme = 'dark';",
          "  return config;",
          "}"
        ]
      },
      {
        "goal": "Search the current word forward and backward. · repetition 3 of 3",
        "code": [
          "function getConfig() {",
          "  const config = { theme: true };",
          "  config.theme = false;",
          "  return config;",
          "}"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Search the current word forward and backward.",
      "cursor": [
        2,
        2
      ],
      "hints": [
        "Start in Normal mode at the displayed cursor.",
        "Follow the task, including any motion, target character, or replacement text.",
        "Compose the command from: *, #."
      ],
      "success": "Quick Word Search produced the requested buffer and cursor state."
    },
    "reviewItems": [
      {
        "key": "*",
        "description": "Search forward for the complete word under the cursor.",
        "sequence": "*"
      },
      {
        "key": "#",
        "description": "Search backward for the complete word under the cursor.",
        "sequence": "#"
      }
    ]
  },
  {
    "group": "Search",
    "id": "search-review",
    "title": "Search Review",
    "eyebrow": "Search",
    "summary": "Combine explicit searches, repeat motions, and searches for the current word.",
    "detail": "Combine explicit searches, repeat motions, and searches for the current word.",
    "keys": [
      "/",
      "?",
      "n",
      "N",
      "*",
      "#"
    ],
    "task": "Review forward and backward searches, repetition in both directions, and whole-word searches.",
    "sequence": "/config<Enter>nN*#",
    "code": [
      "function getConfig() {",
      "  const config = loadConfig();",
      "  config.theme = 'onedark';",
      "  return config;",
      "}"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Review forward and backward searches, repetition in both directions, and whole-word searches. · repetition 1 of 3",
        "code": [
          "function getConfig() {",
          "  const config = loadConfig();",
          "  config.theme = 'onedark';",
          "  return config;",
          "}"
        ]
      },
      {
        "goal": "Review forward and backward searches, repetition in both directions, and whole-word searches. · repetition 2 of 3",
        "code": [
          "function getConfig() {",
          "  const config = loadConfig();",
          "  config.theme = 'dark';",
          "  return config;",
          "}"
        ]
      },
      {
        "goal": "Review forward and backward searches, repetition in both directions, and whole-word searches. · repetition 3 of 3",
        "code": [
          "function getConfig() {",
          "  const config = { theme: true };",
          "  config.theme = false;",
          "  return config;",
          "}"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Review forward and backward searches, repetition in both directions, and whole-word searches.",
      "cursor": [
        2,
        2
      ],
      "hints": [
        "Begin with /.",
        "Use only the keys introduced in Search.",
        "Compose the command from: /, n, N, *, #."
      ],
      "success": "Search Review produced the requested buffer and cursor state."
    },
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "/",
        "description": "Search forward for config.",
        "sequence": "/config<Enter>"
      },
      {
        "key": "?",
        "description": "Search backward for const.",
        "sequence": "?const<Enter>"
      },
      {
        "key": "n",
        "description": "Establish a search, then repeat it forward.",
        "sequence": "/config<Enter>n"
      },
      {
        "key": "N",
        "description": "Establish a search, then repeat it backward.",
        "sequence": "/config<Enter>N"
      },
      {
        "key": "*",
        "description": "Search forward for the word under the cursor.",
        "sequence": "*"
      },
      {
        "key": "#",
        "description": "Search backward for the word under the cursor.",
        "sequence": "#"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
