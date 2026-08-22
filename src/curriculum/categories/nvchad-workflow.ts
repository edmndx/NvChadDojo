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
      "Space",
      "t",
      "h"
    ],
    "task": "Open the NVChad theme picker.",
    "sequence": "<Space>th",
    "code": [
      "> Themes",
      "  onedark",
      "  catppuccin",
      "  gruvchad"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "NVChad Workflow",
    "id": "cheatsheet",
    "title": "Ask NVChad",
    "eyebrow": "NVChad Workflow",
    "summary": "Space c h opens NvCheatsheet, generated from mappings that have descriptions.",
    "detail": "Space c h opens NvCheatsheet, generated from mappings that have descriptions.",
    "keys": [
      "Space",
      "c",
      "h"
    ],
    "task": "Open NvCheatsheet.",
    "sequence": "<Space>ch",
    "code": [
      "╭─ General ───╮ ╭─ Telescope ─╮",
      "│ Ctrl+n tree │ │ Spc ff files │",
      "╰─────────────╯ ╰──────────────╯"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "NVChad Workflow",
    "id": "nvchad-workflow-review",
    "title": "NVChad Workflow Review",
    "eyebrow": "NVChad Workflow",
    "summary": "Review every command introduced in NVChad Workflow before moving to the next category.",
    "detail": "Review every command introduced in NVChad Workflow before moving to the next category.",
    "keys": [
      "Space",
      "t",
      "h",
      "c"
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
        "key": "Space",
        "description": "Space t h opens the Base46 theme picker.",
        "sequence": "<Space>th"
      },
      {
        "key": "t",
        "description": "Space t h opens the Base46 theme picker.",
        "sequence": "<Space>th"
      },
      {
        "key": "h",
        "description": "Space t h opens the Base46 theme picker.",
        "sequence": "<Space>th"
      },
      {
        "key": "c",
        "description": "Space c h opens NvCheatsheet, generated from mappings that have descriptions.",
        "sequence": "<Space>ch"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
