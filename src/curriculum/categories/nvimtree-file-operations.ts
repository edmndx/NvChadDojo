import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "NvimTree File Operations",
    "id": "tree-create",
    "title": "Create files and directories",
    "eyebrow": "NvimTree File Operations",
    "summary": "Press a and enter a path; a trailing slash creates a directory.",
    "detail": "The create prompt is rooted at the selected directory. Select the project root before typing src/new-file.js; a trailing slash creates a directory.",
    "keys": [
      "a"
    ],
    "task": "With the project root selected, create src/new-file.js through NvimTree's prompt.",
    "sequence": "asrc/new-file.js<Enter>",
    "code": [
      "project/  <- root selected",
      "  src/",
      "    components/"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "a",
        "description": "With the project root selected, create src/new-file.js and confirm.",
        "sequence": "asrc/new-file.js<Enter>"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "NvimTree File Operations",
    "id": "tree-rename",
    "title": "Rename tree items",
    "eyebrow": "NvimTree File Operations",
    "summary": "r renames the filename including its extension; e edits the basename while preserving the extension. Clear the prefilled input with Ctrl+u before typing a replacement.",
    "detail": "r renames the filename including its extension; e edits the basename while preserving the extension. Clear the prefilled input with Ctrl+u before typing a replacement.",
    "keys": [
      "r",
      "e"
    ],
    "task": "Rename the selected file to new-name.ts and confirm it.",
    "sequence": "r<C-u>new-name.ts<Enter>",
    "code": [
      "src/",
      "  old-name.ts  <- cursor",
      "  App.tsx"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "r",
        "description": "Clear the prefilled filename, type new-name.ts, and confirm the rename.",
        "sequence": "r<C-u>new-name.ts<Enter>"
      },
      {
        "key": "e",
        "description": "Clear the prefilled basename and enter new-name; the existing extension is retained.",
        "sequence": "e<C-u>new-name<Enter>"
      }
    ],
    "cursor": [
      1,
      2
    ],
    "language": "text"
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
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "c",
        "description": "Copy the selected tree item to NvimTree's clipboard; navigate to a destination before p.",
        "sequence": "c"
      },
      {
        "key": "x",
        "description": "Cut the selected tree item; navigate to a destination before p.",
        "sequence": "x"
      },
      {
        "key": "p",
        "description": "With an item already copied or cut, paste into the selected destination directory.",
        "sequence": "p",
        "cursor": [
          2,
          0
        ]
      }
    ],
    "cursor": [
      1,
      2
    ],
    "language": "text"
  },
  {
    "group": "NvimTree File Operations",
    "id": "tree-delete",
    "title": "Delete or trash tree items",
    "eyebrow": "NvimTree File Operations",
    "summary": "d deletes after confirmation while D uses the configured system trash integration.",
    "detail": "With the default input prompt, d opens confirmation defaulting to No. Clear it with Ctrl+u, type y, and press Enter. D requires an installed and configured trash command; it is not portable by default.",
    "keys": [
      "d",
      "D"
    ],
    "task": "Delete the selected file and accept the confirmation.",
    "sequence": "d<C-u>y<Enter>",
    "code": [
      "src/",
      "  obsolete.ts  <- cursor",
      "  keep.ts"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "d",
        "description": "At the default No confirmation, clear the prompt with Ctrl+u, type y, then press Enter to permanently delete the selected fixture file.",
        "sequence": "d<C-u>y<Enter>"
      },
      {
        "key": "D",
        "description": "With an installed trash command, clear the default No prompt with Ctrl+u, type y, then press Enter to trash the selected fixture file.",
        "sequence": "D<C-u>y<Enter>"
      }
    ],
    "cursor": [
      1,
      2
    ],
    "language": "text"
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
    "sequence": "<Enter>iconst<Space>ready<Space>=<Space>true;<Esc><C-s>",
    "code": [
      "src/new-file.js",
      "",
      "Open the file, insert JavaScript, and save."
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Enter",
        "description": "Create or open through NvimTree, then reuse normal editing commands and Ctrl+s to save.",
        "sequence": "<Enter>"
      },
      {
        "key": "i",
        "description": "After opening an editable file, insert const ready = true; and return to Normal mode.",
        "sequence": "iconst<Space>ready<Space>=<Space>true;<Esc>",
        "code": [
          "",
          "// Opened src/new-file.js"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "javascript"
      },
      {
        "key": "Esc",
        "description": "Create or open through NvimTree, then reuse normal editing commands and Ctrl+s to save.",
        "sequence": "<Esc>",
        "code": [
          "const ready = true;",
          "// Opened src/new-file.js"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "javascript"
      },
      {
        "key": "Ctrl+s",
        "description": "Create or open through NvimTree, then reuse normal editing commands and Ctrl+s to save.",
        "sequence": "<C-s>",
        "code": [
          "const ready = true;",
          "// Opened src/new-file.js"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "javascript"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
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
    "sequence": "asrc/new-file.js<Enter>",
    "code": [
      "project/  <- root selected",
      "  src/",
      "    components/"
    ],
    "tip": "Return to any command in NvimTree File Operations that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "a",
        "description": "With the project root selected, create src/new-file.js and confirm.",
        "sequence": "asrc/new-file.js<Enter>",
        "code": [
          "project/  <- root selected",
          "  src/",
          "    components/"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "r",
        "description": "Clear the prefilled filename, type new-name.ts, and confirm the rename.",
        "sequence": "r<C-u>new-name.ts<Enter>",
        "code": [
          "src/",
          "  old-name.ts  <- cursor",
          "  App.tsx"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "e",
        "description": "Clear the prefilled basename and enter new-name; the existing extension is retained.",
        "sequence": "e<C-u>new-name<Enter>",
        "code": [
          "src/",
          "  old-name.ts  <- cursor",
          "  App.tsx"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "c",
        "description": "Copy the selected tree item to NvimTree's clipboard; navigate to a destination before p.",
        "sequence": "c",
        "code": [
          "src/",
          "  draft.ts  <- cut",
          "archive/    <- paste"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "x",
        "description": "Cut the selected tree item; navigate to a destination before p.",
        "sequence": "x",
        "code": [
          "src/",
          "  draft.ts  <- cut",
          "archive/    <- paste"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "p",
        "description": "With an item already copied or cut, paste into the selected destination directory.",
        "sequence": "p",
        "code": [
          "src/",
          "  draft.ts  <- cut",
          "archive/    <- paste"
        ],
        "cursor": [
          2,
          0
        ],
        "language": "text"
      },
      {
        "key": "d",
        "description": "At the default No confirmation, clear the prompt with Ctrl+u, type y, then press Enter to permanently delete the selected fixture file.",
        "sequence": "d<C-u>y<Enter>",
        "code": [
          "src/",
          "  obsolete.ts  <- cursor",
          "  keep.ts"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "D",
        "description": "With an installed trash command, clear the default No prompt with Ctrl+u, type y, then press Enter to trash the selected fixture file.",
        "sequence": "D<C-u>y<Enter>",
        "code": [
          "src/",
          "  obsolete.ts  <- cursor",
          "  keep.ts"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "Enter",
        "description": "Create or open through NvimTree, then reuse normal editing commands and Ctrl+s to save.",
        "sequence": "<Enter>",
        "code": [
          "src/new-file.js",
          "",
          "Open the file, insert JavaScript, and save."
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "i",
        "description": "After opening an editable file, insert const ready = true; and return to Normal mode.",
        "sequence": "iconst<Space>ready<Space>=<Space>true;<Esc>",
        "code": [
          "",
          "// Opened src/new-file.js"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "javascript"
      },
      {
        "key": "Esc",
        "description": "Create or open through NvimTree, then reuse normal editing commands and Ctrl+s to save.",
        "sequence": "<Esc>",
        "code": [
          "const ready = true;",
          "// Opened src/new-file.js"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "javascript"
      },
      {
        "key": "Ctrl+s",
        "description": "Create or open through NvimTree, then reuse normal editing commands and Ctrl+s to save.",
        "sequence": "<C-s>",
        "code": [
          "const ready = true;",
          "// Opened src/new-file.js"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "javascript"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  }
] satisfies readonly Lesson[];

export default lessons;
