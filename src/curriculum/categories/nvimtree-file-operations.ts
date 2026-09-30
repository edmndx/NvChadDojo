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
    "task": "Create src/new-file.ts through NvimTree's prompt.",
    "sequence": "asrc/new-file.ts<Enter>",
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
    "detail": "Both commands open an input prompt. Edit the proposed path or basename and press Enter to apply the rename.",
    "keys": [
      "r",
      "e"
    ],
    "task": "Rename the selected file to new-name.ts and confirm it.",
    "sequence": "rnew-name.ts<Enter>",
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
    "detail": "After c or x, navigate to the destination directory before pressing p; copying or cutting alone does not move filesystem data.",
    "keys": [
      "c",
      "x",
      "p"
    ],
    "task": "Cut the selected item and paste it at a destination.",
    "sequence": "xjp",
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
    "task": "Delete the selected file and accept the confirmation.",
    "sequence": "dy",
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
    "sequence": "asrc/new-file.ts<Enter>",
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
        "sequence": "asrc/new-file.ts<Enter>"
      },
      {
        "key": "r",
        "description": "r renames the selected path while e changes only its basename.",
        "sequence": "rnew-name.ts<Enter>"
      },
      {
        "key": "e",
        "description": "r renames the selected path while e changes only its basename.",
        "sequence": "rnew-name.ts<Enter>"
      },
      {
        "key": "c",
        "description": "c copies, x cuts, and p pastes at the selected destination.",
        "sequence": "xjp"
      },
      {
        "key": "x",
        "description": "c copies, x cuts, and p pastes at the selected destination.",
        "sequence": "xjp"
      },
      {
        "key": "p",
        "description": "c copies, x cuts, and p pastes at the selected destination.",
        "sequence": "xjp"
      },
      {
        "key": "d",
        "description": "d deletes after confirmation while D uses the configured system trash integration.",
        "sequence": "dy"
      },
      {
        "key": "D",
        "description": "d deletes after confirmation while D uses the configured system trash integration.",
        "sequence": "dy"
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
