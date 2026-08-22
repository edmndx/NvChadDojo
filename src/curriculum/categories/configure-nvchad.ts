import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Configure NVChad",
    "id": "custom-maps",
    "title": "Create a mapping",
    "eyebrow": "Configure NVChad",
    "summary": "NVChad uses vim.keymap.set in lua/mappings.lua. Add desc so NvCheatsheet can display it.",
    "detail": "NVChad uses vim.keymap.set in lua/mappings.lua. Add desc so NvCheatsheet can display it.",
    "keys": [
      "vim.keymap.set"
    ],
    "task": "Enter command-line mode and open your mappings file.",
    "sequence": ":e lua/mappings.lua<Enter>",
    "code": [
      "local map = vim.keymap.set",
      "map('n', '<leader>x', '<cmd>close<cr>',",
      "  { desc = 'Close window' })"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Configure NVChad",
    "id": "plugins",
    "title": "Extend plugins safely",
    "eyebrow": "Configure NVChad",
    "summary": "Plugin specs live under lua/plugins and are loaded by lazy.nvim. Prefer lazy-loading triggers.",
    "detail": "Plugin specs live under lua/plugins and are loaded by lazy.nvim. Prefer lazy-loading triggers.",
    "keys": [
      "lazy.nvim",
      "opts"
    ],
    "task": "Open the plugin configuration file.",
    "sequence": ":e lua/plugins/init.lua<Enter>",
    "code": [
      "return {",
      "  { 'author/plugin', event = 'VeryLazy' },",
      "}"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Configure NVChad",
    "id": "chadrc",
    "title": "Shape the interface",
    "eyebrow": "Configure NVChad",
    "summary": "lua/chadrc.lua controls Base46 themes and NVChad UI options.",
    "detail": "lua/chadrc.lua controls Base46 themes and NVChad UI options.",
    "keys": [
      "chadrc.lua"
    ],
    "task": "Open chadrc.lua.",
    "sequence": ":e lua/chadrc.lua<Enter>",
    "code": [
      "return {",
      "  base46 = { theme = 'onedark' },",
      "}"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Configure NVChad",
    "id": "lsp-setup",
    "title": "Enable language servers",
    "eyebrow": "Configure NVChad",
    "summary": "Load NVChad's LSP defaults, then configure and enable servers with Neovim 0.11 APIs.",
    "detail": "Load NVChad's LSP defaults, then configure and enable servers with Neovim 0.11 APIs.",
    "keys": [
      "vim.lsp.enable"
    ],
    "task": "Open the LSP configuration.",
    "sequence": ":e lua/configs/lspconfig.lua<Enter>",
    "code": [
      "require('nvchad.configs.lspconfig').defaults()",
      "vim.lsp.enable({ 'html', 'cssls' })",
      ""
    ],
    "tip": "Keep your hands on the home row."
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
    "tip": "Read the first actionable warning instead of reinstalling the whole configuration."
  },
  {
    "group": "Configure NVChad",
    "id": "finish",
    "title": "The daily loop",
    "eyebrow": "Configure NVChad",
    "summary": "Find, navigate, edit, format, diagnose, repeat. Speed arrives after accuracy.",
    "detail": "A small set of composable commands beats memorizing hundreds of isolated shortcuts.",
    "keys": [
      "Space ff",
      "gd",
      "ciw",
      "Space fm"
    ],
    "task": "Run the final sequence: find files, definition, change word, format.",
    "sequence": "<Space>ffgdciw<Esc><Space>fm",
    "code": [
      "-- You now have a working vocabulary.",
      "-- Use it in real projects today.",
      "return 'keep practicing'"
    ],
    "tip": "Practice this loop in a real project until navigation and editing feel like one workflow."
  },
  {
    "group": "Configure NVChad",
    "id": "configure-nvchad-review",
    "title": "Configure NVChad Review",
    "eyebrow": "Configure NVChad",
    "summary": "Review every command introduced in Configure NVChad before moving to the next category.",
    "detail": "Review every command introduced in Configure NVChad before moving to the next category.",
    "keys": [
      "vim.keymap.set",
      "lazy.nvim",
      "opts",
      "chadrc.lua",
      "vim.lsp.enable",
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
      "map('n', '<leader>x', '<cmd>close<cr>',",
      "  { desc = 'Close window' })"
    ],
    "tip": "Return to any command in Configure NVChad that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "vim.keymap.set",
        "description": "NVChad uses vim.keymap.set in lua/mappings.lua. Add desc so NvCheatsheet can display it.",
        "sequence": ":e lua/mappings.lua<Enter>"
      },
      {
        "key": "lazy.nvim",
        "description": "Plugin specs live under lua/plugins and are loaded by lazy.nvim. Prefer lazy-loading triggers.",
        "sequence": ":e lua/plugins/init.lua<Enter>"
      },
      {
        "key": "opts",
        "description": "Plugin specs live under lua/plugins and are loaded by lazy.nvim. Prefer lazy-loading triggers.",
        "sequence": ":e lua/plugins/init.lua<Enter>"
      },
      {
        "key": "chadrc.lua",
        "description": "lua/chadrc.lua controls Base46 themes and NVChad UI options.",
        "sequence": ":e lua/chadrc.lua<Enter>"
      },
      {
        "key": "vim.lsp.enable",
        "description": "Load NVChad's LSP defaults, then configure and enable servers with Neovim 0.11 APIs.",
        "sequence": ":e lua/configs/lspconfig.lua<Enter>"
      },
      {
        "key": ":checkhealth",
        "description": "Start with :checkhealth, then inspect :Lazy, :Mason, and :messages before changing configuration.",
        "sequence": ":checkhealth<Enter>"
      },
      {
        "key": ":Lazy",
        "description": "Start with :checkhealth, then inspect :Lazy, :Mason, and :messages before changing configuration.",
        "sequence": ":checkhealth<Enter>"
      },
      {
        "key": ":Mason",
        "description": "Start with :checkhealth, then inspect :Lazy, :Mason, and :messages before changing configuration.",
        "sequence": ":checkhealth<Enter>"
      },
      {
        "key": ":messages",
        "description": "Start with :checkhealth, then inspect :Lazy, :Mason, and :messages before changing configuration.",
        "sequence": ":checkhealth<Enter>"
      },
      {
        "key": "Space ff",
        "description": "Find, navigate, edit, format, diagnose, repeat. Speed arrives after accuracy.",
        "sequence": "<Space>ffgdciw<Esc><Space>fm"
      },
      {
        "key": "gd",
        "description": "Find, navigate, edit, format, diagnose, repeat. Speed arrives after accuracy.",
        "sequence": "<Space>ffgdciw<Esc><Space>fm"
      },
      {
        "key": "ciw",
        "description": "Find, navigate, edit, format, diagnose, repeat. Speed arrives after accuracy.",
        "sequence": "<Space>ffgdciw<Esc><Space>fm"
      },
      {
        "key": "Space fm",
        "description": "Find, navigate, edit, format, diagnose, repeat. Speed arrives after accuracy.",
        "sequence": "<Space>ffgdciw<Esc><Space>fm"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
