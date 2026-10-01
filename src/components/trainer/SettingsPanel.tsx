import {
  defaultPreferences,
  defaultRemaps,
  type TrainerPreferences,
} from "../../trainerSettings";
import { lineNumber } from "../../trainer/lineNumbers";
export function SettingsPanel({
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
