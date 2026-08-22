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
    "tip": "Keep your hands on the home row."
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
    "tip": "Keep your hands on the home row."
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
    "tip": "Keep your hands on the home row."
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
    "tip": "Keep your hands on the home row."
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
    "tip": "Keep your hands on the home row."
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
      "const ready = true"
    ],
    "tip": "Keep your hands on the home row."
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
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Git Workflows",
    "id": "lazygit-stage-commit",
    "title": "Stage and commit in LazyGit",
    "eyebrow": "Git Workflows",
    "summary": "Space toggles the selected file, a stages all files, and c opens the commit prompt.",
    "detail": "Space toggles the selected file, a stages all files, and c opens the commit prompt.",
    "keys": [
      "Space",
      "a",
      "c"
    ],
    "task": "Stage the selected file and open the commit prompt.",
    "sequence": "<Space>c",
    "code": [
      "[x] src/lessons.ts",
      "[ ] src/App.tsx",
      "Commit message:"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Git Workflows",
    "id": "lazygit-sync-stash",
    "title": "Sync and stash in LazyGit",
    "eyebrow": "Git Workflows",
    "summary": "p pulls, P pushes, S opens stash options, and q returns to Neovim.",
    "detail": "p pulls, P pushes, S opens stash options, and q returns to Neovim.",
    "keys": [
      "p",
      "P",
      "S",
      "q"
    ],
    "task": "Open stash options, then return to Neovim.",
    "sequence": "Sq",
    "code": [
      "Stash options",
      "  stash all changes",
      "  stash staged changes"
    ],
    "tip": "Keep your hands on the home row."
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
        "sequence": ":Lazy<Enter>"
      },
      {
        "key": "]c",
        "description": "]c and [c move to the next and previous Git hunk in the current buffer.",
        "sequence": "]c[c"
      },
      {
        "key": "[c",
        "description": "]c and [c move to the next and previous Git hunk in the current buffer.",
        "sequence": "]c[c"
      },
      {
        "key": "Space hp",
        "description": "Space h p previews the current hunk; ih selects the hunk in operator-pending or Visual mode.",
        "sequence": "<Space>hp"
      },
      {
        "key": "ih",
        "description": "Space h p previews the current hunk; ih selects the hunk in operator-pending or Visual mode.",
        "sequence": "<Space>hp"
      },
      {
        "key": "Space hs",
        "description": "Space h s stages the current hunk and Space h r restores its working-tree version.",
        "sequence": "<Space>hs"
      },
      {
        "key": "Space hr",
        "description": "Space h s stages the current hunk and Space h r restores its working-tree version.",
        "sequence": "<Space>hs"
      },
      {
        "key": "Space hS",
        "description": "Space h S stages all hunks in the buffer and Space h R resets all of them.",
        "sequence": "<Space>hS"
      },
      {
        "key": "Space hR",
        "description": "Space h S stages all hunks in the buffer and Space h R resets all of them.",
        "sequence": "<Space>hS"
      },
      {
        "key": "Space hb",
        "description": "Space h b shows blame for the current line and Space h d diffs the current buffer.",
        "sequence": "<Space>hb"
      },
      {
        "key": "Space hd",
        "description": "Space h b shows blame for the current line and Space h d diffs the current buffer.",
        "sequence": "<Space>hb"
      },
      {
        "key": ":LazyGit",
        "description": ":LazyGit opens the optional repository-wide Git interface.",
        "sequence": ":LazyGit<Enter>"
      },
      {
        "key": "Space",
        "description": "Space toggles the selected file, a stages all files, and c opens the commit prompt.",
        "sequence": "<Space>c"
      },
      {
        "key": "a",
        "description": "Space toggles the selected file, a stages all files, and c opens the commit prompt.",
        "sequence": "<Space>c"
      },
      {
        "key": "c",
        "description": "Space toggles the selected file, a stages all files, and c opens the commit prompt.",
        "sequence": "<Space>c"
      },
      {
        "key": "p",
        "description": "p pulls, P pushes, S opens stash options, and q returns to Neovim.",
        "sequence": "Sq"
      },
      {
        "key": "P",
        "description": "p pulls, P pushes, S opens stash options, and q returns to Neovim.",
        "sequence": "Sq"
      },
      {
        "key": "S",
        "description": "p pulls, P pushes, S opens stash options, and q returns to Neovim.",
        "sequence": "Sq"
      },
      {
        "key": "q",
        "description": "p pulls, P pushes, S opens stash options, and q returns to Neovim.",
        "sequence": "Sq"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
