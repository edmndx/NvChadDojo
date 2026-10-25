import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Diagnostics & Quickfix",
    "id": "diagnostics",
    "title": "Navigate diagnostics",
    "eyebrow": "Diagnostics & Quickfix",
    "summary": "[d and ]d move between diagnostics in modern Neovim setups.",
    "detail": "[d and ]d move between diagnostics in modern Neovim setups.",
    "keys": [
      "[d",
      "]d"
    ],
    "task": "Go to the next diagnostic.",
    "sequence": "]d",
    "code": [
      "// @ts-check",
      "/** @type {string} */",
      "const total = 42;",
      "console.log(total);"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "[d",
        "description": "[d and ]d move between diagnostics in modern Neovim setups.",
        "sequence": "[d"
      },
      {
        "key": "]d",
        "description": "[d and ]d move between diagnostics in modern Neovim setups.",
        "sequence": "]d"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "javascript"
  },
  {
    "group": "Diagnostics & Quickfix",
    "id": "diagnostic-details",
    "title": "Inspect the current diagnostic",
    "eyebrow": "Diagnostics & Quickfix",
    "summary": "vim.diagnostic.open_float() shows diagnostics for the current line by default; source display depends on diagnostic configuration.",
    "detail": "vim.diagnostic.open_float() shows diagnostics for the current line by default; source display depends on diagnostic configuration.",
    "keys": [
      ":lua vim.diagnostic.open_float()"
    ],
    "task": "Open diagnostic details for the current line.",
    "sequence": ":lua vim.diagnostic.open_float()<Enter>",
    "code": [
      "// @ts-check",
      "/** @type {string} */",
      "const total = 42;",
      "console.log(total);"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": ":lua vim.diagnostic.open_float()",
        "description": "vim.diagnostic.open_float() shows diagnostics for the current line by default; source display depends on diagnostic configuration.",
        "sequence": ":lua vim.diagnostic.open_float()<Enter>"
      }
    ],
    "cursor": [
      2,
      6
    ],
    "language": "javascript"
  },
  {
    "group": "Diagnostics & Quickfix",
    "id": "diagnostic-location-list",
    "title": "Collect diagnostics in a location list",
    "eyebrow": "Diagnostics & Quickfix",
    "summary": "Space d s fills the current window's location list with diagnostics.",
    "detail": "Space d s calls vim.diagnostic.setloclist(): it fills and opens the current window's location list with diagnostics from the current buffer.",
    "keys": [
      "Space ds"
    ],
    "task": "Create a diagnostic location list.",
    "sequence": "<Space>ds",
    "code": [
      "mappings.lua | 12 | undefined global",
      "mappings.lua | 31 | missing field",
      "-- current buffer diagnostics in this window's location list"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Space ds",
        "description": "Space d s fills the current window's location list with diagnostics.",
        "sequence": "<Space>ds"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "Diagnostics & Quickfix",
    "id": "quickfix-list",
    "title": "Navigate a quickfix list",
    "eyebrow": "Diagnostics & Quickfix",
    "summary": ":copen opens the current quickfix list; :cnext and :cprev navigate its entries; :cclose closes the list window.",
    "detail": ":copen opens the current quickfix list; :cnext and :cprev navigate its entries; :cclose closes the list window.",
    "keys": [
      ":copen",
      ":cnext",
      ":cprev",
      ":cclose"
    ],
    "task": "Open quickfix, visit the next item, then close it.",
    "sequence": ":copen<Enter>:cnext<Enter>:cclose<Enter>",
    "code": [
      "src/App.tsx:18 warning",
      "src/lessons.ts:42 error",
      "-- project-wide list"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": ":copen",
        "description": ":copen opens the current quickfix list; :cnext and :cprev navigate its entries; :cclose closes the list window.",
        "sequence": ":copen<Enter>"
      },
      {
        "key": ":cnext",
        "description": ":copen opens the current quickfix list; :cnext and :cprev navigate its entries; :cclose closes the list window.",
        "sequence": ":cnext<Enter>"
      },
      {
        "key": ":cprev",
        "description": ":copen opens the current quickfix list; :cnext and :cprev navigate its entries; :cclose closes the list window.",
        "sequence": ":cprev<Enter>"
      },
      {
        "key": ":cclose",
        "description": ":copen opens the current quickfix list; :cnext and :cprev navigate its entries; :cclose closes the list window.",
        "sequence": ":cclose<Enter>"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "Diagnostics & Quickfix",
    "id": "location-list",
    "title": "Navigate a location list",
    "eyebrow": "Diagnostics & Quickfix",
    "summary": ":lopen displays the current window's results; :lnext, :lprev, and :lclose manage them.",
    "detail": ":lopen displays the current window's results; :lnext, :lprev, and :lclose manage them.",
    "keys": [
      ":lopen",
      ":lnext",
      ":lprev",
      ":lclose"
    ],
    "task": "Open the location list, visit its next item, then close it.",
    "sequence": ":lopen<Enter>:lnext<Enter>:lclose<Enter>",
    "code": [
      "current window diagnostics",
      "  line 8: unused local",
      "  line 21: unknown field"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": ":lopen",
        "description": ":lopen displays the current window's results; :lnext, :lprev, and :lclose manage them.",
        "sequence": ":lopen<Enter>"
      },
      {
        "key": ":lnext",
        "description": ":lopen displays the current window's results; :lnext, :lprev, and :lclose manage them.",
        "sequence": ":lnext<Enter>"
      },
      {
        "key": ":lprev",
        "description": ":lopen displays the current window's results; :lnext, :lprev, and :lclose manage them.",
        "sequence": ":lprev<Enter>"
      },
      {
        "key": ":lclose",
        "description": ":lopen displays the current window's results; :lnext, :lprev, and :lclose manage them.",
        "sequence": ":lclose<Enter>"
      }
    ],
    "cursor": [
      1,
      2
    ],
    "language": "text"
  },
  {
    "group": "Diagnostics & Quickfix",
    "id": "diagnostic-code-action",
    "title": "Fix a diagnostic with a code action",
    "eyebrow": "Diagnostics & Quickfix",
    "summary": "Move to a diagnostic, inspect it, then reuse gra to request an LSP quick fix.",
    "detail": "Navigation is owned by this category; gra is composed from the earlier LSP action lesson.",
    "keys": [
      "]d",
      "gra"
    ],
    "task": "Move to the next diagnostic and open its code actions.",
    "sequence": "]dgra",
    "code": [
      "// @ts-check",
      "const total = 1;",
      "console.log(totla);",
      "console.log(total);"
    ],
    "tip": "The JavaScript fixture intentionally misspells total as totla. A supporting JavaScript language server can diagnose it and offer a spelling fix.",
    "reviewItems": [
      {
        "key": "]d",
        "description": "Move to a diagnostic, inspect it, then reuse gra to request an LSP quick fix.",
        "sequence": "]d"
      },
      {
        "key": "gra",
        "description": "With an available code action, type 1 and Enter in Neovim's default numbered action prompt.",
        "sequence": "gra1<Enter>",
        "cursor": [
          2,
          12
        ]
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "javascript"
  },
  {
    "group": "Diagnostics & Quickfix",
    "id": "trouble-setup",
    "title": "Add Trouble optionally",
    "eyebrow": "Diagnostics & Quickfix",
    "summary": "Trouble is optional. Add folke/trouble.nvim through lazy.nvim before using its suggested Space x mappings.",
    "detail": "Trouble is optional. Add folke/trouble.nvim through lazy.nvim before using its suggested Space x mappings.",
    "keys": [
      ":Lazy"
    ],
    "task": "Open the plugin manager to verify Trouble.",
    "sequence": ":Lazy<Enter>",
    "code": [
      "folke/trouble.nvim",
      "  status: loaded",
      "  command: Trouble"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": ":Lazy",
        "description": "Trouble is optional. Add folke/trouble.nvim through lazy.nvim before using its suggested Space x mappings.",
        "sequence": ":Lazy<Enter>"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "Diagnostics & Quickfix",
    "id": "trouble-diagnostics",
    "title": "Browse diagnostics with Trouble",
    "eyebrow": "Diagnostics & Quickfix",
    "summary": "Space x x opens workspace diagnostics and Space x X limits the view to the current buffer.",
    "detail": "Space x x opens workspace diagnostics and Space x X limits the view to the current buffer.",
    "keys": [
      "Space xx",
      "Space xX"
    ],
    "task": "Open workspace diagnostics in Trouble.",
    "sequence": "<Space>xx",
    "code": [
      "Diagnostics",
      "  src/App.tsx",
      "  src/lessons.ts"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Space xx",
        "description": "With Trouble installed and its suggested mappings configured: Space x x opens workspace diagnostics and Space x X limits the view to the current buffer.",
        "sequence": "<Space>xx"
      },
      {
        "key": "Space xX",
        "description": "With Trouble installed and its suggested mappings configured: Space x x opens workspace diagnostics and Space x X limits the view to the current buffer.",
        "sequence": "<Space>xX"
      }
    ],
    "cursor": [
      1,
      2
    ],
    "language": "text"
  },
  {
    "group": "Diagnostics & Quickfix",
    "id": "trouble-lists",
    "title": "Open lists with Trouble",
    "eyebrow": "Diagnostics & Quickfix",
    "summary": "Space x Q opens quickfix and Space x L opens the location list in Trouble.",
    "detail": "Space x Q opens quickfix and Space x L opens the location list in Trouble.",
    "keys": [
      "Space xQ",
      "Space xL"
    ],
    "task": "Open the quickfix list in Trouble.",
    "sequence": "<Space>xQ",
    "code": [
      "Quickfix",
      "  1 App.tsx:18",
      "  2 lessons.ts:42"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Space xQ",
        "description": "With Trouble installed and its suggested mappings configured: Space x Q opens quickfix and Space x L opens the location list in Trouble.",
        "sequence": "<Space>xQ"
      },
      {
        "key": "Space xL",
        "description": "With Trouble installed and its suggested mappings configured: Space x Q opens quickfix and Space x L opens the location list in Trouble.",
        "sequence": "<Space>xL"
      }
    ],
    "cursor": [
      1,
      2
    ],
    "language": "text"
  },
  {
    "group": "Diagnostics & Quickfix",
    "id": "trouble-navigation",
    "title": "Inspect Trouble results",
    "eyebrow": "Diagnostics & Quickfix",
    "summary": "Enter jumps, Ctrl+s opens a split, Ctrl+v opens a vertical split, p previews, and q closes Trouble.",
    "detail": "Enter jumps, Ctrl+s opens a split, Ctrl+v opens a vertical split, p previews, and q closes Trouble.",
    "keys": [
      "Enter",
      "Ctrl+s",
      "Ctrl+v",
      "p",
      "q"
    ],
    "task": "Preview the selected issue, then close Trouble.",
    "sequence": "pq",
    "code": [
      "Trouble result",
      "  preview: type mismatch",
      "  source: tsserver"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Enter",
        "description": "Enter jumps, Ctrl+s opens a split, Ctrl+v opens a vertical split, p previews, and q closes Trouble.",
        "sequence": "<Enter>"
      },
      {
        "key": "Ctrl+s",
        "description": "Enter jumps, Ctrl+s opens a split, Ctrl+v opens a vertical split, p previews, and q closes Trouble.",
        "sequence": "<C-s>"
      },
      {
        "key": "Ctrl+v",
        "description": "Enter jumps, Ctrl+s opens a split, Ctrl+v opens a vertical split, p previews, and q closes Trouble.",
        "sequence": "<C-v>"
      },
      {
        "key": "p",
        "description": "Enter jumps, Ctrl+s opens a split, Ctrl+v opens a vertical split, p previews, and q closes Trouble.",
        "sequence": "p"
      },
      {
        "key": "q",
        "description": "Enter jumps, Ctrl+s opens a split, Ctrl+v opens a vertical split, p previews, and q closes Trouble.",
        "sequence": "q"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "Diagnostics & Quickfix",
    "id": "diagnostics-quickfix-review",
    "title": "Diagnostics & Quickfix Review",
    "eyebrow": "Diagnostics & Quickfix",
    "summary": "Review every command introduced in Diagnostics & Quickfix before moving to the next category.",
    "detail": "Review every command introduced in Diagnostics & Quickfix before moving to the next category.",
    "keys": [
      "[d",
      "]d",
      ":lua vim.diagnostic.open_float()",
      "Space ds",
      ":copen",
      ":cnext",
      ":cprev",
      ":cclose",
      ":lopen",
      ":lnext",
      ":lprev",
      ":lclose",
      "gra",
      ":Lazy",
      "Space xx",
      "Space xX",
      "Space xQ",
      "Space xL",
      "Enter",
      "Ctrl+s",
      "Ctrl+v",
      "p",
      "q"
    ],
    "task": "",
    "sequence": "]d",
    "code": [
      "// @ts-check",
      "/** @type {string} */",
      "const total = 42;",
      "console.log(total);"
    ],
    "tip": "Return to any command in Diagnostics & Quickfix that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "[d",
        "description": "[d and ]d move between diagnostics in modern Neovim setups.",
        "sequence": "[d",
        "code": [
          "// @ts-check",
          "/** @type {string} */",
          "const total = 42;",
          "console.log(total);"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "javascript"
      },
      {
        "key": "]d",
        "description": "[d and ]d move between diagnostics in modern Neovim setups.",
        "sequence": "]d",
        "code": [
          "// @ts-check",
          "/** @type {string} */",
          "const total = 42;",
          "console.log(total);"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "javascript"
      },
      {
        "key": ":lua vim.diagnostic.open_float()",
        "description": "vim.diagnostic.open_float() shows diagnostics for the current line by default; source display depends on diagnostic configuration.",
        "sequence": ":lua vim.diagnostic.open_float()<Enter>",
        "code": [
          "// @ts-check",
          "/** @type {string} */",
          "const total = 42;",
          "console.log(total);"
        ],
        "cursor": [
          2,
          6
        ],
        "language": "javascript"
      },
      {
        "key": "Space ds",
        "description": "Space d s fills the current window's location list with diagnostics.",
        "sequence": "<Space>ds",
        "code": [
          "mappings.lua | 12 | undefined global",
          "mappings.lua | 31 | missing field",
          "-- current buffer diagnostics in this window's location list"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": ":copen",
        "description": ":copen opens the current quickfix list; :cnext and :cprev navigate its entries; :cclose closes the list window.",
        "sequence": ":copen<Enter>",
        "code": [
          "src/App.tsx:18 warning",
          "src/lessons.ts:42 error",
          "-- project-wide list"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": ":cnext",
        "description": ":copen opens the current quickfix list; :cnext and :cprev navigate its entries; :cclose closes the list window.",
        "sequence": ":cnext<Enter>",
        "code": [
          "src/App.tsx:18 warning",
          "src/lessons.ts:42 error",
          "-- project-wide list"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": ":cprev",
        "description": ":copen opens the current quickfix list; :cnext and :cprev navigate its entries; :cclose closes the list window.",
        "sequence": ":cprev<Enter>",
        "code": [
          "src/App.tsx:18 warning",
          "src/lessons.ts:42 error",
          "-- project-wide list"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": ":cclose",
        "description": ":copen opens the current quickfix list; :cnext and :cprev navigate its entries; :cclose closes the list window.",
        "sequence": ":cclose<Enter>",
        "code": [
          "src/App.tsx:18 warning",
          "src/lessons.ts:42 error",
          "-- project-wide list"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": ":lopen",
        "description": ":lopen displays the current window's results; :lnext, :lprev, and :lclose manage them.",
        "sequence": ":lopen<Enter>",
        "code": [
          "current window diagnostics",
          "  line 8: unused local",
          "  line 21: unknown field"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": ":lnext",
        "description": ":lopen displays the current window's results; :lnext, :lprev, and :lclose manage them.",
        "sequence": ":lnext<Enter>",
        "code": [
          "current window diagnostics",
          "  line 8: unused local",
          "  line 21: unknown field"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": ":lprev",
        "description": ":lopen displays the current window's results; :lnext, :lprev, and :lclose manage them.",
        "sequence": ":lprev<Enter>",
        "code": [
          "current window diagnostics",
          "  line 8: unused local",
          "  line 21: unknown field"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": ":lclose",
        "description": ":lopen displays the current window's results; :lnext, :lprev, and :lclose manage them.",
        "sequence": ":lclose<Enter>",
        "code": [
          "current window diagnostics",
          "  line 8: unused local",
          "  line 21: unknown field"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "gra",
        "description": "With an available code action, type 1 and Enter in Neovim's default numbered action prompt.",
        "sequence": "gra1<Enter>",
        "code": [
          "// @ts-check",
          "const total = 1;",
          "console.log(totla);",
          "console.log(total);"
        ],
        "cursor": [
          2,
          12
        ],
        "language": "javascript"
      },
      {
        "key": ":Lazy",
        "description": "Trouble is optional. Add folke/trouble.nvim through lazy.nvim before using its suggested Space x mappings.",
        "sequence": ":Lazy<Enter>",
        "code": [
          "folke/trouble.nvim",
          "  status: loaded",
          "  command: Trouble"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "Space xx",
        "description": "With Trouble installed and its suggested mappings configured: Space x x opens workspace diagnostics and Space x X limits the view to the current buffer.",
        "sequence": "<Space>xx",
        "code": [
          "Diagnostics",
          "  src/App.tsx",
          "  src/lessons.ts"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "Space xX",
        "description": "With Trouble installed and its suggested mappings configured: Space x x opens workspace diagnostics and Space x X limits the view to the current buffer.",
        "sequence": "<Space>xX",
        "code": [
          "Diagnostics",
          "  src/App.tsx",
          "  src/lessons.ts"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "Space xQ",
        "description": "With Trouble installed and its suggested mappings configured: Space x Q opens quickfix and Space x L opens the location list in Trouble.",
        "sequence": "<Space>xQ",
        "code": [
          "Quickfix",
          "  1 App.tsx:18",
          "  2 lessons.ts:42"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "Space xL",
        "description": "With Trouble installed and its suggested mappings configured: Space x Q opens quickfix and Space x L opens the location list in Trouble.",
        "sequence": "<Space>xL",
        "code": [
          "Quickfix",
          "  1 App.tsx:18",
          "  2 lessons.ts:42"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "Enter",
        "description": "Enter jumps, Ctrl+s opens a split, Ctrl+v opens a vertical split, p previews, and q closes Trouble.",
        "sequence": "<Enter>",
        "code": [
          "Trouble result",
          "  preview: type mismatch",
          "  source: tsserver"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "Ctrl+s",
        "description": "Enter jumps, Ctrl+s opens a split, Ctrl+v opens a vertical split, p previews, and q closes Trouble.",
        "sequence": "<C-s>",
        "code": [
          "Trouble result",
          "  preview: type mismatch",
          "  source: tsserver"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "Ctrl+v",
        "description": "Enter jumps, Ctrl+s opens a split, Ctrl+v opens a vertical split, p previews, and q closes Trouble.",
        "sequence": "<C-v>",
        "code": [
          "Trouble result",
          "  preview: type mismatch",
          "  source: tsserver"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "p",
        "description": "Enter jumps, Ctrl+s opens a split, Ctrl+v opens a vertical split, p previews, and q closes Trouble.",
        "sequence": "p",
        "code": [
          "Trouble result",
          "  preview: type mismatch",
          "  source: tsserver"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "q",
        "description": "Enter jumps, Ctrl+s opens a split, Ctrl+v opens a vertical split, p previews, and q closes Trouble.",
        "sequence": "q",
        "code": [
          "Trouble result",
          "  preview: type mismatch",
          "  source: tsserver"
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
    "language": "javascript"
  }
] satisfies readonly Lesson[];

export default lessons;
