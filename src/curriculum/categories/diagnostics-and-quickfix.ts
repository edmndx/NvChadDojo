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
      "local total: string = 42",
      "--              ^ type mismatch",
      "return total"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Diagnostics & Quickfix",
    "id": "diagnostic-details",
    "title": "Inspect the current diagnostic",
    "eyebrow": "Diagnostics & Quickfix",
    "summary": "vim.diagnostic.open_float() shows the complete message and source for the diagnostic under the cursor.",
    "detail": "vim.diagnostic.open_float() shows the complete message and source for the diagnostic under the cursor.",
    "keys": [
      ":lua vim.diagnostic.open_float()"
    ],
    "task": "Open diagnostic details for the current line.",
    "sequence": ":lua vim.diagnostic.open_float()<Enter>",
    "code": [
      "Diagnostics:",
      "  error TS2322",
      "  Type 'number' is not assignable to string"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Diagnostics & Quickfix",
    "id": "diagnostic-location-list",
    "title": "Collect diagnostics in a location list",
    "eyebrow": "Diagnostics & Quickfix",
    "summary": "Space d s fills the current window's location list with diagnostics.",
    "detail": "Space d s fills the current window's location list with diagnostics.",
    "keys": [
      "Space ds"
    ],
    "task": "Create a diagnostic location list.",
    "sequence": "<Space>ds",
    "code": [
      "mappings.lua | 12 | undefined global",
      "plugins.lua  | 31 | missing field",
      "-- location list"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Diagnostics & Quickfix",
    "id": "quickfix-list",
    "title": "Navigate a quickfix list",
    "eyebrow": "Diagnostics & Quickfix",
    "summary": ":copen displays project-wide results; :cnext and :cprev navigate; :cclose closes the list window.",
    "detail": ":copen displays project-wide results; :cnext and :cprev navigate; :cclose closes the list window.",
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
    "tip": "Keep your hands on the home row."
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
    "tip": "Keep your hands on the home row."
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
      "local total: string = 42",
      "-- quick fix: change type to number",
      "return total"
    ],
    "tip": "Keep your hands on the home row."
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
    "tip": "Keep your hands on the home row."
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
    "tip": "Keep your hands on the home row."
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
    "tip": "Keep your hands on the home row."
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
    "tip": "Keep your hands on the home row."
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
      "local total: string = 42",
      "--              ^ type mismatch",
      "return total"
    ],
    "tip": "Return to any command in Diagnostics & Quickfix that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "[d",
        "description": "[d and ]d move between diagnostics in modern Neovim setups.",
        "sequence": "]d"
      },
      {
        "key": "]d",
        "description": "[d and ]d move between diagnostics in modern Neovim setups.",
        "sequence": "]d"
      },
      {
        "key": ":lua vim.diagnostic.open_float()",
        "description": "vim.diagnostic.open_float() shows the complete message and source for the diagnostic under the cursor.",
        "sequence": ":lua vim.diagnostic.open_float()<Enter>"
      },
      {
        "key": "Space ds",
        "description": "Space d s fills the current window's location list with diagnostics.",
        "sequence": "<Space>ds"
      },
      {
        "key": ":copen",
        "description": ":copen displays project-wide results; :cnext and :cprev navigate; :cclose closes the list window.",
        "sequence": ":copen<Enter>:cnext<Enter>:cclose<Enter>"
      },
      {
        "key": ":cnext",
        "description": ":copen displays project-wide results; :cnext and :cprev navigate; :cclose closes the list window.",
        "sequence": ":copen<Enter>:cnext<Enter>:cclose<Enter>"
      },
      {
        "key": ":cprev",
        "description": ":copen displays project-wide results; :cnext and :cprev navigate; :cclose closes the list window.",
        "sequence": ":copen<Enter>:cnext<Enter>:cclose<Enter>"
      },
      {
        "key": ":cclose",
        "description": ":copen displays project-wide results; :cnext and :cprev navigate; :cclose closes the list window.",
        "sequence": ":copen<Enter>:cnext<Enter>:cclose<Enter>"
      },
      {
        "key": ":lopen",
        "description": ":lopen displays the current window's results; :lnext, :lprev, and :lclose manage them.",
        "sequence": ":lopen<Enter>:lnext<Enter>:lclose<Enter>"
      },
      {
        "key": ":lnext",
        "description": ":lopen displays the current window's results; :lnext, :lprev, and :lclose manage them.",
        "sequence": ":lopen<Enter>:lnext<Enter>:lclose<Enter>"
      },
      {
        "key": ":lprev",
        "description": ":lopen displays the current window's results; :lnext, :lprev, and :lclose manage them.",
        "sequence": ":lopen<Enter>:lnext<Enter>:lclose<Enter>"
      },
      {
        "key": ":lclose",
        "description": ":lopen displays the current window's results; :lnext, :lprev, and :lclose manage them.",
        "sequence": ":lopen<Enter>:lnext<Enter>:lclose<Enter>"
      },
      {
        "key": "gra",
        "description": "Move to a diagnostic, inspect it, then reuse gra to request an LSP quick fix.",
        "sequence": "]dgra"
      },
      {
        "key": ":Lazy",
        "description": "Trouble is optional. Add folke/trouble.nvim through lazy.nvim before using its suggested Space x mappings.",
        "sequence": ":Lazy<Enter>"
      },
      {
        "key": "Space xx",
        "description": "Space x x opens workspace diagnostics and Space x X limits the view to the current buffer.",
        "sequence": "<Space>xx"
      },
      {
        "key": "Space xX",
        "description": "Space x x opens workspace diagnostics and Space x X limits the view to the current buffer.",
        "sequence": "<Space>xx"
      },
      {
        "key": "Space xQ",
        "description": "Space x Q opens quickfix and Space x L opens the location list in Trouble.",
        "sequence": "<Space>xQ"
      },
      {
        "key": "Space xL",
        "description": "Space x Q opens quickfix and Space x L opens the location list in Trouble.",
        "sequence": "<Space>xQ"
      },
      {
        "key": "Enter",
        "description": "Enter jumps, Ctrl+s opens a split, Ctrl+v opens a vertical split, p previews, and q closes Trouble.",
        "sequence": "pq"
      },
      {
        "key": "Ctrl+s",
        "description": "Enter jumps, Ctrl+s opens a split, Ctrl+v opens a vertical split, p previews, and q closes Trouble.",
        "sequence": "pq"
      },
      {
        "key": "Ctrl+v",
        "description": "Enter jumps, Ctrl+s opens a split, Ctrl+v opens a vertical split, p previews, and q closes Trouble.",
        "sequence": "pq"
      },
      {
        "key": "p",
        "description": "Enter jumps, Ctrl+s opens a split, Ctrl+v opens a vertical split, p previews, and q closes Trouble.",
        "sequence": "pq"
      },
      {
        "key": "q",
        "description": "Enter jumps, Ctrl+s opens a split, Ctrl+v opens a vertical split, p previews, and q closes Trouble.",
        "sequence": "pq"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
