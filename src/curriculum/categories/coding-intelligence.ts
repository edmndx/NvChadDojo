import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Coding Intelligence",
    "id": "lsp-definition",
    "title": "Go to definition",
    "eyebrow": "Coding Intelligence",
    "summary": "With an attached LSP, NVChad v2.5 maps gd to the symbol definition.",
    "detail": "gd is supplied by NVChad's buffer-local LSP setup at this pinned baseline; it requires an attached server that supports definitions.",
    "keys": [
      "g",
      "d"
    ],
    "task": "Jump to the definition under the cursor.",
    "sequence": "gd",
    "code": [
      "local result = calculateTotal(items)",
      "return result",
      "-- calculateTotal is defined elsewhere"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Coding Intelligence",
    "id": "lsp-hover",
    "title": "Inspect a symbol",
    "eyebrow": "Coding Intelligence",
    "summary": "K asks the language server for hover documentation.",
    "detail": "K asks the language server for hover documentation.",
    "keys": [
      "K"
    ],
    "task": "Show hover information.",
    "sequence": "K",
    "code": [
      "vim.lsp.enable(servers)",
      "-- cursor on enable",
      "return true"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Coding Intelligence",
    "id": "format",
    "title": "Format deliberately",
    "eyebrow": "Coding Intelligence",
    "summary": "Space f m formats through Conform in NVChad's default mappings.",
    "detail": "Space f m formats through Conform in NVChad's default mappings.",
    "keys": [
      "Space",
      "f",
      "m"
    ],
    "task": "Format the current buffer.",
    "sequence": "<Space>fm",
    "code": [
      "local messy={one=1,two=2}",
      "return messy",
      ""
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Coding Intelligence",
    "id": "mason",
    "title": "Install developer tools",
    "eyebrow": "Coding Intelligence",
    "summary": ":Mason opens the package UI; :MasonInstallAll installs configured tools.",
    "detail": ":Mason opens the package UI; :MasonInstallAll installs configured tools.",
    "keys": [
      ":",
      "Mason"
    ],
    "task": "Open Mason's package manager.",
    "sequence": ":Mason<Enter>",
    "code": [
      "Mason",
      "  lua-language-server  installed",
      "  stylua              installed"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Coding Intelligence",
    "id": "coding-intelligence-review",
    "title": "Coding Intelligence Review",
    "eyebrow": "Coding Intelligence",
    "summary": "Review every command introduced in Coding Intelligence before moving to the next category.",
    "detail": "Review every command introduced in Coding Intelligence before moving to the next category.",
    "keys": [
      "g",
      "d",
      "K",
      "Space",
      "f",
      "m",
      ":",
      "Mason"
    ],
    "task": "",
    "sequence": "gd",
    "code": [
      "local result = calculateTotal(items)",
      "return result",
      "-- calculateTotal is defined elsewhere"
    ],
    "tip": "Return to any command in Coding Intelligence that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "g",
        "description": "NVChad v2.5 maps gd to definition in an LSP-attached buffer.",
        "sequence": "gd"
      },
      {
        "key": "d",
        "description": "NVChad v2.5 maps gd to definition in an LSP-attached buffer.",
        "sequence": "gd"
      },
      {
        "key": "K",
        "description": "K asks the language server for hover documentation.",
        "sequence": "K"
      },
      {
        "key": "Space",
        "description": "Space f m formats through Conform in NVChad's default mappings.",
        "sequence": "<Space>fm"
      },
      {
        "key": "f",
        "description": "Space f m formats through Conform in NVChad's default mappings.",
        "sequence": "<Space>fm"
      },
      {
        "key": "m",
        "description": "Space f m formats through Conform in NVChad's default mappings.",
        "sequence": "<Space>fm"
      },
      {
        "key": ":",
        "description": ":Mason opens the package UI; :MasonInstallAll installs configured tools.",
        "sequence": ":Mason<Enter>"
      },
      {
        "key": "Mason",
        "description": ":Mason opens the package UI; :MasonInstallAll installs configured tools.",
        "sequence": ":Mason<Enter>"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
