import type { ReactNode } from "react";
import type { SnippetLanguage } from "../curriculum/schema";

const patterns = {
  javascript:
    /(\/\/[^\n]*|\/\*[\s\S]*?(?:\*\/|$))|('(?:\\.|[^'\\\n])*'|"(?:\\.|[^"\\\n])*"|`(?:\\[\s\S]|[^`\\])*`)|\b(0[xX][\da-fA-F]+|0[bB][01]+|0[oO][0-7]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?n?)\b|\b(async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|false|finally|for|from|function|if|import|in|instanceof|let|new|null|of|return|static|super|switch|this|throw|true|try|typeof|undefined|var|void|while|yield)\b|([\p{ID_Start}$_][\p{ID_Continue}$]*(?=\s*\())/gu,
  lua: /(--\[\[[\s\S]*?(?:\]\]|$)|--[^\n]*)|('(?:\\.|[^'\\\n])*'|"(?:\\.|[^"\\\n])*"|\[\[[\s\S]*?\]\])|\b(\d+(?:\.\d+)?)\b|\b(local|return|function|end|if|then|else|elseif|for|while|do|true|false|nil|and|or|not|in|repeat|until)\b|([a-zA-Z_][\w]*(?=\s*\())/g,
};

type HighlightOptions = {
  language?: SnippetLanguage;
  lines?: string[];
  lineIndex?: number;
  start?: number;
  end?: number;
};

// Tokenize with the whole buffer's context, then render only the requested range.
// A cursor in a string/comment must not change the highlighting on either side.
export function syntaxLine(
  line: string,
  options: HighlightOptions = {},
): ReactNode[] {
  const {
    language = "javascript",
    lines,
    lineIndex = 0,
    start = 0,
    end = line.length,
  } = options;
  if (language === "text") return [line.slice(start, end)];
  const source = lines ? lines.join("\n") : line;
  const offset = lines
    ? lines.slice(0, lineIndex).reduce((sum, item) => sum + item.length + 1, 0)
    : 0;
  const rangeStart = offset + start;
  const rangeEnd = offset + end;
  const parts: ReactNode[] = [];
  let cursor = rangeStart;
  for (const match of source.matchAll(patterns[language])) {
    const index = match.index;
    const tokenEnd = index + match[0].length;
    if (tokenEnd <= rangeStart) continue;
    if (index >= rangeEnd) break;
    const from = Math.max(index, rangeStart);
    const to = Math.min(tokenEnd, rangeEnd);
    if (from > cursor) parts.push(source.slice(cursor, from));
    const tone = match[1]
      ? "comment"
      : match[2]
        ? "string"
        : match[3]
          ? "number"
          : match[4]
            ? "keyword"
            : "call";
    parts.push(
      <span className={`code-token ${tone}`} key={`${from}-${to}`}>
        {source.slice(from, to)}
      </span>,
    );
    cursor = to;
  }
  if (cursor < rangeEnd) parts.push(source.slice(cursor, rangeEnd));
  return parts;
}
