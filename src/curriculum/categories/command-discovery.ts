import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Command Discovery",
    "id": "discover-help",
    "title": "Read built-in help",
    "eyebrow": "Command Discovery",
    "summary": ":help topic opens authoritative Neovim documentation; Ctrl+] follows a help tag and Ctrl+o returns.",
    "detail": ":help topic opens authoritative Neovim documentation; Ctrl+] follows a help tag and Ctrl+o returns.",
    "keys": [
      ":help topic",
      "Ctrl+]",
      "Ctrl+o"
    ],
    "task": "Open help for windows.",
    "sequence": ":help windows<Enter>",
    "code": [
      "*windows.txt*",
      "Editing with multiple windows",
      "|CTRL-W|"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": ":help topic",
        "description": ":help topic opens authoritative Neovim documentation; Ctrl+] follows a help tag and Ctrl+o returns.",
        "sequence": ":help windows<Enter>"
      },
      {
        "key": "Ctrl+]",
        "description": ":help topic opens authoritative Neovim documentation; Ctrl+] follows a help tag and Ctrl+o returns.",
        "sequence": "<C-]>",
        "cursor": [
          2,
          1
        ]
      },
      {
        "key": "Ctrl+o",
        "description": ":help topic opens authoritative Neovim documentation; Ctrl+] follows a help tag and Ctrl+o returns.",
        "sequence": "<C-o>"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "Command Discovery",
    "id": "discover-maps",
    "title": "Inspect active mappings",
    "eyebrow": "Command Discovery",
    "summary": ":map lists Normal, Visual, Select, and operator-pending mappings; :nmap restricts the list to Normal mode and :imap lists Insert mappings.",
    "detail": ":map lists Normal, Visual, Select, and operator-pending mappings; :nmap restricts the list to Normal mode and :imap lists Insert mappings.",
    "keys": [
      ":map",
      ":nmap",
      ":imap"
    ],
    "task": "List Normal-mode mappings.",
    "sequence": ":nmap<Enter>",
    "code": [
      "n  <Space>ff  Telescope find_files",
      "n  <C-n>      NvimTreeToggle",
      "-- active mappings"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": ":map",
        "description": ":map lists Normal, Visual, Select, and operator-pending mappings; :nmap restricts the list to Normal mode and :imap lists Insert mappings.",
        "sequence": ":map<Enter>"
      },
      {
        "key": ":nmap",
        "description": ":map lists Normal, Visual, Select, and operator-pending mappings; :nmap restricts the list to Normal mode and :imap lists Insert mappings.",
        "sequence": ":nmap<Enter>"
      },
      {
        "key": ":imap",
        "description": ":map lists Normal, Visual, Select, and operator-pending mappings; :nmap restricts the list to Normal mode and :imap lists Insert mappings.",
        "sequence": ":imap<Enter>"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "Command Discovery",
    "id": "discover-map-source",
    "title": "Find who defined a mapping",
    "eyebrow": "Command Discovery",
    "summary": ":verbose map followed by a key reports the mapping and the script that last set it.",
    "detail": ":verbose map followed by a key reports the mapping and the script that last set it.",
    "keys": [
      ":verbose map {key}"
    ],
    "task": "Inspect the Normal-mode Space f f mapping and its source.",
    "sequence": ":verbose nmap <Space>ff<Enter>",
    "code": [
      "<Space>ff -> Telescope find_files",
      "Last set from .../nvchad/mappings.lua",
      ""
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": ":verbose map {key}",
        "description": "Inspect the Normal-mode leader-ff mapping and the file that last set it.",
        "sequence": ":verbose nmap <Space>ff<Enter>"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "Command Discovery",
    "id": "discover-whichkey",
    "title": "Browse mappings with WhichKey",
    "eyebrow": "Command Discovery",
    "summary": "Space w K lists mappings and Space w k prompts for a prefix to inspect.",
    "detail": "Space w K lists mappings and Space w k prompts for a prefix to inspect.",
    "keys": [
      "Space wK",
      "Space wk"
    ],
    "task": "Open the complete WhichKey mapping list.",
    "sequence": "<Space>wK",
    "code": [
      "WhichKey",
      "  f  find",
      "  h  git hunks"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Space wK",
        "description": "Space w K lists mappings and Space w k prompts for a prefix to inspect.",
        "sequence": "<Space>wK"
      },
      {
        "key": "Space wk",
        "description": "Open the WhichKey prefix prompt, type Space f, and confirm.",
        "sequence": "<Space>wk<Space>f<Enter>"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "Command Discovery",
    "id": "discover-nvcheatsheet",
    "title": "Open NvCheatsheet",
    "eyebrow": "Command Discovery",
    "summary": "Space c h shows NVChad mappings that have descriptions.",
    "detail": "Space c h shows NVChad mappings that have descriptions.",
    "keys": [
      "Space ch"
    ],
    "task": "Open NvCheatsheet.",
    "sequence": "<Space>ch",
    "code": [
      "NvCheatsheet",
      "  General",
      "  Telescope"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Space ch",
        "description": "Space c h shows NVChad mappings that have descriptions.",
        "sequence": "<Space>ch"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "Command Discovery",
    "id": "discover-plugin-help",
    "title": "Ask the active plugin",
    "eyebrow": "Command Discovery",
    "summary": "Use context help such as g? in NvimTree, ? in Telescope Normal mode, and ? in Trouble to inspect local keys.",
    "detail": "Use context help such as g? in NvimTree, ? in Telescope Normal mode, and ? in Trouble to inspect local keys.",
    "keys": [
      "g?",
      "?"
    ],
    "task": "Open the active plugin's local help.",
    "sequence": "g?",
    "code": [
      "Plugin-local mappings",
      "  key  action",
      "  context matters"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "g?",
        "description": "Use context help such as g? in NvimTree, ? in Telescope Normal mode, and ? in Trouble to inspect local keys.",
        "sequence": "g?"
      },
      {
        "key": "?",
        "description": "Use context help such as g? in NvimTree, ? in Telescope Normal mode, and ? in Trouble to inspect local keys.",
        "sequence": "?"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "Command Discovery",
    "id": "discover-provenance",
    "title": "Classify a shortcut",
    "eyebrow": "Command Discovery",
    "summary": "Check whether a key is native Neovim, an NVChad default, a plugin-local mapping, or a custom mapping before relying on it.",
    "detail": "Check whether a key is native Neovim, an NVChad default, a plugin-local mapping, or a custom mapping before relying on it.",
    "keys": [
      ":verbose map {key}",
      "Space ch",
      "?"
    ],
    "task": "Open verbose mappings before relying on a shortcut.",
    "sequence": ":verbose map<Enter>",
    "code": [
      "mapping source",
      "  custom gitsigns on_attach",
      "  buffer-local"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": ":verbose map {key}",
        "description": "Inspect the Normal-mode leader-ff mapping and the file that last set it.",
        "sequence": ":verbose nmap <Space>ff<Enter>"
      },
      {
        "key": "Space ch",
        "description": "Check whether a key is native Neovim, an NVChad default, a plugin-local mapping, or a custom mapping before relying on it.",
        "sequence": "<Space>ch"
      },
      {
        "key": "?",
        "description": "Check whether a key is native Neovim, an NVChad default, a plugin-local mapping, or a custom mapping before relying on it.",
        "sequence": "?"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "Command Discovery",
    "id": "command-discovery-review",
    "title": "Command Discovery Review",
    "eyebrow": "Command Discovery",
    "summary": "Review every command introduced in Command Discovery before moving to the next category.",
    "detail": "Review every command introduced in Command Discovery before moving to the next category.",
    "keys": [
      ":help topic",
      "Ctrl+]",
      "Ctrl+o",
      ":map",
      ":nmap",
      ":imap",
      ":verbose map {key}",
      "Space wK",
      "Space wk",
      "Space ch",
      "g?",
      "?"
    ],
    "task": "",
    "sequence": ":help windows<Enter>",
    "code": [
      "*windows.txt*",
      "Editing with multiple windows",
      "|CTRL-W|"
    ],
    "tip": "Return to any command in Command Discovery that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": ":help topic",
        "description": ":help topic opens authoritative Neovim documentation; Ctrl+] follows a help tag and Ctrl+o returns.",
        "sequence": ":help windows<Enter>",
        "code": [
          "*windows.txt*",
          "Editing with multiple windows",
          "|CTRL-W|"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "Ctrl+]",
        "description": ":help topic opens authoritative Neovim documentation; Ctrl+] follows a help tag and Ctrl+o returns.",
        "sequence": "<C-]>",
        "code": [
          "*windows.txt*",
          "Editing with multiple windows",
          "|CTRL-W|"
        ],
        "cursor": [
          2,
          1
        ],
        "language": "text"
      },
      {
        "key": "Ctrl+o",
        "description": ":help topic opens authoritative Neovim documentation; Ctrl+] follows a help tag and Ctrl+o returns.",
        "sequence": "<C-o>",
        "code": [
          "*windows.txt*",
          "Editing with multiple windows",
          "|CTRL-W|"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": ":map",
        "description": ":map lists Normal, Visual, Select, and operator-pending mappings; :nmap restricts the list to Normal mode and :imap lists Insert mappings.",
        "sequence": ":map<Enter>",
        "code": [
          "n  <Space>ff  Telescope find_files",
          "n  <C-n>      NvimTreeToggle",
          "-- active mappings"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": ":nmap",
        "description": ":map lists Normal, Visual, Select, and operator-pending mappings; :nmap restricts the list to Normal mode and :imap lists Insert mappings.",
        "sequence": ":nmap<Enter>",
        "code": [
          "n  <Space>ff  Telescope find_files",
          "n  <C-n>      NvimTreeToggle",
          "-- active mappings"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": ":imap",
        "description": ":map lists Normal, Visual, Select, and operator-pending mappings; :nmap restricts the list to Normal mode and :imap lists Insert mappings.",
        "sequence": ":imap<Enter>",
        "code": [
          "n  <Space>ff  Telescope find_files",
          "n  <C-n>      NvimTreeToggle",
          "-- active mappings"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": ":verbose map {key}",
        "description": "Inspect the Normal-mode leader-ff mapping and the file that last set it.",
        "sequence": ":verbose nmap <Space>ff<Enter>",
        "code": [
          "<Space>ff -> Telescope find_files",
          "Last set from .../nvchad/mappings.lua",
          ""
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "Space wK",
        "description": "Space w K lists mappings and Space w k prompts for a prefix to inspect.",
        "sequence": "<Space>wK",
        "code": [
          "WhichKey",
          "  f  find",
          "  h  git hunks"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "Space wk",
        "description": "Open the WhichKey prefix prompt, type Space f, and confirm.",
        "sequence": "<Space>wk<Space>f<Enter>",
        "code": [
          "WhichKey",
          "  f  find",
          "  h  git hunks"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "Space ch",
        "description": "Space c h shows NVChad mappings that have descriptions.",
        "sequence": "<Space>ch",
        "code": [
          "NvCheatsheet",
          "  General",
          "  Telescope"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "g?",
        "description": "Use context help such as g? in NvimTree, ? in Telescope Normal mode, and ? in Trouble to inspect local keys.",
        "sequence": "g?",
        "code": [
          "Plugin-local mappings",
          "  key  action",
          "  context matters"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "?",
        "description": "Use context help such as g? in NvimTree, ? in Telescope Normal mode, and ? in Trouble to inspect local keys.",
        "sequence": "?",
        "code": [
          "Plugin-local mappings",
          "  key  action",
          "  context matters"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  }
] satisfies readonly Lesson[];

export default lessons;
