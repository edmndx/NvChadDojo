export type RuntimeSurface = "completion" | "telescope" | "trouble" | "lazygit" | "terminal";

export type LessonRuntimeProfile = { outcomeValidation: boolean; visual: boolean; surface?: RuntimeSurface; cursor?: [number, number] };

export const lessonRuntimeProfiles = {
  "parentheses-objects": {
    "outcomeValidation": true,
    "visual": false
  },
  "square-bracket-objects": {
    "outcomeValidation": true,
    "visual": false
  },
  "tag-objects": {
    "outcomeValidation": true,
    "visual": false
  },
  "sentence-objects": {
    "outcomeValidation": true,
    "visual": false
  },
  "additional-text-objects-review": {
    "outcomeValidation": true,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "git-partial-hunk": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "git-staged-diffs": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "git-undo-stage": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "lazygit-conflicts": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "lazygit",
    "cursor": [
      1,
      2
    ]
  },
  "lazygit-amend": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "lazygit",
    "cursor": [
      1,
      2
    ]
  },
  "lazygit-undo-redo": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "lazygit",
    "cursor": [
      1,
      2
    ]
  },
  "advanced-git-workflows-review": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "relative-line-jumps": {
    "outcomeValidation": true,
    "visual": false
  },
  "absolute-line-jumps": {
    "outcomeValidation": true,
    "visual": false
  },
  "paragraph-jumps": {
    "outcomeValidation": true,
    "visual": false
  },
  "window-scrolls": {
    "outcomeValidation": true,
    "visual": false
  },
  "advanced-vertical-movement-review": {
    "outcomeValidation": true,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "block-insert": {
    "outcomeValidation": false,
    "visual": true
  },
  "block-append": {
    "outcomeValidation": false,
    "visual": true
  },
  "block-replace": {
    "outcomeValidation": false,
    "visual": true
  },
  "advanced-visual-block-review": {
    "outcomeValidation": false,
    "visual": true,
    "cursor": [
      1,
      2
    ]
  },
  "intro-operators": {
    "outcomeValidation": true,
    "visual": false
  },
  "delete-words": {
    "outcomeValidation": true,
    "visual": false
  },
  "change-words": {
    "outcomeValidation": true,
    "visual": false
  },
  "delete-lines": {
    "outcomeValidation": true,
    "visual": false
  },
  "delete-multiple-lines": {
    "outcomeValidation": true,
    "visual": false
  },
  "copy-paste-lines": {
    "outcomeValidation": true,
    "visual": false
  },
  "basic-operators-review": {
    "outcomeValidation": true,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "basic-movement": {
    "outcomeValidation": true,
    "visual": false
  },
  "moving-words": {
    "outcomeValidation": true,
    "visual": false
  },
  "insert-mode": {
    "outcomeValidation": true,
    "visual": false
  },
  "basic-vim-review": {
    "outcomeValidation": true,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "lsp-definition": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "lsp-hover": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "format": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "mason": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "coding-intelligence-review": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "discover-help": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "discover-maps": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "discover-map-source": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "discover-whichkey": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "discover-nvcheatsheet": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "discover-plugin-help": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "discover-provenance": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "command-discovery-review": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "essential-command-reference": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      0,
      0
    ]
  },
  "completion-navigate": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "completion",
    "cursor": [
      1,
      2
    ]
  },
  "completion-docs": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "completion",
    "cursor": [
      1,
      2
    ]
  },
  "completion-open-close": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "completion",
    "cursor": [
      1,
      2
    ]
  },
  "completion-confirm": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "completion",
    "cursor": [
      1,
      2
    ]
  },
  "snippet-stops": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "completion",
    "cursor": [
      1,
      2
    ]
  },
  "tab-context": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "completion",
    "cursor": [
      1,
      2
    ]
  },
  "completion-snippets-review": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "completion",
    "cursor": [
      1,
      2
    ]
  },
  "custom-maps": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "plugins": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "chadrc": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "lsp-setup": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "troubleshooting": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "finish": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "configure-nvchad-review": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "diagnostics": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "diagnostic-details": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "diagnostic-location-list": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "quickfix-list": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "location-list": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "diagnostic-code-action": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "trouble-setup": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "trouble",
    "cursor": [
      1,
      2
    ]
  },
  "trouble-diagnostics": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "trouble",
    "cursor": [
      1,
      2
    ]
  },
  "trouble-lists": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "trouble",
    "cursor": [
      1,
      2
    ]
  },
  "trouble-navigation": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "trouble",
    "cursor": [
      1,
      2
    ]
  },
  "diagnostics-quickfix-review": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "undo-change": {
    "outcomeValidation": true,
    "visual": false
  },
  "redo-change": {
    "outcomeValidation": true,
    "visual": false
  },
  "editing-safety-review": {
    "outcomeValidation": true,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "moving-big-words": {
    "outcomeValidation": true,
    "visual": false
  },
  "moving-line-ends": {
    "outcomeValidation": true,
    "visual": false
  },
  "find-character": {
    "outcomeValidation": true,
    "visual": false
  },
  "till-character": {
    "outcomeValidation": true,
    "visual": false
  },
  "essential-motions-review": {
    "outcomeValidation": true,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "save-file": {
    "outcomeValidation": true,
    "visual": false
  },
  "save-and-exit": {
    "outcomeValidation": true,
    "visual": false
  },
  "files-command-line-review": {
    "outcomeValidation": true,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "git-plugin-setup": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "gitsigns-navigate": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "gitsigns-preview": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "gitsigns-hunk-actions": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "gitsigns-buffer-actions": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "gitsigns-inspect": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "lazygit-launch": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "lazygit",
    "cursor": [
      1,
      2
    ]
  },
  "lazygit-stage-commit": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "lazygit",
    "cursor": [
      1,
      2
    ]
  },
  "lazygit-sync-stash": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "lazygit",
    "cursor": [
      1,
      2
    ]
  },
  "git-workflows-review": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "indent-lines": {
    "outcomeValidation": true,
    "visual": false
  },
  "reindent-file": {
    "outcomeValidation": true,
    "visual": false
  },
  "join-lines": {
    "outcomeValidation": true,
    "visual": false
  },
  "indent-join-review": {
    "outcomeValidation": true,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "insert-line-ends": {
    "outcomeValidation": true,
    "visual": false
  },
  "opening-lines": {
    "outcomeValidation": true,
    "visual": false
  },
  "small-edits": {
    "outcomeValidation": true,
    "visual": false
  },
  "insert-like-a-pro-review": {
    "outcomeValidation": true,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "jump-list": {
    "outcomeValidation": true,
    "visual": false
  },
  "change-list": {
    "outcomeValidation": true,
    "visual": false
  },
  "matching-pair": {
    "outcomeValidation": true,
    "visual": false
  },
  "last-edit": {
    "outcomeValidation": true,
    "visual": false
  },
  "set-mark": {
    "outcomeValidation": true,
    "visual": false
  },
  "return-mark": {
    "outcomeValidation": true,
    "visual": false
  },
  "jump-change-history-review": {
    "outcomeValidation": true,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "refactor-understand-symbol": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "refactor-rename-fix": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "refactor-verify": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "lsp-refactoring-review": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "record-macro": {
    "outcomeValidation": true,
    "visual": false
  },
  "replay-macro": {
    "outcomeValidation": true,
    "visual": false
  },
  "repeat-macro": {
    "outcomeValidation": true,
    "visual": false
  },
  "macro-with-count": {
    "outcomeValidation": true,
    "visual": false
  },
  "macros-review": {
    "outcomeValidation": true,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "capstone-find-open": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "capstone-refactor": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "capstone-review-commit": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "themes": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "cheatsheet": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "nvchad-workflow-review": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "tree-create": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "tree-rename": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "tree-copy-move": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "tree-delete": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "tree-edit-workflow": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      0
    ]
  },
  "nvimtree-file-operations-review": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "file-tree": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "tree-open-nodes": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "tree-open-layout": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "tree-find-help": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "nvimtree-navigation-review": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "rename-symbol": {
    "outcomeValidation": false,
    "visual": false
  },
  "find-references": {
    "outcomeValidation": false,
    "visual": false
  },
  "code-actions": {
    "outcomeValidation": false,
    "visual": false
  },
  "signature-help": {
    "outcomeValidation": false,
    "visual": false
  },
  "practical-lsp-actions-review": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "yank-register": {
    "outcomeValidation": true,
    "visual": false
  },
  "named-registers": {
    "outcomeValidation": true,
    "visual": false
  },
  "black-hole-register": {
    "outcomeValidation": true,
    "visual": false
  },
  "inspect-registers": {
    "outcomeValidation": true,
    "visual": false
  },
  "registers-review": {
    "outcomeValidation": true,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "repeat-last-change": {
    "outcomeValidation": true,
    "visual": false
  },
  "repeat-with-count": {
    "outcomeValidation": true,
    "visual": false
  },
  "repeat-ex-command": {
    "outcomeValidation": true,
    "visual": false
  },
  "repeat-workflow-review": {
    "outcomeValidation": true,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "search-forward-back": {
    "outcomeValidation": true,
    "visual": false
  },
  "repeat-search": {
    "outcomeValidation": true,
    "visual": false
  },
  "quick-word-search": {
    "outcomeValidation": true,
    "visual": false
  },
  "search-review": {
    "outcomeValidation": true,
    "visual": false
  },
  "working-directory": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "scoped-directories": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "save-session": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "argument-list": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "alternate-file": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "resume-project": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "sessions-project-navigation-review": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "substitute-once": {
    "outcomeValidation": true,
    "visual": false
  },
  "substitute-file": {
    "outcomeValidation": true,
    "visual": false
  },
  "confirm-substitution": {
    "outcomeValidation": true,
    "visual": false
  },
  "reuse-search": {
    "outcomeValidation": true,
    "visual": false
  },
  "substitution-review": {
    "outcomeValidation": true,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "find-files": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "telescope",
    "cursor": [
      1,
      2
    ]
  },
  "live-grep": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "telescope",
    "cursor": [
      1,
      2
    ]
  },
  "telescope-hidden-files": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "telescope",
    "cursor": [
      1,
      2
    ]
  },
  "telescope-buffers": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "telescope",
    "cursor": [
      1,
      2
    ]
  },
  "telescope-history-help": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "telescope",
    "cursor": [
      1,
      2
    ]
  },
  "telescope-git-buffer": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "telescope",
    "cursor": [
      1,
      2
    ]
  },
  "telescope-picker-navigation": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "telescope",
    "cursor": [
      1,
      2
    ]
  },
  "telescope-picker-layouts": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "telescope",
    "cursor": [
      1,
      2
    ]
  },
  "telescope-multi-select": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "telescope",
    "cursor": [
      1,
      2
    ]
  },
  "telescope-workflows-review": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "telescope",
    "cursor": [
      1,
      2
    ]
  },
  "new-terminal-splits": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "toggle-terminal-splits": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "terminal": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "terminal-mode": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "terminal",
    "cursor": [
      1,
      2
    ]
  },
  "recover-terminals": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "end-terminal": {
    "outcomeValidation": false,
    "visual": false,
    "surface": "terminal",
    "cursor": [
      1,
      2
    ]
  },
  "terminal-workflow-review": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "intro-text-objects": {
    "outcomeValidation": true,
    "visual": false
  },
  "delete-inside-brackets": {
    "outcomeValidation": true,
    "visual": false
  },
  "delete-around-brackets": {
    "outcomeValidation": true,
    "visual": false
  },
  "change-inside-brackets": {
    "outcomeValidation": true,
    "visual": false
  },
  "change-around-brackets": {
    "outcomeValidation": true,
    "visual": false
  },
  "brackets-review": {
    "outcomeValidation": true,
    "visual": false
  },
  "text-objects-mega-review": {
    "outcomeValidation": true,
    "visual": false
  },
  "delete-inside-paragraph": {
    "outcomeValidation": true,
    "visual": false
  },
  "delete-around-paragraph": {
    "outcomeValidation": true,
    "visual": false
  },
  "change-inside-paragraph": {
    "outcomeValidation": true,
    "visual": false
  },
  "paragraphs-review": {
    "outcomeValidation": true,
    "visual": false
  },
  "delete-inside-quotes": {
    "outcomeValidation": true,
    "visual": false
  },
  "delete-around-quotes": {
    "outcomeValidation": true,
    "visual": false
  },
  "change-inside-quotes": {
    "outcomeValidation": true,
    "visual": false
  },
  "change-around-quotes": {
    "outcomeValidation": true,
    "visual": false
  },
  "quotes-review": {
    "outcomeValidation": true,
    "visual": false
  },
  "delete-inside-word": {
    "outcomeValidation": true,
    "visual": false
  },
  "delete-around-word": {
    "outcomeValidation": true,
    "visual": false
  },
  "change-inside-word": {
    "outcomeValidation": true,
    "visual": false
  },
  "words-review": {
    "outcomeValidation": true,
    "visual": false
  },
  "intro-modes": {
    "outcomeValidation": true,
    "visual": false
  },
  "intro-visual-mode": {
    "outcomeValidation": true,
    "visual": false
  },
  "command-line-mode": {
    "outcomeValidation": true,
    "visual": false
  },
  "replace-mode": {
    "outcomeValidation": true,
    "visual": false
  },
  "vim-modes-review": {
    "outcomeValidation": true,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "visual-mode-operators": {
    "outcomeValidation": true,
    "visual": true
  },
  "switch-selection-ends": {
    "outcomeValidation": true,
    "visual": true
  },
  "visual-line-mode": {
    "outcomeValidation": true,
    "visual": true
  },
  "switch-visual-line-ends": {
    "outcomeValidation": true,
    "visual": true
  },
  "visual-line-operators": {
    "outcomeValidation": true,
    "visual": true
  },
  "visual-editing-review": {
    "outcomeValidation": true,
    "visual": true,
    "cursor": [
      1,
      2
    ]
  },
  "workspace-model": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "open-splits": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "splits": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "resize-splits": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "close-splits": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "buffers": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      0
    ]
  },
  "tab-pages": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  },
  "windows-buffers-tabs-review": {
    "outcomeValidation": false,
    "visual": false,
    "cursor": [
      1,
      2
    ]
  }
} satisfies Record<string, LessonRuntimeProfile>;
