import {
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";
import { Command, RotateCcw } from "lucide-react";
import type { Lesson } from "../curriculum";
import { challengeReached, createChallengeDefinition } from "../challengeModel";
import { applyVimKey } from "../vimEngine";
import {
  challengeInstruction,
  commandState,
  startingCursor,
} from "../lessonRuntime";
import {
  commandTokens,
  displayKey,
  matchAcceptedInput,
  normalizeKey,
  shouldCancelPendingInput,
  tokenizeSequence,
} from "../keyboard";
import {
  createLessonVimState,
  miniGameTargets,
  practiceContextLabel,
  resolveLessonPractice,
  runScenario,
  scenarioAsVimState,
  scenarioReached,
} from "../practiceModel";
import {
  defaultPreferences,
  defaultRemaps,
  loadTrainerPreferences,
  parseRemaps,
  saveTrainerPreferences,
  type LineNumberMode,
  type RemapSet,
  type TrainerPreferences,
} from "../trainerSettings";
import { createTrainerSession, reduceTrainerSession } from "../trainer/session";
import { syntaxLine } from "./CodeLine";

function TrainerClock() {
  const [elapsed, setElapsed] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(
      () => setElapsed((value) => value + 1),
      1000,
    );
    return () => window.clearInterval(timer);
  }, []);
  return (
    <span>
      {String(Math.floor(elapsed / 60)).padStart(2, "0")}:
      {String(elapsed % 60).padStart(2, "0")}
    </span>
  );
}

function lineNumber(mode: LineNumberMode, index: number, cursorLine: number) {
  if (mode === "absolute") return String(index + 1);
  if (mode === "relative") return String(Math.abs(index - cursorLine));
  if (mode === "both")
    return String(
      index === cursorLine ? index + 1 : Math.abs(index - cursorLine),
    );
  return `${index + 1} ${Math.abs(index - cursorLine)}`;
}

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

