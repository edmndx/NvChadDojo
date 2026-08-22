import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Sessions & Project Navigation",
    "id": "working-directory",
    "title": "Inspect and change the working directory",
    "eyebrow": "Sessions & Project Navigation",
    "summary": ":pwd shows the current directory and :cd changes the global working directory.",
    "detail": ":pwd shows the current directory and :cd changes the global working directory.",
    "keys": [
      ":pwd",
      ":cd path"
    ],
    "task": "Show the current working directory.",
    "sequence": ":pwd<Enter>",
    "code": [
      "/projects/nvchad-app",
      "src/",
      "tests/"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Sessions & Project Navigation",
    "id": "scoped-directories",
    "title": "Scope directories to a window or tab",
    "eyebrow": "Sessions & Project Navigation",
    "summary": ":lcd changes only the current window while :tcd changes every window in the current tab page.",
    "detail": ":lcd changes only the current window while :tcd changes every window in the current tab page.",
    "keys": [
      ":lcd path",
      ":tcd path"
    ],
    "task": "Set a tab-local working directory.",
    "sequence": ":tcd src<Enter>",
    "code": [
      "tab 1 cwd: /projects/app/src",
      "tab 2 cwd: /projects/app",
      "-- scoped navigation"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Sessions & Project Navigation",
    "id": "save-session",
    "title": "Save and restore a session",
    "eyebrow": "Sessions & Project Navigation",
    "summary": ":mksession! writes layouts and buffers; :source reloads the saved Session.vim file.",
    "detail": ":mksession! writes layouts and buffers; :source reloads the saved Session.vim file.",
    "keys": [
      ":mksession! Session.vim",
      ":source Session.vim"
    ],
    "task": "Save the current session layout.",
    "sequence": ":mksession! Session.vim<Enter>",
    "code": [
      "Session.vim",
      "  buffers",
      "  windows and tab pages"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Sessions & Project Navigation",
    "id": "argument-list",
    "title": "Navigate an argument list",
    "eyebrow": "Sessions & Project Navigation",
    "summary": ":args displays project files, :argadd adds one, and :next or :previous navigates the list.",
    "detail": ":args displays project files, :argadd adds one, and :next or :previous navigates the list.",
    "keys": [
      ":args",
      ":argadd path",
      ":next",
      ":previous"
    ],
    "task": "Inspect the argument list and visit its next file.",
    "sequence": ":args<Enter>:next<Enter>",
    "code": [
      "[App.tsx] lessons.ts Trainer.tsx",
      "-- argument list",
      ""
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Sessions & Project Navigation",
    "id": "alternate-file",
    "title": "Jump to the alternate file",
    "eyebrow": "Sessions & Project Navigation",
    "summary": "Ctrl+^ switches between the current file and the most recently visited alternate file.",
    "detail": "Ctrl+^ switches between the current file and the most recently visited alternate file.",
    "keys": [
      "Ctrl+^"
    ],
    "task": "Jump to the alternate file.",
    "sequence": "<C-^>",
    "code": [
      "current: App.tsx",
      "alternate: App.test.tsx",
      "-- fast two-file loop"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Sessions & Project Navigation",
    "id": "resume-project",
    "title": "Resume recent project work",
    "eyebrow": "Sessions & Project Navigation",
    "summary": "Use Space f o for a recent file, then :cd to establish the project root before opening more files.",
    "detail": "This composes Telescope history with working-directory ownership from this category.",
    "keys": [
      "Space fo",
      ":cd path"
    ],
    "task": "Open recent files to resume a project.",
    "sequence": "<Space>fo",
    "code": [
      "> Old Files",
      "  project/src/App.tsx",
      "  project/src/lessons.ts"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Sessions & Project Navigation",
    "id": "sessions-project-navigation-review",
    "title": "Sessions & Project Navigation Review",
    "eyebrow": "Sessions & Project Navigation",
    "summary": "Review every command introduced in Sessions & Project Navigation before moving to the next category.",
    "detail": "Review every command introduced in Sessions & Project Navigation before moving to the next category.",
    "keys": [
      ":pwd",
      ":cd path",
      ":lcd path",
      ":tcd path",
      ":mksession! Session.vim",
      ":source Session.vim",
      ":args",
      ":argadd path",
      ":next",
      ":previous",
      "Ctrl+^",
      "Space fo"
    ],
    "task": "",
    "sequence": ":pwd<Enter>",
    "code": [
      "/projects/nvchad-app",
      "src/",
      "tests/"
    ],
    "tip": "Return to any command in Sessions & Project Navigation that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": ":pwd",
        "description": ":pwd shows the current directory and :cd changes the global working directory.",
        "sequence": ":pwd<Enter>"
      },
      {
        "key": ":cd path",
        "description": ":pwd shows the current directory and :cd changes the global working directory.",
        "sequence": ":pwd<Enter>"
      },
      {
        "key": ":lcd path",
        "description": ":lcd changes only the current window while :tcd changes every window in the current tab page.",
        "sequence": ":tcd src<Enter>"
      },
      {
        "key": ":tcd path",
        "description": ":lcd changes only the current window while :tcd changes every window in the current tab page.",
        "sequence": ":tcd src<Enter>"
      },
      {
        "key": ":mksession! Session.vim",
        "description": ":mksession! writes layouts and buffers; :source reloads the saved Session.vim file.",
        "sequence": ":mksession! Session.vim<Enter>"
      },
      {
        "key": ":source Session.vim",
        "description": ":mksession! writes layouts and buffers; :source reloads the saved Session.vim file.",
        "sequence": ":mksession! Session.vim<Enter>"
      },
      {
        "key": ":args",
        "description": ":args displays project files, :argadd adds one, and :next or :previous navigates the list.",
        "sequence": ":args<Enter>:next<Enter>"
      },
      {
        "key": ":argadd path",
        "description": ":args displays project files, :argadd adds one, and :next or :previous navigates the list.",
        "sequence": ":args<Enter>:next<Enter>"
      },
      {
        "key": ":next",
        "description": ":args displays project files, :argadd adds one, and :next or :previous navigates the list.",
        "sequence": ":args<Enter>:next<Enter>"
      },
      {
        "key": ":previous",
        "description": ":args displays project files, :argadd adds one, and :next or :previous navigates the list.",
        "sequence": ":args<Enter>:next<Enter>"
      },
      {
        "key": "Ctrl+^",
        "description": "Ctrl+^ switches between the current file and the most recently visited alternate file.",
        "sequence": "<C-^>"
      },
      {
        "key": "Space fo",
        "description": "Use Space f o for a recent file, then :cd to establish the project root before opening more files.",
        "sequence": "<Space>fo"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
