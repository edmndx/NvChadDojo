export type ReferenceKeyGroups = readonly (readonly string[])[];

export type ReferenceRowOptions = {
  group?: string;
  keyGroups?: ReferenceKeyGroups;
};

export type ReferenceRow = readonly [
  label: string,
  keys: string,
  options?: ReferenceRowOptions,
];

export type ReferenceSection = {
  title: string;
  tone: string;
  layout?: "wide";
  rows: readonly ReferenceRow[];
};

export const referenceSections: readonly ReferenceSection[] = [
  {
    title: "modes",
    tone: "cyan",
    rows: [
      ["Normal mode", "Esc"],
      ["Insert before / after cursor", "i / a"],
      ["Replace continuously", "R then Esc"],
      ["Visual character / line / block", "v / V / Ctrl+v"],
      ["Command-line mode", ":"],
      ["Terminal input / Normal mode", "i / Ctrl+x"],
    ],
  },
  {
    title: "movement",
    tone: "cyan",
    rows: [
      ["Left / down / up / right", "h j k l"],
      ["Next / end / previous word", "w e b"],
      ["Move by whitespace WORDs", "W E B"],
      ["Start / first text / line end", "0 _ $"],
      ["First / last line", "gg / G"],
      ["Paragraph back / forward", "{ / }"],
    ],
  },
  {
    title: "select",
    tone: "cyan",
    rows: [
      ["Select all text", "ggVG"],
      ["Cursor to EOF", "VG"],
      ["Cursor to top", "Vgg"],
      ["Current line", "V"],
      ["Lines down / up", "V then j / k"],
      ["Current word", "viw"],
      ["Word + space", "vaw"],
      ["To end / start of line", "v$ / v0"],
    ],
  },
  {
    title: "text objects",
    tone: "purple",
    rows: [
      ["Inside double / single quotes", "vi\" / vi'"],
      ["Inside parentheses", "vi( or vib"],
      ["Inside / around curly braces", "vi{ / va{"],
      ["Inside HTML / JSX tag", "vit"],
    ],
  },
  {
    title: "copy",
    tone: "yellow",
    rows: [
      ["Selection to system clipboard", '"+y'],
      ["Whole file to clipboard", ":%y+"],
      ["Yank all lines", ":%y"],
      ["Inside quotes", 'yi"'],
      ["Current line", "yy"],
      ["Paste below / above", "p / P"],
    ],
  },
  {
    title: "delete",
    tone: "pink",
    rows: [
      ["Delete / cut selection", "d or x"],
      ["Delete whole file", ":%d"],
      ["Delete paragraph", "dap"],
      ["Change selection", "c"],
      ["Paste over selection", "p"],
      ["Delete to line end", "D"],
    ],
  },
  {
    title: "search",
    tone: "blue",
    rows: [
      ["Search forward / backward", "/ / ?"],
      ["Repeat / reverse", "n / N"],
      ["Current word forward / backward", "* / #"],
      ["Find character", "f / F"],
      ["Move till character", "t / T"],
      ["Repeat character search", ";"],
    ],
  },
  {
    title: "format",
    tone: "green",
    rows: [
      ["Indent / un-indent selection", "> / <"],
      ["Auto-indent whole file", "gg=G"],
      ["Format buffer or selection", "Space fm"],
      ["Reselect last selection", "gv"],
    ],
  },
  {
    title: "visual actions",
    tone: "blue",
    rows: [
      ["Copy to clipboard", '"+y'],
      ["Delete / cut", "d"],
      ["Paste over", "p"],
      ["Indent / un-indent", "> / <"],
      ["Change and insert", "c"],
      ["Switch active end", "o"],
    ],
  },
  {
    title: "repeat",
    tone: "yellow",
    rows: [
      ["Repeat latest change", "."],
      ["Repeat three times", "3."],
      ["Repeat latest Ex command", "@:"],
      ["Repeat latest macro", "@@"],
    ],
  },
  {
    title: "registers",
    tone: "purple",
    rows: [
      ["Put latest yank", '"0p'],
      ["Yank into register a", '"ayy'],
      ["Put from register a", '"ap'],
      ["Delete without overwriting", '"_d'],
      ["Inspect registers", ":registers"],
    ],
  },
  {
    title: "macros",
    tone: "pink",
    rows: [
      ["Record into register a", "qa … q"],
      ["Replay register a", "@a"],
      ["Repeat latest macro", "@@"],
      ["Run macro ten times", "10@a"],
    ],
  },
  {
    title: "visual block",
    tone: "cyan",
    rows: [
      ["Enter block selection", "Ctrl+v"],
      ["Insert across lines", "I then Esc"],
      ["Append across lines", "A then Esc"],
      ["Replace selected block", "r{char}"],
    ],
  },
  {
    title: "jump history",
    tone: "blue",
    rows: [
      ["Jump backward / forward", "Ctrl+o / Ctrl+i"],
      ["Previous / next change", "g; / g,"],
      ["Matching delimiter", "%"],
      ["Latest edit", "`."],
    ],
  },
  {
    title: "substitute",
    tone: "red",
    rows: [
      ["Replace once on line", ":s/old/new"],
      ["Replace throughout file", ":%s/old/new/g"],
      ["Confirm replacements", ":%s/old/new/gc"],
      ["Reuse latest search", ":%s//new/g"],
    ],
  },
  {
    title: "more objects",
    tone: "green",
    rows: [
      ["Parentheses", "i( / a("],
      ["Square brackets", "i[ / a["],
      ["Tag", "it / at"],
      ["Sentence", "is / as"],
    ],
  },
  {
    title: "files",
    tone: "yellow",
    rows: [
      ["Open or create by path", ":e path"],
      ["Write under a new name", ":saveas path"],
      ["Write and keep editing", ":w / Ctrl+s"],
      ["Write and quit", ":wq"],
      ["Quit unchanged buffer", ":q"],
      ["Discard changes and quit", ":q!"],
    ],
  },
  {
    title: "windows & tab pages",
    tone: "green",
    rows: [
      ["Horizontal / vertical split", "Ctrl+w s / Ctrl+w v"],
      ["Move between splits", "Ctrl+h j k l"],
      ["Equalize / resize", "Ctrl+w = / Ctrl+w + - < >"],
      ["Close current / keep only current", "Ctrl+w c / Ctrl+w o"],
      ["Create / close tab page", ":tabnew / :tabclose"],
      ["Next / previous tab page", "gt / gT"],
      ["Inspect buffers / tabs", ":ls / :tabs"],
    ],
  },
  {
    title: "buffers & tabufline",
    tone: "yellow",
    rows: [
      ["New buffer", "Space b"],
      ["Next / previous buffer", "Tab / Shift+Tab"],
      ["Close selected buffer", "Space x"],
    ],
  },
  {
    title: "nvchad general",
    tone: "green",
    rows: [
      ["Toggle comment", "Space /"],
      ["Numbers / relative numbers", "Space n / Space rn"],
    ],
  },
  {
    title: "telescope",
    tone: "blue",
    rows: [
      ["Files / all hidden files", "Space ff / Space fa"],
      ["Live grep / open buffers", "Space fw / Space fb"],
      ["Help / marks / old files", "Space fh / Space ma / Space fo"],
      ["Search current buffer", "Space fz"],
      ["Git commits / status", "Space cm / Space gt"],
      ["Theme picker", "Space th"],
      ["Next / previous result", "Ctrl+n / Ctrl+p"],
      ["Open / close picker", "Enter / Ctrl+c"],
      ["Horizontal / vertical / tab", "Ctrl+x / Ctrl+v / Ctrl+t"],
      ["Select result / send to quickfix", "Tab / Ctrl+q"],
    ],
  },
  {
    title: "nvchad terminals",
    tone: "purple",
    rows: [
      ["New horizontal / vertical", "Space h / Space v"],
      ["Toggle horizontal / vertical", "Alt+h / Alt+v"],
      ["Toggle floating terminal", "Alt+i"],
      ["Leave Terminal mode", "Ctrl+x"],
      ["Pick a hidden terminal", "Space pt"],
      ["End shell process", "exit"],
      ["Close terminal buffer", "Ctrl+x then Space x"],
    ],
  },
  {
    title: "nvimtree navigation",
    tone: "cyan",
    rows: [
      ["Toggle / focus tree", "Ctrl+n / Space e"],
      ["Open node / parent", "Enter or o / P"],
      ["Move root upward", "-"],
      ["Vertical / horizontal split", "Ctrl+v / Ctrl+x"],
      ["New tab / preview", "Ctrl+t / Tab"],
      ["Filter / clear filter", "f / F"],
      ["Show tree mappings", "g?"],
    ],
  },
  {
    title: "nvimtree file actions",
    tone: "yellow",
    rows: [
      ["Create file or directory", "a"],
      ["Rename / rename basename", "r / e"],
      ["Copy / cut / paste", "c / x / p"],
      ["Delete / trash", "d / D"],
    ],
  },
  {
    title: "cheats & plugins",
    tone: "cyan",
    rows: [
      ["NVChad cheatsheet", "Space ch"],
      ["All WhichKey mappings", "Space wK"],
      ["Query a WhichKey prefix", "Space wk"],
      ["Plugin manager", ":Lazy"],
      ["Install configured tools", ":MasonInstallAll"],
      ["Tool package manager", ":Mason"],
      ["Neovim health report", ":checkhealth"],
    ],
  },
  {
    title: "completion & snippets",
    tone: "blue",
    rows: [
      ["Previous / next suggestion", "Ctrl+p / Ctrl+n"],
      ["Scroll documentation", "Ctrl+d / Ctrl+f"],
      ["Open / close completion", "Ctrl+Space / Ctrl+e"],
      ["Confirm selected item", "Enter"],
      ["Next / previous snippet stop", "Tab / Shift+Tab"],
      ["Normal-mode buffer cycling", "Tab / Shift+Tab"],
    ],
  },
  {
    title: "lsp actions",
    tone: "cyan",
    rows: [
      ["Definition / references", "gd / grr"],
      ["Hover documentation", "K"],
      ["Rename symbol", "grn"],
      ["Code actions", "gra"],
      ["Signature help in Insert mode", "Ctrl+s"],
      ["Format after refactor", "Space fm"],
    ],
  },
  {
    title: "gitsigns · map these",
    tone: "green",
    rows: [
      ["Next / previous hunk", "]c / [c"],
      ["Stage / reset hunk", "Space hs / Space hr"],
      ["Stage / reset buffer", "Space hS / Space hR"],
      ["Preview / select hunk", "Space hp / ih"],
      ["Blame current line", "Space hb"],
      ["Working tree / HEAD diff", "Space hd / Space hD"],
      ["Unstage current staged hunk", "Space hu"],
      ["Partial hunk action", "Visual then Space hs or hr"],
    ],
  },
  {
    title: "lazygit · optional",
    tone: "pink",
    layout: "wide",
    rows: [
      ["Launch through plugin", ":LazyGit", { group: "worktree & commits" }],
      ["Stage selected", "Space", { group: "worktree & commits" }],
      ["Stage all files", "a", { group: "worktree & commits" }],
      ["Commit staged changes", "c", { group: "worktree & commits" }],
      ["Stash options", "S", { group: "worktree & commits" }],
      ["Amend selected commit", "A", { group: "worktree & commits" }],
      ["Quit LazyGit", "q", { group: "worktree & commits" }],
      ["Pull", "p", { group: "sync & recovery" }],
      ["Push", "P", { group: "sync & recovery" }],
      ["Conflict menu", "M", { group: "sync & recovery" }],
      ["Pick both sides", "b", { group: "sync & recovery" }],
      ["Previous / next conflict", "h / l", { group: "sync & recovery" }],
      ["Previous / next hunk", "k / j", { group: "sync & recovery" }],
      ["Undo / redo repository action", "z / Z", { group: "sync & recovery" }],
    ],
  },
  {
    title: "diagnostics & lists",
    tone: "red",
    rows: [
      ["Next / previous diagnostic", "]d / [d"],
      [
        "Inspect current diagnostic",
        ":lua vim.diagnostic.open_float()",
        { keyGroups: [[":lua", "vim.diagnostic.open_float()"]] },
      ],
      ["Diagnostics location list", "Space ds"],
      ["Open / close quickfix", ":copen / :cclose"],
      ["Next / previous quickfix", ":cnext / :cprev"],
      ["Open / close location list", ":lopen / :lclose"],
      ["Next / previous location", ":lnext / :lprev"],
    ],
  },
  {
    title: "sessions & projects",
    tone: "purple",
    rows: [
      ["Show / change working directory", ":pwd / :cd path"],
      ["Window-local / tab-local directory", ":lcd path / :tcd path"],
      [
        "Save / restore session",
        ":mksession! Session.vim / :source Session.vim",
        {
          keyGroups: [
            [":mksession!", "Session.vim"],
            [":source", "Session.vim"],
          ],
        },
      ],
      ["Show / add argument", ":args / :argadd path"],
      ["Next / previous argument", ":next / :previous"],
      ["Alternate file", "Ctrl+^"],
    ],
  },
  {
    title: "command discovery",
    tone: "blue",
    rows: [
      ["Open help for a topic", ":help topic"],
      ["Follow tag / jump back", "Ctrl+] / Ctrl+o"],
      ["All / Normal / Insert mappings", ":map / :nmap / :imap"],
      ["Find mapping source", ":verbose map {key}"],
      ["WhichKey all / prefix", "Space wK / Space wk"],
      ["NVChad cheatsheet", "Space ch"],
      ["Plugin-local help", "g? or ?"],
    ],
  },
  {
    title: "surround · optional",
    tone: "purple",
    rows: [
      ["Surround using a motion", "ys{motion}{char}"],
      ["Surround current line", "yss{char}"],
      ["Delete surrounding pair", "ds{char}"],
      ["Change surrounding pair", "cs{old}{new}"],
      ["Surround visual selection", "S{char}"],
    ],
  },
  {
    title: "trouble · map these",
    tone: "yellow",
    rows: [
      ["Workspace diagnostics", "Space xx"],
      ["Buffer diagnostics", "Space xX"],
      ["Symbols", "Space cs"],
      ["LSP definitions / references", "Space cl"],
      ["Location list", "Space xL"],
      ["Quickfix list", "Space xQ"],
      ["Jump / horizontal / vertical", "Enter / Ctrl+s / Ctrl+v"],
      ["Preview / close", "p / q"],
    ],
  },
  {
    title: "nvim-dap · map these",
    tone: "pink",
    rows: [
      ["Continue / start", "F5"],
      ["Step over / into / out", "F10 / F11 / F12"],
      ["Toggle breakpoint", "Space db"],
      ["Conditional breakpoint", "Space dB"],
      ["Open REPL", "Space dr"],
      ["Terminate session", "Space dt"],
    ],
  },
] as const;

export const referenceSearchText = referenceSections
  .flatMap((section) => [
    section.title,
    ...section.rows.flatMap(([label, keys, options]) => [
      label,
      keys,
      options?.group ?? "",
    ]),
  ])
  .join(" ")
  .toLowerCase();
