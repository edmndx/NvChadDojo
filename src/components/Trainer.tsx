import type { ReactNode } from "react";
import { Command, RotateCcw } from "lucide-react";
import type { Lesson } from "../curriculum";
import { challengeInstruction, commandState } from "../lessonRuntime";
import { commandTokens, displayKey } from "../keyboard";
import { practiceContextLabel } from "../practiceModel";
import { useTrainer } from "../trainer/useTrainer";
import { lineNumber } from "../trainer/lineNumbers";
import { TrainerClock } from "./trainer/TrainerClock";
import { SettingsPanel } from "./trainer/SettingsPanel";
import { syntaxLine } from "./CodeLine";

function Keycaps({
  sequence,
  insertedText,
  accepted = false,
}: {
  sequence: string;
  insertedText?: string;
  accepted?: boolean;
}) {
  return (
    <>
      {commandTokens(sequence, insertedText).map((token, index) => (
        <kbd
          className={`${accepted ? "accepted" : ""} ${token.kind === "text" ? "text-token" : ""}`.trim()}
          key={`${token.value}-${index}`}
        >
          {displayKey(token.value)}
        </kbd>
      ))}
    </>
  );
}

export function Trainer({ lesson }: { lesson: Lesson }) {
  const {
    session,
    dispatch,
    preferences,
    setPreferences,
    remapText,
    setRemapText,
    remapStatus,
    setRemapStatus,
    saveRemaps,
    resetRemaps,
    clockKey,
    box,
    handleKey,
    reset,
    shownState,
    gameKeys,
    entered,
    insertedText,
    drill,
    practice,
    steps,
    required,
    outcomeEnabled,
  } = useTrainer(lesson);
  const renderLine = (line: string, index: number) => {
    const active = index === shownState.cursor.line;
    let content: ReactNode = syntaxLine(line);
    if (active) {
      const col = Math.min(shownState.cursor.col, line.length);
      content = (
        <>
          {col > 0 && syntaxLine(line.slice(0, col))}
          <span
            className={`sim-cursor inline ${shownState.mode === "insert" ? "insert" : ""}`}
          >
            {line[col] || " "}
          </span>
          {col + 1 < line.length && syntaxLine(line.slice(col + 1))}
        </>
      );
    }
    return (
      <div key={index} className={active ? "active-line" : ""}>
        {content}
      </div>
    );
  };

  return (
    <div
      className={`trainer ${session.wrong ? "shake" : ""}`}
      tabIndex={0}
      ref={box}
      onKeyDown={handleKey}
      onClick={() => box.current?.focus()}
    >
      <div className="trainer-head">
        <div
          className="challenge-tabs"
          role="tablist"
          aria-label="Trainer views"
        >
          {(["challenge", "minigame", "settings"] as const).map((tab) => (
            <button
              type="button"
              role="tab"
              aria-selected={session.tab === tab}
              className={session.tab === tab ? "active" : ""}
              onClick={() => dispatch({ type: "select-tab", tab })}
              key={tab}
            >
              {tab === "minigame"
                ? "Mini-Game"
                : `${tab[0].toUpperCase()}${tab.slice(1)}`}
            </button>
          ))}
        </div>
        <div className="challenge-tools">
          <TrainerClock key={clockKey} />
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              reset();
            }}
          >
            <RotateCcw size={13} /> restart
          </button>
        </div>
      </div>
      {session.tab === "challenge" && (
        <>
          <div
            className={`code-area ${preferences.lineNumberMode === "none" ? "no-gutter" : ""}`}
          >
            {preferences.lineNumberMode !== "none" && (
              <div className="gutter">
                {shownState.lines.map((_, index) => (
                  <span key={index}>
                    {lineNumber(
                      preferences.lineNumberMode,
                      index,
                      shownState.cursor.line,
                    )}
                  </span>
                ))}
              </div>
            )}
            <pre>{shownState.lines.map(renderLine)}</pre>
          </div>
          {(session.engine.mode === "search" ||
            session.engine.mode === "command" ||
            session.engine.pending ||
            session.engine.recording) && (
            <div className="vim-command-state">
              <b>
                {session.engine.recording
                  ? `recording @${session.engine.recording}`
                  : session.engine.pending
                    ? session.engine.message
                    : session.engine.mode === "search"
                      ? `${session.engine.searchDirection === 1 ? "/" : "?"}${session.engine.input}`
                      : `:${session.engine.input}`}
              </b>
            </div>
          )}
          <div className="trainer-status">
            <strong>
              {outcomeEnabled
                ? `${session.engine.mode.toUpperCase().replace("-", " ")}${session.engine.pending ? " · PENDING" : ""}`
                : practiceContextLabel(lesson) ||
                  commandState(session.typed, lesson)}
            </strong>
            <span>
              {practice.kind === "scenario" && practice.surface !== "editor"
                ? "NVChad v2.5 simulation"
                : "Lua"}
            </span>
            <span className="status-spacer" />
            <span>
              Ln {shownState.cursor.line + 1}, Col {shownState.cursor.col + 1}
            </span>
          </div>
          <div className="challenge">
            <div className="challenge-icon">
              <Command />
            </div>
            <div className="challenge-copy">
              <small>
                {steps.length > 1
                  ? `STEP ${session.step + 1} OF ${steps.length}`
                  : "TARGET"}
                {session.attempts ? ` · ${session.attempts} RETRIES` : ""}
              </small>
              <p>
                {challengeInstruction(
                  lesson,
                  required,
                  lesson.challenge?.instruction ||
                    drill.goal.replace(/ · repetition \d of 3$/, ""),
                )}
              </p>
              <div className="challenge-input" aria-live="polite">
                <span>keys</span>
                <div className="entered-keys">
                  {entered ? (
                    <Keycaps
                      sequence={entered}
                      insertedText={insertedText}
                      accepted={Boolean(session.result)}
                    />
                  ) : (
                    <i>type command…</i>
                  )}
                  <b className="input-caret" />
                </div>
              </div>
              <div className="hint-actions">
                <button
                  type="button"
                  onClick={() => dispatch({ type: "next-hint" })}
                >
                  {session.hint ? "next hint" : "hint"}
                </button>
                {session.hint > 0 && (
                  <span>
                    {session.hint < 3
                      ? lesson.challenge?.hints[session.hint - 1] ||
                        lesson.commonMistake
                      : `Solution: ${displayKey(required)}`}
                  </span>
                )}
              </div>
            </div>
            {preferences.showSolution && (
              <div className="solution-keys">
                <small>SOLUTION</small>
                <div>
                  <Keycaps sequence={required} insertedText={insertedText} />
                </div>
              </div>
            )}
          </div>
        </>
      )}
      {session.tab === "minigame" && (
        <div className="trainer-panel minigame-panel">
          <small>KEY SEQUENCE SPRINT</small>
          <h3>Type the highlighted command</h3>
          <p>
            Context: {practiceContextLabel(lesson)}. Each completed round uses
            another complete action from this lesson.
          </p>
          <div className="game-sequence">
            {gameKeys.map((key, index) => (
              <kbd
                className={
                  index < session.gameIndex
                    ? "done"
                    : index === session.gameIndex
                      ? "current"
                      : ""
                }
                key={`${key}-${index}`}
              >
                {displayKey(key)}
              </kbd>
            ))}
          </div>
          <div className="game-meta">
            <span>
              rounds <b>{session.gameRounds}</b>
            </span>
            <span>
              misses <b>{session.gameMisses}</b>
            </span>
            <span>
              streak <b>{session.streak}</b>
            </span>
          </div>
        </div>
      )}
      {session.tab === "settings" && (
        <SettingsPanel
          preferences={preferences}
          setPreferences={setPreferences}
          remapText={remapText}
          setRemapText={(text) => {
            setRemapText(text);
            setRemapStatus("");
          }}
          onSaveRemaps={saveRemaps}
          onResetRemaps={resetRemaps}
          status={remapStatus}
        />
      )}
      {session.feedback && (session.wrong || preferences.showCallouts) && (
        <div
          className={`trainer-feedback ${session.wrong ? "error" : "success"}`}
          role="status"
        >
          {session.feedback}
        </div>
      )}
      {session.tab === "challenge" && !session.typed && (
        <div className="focus-note">
          Click here, then type the sequence · Esc cancels
        </div>
      )}
    </div>
  );
}
