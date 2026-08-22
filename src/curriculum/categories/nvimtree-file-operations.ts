import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "NvimTree File Operations",
    "id": "tree-create",
    "title": "Create files and directories",
    "eyebrow": "NvimTree File Operations",
    "summary": "Press a and enter a path; a trailing slash creates a directory.",
    "detail": "Press a and enter a path; a trailing slash creates a directory.",
    "keys": [
      "a"
    ],
    "task": "Open NvimTree's create prompt.",
    "sequence": "a",
    "code": [
      "src/",
      "  components/",
      "> Create: src/new-file.ts"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "NvimTree File Operations",
    "id": "tree-rename",
    "title": "Rename tree items",
    "eyebrow": "NvimTree File Operations",
    "summary": "r renames the selected path while e changes only its basename.",
    "detail": "r renames the selected path while e changes only its basename.",
    "keys": [
      "r",
      "e"
    ],
    "task": "Rename the selected file.",
    "sequence": "r",
    "code": [
      "src/",
      "  old-name.ts  <- cursor",
      "  App.tsx"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "NvimTree File Operations",
    "id": "tree-copy-move",
    "title": "Copy or move tree items",
    "eyebrow": "NvimTree File Operations",
    "summary": "c copies, x cuts, and p pastes at the selected destination.",
    "detail": "c copies, x cuts, and p pastes at the selected destination.",
    "keys": [
      "c",
      "x",
      "p"
    ],
    "task": "Cut the selected item and paste it at a destination.",
    "sequence": "xp",
    "code": [
      "src/",
      "  draft.ts  <- cut",
      "archive/    <- paste"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "NvimTree File Operations",
    "id": "tree-delete",
    "title": "Delete or trash tree items",
    "eyebrow": "NvimTree File Operations",
    "summary": "d deletes after confirmation while D uses the configured system trash integration.",
    "detail": "d deletes after confirmation while D uses the configured system trash integration.",
    "keys": [
      "d",
      "D"
    ],
    "task": "Open the delete confirmation for the selected file.",
    "sequence": "d",
    "code": [
      "src/",
      "  obsolete.ts  <- cursor",
      "  keep.ts"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "NvimTree File Operations",
    "id": "tree-edit-workflow",
    "title": "Create, edit, and save a file",
    "eyebrow": "NvimTree File Operations",
    "summary": "Create or open through NvimTree, then reuse normal editing commands and Ctrl+s to save.",
    "detail": "This is an integration workflow: NvimTree owns opening the file, while earlier Vim lessons own text editing.",
    "keys": [
      "Enter",
      "i",
      "Esc",
      "Ctrl+s"
    ],
    "task": "Open the selected file, enter text, return to Normal mode, and save.",
    "sequence": "<Enter>iupdated<Esc><C-s>",
    "code": [
      "src/new-file.ts",
      "",
      "-- compose earlier editing skills here"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "NvimTree File Operations",
    "id": "nvimtree-file-operations-review",
    "title": "NvimTree File Operations Review",
    "eyebrow": "NvimTree File Operations",
    "summary": "Review every command introduced in NvimTree File Operations before moving to the next category.",
    "detail": "Review every command introduced in NvimTree File Operations before moving to the next category.",
    "keys": [
      "a",
      "r",
      "e",
      "c",
      "x",
      "p",
      "d",
      "D",
      "Enter",
      "i",
      "Esc",
      "Ctrl+s"
    ],
    "task": "",
    "sequence": "a",
    "code": [
      "src/",
      "  components/",
      "> Create: src/new-file.ts"
    ],
    "tip": "Return to any command in NvimTree File Operations that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "a",
        "description": "Press a and enter a path; a trailing slash creates a directory.",
        "sequence": "a"
      },
      {
        "key": "r",
        "description": "r renames the selected path while e changes only its basename.",
        "sequence": "r"
      },
      {
        "key": "e",
        "description": "r renames the selected path while e changes only its basename.",
        "sequence": "r"
      },
      {
        "key": "c",
        "description": "c copies, x cuts, and p pastes at the selected destination.",
        "sequence": "xp"
      },
      {
        "key": "x",
        "description": "c copies, x cuts, and p pastes at the selected destination.",
        "sequence": "xp"
      },
      {
        "key": "p",
        "description": "c copies, x cuts, and p pastes at the selected destination.",
        "sequence": "xp"
      },
      {
        "key": "d",
        "description": "d deletes after confirmation while D uses the configured system trash integration.",
        "sequence": "d"
      },
      {
        "key": "D",
        "description": "d deletes after confirmation while D uses the configured system trash integration.",
        "sequence": "d"
      },
      {
        "key": "Enter",
        "description": "Create or open through NvimTree, then reuse normal editing commands and Ctrl+s to save.",
        "sequence": "<Enter>iupdated<Esc><C-s>"
      },
      {
        "key": "i",
        "description": "Create or open through NvimTree, then reuse normal editing commands and Ctrl+s to save.",
        "sequence": "<Enter>iupdated<Esc><C-s>"
      },
      {
        "key": "Esc",
        "description": "Create or open through NvimTree, then reuse normal editing commands and Ctrl+s to save.",
        "sequence": "<Enter>iupdated<Esc><C-s>"
      },
      {
        "key": "Ctrl+s",
        "description": "Create or open through NvimTree, then reuse normal editing commands and Ctrl+s to save.",
        "sequence": "<Enter>iupdated<Esc><C-s>"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
