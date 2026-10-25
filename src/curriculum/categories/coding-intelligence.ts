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
      "gd"
    ],
    "task": "Jump to the definition under the cursor.",
    "sequence": "gd",
    "code": [
      "const result = calculateTotal([12, 8]);",
      "console.log(result);",
      "",
      "function calculateTotal(items) {",
      "  return items.reduce((sum, item) => sum + item, 0);",
      "}"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "gd",
        "description": "In an LSP-attached buffer, use NVChad's gd mapping to request a definition.",
        "sequence": "gd"
      }
    ],
    "cursor": [
      0,
      15
    ],
    "language": "javascript"
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
      "const maximum = Math.max(12, 8);",
      "console.log(maximum);"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "K",
        "description": "K asks the language server for hover documentation.",
        "sequence": "K"
      }
    ],
    "cursor": [
      0,
      21
    ],
    "language": "javascript"
  },
  {
    "group": "Coding Intelligence",
    "id": "format",
    "title": "Format deliberately",
    "eyebrow": "Coding Intelligence",
    "summary": "Space f m formats through Conform in NVChad's default mappings.",
    "detail": "Conform needs a configured JavaScript formatter such as Prettier, or an attached LSP with JavaScript formatting support. NVChad maps this in Normal and Visual modes.",
    "keys": [
      "Space fm"
    ],
    "task": "Format the current buffer.",
    "sequence": "<Space>fm",
    "code": [
      "const messy={one:1,two:2};",
      "console.log(messy);",
      ""
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Space fm",
        "description": "In Normal or Visual mode, format JavaScript through Conform with a configured JavaScript formatter such as Prettier, or a capable LSP fallback.",
        "sequence": "<Space>fm",
        "expectedCode": [
          "const messy = { one: 1, two: 2 };",
          "console.log(messy);",
          ""
        ]
      }
    ],
    "cursor": [
      0,
      6
    ],
    "language": "javascript"
  },
  {
    "group": "Coding Intelligence",
    "id": "mason",
    "title": "Install developer tools",
    "eyebrow": "Coding Intelligence",
    "summary": ":Mason opens the package UI; :MasonInstallAll installs configured tools.",
    "detail": ":Mason opens the tool package UI. NvChad UI supplies :MasonInstallAll, which derives tools from configured servers and formatters; installing a server does not configure or attach it.",
    "keys": [
      ":Mason",
      ":MasonInstallAll"
    ],
    "task": "Open Mason's package manager.",
    "sequence": ":Mason<Enter>",
    "code": [
      "Mason",
      "  lua-language-server  installed",
      "  stylua              installed"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": ":Mason",
        "description": ":Mason opens the package UI; :MasonInstallAll installs configured tools.",
        "sequence": ":Mason<Enter>"
      },
      {
        "key": ":MasonInstallAll",
        "description": ":Mason opens the package UI; :MasonInstallAll installs configured tools.",
        "sequence": ":MasonInstallAll<Enter>"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "Coding Intelligence",
    "id": "coding-intelligence-review",
    "title": "Coding Intelligence Review",
    "eyebrow": "Coding Intelligence",
    "summary": "Review every command introduced in Coding Intelligence before moving to the next category.",
    "detail": "Review every command introduced in Coding Intelligence before moving to the next category.",
    "keys": [
      "gd",
      "K",
      "Space fm",
      ":Mason",
      ":MasonInstallAll"
    ],
    "task": "",
    "sequence": "gd",
    "code": [
      "const result = calculateTotal([12, 8]);",
      "console.log(result);",
      "",
      "function calculateTotal(items) {",
      "  return items.reduce((sum, item) => sum + item, 0);",
      "}"
    ],
    "tip": "Return to any command in Coding Intelligence that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
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
        "key": "K",
        "description": "K asks the language server for hover documentation.",
        "sequence": "K",
        "code": [
          "const maximum = Math.max(12, 8);",
          "console.log(maximum);"
        ],
        "cursor": [
          0,
          21
        ],
        "language": "javascript"
      },
      {
        "key": "Space fm",
        "description": "In Normal or Visual mode, format JavaScript through Conform with a configured JavaScript formatter such as Prettier, or a capable LSP fallback.",
        "sequence": "<Space>fm",
        "expectedCode": [
          "const messy = { one: 1, two: 2 };",
          "console.log(messy);",
          ""
        ],
        "code": [
          "const messy={one:1,two:2};",
          "console.log(messy);",
          ""
        ],
        "cursor": [
          0,
          6
        ],
        "language": "javascript"
      },
      {
        "key": ":Mason",
        "description": ":Mason opens the package UI; :MasonInstallAll installs configured tools.",
        "sequence": ":Mason<Enter>",
        "code": [
          "Mason",
          "  lua-language-server  installed",
          "  stylua              installed"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": ":MasonInstallAll",
        "description": ":Mason opens the package UI; :MasonInstallAll installs configured tools.",
        "sequence": ":MasonInstallAll<Enter>",
        "code": [
          "Mason",
          "  lua-language-server  installed",
          "  stylua              installed"
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
      15
    ],
    "language": "javascript"
  }
] satisfies readonly Lesson[];

export default lessons;
