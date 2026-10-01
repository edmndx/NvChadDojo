import { useState, type CSSProperties } from "react";
import type { Lesson } from "../../curriculum";
import { displayKey } from "../../keyboard";
import { syntaxLine } from "../CodeLine";
import {
  describeKey,
  exampleFor,
  keyGuideItems,
  keyGuideSequence,
} from "./keyGuideModel";
function Example({
  lesson,
  index,
  sequence,
  replay,
  onReplay,
}: {
  lesson: Lesson;
  index: number;
  sequence: string;
  replay: number;
  onReplay: () => void;
}) {
  const { drill, cursor, result, modeLabel, message, tokens, sequenceDelay } =
    exampleFor(lesson, index, sequence);
  return (
    <div
      className="inline-example visible"
      key={replay}
      style={{ "--sequence-delay": `${sequenceDelay}s` } as CSSProperties}
    >
      <div className="example-title">
        <i />
        <span>Example</span>
        <i />
      </div>
      <div className="example-input">
        <span className="cli-prompt">$</span>
        <span className="cli-label">keys</span>
        {tokens.map((token, tokenIndex) => (
          <kbd
            className={token.kind === "text" ? "text-token" : ""}
            style={{ animationDelay: `${220 + tokenIndex * 190}ms` }}
            key={`${token.value}-${tokenIndex}`}
          >
            {displayKey(token.value)}
          </kbd>
        ))}
        <button type="button" onClick={onReplay}>
          ↻ replay
        </button>
      </div>
      <div className="example-stage">
        <pre className="example-before">
          {drill.code.map((line, lineIndex) => (
            <div
              className={lineIndex === cursor.line ? "active" : ""}
              key={lineIndex}
            >
              <span>{lineIndex + 1}</span>
              <code>
                {lineIndex === cursor.line ? (
                  <>
                    {syntaxLine(line.slice(0, cursor.col))}
                    <em />
                    {syntaxLine(line.slice(cursor.col))}
                  </>
                ) : (
                  syntaxLine(line)
                )}
              </code>
            </div>
          ))}
        </pre>
        <pre className="example-after">
          {result.lines.map((line, lineIndex) => {
            const active = lineIndex === result.cursor.line;
            const col = Math.min(result.cursor.col, line.length);
            return (
              <div className={active ? "active" : ""} key={lineIndex}>
                <span>{lineIndex + 1}</span>
                <code>
                  {active ? (
                    <>
                      {syntaxLine(line.slice(0, col))}
                      <em />
                      {syntaxLine(line.slice(col))}
                    </>
                  ) : (
                    syntaxLine(line)
                  )}
                </code>
              </div>
            );
          })}
        </pre>
      </div>
      <div className="example-mode">
        <b>{modeLabel}</b>
        {message && <span>{message}</span>}
      </div>
    </div>
  );
}

export function LessonKeyGuide({ lesson }: { lesson: Lesson }) {
  const [open, setOpen] = useState<number | null>(null);
  const [replay, setReplay] = useState(0);
  const items = keyGuideItems(lesson);
  return (
    <div className="key-guide">
      {items.map((item, index) => {
        const { sequence, relatedExample } = keyGuideSequence(item);
        return (
          <div
            className={`key-guide-item ${open === index ? "expanded" : ""}`}
            key={`${item.key}-${index}`}
          >
            <div className="key-guide-row">
              <kbd>{item.key}</kbd>
              <span>–</span>
              <p>{item.description || describeKey(lesson, item.key)}</p>
              <button
                type="button"
                aria-expanded={open === index}
                onClick={() => setOpen(open === index ? null : index)}
              >
                {open === index
                  ? "■ hide example"
                  : relatedExample
                    ? "▶ show related example"
                    : "▶ show example"}
              </button>
            </div>
            {open === index && (
              <Example
                lesson={lesson}
                index={index}
                sequence={sequence}
                replay={replay}
                onReplay={() => setReplay((value) => value + 1)}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
