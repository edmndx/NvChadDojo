import type { LessonSummary } from "./schema";

export const lessonSummaries = [
  {
    "id": "essential-command-reference",
    "group": "Command Reference",
    "title": "Essential Command Reference",
    "keys": [
      "Reference"
    ],
    "moduleId": "command-reference",
    "kind": "reference",
    "searchText": "modes Normal mode Esc Insert before / after cursor i / a Replace continuously R then Esc Visual character / line / block v / V / Ctrl+v Command-line mode : Terminal input / Normal mode i / Ctrl+x movement Left / down / up / right h j k l Next / end / previous word w e b Move by whitespace WORDs W E B Start / first text / line end 0 _ $ First / last line gg / G Paragraph back / forward { / } select Select all text ggVG Cursor to EOF VG Cursor to top Vgg Current line V Lines down / up V then j / k Current word viw Word + space vaw To end / start of line v$ / v0 text objects Inside double / single quotes vi\" / vi' Inside parentheses vi( or vib Inside / around curly braces vi{ / va{ Inside HTML / JSX tag vit copy Selection to system clipboard \"+y Whole file to clipboard :%y+ Yank all lines :%y Inside quotes yi\" Current line yy Paste below / above p / P delete Delete / cut selection d or x Delete whole file :%d Delete paragraph dap Change selection c Paste over selection p Delete to line end D search Search forward / backward / / ? Repeat / reverse n / N Current word forward / backward * / # Find character f / F Move till character t / T Repeat character search ; format Indent / un-indent selection > / < Auto-indent whole file gg=G Format buffer or selection Space fm Reselect last selection gv visual actions Copy to clipboard \"+y Delete / cut d Paste over p Indent / un-indent > / < Change and insert c Switch active end o repeat Repeat latest change . Repeat three times 3. Repeat latest Ex command @: Repeat latest macro @@ registers Put latest yank \"0p Yank into register a \"ayy Put from register a \"ap Delete without overwriting \"_d Inspect registers :registers macros Record into register a qa … q Replay register a @a Repeat latest macro @@ Run macro ten times 10@a visual block Enter block selection Ctrl+v Insert across lines I then Esc Append across lines A then Esc Replace selected block r{char} jump history Jump backward / forward Ctrl+o / Ctrl+i Previous / next change g; / g, Matching delimiter % Latest edit `. substitute Replace once on line :s/old/new Replace throughout file :%s/old/new/g Confirm replacements :%s/old/new/gc Reuse latest search :%s//new/g more objects Parentheses i( / a( Square brackets i[ / a[ Tag it / at Sentence is / as files Open or create by path :e path Write under a new name :saveas path Write and keep editing :w / Ctrl+s Write and quit :wq Quit unchanged buffer :q Discard changes and quit :q! windows & tab pages Horizontal / vertical split Ctrl+w s / Ctrl+w v Move between splits Ctrl+h j k l Equalize / resize Ctrl+w = / Ctrl+w + - < > Close current / keep only current Ctrl+w c / Ctrl+w o Create / close tab page :tabnew / :tabclose Next / previous tab page gt / gT Inspect buffers / tabs :ls / :tabs buffers & tabufline New buffer Space b Next / previous buffer Tab / Shift+Tab Close selected buffer Space x nvchad general Toggle comment Space / Numbers / relative numbers Space n / Space rn telescope Files / all hidden files Space ff / Space fa Live grep / open buffers Space fw / Space fb Help / marks / old files Space fh / Space ma / Space fo Search current buffer Space fz Git commits / status Space cm / Space gt Theme picker Space th Next / previous result Ctrl+n / Ctrl+p Open / close picker Enter / Ctrl+c Horizontal / vertical / tab Ctrl+x / Ctrl+v / Ctrl+t Select result / send to quickfix Tab / Ctrl+q nvchad terminals New horizontal / vertical Space h / Space v Toggle horizontal / vertical Alt+h / Alt+v Toggle floating terminal Alt+i Leave Terminal mode Ctrl+x Pick a hidden terminal Space pt End shell process exit Close terminal buffer Ctrl+x then Space x nvimtree navigation Toggle / focus tree Ctrl+n / Space e Open node / parent Enter or o / P Move root upward - Vertical / horizontal split Ctrl+v / Ctrl+x New tab / preview Ctrl+t / Tab Filter / clear filter f / F Show tree mappings g? nvimtree file actions Create file or directory a Rename / rename basename r / e Copy / cut / paste c / x / p Delete / trash d / D cheats & plugins NVChad cheatsheet Space ch All WhichKey mappings Space wK Query a WhichKey prefix Space wk Plugin manager :Lazy Install configured tools :MasonInstallAll Tool package manager :Mason Neovim health report :checkhealth completion & snippets Previous / next suggestion Ctrl+p / Ctrl+n Scroll documentation Ctrl+d / Ctrl+f Open / close completion Ctrl+Space / Ctrl+e Confirm selected item Enter Next / previous snippet stop Tab / Shift+Tab Normal-mode buffer cycling Tab / Shift+Tab lsp actions Definition / references gd / grr Hover documentation K Rename symbol grn Code actions gra Signature help in Insert mode Ctrl+s Format after refactor Space fm gitsigns · map these Next / previous hunk ]c / [c Stage / reset hunk Space hs / Space hr Stage / reset buffer Space hS / Space hR Preview / select hunk Space hp / ih Blame current line Space hb Working tree / HEAD diff Space hd / Space hD Undo latest hunk stage Space hu Partial hunk action Visual then Space hs or hr lazygit · optional Launch through plugin :LazyGit Stage selected Space Stage all files a Commit staged changes c Stash options S Amend selected commit A Quit LazyGit q Pull p Push P Conflict menu M Pick both sides b Previous / next conflict h / l Previous / next hunk k / j Undo / redo repository action z / Z diagnostics & lists Next / previous diagnostic ]d / [d Inspect current diagnostic :lua vim.diagnostic.open_float() Diagnostics location list Space ds Open / close quickfix :copen / :cclose Next / previous quickfix :cnext / :cprev Open / close location list :lopen / :lclose Next / previous location :lnext / :lprev sessions & projects Show / change working directory :pwd / :cd path Window-local / tab-local directory :lcd path / :tcd path Save / restore session :mksession! Session.vim / :source Session.vim Show / add argument :args / :argadd path Next / previous argument :next / :previous Alternate file Ctrl+^ command discovery Open help for a topic :help topic Follow tag / jump back Ctrl+] / Ctrl+o All / Normal / Insert mappings :map / :nmap / :imap Find mapping source :verbose map {key} WhichKey all / prefix Space wK / Space wk NVChad cheatsheet Space ch Plugin-local help g? or ? surround · optional Surround using a motion ys{motion}{char} Surround current line yss{char} Delete surrounding pair ds{char} Change surrounding pair cs{old}{new} Surround visual selection S{char} trouble · map these Workspace diagnostics Space xx Buffer diagnostics Space xX Symbols Space cs LSP definitions / references Space cl Location list Space xL Quickfix list Space xQ Jump / horizontal / vertical Enter / Ctrl+s / Ctrl+v Preview / close p / q nvim-dap · map these Continue / start F5 Step over / into / out F10 / F11 / F12 Toggle breakpoint Space db Conditional breakpoint Space dB Open REPL Space dr Terminate session Space dt",
    "index": 0
  },
  {
    "id": "intro-modes",
    "group": "Vim Modes",
    "title": "Normal and Insert Modes",
    "keys": [
      "i",
      "Esc"
    ],
    "moduleId": "vim-modes",
    "kind": "practice",
    "index": 1
  },
  {
    "id": "intro-visual-mode",
    "group": "Vim Modes",
    "title": "Visual Mode",
    "keys": [
      "v",
      "Esc"
    ],
    "moduleId": "vim-modes",
    "kind": "practice",
    "index": 2
  },
  {
    "id": "command-line-mode",
    "group": "Vim Modes",
    "title": "Command-line Mode",
    "keys": [
      ":",
      "Enter",
      "Esc"
    ],
    "moduleId": "vim-modes",
    "kind": "practice",
    "index": 3
  },
  {
    "id": "replace-mode",
    "group": "Vim Modes",
    "title": "Replace Mode",
    "keys": [
      "R",
      "Esc"
    ],
    "moduleId": "vim-modes",
    "kind": "practice",
    "index": 4
  },
  {
    "id": "vim-modes-review",
    "group": "Vim Modes",
    "title": "Vim Modes Review",
    "keys": [
      "i",
      "Esc",
      "v",
      ":",
      "Enter",
      "R"
    ],
    "moduleId": "vim-modes",
    "kind": "review",
    "index": 5
  },
  {
    "id": "basic-movement",
    "group": "Basic Vim",
    "title": "Basic Movement",
    "keys": [
      "h",
      "j",
      "k",
      "l"
    ],
    "moduleId": "basic-vim",
    "kind": "practice",
    "index": 6
  },
  {
    "id": "moving-words",
    "group": "Basic Vim",
    "title": "Moving by Words",
    "keys": [
      "w",
      "e",
      "b"
    ],
    "moduleId": "basic-vim",
    "kind": "practice",
    "index": 7
  },
  {
    "id": "insert-mode",
    "group": "Basic Vim",
    "title": "Insert Mode",
    "keys": [
      "i",
      "a",
      "Esc"
    ],
    "moduleId": "basic-vim",
    "kind": "practice",
    "index": 8
  },
  {
    "id": "basic-vim-review",
    "group": "Basic Vim",
    "title": "Basic Vim Review",
    "keys": [
      "h",
      "j",
      "k",
      "l",
      "w",
      "e",
      "b",
      "i",
      "a",
      "Esc"
    ],
    "moduleId": "basic-vim",
    "kind": "review",
    "index": 9
  },
  {
    "id": "insert-line-ends",
    "group": "Insert Like a Pro",
    "title": "Insert at Line Ends",
    "keys": [
      "I",
      "A",
      "Esc"
    ],
    "moduleId": "insert-like-a-pro",
    "kind": "practice",
    "index": 10
  },
  {
    "id": "opening-lines",
    "group": "Insert Like a Pro",
    "title": "Opening New Lines",
    "keys": [
      "o",
      "O"
    ],
    "moduleId": "insert-like-a-pro",
    "kind": "practice",
    "index": 11
  },
  {
    "id": "small-edits",
    "group": "Insert Like a Pro",
    "title": "Making Small Edits",
    "keys": [
      "s",
      "x",
      "r"
    ],
    "moduleId": "insert-like-a-pro",
    "kind": "practice",
    "index": 12
  },
  {
    "id": "insert-like-a-pro-review",
    "group": "Insert Like a Pro",
    "title": "Insert Like a Pro Review",
    "keys": [
      "I",
      "A",
      "Esc",
      "o",
      "O",
      "s",
      "x",
      "r"
    ],
    "moduleId": "insert-like-a-pro",
    "kind": "review",
    "index": 13
  },
  {
    "id": "moving-big-words",
    "group": "Essential Motions",
    "title": "Moving by WORDs",
    "keys": [
      "W",
      "E",
      "B"
    ],
    "moduleId": "essential-motions",
    "kind": "practice",
    "index": 14
  },
  {
    "id": "moving-line-ends",
    "group": "Essential Motions",
    "title": "Moving to Line Ends",
    "keys": [
      "0",
      "_",
      "$"
    ],
    "moduleId": "essential-motions",
    "kind": "practice",
    "index": 15
  },
  {
    "id": "find-character",
    "group": "Essential Motions",
    "title": "Find Character",
    "keys": [
      "f",
      "F",
      ";"
    ],
    "moduleId": "essential-motions",
    "kind": "practice",
    "index": 16
  },
  {
    "id": "till-character",
    "group": "Essential Motions",
    "title": "Till Character",
    "keys": [
      "t",
      "T",
      ";"
    ],
    "moduleId": "essential-motions",
    "kind": "practice",
    "index": 17
  },
  {
    "id": "essential-motions-review",
    "group": "Essential Motions",
    "title": "Essential Motions Review",
    "keys": [
      "W",
      "E",
      "B",
      "0",
      "_",
      "$",
      "f",
      "F",
      ";",
      "t",
      "T"
    ],
    "moduleId": "essential-motions",
    "kind": "review",
    "index": 18
  },
  {
    "id": "intro-operators",
    "group": "Basic Operators",
    "title": "Intro to Operators",
    "keys": [
      "d",
      "c",
      "y"
    ],
    "moduleId": "basic-operators",
    "kind": "practice",
    "index": 19
  },
  {
    "id": "delete-words",
    "group": "Basic Operators",
    "title": "Delete Words",
    "keys": [
      "d",
      "w"
    ],
    "moduleId": "basic-operators",
    "kind": "practice",
    "index": 20
  },
  {
    "id": "change-words",
    "group": "Basic Operators",
    "title": "Change Words",
    "keys": [
      "c",
      "w"
    ],
    "moduleId": "basic-operators",
    "kind": "practice",
    "index": 21
  },
  {
    "id": "delete-lines",
    "group": "Basic Operators",
    "title": "Delete Lines",
    "keys": [
      "d",
      "d",
      "D"
    ],
    "moduleId": "basic-operators",
    "kind": "practice",
    "index": 22
  },
  {
    "id": "delete-multiple-lines",
    "group": "Basic Operators",
    "title": "Delete Multiple Lines",
    "keys": [
      "d",
      "j",
      "k"
    ],
    "moduleId": "basic-operators",
    "kind": "practice",
    "index": 23
  },
  {
    "id": "copy-paste-lines",
    "group": "Basic Operators",
    "title": "Copy/Paste Lines",
    "keys": [
      "y",
      "p",
      "P"
    ],
    "moduleId": "basic-operators",
    "kind": "practice",
    "index": 24
  },
  {
    "id": "basic-operators-review",
    "group": "Basic Operators",
    "title": "Basic Operators Review",
    "keys": [
      "d",
      "c",
      "y",
      "w",
      "D",
      "j",
      "k",
      "p",
      "P"
    ],
    "moduleId": "basic-operators",
    "kind": "review",
    "index": 25
  },
  {
    "id": "undo-change",
    "group": "Editing Safety",
    "title": "Undo the Last Change",
    "keys": [
      "x",
      "u"
    ],
    "moduleId": "editing-safety",
    "kind": "practice",
    "index": 26
  },
  {
    "id": "redo-change",
    "group": "Editing Safety",
    "title": "Redo an Undo",
    "keys": [
      "x",
      "u",
      "Ctrl+r"
    ],
    "moduleId": "editing-safety",
    "kind": "practice",
    "index": 27
  },
  {
    "id": "editing-safety-review",
    "group": "Editing Safety",
    "title": "Editing Safety Review",
    "keys": [
      "x",
      "u",
      "Ctrl+r"
    ],
    "moduleId": "editing-safety",
    "kind": "review",
    "index": 28
  },
  {
    "id": "relative-line-jumps",
    "group": "Advanced Vertical Movement",
    "title": "Relative Line Jumps",
    "keys": [
      "{n}",
      "j",
      "k"
    ],
    "moduleId": "advanced-vertical-movement",
    "kind": "practice",
    "index": 29
  },
  {
    "id": "absolute-line-jumps",
    "group": "Advanced Vertical Movement",
    "title": "Absolute Line Jumps",
    "keys": [
      "gg",
      "G"
    ],
    "moduleId": "advanced-vertical-movement",
    "kind": "practice",
    "index": 30
  },
  {
    "id": "paragraph-jumps",
    "group": "Advanced Vertical Movement",
    "title": "Paragraph Jumps",
    "keys": [
      "}",
      "{"
    ],
    "moduleId": "advanced-vertical-movement",
    "kind": "practice",
    "index": 31
  },
  {
    "id": "window-scrolls",
    "group": "Advanced Vertical Movement",
    "title": "Window Scrolls",
    "keys": [
      "Ctrl+u",
      "Ctrl+d"
    ],
    "moduleId": "advanced-vertical-movement",
    "kind": "practice",
    "index": 32
  },
  {
    "id": "advanced-vertical-movement-review",
    "group": "Advanced Vertical Movement",
    "title": "Advanced Vertical Movement Review",
    "keys": [
      "{n}",
      "j",
      "k",
      "gg",
      "G",
      "}",
      "{",
      "Ctrl+u",
      "Ctrl+d"
    ],
    "moduleId": "advanced-vertical-movement",
    "kind": "review",
    "index": 33
  },
  {
    "id": "search-forward-back",
    "group": "Search",
    "title": "Search",
    "keys": [
      "/",
      "?"
    ],
    "moduleId": "search",
    "kind": "practice",
    "index": 34
  },
  {
    "id": "repeat-search",
    "group": "Search",
    "title": "Repeat Search",
    "keys": [
      "n",
      "N"
    ],
    "moduleId": "search",
    "kind": "practice",
    "index": 35
  },
  {
    "id": "quick-word-search",
    "group": "Search",
    "title": "Quick Word Search",
    "keys": [
      "*",
      "#"
    ],
    "moduleId": "search",
    "kind": "practice",
    "index": 36
  },
  {
    "id": "search-review",
    "group": "Search",
    "title": "Search Review",
    "keys": [
      "/",
      "n",
      "N",
      "*",
      "#"
    ],
    "moduleId": "search",
    "kind": "review",
    "index": 37
  },
  {
    "id": "intro-text-objects",
    "group": "Text Objects - Bracket Pairs",
    "title": "Intro to Text Objects",
    "keys": [
      "i",
      "a"
    ],
    "moduleId": "text-objects-bracket-pairs",
    "kind": "practice",
    "index": 38
  },
  {
    "id": "delete-inside-brackets",
    "group": "Text Objects - Bracket Pairs",
    "title": "Delete Inside Brackets",
    "keys": [
      "d",
      "i",
      "{"
    ],
    "moduleId": "text-objects-bracket-pairs",
    "kind": "practice",
    "index": 39
  },
  {
    "id": "delete-around-brackets",
    "group": "Text Objects - Bracket Pairs",
    "title": "Delete Around Brackets",
    "keys": [
      "d",
      "a",
      "{"
    ],
    "moduleId": "text-objects-bracket-pairs",
    "kind": "practice",
    "index": 40
  },
  {
    "id": "change-inside-brackets",
    "group": "Text Objects - Bracket Pairs",
    "title": "Change Inside Brackets",
    "keys": [
      "c",
      "i",
      "{"
    ],
    "moduleId": "text-objects-bracket-pairs",
    "kind": "practice",
    "index": 41
  },
  {
    "id": "change-around-brackets",
    "group": "Text Objects - Bracket Pairs",
    "title": "Change Around Brackets",
    "keys": [
      "c",
      "a",
      "{"
    ],
    "moduleId": "text-objects-bracket-pairs",
    "kind": "practice",
    "index": 42
  },
  {
    "id": "brackets-review",
    "group": "Text Objects - Bracket Pairs",
    "title": "Brackets Review",
    "keys": [
      "di{",
      "da{",
      "ci{",
      "ca{"
    ],
    "moduleId": "text-objects-bracket-pairs",
    "kind": "review",
    "index": 43
  },
  {
    "id": "delete-inside-quotes",
    "group": "Text Objects - Quotes",
    "title": "Delete Inside Quotes",
    "keys": [
      "d",
      "i",
      "\""
    ],
    "moduleId": "text-objects-quotes",
    "kind": "practice",
    "index": 44
  },
  {
    "id": "delete-around-quotes",
    "group": "Text Objects - Quotes",
    "title": "Delete Around Quotes",
    "keys": [
      "d",
      "a",
      "\""
    ],
    "moduleId": "text-objects-quotes",
    "kind": "practice",
    "index": 45
  },
  {
    "id": "change-inside-quotes",
    "group": "Text Objects - Quotes",
    "title": "Change Inside Quotes",
    "keys": [
      "c",
      "i",
      "\""
    ],
    "moduleId": "text-objects-quotes",
    "kind": "practice",
    "index": 46
  },
  {
    "id": "change-around-quotes",
    "group": "Text Objects - Quotes",
    "title": "Change Around Quotes",
    "keys": [
      "c",
      "a",
      "\""
    ],
    "moduleId": "text-objects-quotes",
    "kind": "practice",
    "index": 47
  },
  {
    "id": "quotes-review",
    "group": "Text Objects - Quotes",
    "title": "Quotes Review",
    "keys": [
      "di\"",
      "da\"",
      "ci\"",
      "ca\""
    ],
    "moduleId": "text-objects-quotes",
    "kind": "review",
    "index": 48
  },
  {
    "id": "delete-inside-word",
    "group": "Text Objects - Words",
    "title": "Delete Inside Word",
    "keys": [
      "d",
      "i",
      "w"
    ],
    "moduleId": "text-objects-words",
    "kind": "practice",
    "index": 49
  },
  {
    "id": "delete-around-word",
    "group": "Text Objects - Words",
    "title": "Delete Around Word",
    "keys": [
      "d",
      "a",
      "w"
    ],
    "moduleId": "text-objects-words",
    "kind": "practice",
    "index": 50
  },
  {
    "id": "change-inside-word",
    "group": "Text Objects - Words",
    "title": "Change Inside Word",
    "keys": [
      "c",
      "i",
      "w"
    ],
    "moduleId": "text-objects-words",
    "kind": "practice",
    "index": 51
  },
  {
    "id": "words-review",
    "group": "Text Objects - Words",
    "title": "Words Review",
    "keys": [
      "diw",
      "daw",
      "ciw"
    ],
    "moduleId": "text-objects-words",
    "kind": "review",
    "index": 52
  },
  {
    "id": "delete-inside-paragraph",
    "group": "Text Objects - Paragraphs",
    "title": "Delete Inside Paragraph",
    "keys": [
      "d",
      "i",
      "p"
    ],
    "moduleId": "text-objects-paragraphs",
    "kind": "practice",
    "index": 53
  },
  {
    "id": "delete-around-paragraph",
    "group": "Text Objects - Paragraphs",
    "title": "Delete Around Paragraph",
    "keys": [
      "d",
      "a",
      "p"
    ],
    "moduleId": "text-objects-paragraphs",
    "kind": "practice",
    "index": 54
  },
  {
    "id": "change-inside-paragraph",
    "group": "Text Objects - Paragraphs",
    "title": "Change Inside Paragraph",
    "keys": [
      "c",
      "i",
      "p"
    ],
    "moduleId": "text-objects-paragraphs",
    "kind": "practice",
    "index": 55
  },
  {
    "id": "paragraphs-review",
    "group": "Text Objects - Paragraphs",
    "title": "Paragraphs Review",
    "keys": [
      "dip",
      "dap",
      "cip"
    ],
    "moduleId": "text-objects-paragraphs",
    "kind": "review",
    "index": 56
  },
  {
    "id": "text-objects-mega-review",
    "group": "Text Objects - Mega Review",
    "title": "Text Objects Mega Review",
    "keys": [
      "di{",
      "ca\"",
      "ciw",
      "dap"
    ],
    "moduleId": "text-objects-mega-review",
    "kind": "review",
    "index": 57
  },
  {
    "id": "visual-mode-operators",
    "group": "Visual Editing",
    "title": "Visual Mode Operators",
    "keys": [
      "d",
      "c",
      "y"
    ],
    "moduleId": "visual-editing",
    "kind": "practice",
    "index": 58
  },
  {
    "id": "switch-selection-ends",
    "group": "Visual Editing",
    "title": "Switch Selection Ends",
    "keys": [
      "v",
      "o"
    ],
    "moduleId": "visual-editing",
    "kind": "practice",
    "index": 59
  },
  {
    "id": "visual-line-mode",
    "group": "Visual Editing",
    "title": "Visual Line Mode",
    "keys": [
      "V",
      "Esc"
    ],
    "moduleId": "visual-editing",
    "kind": "practice",
    "index": 60
  },
  {
    "id": "switch-visual-line-ends",
    "group": "Visual Editing",
    "title": "Switch Visual Line Ends",
    "keys": [
      "V",
      "o"
    ],
    "moduleId": "visual-editing",
    "kind": "practice",
    "index": 61
  },
  {
    "id": "visual-line-operators",
    "group": "Visual Editing",
    "title": "Visual Line Operators",
    "keys": [
      "V",
      "d",
      "y"
    ],
    "moduleId": "visual-editing",
    "kind": "practice",
    "index": 62
  },
  {
    "id": "visual-editing-review",
    "group": "Visual Editing",
    "title": "Visual Editing Review",
    "keys": [
      "d",
      "c",
      "y",
      "v",
      "o",
      "V",
      "Esc"
    ],
    "moduleId": "visual-editing",
    "kind": "review",
    "index": 63
  },
  {
    "id": "indent-lines",
    "group": "Indent & Join",
    "title": "Indent and Un-indent",
    "keys": [
      ">>",
      "<<"
    ],
    "moduleId": "indent-and-join",
    "kind": "practice",
    "index": 64
  },
  {
    "id": "reindent-file",
    "group": "Indent & Join",
    "title": "Reindent the Whole File",
    "keys": [
      "gg",
      "=",
      "G"
    ],
    "moduleId": "indent-and-join",
    "kind": "practice",
    "index": 65
  },
  {
    "id": "join-lines",
    "group": "Indent & Join",
    "title": "Join Lines",
    "keys": [
      "J",
      "gJ"
    ],
    "moduleId": "indent-and-join",
    "kind": "practice",
    "index": 66
  },
  {
    "id": "indent-join-review",
    "group": "Indent & Join",
    "title": "Indent & Join Review",
    "keys": [
      ">>",
      "<<",
      "gg",
      "=",
      "G",
      "J",
      "gJ"
    ],
    "moduleId": "indent-and-join",
    "kind": "review",
    "index": 67
  },
  {
    "id": "repeat-last-change",
    "group": "Repeat Workflow",
    "title": "Repeat Last Change",
    "keys": [
      "."
    ],
    "moduleId": "repeat-workflow",
    "kind": "practice",
    "index": 68
  },
  {
    "id": "repeat-with-count",
    "group": "Repeat Workflow",
    "title": "Repeat with a Count",
    "keys": [
      "3",
      "."
    ],
    "moduleId": "repeat-workflow",
    "kind": "practice",
    "index": 69
  },
  {
    "id": "repeat-ex-command",
    "group": "Repeat Workflow",
    "title": "Repeat Last Ex Command",
    "keys": [
      "@",
      ":"
    ],
    "moduleId": "repeat-workflow",
    "kind": "practice",
    "index": 70
  },
  {
    "id": "repeat-workflow-review",
    "group": "Repeat Workflow",
    "title": "Repeat Workflow Review",
    "keys": [
      ".",
      "3",
      "@",
      ":"
    ],
    "moduleId": "repeat-workflow",
    "kind": "review",
    "index": 71
  },
  {
    "id": "yank-register",
    "group": "Registers",
    "title": "Use the Yank Register",
    "keys": [
      "\"0",
      "p"
    ],
    "moduleId": "registers",
    "kind": "practice",
    "index": 72
  },
  {
    "id": "named-registers",
    "group": "Registers",
    "title": "Named Registers",
    "keys": [
      "\"a",
      "yy",
      "\"a",
      "p"
    ],
    "moduleId": "registers",
    "kind": "practice",
    "index": 73
  },
  {
    "id": "black-hole-register",
    "group": "Registers",
    "title": "Delete Without Overwriting",
    "keys": [
      "\"_",
      "d",
      "w"
    ],
    "moduleId": "registers",
    "kind": "practice",
    "index": 74
  },
  {
    "id": "inspect-registers",
    "group": "Registers",
    "title": "Inspect Registers",
    "keys": [
      ":registers",
      "Enter"
    ],
    "moduleId": "registers",
    "kind": "practice",
    "index": 75
  },
  {
    "id": "registers-review",
    "group": "Registers",
    "title": "Registers Review",
    "keys": [
      "\"0",
      "p",
      "\"a",
      "yy",
      "\"_",
      "d",
      "w",
      ":registers",
      "Enter"
    ],
    "moduleId": "registers",
    "kind": "review",
    "index": 76
  },
  {
    "id": "record-macro",
    "group": "Macros",
    "title": "Record a Macro",
    "keys": [
      "q",
      "a"
    ],
    "moduleId": "macros",
    "kind": "practice",
    "index": 77
  },
  {
    "id": "replay-macro",
    "group": "Macros",
    "title": "Replay a Macro",
    "keys": [
      "@",
      "a"
    ],
    "moduleId": "macros",
    "kind": "practice",
    "index": 78
  },
  {
    "id": "repeat-macro",
    "group": "Macros",
    "title": "Repeat the Latest Macro",
    "keys": [
      "@",
      "@"
    ],
    "moduleId": "macros",
    "kind": "practice",
    "index": 79
  },
  {
    "id": "macro-with-count",
    "group": "Macros",
    "title": "Run a Macro with a Count",
    "keys": [
      "10",
      "@",
      "a"
    ],
    "moduleId": "macros",
    "kind": "practice",
    "index": 80
  },
  {
    "id": "macros-review",
    "group": "Macros",
    "title": "Macros Review",
    "keys": [
      "q",
      "a",
      "@",
      "10"
    ],
    "moduleId": "macros",
    "kind": "review",
    "index": 81
  },
  {
    "id": "block-insert",
    "group": "Advanced Visual Block",
    "title": "Insert Across Lines",
    "keys": [
      "Ctrl+v",
      "I",
      "Esc"
    ],
    "moduleId": "advanced-visual-block",
    "kind": "practice",
    "index": 82
  },
  {
    "id": "block-append",
    "group": "Advanced Visual Block",
    "title": "Append Across Lines",
    "keys": [
      "Ctrl+v",
      "A",
      "Esc"
    ],
    "moduleId": "advanced-visual-block",
    "kind": "practice",
    "index": 83
  },
  {
    "id": "block-replace",
    "group": "Advanced Visual Block",
    "title": "Replace a Block",
    "keys": [
      "Ctrl+v",
      "r"
    ],
    "moduleId": "advanced-visual-block",
    "kind": "practice",
    "index": 84
  },
  {
    "id": "advanced-visual-block-review",
    "group": "Advanced Visual Block",
    "title": "Advanced Visual Block Review",
    "keys": [
      "Ctrl+v",
      "I",
      "Esc",
      "A",
      "r"
    ],
    "moduleId": "advanced-visual-block",
    "kind": "review",
    "index": 85
  },
  {
    "id": "jump-list",
    "group": "Jump & Change History",
    "title": "Jump Back and Forward",
    "keys": [
      "Ctrl+o",
      "Ctrl+i"
    ],
    "moduleId": "jump-and-change-history",
    "kind": "practice",
    "index": 86
  },
  {
    "id": "change-list",
    "group": "Jump & Change History",
    "title": "Navigate Recent Changes",
    "keys": [
      "g;",
      "g,"
    ],
    "moduleId": "jump-and-change-history",
    "kind": "practice",
    "index": 87
  },
  {
    "id": "matching-pair",
    "group": "Jump & Change History",
    "title": "Jump to a Matching Pair",
    "keys": [
      "%"
    ],
    "moduleId": "jump-and-change-history",
    "kind": "practice",
    "index": 88
  },
  {
    "id": "last-edit",
    "group": "Jump & Change History",
    "title": "Return to the Last Edit",
    "keys": [
      "`."
    ],
    "moduleId": "jump-and-change-history",
    "kind": "practice",
    "index": 89
  },
  {
    "id": "set-mark",
    "group": "Jump & Change History",
    "title": "Set a Mark",
    "keys": [
      "m",
      "a"
    ],
    "moduleId": "jump-and-change-history",
    "kind": "practice",
    "index": 90
  },
  {
    "id": "return-mark",
    "group": "Jump & Change History",
    "title": "Return to a Mark",
    "keys": [
      "`a",
      "'a"
    ],
    "moduleId": "jump-and-change-history",
    "kind": "practice",
    "index": 91
  },
  {
    "id": "jump-change-history-review",
    "group": "Jump & Change History",
    "title": "Jump & Change History Review",
    "keys": [
      "Ctrl+o",
      "Ctrl+i",
      "g;",
      "g,",
      "%",
      "`.",
      "m",
      "a",
      "`a",
      "'a"
    ],
    "moduleId": "jump-and-change-history",
    "kind": "review",
    "index": 92
  },
  {
    "id": "substitute-once",
    "group": "Substitution",
    "title": "Replace Once",
    "keys": [
      ":s",
      "Enter"
    ],
    "moduleId": "substitution",
    "kind": "practice",
    "index": 93
  },
  {
    "id": "substitute-file",
    "group": "Substitution",
    "title": "Replace Throughout a File",
    "keys": [
      ":%s",
      "g"
    ],
    "moduleId": "substitution",
    "kind": "practice",
    "index": 94
  },
  {
    "id": "confirm-substitution",
    "group": "Substitution",
    "title": "Confirm Replacements",
    "keys": [
      ":%s",
      "gc"
    ],
    "moduleId": "substitution",
    "kind": "practice",
    "index": 95
  },
  {
    "id": "reuse-search",
    "group": "Substitution",
    "title": "Reuse the Previous Search",
    "keys": [
      ":%s//",
      "g"
    ],
    "moduleId": "substitution",
    "kind": "practice",
    "index": 96
  },
  {
    "id": "substitution-review",
    "group": "Substitution",
    "title": "Substitution Review",
    "keys": [
      ":s",
      "Enter",
      ":%s",
      "g",
      "gc",
      ":%s//"
    ],
    "moduleId": "substitution",
    "kind": "review",
    "index": 97
  },
  {
    "id": "parentheses-objects",
    "group": "Additional Text Objects",
    "title": "Parentheses",
    "keys": [
      "i(",
      "a("
    ],
    "moduleId": "additional-text-objects",
    "kind": "practice",
    "index": 98
  },
  {
    "id": "square-bracket-objects",
    "group": "Additional Text Objects",
    "title": "Square Brackets",
    "keys": [
      "i[",
      "a["
    ],
    "moduleId": "additional-text-objects",
    "kind": "practice",
    "index": 99
  },
  {
    "id": "tag-objects",
    "group": "Additional Text Objects",
    "title": "HTML and JSX Tags",
    "keys": [
      "it",
      "at"
    ],
    "moduleId": "additional-text-objects",
    "kind": "practice",
    "index": 100
  },
  {
    "id": "sentence-objects",
    "group": "Additional Text Objects",
    "title": "Sentences",
    "keys": [
      "is",
      "as"
    ],
    "moduleId": "additional-text-objects",
    "kind": "practice",
    "index": 101
  },
  {
    "id": "additional-text-objects-review",
    "group": "Additional Text Objects",
    "title": "Additional Text Objects Review",
    "keys": [
      "i(",
      "a(",
      "i[",
      "a[",
      "it",
      "at",
      "is",
      "as"
    ],
    "moduleId": "additional-text-objects",
    "kind": "review",
    "index": 102
  },
  {
    "id": "rename-symbol",
    "group": "Practical LSP Actions",
    "title": "Rename a Symbol",
    "keys": [
      "g",
      "r",
      "n"
    ],
    "moduleId": "practical-lsp-actions",
    "kind": "practice",
    "index": 103
  },
  {
    "id": "find-references",
    "group": "Practical LSP Actions",
    "title": "Find References",
    "keys": [
      "g",
      "r",
      "r"
    ],
    "moduleId": "practical-lsp-actions",
    "kind": "practice",
    "index": 104
  },
  {
    "id": "code-actions",
    "group": "Practical LSP Actions",
    "title": "Code Actions",
    "keys": [
      "g",
      "r",
      "a"
    ],
    "moduleId": "practical-lsp-actions",
    "kind": "practice",
    "index": 105
  },
  {
    "id": "signature-help",
    "group": "Practical LSP Actions",
    "title": "Signature Help",
    "keys": [
      "Ctrl+s"
    ],
    "moduleId": "practical-lsp-actions",
    "kind": "practice",
    "index": 106
  },
  {
    "id": "practical-lsp-actions-review",
    "group": "Practical LSP Actions",
    "title": "Practical LSP Actions Review",
    "keys": [
      "g",
      "r",
      "n",
      "a",
      "Ctrl+s"
    ],
    "moduleId": "practical-lsp-actions",
    "kind": "review",
    "index": 107
  },
  {
    "id": "save-file",
    "group": "Files & Command Line",
    "title": "Save and Keep Editing",
    "keys": [
      ":w",
      "Enter"
    ],
    "moduleId": "files-and-command-line",
    "kind": "practice",
    "index": 108
  },
  {
    "id": "save-and-exit",
    "group": "Files & Command Line",
    "title": "Save or Exit Safely",
    "keys": [
      ":wq",
      ":q",
      ":q!"
    ],
    "moduleId": "files-and-command-line",
    "kind": "practice",
    "index": 109
  },
  {
    "id": "files-command-line-review",
    "group": "Files & Command Line",
    "title": "Files & Command Line Review",
    "keys": [
      ":w",
      "Enter",
      ":wq",
      ":q",
      ":q!"
    ],
    "moduleId": "files-and-command-line",
    "kind": "review",
    "index": 110
  },
  {
    "id": "workspace-model",
    "group": "Windows, Buffers & Tabs",
    "title": "Buffers, windows, and tab pages",
    "keys": [
      ":ls",
      ":tabs"
    ],
    "moduleId": "windows-buffers-and-tabs",
    "kind": "practice",
    "index": 111
  },
  {
    "id": "open-splits",
    "group": "Windows, Buffers & Tabs",
    "title": "Open horizontal and vertical splits",
    "keys": [
      "Ctrl+w s",
      "Ctrl+w v"
    ],
    "moduleId": "windows-buffers-and-tabs",
    "kind": "practice",
    "index": 112
  },
  {
    "id": "splits",
    "group": "Windows, Buffers & Tabs",
    "title": "Navigate splits",
    "keys": [
      "Ctrl+h",
      "Ctrl+j",
      "Ctrl+k",
      "Ctrl+l"
    ],
    "moduleId": "windows-buffers-and-tabs",
    "kind": "practice",
    "index": 113
  },
  {
    "id": "resize-splits",
    "group": "Windows, Buffers & Tabs",
    "title": "Resize and equalize splits",
    "keys": [
      "Ctrl+w =",
      "Ctrl+w +",
      "Ctrl+w -",
      "Ctrl+w <",
      "Ctrl+w >"
    ],
    "moduleId": "windows-buffers-and-tabs",
    "kind": "practice",
    "index": 114
  },
  {
    "id": "close-splits",
    "group": "Windows, Buffers & Tabs",
    "title": "Close windows safely",
    "keys": [
      "Ctrl+w c",
      "Ctrl+w o"
    ],
    "moduleId": "windows-buffers-and-tabs",
    "kind": "practice",
    "index": 115
  },
  {
    "id": "buffers",
    "group": "Windows, Buffers & Tabs",
    "title": "Manage tabufline buffers",
    "keys": [
      "Space b",
      "Tab",
      "Shift+Tab",
      "Space x"
    ],
    "moduleId": "windows-buffers-and-tabs",
    "kind": "practice",
    "index": 116
  },
  {
    "id": "tab-pages",
    "group": "Windows, Buffers & Tabs",
    "title": "Work with native tab pages",
    "keys": [
      ":tabnew",
      "gt",
      "gT",
      ":tabclose"
    ],
    "moduleId": "windows-buffers-and-tabs",
    "kind": "practice",
    "index": 117
  },
  {
    "id": "windows-buffers-tabs-review",
    "group": "Windows, Buffers & Tabs",
    "title": "Windows, Buffers & Tabs Review",
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
    "moduleId": "windows-buffers-and-tabs",
    "kind": "review",
    "index": 118
  },
  {
    "id": "new-terminal-splits",
    "group": "Terminal Workflow",
    "title": "Create split terminals",
    "keys": [
      "Space h",
      "Space v"
    ],
    "moduleId": "terminal-workflow",
    "kind": "practice",
    "index": 119
  },
  {
    "id": "toggle-terminal-splits",
    "group": "Terminal Workflow",
    "title": "Toggle reusable split terminals",
    "keys": [
      "Alt+h",
      "Alt+v"
    ],
    "moduleId": "terminal-workflow",
    "kind": "practice",
    "index": 120
  },
  {
    "id": "terminal",
    "group": "Terminal Workflow",
    "title": "Toggle a floating terminal",
    "keys": [
      "Alt+i"
    ],
    "moduleId": "terminal-workflow",
    "kind": "practice",
    "index": 121
  },
  {
    "id": "terminal-mode",
    "group": "Terminal Workflow",
    "title": "Control Terminal mode",
    "keys": [
      "i",
      "Ctrl+x"
    ],
    "moduleId": "terminal-workflow",
    "kind": "practice",
    "index": 122
  },
  {
    "id": "recover-terminals",
    "group": "Terminal Workflow",
    "title": "Recover a hidden terminal",
    "keys": [
      "Space pt"
    ],
    "moduleId": "terminal-workflow",
    "kind": "practice",
    "index": 123
  },
  {
    "id": "end-terminal",
    "group": "Terminal Workflow",
    "title": "End or close a terminal",
    "keys": [
      "exit",
      "Ctrl+x",
      "Space x"
    ],
    "moduleId": "terminal-workflow",
    "kind": "practice",
    "index": 124
  },
  {
    "id": "terminal-workflow-review",
    "group": "Terminal Workflow",
    "title": "Terminal Workflow Review",
    "keys": [
      "Space h",
      "Space v",
      "Alt+h",
      "Alt+v",
      "Alt+i",
      "i",
      "Ctrl+x",
      "Space pt",
      "exit",
      "Space x"
    ],
    "moduleId": "terminal-workflow",
    "kind": "review",
    "index": 125
  },
  {
    "id": "file-tree",
    "group": "NvimTree Navigation",
    "title": "Toggle or focus the project tree",
    "keys": [
      "Ctrl+n",
      "Space e"
    ],
    "moduleId": "nvimtree-navigation",
    "kind": "practice",
    "index": 126
  },
  {
    "id": "tree-open-nodes",
    "group": "NvimTree Navigation",
    "title": "Navigate and open tree nodes",
    "keys": [
      "Enter",
      "o",
      "P",
      "-"
    ],
    "moduleId": "nvimtree-navigation",
    "kind": "practice",
    "index": 127
  },
  {
    "id": "tree-open-layout",
    "group": "NvimTree Navigation",
    "title": "Open files into layouts",
    "keys": [
      "Ctrl+v",
      "Ctrl+x",
      "Ctrl+t",
      "Tab"
    ],
    "moduleId": "nvimtree-navigation",
    "kind": "practice",
    "index": 128
  },
  {
    "id": "tree-find-help",
    "group": "NvimTree Navigation",
    "title": "Filter and inspect the tree",
    "keys": [
      "f",
      "F",
      "g?"
    ],
    "moduleId": "nvimtree-navigation",
    "kind": "practice",
    "index": 129
  },
  {
    "id": "nvimtree-navigation-review",
    "group": "NvimTree Navigation",
    "title": "NvimTree Navigation Review",
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
    "moduleId": "nvimtree-navigation",
    "kind": "review",
    "index": 130
  },
  {
    "id": "tree-create",
    "group": "NvimTree File Operations",
    "title": "Create files and directories",
    "keys": [
      "a"
    ],
    "moduleId": "nvimtree-file-operations",
    "kind": "practice",
    "index": 131
  },
  {
    "id": "tree-rename",
    "group": "NvimTree File Operations",
    "title": "Rename tree items",
    "keys": [
      "r",
      "e"
    ],
    "moduleId": "nvimtree-file-operations",
    "kind": "practice",
    "index": 132
  },
  {
    "id": "tree-copy-move",
    "group": "NvimTree File Operations",
    "title": "Copy or move tree items",
    "keys": [
      "c",
      "x",
      "p"
    ],
    "moduleId": "nvimtree-file-operations",
    "kind": "practice",
    "index": 133
  },
  {
    "id": "tree-delete",
    "group": "NvimTree File Operations",
    "title": "Delete or trash tree items",
    "keys": [
      "d",
      "D"
    ],
    "moduleId": "nvimtree-file-operations",
    "kind": "practice",
    "index": 134
  },
  {
    "id": "tree-edit-workflow",
    "group": "NvimTree File Operations",
    "title": "Create, edit, and save a file",
    "keys": [
      "Enter",
      "i",
      "Esc",
      "Ctrl+s"
    ],
    "moduleId": "nvimtree-file-operations",
    "kind": "practice",
    "index": 135
  },
  {
    "id": "nvimtree-file-operations-review",
    "group": "NvimTree File Operations",
    "title": "NvimTree File Operations Review",
    "keys": [
      "a",
      "r",
      "e",
      "c",
      "x",
      "p",
      "d",
      "D",
      "Enter",
      "i",
      "Esc",
      "Ctrl+s"
    ],
    "moduleId": "nvimtree-file-operations",
    "kind": "review",
    "index": 136
  },
  {
    "id": "git-plugin-setup",
    "group": "Git Workflows",
    "title": "Prepare Gitsigns and LazyGit",
    "keys": [
      ":Lazy"
    ],
    "moduleId": "git-workflows",
    "kind": "practice",
    "index": 137
  },
  {
    "id": "gitsigns-navigate",
    "group": "Git Workflows",
    "title": "Navigate changed hunks",
    "keys": [
      "]c",
      "[c"
    ],
    "moduleId": "git-workflows",
    "kind": "practice",
    "index": 138
  },
  {
    "id": "gitsigns-preview",
    "group": "Git Workflows",
    "title": "Preview and select a hunk",
    "keys": [
      "Space hp",
      "ih"
    ],
    "moduleId": "git-workflows",
    "kind": "practice",
    "index": 139
  },
  {
    "id": "gitsigns-hunk-actions",
    "group": "Git Workflows",
    "title": "Stage or reset one hunk",
    "keys": [
      "Space hs",
      "Space hr"
    ],
    "moduleId": "git-workflows",
    "kind": "practice",
    "index": 140
  },
  {
    "id": "gitsigns-buffer-actions",
    "group": "Git Workflows",
    "title": "Stage or reset a buffer",
    "keys": [
      "Space hS",
      "Space hR"
    ],
    "moduleId": "git-workflows",
    "kind": "practice",
    "index": 141
  },
  {
    "id": "gitsigns-inspect",
    "group": "Git Workflows",
    "title": "Inspect blame and diffs",
    "keys": [
      "Space hb",
      "Space hd"
    ],
    "moduleId": "git-workflows",
    "kind": "practice",
    "index": 142
  },
  {
    "id": "lazygit-launch",
    "group": "Git Workflows",
    "title": "Launch LazyGit",
    "keys": [
      ":LazyGit"
    ],
    "moduleId": "git-workflows",
    "kind": "practice",
    "index": 143
  },
  {
    "id": "lazygit-stage-commit",
    "group": "Git Workflows",
    "title": "Stage and commit in LazyGit",
    "keys": [
      "Space",
      "a",
      "c"
    ],
    "moduleId": "git-workflows",
    "kind": "practice",
    "index": 144
  },
  {
    "id": "lazygit-sync-stash",
    "group": "Git Workflows",
    "title": "Sync and stash in LazyGit",
    "keys": [
      "p",
      "P",
      "S",
      "q"
    ],
    "moduleId": "git-workflows",
    "kind": "practice",
    "index": 145
  },
  {
    "id": "git-workflows-review",
    "group": "Git Workflows",
    "title": "Git Workflows Review",
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
    "moduleId": "git-workflows",
    "kind": "review",
    "index": 146
  },
  {
    "id": "completion-navigate",
    "group": "Completion & Snippets",
    "title": "Navigate completion suggestions",
    "keys": [
      "Ctrl+n",
      "Ctrl+p"
    ],
    "moduleId": "completion-and-snippets",
    "kind": "practice",
    "index": 147
  },
  {
    "id": "completion-docs",
    "group": "Completion & Snippets",
    "title": "Read completion documentation",
    "keys": [
      "Ctrl+d",
      "Ctrl+f"
    ],
    "moduleId": "completion-and-snippets",
    "kind": "practice",
    "index": 148
  },
  {
    "id": "completion-open-close",
    "group": "Completion & Snippets",
    "title": "Open or cancel completion",
    "keys": [
      "Ctrl+Space",
      "Ctrl+e"
    ],
    "moduleId": "completion-and-snippets",
    "kind": "practice",
    "index": 149
  },
  {
    "id": "completion-confirm",
    "group": "Completion & Snippets",
    "title": "Confirm a completion",
    "keys": [
      "Enter"
    ],
    "moduleId": "completion-and-snippets",
    "kind": "practice",
    "index": 150
  },
  {
    "id": "snippet-stops",
    "group": "Completion & Snippets",
    "title": "Move through snippet placeholders",
    "keys": [
      "Tab",
      "Shift+Tab"
    ],
    "moduleId": "completion-and-snippets",
    "kind": "practice",
    "index": 151
  },
  {
    "id": "tab-context",
    "group": "Completion & Snippets",
    "title": "Know what Tab will do",
    "keys": [
      "Tab",
      "Shift+Tab"
    ],
    "moduleId": "completion-and-snippets",
    "kind": "practice",
    "index": 152
  },
  {
    "id": "completion-snippets-review",
    "group": "Completion & Snippets",
    "title": "Completion & Snippets Review",
    "keys": [
      "Ctrl+n",
      "Ctrl+p",
      "Ctrl+d",
      "Ctrl+f",
      "Ctrl+Space",
      "Ctrl+e",
      "Enter",
      "Tab",
      "Shift+Tab"
    ],
    "moduleId": "completion-and-snippets",
    "kind": "review",
    "index": 153
  },
  {
    "id": "diagnostics",
    "group": "Diagnostics & Quickfix",
    "title": "Navigate diagnostics",
    "keys": [
      "[d",
      "]d"
    ],
    "moduleId": "diagnostics-and-quickfix",
    "kind": "practice",
    "index": 154
  },
  {
    "id": "diagnostic-details",
    "group": "Diagnostics & Quickfix",
    "title": "Inspect the current diagnostic",
    "keys": [
      ":lua vim.diagnostic.open_float()"
    ],
    "moduleId": "diagnostics-and-quickfix",
    "kind": "practice",
    "index": 155
  },
  {
    "id": "diagnostic-location-list",
    "group": "Diagnostics & Quickfix",
    "title": "Collect diagnostics in a location list",
    "keys": [
      "Space ds"
    ],
    "moduleId": "diagnostics-and-quickfix",
    "kind": "practice",
    "index": 156
  },
  {
    "id": "quickfix-list",
    "group": "Diagnostics & Quickfix",
    "title": "Navigate a quickfix list",
    "keys": [
      ":copen",
      ":cnext",
      ":cprev",
      ":cclose"
    ],
    "moduleId": "diagnostics-and-quickfix",
    "kind": "practice",
    "index": 157
  },
  {
    "id": "location-list",
    "group": "Diagnostics & Quickfix",
    "title": "Navigate a location list",
    "keys": [
      ":lopen",
      ":lnext",
      ":lprev",
      ":lclose"
    ],
    "moduleId": "diagnostics-and-quickfix",
    "kind": "practice",
    "index": 158
  },
  {
    "id": "diagnostic-code-action",
    "group": "Diagnostics & Quickfix",
    "title": "Fix a diagnostic with a code action",
    "keys": [
      "]d",
      "gra"
    ],
    "moduleId": "diagnostics-and-quickfix",
    "kind": "practice",
    "index": 159
  },
  {
    "id": "trouble-setup",
    "group": "Diagnostics & Quickfix",
    "title": "Add Trouble optionally",
    "keys": [
      ":Lazy"
    ],
    "moduleId": "diagnostics-and-quickfix",
    "kind": "practice",
    "index": 160
  },
  {
    "id": "trouble-diagnostics",
    "group": "Diagnostics & Quickfix",
    "title": "Browse diagnostics with Trouble",
    "keys": [
      "Space xx",
      "Space xX"
    ],
    "moduleId": "diagnostics-and-quickfix",
    "kind": "practice",
    "index": 161
  },
  {
    "id": "trouble-lists",
    "group": "Diagnostics & Quickfix",
    "title": "Open lists with Trouble",
    "keys": [
      "Space xQ",
      "Space xL"
    ],
    "moduleId": "diagnostics-and-quickfix",
    "kind": "practice",
    "index": 162
  },
  {
    "id": "trouble-navigation",
    "group": "Diagnostics & Quickfix",
    "title": "Inspect Trouble results",
    "keys": [
      "Enter",
      "Ctrl+s",
      "Ctrl+v",
      "p",
      "q"
    ],
    "moduleId": "diagnostics-and-quickfix",
    "kind": "practice",
    "index": 163
  },
  {
    "id": "diagnostics-quickfix-review",
    "group": "Diagnostics & Quickfix",
    "title": "Diagnostics & Quickfix Review",
    "keys": [
      "[d",
      "]d",
      ":lua vim.diagnostic.open_float()",
      "Space ds",
      ":copen",
      ":cnext",
      ":cprev",
      ":cclose",
      ":lopen",
      ":lnext",
      ":lprev",
      ":lclose",
      "gra",
      ":Lazy",
      "Space xx",
      "Space xX",
      "Space xQ",
      "Space xL",
      "Enter",
      "Ctrl+s",
      "Ctrl+v",
      "p",
      "q"
    ],
    "moduleId": "diagnostics-and-quickfix",
    "kind": "review",
    "index": 164
  },
  {
    "id": "find-files",
    "group": "Telescope Workflows",
    "title": "Find any file",
    "keys": [
      "Space ff"
    ],
    "moduleId": "telescope-workflows",
    "kind": "practice",
    "index": 165
  },
  {
    "id": "live-grep",
    "group": "Telescope Workflows",
    "title": "Search the whole project",
    "keys": [
      "Space fw"
    ],
    "moduleId": "telescope-workflows",
    "kind": "practice",
    "index": 166
  },
  {
    "id": "telescope-hidden-files",
    "group": "Telescope Workflows",
    "title": "Search hidden and ignored files",
    "keys": [
      "Space fa"
    ],
    "moduleId": "telescope-workflows",
    "kind": "practice",
    "index": 167
  },
  {
    "id": "telescope-buffers",
    "group": "Telescope Workflows",
    "title": "Switch through open buffers",
    "keys": [
      "Space fb"
    ],
    "moduleId": "telescope-workflows",
    "kind": "practice",
    "index": 168
  },
  {
    "id": "telescope-history-help",
    "group": "Telescope Workflows",
    "title": "Find help, history, and marks",
    "keys": [
      "Space fh",
      "Space fo",
      "Space ma"
    ],
    "moduleId": "telescope-workflows",
    "kind": "practice",
    "index": 169
  },
  {
    "id": "telescope-git-buffer",
    "group": "Telescope Workflows",
    "title": "Search Git and the current buffer",
    "keys": [
      "Space gt",
      "Space cm",
      "Space fz"
    ],
    "moduleId": "telescope-workflows",
    "kind": "practice",
    "index": 170
  },
  {
    "id": "telescope-picker-navigation",
    "group": "Telescope Workflows",
    "title": "Navigate a Telescope picker",
    "keys": [
      "Ctrl+n",
      "Ctrl+p",
      "Enter",
      "Ctrl+c"
    ],
    "moduleId": "telescope-workflows",
    "kind": "practice",
    "index": 171
  },
  {
    "id": "telescope-picker-layouts",
    "group": "Telescope Workflows",
    "title": "Open picker results into layouts",
    "keys": [
      "Ctrl+x",
      "Ctrl+v",
      "Ctrl+t"
    ],
    "moduleId": "telescope-workflows",
    "kind": "practice",
    "index": 172
  },
  {
    "id": "telescope-multi-select",
    "group": "Telescope Workflows",
    "title": "Send several results onward",
    "keys": [
      "Tab",
      "Shift+Tab",
      "Ctrl+q"
    ],
    "moduleId": "telescope-workflows",
    "kind": "practice",
    "index": 173
  },
  {
    "id": "telescope-workflows-review",
    "group": "Telescope Workflows",
    "title": "Telescope Workflows Review",
    "keys": [
      "Space ff",
      "Space fw",
      "Space fa",
      "Space fb",
      "Space fh",
      "Space fo",
      "Space ma",
      "Space gt",
      "Space cm",
      "Space fz",
      "Ctrl+n",
      "Ctrl+p",
      "Enter",
      "Ctrl+c",
      "Ctrl+x",
      "Ctrl+v",
      "Ctrl+t",
      "Tab",
      "Shift+Tab",
      "Ctrl+q"
    ],
    "moduleId": "telescope-workflows",
    "kind": "review",
    "index": 174
  },
  {
    "id": "refactor-understand-symbol",
    "group": "LSP Refactoring",
    "title": "Understand a symbol before editing",
    "keys": [
      "gd",
      "grr",
      "K"
    ],
    "moduleId": "lsp-refactoring",
    "kind": "practice",
    "index": 175
  },
  {
    "id": "refactor-rename-fix",
    "group": "LSP Refactoring",
    "title": "Rename and apply a code action",
    "keys": [
      "grn",
      "gra"
    ],
    "moduleId": "lsp-refactoring",
    "kind": "practice",
    "index": 176
  },
  {
    "id": "refactor-verify",
    "group": "LSP Refactoring",
    "title": "Verify a refactor",
    "keys": [
      "Space fm",
      "]d",
      "grr"
    ],
    "moduleId": "lsp-refactoring",
    "kind": "practice",
    "index": 177
  },
  {
    "id": "lsp-refactoring-review",
    "group": "LSP Refactoring",
    "title": "LSP Refactoring Review",
    "keys": [
      "gd",
      "grr",
      "K",
      "grn",
      "gra",
      "Space fm",
      "]d"
    ],
    "moduleId": "lsp-refactoring",
    "kind": "review",
    "index": 178
  },
  {
    "id": "working-directory",
    "group": "Sessions & Project Navigation",
    "title": "Inspect and change the working directory",
    "keys": [
      ":pwd",
      ":cd path"
    ],
    "moduleId": "sessions-and-project-navigation",
    "kind": "practice",
    "index": 179
  },
  {
    "id": "scoped-directories",
    "group": "Sessions & Project Navigation",
    "title": "Scope directories to a window or tab",
    "keys": [
      ":lcd path",
      ":tcd path"
    ],
    "moduleId": "sessions-and-project-navigation",
    "kind": "practice",
    "index": 180
  },
  {
    "id": "save-session",
    "group": "Sessions & Project Navigation",
    "title": "Save and restore a session",
    "keys": [
      ":mksession! Session.vim",
      ":source Session.vim"
    ],
    "moduleId": "sessions-and-project-navigation",
    "kind": "practice",
    "index": 181
  },
  {
    "id": "argument-list",
    "group": "Sessions & Project Navigation",
    "title": "Navigate an argument list",
    "keys": [
      ":args",
      ":argadd path",
      ":next",
      ":previous"
    ],
    "moduleId": "sessions-and-project-navigation",
    "kind": "practice",
    "index": 182
  },
  {
    "id": "alternate-file",
    "group": "Sessions & Project Navigation",
    "title": "Jump to the alternate file",
    "keys": [
      "Ctrl+^"
    ],
    "moduleId": "sessions-and-project-navigation",
    "kind": "practice",
    "index": 183
  },
  {
    "id": "resume-project",
    "group": "Sessions & Project Navigation",
    "title": "Resume recent project work",
    "keys": [
      "Space fo",
      ":cd path"
    ],
    "moduleId": "sessions-and-project-navigation",
    "kind": "practice",
    "index": 184
  },
  {
    "id": "sessions-project-navigation-review",
    "group": "Sessions & Project Navigation",
    "title": "Sessions & Project Navigation Review",
    "keys": [
      ":pwd",
      ":cd path",
      ":lcd path",
      ":tcd path",
      ":mksession! Session.vim",
      ":source Session.vim",
      ":args",
      ":argadd path",
      ":next",
      ":previous",
      "Ctrl+^",
      "Space fo"
    ],
    "moduleId": "sessions-and-project-navigation",
    "kind": "review",
    "index": 185
  },
  {
    "id": "git-partial-hunk",
    "group": "Advanced Git Workflows",
    "title": "Stage part of a hunk",
    "keys": [
      "v",
      "Space hs",
      "Space hr"
    ],
    "moduleId": "advanced-git-workflows",
    "kind": "practice",
    "index": 186
  },
  {
    "id": "git-staged-diffs",
    "group": "Advanced Git Workflows",
    "title": "Compare staged and unstaged work",
    "keys": [
      "Space hd",
      "Space hD"
    ],
    "moduleId": "advanced-git-workflows",
    "kind": "practice",
    "index": 187
  },
  {
    "id": "git-undo-stage",
    "group": "Advanced Git Workflows",
    "title": "Undo the latest hunk stage",
    "keys": [
      "Space hu",
      ":Gitsigns undo_stage_hunk"
    ],
    "moduleId": "advanced-git-workflows",
    "kind": "practice",
    "index": 188
  },
  {
    "id": "lazygit-conflicts",
    "group": "Advanced Git Workflows",
    "title": "Resolve merge conflicts in LazyGit",
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
    "moduleId": "advanced-git-workflows",
    "kind": "practice",
    "index": 189
  },
  {
    "id": "lazygit-amend",
    "group": "Advanced Git Workflows",
    "title": "Amend a commit safely",
    "keys": [
      "A"
    ],
    "moduleId": "advanced-git-workflows",
    "kind": "practice",
    "index": 190
  },
  {
    "id": "lazygit-undo-redo",
    "group": "Advanced Git Workflows",
    "title": "Undo or redo repository actions",
    "keys": [
      "z",
      "Z"
    ],
    "moduleId": "advanced-git-workflows",
    "kind": "practice",
    "index": 191
  },
  {
    "id": "advanced-git-workflows-review",
    "group": "Advanced Git Workflows",
    "title": "Advanced Git Workflows Review",
    "keys": [
      "v",
      "Space hs",
      "Space hr",
      "Space hd",
      "Space hD",
      "Space hu",
      ":Gitsigns undo_stage_hunk",
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
    "moduleId": "advanced-git-workflows",
    "kind": "review",
    "index": 192
  },
  {
    "id": "discover-help",
    "group": "Command Discovery",
    "title": "Read built-in help",
    "keys": [
      ":help topic",
      "Ctrl+]",
      "Ctrl+o"
    ],
    "moduleId": "command-discovery",
    "kind": "practice",
    "index": 193
  },
  {
    "id": "discover-maps",
    "group": "Command Discovery",
    "title": "Inspect active mappings",
    "keys": [
      ":map",
      ":nmap",
      ":imap"
    ],
    "moduleId": "command-discovery",
    "kind": "practice",
    "index": 194
  },
  {
    "id": "discover-map-source",
    "group": "Command Discovery",
    "title": "Find who defined a mapping",
    "keys": [
      ":verbose map {key}"
    ],
    "moduleId": "command-discovery",
    "kind": "practice",
    "index": 195
  },
  {
    "id": "discover-whichkey",
    "group": "Command Discovery",
    "title": "Browse mappings with WhichKey",
    "keys": [
      "Space wK",
      "Space wk"
    ],
    "moduleId": "command-discovery",
    "kind": "practice",
    "index": 196
  },
  {
    "id": "discover-nvcheatsheet",
    "group": "Command Discovery",
    "title": "Open NvCheatsheet",
    "keys": [
      "Space ch"
    ],
    "moduleId": "command-discovery",
    "kind": "practice",
    "index": 197
  },
  {
    "id": "discover-plugin-help",
    "group": "Command Discovery",
    "title": "Ask the active plugin",
    "keys": [
      "g?",
      "?"
    ],
    "moduleId": "command-discovery",
    "kind": "practice",
    "index": 198
  },
  {
    "id": "discover-provenance",
    "group": "Command Discovery",
    "title": "Classify a shortcut",
    "keys": [
      ":verbose map {key}",
      "Space ch",
      "?"
    ],
    "moduleId": "command-discovery",
    "kind": "practice",
    "index": 199
  },
  {
    "id": "command-discovery-review",
    "group": "Command Discovery",
    "title": "Command Discovery Review",
    "keys": [
      ":help topic",
      "Ctrl+]",
      "Ctrl+o",
      ":map",
      ":nmap",
      ":imap",
      ":verbose map {key}",
      "Space wK",
      "Space wk",
      "Space ch",
      "g?",
      "?"
    ],
    "moduleId": "command-discovery",
    "kind": "review",
    "index": 200
  },
  {
    "id": "capstone-find-open",
    "group": "Multi-file Challenges",
    "title": "Find and open a symbol in a split",
    "keys": [
      "Space fw",
      "Ctrl+n",
      "Ctrl+v"
    ],
    "moduleId": "multi-file-challenges",
    "kind": "practice",
    "index": 201
  },
  {
    "id": "capstone-refactor",
    "group": "Multi-file Challenges",
    "title": "Refactor across several files",
    "keys": [
      "grn",
      "grr",
      "Space fm",
      "]d"
    ],
    "moduleId": "multi-file-challenges",
    "kind": "practice",
    "index": 202
  },
  {
    "id": "capstone-review-commit",
    "group": "Multi-file Challenges",
    "title": "Review and commit a refactor",
    "keys": [
      "Space hp",
      "Space hS",
      "Space gt",
      ":LazyGit",
      "c"
    ],
    "moduleId": "multi-file-challenges",
    "kind": "practice",
    "index": 203
  },
  {
    "id": "multi-file-challenges-review",
    "group": "Multi-file Challenges",
    "title": "Multi-file Challenges Review",
    "keys": [
      "Space fw",
      "Ctrl+n",
      "Ctrl+v",
      "grn",
      "grr",
      "Space fm",
      "]d",
      "Space hp",
      "Space hS",
      "Space gt",
      ":LazyGit",
      "c"
    ],
    "moduleId": "multi-file-challenges",
    "kind": "review",
    "index": 204
  },
  {
    "id": "themes",
    "group": "NVChad Workflow",
    "title": "Switch themes live",
    "keys": [
      "Space",
      "t",
      "h"
    ],
    "moduleId": "nvchad-workflow",
    "kind": "practice",
    "index": 205
  },
  {
    "id": "cheatsheet",
    "group": "NVChad Workflow",
    "title": "Ask NVChad",
    "keys": [
      "Space",
      "c",
      "h"
    ],
    "moduleId": "nvchad-workflow",
    "kind": "practice",
    "index": 206
  },
  {
    "id": "nvchad-workflow-review",
    "group": "NVChad Workflow",
    "title": "NVChad Workflow Review",
    "keys": [
      "Space",
      "t",
      "h",
      "c"
    ],
    "moduleId": "nvchad-workflow",
    "kind": "review",
    "index": 207
  },
  {
    "id": "lsp-definition",
    "group": "Coding Intelligence",
    "title": "Go to definition",
    "keys": [
      "g",
      "d"
    ],
    "moduleId": "coding-intelligence",
    "kind": "practice",
    "index": 208
  },
  {
    "id": "lsp-hover",
    "group": "Coding Intelligence",
    "title": "Inspect a symbol",
    "keys": [
      "K"
    ],
    "moduleId": "coding-intelligence",
    "kind": "practice",
    "index": 209
  },
  {
    "id": "format",
    "group": "Coding Intelligence",
    "title": "Format deliberately",
    "keys": [
      "Space",
      "f",
      "m"
    ],
    "moduleId": "coding-intelligence",
    "kind": "practice",
    "index": 210
  },
  {
    "id": "mason",
    "group": "Coding Intelligence",
    "title": "Install developer tools",
    "keys": [
      ":",
      "Mason"
    ],
    "moduleId": "coding-intelligence",
    "kind": "practice",
    "index": 211
  },
  {
    "id": "coding-intelligence-review",
    "group": "Coding Intelligence",
    "title": "Coding Intelligence Review",
    "keys": [
      "g",
      "d",
      "K",
      "Space",
      "f",
      "m",
      ":",
      "Mason"
    ],
    "moduleId": "coding-intelligence",
    "kind": "review",
    "index": 212
  },
  {
    "id": "custom-maps",
    "group": "Configure NVChad",
    "title": "Create a mapping",
    "keys": [
      "vim.keymap.set"
    ],
    "moduleId": "configure-nvchad",
    "kind": "practice",
    "index": 213
  },
  {
    "id": "plugins",
    "group": "Configure NVChad",
    "title": "Extend plugins safely",
    "keys": [
      "lazy.nvim",
      "opts"
    ],
    "moduleId": "configure-nvchad",
    "kind": "practice",
    "index": 214
  },
  {
    "id": "chadrc",
    "group": "Configure NVChad",
    "title": "Shape the interface",
    "keys": [
      "chadrc.lua"
    ],
    "moduleId": "configure-nvchad",
    "kind": "practice",
    "index": 215
  },
  {
    "id": "lsp-setup",
    "group": "Configure NVChad",
    "title": "Enable language servers",
    "keys": [
      "vim.lsp.enable"
    ],
    "moduleId": "configure-nvchad",
    "kind": "practice",
    "index": 216
  },
  {
    "id": "troubleshooting",
    "group": "Configure NVChad",
    "title": "Diagnose NVChad",
    "keys": [
      ":checkhealth",
      ":Lazy",
      ":Mason",
      ":messages"
    ],
    "moduleId": "configure-nvchad",
    "kind": "practice",
    "index": 217
  },
  {
    "id": "finish",
    "group": "Configure NVChad",
    "title": "The daily loop",
    "keys": [
      "Space ff",
      "gd",
      "ciw",
      "Space fm"
    ],
    "moduleId": "configure-nvchad",
    "kind": "practice",
    "index": 218
  },
  {
    "id": "configure-nvchad-review",
    "group": "Configure NVChad",
    "title": "Configure NVChad Review",
    "keys": [
      "vim.keymap.set",
      "lazy.nvim",
      "opts",
      "chadrc.lua",
      "vim.lsp.enable",
      ":checkhealth",
      ":Lazy",
      ":Mason",
      ":messages",
      "Space ff",
      "gd",
      "ciw",
      "Space fm"
    ],
    "moduleId": "configure-nvchad",
    "kind": "review",
    "index": 219
  }
] satisfies readonly LessonSummary[];

export const groups = [
  "Command Reference",
  "Vim Modes",
  "Basic Vim",
  "Insert Like a Pro",
  "Essential Motions",
  "Basic Operators",
  "Editing Safety",
  "Advanced Vertical Movement",
  "Search",
  "Text Objects - Bracket Pairs",
  "Text Objects - Quotes",
  "Text Objects - Words",
  "Text Objects - Paragraphs",
  "Text Objects - Mega Review",
  "Visual Editing",
  "Indent & Join",
  "Repeat Workflow",
  "Registers",
  "Macros",
  "Advanced Visual Block",
  "Jump & Change History",
  "Substitution",
  "Additional Text Objects",
  "Practical LSP Actions",
  "Files & Command Line",
  "Windows, Buffers & Tabs",
  "Terminal Workflow",
  "NvimTree Navigation",
  "NvimTree File Operations",
  "Git Workflows",
  "Completion & Snippets",
  "Diagnostics & Quickfix",
  "Telescope Workflows",
  "LSP Refactoring",
  "Sessions & Project Navigation",
  "Advanced Git Workflows",
  "Command Discovery",
  "Multi-file Challenges",
  "NVChad Workflow",
  "Coding Intelligence",
  "Configure NVChad"
] as const;
