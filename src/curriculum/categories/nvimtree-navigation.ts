import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "NvimTree Navigation",
    "id": "file-tree",
    "title": "Toggle or focus the project tree",
    "eyebrow": "NvimTree Navigation",
    "summary": "Ctrl+n toggles NvimTree; Space e focuses it, opening the tree first if it is closed.",
    "detail": "Ctrl+n toggles NvimTree; Space e focuses it, opening the tree first if it is closed.",
    "keys": [
      "Ctrl+n",
      "Space e"
    ],
    "task": "Focus the project tree.",
    "sequence": "<Space>e",
    "code": [
      "lua/",
      "  chadrc.lua",
      "  mappings.lua",
      "init.lua"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Ctrl+n",
        "description": "Ctrl+n toggles NvimTree; Space e focuses it, opening the tree first if it is closed.",
        "sequence": "<C-n>"
      },
      {
        "key": "Space e",
        "description": "Ctrl+n toggles NvimTree; Space e focuses it, opening the tree first if it is closed.",
        "sequence": "<Space>e"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "NvimTree Navigation",
    "id": "tree-open-nodes",
    "title": "Navigate and open tree nodes",
    "eyebrow": "NvimTree Navigation",
    "summary": "Enter or o opens a node, P moves to its parent, and - changes the tree root upward.",
    "detail": "Enter or o opens a node, P moves to its parent, and - changes the tree root upward.",
    "keys": [
      "Enter",
      "o",
      "P",
      "-"
    ],
    "task": "Open the selected file.",
    "sequence": "<Enter>",
    "code": [
      "src/",
      "  App.tsx  <- cursor",
      "  lessons.ts"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Enter",
        "description": "With NvimTree focused: Enter or o opens a node, P moves to its parent, and - changes the tree root upward.",
        "sequence": "<Enter>"
      },
      {
        "key": "o",
        "description": "With NvimTree focused: Enter or o opens a node, P moves to its parent, and - changes the tree root upward.",
        "sequence": "o"
      },
      {
        "key": "P",
        "description": "With NvimTree focused: Enter or o opens a node, P moves to its parent, and - changes the tree root upward.",
        "sequence": "P"
      },
      {
        "key": "-",
        "description": "With NvimTree focused: Enter or o opens a node, P moves to its parent, and - changes the tree root upward.",
        "sequence": "-"
      }
    ],
    "cursor": [
      1,
      2
    ],
    "language": "text"
  },
  {
    "group": "NvimTree Navigation",
    "id": "tree-open-layout",
    "title": "Open files into layouts",
    "eyebrow": "NvimTree Navigation",
    "summary": "Ctrl+v opens a vertical split, Ctrl+x a horizontal split, Ctrl+t a tab, and Tab a preview.",
    "detail": "Ctrl+v opens a vertical split, Ctrl+x a horizontal split, Ctrl+t a tab, and Tab a preview.",
    "keys": [
      "Ctrl+v",
      "Ctrl+x",
      "Ctrl+t",
      "Tab"
    ],
    "task": "Open the selected file in a vertical split.",
    "sequence": "<C-v>",
    "code": [
      "src/",
      "  App.tsx",
      "  lessons.ts  <- cursor"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Ctrl+v",
        "description": "With NvimTree focused: Ctrl+v opens a vertical split, Ctrl+x a horizontal split, Ctrl+t a tab, and Tab a preview.",
        "sequence": "<C-v>"
      },
      {
        "key": "Ctrl+x",
        "description": "With NvimTree focused: Ctrl+v opens a vertical split, Ctrl+x a horizontal split, Ctrl+t a tab, and Tab a preview.",
        "sequence": "<C-x>"
      },
      {
        "key": "Ctrl+t",
        "description": "With NvimTree focused: Ctrl+v opens a vertical split, Ctrl+x a horizontal split, Ctrl+t a tab, and Tab a preview.",
        "sequence": "<C-t>"
      },
      {
        "key": "Tab",
        "description": "With NvimTree focused: Ctrl+v opens a vertical split, Ctrl+x a horizontal split, Ctrl+t a tab, and Tab a preview.",
        "sequence": "<Tab>"
      }
    ],
    "cursor": [
      2,
      2
    ],
    "language": "text"
  },
  {
    "group": "NvimTree Navigation",
    "id": "tree-find-help",
    "title": "Filter and inspect the tree",
    "eyebrow": "NvimTree Navigation",
    "summary": "f starts a live filter, F clears it, and g? shows the active NvimTree mappings.",
    "detail": "f starts a live filter, F clears it, and g? shows the active NvimTree mappings.",
    "keys": [
      "f",
      "F",
      "g?"
    ],
    "task": "Show NvimTree's mapping help.",
    "sequence": "g?",
    "code": [
      "> NvimTree Help",
      "  Enter  Open",
      "  a      Create"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "f",
        "description": "With NvimTree focused: f starts a live filter, F clears it, and g? shows the active NvimTree mappings.",
        "sequence": "f"
      },
      {
        "key": "F",
        "description": "With NvimTree focused: f starts a live filter, F clears it, and g? shows the active NvimTree mappings.",
        "sequence": "F"
      },
      {
        "key": "g?",
        "description": "With NvimTree focused: f starts a live filter, F clears it, and g? shows the active NvimTree mappings.",
        "sequence": "g?"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "NvimTree Navigation",
    "id": "nvimtree-navigation-review",
    "title": "NvimTree Navigation Review",
    "eyebrow": "NvimTree Navigation",
    "summary": "Review every command introduced in NvimTree Navigation before moving to the next category.",
    "detail": "Review every command introduced in NvimTree Navigation before moving to the next category.",
    "keys": [
      "Ctrl+n",
      "Space e",
      "Enter",
      "o",
      "P",
      "-",
      "Ctrl+v",
      "Ctrl+x",
      "Ctrl+t",
      "Tab",
      "f",
      "F",
      "g?"
    ],
    "task": "",
    "sequence": "<Space>e",
    "code": [
      "lua/",
      "  chadrc.lua",
      "  mappings.lua",
      "init.lua"
    ],
    "tip": "Return to any command in NvimTree Navigation that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "Ctrl+n",
        "description": "Ctrl+n toggles NvimTree; Space e focuses it, opening the tree first if it is closed.",
        "sequence": "<C-n>",
        "code": [
          "lua/",
          "  chadrc.lua",
          "  mappings.lua",
          "init.lua"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "Space e",
        "description": "Ctrl+n toggles NvimTree; Space e focuses it, opening the tree first if it is closed.",
        "sequence": "<Space>e",
        "code": [
          "lua/",
          "  chadrc.lua",
          "  mappings.lua",
          "init.lua"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "Enter",
        "description": "With NvimTree focused: Enter or o opens a node, P moves to its parent, and - changes the tree root upward.",
        "sequence": "<Enter>",
        "code": [
          "src/",
          "  App.tsx  <- cursor",
          "  lessons.ts"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "o",
        "description": "With NvimTree focused: Enter or o opens a node, P moves to its parent, and - changes the tree root upward.",
        "sequence": "o",
        "code": [
          "src/",
          "  App.tsx  <- cursor",
          "  lessons.ts"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "P",
        "description": "With NvimTree focused: Enter or o opens a node, P moves to its parent, and - changes the tree root upward.",
        "sequence": "P",
        "code": [
          "src/",
          "  App.tsx  <- cursor",
          "  lessons.ts"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "-",
        "description": "With NvimTree focused: Enter or o opens a node, P moves to its parent, and - changes the tree root upward.",
        "sequence": "-",
        "code": [
          "src/",
          "  App.tsx  <- cursor",
          "  lessons.ts"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "Ctrl+v",
        "description": "With NvimTree focused: Ctrl+v opens a vertical split, Ctrl+x a horizontal split, Ctrl+t a tab, and Tab a preview.",
        "sequence": "<C-v>",
        "code": [
          "src/",
          "  App.tsx",
          "  lessons.ts  <- cursor"
        ],
        "cursor": [
          2,
          2
        ],
        "language": "text"
      },
      {
        "key": "Ctrl+x",
        "description": "With NvimTree focused: Ctrl+v opens a vertical split, Ctrl+x a horizontal split, Ctrl+t a tab, and Tab a preview.",
        "sequence": "<C-x>",
        "code": [
          "src/",
          "  App.tsx",
          "  lessons.ts  <- cursor"
        ],
        "cursor": [
          2,
          2
        ],
        "language": "text"
      },
      {
        "key": "Ctrl+t",
        "description": "With NvimTree focused: Ctrl+v opens a vertical split, Ctrl+x a horizontal split, Ctrl+t a tab, and Tab a preview.",
        "sequence": "<C-t>",
        "code": [
          "src/",
          "  App.tsx",
          "  lessons.ts  <- cursor"
        ],
        "cursor": [
          2,
          2
        ],
        "language": "text"
      },
      {
        "key": "Tab",
        "description": "With NvimTree focused: Ctrl+v opens a vertical split, Ctrl+x a horizontal split, Ctrl+t a tab, and Tab a preview.",
        "sequence": "<Tab>",
        "code": [
          "src/",
          "  App.tsx",
          "  lessons.ts  <- cursor"
        ],
        "cursor": [
          2,
          2
        ],
        "language": "text"
      },
      {
        "key": "f",
        "description": "With NvimTree focused: f starts a live filter, F clears it, and g? shows the active NvimTree mappings.",
        "sequence": "f",
        "code": [
          "> NvimTree Help",
          "  Enter  Open",
          "  a      Create"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "F",
        "description": "With NvimTree focused: f starts a live filter, F clears it, and g? shows the active NvimTree mappings.",
        "sequence": "F",
        "code": [
          "> NvimTree Help",
          "  Enter  Open",
          "  a      Create"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "g?",
        "description": "With NvimTree focused: f starts a live filter, F clears it, and g? shows the active NvimTree mappings.",
        "sequence": "g?",
        "code": [
          "> NvimTree Help",
          "  Enter  Open",
          "  a      Create"
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
      0
    ],
    "language": "text"
  }
] satisfies readonly Lesson[];

export default lessons;
