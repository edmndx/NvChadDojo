import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Advanced Git Workflows",
    "id": "git-partial-hunk",
    "title": "Stage part of a hunk",
    "eyebrow": "Advanced Git Workflows",
    "summary": "Select only the intended lines in Visual mode, then use Space h s to stage or Space h r to reset that range.",
    "detail": "Select only the intended lines in Visual mode, then use Space h s to stage or Space h r to reset that range.",
    "keys": [
      "V",
      "Space hs",
      "Space hr"
    ],
    "task": "Select the first two changed lines and stage only that range.",
    "sequence": "Vj<Space>hs",
    "code": [
      "+ first change",
      "+ second change",
      "+ unrelated change"
    ],
    "tip": "These Space h mappings and ih are suggested custom mappings, not NVChad defaults. Configure Gitsigns on_attach before using them.",
    "cursor": [
      0,
      0
    ],
    "reviewItems": [
      {
        "key": "V",
        "description": "Select only the intended lines in Visual mode, then use Space h s to stage or Space h r to reset that range.",
        "sequence": "V"
      },
      {
        "key": "Space hs",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Select only the intended lines in Visual mode, then use Space h s to stage or Space h r to reset that range.",
        "sequence": "<Space>hs"
      },
      {
        "key": "Space hr",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Select only the intended lines in Visual mode, then use Space h s to stage or Space h r to reset that range.",
        "sequence": "<Space>hr"
      }
    ],
    "language": "text"
  },
  {
    "group": "Advanced Git Workflows",
    "id": "git-staged-diffs",
    "title": "Compare staged and unstaged work",
    "eyebrow": "Advanced Git Workflows",
    "summary": "Space h d compares the working tree with the index; suggested Space h D compares the buffer against HEAD.",
    "detail": "Space h d compares the working tree with the index; suggested Space h D compares the buffer against HEAD.",
    "keys": [
      "Space hd",
      "Space hD"
    ],
    "task": "Compare the current buffer against HEAD.",
    "sequence": "<Space>hD",
    "code": [
      "HEAD | index | working tree",
      "- committed value",
      "+ current value"
    ],
    "tip": "These Space h mappings and ih are suggested custom mappings, not NVChad defaults. Configure Gitsigns on_attach before using them.",
    "reviewItems": [
      {
        "key": "Space hd",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Space h d compares the working tree with the index; suggested Space h D compares the buffer against HEAD.",
        "sequence": "<Space>hd"
      },
      {
        "key": "Space hD",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Space h d compares the working tree with the index; suggested Space h D compares the buffer against HEAD.",
        "sequence": "<Space>hD"
      }
    ],
    "cursor": [
      2,
      2
    ],
    "language": "text"
  },
  {
    "group": "Advanced Git Workflows",
    "id": "git-undo-stage",
    "title": "Unstage the current hunk",
    "eyebrow": "Advanced Git Workflows",
    "summary": "Map Space h u to Gitsigns stage_hunk and invoke it on a staged sign to unstage that current hunk without discarding working-tree edits.",
    "detail": "Gitsigns deprecates undo_stage_hunk. The current stage_hunk action toggles a staged hunk back to unstaged; it acts on the hunk under the cursor, not a global history of stage operations.",
    "keys": [
      "Space hu",
      ":Gitsigns stage_hunk"
    ],
    "task": "Unstage the current staged hunk while keeping its working-tree edit.",
    "sequence": "<Space>hu",
    "code": [
      "+ staged change",
      "  unchanged context",
      "-- working tree stays edited"
    ],
    "tip": "These Space h mappings and ih are suggested custom mappings, not NVChad defaults. Configure Gitsigns on_attach before using them.",
    "reviewItems": [
      {
        "key": "Space hu",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Map Space h u to Gitsigns stage_hunk and invoke it on a staged sign to unstage that current hunk without discarding working-tree edits.",
        "sequence": "<Space>hu"
      },
      {
        "key": ":Gitsigns stage_hunk",
        "description": "Map Space h u to Gitsigns stage_hunk and invoke it on a staged sign to unstage that current hunk without discarding working-tree edits.",
        "sequence": ":Gitsigns stage_hunk<Enter>"
      }
    ],
    "cursor": [
      0,
      2
    ],
    "language": "text"
  },
  {
    "group": "Advanced Git Workflows",
    "id": "lazygit-conflicts",
    "title": "Resolve merge conflicts in LazyGit",
    "eyebrow": "Advanced Git Workflows",
    "summary": "M opens conflict options; h/l changes conflict, j/k changes hunk, Space picks one side, b picks both, and z undoes a resolution.",
    "detail": "First open a conflicted file from the Files panel. M opens conflict options, not the conflict editor itself. The b example starts inside that editor.",
    "keys": [
      "M",
      "h",
      "l",
      "j",
      "k",
      "Space",
      "b",
      "z"
    ],
    "task": "In the merge-conflict editor, pick both sides of the selected conflict.",
    "sequence": "b",
    "code": [
      "<<<<<<< ours",
      "shared change",
      ">>>>>>> theirs"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "M",
        "description": "In the Files panel, open conflict options; enter a conflicted file separately to resolve it.",
        "sequence": "M"
      },
      {
        "key": "h",
        "description": "Inside the conflict editor, move to the previous conflict.",
        "sequence": "h"
      },
      {
        "key": "l",
        "description": "Inside the conflict editor, move to the next conflict.",
        "sequence": "l"
      },
      {
        "key": "j",
        "description": "Inside the conflict editor, select the next side/hunk.",
        "sequence": "j"
      },
      {
        "key": "k",
        "description": "Inside the conflict editor, select the previous side/hunk.",
        "sequence": "k"
      },
      {
        "key": "Space",
        "description": "Inside the conflict editor, accept the selected side.",
        "sequence": "<Space>"
      },
      {
        "key": "b",
        "description": "Inside the conflict editor, accept both sides of the selected conflict.",
        "sequence": "b"
      },
      {
        "key": "z",
        "description": "Inside the conflict editor, undo the last conflict resolution.",
        "sequence": "z"
      }
    ],
    "cursor": [
      1,
      0
    ],
    "language": "text"
  },
  {
    "group": "Advanced Git Workflows",
    "id": "lazygit-amend",
    "title": "Amend a commit safely",
    "eyebrow": "Advanced Git Workflows",
    "summary": "Stage the intended changes, focus the target commit, and press A; amending a non-HEAD commit rewrites later history.",
    "detail": "Stage the intended changes, focus the target commit, and press A; amending a non-HEAD commit rewrites later history.",
    "keys": [
      "A"
    ],
    "task": "Open the amend action for the selected commit.",
    "sequence": "A",
    "code": [
      "Commits",
      "  abc123 latest commit",
      "  def456 target commit <- selected"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "A",
        "description": "Stage the intended changes, focus the target commit, and press A; amending a non-HEAD commit rewrites later history.",
        "sequence": "A"
      }
    ],
    "cursor": [
      2,
      2
    ],
    "language": "text"
  },
  {
    "group": "Advanced Git Workflows",
    "id": "lazygit-undo-redo",
    "title": "Undo or redo repository actions",
    "eyebrow": "Advanced Git Workflows",
    "summary": "z uses the reflog to undo commit or branch actions and Z redoes them; it cannot recover discarded working-tree edits.",
    "detail": "z requests undo and Z requests redo through the reflog. Read and confirm each dialog separately; these operations do not recover discarded working-tree edits.",
    "keys": [
      "z",
      "Z"
    ],
    "task": "Open the confirmation for undoing the latest repository action.",
    "sequence": "z",
    "code": [
      "Command log",
      "  undo: commit --amend",
      "  redo available"
    ],
    "tip": "Keep your hands on the home row.",
    "reviewItems": [
      {
        "key": "z",
        "description": "z uses the reflog to undo commit or branch actions and Z redoes them; it cannot recover discarded working-tree edits.",
        "sequence": "z"
      },
      {
        "key": "Z",
        "description": "z uses the reflog to undo commit or branch actions and Z redoes them; it cannot recover discarded working-tree edits.",
        "sequence": "Z"
      }
    ],
    "cursor": [
      1,
      2
    ],
    "language": "text"
  },
  {
    "group": "Advanced Git Workflows",
    "id": "advanced-git-workflows-review",
    "title": "Advanced Git Workflows Review",
    "eyebrow": "Advanced Git Workflows",
    "summary": "Review every command introduced in Advanced Git Workflows before moving to the next category.",
    "detail": "Review every command introduced in Advanced Git Workflows before moving to the next category.",
    "keys": [
      "V",
      "Space hs",
      "Space hr",
      "Space hd",
      "Space hD",
      "Space hu",
      ":Gitsigns stage_hunk",
      "M",
      "h",
      "l",
      "j",
      "k",
      "Space",
      "b",
      "z",
      "A",
      "Z"
    ],
    "task": "",
    "sequence": "vjj<Space>hs",
    "code": [
      "+ first change",
      "+ second change",
      "+ unrelated change"
    ],
    "tip": "Return to any command in Advanced Git Workflows that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": "V",
        "description": "Select only the intended lines in Visual mode, then use Space h s to stage or Space h r to reset that range.",
        "sequence": "V",
        "code": [
          "+ first change",
          "+ second change",
          "+ unrelated change"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "Space hs",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Select only the intended lines in Visual mode, then use Space h s to stage or Space h r to reset that range.",
        "sequence": "<Space>hs",
        "code": [
          "+ first change",
          "+ second change",
          "+ unrelated change"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "Space hr",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Select only the intended lines in Visual mode, then use Space h s to stage or Space h r to reset that range.",
        "sequence": "<Space>hr",
        "code": [
          "+ first change",
          "+ second change",
          "+ unrelated change"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "Space hd",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Space h d compares the working tree with the index; suggested Space h D compares the buffer against HEAD.",
        "sequence": "<Space>hd",
        "code": [
          "HEAD | index | working tree",
          "- committed value",
          "+ current value"
        ],
        "cursor": [
          2,
          2
        ],
        "language": "text"
      },
      {
        "key": "Space hD",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Space h d compares the working tree with the index; suggested Space h D compares the buffer against HEAD.",
        "sequence": "<Space>hD",
        "code": [
          "HEAD | index | working tree",
          "- committed value",
          "+ current value"
        ],
        "cursor": [
          2,
          2
        ],
        "language": "text"
      },
      {
        "key": "Space hu",
        "description": "With the suggested Gitsigns mapping installed and a Git hunk available: Map Space h u to Gitsigns stage_hunk and invoke it on a staged sign to unstage that current hunk without discarding working-tree edits.",
        "sequence": "<Space>hu",
        "code": [
          "+ staged change",
          "  unchanged context",
          "-- working tree stays edited"
        ],
        "cursor": [
          0,
          2
        ],
        "language": "text"
      },
      {
        "key": ":Gitsigns stage_hunk",
        "description": "Map Space h u to Gitsigns stage_hunk and invoke it on a staged sign to unstage that current hunk without discarding working-tree edits.",
        "sequence": ":Gitsigns stage_hunk<Enter>",
        "code": [
          "+ first change",
          "+ second change",
          "+ unrelated change"
        ],
        "cursor": [
          0,
          0
        ],
        "language": "text"
      },
      {
        "key": "M",
        "description": "In the Files panel, open conflict options; enter a conflicted file separately to resolve it.",
        "sequence": "M",
        "code": [
          "<<<<<<< ours",
          "shared change",
          ">>>>>>> theirs"
        ],
        "cursor": [
          1,
          0
        ],
        "language": "text"
      },
      {
        "key": "h",
        "description": "Inside the conflict editor, move to the previous conflict.",
        "sequence": "h",
        "code": [
          "<<<<<<< ours",
          "shared change",
          ">>>>>>> theirs"
        ],
        "cursor": [
          1,
          0
        ],
        "language": "text"
      },
      {
        "key": "l",
        "description": "Inside the conflict editor, move to the next conflict.",
        "sequence": "l",
        "code": [
          "<<<<<<< ours",
          "shared change",
          ">>>>>>> theirs"
        ],
        "cursor": [
          1,
          0
        ],
        "language": "text"
      },
      {
        "key": "j",
        "description": "Inside the conflict editor, select the next side/hunk.",
        "sequence": "j",
        "code": [
          "<<<<<<< ours",
          "shared change",
          ">>>>>>> theirs"
        ],
        "cursor": [
          1,
          0
        ],
        "language": "text"
      },
      {
        "key": "k",
        "description": "Inside the conflict editor, select the previous side/hunk.",
        "sequence": "k",
        "code": [
          "<<<<<<< ours",
          "shared change",
          ">>>>>>> theirs"
        ],
        "cursor": [
          1,
          0
        ],
        "language": "text"
      },
      {
        "key": "Space",
        "description": "Inside the conflict editor, accept the selected side.",
        "sequence": "<Space>",
        "code": [
          "<<<<<<< ours",
          "shared change",
          ">>>>>>> theirs"
        ],
        "cursor": [
          1,
          0
        ],
        "language": "text"
      },
      {
        "key": "b",
        "description": "Inside the conflict editor, accept both sides of the selected conflict.",
        "sequence": "b",
        "code": [
          "<<<<<<< ours",
          "shared change",
          ">>>>>>> theirs"
        ],
        "cursor": [
          1,
          0
        ],
        "language": "text"
      },
      {
        "key": "z",
        "description": "Inside the conflict editor, undo the last conflict resolution.",
        "sequence": "z",
        "code": [
          "<<<<<<< ours",
          "shared change",
          ">>>>>>> theirs"
        ],
        "cursor": [
          1,
          0
        ],
        "language": "text"
      },
      {
        "key": "A",
        "description": "Stage the intended changes, focus the target commit, and press A; amending a non-HEAD commit rewrites later history.",
        "sequence": "A",
        "code": [
          "Commits",
          "  abc123 latest commit",
          "  def456 target commit <- selected"
        ],
        "cursor": [
          2,
          2
        ],
        "language": "text"
      },
      {
        "key": "Z",
        "description": "z uses the reflog to undo commit or branch actions and Z redoes them; it cannot recover discarded working-tree edits.",
        "sequence": "Z",
        "code": [
          "Command log",
          "  undo: commit --amend",
          "  redo available"
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
