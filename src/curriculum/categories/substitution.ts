import type { Lesson } from "../schema";

const lessons = [
  {
    "group": "Substitution",
    "id": "substitute-once",
    "title": "Replace Once",
    "eyebrow": "Substitution",
    "summary": ":s replaces the first matching occurrence on the current line.",
    "detail": ":s replaces the first matching occurrence on the current line.",
    "keys": [
      ":s",
      "Enter"
    ],
    "task": "Replace old with new on the current line.",
    "sequence": ":s/old/new<Enter>",
    "code": [
      "local old = config.old",
      "notify('old value')",
      "return old"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Replace old with new on the current line. · repetition 1 of 3",
        "code": [
          "local old = config.old",
          "notify('old value')",
          "return old"
        ]
      },
      {
        "goal": "Replace old with new on the current line. · repetition 2 of 3",
        "code": [
          "old_name = old_value",
          "old_label = old_name",
          "return old_label"
        ]
      },
      {
        "goal": "Replace old with new on the current line. · repetition 3 of 3",
        "code": [
          "theme = 'old'",
          "fallback = 'old'",
          "return theme"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Replace old with new on the current line.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with :s.",
        "Use only the keys introduced in Substitution.",
        "Compose the command from: :s, Enter."
      ],
      "success": "Replace Once produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Substitution",
    "id": "substitute-file",
    "title": "Replace Throughout a File",
    "eyebrow": "Substitution",
    "summary": ":%s with the g flag replaces every matching occurrence in the buffer.",
    "detail": ":%s with the g flag replaces every matching occurrence in the buffer.",
    "keys": [
      ":%s",
      "g"
    ],
    "task": "Replace every old value in the file.",
    "sequence": ":%s/old/new/g<Enter>",
    "code": [
      "local old = config.old",
      "notify('old value')",
      "return old"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Replace every old value in the file. · repetition 1 of 3",
        "code": [
          "local old = config.old",
          "notify('old value')",
          "return old"
        ]
      },
      {
        "goal": "Replace every old value in the file. · repetition 2 of 3",
        "code": [
          "old_name = old_value",
          "old_label = old_name",
          "return old_label"
        ]
      },
      {
        "goal": "Replace every old value in the file. · repetition 3 of 3",
        "code": [
          "theme = 'old'",
          "fallback = 'old'",
          "return theme"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Replace every old value in the file.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with :%s.",
        "Use only the keys introduced in Substitution.",
        "Compose the command from: :%s, g."
      ],
      "success": "Replace Throughout a File produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Substitution",
    "id": "confirm-substitution",
    "title": "Confirm Replacements",
    "eyebrow": "Substitution",
    "summary": "The c flag asks before each replacement so broad edits remain controlled.",
    "detail": "The c flag asks before each replacement so broad edits remain controlled.",
    "keys": [
      ":%s",
      "gc"
    ],
    "task": "Start a confirmed file-wide replacement.",
    "sequence": ":%s/old/new/gc<Enter>",
    "code": [
      "local old = config.old",
      "notify('old value')",
      "return old"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Start a confirmed file-wide replacement. · repetition 1 of 3",
        "code": [
          "local old = config.old",
          "notify('old value')",
          "return old"
        ]
      },
      {
        "goal": "Start a confirmed file-wide replacement. · repetition 2 of 3",
        "code": [
          "old_name = old_value",
          "old_label = old_name",
          "return old_label"
        ]
      },
      {
        "goal": "Start a confirmed file-wide replacement. · repetition 3 of 3",
        "code": [
          "theme = 'old'",
          "fallback = 'old'",
          "return theme"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Start a confirmed file-wide replacement.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with :%s.",
        "Use only the keys introduced in Substitution.",
        "Compose the command from: :%s, gc."
      ],
      "success": "Confirm Replacements produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Substitution",
    "id": "reuse-search",
    "title": "Reuse the Previous Search",
    "eyebrow": "Substitution",
    "summary": "An empty substitute pattern reuses the latest search pattern.",
    "detail": "An empty substitute pattern reuses the latest search pattern.",
    "keys": [
      ":%s//",
      "g"
    ],
    "task": "Replace every match from the previous search.",
    "sequence": ":%s//new/g<Enter>",
    "code": [
      "local old = config.old",
      "notify('old value')",
      "return old"
    ],
    "tip": "These are native Vim motions and work inside NVChad.",
    "drills": [
      {
        "goal": "Replace every match from the previous search. · repetition 1 of 3",
        "code": [
          "local old = config.old",
          "notify('old value')",
          "return old"
        ]
      },
      {
        "goal": "Replace every match from the previous search. · repetition 2 of 3",
        "code": [
          "old_name = old_value",
          "old_label = old_name",
          "return old_label"
        ]
      },
      {
        "goal": "Replace every match from the previous search. · repetition 3 of 3",
        "code": [
          "theme = 'old'",
          "fallback = 'old'",
          "return theme"
        ]
      }
    ],
    "commonMistake": "Make sure you are in Normal mode. If unsure, press Escape once and try the sequence again.",
    "challenge": {
      "instruction": "Replace every match from the previous search.",
      "cursor": [
        1,
        0
      ],
      "hints": [
        "Begin with :%s//.",
        "Use only the keys introduced in Substitution.",
        "Compose the command from: :%s//, g."
      ],
      "success": "Reuse the Previous Search produced the requested buffer and cursor state."
    }
  },
  {
    "group": "Substitution",
    "id": "substitution-review",
    "title": "Substitution Review",
    "eyebrow": "Substitution",
    "summary": "Review every command introduced in Substitution before moving to the next category.",
    "detail": "Review every command introduced in Substitution before moving to the next category.",
    "keys": [
      ":s",
      "Enter",
      ":%s",
      "g",
      "gc",
      ":%s//"
    ],
    "task": "",
    "sequence": ":s/old/new<Enter>",
    "code": [
      "local old = config.old",
      "notify('old value')",
      "return old"
    ],
    "tip": "Return to any command in Substitution that still requires conscious recall.",
    "reviewOnly": true,
    "reviewItems": [
      {
        "key": ":s",
        "description": ":s replaces the first matching occurrence on the current line.",
        "sequence": ":s/old/new<Enter>"
      },
      {
        "key": "Enter",
        "description": ":s replaces the first matching occurrence on the current line.",
        "sequence": ":s/old/new<Enter>"
      },
      {
        "key": ":%s",
        "description": ":%s with the g flag replaces every matching occurrence in the buffer.",
        "sequence": ":%s/old/new/g<Enter>"
      },
      {
        "key": "g",
        "description": ":%s with the g flag replaces every matching occurrence in the buffer.",
        "sequence": ":%s/old/new/g<Enter>"
      },
      {
        "key": "gc",
        "description": "The c flag asks before each replacement so broad edits remain controlled.",
        "sequence": ":%s/old/new/gc<Enter>"
      },
      {
        "key": ":%s//",
        "description": "An empty substitute pattern reuses the latest search pattern.",
        "sequence": ":%s//new/g<Enter>"
      }
    ]
  }
] satisfies readonly Lesson[];

export default lessons;
