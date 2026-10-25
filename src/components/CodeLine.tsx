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
  highlight?: HighlightBuffer;
};

type HighlightBuffer = {
  source: string;
  offsets: number[];
  tokens: { start: number; end: number; tone: string }[];
};

export function prepareHighlight(
  lines: string[],
  language: SnippetLanguage = "javascript",
): HighlightBuffer {
  const source = lines.join("\n");
  const offsets: number[] = [];
  let offset = 0;
  for (const line of lines) {
    offsets.push(offset);
    offset += line.length + 1;
  }
  const tokens =
    language === "text"
      ? []
      : Array.from(source.matchAll(patterns[language]), (match) => ({
          start: match.index,
          end: match.index + match[0].length,
          tone: match[1]
            ? "comment"
            : match[2]
              ? "string"
              : match[3]
                ? "number"
                : match[4]
                  ? "keyword"
                  : "call",
        }));
  return { source, offsets, tokens };
}

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
    highlight,
  } = options;
  if (language === "text") return [line.slice(start, end)];
  const { source, offsets, tokens } =
    highlight || prepareHighlight(lines || [line], language);
  const offset = lines
    ? (offsets[lineIndex] ??
      lines.slice(0, lineIndex).reduce((sum, item) => sum + item.length + 1, 0))
    : 0;
  const rangeStart = offset + start;
  const rangeEnd = offset + end;
  const parts: ReactNode[] = [];
  let cursor = rangeStart;
  for (const token of tokens) {
    const index = token.start;
    const tokenEnd = token.end;
    if (tokenEnd <= rangeStart) continue;
    if (index >= rangeEnd) break;
    const from = Math.max(index, rangeStart);
    const to = Math.min(tokenEnd, rangeEnd);
    if (from > cursor) parts.push(source.slice(cursor, from));
    parts.push(
      <span className={`code-token ${token.tone}`} key={`${from}-${to}`}>
        {source.slice(from, to)}
      </span>,
    );
    cursor = to;
  }
  if (cursor < rangeEnd) parts.push(source.slice(cursor, rangeEnd));
  return parts;
}
