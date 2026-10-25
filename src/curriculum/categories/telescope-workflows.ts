import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Telescope Workflows",
    "id": "find-files",
    "title": "Find any file",
    "eyebrow": "Telescope Workflows",
    "summary": "Space f f opens Telescope's file picker. Space is the default leader.",
    "detail": "After the picker opens, filter if needed and press Enter to open the selected file in the current window.",
    "keys": [
      "Space ff"
    ],
    "task": "Open the file finder and open the selected file.",
    "sequence": "<Space>ff<Enter>",
    "code": [
      "> Find Files",
      "  lua/chadrc.lua",
      "  lua/mappings.lua",
      "  init.lua"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Space ff",
        "description": "Space f f opens Telescope's file picker. Space is the default leader.",
        "sequence": "<Space>ff"
      }
    ],
    "cursor": [
      1,
      2
    ],
    "language": "text"
  },
  {
    "group": "Telescope Workflows",
    "id": "live-grep",
    "title": "Search the whole project",
    "eyebrow": "Telescope Workflows",
    "summary": "Space f w runs Telescope live grep. Ripgrep must be installed.",
    "detail": "After live grep opens, type a query, choose a match, and press Enter. Ripgrep must be installed and available on PATH.",
    "keys": [
      "Space fw"
    ],
    "task": "Open project-wide live grep, search for config, and open the selected match.",
    "sequence": "<Space>fwconfig<Enter>",
    "code": [
      "> Live Grep",
      "  search every tracked file",
      "  preview matches as you type"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Space fw",
        "description": "Space f w runs Telescope live grep. Ripgrep must be installed.",
        "sequence": "<Space>fw"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "Telescope Workflows",
    "id": "telescope-hidden-files",
    "title": "Search hidden and ignored files",
    "eyebrow": "Telescope Workflows",
    "summary": "Space f a searches hidden and ignored paths when the ordinary Space f f picker is intentionally narrower.",
    "detail": "Space f a includes hidden and ignored paths; press Enter to open the selected result in the current window.",
    "keys": [
      "Space fa"
    ],
    "task": "Open the all-files picker and open the selected result.",
    "sequence": "<Space>fa<Enter>",
    "code": [
      "> Find All Files",
      "  .env.example",
      "  .github/workflows/test.yml"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Space fa",
        "description": "Space f a searches hidden and ignored paths when the ordinary Space f f picker is intentionally narrower.",
        "sequence": "<Space>fa"
      }
    ],
    "cursor": [
      1,
      2
    ],
    "language": "text"
  },
  {
    "group": "Telescope Workflows",
    "id": "telescope-buffers",
    "title": "Switch through open buffers",
    "eyebrow": "Telescope Workflows",
    "summary": "Space f b opens a searchable list of buffers without walking the filesystem.",
    "detail": "Space f b opens a searchable list of buffers; press Enter to switch to the selected buffer.",
    "keys": [
      "Space fb"
    ],
    "task": "Open the buffer picker and switch to the selected buffer.",
    "sequence": "<Space>fb<Enter>",
    "code": [
      "> Buffers",
      "  App.tsx",
      "  lessons.ts"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Space fb",
        "description": "Space f b opens a searchable list of buffers without walking the filesystem.",
        "sequence": "<Space>fb"
      }
    ],
    "cursor": [
      1,
      2
    ],
    "language": "text"
  },
  {
    "group": "Telescope Workflows",
    "id": "telescope-history-help",
    "title": "Find help, history, and marks",
    "eyebrow": "Telescope Workflows",
    "summary": "Space f h searches help, Space f o reopens old files, and Space m a lists marks.",
    "detail": "Space f h searches help, Space f o reopens old files, and Space m a lists marks.",
    "keys": [
      "Space fh",
      "Space fo",
      "Space ma"
    ],
    "task": "Open the recent-file picker and reopen the selected file.",
    "sequence": "<Space>fo<Enter>",
    "code": [
      "> Old Files",
      "  src/App.tsx",
      "  lua/mappings.lua"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Space fh",
        "description": "Space f h searches help, Space f o reopens old files, and Space m a lists marks.",
        "sequence": "<Space>fh"
      },
      {
        "key": "Space fo",
        "description": "Space f h searches help, Space f o reopens old files, and Space m a lists marks.",
        "sequence": "<Space>fo"
      },
      {
        "key": "Space ma",
        "description": "Space f h searches help, Space f o reopens old files, and Space m a lists marks.",
        "sequence": "<Space>ma"
      }
    ],
    "cursor": [
      1,
      2
    ],
    "language": "text"
  },
  {
    "group": "Telescope Workflows",
    "id": "telescope-git-buffer",
    "title": "Search Git and the current buffer",
    "eyebrow": "Telescope Workflows",
    "summary": "Space g t shows Git status, Space c m shows commits, and Space f z searches within the current buffer.",
    "detail": "Space g t shows Git status, Space c m shows commits, and Space f z searches within the current buffer.",
    "keys": [
      "Space gt",
      "Space cm",
      "Space fz"
    ],
    "task": "Open Telescope Git status and open the selected changed file.",
    "sequence": "<Space>gt<Enter>",
    "code": [
      "> Git Status",
      " M src/lessons.ts",
      " M src/referenceSections.ts"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Space gt",
        "description": "Space g t shows Git status, Space c m shows commits, and Space f z searches within the current buffer.",
        "sequence": "<Space>gt"
      },
      {
        "key": "Space cm",
        "description": "Space g t shows Git status, Space c m shows commits, and Space f z searches within the current buffer.",
        "sequence": "<Space>cm"
      },
      {
        "key": "Space fz",
        "description": "Space g t shows Git status, Space c m shows commits, and Space f z searches within the current buffer.",
        "sequence": "<Space>fz"
      }
    ],
    "cursor": [
      1,
      3
    ],
    "language": "text"
  },
  {
    "group": "Telescope Workflows",
    "id": "telescope-picker-navigation",
    "title": "Navigate a Telescope picker",
    "eyebrow": "Telescope Workflows",
    "summary": "Ctrl+n and Ctrl+p move, Enter opens the selected result, and Ctrl+c closes the picker.",
    "detail": "Ctrl+n and Ctrl+p move, Enter opens the selected result, and Ctrl+c closes the picker.",
    "keys": [
      "Ctrl+n",
      "Ctrl+p",
      "Enter",
      "Ctrl+c"
    ],
    "task": "Move to the next result and open it.",
    "sequence": "<C-n><Enter>",
    "code": [
      "> results",
      "  App.tsx  <- selected",
      "  lessons.ts"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Ctrl+n",
        "description": "Inside an open Telescope picker: Ctrl+n and Ctrl+p move, Enter opens the selected result, and Ctrl+c closes the picker.",
        "sequence": "<C-n>"
      },
      {
        "key": "Ctrl+p",
        "description": "Inside an open Telescope picker: Ctrl+n and Ctrl+p move, Enter opens the selected result, and Ctrl+c closes the picker.",
        "sequence": "<C-p>"
      },
      {
        "key": "Enter",
        "description": "Inside an open Telescope picker: Ctrl+n and Ctrl+p move, Enter opens the selected result, and Ctrl+c closes the picker.",
        "sequence": "<Enter>"
      },
      {
        "key": "Ctrl+c",
        "description": "Inside an open Telescope picker: Ctrl+n and Ctrl+p move, Enter opens the selected result, and Ctrl+c closes the picker.",
        "sequence": "<C-c>"
      }
    ],
    "cursor": [
      1,
      2
    ],
    "language": "text"
  },
  {
    "group": "Telescope Workflows",
    "id": "telescope-picker-layouts",
    "title": "Open picker results into layouts",
    "eyebrow": "Telescope Workflows",
    "summary": "Ctrl+x opens a horizontal split, Ctrl+v a vertical split, and Ctrl+t a new tab page.",
    "detail": "Ctrl+x opens a horizontal split, Ctrl+v a vertical split, and Ctrl+t a new tab page.",
    "keys": [
      "Ctrl+x",
      "Ctrl+v",
      "Ctrl+t"
    ],
    "task": "Open the selected result in a vertical split.",
    "sequence": "<C-v>",
    "code": [
      "> Find Files",
      "  App.tsx",
      "  Trainer.tsx  <- selected"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Ctrl+x",
        "description": "Inside an open Telescope picker: Ctrl+x opens a horizontal split, Ctrl+v a vertical split, and Ctrl+t a new tab page.",
        "sequence": "<C-x>"
      },
      {
        "key": "Ctrl+v",
        "description": "Inside an open Telescope picker: Ctrl+x opens a horizontal split, Ctrl+v a vertical split, and Ctrl+t a new tab page.",
        "sequence": "<C-v>"
      },
      {
        "key": "Ctrl+t",
        "description": "Inside an open Telescope picker: Ctrl+x opens a horizontal split, Ctrl+v a vertical split, and Ctrl+t a new tab page.",
        "sequence": "<C-t>"
      }
    ],
    "cursor": [
      2,
      2
    ],
    "language": "text"
  },
  {
    "group": "Telescope Workflows",
    "id": "telescope-multi-select",
    "title": "Send several results onward",
    "eyebrow": "Telescope Workflows",
    "summary": "Tab toggles result selection; Ctrl+q sends all filtered results to quickfix.",
    "detail": "Tab toggles result selection; Ctrl+q sends all filtered results to quickfix.",
    "keys": [
      "Tab",
      "Shift+Tab",
      "Ctrl+q"
    ],
    "task": "Select a result and send the filtered set to quickfix.",
    "sequence": "<Tab><C-q>",
    "code": [
      "[ ] App.tsx  <- cursor",
      "[ ] lessons.ts",
      "[ ] Trainer.tsx"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Tab",
        "description": "Inside an open Telescope picker: Tab toggles result selection; Ctrl+q sends all filtered results to quickfix.",
        "sequence": "<Tab>"
      },
      {
        "key": "Shift+Tab",
        "description": "Inside an open Telescope picker: Tab toggles result selection; Ctrl+q sends all filtered results to quickfix.",
        "sequence": "<S-Tab>"
      },
      {
        "key": "Ctrl+q",
        "description": "Inside an open Telescope picker: Tab toggles result selection; Ctrl+q sends all filtered results to quickfix.",
        "sequence": "<C-q>"
      }
    ],
    "cursor": [
      0,
      4
    ],
    "language": "text"
  },
  {
    "group": "Telescope Workflows",
    "id": "telescope-workflows-review",
    "title": "Telescope Workflows Review",
    "eyebrow": "Telescope Workflows",
    "summary": "Review every command introduced in Telescope Workflows before moving to the next category.",
    "detail": "Review every command introduced in Telescope Workflows before moving to the next category.",
    "keys": [
      "Space ff",
      "Space fw",
      "Space fa",
      "Space fb",
      "Space fh",
      "Space fo",
      "Space ma",
      "Space gt",
      "Space cm",
      "Space fz",
      "Ctrl+n",
      "Ctrl+p",
      "Enter",
      "Ctrl+c",
      "Ctrl+x",
      "Ctrl+v",
      "Ctrl+t",
      "Tab",
      "Shift+Tab",
      "Ctrl+q"
    ],
    "task": "",
    "sequence": "<Space>ff<Enter>",
    "code": [
      "> Find Files",
      "  lua/chadrc.lua",
      "  lua/mappings.lua",
      "  init.lua"
    ],
    "tip": "Return to any command in Telescope Workflows that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "Space ff",
        "description": "Space f f opens Telescope's file picker. Space is the default leader.",
        "sequence": "<Space>ff",
        "code": [
          "> Find Files",
          "  lua/chadrc.lua",
          "  lua/mappings.lua",
          "  init.lua"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "Space fw",
        "description": "Space f w runs Telescope live grep. Ripgrep must be installed.",
        "sequence": "<Space>fw",
        "code": [
          "> Live Grep",
          "  search every tracked file",
          "  preview matches as you type"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "Space fa",
        "description": "Space f a searches hidden and ignored paths when the ordinary Space f f picker is intentionally narrower.",
        "sequence": "<Space>fa",
        "code": [
          "> Find All Files",
          "  .env.example",
          "  .github/workflows/test.yml"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "Space fb",
        "description": "Space f b opens a searchable list of buffers without walking the filesystem.",
        "sequence": "<Space>fb",
        "code": [
          "> Buffers",
          "  App.tsx",
          "  lessons.ts"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "Space fh",
        "description": "Space f h searches help, Space f o reopens old files, and Space m a lists marks.",
        "sequence": "<Space>fh",
        "code": [
          "> Old Files",
          "  src/App.tsx",
          "  lua/mappings.lua"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "Space fo",
        "description": "Space f h searches help, Space f o reopens old files, and Space m a lists marks.",
        "sequence": "<Space>fo",
        "code": [
          "> Old Files",
          "  src/App.tsx",
          "  lua/mappings.lua"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "Space ma",
        "description": "Space f h searches help, Space f o reopens old files, and Space m a lists marks.",
        "sequence": "<Space>ma",
        "code": [
          "> Old Files",
          "  src/App.tsx",
          "  lua/mappings.lua"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "Space gt",
        "description": "Space g t shows Git status, Space c m shows commits, and Space f z searches within the current buffer.",
        "sequence": "<Space>gt",
        "code": [
          "> Git Status",
          " M src/lessons.ts",
          " M src/referenceSections.ts"
        ],
        "cursor": [
          1,
          3
        ],
        "language": "text"
      },
      {
        "key": "Space cm",
        "description": "Space g t shows Git status, Space c m shows commits, and Space f z searches within the current buffer.",
        "sequence": "<Space>cm",
        "code": [
          "> Git Status",
          " M src/lessons.ts",
          " M src/referenceSections.ts"
        ],
        "cursor": [
          1,
          3
        ],
        "language": "text"
      },
      {
        "key": "Space fz",
        "description": "Space g t shows Git status, Space c m shows commits, and Space f z searches within the current buffer.",
        "sequence": "<Space>fz",
        "code": [
          "> Git Status",
          " M src/lessons.ts",
          " M src/referenceSections.ts"
        ],
        "cursor": [
          1,
          3
        ],
        "language": "text"
      },
      {
        "key": "Ctrl+n",
        "description": "Inside an open Telescope picker: Ctrl+n and Ctrl+p move, Enter opens the selected result, and Ctrl+c closes the picker.",
        "sequence": "<C-n>",
        "code": [
          "> results",
          "  App.tsx  <- selected",
          "  lessons.ts"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "Ctrl+p",
        "description": "Inside an open Telescope picker: Ctrl+n and Ctrl+p move, Enter opens the selected result, and Ctrl+c closes the picker.",
        "sequence": "<C-p>",
        "code": [
          "> results",
          "  App.tsx  <- selected",
          "  lessons.ts"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "Enter",
        "description": "Inside an open Telescope picker: Ctrl+n and Ctrl+p move, Enter opens the selected result, and Ctrl+c closes the picker.",
        "sequence": "<Enter>",
        "code": [
          "> results",
          "  App.tsx  <- selected",
          "  lessons.ts"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "Ctrl+c",
        "description": "Inside an open Telescope picker: Ctrl+n and Ctrl+p move, Enter opens the selected result, and Ctrl+c closes the picker.",
        "sequence": "<C-c>",
        "code": [
          "> results",
          "  App.tsx  <- selected",
          "  lessons.ts"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "Ctrl+x",
        "description": "Inside an open Telescope picker: Ctrl+x opens a horizontal split, Ctrl+v a vertical split, and Ctrl+t a new tab page.",
        "sequence": "<C-x>",
        "code": [
          "> Find Files",
          "  App.tsx",
          "  Trainer.tsx  <- selected"
        ],
        "cursor": [
          2,
          2
        ],
        "language": "text"
      },
      {
        "key": "Ctrl+v",
        "description": "Inside an open Telescope picker: Ctrl+x opens a horizontal split, Ctrl+v a vertical split, and Ctrl+t a new tab page.",
        "sequence": "<C-v>",
        "code": [
          "> Find Files",
          "  App.tsx",
          "  Trainer.tsx  <- selected"
        ],
        "cursor": [
          2,
          2
        ],
        "language": "text"
      },
      {
        "key": "Ctrl+t",
        "description": "Inside an open Telescope picker: Ctrl+x opens a horizontal split, Ctrl+v a vertical split, and Ctrl+t a new tab page.",
        "sequence": "<C-t>",
        "code": [
          "> Find Files",
          "  App.tsx",
          "  Trainer.tsx  <- selected"
        ],
        "cursor": [
          2,
          2
        ],
        "language": "text"
      },
      {
        "key": "Tab",
        "description": "Inside an open Telescope picker: Tab toggles result selection; Ctrl+q sends all filtered results to quickfix.",
        "sequence": "<Tab>",
        "code": [
          "[ ] App.tsx  <- cursor",
          "[ ] lessons.ts",
          "[ ] Trainer.tsx"
        ],
        "cursor": [
          0,
          4
        ],
        "language": "text"
      },
      {
        "key": "Shift+Tab",
        "description": "Inside an open Telescope picker: Tab toggles result selection; Ctrl+q sends all filtered results to quickfix.",
        "sequence": "<S-Tab>",
        "code": [
          "[ ] App.tsx  <- cursor",
          "[ ] lessons.ts",
          "[ ] Trainer.tsx"
        ],
        "cursor": [
          0,
          4
        ],
        "language": "text"
      },
      {
        "key": "Ctrl+q",
        "description": "Inside an open Telescope picker: Tab toggles result selection; Ctrl+q sends all filtered results to quickfix.",
        "sequence": "<C-q>",
        "code": [
          "[ ] App.tsx  <- cursor",
          "[ ] lessons.ts",
          "[ ] Trainer.tsx"
        ],
        "cursor": [
          0,
          4
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
