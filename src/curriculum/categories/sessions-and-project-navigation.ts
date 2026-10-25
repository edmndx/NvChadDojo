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
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": ":pwd",
        "description": ":pwd shows the current directory and :cd changes the global working directory.",
        "sequence": ":pwd<Enter>"
      },
      {
        "key": ":cd path",
        "description": ":pwd shows the current directory and :cd changes the global working directory.",
        "sequence": ":cd src<Enter>"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "Sessions & Project Navigation",
    "id": "scoped-directories",
    "title": "Scope directories to a window or tab",
    "eyebrow": "Sessions & Project Navigation",
    "summary": ":lcd sets a window-local directory; :tcd sets the tab-local directory. Existing window-local directories take precedence in their own windows.",
    "detail": ":lcd sets a window-local directory; :tcd sets the tab-local directory. Existing window-local directories take precedence in their own windows.",
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
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": ":lcd path",
        "description": ":lcd sets a window-local directory; :tcd sets the tab-local directory. Existing window-local directories take precedence in their own windows.",
        "sequence": ":lcd src<Enter>"
      },
      {
        "key": ":tcd path",
        "description": ":lcd sets a window-local directory; :tcd sets the tab-local directory. Existing window-local directories take precedence in their own windows.",
        "sequence": ":tcd src<Enter>"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "Sessions & Project Navigation",
    "id": "save-session",
    "title": "Save and restore a session",
    "eyebrow": "Sessions & Project Navigation",
    "summary": ":mksession! saves buffers and layout according to sessionoptions, overwriting the session file; :source restores it. Save edited files separately: a session is not a backup of unsaved text.",
    "detail": ":mksession! saves buffers and layout according to sessionoptions, overwriting the session file; :source restores it. Save edited files separately: a session is not a backup of unsaved text.",
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
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": ":mksession! Session.vim",
        "description": ":mksession! saves buffers and layout according to sessionoptions, overwriting the session file; :source restores it. Save edited files separately: a session is not a backup of unsaved text.",
        "sequence": ":mksession! Session.vim<Enter>"
      },
      {
        "key": ":source Session.vim",
        "description": ":mksession! saves buffers and layout according to sessionoptions, overwriting the session file; :source restores it. Save edited files separately: a session is not a backup of unsaved text.",
        "sequence": ":source Session.vim<Enter>"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "Sessions & Project Navigation",
    "id": "argument-list",
    "title": "Navigate an argument list",
    "eyebrow": "Sessions & Project Navigation",
    "summary": ":args displays the argument list, :argadd adds a path, and :next or :previous navigates it. The list does not automatically contain every project file.",
    "detail": ":args displays the argument list, :argadd adds a path, and :next or :previous navigates it. The list does not automatically contain every project file.",
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
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": ":args",
        "description": ":args displays the argument list, :argadd adds a path, and :next or :previous navigates it. The list does not automatically contain every project file.",
        "sequence": ":args<Enter>"
      },
      {
        "key": ":argadd path",
        "description": ":args displays the argument list, :argadd adds a path, and :next or :previous navigates it. The list does not automatically contain every project file.",
        "sequence": ":argadd src<Enter>"
      },
      {
        "key": ":next",
        "description": ":args displays the argument list, :argadd adds a path, and :next or :previous navigates it. The list does not automatically contain every project file.",
        "sequence": ":next<Enter>"
      },
      {
        "key": ":previous",
        "description": ":args displays the argument list, :argadd adds a path, and :next or :previous navigates it. The list does not automatically contain every project file.",
        "sequence": ":previous<Enter>"
      }
    ],
    "cursor": [
      0,
      1
    ],
    "language": "text"
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
    "cursor": [
      0,
      0
    ],
    "code": [
      "current: App.tsx",
      "alternate: App.test.tsx",
      "-- fast two-file loop"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Ctrl+^",
        "description": "Ctrl+^ switches between the current file and the most recently visited alternate file.",
        "sequence": "<C-^>"
      }
    ],
    "language": "text"
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
    "task": "Open the recent-file picker and reopen its selected file.",
    "sequence": "<Space>fo<Enter>",
    "code": [
      "> Old Files",
      "  project/src/App.tsx",
      "  project/src/lessons.ts"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Space fo",
        "description": "Use Space f o for a recent file, then :cd to establish the project root before opening more files.",
        "sequence": "<Space>fo"
      },
      {
        "key": ":cd path",
        "description": "Use Space f o for a recent file, then :cd to establish the project root before opening more files.",
        "sequence": ":cd src<Enter>"
      }
    ],
    "cursor": [
      1,
      2
    ],
    "language": "text"
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
        "sequence": ":pwd<Enter>",
        "code": [
          "/projects/nvchad-app",
          "src/",
          "tests/"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": ":cd path",
        "description": ":pwd shows the current directory and :cd changes the global working directory.",
        "sequence": ":cd src<Enter>",
        "code": [
          "/projects/nvchad-app",
          "src/",
          "tests/"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": ":lcd path",
        "description": ":lcd sets a window-local directory; :tcd sets the tab-local directory. Existing window-local directories take precedence in their own windows.",
        "sequence": ":lcd src<Enter>",
        "code": [
          "tab 1 cwd: /projects/app/src",
          "tab 2 cwd: /projects/app",
          "-- scoped navigation"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": ":tcd path",
        "description": ":lcd sets a window-local directory; :tcd sets the tab-local directory. Existing window-local directories take precedence in their own windows.",
        "sequence": ":tcd src<Enter>",
        "code": [
          "tab 1 cwd: /projects/app/src",
          "tab 2 cwd: /projects/app",
          "-- scoped navigation"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": ":mksession! Session.vim",
        "description": ":mksession! saves buffers and layout according to sessionoptions, overwriting the session file; :source restores it. Save edited files separately: a session is not a backup of unsaved text.",
        "sequence": ":mksession! Session.vim<Enter>",
        "code": [
          "Session.vim",
          "  buffers",
          "  windows and tab pages"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": ":source Session.vim",
        "description": ":mksession! saves buffers and layout according to sessionoptions, overwriting the session file; :source restores it. Save edited files separately: a session is not a backup of unsaved text.",
        "sequence": ":source Session.vim<Enter>",
        "code": [
          "Session.vim",
          "  buffers",
          "  windows and tab pages"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": ":args",
        "description": ":args displays the argument list, :argadd adds a path, and :next or :previous navigates it. The list does not automatically contain every project file.",
        "sequence": ":args<Enter>",
        "code": [
          "[App.tsx] lessons.ts Trainer.tsx",
          "-- argument list",
          ""
        ],
        "cursor": [
          0,
          1
        ],
        "language": "text"
      },
      {
        "key": ":argadd path",
        "description": ":args displays the argument list, :argadd adds a path, and :next or :previous navigates it. The list does not automatically contain every project file.",
        "sequence": ":argadd src<Enter>",
        "code": [
          "[App.tsx] lessons.ts Trainer.tsx",
          "-- argument list",
          ""
        ],
        "cursor": [
          0,
          1
        ],
        "language": "text"
      },
      {
        "key": ":next",
        "description": ":args displays the argument list, :argadd adds a path, and :next or :previous navigates it. The list does not automatically contain every project file.",
        "sequence": ":next<Enter>",
        "code": [
          "[App.tsx] lessons.ts Trainer.tsx",
          "-- argument list",
          ""
        ],
        "cursor": [
          0,
          1
        ],
        "language": "text"
      },
      {
        "key": ":previous",
        "description": ":args displays the argument list, :argadd adds a path, and :next or :previous navigates it. The list does not automatically contain every project file.",
        "sequence": ":previous<Enter>",
        "code": [
          "[App.tsx] lessons.ts Trainer.tsx",
          "-- argument list",
          ""
        ],
        "cursor": [
          0,
          1
        ],
        "language": "text"
      },
      {
        "key": "Ctrl+^",
        "description": "Ctrl+^ switches between the current file and the most recently visited alternate file.",
        "sequence": "<C-^>",
        "code": [
          "current: App.tsx",
          "alternate: App.test.tsx",
          "-- fast two-file loop"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "Space fo",
        "description": "Use Space f o for a recent file, then :cd to establish the project root before opening more files.",
        "sequence": "<Space>fo",
        "code": [
          "> Old Files",
          "  project/src/App.tsx",
          "  project/src/lessons.ts"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
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
