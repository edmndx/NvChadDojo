# JavaScript curriculum migration — 2026-10-03

Converted programming snippets throughout the 220-lesson curriculum to JavaScript, including challenge buffers, drills, expanded key examples, category reviews, register seeds and authored formatting results. Preserved all lesson IDs, titles, key identities and ordering across the 41 groups.

Actual NvChad configuration remains Lua: custom mappings, plugin specifications, `chadrc`, LSP setup and their configuration review examples. File trees, terminal output, picker listings, diagnostics and other stock panels remain literal text. Language metadata follows each example's source context, including mixed-language reviews.

## Content and presentation

- JavaScript fixtures use declarations, semicolons, object property colons, arrays, function calls and JavaScript comments. Quote-object exercises retain the quote style they teach. Formatting and indentation exercises deliberately begin with valid but unformatted code.
- Insert and replacement exercises operate inside strings or insert complete statements, avoiding duplicate declarations and invalid demonstration results.
- Three LSP diagnostic fixtures intentionally retain actual JavaScript mistakes: a misspelled identifier and two incompatible assignments. Completion panels retain incomplete input because completing it is the exercise.
- Highlighting recognizes JavaScript declarations, comments, literals and calls. It uses the whole buffer's context before splitting around the cursor, preserving strings and multiline comments. Real Lua configuration uses Lua highlighting; stock panel text has no invented syntax tokens.
- The two authored JavaScript formatting results match installed Prettier with `parser: "babel"` and `singleQuote: true`. They are worked examples; the browser does not run a language server or formatter.
