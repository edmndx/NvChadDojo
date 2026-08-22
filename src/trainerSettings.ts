export type LineNumberMode =
  "none" | "absolute" | "relative" | "both" | "absoluteRelative";
export type RemapSet = {
  normal: Record<string, string>;
  insert: Record<string, string>;
};

export type TrainerPreferences = {
  lineNumberMode: LineNumberMode;
  arrowKeysEnabled: boolean;
  showCallouts: boolean;
  showSolution: boolean;
  animateResults: boolean;
  remapText: string;
};

export const trainerSettingsKey = "vimdojo_trainer_settings_v3";
export const defaultRemaps = `" Exit Insert mode with an easy sequence
inoremap jk <Esc>
inoremap kj <Esc>

" Normal-mode examples
nnoremap J <C-d>
nnoremap K <C-u>`;

export const defaultPreferences: TrainerPreferences = {
  lineNumberMode: "both",
  arrowKeysEnabled: false,
  showCallouts: true,
  showSolution: true,
  animateResults: true,
  remapText: defaultRemaps,
};

export function parseRemaps(text: string): {
  remaps: RemapSet;
  errors: string[];
} {
  const remaps: RemapSet = { normal: {}, insert: {} };
  const errors: string[] = [];
  text.split(/\r?\n/).forEach((line, index) => {
    const clean = line.trim();
    if (!clean || clean.startsWith('"')) return;
    const match = clean.match(/^(nnoremap|inoremap)\s+(\S+)\s+(\S+)$/);
    if (!match) {
      errors.push(`line ${index + 1}`);
      return;
    }
    (match[1] === "inoremap" ? remaps.insert : remaps.normal)[match[2]] =
      match[3];
  });
  return { remaps, errors };
}

export function loadTrainerPreferences(): TrainerPreferences {
  try {
    const raw =
      localStorage.getItem(trainerSettingsKey) ||
      localStorage.getItem("vimdojo_trainer_settings_v2") ||
      localStorage.getItem("vimdojo_trainer_settings") ||
      localStorage.getItem("chaddojo_trainer_settings_v3") ||
      localStorage.getItem("chaddojo_trainer_settings_v2") ||
      localStorage.getItem("chaddojo_trainer_settings") ||
      "{}";
    const stored = JSON.parse(raw) as Partial<TrainerPreferences>;
    const allowedModes: LineNumberMode[] = [
      "none",
      "absolute",
      "relative",
      "both",
      "absoluteRelative",
    ];
    const merged: TrainerPreferences = {
      lineNumberMode: allowedModes.includes(
        stored.lineNumberMode as LineNumberMode,
      )
        ? (stored.lineNumberMode as LineNumberMode)
        : defaultPreferences.lineNumberMode,
      arrowKeysEnabled:
        typeof stored.arrowKeysEnabled === "boolean"
          ? stored.arrowKeysEnabled
          : defaultPreferences.arrowKeysEnabled,
      showCallouts:
        typeof stored.showCallouts === "boolean"
          ? stored.showCallouts
          : defaultPreferences.showCallouts,
      showSolution:
        typeof stored.showSolution === "boolean"
          ? stored.showSolution
          : defaultPreferences.showSolution,
      animateResults:
        typeof stored.animateResults === "boolean"
          ? stored.animateResults
          : defaultPreferences.animateResults,
      remapText:
        typeof stored.remapText === "string"
          ? stored.remapText
          : defaultPreferences.remapText,
    };
    return merged;
  } catch {
    return defaultPreferences;
  }
}

export function saveTrainerPreferences(preferences: TrainerPreferences) {
  try {
    localStorage.setItem(trainerSettingsKey, JSON.stringify(preferences));
  } catch {
    // Storage can be unavailable in private or locked-down browser contexts.
  }
}
