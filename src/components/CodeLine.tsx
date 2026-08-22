import type { ReactNode } from "react";

export function syntaxLine(line: string): ReactNode[] {
  const pattern =
    /(--.*$|'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|\b(?:local|return|function|end|if|then|else|for|while|do|true|false|nil|const|let|var|import|from|export)\b|\b\d+(?:\.\d+)?\b|\b[a-zA-Z_][\w]*(?=\s*\())/g;
  const parts: ReactNode[] = [];
  let cursor = 0;
  for (const match of line.matchAll(pattern)) {
    const index = match.index || 0;
    if (index > cursor) parts.push(line.slice(cursor, index));
    const token = match[0];
    const tone = token.startsWith("--")
      ? "comment"
      : /^['"]/.test(token)
        ? "string"
        : /^\d/.test(token)
          ? "number"
          : /^(local|return|function|end|if|then|else|for|while|do|true|false|nil|const|let|var|import|from|export)$/.test(
                token,
              )
            ? "keyword"
            : "call";
    parts.push(
      <span className={`code-token ${tone}`} key={`${index}-${token}`}>
        {token}
      </span>,
    );
    cursor = index + token.length;
  }
  if (cursor < line.length) parts.push(line.slice(cursor));
  return parts.length ? parts : [line || " "];
}