function SettingsPanel({
  preferences,
  setPreferences,
  remapText,
  setRemapText,
  onSaveRemaps,
  onResetRemaps,
  status,
}: {
  preferences: TrainerPreferences;
  setPreferences: (next: TrainerPreferences) => void;
  remapText: string;
  setRemapText: (text: string) => void;
  onSaveRemaps: () => void;
  onResetRemaps: () => void;
  status: string;
}) {
  const update = <K extends keyof TrainerPreferences>(
    key: K,
    value: TrainerPreferences[K],
  ) => setPreferences({ ...preferences, [key]: value });
  return (
    <div className="trainer-panel settings-panel">
      <small>PLAYGROUND SETTINGS</small>
      <h3>Editor behavior</h3>
      <section>
        <h4>Line Numbers</h4>
        <p>Choose how line numbers appear in the challenge editor.</p>
        <div className="settings-line-layout">
          <div className="setting-options">
            {(
              [
                ["none", "None", "Hide line numbers"],
                ["absolute", "Absolute", "Show 1, 2, 3…"],
                ["relative", "Relative", "Show distance from the cursor"],
                [
                  "both",
                  "Hybrid",
                  "Absolute on the cursor line, relative elsewhere",
                ],
                [
                  "absoluteRelative",
                  "Absolute + Relative",
                  "Show both values side by side",
                ],
              ] as const
            ).map(([value, label, description]) => (
              <label key={value}>
                <input
                  type="radio"
                  name="lineNumbers"
                  checked={preferences.lineNumberMode === value}
                  onChange={() => update("lineNumberMode", value)}
                />
                <span>
                  <b>{label}</b>
                  <small>{description}</small>
                </span>
              </label>
            ))}
          </div>
          <div className="line-number-preview">
            <small>PREVIEW</small>
            {[0, 1, 2].map((index) => (
              <div className={index === 1 ? "active" : ""} key={index}>
                {preferences.lineNumberMode !== "none" && (
                  <b>{lineNumber(preferences.lineNumberMode, index, 1)}</b>
                )}
                <code>
                  {
                    ["local theme = 'dark'", "apply(theme)", "return theme"][
                      index
                    ]
                  }
                </code>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <h4>Arrow Keys</h4>
        <p>Choose whether arrows move normally or encourage hjkl practice.</p>
        <div className="setting-options two">
          <label>
            <input
              type="radio"
              name="arrows"
              checked={!preferences.arrowKeysEnabled}
              onChange={() => update("arrowKeysEnabled", false)}
            />
            <span>
              <b>Disabled (Recommended)</b>
              <small>Use h, j, k, and l instead.</small>
            </span>
          </label>
          <label>
            <input
              type="radio"
              name="arrows"
              checked={preferences.arrowKeysEnabled}
              onChange={() => update("arrowKeysEnabled", true)}
            />
            <span>
              <b>Enabled</b>
              <small>Useful for accessibility or alternative layouts.</small>
            </span>
          </label>
        </div>
      </section>
      <section>
        <h4>Challenge Feedback</h4>
        <div className="setting-toggle">
          <label>
            <input
              type="checkbox"
              checked={preferences.showCallouts}
              onChange={(event) => update("showCallouts", event.target.checked)}
            />{" "}
            Show positive result messages
          </label>
          <label>
            <input
              type="checkbox"
              checked={preferences.showSolution}
              onChange={(event) => update("showSolution", event.target.checked)}
            />{" "}
            Show solution keycaps
          </label>
          <label>
            <input
              type="checkbox"
              checked={preferences.animateResults}
              onChange={(event) =>
                update("animateResults", event.target.checked)
              }
            />{" "}
            Animate successful outcomes
          </label>
        </div>
      </section>
      <section>
        <h4>Custom Key Remaps</h4>
        <p>
          Use <code>nnoremap</code> for Normal mode or <code>inoremap</code> for
          Insert mode. Multi-key inputs such as <code>jk</code> are supported.
        </p>
        <textarea
          aria-label="Custom key remaps"
          value={remapText}
          onChange={(event) => setRemapText(event.target.value)}
          spellCheck={false}
        />
        <div className="remap-actions">
          <button type="button" onClick={onSaveRemaps}>
            Save
          </button>
          <button type="button" onClick={onResetRemaps}>
            Reset mappings
          </button>
          {status && <span role="status">{status}</span>}
        </div>
      </section>
      <div className="settings-footer">
        <p>
          Preferences are stored locally on this device. Challenge progress is
          never stored.
        </p>
        <button
          type="button"
          onClick={() => {
            setPreferences(defaultPreferences);
            setRemapText(defaultRemaps);
            onResetRemaps();
          }}
        >
          Restore all defaults
        </button>
      </div>
    </div>
  );
}

export function Trainer({ lesson }: { lesson: Lesson }) {
  const drills = lesson.drills || [{ goal: lesson.task, code: lesson.code }];
  const firstCursor = startingCursor(lesson, drills[0].code);
  const practice = useMemo(() => resolveLessonPractice(lesson), [lesson]);
  const gameTargets = useMemo(() => miniGameTargets(lesson), [lesson]);
  const firstState = useMemo(
    () => createLessonVimState(lesson, drills[0].code, firstCursor),
    [lesson, drills, firstCursor.line, firstCursor.col],
  );
  const [session, dispatch] = useReducer(
    reduceTrainerSession,
    createTrainerSession(
      lesson,
      drills[0].code,
      firstCursor,
      firstState,
      gameTargets[0] || lesson.sequence,
    ),
  );
  const [preferences, setPreferences] = useState<TrainerPreferences>(
    loadTrainerPreferences,
  );
  const [remapText, setRemapText] = useState(preferences.remapText);
  const [savedRemapText, setSavedRemapText] = useState(preferences.remapText);
  const [remaps, setRemaps] = useState<RemapSet>(
    () => parseRemaps(preferences.remapText).remaps,
  );
  const [remapStatus, setRemapStatus] = useState("");
  const [clockKey, setClockKey] = useState(0);
  const box = useRef<HTMLDivElement>(null);
  const resultTimer = useRef<number | undefined>(undefined);
  const shortTimers = useRef<number[]>([]);
  const drill = drills[Math.min(session.round, drills.length - 1)];
  const steps = useMemo(
    () =>
      practice.kind === "reference"
        ? []
        : practice.steps.map(
            (step) => step.acceptedSequences[0] || lesson.sequence,
          ),
    [lesson.sequence, practice],
  );
  const required = steps[Math.min(session.step, steps.length - 1)];
  const accepted = useMemo(() => {
    if (practice.kind === "reference") return [];
    return [
      ...(practice.steps[Math.min(session.step, practice.steps.length - 1)]
        ?.acceptedSequences || [required]),
    ];
  }, [practice, required, session.step]);
  const initialCursor = useMemo(
    () => startingCursor(lesson, drill.code),
    [lesson, drill.code],
  );
  const initialState = useMemo(
    () => createLessonVimState(lesson, drill.code, initialCursor),
    [drill.code, initialCursor, lesson],
  );
  const outcomeEnabled = practice.kind === "vim";
  const scenarioEnabled = practice.kind === "scenario";
  const challengeDefinition = useMemo(
    () =>
      outcomeEnabled
        ? createChallengeDefinition(
            drill.code,
            initialCursor,
            drill.goal,
            accepted,
            initialState,
          )
        : null,
    [
      accepted,
      drill.code,
      drill.goal,
      initialCursor,
      initialState,
      outcomeEnabled,
    ],
  );
  const shownState = session.result || session.engine;
  const gameKeys = tokenizeSequence(session.gameTarget);

  const reset = () => {
    window.clearTimeout(resultTimer.current);
    dispatch({
      type: "reset",
      value: createTrainerSession(
        lesson,
        drills[0].code,
        startingCursor(lesson, drills[0].code),
        createLessonVimState(
          lesson,
          drills[0].code,
          startingCursor(lesson, drills[0].code),
        ),
        gameTargets[0] || lesson.sequence,
      ),
    });
    setClockKey((value) => value + 1);
    box.current?.focus();
  };

  useEffect(() => {
    reset();
    const focusTimer = window.setTimeout(() => box.current?.focus(), 40);
    return () => {
      window.clearTimeout(focusTimer);
      window.clearTimeout(resultTimer.current);
      shortTimers.current.forEach(window.clearTimeout);
      shortTimers.current = [];
    };
  }, [lesson.id]);
  useEffect(() => {
    saveTrainerPreferences({ ...preferences, remapText: savedRemapText });
  }, [preferences, savedRemapText]);

  const handleKey = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (session.tab === "minigame") {
      event.preventDefault();
      const token = normalizeKey(event.nativeEvent);
      if (!token || !gameKeys.length) return;
      if (token === gameKeys[session.gameIndex]) {
        if (session.gameIndex + 1 === gameKeys.length) {
          const currentTarget = Math.max(
            0,
            gameTargets.indexOf(session.gameTarget),
          );
          const nextTarget = gameTargets.length
            ? gameTargets[(currentTarget + 1) % gameTargets.length]
            : session.gameTarget;
          dispatch({
            type: "patch",
            value: {
              gameRounds: session.gameRounds + 1,
              streak: session.streak + 1,
              gameIndex: 0,
              gameTarget: nextTarget,
              engine: createLessonVimState(lesson, drill.code, initialCursor),
            },
          });
        } else
          dispatch({
            type: "patch",
            value: { gameIndex: session.gameIndex + 1 },
          });
      } else {
        dispatch({
          type: "patch",
          value: {
            gameMisses: session.gameMisses + 1,
            attempts: session.attempts + 1,
            streak: 0,
            wrong: true,
          },
        });
        shortTimers.current.push(
          window.setTimeout(
            () => dispatch({ type: "patch", value: { wrong: false } }),
            180,
          ),
        );
      }
      return;
    }
    if (session.tab !== "challenge") return;
    event.preventDefault();
    if (session.result) return;
    if (event.key === "Backspace") {
      dispatch({
        type: "patch",
        value: {
          typed: "",
          wrong: false,
          feedback: "Pending command cleared. You are back in Normal mode.",
        },
      });
      return;
    }
    const arrowMap: Record<string, string> = {
      ArrowLeft: "h",
      ArrowDown: "j",
      ArrowUp: "k",
      ArrowRight: "l",
    };
    if (arrowMap[event.key] && !preferences.arrowKeysEnabled) {
      dispatch({
        type: "patch",
        value: {
          attempts: session.attempts + 1,
          feedback: `Arrow keys are disabled here. Use ${arrowMap[event.key]} instead.`,
        },
      });
      return;
    }
    const rawToken = arrowMap[event.key] || normalizeKey(event.nativeEvent);
    if (!rawToken) return;
    const activeRemaps =
      session.engine.mode === "insert" ? remaps.insert : remaps.normal;
    const candidate = session.remapPending + rawToken;
    const prefix = Object.keys(activeRemaps).find((source) =>
      source.startsWith(candidate),
    );
    let token = rawToken;
    let typedPrefix = "";
    let engineBase = session.engine;
    if (prefix) {
      const mapped = activeRemaps[candidate];
      if (!mapped) {
        dispatch({
          type: "patch",
          value: {
            remapPending: candidate,
            feedback: `mapping: ${candidate}…`,
          },
        });
        return;
      }
      token = mapped;
    } else if (session.remapPending) {
      typedPrefix = session.remapPending;
      engineBase = outcomeEnabled
        ? applyVimKey(session.engine, session.remapPending)
        : session.engine;
    } else if (activeRemaps[rawToken]) token = activeRemaps[rawToken];
    if (
      shouldCancelPendingInput(
        token,
        session.engine.mode,
        session.engine.pending,
        session.typed,
        session.remapPending,
        accepted,
      )
    ) {
      dispatch({
        type: "patch",
        value: {
          typed: "",
          remapPending: "",
          feedback: "Pending command cancelled. Normal mode restored.",
          engine: createLessonVimState(lesson, drill.code, initialCursor),
        },
      });
      return;
    }
    const matchedInput = matchAcceptedInput(
      session.typed,
      typedPrefix,
      token,
      accepted,
    );
    const nextTyped = matchedInput.value;
    const nextEngine = outcomeEnabled
      ? applyVimKey(engineBase, token)
      : session.engine;
    const completeCommand = accepted.includes(nextTyped);
    const expectedScenario =
      scenarioEnabled && completeCommand
        ? runScenario(
            lesson,
            accepted.find((option) => option === nextTyped)!,
          )
        : null;
    const actualScenario =
      scenarioEnabled && completeCommand
        ? runScenario(lesson, nextTyped)
        : null;
    const reached = challengeDefinition
      ? completeCommand && challengeReached(challengeDefinition, nextEngine)
      : expectedScenario && actualScenario
        ? scenarioReached(expectedScenario, actualScenario)
        : completeCommand;
    const resultState = actualScenario
      ? scenarioAsVimState(nextEngine, actualScenario)
      : nextEngine;
    const viable = matchedInput.viable;
    if (viable || reached) {
      dispatch({
        type: "patch",
        value: {
          typed: nextTyped,
          remapPending: "",
          wrong: false,
          feedback: "",
          engine: nextEngine,
        },
      });
      if (reached) {
        const moreSteps = session.step + 1 < steps.length;
        dispatch({
          type: "patch",
          value: {
            typed: "",
            hint: 0,
            result: resultState,
            feedback: moreSteps
              ? `Good. Step ${session.step + 1} worked.`
              : lesson.challenge?.success || "Target state reached.",
            streak: moreSteps ? session.streak : session.streak + 1,
          },
        });
        resultTimer.current = window.setTimeout(
          () => {
            const nextStep = moreSteps ? session.step + 1 : 0;
            const nextRound = moreSteps
              ? session.round
              : (session.round + 1) % drills.length;
            const nextDrill = drills[Math.min(nextRound, drills.length - 1)];
            dispatch({
              type: "patch",
              value: {
                step: nextStep,
                round: nextRound,
                result: null,
                engine: createLessonVimState(
                  lesson,
                  nextDrill.code,
                  startingCursor(lesson, nextDrill.code),
                ),
              },
            });
          },
          preferences.animateResults ? 1500 : 350,
        );
      }
    } else {
      const expected =
        (
          accepted.find((option) => option.startsWith(session.typed)) ||
          required
        )
          .slice(session.typed.length)
          .match(/^<[^>]+>|./)?.[0] || "the next key";
      dispatch({
        type: "patch",
        value: {
          attempts: session.attempts + 1,
          streak: 0,
          wrong: true,
          remapPending: "",
          feedback: `That breaks the command. Expected ${displayKey(expected)}, not ${displayKey(token)}.`,
        },
      });
      shortTimers.current.push(
        window.setTimeout(
          () =>
            dispatch({
              type: "patch",
              value: {
                wrong: false,
                typed: "",
                engine: createLessonVimState(lesson, drill.code, initialCursor),
              },
            }),
          650,
        ),
      );
    }
  };

  const saveRemaps = () => {
    const parsed = parseRemaps(remapText);
    if (parsed.errors.length) {
      setRemapStatus(
        `Could not parse ${parsed.errors.join(", ")}. Use nnoremap or inoremap.`,
      );
      return;
    }
    setRemaps(parsed.remaps);
    setSavedRemapText(remapText);
    setRemapStatus("Saved.");
  };
  const resetRemaps = () => {
    setRemapText(defaultRemaps);
    setSavedRemapText(defaultRemaps);
    setRemaps(parseRemaps(defaultRemaps).remaps);
    setRemapStatus("Mappings restored.");
  };
  const entered =
    session.typed || session.remapPending || (session.result ? required : "");
  const insertedText =
    lesson.challenge?.replacement ||
    (required.includes("nvchad") ? "nvchad" : undefined);

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
