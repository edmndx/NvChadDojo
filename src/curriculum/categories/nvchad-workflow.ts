import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "NVChad Workflow",
    "id": "themes",
    "title": "Switch themes live",
    "eyebrow": "NVChad Workflow",
    "summary": "Space t h opens the Base46 theme picker.",
    "detail": "Space t h opens the Base46 theme picker.",
    "keys": [
      "Space th"
    ],
    "task": "Open the NVChad theme picker.",
    "sequence": "<Space>th",
    "code": [
      "> Themes",
      "  onedark",
      "  catppuccin",
      "  gruvchad"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Space th",
        "description": "Space t h opens the Base46 theme picker.",
        "sequence": "<Space>th"
      }
    ],
    "cursor": [
      1,
      2
    ],
    "language": "text"
  },
  {
    "group": "NVChad Workflow",
    "id": "cheatsheet",
    "title": "Ask NVChad",
    "eyebrow": "NVChad Workflow",
    "summary": "Space c h opens NvCheatsheet, generated from mappings that have descriptions.",
    "detail": "Space c h opens NvCheatsheet, generated from mappings that have descriptions.",
    "keys": [
      "Space ch"
    ],
    "task": "Open NvCheatsheet.",
    "sequence": "<Space>ch",
    "code": [
      "╭─ General ───╮ ╭─ Telescope ─╮",
      "│ Ctrl+n tree │ │ Spc ff files │",
      "╰─────────────╯ ╰──────────────╯"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Space ch",
        "description": "Space c h opens NvCheatsheet, generated from mappings that have descriptions.",
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
    "group": "NVChad Workflow",
    "id": "nvchad-workflow-review",
    "title": "NVChad Workflow Review",
    "eyebrow": "NVChad Workflow",
    "summary": "Review every command introduced in NVChad Workflow before moving to the next category.",
    "detail": "Review every command introduced in NVChad Workflow before moving to the next category.",
    "keys": [
      "Space th",
      "Space ch"
    ],
    "task": "",
    "sequence": "<Space>th",
    "code": [
      "> Themes",
      "  onedark",
      "  catppuccin",
      "  gruvchad"
    ],
    "tip": "Return to any command in NVChad Workflow that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "Space th",
        "description": "Space t h opens the Base46 theme picker.",
        "sequence": "<Space>th",
        "code": [
          "> Themes",
          "  onedark",
          "  catppuccin",
          "  gruvchad"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "Space ch",
        "description": "Space c h opens NvCheatsheet, generated from mappings that have descriptions.",
        "sequence": "<Space>ch",
        "code": [
          "╭─ General ───╮ ╭─ Telescope ─╮",
          "│ Ctrl+n tree │ │ Spc ff files │",
          "╰─────────────╯ ╰──────────────╯"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      }
    ],
    "cursor": [
      1,
      2
    ],
    "language": "text"
  }
] satisfies readonly Lesson[];

export default lessons;
