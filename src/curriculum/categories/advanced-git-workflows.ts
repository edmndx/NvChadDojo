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
      "v",
      "Space hs",
      "Space hr"
    ],
    "task": "Select changed lines and stage only that range.",
    "sequence": "vjj<Space>hs",
    "code": [
      "+ first change",
      "+ second change",
      "+ unrelated change"
    ],
    "tip": "Keep your hands on the home row."
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
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Advanced Git Workflows",
    "id": "git-undo-stage",
    "title": "Undo the latest hunk stage",
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
      "staged -> unstaged",
      "working tree stays edited",
      "-- safe correction"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Advanced Git Workflows",
    "id": "lazygit-conflicts",
    "title": "Resolve merge conflicts in LazyGit",
    "eyebrow": "Advanced Git Workflows",
    "summary": "M opens conflict options; h/l changes conflict, j/k changes hunk, Space picks one side, b picks both, and z undoes a resolution.",
    "detail": "M opens conflict options; h/l changes conflict, j/k changes hunk, Space picks one side, b picks both, and z undoes a resolution.",
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
    "task": "Open conflict options, pick both hunks, then undo that resolution.",
    "sequence": "Mbz",
    "code": [
      "<<<<<<< ours",
      "shared change",
      ">>>>>>> theirs"
    ],
    "tip": "Keep your hands on the home row."
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
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Advanced Git Workflows",
    "id": "lazygit-undo-redo",
    "title": "Undo or redo repository actions",
    "eyebrow": "Advanced Git Workflows",
    "summary": "z uses the reflog to undo commit or branch actions and Z redoes them; it cannot recover discarded working-tree edits.",
    "detail": "z uses the reflog to undo commit or branch actions and Z redoes them; it cannot recover discarded working-tree edits.",
    "keys": [
      "z",
      "Z"
    ],
    "task": "Undo the latest repository action, then redo it.",
    "sequence": "zZ",
    "code": [
      "Command log",
      "  undo: commit --amend",
      "  redo available"
    ],
    "tip": "Keep your hands on the home row."
  },
  {
    "group": "Advanced Git Workflows",
    "id": "advanced-git-workflows-review",
    "title": "Advanced Git Workflows Review",
    "eyebrow": "Advanced Git Workflows",
    "summary": "Review every command introduced in Advanced Git Workflows before moving to the next category.",
    "detail": "Review every command introduced in Advanced Git Workflows before moving to the next category.",
    "keys": [
      "v",
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
        "key": "v",
        "description": "Select only the intended lines in Visual mode, then use Space h s to stage or Space h r to reset that range.",
        "sequence": "vjj<Space>hs"
      },
      {
        "key": "Space hs",
        "description": "Select only the intended lines in Visual mode, then use Space h s to stage or Space h r to reset that range.",
        "sequence": "vjj<Space>hs"
      },
      {
        "key": "Space hr",
        "description": "Select only the intended lines in Visual mode, then use Space h s to stage or Space h r to reset that range.",
        "sequence": "vjj<Space>hs"
      },
      {
        "key": "Space hd",
        "description": "Space h d compares the working tree with the index; suggested Space h D compares the buffer against HEAD.",
        "sequence": "<Space>hD"
      },
      {
        "key": "Space hD",
        "description": "Space h d compares the working tree with the index; suggested Space h D compares the buffer against HEAD.",
        "sequence": "<Space>hD"
      },
      {
        "key": "Space hu",
        "description": "Map Space h u to stage_hunk; on a staged sign it unstages the current hunk without discarding the working-tree edit.",
        "sequence": "<Space>hu"
      },
      {
        "key": ":Gitsigns stage_hunk",
        "description": "Gitsigns deprecates undo_stage_hunk; use stage_hunk on a staged sign to unstage that current hunk.",
        "sequence": "<Space>hu"
      },
      {
        "key": "M",
        "description": "M opens conflict options; h/l changes conflict, j/k changes hunk, Space picks one side, b picks both, and z undoes a resolution.",
        "sequence": "Mbz"
      },
      {
        "key": "h",
        "description": "M opens conflict options; h/l changes conflict, j/k changes hunk, Space picks one side, b picks both, and z undoes a resolution.",
        "sequence": "Mbz"
      },
      {
        "key": "l",
        "description": "M opens conflict options; h/l changes conflict, j/k changes hunk, Space picks one side, b picks both, and z undoes a resolution.",
        "sequence": "Mbz"
      },
      {
        "key": "j",
        "description": "M opens conflict options; h/l changes conflict, j/k changes hunk, Space picks one side, b picks both, and z undoes a resolution.",
        "sequence": "Mbz"
      },
      {
        "key": "k",
        "description": "M opens conflict options; h/l changes conflict, j/k changes hunk, Space picks one side, b picks both, and z undoes a resolution.",
        "sequence": "Mbz"
      },
      {
        "key": "Space",
        "description": "M opens conflict options; h/l changes conflict, j/k changes hunk, Space picks one side, b picks both, and z undoes a resolution.",
        "sequence": "Mbz"
      },
      {
        "key": "b",
        "description": "M opens conflict options; h/l changes conflict, j/k changes hunk, Space picks one side, b picks both, and z undoes a resolution.",
        "sequence": "Mbz"
      },
      {
        "key": "z",
        "description": "M opens conflict options; h/l changes conflict, j/k changes hunk, Space picks one side, b picks both, and z undoes a resolution.",
        "sequence": "Mbz"
      },
      {
        "key": "A",
        "description": "Stage the intended changes, focus the target commit, and press A; amending a non-HEAD commit rewrites later history.",
        "sequence": "A"
      },
      {
        "key": "Z",
        "description": "z uses the reflog to undo commit or branch actions and Z redoes them; it cannot recover discarded working-tree edits.",
        "sequence": "zZ"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
