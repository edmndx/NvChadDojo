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
    "task": "Search forward for config, then backward for local.",
    "sequence": "/config<Enter>?local<Enter>",
    "code": [
      "local config = require('config')",
      "config.theme = 'onedark'",
      "return config"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Search forward for config, then backward for local. · repetition 1 of 3",
        "code": [
          "local config = require('config')",
          "config.theme = 'onedark'",
          "return config"
        ]
      },
      {
        "goal": "Search forward for config, then backward for local. · repetition 2 of 3",
        "code": [
          "local theme = 'dark'",
          "apply_theme(theme)",
          "return theme"
        ]
      },
      {
        "goal": "Search forward for config, then backward for local. · repetition 3 of 3",
        "code": [
          "map('n', 'gd', goto_definition)",
          "map('n', 'K', hover)",
          "return map"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Search forward for config, then backward for local.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with /.",
        "Use only the keys introduced in Search.",
        "Compose the command from: /, ?."
      ],
      "success": "Search produced the requested buffer and cursor state."
    }
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
    "task": "Repeat a search forward, then backward.",
    "sequence": "nN",
    "code": [
      "local config = require('config')",
      "config.theme = 'onedark'",
      "return config"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Repeat a search forward, then backward. · repetition 1 of 3",
        "code": [
          "local config = require('config')",
          "config.theme = 'onedark'",
          "return config"
        ]
      },
      {
        "goal": "Repeat a search forward, then backward. · repetition 2 of 3",
        "code": [
          "local theme = 'dark'",
          "apply_theme(theme)",
          "return theme"
        ]
      },
      {
        "goal": "Repeat a search forward, then backward. · repetition 3 of 3",
        "code": [
          "map('n', 'gd', goto_definition)",
          "map('n', 'K', hover)",
          "return map"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Repeat a search forward, then backward.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with n.",
        "Use only the keys introduced in Search.",
        "Compose the command from: n, N."
      ],
      "success": "Repeat Search produced the requested buffer and cursor state."
    }
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
      "local config = require('config')",
      "config.theme = 'onedark'",
      "return config"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Search the current word forward and backward. · repetition 1 of 3",
        "code": [
          "local config = require('config')",
          "config.theme = 'onedark'",
          "return config"
        ]
      },
      {
        "goal": "Search the current word forward and backward. · repetition 2 of 3",
        "code": [
          "local theme = 'dark'",
          "apply_theme(theme)",
          "return theme"
        ]
      },
      {
        "goal": "Search the current word forward and backward. · repetition 3 of 3",
        "code": [
          "map('n', 'gd', goto_definition)",
          "map('n', 'K', hover)",
          "return map"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Search the current word forward and backward.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with *.",
        "Use only the keys introduced in Search.",
        "Compose the command from: *, #."
      ],
      "success": "Quick Word Search produced the requested buffer and cursor state."
    }
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
      "n",
      "N",
      "*",
      "#"
    ],
    "task": "Search for theme, repeat both ways, then use * and #.",
    "sequence": "/theme<Enter>nN*#",
    "code": [
      "local config = require('config')",
      "config.theme = 'onedark'",
      "return config"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Search for theme, repeat both ways, then use * and #. · repetition 1 of 3",
        "code": [
          "local config = require('config')",
          "config.theme = 'onedark'",
          "return config"
        ]
      },
      {
        "goal": "Search for theme, repeat both ways, then use * and #. · repetition 2 of 3",
        "code": [
          "local theme = 'dark'",
          "apply_theme(theme)",
          "return theme"
        ]
      },
      {
        "goal": "Search for theme, repeat both ways, then use * and #. · repetition 3 of 3",
        "code": [
          "map('n', 'gd', goto_definition)",
          "map('n', 'K', hover)",
          "return map"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Search for theme, repeat both ways, then use * and #.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with /.",
        "Use only the keys introduced in Search.",
        "Compose the command from: /, n, N, *, #."
      ],
      "success": "Search Review produced the requested buffer and cursor state."
    },
    "reviewOnly": true
  }
] satisfies readonly Lesson[];

export default lessons;
