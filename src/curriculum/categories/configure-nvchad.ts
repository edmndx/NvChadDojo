import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Configure NVChad",
    "id": "custom-maps",
    "title": "Create a mapping",
    "eyebrow": "Configure NVChad",
    "summary": "NVChad uses vim.keymap.set in lua/mappings.lua. Add desc so NvCheatsheet can display it.",
    "detail": "From your Neovim config directory, open lua/mappings.lua and add vim.keymap.set after loading nvchad.mappings. This exercise opens the file; it does not install the example.",
    "keys": [
      ":e lua/mappings.lua"
    ],
    "task": "Enter command-line mode and open your mappings file.",
    "sequence": ":e lua/mappings.lua<Enter>",
    "code": [
      "local map = vim.keymap.set",
      "map('n', '<leader>q', '<cmd>close<cr>',",
      "  { desc = 'Close window' })"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": ":e lua/mappings.lua",
        "description": "NVChad uses vim.keymap.set in lua/mappings.lua. Add desc so NvCheatsheet can display it.",
        "sequence": ":e lua/mappings.lua<Enter>"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "lua"
  },
  {
    "group": "Configure NVChad",
    "id": "plugins",
    "title": "Extend plugins safely",
    "eyebrow": "Configure NVChad",
    "summary": "Plugin specs live under lua/plugins and are loaded by lazy.nvim. Prefer lazy-loading triggers.",
    "detail": "From the config directory, open lua/plugins/init.lua. Extend the existing plugin spec with opts; triggers must match when the plugin is needed.",
    "keys": [
      ":e lua/plugins/init.lua"
    ],
    "task": "Open the plugin configuration file.",
    "sequence": ":e lua/plugins/init.lua<Enter>",
    "code": [
      "return {",
      "  { 'stevearc/conform.nvim', opts = { formatters_by_ft = { lua = { 'stylua' } } } },",
      "}"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": ":e lua/plugins/init.lua",
        "description": "Plugin specs live under lua/plugins and are loaded by lazy.nvim. Prefer lazy-loading triggers.",
        "sequence": ":e lua/plugins/init.lua<Enter>"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "lua"
  },
  {
    "group": "Configure NVChad",
    "id": "chadrc",
    "title": "Shape the interface",
    "eyebrow": "Configure NVChad",
    "summary": "lua/chadrc.lua controls Base46 themes and NVChad UI options.",
    "detail": "From your Neovim config directory, open lua/chadrc.lua. The example returns the Base46 theme setting.",
    "keys": [
      ":e lua/chadrc.lua"
    ],
    "task": "Open chadrc.lua.",
    "sequence": ":e lua/chadrc.lua<Enter>",
    "code": [
      "return {",
      "  base46 = { theme = 'onedark' },",
      "}"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": ":e lua/chadrc.lua",
        "description": "lua/chadrc.lua controls Base46 themes and NVChad UI options.",
        "sequence": ":e lua/chadrc.lua<Enter>"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "lua"
  },
  {
    "group": "Configure NVChad",
    "id": "lsp-setup",
    "title": "Enable language servers",
    "eyebrow": "Configure NVChad",
    "summary": "Load NVChad's LSP defaults, then configure and enable servers with Neovim 0.11 APIs.",
    "detail": "From your config directory, open the LSP setup. Install the server executables and nvim-lspconfig definitions before vim.lsp.enable; opening this file alone does not attach a server.",
    "keys": [
      ":e lua/configs/lspconfig.lua"
    ],
    "task": "Open the LSP configuration.",
    "sequence": ":e lua/configs/lspconfig.lua<Enter>",
    "code": [
      "require('nvchad.configs.lspconfig').defaults()",
      "vim.lsp.enable({ 'html', 'cssls' })",
      ""
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": ":e lua/configs/lspconfig.lua",
        "description": "Load NVChad's LSP defaults, then configure and enable servers with Neovim 0.11 APIs.",
        "sequence": ":e lua/configs/lspconfig.lua<Enter>"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "lua"
  },
  {
    "group": "Configure NVChad",
    "id": "troubleshooting",
    "title": "Diagnose NVChad",
    "eyebrow": "Configure NVChad",
    "summary": "Start with :checkhealth, then inspect :Lazy, :Mason, and :messages before changing configuration.",
    "detail": "Use the diagnostic command that matches the failing layer: health for Neovim, Lazy for plugins, Mason for tools, and messages for recent errors.",
    "keys": [
      ":checkhealth",
      ":Lazy",
      ":Mason",
      ":messages"
    ],
    "task": "Run Neovim's health checks.",
    "sequence": ":checkhealth<Enter>",
    "code": [
      "NVIM HEALTHCHECK",
      "  configuration  OK",
      "  providers      review warnings",
      "  treesitter     OK"
    ],
    "tip": "Read the first actionable warning instead of reinstalling the whole configuration.",
    "reviewItems": [
      {
        "key": ":checkhealth",
        "description": "Start with :checkhealth, then inspect :Lazy, :Mason, and :messages before changing configuration.",
        "sequence": ":checkhealth<Enter>"
      },
      {
        "key": ":Lazy",
        "description": "Start with :checkhealth, then inspect :Lazy, :Mason, and :messages before changing configuration.",
        "sequence": ":Lazy<Enter>"
      },
      {
        "key": ":Mason",
        "description": "Start with :checkhealth, then inspect :Lazy, :Mason, and :messages before changing configuration.",
        "sequence": ":Mason<Enter>"
      },
      {
        "key": ":messages",
        "description": "Start with :checkhealth, then inspect :Lazy, :Mason, and :messages before changing configuration.",
        "sequence": ":messages<Enter>"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "Configure NVChad",
    "id": "finish",
    "title": "The daily loop",
    "eyebrow": "Configure NVChad",
    "summary": "Find, navigate, edit, format, diagnose, repeat. Speed arrives after accuracy.",
    "detail": "Use a file with a valid symbol under the cursor, an attached LSP and an available formatter. Wait for each picker or LSP request to finish before the next step.",
    "keys": [
      "Space ff",
      "gd",
      "ciw",
      "Space fm"
    ],
    "task": "Find a file, visit a definition, replace its current word with updated, and format.",
    "sequence": "<Space>ff<Enter>gdciwupdated<Esc><Space>fm",
    "code": [
      "const result = calculateTotal([12, 8]);",
      "console.log(result);",
      "",
      "function calculateTotal(items) {",
      "  return items.reduce((sum, item) => sum + item, 0);",
      "}"
    ],
    "tip": "Practice this loop in a real project until navigation and editing feel like one workflow.",
    "reviewItems": [
      {
        "key": "Space ff",
        "description": "Find, navigate, edit, format, diagnose, repeat. Speed arrives after accuracy.",
        "sequence": "<Space>ff"
      },
      {
        "key": "gd",
        "description": "In an LSP-attached buffer, use NVChad's gd mapping to request a definition.",
        "sequence": "gd",
        "code": [
          "const result = calculateTotal([12, 8]);",
          "console.log(result);",
          "",
          "function calculateTotal(items) {",
          "  return items.reduce((sum, item) => sum + item, 0);",
          "}"
        ],
        "cursor": [
          0,
          15
        ],
        "language": "javascript"
      },
      {
        "key": "ciw",
        "description": "In Normal mode, replace the word under the cursor with updated, then return to Normal mode.",
        "sequence": "ciwupdated<Esc>",
        "code": [
          "const old = 'value';",
          "console.log(old);",
          "// Replace the current word at this definition."
        ],
        "cursor": [
          0,
          6
        ],
        "language": "javascript"
      },
      {
        "key": "Space fm",
        "description": "In Normal or Visual mode, format through Conform with an available formatter or LSP fallback.",
        "sequence": "<Space>fm"
      }
    ],
    "cursor": [
      0,
      15
    ],
    "language": "javascript"
  },
  {
    "group": "Configure NVChad",
    "id": "configure-nvchad-review",
    "title": "Configure NVChad Review",
    "eyebrow": "Configure NVChad",
    "summary": "Review every command introduced in Configure NVChad before moving to the next category.",
    "detail": "Review every command introduced in Configure NVChad before moving to the next category.",
    "keys": [
      ":e lua/mappings.lua",
      ":e lua/plugins/init.lua",
      ":e lua/chadrc.lua",
      ":e lua/configs/lspconfig.lua",
      ":checkhealth",
      ":Lazy",
      ":Mason",
      ":messages",
      "Space ff",
      "gd",
      "ciw",
      "Space fm"
    ],
    "task": "",
    "sequence": ":e lua/mappings.lua<Enter>",
    "code": [
      "local map = vim.keymap.set",
      "map('n', '<leader>q', '<cmd>close<cr>',",
      "  { desc = 'Close window' })"
    ],
    "tip": "Return to any command in Configure NVChad that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": ":e lua/mappings.lua",
        "description": "NVChad uses vim.keymap.set in lua/mappings.lua. Add desc so NvCheatsheet can display it.",
        "sequence": ":e lua/mappings.lua<Enter>",
        "code": [
          "local map = vim.keymap.set",
          "map('n', '<leader>q', '<cmd>close<cr>',",
          "  { desc = 'Close window' })"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "lua"
      },
      {
        "key": ":e lua/plugins/init.lua",
        "description": "Plugin specs live under lua/plugins and are loaded by lazy.nvim. Prefer lazy-loading triggers.",
        "sequence": ":e lua/plugins/init.lua<Enter>",
        "code": [
          "return {",
          "  { 'stevearc/conform.nvim', opts = { formatters_by_ft = { lua = { 'stylua' } } } },",
          "}"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "lua"
      },
      {
        "key": ":e lua/chadrc.lua",
        "description": "lua/chadrc.lua controls Base46 themes and NVChad UI options.",
        "sequence": ":e lua/chadrc.lua<Enter>",
        "code": [
          "return {",
          "  base46 = { theme = 'onedark' },",
          "}"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "lua"
      },
      {
        "key": ":e lua/configs/lspconfig.lua",
        "description": "Load NVChad's LSP defaults, then configure and enable servers with Neovim 0.11 APIs.",
        "sequence": ":e lua/configs/lspconfig.lua<Enter>",
        "code": [
          "require('nvchad.configs.lspconfig').defaults()",
          "vim.lsp.enable({ 'html', 'cssls' })",
          ""
        ],
        "cursor": [
          0,
          0
        ],
        "language": "lua"
      },
      {
        "key": ":checkhealth",
        "description": "Start with :checkhealth, then inspect :Lazy, :Mason, and :messages before changing configuration.",
        "sequence": ":checkhealth<Enter>",
        "code": [
          "NVIM HEALTHCHECK",
          "  configuration  OK",
          "  providers      review warnings",
          "  treesitter     OK"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": ":Lazy",
        "description": "Start with :checkhealth, then inspect :Lazy, :Mason, and :messages before changing configuration.",
        "sequence": ":Lazy<Enter>",
        "code": [
          "NVIM HEALTHCHECK",
          "  configuration  OK",
          "  providers      review warnings",
          "  treesitter     OK"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": ":Mason",
        "description": "Start with :checkhealth, then inspect :Lazy, :Mason, and :messages before changing configuration.",
        "sequence": ":Mason<Enter>",
        "code": [
          "NVIM HEALTHCHECK",
          "  configuration  OK",
          "  providers      review warnings",
          "  treesitter     OK"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": ":messages",
        "description": "Start with :checkhealth, then inspect :Lazy, :Mason, and :messages before changing configuration.",
        "sequence": ":messages<Enter>",
        "code": [
          "NVIM HEALTHCHECK",
          "  configuration  OK",
          "  providers      review warnings",
          "  treesitter     OK"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "Space ff",
        "description": "Find, navigate, edit, format, diagnose, repeat. Speed arrives after accuracy.",
        "sequence": "<Space>ff",
        "code": [
          "const result = calculateTotal([12, 8]);",
          "console.log(result);",
          "",
          "function calculateTotal(items) {",
          "  return items.reduce((sum, item) => sum + item, 0);",
          "}"
        ],
        "cursor": [
          0,
          15
        ],
        "language": "javascript"
      },
      {
        "key": "gd",
        "description": "In an LSP-attached buffer, use NVChad's gd mapping to request a definition.",
        "sequence": "gd",
        "code": [
          "const result = calculateTotal([12, 8]);",
          "console.log(result);",
          "",
          "function calculateTotal(items) {",
          "  return items.reduce((sum, item) => sum + item, 0);",
          "}"
        ],
        "cursor": [
          0,
          15
        ],
        "language": "javascript"
      },
      {
        "key": "ciw",
        "description": "In Normal mode, replace the word under the cursor with updated, then return to Normal mode.",
        "sequence": "ciwupdated<Esc>",
        "code": [
          "const old = 'value';",
          "console.log(old);",
          "// Replace the current word at this definition."
        ],
        "cursor": [
          0,
          6
        ],
        "language": "javascript"
      },
      {
        "key": "Space fm",
        "description": "In Normal or Visual mode, format through Conform with an available formatter or LSP fallback.",
        "sequence": "<Space>fm",
        "code": [
          "const result = calculateTotal([12, 8]);",
          "console.log(result);",
          "",
          "function calculateTotal(items) {",
          "  return items.reduce((sum, item) => sum + item, 0);",
          "}"
        ],
        "cursor": [
          0,
          15
        ],
        "language": "javascript"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "lua"
  }
] satisfies readonly Lesson[];

export default lessons;
