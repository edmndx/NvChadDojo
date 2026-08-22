import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "NvimTree Navigation",
    "id": "file-tree",
    "title": "Toggle or focus the project tree",
    "eyebrow": "NvimTree Navigation",
    "summary": "Ctrl+n toggles NvimTree while Space e focuses an already open tree.",
    "detail": "Toggle changes visibility; focus moves into the tree without closing it.",
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
    "tip": "Keep your hands on the home row."
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
    "tip": "Keep your hands on the home row."
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
    "tip": "Keep your hands on the home row."
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
    "tip": "Keep your hands on the home row."
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
        "description": "Ctrl+n toggles NvimTree while Space e focuses an already open tree.",
        "sequence": "<Space>e"
      },
      {
        "key": "Space e",
        "description": "Ctrl+n toggles NvimTree while Space e focuses an already open tree.",
        "sequence": "<Space>e"
      },
      {
        "key": "Enter",
        "description": "Enter or o opens a node, P moves to its parent, and - changes the tree root upward.",
        "sequence": "<Enter>"
      },
      {
        "key": "o",
        "description": "Enter or o opens a node, P moves to its parent, and - changes the tree root upward.",
        "sequence": "<Enter>"
      },
      {
        "key": "P",
        "description": "Enter or o opens a node, P moves to its parent, and - changes the tree root upward.",
        "sequence": "<Enter>"
      },
      {
        "key": "-",
        "description": "Enter or o opens a node, P moves to its parent, and - changes the tree root upward.",
        "sequence": "<Enter>"
      },
      {
        "key": "Ctrl+v",
        "description": "Ctrl+v opens a vertical split, Ctrl+x a horizontal split, Ctrl+t a tab, and Tab a preview.",
        "sequence": "<C-v>"
      },
      {
        "key": "Ctrl+x",
        "description": "Ctrl+v opens a vertical split, Ctrl+x a horizontal split, Ctrl+t a tab, and Tab a preview.",
        "sequence": "<C-v>"
      },
      {
        "key": "Ctrl+t",
        "description": "Ctrl+v opens a vertical split, Ctrl+x a horizontal split, Ctrl+t a tab, and Tab a preview.",
        "sequence": "<C-v>"
      },
      {
        "key": "Tab",
        "description": "Ctrl+v opens a vertical split, Ctrl+x a horizontal split, Ctrl+t a tab, and Tab a preview.",
        "sequence": "<C-v>"
      },
      {
        "key": "f",
        "description": "f starts a live filter, F clears it, and g? shows the active NvimTree mappings.",
        "sequence": "g?"
      },
      {
        "key": "F",
        "description": "f starts a live filter, F clears it, and g? shows the active NvimTree mappings.",
        "sequence": "g?"
      },
      {
        "key": "g?",
        "description": "f starts a live filter, F clears it, and g? shows the active NvimTree mappings.",
        "sequence": "g?"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
