import { useMemo, useState, type CSSProperties } from "react";
import type { Lesson } from "../../curriculum";
import { applyVimCommand, applyVimTokens } from "../../vimEngine";
import { getLessonExamples } from "../../lessonExamples";
import { commandTokens, displayKey, tokenizeSequence } from "../../keyboard";
import { commandState } from "../../lessonRuntime";
import {
  createLessonVimState,
  resolveLessonPractice,
  runScenario,
  scenarioAsVimState,
} from "../../practiceModel";
import { prepareHighlight, syntaxLine } from "../CodeLine";
import { describeKey } from "./keyGuideModel";
function Example({
  lesson,
  example,
  replay,
  onReplay,
}: {
  lesson: Lesson;
  example: ReturnType<typeof getLessonExamples>[number];
  replay: number;
  onReplay: () => void;
}) {
  const { code, cursor, sequence, language } = example;
  const practice = resolveLessonPractice(lesson);
  const initial = createLessonVimState(lesson, code, cursor);
  const result =
    lesson.id === "text-objects-mega-review"
      ? applyVimCommand(code, cursor, sequence)
      : practice.kind === "vim"
        ? applyVimTokens(initial, tokenizeSequence(sequence))
        : practice.kind === "scenario"
          ? scenarioAsVimState(initial, runScenario(lesson, sequence))
          : initial;
  const simulated = practice.kind !== "reference";
  const shortcutOnly = practice.kind === "scenario" && !example.expectedCode;
  const modeLabel =
    practice.kind === "scenario"
      ? example.expectedCode
        ? "EXAMPLE RESULT"
        : "SHORTCUT PRACTICE"
      : simulated
        ? result.mode.toUpperCase()
        : commandState(sequence, lesson);
  const message =
    result.message === modeLabel
      ? ""
      : result.message || "Command applied to the buffer.";
  const tokens = commandTokens(sequence, lesson.challenge?.replacement);
  const sequenceDelay = Math.min(3.2, 0.42 + tokens.length * 0.19);
  const beforeHighlight = useMemo(
    () => prepareHighlight(code, language),
    [code, language],
  );
  const afterHighlight = useMemo(
    () => prepareHighlight(result.lines, language),
    [result.lines, language],
  );
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
      {practice.kind === "scenario" && (
        <p className="shortcut-note">
          {example.expectedCode
            ? "This shows an example outcome. In Neovim, the result depends on your setup."
            : "Practice the shortcut here; use it in Neovim to perform the action."}
        </p>
      )}
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
        <pre
          className={
            shortcutOnly ? "example-before example-context" : "example-before"
          }
        >
          {code.map((line, lineIndex) => (
            <div
              className={lineIndex === cursor.line ? "active" : ""}
              key={lineIndex}
            >
              <span>{lineIndex + 1}</span>
              <code>
                {lineIndex === cursor.line ? (
                  <>
                    {syntaxLine(line, {
                      language,
                      lines: code,
                      highlight: beforeHighlight,
                      lineIndex,
                      end: cursor.col,
                    })}
                    <em />
                    {syntaxLine(line, {
                      language,
                      lines: code,
                      highlight: beforeHighlight,
                      lineIndex,
                      start: cursor.col,
                    })}
                  </>
                ) : (
                  syntaxLine(line, {
                    language,
                    lines: code,
                    highlight: beforeHighlight,
                    lineIndex,
                  })
                )}
              </code>
            </div>
          ))}
        </pre>
        {!shortcutOnly && (
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
                        {syntaxLine(line, {
                          language,
                          lines: result.lines,
                          highlight: afterHighlight,
                          lineIndex,
                          end: col,
                        })}
                        <em />
                        {syntaxLine(line, {
                          language,
                          lines: result.lines,
                          highlight: afterHighlight,
                          lineIndex,
                          start: col,
                        })}
                      </>
                    ) : (
                      syntaxLine(line, {
                        language,
                        lines: result.lines,
                        highlight: afterHighlight,
                        lineIndex,
                      })
                    )}
                  </code>
                </div>
              );
            })}
          </pre>
        )}
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
  const items = getLessonExamples(lesson);
  return (
    <div className="key-guide">
      {items.map((item, index) => {
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
                {open === index ? "■ hide example" : "▶ show example"}
              </button>
            </div>
            {open === index && (
              <Example
                lesson={lesson}
                example={item}
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
