import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Windows, Buffers & Tabs",
    "id": "workspace-model",
    "title": "Buffers, windows, and tab pages",
    "eyebrow": "Windows, Buffers & Tabs",
    "summary": "A buffer holds text, a window views a buffer, and a tab page owns a window layout.",
    "detail": "Floating windows are temporary UI windows; the terminal category applies that idea without duplicating its controls.",
    "keys": [
      ":ls",
      ":tabs"
    ],
    "task": "Inspect the buffers and tab pages in the current session.",
    "sequence": ":ls<Enter>:tabs<Enter>",
    "code": [
      "buffer 1: init.lua",
      "buffer 2: mappings.lua",
      "tab 1: two windows"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Windows, Buffers & Tabs",
    "id": "open-splits",
    "title": "Open horizontal and vertical splits",
    "eyebrow": "Windows, Buffers & Tabs",
    "summary": "Ctrl+w s splits horizontally and Ctrl+w v splits vertically.",
    "detail": "Ctrl+w s splits horizontally and Ctrl+w v splits vertically.",
    "keys": [
      "Ctrl+w s",
      "Ctrl+w v"
    ],
    "task": "Create one horizontal split and one vertical split.",
    "sequence": "<C-w>s<C-w>v",
    "code": [
      "init.lua",
      "-- split this buffer into multiple views",
      "return true"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Windows, Buffers & Tabs",
    "id": "splits",
    "title": "Navigate splits",
    "eyebrow": "Windows, Buffers & Tabs",
    "summary": "NVChad maps Ctrl+h/j/k/l to move between editor windows.",
    "detail": "Use directional navigation after creating a split; opening and resizing windows are taught separately.",
    "keys": [
      "Ctrl+h",
      "Ctrl+j",
      "Ctrl+k",
      "Ctrl+l"
    ],
    "task": "Move to the split on the right.",
    "sequence": "<C-l>",
    "code": [
      "-- left: init.lua",
      "-- right: mappings.lua",
      "vim.keymap.set(...)"
    ],
    "tip": "This is an NVChad default mapping over native Ctrl+w window navigation."
  },
  {
    "group": "Windows, Buffers & Tabs",
    "id": "resize-splits",
    "title": "Resize and equalize splits",
    "eyebrow": "Windows, Buffers & Tabs",
    "summary": "Ctrl+w = equalizes windows; +, -, <, and > adjust height or width.",
    "detail": "Ctrl+w = equalizes windows; +, -, <, and > adjust height or width.",
    "keys": [
      "Ctrl+w =",
      "Ctrl+w +",
      "Ctrl+w -",
      "Ctrl+w <",
      "Ctrl+w >"
    ],
    "task": "Equalize all visible splits.",
    "sequence": "<C-w>=",
    "code": [
      "left window | right window",
      "------------+-------------",
      "balanced layout"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Windows, Buffers & Tabs",
    "id": "close-splits",
    "title": "Close windows safely",
    "eyebrow": "Windows, Buffers & Tabs",
    "summary": "Ctrl+w c closes the current window while Ctrl+w o keeps only the current window.",
    "detail": "Ctrl+w c closes the current window while Ctrl+w o keeps only the current window.",
    "keys": [
      "Ctrl+w c",
      "Ctrl+w o"
    ],
    "task": "Close the current split.",
    "sequence": "<C-w>c",
    "code": [
      "window 1",
      "window 2 <- close",
      "window 3"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Windows, Buffers & Tabs",
    "id": "buffers",
    "title": "Manage tabufline buffers",
    "eyebrow": "Windows, Buffers & Tabs",
    "summary": "NVChad's tabufline exposes open buffers without turning them into native tab pages.",
    "detail": "Space b creates a buffer, Tab and Shift+Tab cycle, and Space x closes the selected buffer.",
    "keys": [
      "Space b",
      "Tab",
      "Shift+Tab",
      "Space x"
    ],
    "task": "Create a buffer, visit the next buffer, then close it.",
    "sequence": "<Space>b<Tab><Space>x",
    "code": [
      "init.lua  mappings.lua  plugins.lua",
      "",
      "-- buffers inside the current tab page"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Windows, Buffers & Tabs",
    "id": "tab-pages",
    "title": "Work with native tab pages",
    "eyebrow": "Windows, Buffers & Tabs",
    "summary": ":tabnew creates a tab page, gt and gT navigate, and :tabclose closes the current tab page.",
    "detail": ":tabnew creates a tab page, gt and gT navigate, and :tabclose closes the current tab page.",
    "keys": [
      ":tabnew",
      "gt",
      "gT",
      ":tabclose"
    ],
    "task": "Create, navigate, and close a native tab page.",
    "sequence": ":tabnew<Enter>gtgT:tabclose<Enter>",
    "code": [
      "tab 1: editor + tests",
      "tab 2: git review",
      "-- each tab owns its window layout"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Windows, Buffers & Tabs",
    "id": "windows-buffers-tabs-review",
    "title": "Windows, Buffers & Tabs Review",
    "eyebrow": "Windows, Buffers & Tabs",
    "summary": "Review every command introduced in Windows, Buffers & Tabs before moving to the next category.",
    "detail": "Review every command introduced in Windows, Buffers & Tabs before moving to the next category.",
    "keys": [
      ":ls",
      ":tabs",
      "Ctrl+w s",
      "Ctrl+w v",
      "Ctrl+h",
      "Ctrl+j",
      "Ctrl+k",
      "Ctrl+l",
      "Ctrl+w =",
      "Ctrl+w +",
      "Ctrl+w -",
      "Ctrl+w <",
      "Ctrl+w >",
      "Ctrl+w c",
      "Ctrl+w o",
      "Space b",
      "Tab",
      "Shift+Tab",
      "Space x",
      ":tabnew",
      "gt",
      "gT",
      ":tabclose"
    ],
    "task": "",
    "sequence": ":ls<Enter>:tabs<Enter>",
    "code": [
      "buffer 1: init.lua",
      "buffer 2: mappings.lua",
      "tab 1: two windows"
    ],
    "tip": "Return to any command in Windows, Buffers & Tabs that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": ":ls",
        "description": "A buffer holds text, a window views a buffer, and a tab page owns a window layout.",
        "sequence": ":ls<Enter>:tabs<Enter>"
      },
      {
        "key": ":tabs",
        "description": "A buffer holds text, a window views a buffer, and a tab page owns a window layout.",
        "sequence": ":ls<Enter>:tabs<Enter>"
      },
      {
        "key": "Ctrl+w s",
        "description": "Ctrl+w s splits horizontally and Ctrl+w v splits vertically.",
        "sequence": "<C-w>s<C-w>v"
      },
      {
        "key": "Ctrl+w v",
        "description": "Ctrl+w s splits horizontally and Ctrl+w v splits vertically.",
        "sequence": "<C-w>s<C-w>v"
      },
      {
        "key": "Ctrl+h",
        "description": "NVChad maps Ctrl+h/j/k/l to move between editor windows.",
        "sequence": "<C-l>"
      },
      {
        "key": "Ctrl+j",
        "description": "NVChad maps Ctrl+h/j/k/l to move between editor windows.",
        "sequence": "<C-l>"
      },
      {
        "key": "Ctrl+k",
        "description": "NVChad maps Ctrl+h/j/k/l to move between editor windows.",
        "sequence": "<C-l>"
      },
      {
        "key": "Ctrl+l",
        "description": "NVChad maps Ctrl+h/j/k/l to move between editor windows.",
        "sequence": "<C-l>"
      },
      {
        "key": "Ctrl+w =",
        "description": "Ctrl+w = equalizes windows; +, -, <, and > adjust height or width.",
        "sequence": "<C-w>="
      },
      {
        "key": "Ctrl+w +",
        "description": "Ctrl+w = equalizes windows; +, -, <, and > adjust height or width.",
        "sequence": "<C-w>="
      },
      {
        "key": "Ctrl+w -",
        "description": "Ctrl+w = equalizes windows; +, -, <, and > adjust height or width.",
        "sequence": "<C-w>="
      },
      {
        "key": "Ctrl+w <",
        "description": "Ctrl+w = equalizes windows; +, -, <, and > adjust height or width.",
        "sequence": "<C-w>="
      },
      {
        "key": "Ctrl+w >",
        "description": "Ctrl+w = equalizes windows; +, -, <, and > adjust height or width.",
        "sequence": "<C-w>="
      },
      {
        "key": "Ctrl+w c",
        "description": "Ctrl+w c closes the current window while Ctrl+w o keeps only the current window.",
        "sequence": "<C-w>c"
      },
      {
        "key": "Ctrl+w o",
        "description": "Ctrl+w c closes the current window while Ctrl+w o keeps only the current window.",
        "sequence": "<C-w>c"
      },
      {
        "key": "Space b",
        "description": "NVChad's tabufline exposes open buffers without turning them into native tab pages.",
        "sequence": "<Space>b<Tab><Space>x"
      },
      {
        "key": "Tab",
        "description": "NVChad's tabufline exposes open buffers without turning them into native tab pages.",
        "sequence": "<Space>b<Tab><Space>x"
      },
      {
        "key": "Shift+Tab",
        "description": "NVChad's tabufline exposes open buffers without turning them into native tab pages.",
        "sequence": "<Space>b<Tab><Space>x"
      },
      {
        "key": "Space x",
        "description": "NVChad's tabufline exposes open buffers without turning them into native tab pages.",
        "sequence": "<Space>b<Tab><Space>x"
      },
      {
        "key": ":tabnew",
        "description": ":tabnew creates a tab page, gt and gT navigate, and :tabclose closes the current tab page.",
        "sequence": ":tabnew<Enter>gtgT:tabclose<Enter>"
      },
      {
        "key": "gt",
        "description": ":tabnew creates a tab page, gt and gT navigate, and :tabclose closes the current tab page.",
        "sequence": ":tabnew<Enter>gtgT:tabclose<Enter>"
      },
      {
        "key": "gT",
        "description": ":tabnew creates a tab page, gt and gT navigate, and :tabclose closes the current tab page.",
        "sequence": ":tabnew<Enter>gtgT:tabclose<Enter>"
      },
      {
        "key": ":tabclose",
        "description": ":tabnew creates a tab page, gt and gT navigate, and :tabclose closes the current tab page.",
        "sequence": ":tabnew<Enter>gtgT:tabclose<Enter>"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
