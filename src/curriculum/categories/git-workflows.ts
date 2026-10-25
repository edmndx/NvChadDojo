import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Git Workflows",
    "id": "git-plugin-setup",
    "title": "Prepare Gitsigns and LazyGit",
    "eyebrow": "Git Workflows",
    "summary": "Gitsigns ships with NVChad, but its workflow keys must be mapped; LazyGit also needs its executable and Neovim plugin.",
    "detail": "The following lessons use the suggested mappings listed on the reference board.",
    "keys": [
      ":Lazy"
    ],
    "task": "Open the plugin manager to verify both integrations.",
    "sequence": ":Lazy<Enter>",
    "code": [
      "Gitsigns: built into NVChad",
      "LazyGit: optional plugin + executable",
      "Mappings: configure in on_attach"
    ],
    "tip": "These Space h mappings and ih are suggested custom mappings, not NVChad defaults. Configure Gitsigns on_attach before using them.",
    "reviewItems": [
      {
        "key": ":Lazy",
        "description": "Gitsigns ships with NVChad, but its workflow keys must be mapped; LazyGit also needs its executable and Neovim plugin.",
        "sequence": ":Lazy<Enter>"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "Git Workflows",
    "id": "gitsigns-navigate",
    "title": "Navigate changed hunks",
    "eyebrow": "Git Workflows",
    "summary": "]c and [c move to the next and previous Git hunk in the current buffer.",
    "detail": "]c and [c move to the next and previous Git hunk in the current buffer.",
    "keys": [
      "]c",
      "[c"
    ],
    "task": "Visit the next hunk, then return to the previous hunk.",
    "sequence": "]c[c",
    "code": [
      "  unchanged",
      "+ added line",
      "~ changed line"
    ],
    "tip": "These Space h mappings and ih are suggested custom mappings, not NVChad defaults. Configure Gitsigns on_attach before using them.",
    "reviewItems": [
      {
        "key": "]c",
        "description": "]c and [c move to the next and previous Git hunk in the current buffer.",
        "sequence": "]c"
      },
      {
        "key": "[c",
        "description": "]c and [c move to the next and previous Git hunk in the current buffer.",
        "sequence": "[c"
      }
    ],
    "cursor": [
      0,
      2
    ],
    "language": "text"
  },
  {
    "group": "Git Workflows",
    "id": "gitsigns-preview",
    "title": "Preview and select a hunk",
    "eyebrow": "Git Workflows",
    "summary": "Space h p previews the current hunk; ih selects the hunk in operator-pending or Visual mode.",
    "detail": "Space h p previews the current hunk; ih selects the hunk in operator-pending or Visual mode.",
    "keys": [
      "Space hp",
      "ih"
    ],
    "task": "Preview the hunk under the cursor.",
    "sequence": "<Space>hp",
    "code": [
      "@@ -2,1 +2,1 @@",
      "- old value",
      "+ new value"
    ],
    "tip": "These Space h mappings and ih are suggested custom mappings, not NVChad defaults. Configure Gitsigns on_attach before using them.",
    "reviewItems": [
      {
        "key": "Space hp",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Space h p previews the current hunk; ih selects the hunk in operator-pending or Visual mode.",
        "sequence": "<Space>hp"
      },
      {
        "key": "ih",
        "description": "With the suggested Gitsigns text-object mapping installed, select the current hunk in Visual mode.",
        "sequence": "vih"
      }
    ],
    "cursor": [
      1,
      2
    ],
    "language": "text"
  },
  {
    "group": "Git Workflows",
    "id": "gitsigns-hunk-actions",
    "title": "Stage or reset one hunk",
    "eyebrow": "Git Workflows",
    "summary": "Space h s stages the current hunk and Space h r restores its working-tree version.",
    "detail": "Space h s stages the current hunk and Space h r restores its working-tree version.",
    "keys": [
      "Space hs",
      "Space hr"
    ],
    "task": "Stage the current hunk.",
    "sequence": "<Space>hs",
    "code": [
      "+ staged candidate",
      "  unchanged context",
      "-- current hunk"
    ],
    "tip": "These Space h mappings and ih are suggested custom mappings, not NVChad defaults. Configure Gitsigns on_attach before using them.",
    "reviewItems": [
      {
        "key": "Space hs",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Space h s stages the current hunk and Space h r restores its working-tree version.",
        "sequence": "<Space>hs"
      },
      {
        "key": "Space hr",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Space h s stages the current hunk and Space h r restores its working-tree version.",
        "sequence": "<Space>hr"
      }
    ],
    "cursor": [
      0,
      2
    ],
    "language": "text"
  },
  {
    "group": "Git Workflows",
    "id": "gitsigns-buffer-actions",
    "title": "Stage or reset a buffer",
    "eyebrow": "Git Workflows",
    "summary": "Space h S stages all hunks in the buffer and Space h R resets all of them.",
    "detail": "Space h S stages all hunks in the buffer and Space h R resets all of them.",
    "keys": [
      "Space hS",
      "Space hR"
    ],
    "task": "Stage every hunk in the current buffer.",
    "sequence": "<Space>hS",
    "code": [
      "M src/App.tsx",
      "M src/lessons.ts",
      "-- current buffer only"
    ],
    "tip": "These Space h mappings and ih are suggested custom mappings, not NVChad defaults. Configure Gitsigns on_attach before using them.",
    "reviewItems": [
      {
        "key": "Space hS",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Space h S stages all hunks in the buffer and Space h R resets all of them.",
        "sequence": "<Space>hS"
      },
      {
        "key": "Space hR",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Space h S stages all hunks in the buffer and Space h R resets all of them.",
        "sequence": "<Space>hR"
      }
    ],
    "cursor": [
      0,
      2
    ],
    "language": "text"
  },
  {
    "group": "Git Workflows",
    "id": "gitsigns-inspect",
    "title": "Inspect blame and diffs",
    "eyebrow": "Git Workflows",
    "summary": "Space h b shows blame for the current line and Space h d diffs the current buffer.",
    "detail": "Space h b shows blame for the current line and Space h d diffs the current buffer.",
    "keys": [
      "Space hb",
      "Space hd"
    ],
    "task": "Preview blame for the current line.",
    "sequence": "<Space>hb",
    "code": [
      "author  2 hours ago",
      "feat: add trainer",
      "const ready = true;"
    ],
    "tip": "These Space h mappings and ih are suggested custom mappings, not NVChad defaults. Configure Gitsigns on_attach before using them.",
    "reviewItems": [
      {
        "key": "Space hb",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Space h b shows blame for the current line and Space h d diffs the current buffer.",
        "sequence": "<Space>hb"
      },
      {
        "key": "Space hd",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Space h b shows blame for the current line and Space h d diffs the current buffer.",
        "sequence": "<Space>hd"
      }
    ],
    "cursor": [
      2,
      0
    ],
    "language": "text"
  },
  {
    "group": "Git Workflows",
    "id": "lazygit-launch",
    "title": "Launch LazyGit",
    "eyebrow": "Git Workflows",
    "summary": ":LazyGit opens the optional repository-wide Git interface.",
    "detail": ":LazyGit opens the optional repository-wide Git interface.",
    "keys": [
      ":LazyGit"
    ],
    "task": "Launch LazyGit.",
    "sequence": ":LazyGit<Enter>",
    "code": [
      "Files | Local branches | Commits",
      "M src/lessons.ts",
      "main"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": ":LazyGit",
        "description": ":LazyGit opens the optional repository-wide Git interface.",
        "sequence": ":LazyGit<Enter>"
      }
    ],
    "cursor": [
      0,
      0
    ],
    "language": "text"
  },
  {
    "group": "Git Workflows",
    "id": "lazygit-stage-commit",
    "title": "Stage and commit in LazyGit",
    "eyebrow": "Git Workflows",
    "summary": "Space toggles the selected file, a stages all files, and c opens the commit-message prompt.",
    "detail": "A commit is not created until you enter a non-empty message and confirm it; this exercise stages the selected file and commits it with a message.",
    "keys": [
      "Space",
      "a",
      "c"
    ],
    "task": "Stage the selected file and commit it with the message fix trainer.",
    "sequence": "<Space>cfix<Space>trainer<Enter>",
    "code": [
      "[ ] src/lessons.ts  <- selected",
      "[ ] src/App.tsx",
      "Commit message:"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "Space",
        "description": "Space toggles the selected file, a stages all files, and c opens the commit-message prompt.",
        "sequence": "<Space>"
      },
      {
        "key": "a",
        "description": "Space toggles the selected file, a stages all files, and c opens the commit-message prompt.",
        "sequence": "a"
      },
      {
        "key": "c",
        "description": "In LazyGit's Files panel with staged changes, enter and confirm a commit message.",
        "sequence": "cfix<Space>trainer<Enter>"
      }
    ],
    "cursor": [
      0,
      4
    ],
    "language": "text"
  },
  {
    "group": "Git Workflows",
    "id": "lazygit-sync-stash",
    "title": "Sync and stash in LazyGit",
    "eyebrow": "Git Workflows",
    "summary": "p pulls, P pushes, S opens stash options, and q returns to Neovim.",
    "detail": "In the Files panel, S opens stash options. Escape closes the menu before q exits LazyGit; pull and push require a configured remote.",
    "keys": [
      "p",
      "P",
      "S",
      "q"
    ],
    "task": "Open stash options, then return to Neovim.",
    "sequence": "S<Esc>q",
    "code": [
      "Files",
      "  M src/App.tsx  <- selected",
      "-- stash options open with S"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "p",
        "description": "p pulls, P pushes, S opens stash options, and q returns to Neovim.",
        "sequence": "p"
      },
      {
        "key": "P",
        "description": "p pulls, P pushes, S opens stash options, and q returns to Neovim.",
        "sequence": "P"
      },
      {
        "key": "S",
        "description": "p pulls, P pushes, S opens stash options, and q returns to Neovim.",
        "sequence": "S"
      },
      {
        "key": "q",
        "description": "p pulls, P pushes, S opens stash options, and q returns to Neovim.",
        "sequence": "q"
      }
    ],
    "cursor": [
      1,
      4
    ],
    "language": "text"
  },
  {
    "group": "Git Workflows",
    "id": "git-workflows-review",
    "title": "Git Workflows Review",
    "eyebrow": "Git Workflows",
    "summary": "Review every command introduced in Git Workflows before moving to the next category.",
    "detail": "Review every command introduced in Git Workflows before moving to the next category.",
    "keys": [
      ":Lazy",
      "]c",
      "[c",
      "Space hp",
      "ih",
      "Space hs",
      "Space hr",
      "Space hS",
      "Space hR",
      "Space hb",
      "Space hd",
      ":LazyGit",
      "Space",
      "a",
      "c",
      "p",
      "P",
      "S",
      "q"
    ],
    "task": "",
    "sequence": ":Lazy<Enter>",
    "code": [
      "Gitsigns: built into NVChad",
      "LazyGit: optional plugin + executable",
      "Mappings: configure in on_attach"
    ],
    "tip": "Return to any command in Git Workflows that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": ":Lazy",
        "description": "Gitsigns ships with NVChad, but its workflow keys must be mapped; LazyGit also needs its executable and Neovim plugin.",
        "sequence": ":Lazy<Enter>",
        "code": [
          "Gitsigns: built into NVChad",
          "LazyGit: optional plugin + executable",
          "Mappings: configure in on_attach"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "]c",
        "description": "]c and [c move to the next and previous Git hunk in the current buffer.",
        "sequence": "]c",
        "code": [
          "  unchanged",
          "+ added line",
          "~ changed line"
        ],
        "cursor": [
          0,
          2
        ],
        "language": "text"
      },
      {
        "key": "[c",
        "description": "]c and [c move to the next and previous Git hunk in the current buffer.",
        "sequence": "[c",
        "code": [
          "  unchanged",
          "+ added line",
          "~ changed line"
        ],
        "cursor": [
          0,
          2
        ],
        "language": "text"
      },
      {
        "key": "Space hp",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Space h p previews the current hunk; ih selects the hunk in operator-pending or Visual mode.",
        "sequence": "<Space>hp",
        "code": [
          "@@ -2,1 +2,1 @@",
          "- old value",
          "+ new value"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "ih",
        "description": "With the suggested Gitsigns text-object mapping installed, select the current hunk in Visual mode.",
        "sequence": "vih",
        "code": [
          "@@ -2,1 +2,1 @@",
          "- old value",
          "+ new value"
        ],
        "cursor": [
          1,
          2
        ],
        "language": "text"
      },
      {
        "key": "Space hs",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Space h s stages the current hunk and Space h r restores its working-tree version.",
        "sequence": "<Space>hs",
        "code": [
          "+ staged candidate",
          "  unchanged context",
          "-- current hunk"
        ],
        "cursor": [
          0,
          2
        ],
        "language": "text"
      },
      {
        "key": "Space hr",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Space h s stages the current hunk and Space h r restores its working-tree version.",
        "sequence": "<Space>hr",
        "code": [
          "+ staged candidate",
          "  unchanged context",
          "-- current hunk"
        ],
        "cursor": [
          0,
          2
        ],
        "language": "text"
      },
      {
        "key": "Space hS",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Space h S stages all hunks in the buffer and Space h R resets all of them.",
        "sequence": "<Space>hS",
        "code": [
          "M src/App.tsx",
          "M src/lessons.ts",
          "-- current buffer only"
        ],
        "cursor": [
          0,
          2
        ],
        "language": "text"
      },
      {
        "key": "Space hR",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Space h S stages all hunks in the buffer and Space h R resets all of them.",
        "sequence": "<Space>hR",
        "code": [
          "M src/App.tsx",
          "M src/lessons.ts",
          "-- current buffer only"
        ],
        "cursor": [
          0,
          2
        ],
        "language": "text"
      },
      {
        "key": "Space hb",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Space h b shows blame for the current line and Space h d diffs the current buffer.",
        "sequence": "<Space>hb",
        "code": [
          "author  2 hours ago",
          "feat: add trainer",
          "const ready = true;"
        ],
        "cursor": [
          2,
          0
        ],
        "language": "text"
      },
      {
        "key": "Space hd",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Space h b shows blame for the current line and Space h d diffs the current buffer.",
        "sequence": "<Space>hd",
        "code": [
          "author  2 hours ago",
          "feat: add trainer",
          "const ready = true;"
        ],
        "cursor": [
          2,
          0
        ],
        "language": "text"
      },
      {
        "key": ":LazyGit",
        "description": ":LazyGit opens the optional repository-wide Git interface.",
        "sequence": ":LazyGit<Enter>",
        "code": [
          "Files | Local branches | Commits",
          "M src/lessons.ts",
          "main"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "Space",
        "description": "Space toggles the selected file, a stages all files, and c opens the commit-message prompt.",
        "sequence": "<Space>",
        "code": [
          "[ ] src/lessons.ts  <- selected",
          "[ ] src/App.tsx",
          "Commit message:"
        ],
        "cursor": [
          0,
          4
        ],
        "language": "text"
      },
      {
        "key": "a",
        "description": "Space toggles the selected file, a stages all files, and c opens the commit-message prompt.",
        "sequence": "a",
        "code": [
          "[ ] src/lessons.ts  <- selected",
          "[ ] src/App.tsx",
          "Commit message:"
        ],
        "cursor": [
          0,
          4
        ],
        "language": "text"
      },
      {
        "key": "c",
        "description": "In LazyGit's Files panel with staged changes, enter and confirm a commit message.",
        "sequence": "cfix<Space>trainer<Enter>",
        "code": [
          "[ ] src/lessons.ts  <- selected",
          "[ ] src/App.tsx",
          "Commit message:"
        ],
        "cursor": [
          0,
          4
        ],
        "language": "text"
      },
      {
        "key": "p",
        "description": "p pulls, P pushes, S opens stash options, and q returns to Neovim.",
        "sequence": "p",
        "code": [
          "Files",
          "  M src/App.tsx  <- selected",
          "-- stash options open with S"
        ],
        "cursor": [
          1,
          4
        ],
        "language": "text"
      },
      {
        "key": "P",
        "description": "p pulls, P pushes, S opens stash options, and q returns to Neovim.",
        "sequence": "P",
        "code": [
          "Files",
          "  M src/App.tsx  <- selected",
          "-- stash options open with S"
        ],
        "cursor": [
          1,
          4
        ],
        "language": "text"
      },
      {
        "key": "S",
        "description": "p pulls, P pushes, S opens stash options, and q returns to Neovim.",
        "sequence": "S",
        "code": [
          "Files",
          "  M src/App.tsx  <- selected",
          "-- stash options open with S"
        ],
        "cursor": [
          1,
          4
        ],
        "language": "text"
      },
      {
        "key": "q",
        "description": "p pulls, P pushes, S opens stash options, and q returns to Neovim.",
        "sequence": "q",
        "code": [
          "Files",
          "  M src/App.tsx  <- selected",
          "-- stash options open with S"
        ],
        "cursor": [
          1,
          4
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
