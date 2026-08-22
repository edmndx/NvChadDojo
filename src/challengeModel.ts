import {
  applyVimCommand,
  sameOutcome,
  type VimCursor,
  type VimState,
} from "./vimEngine";

export type ChallengeDefinition = {
  initialBuffer: string[];
  initialCursor: VimCursor;
  instruction: string;
  acceptedCommands: string[];
  expectedOutcomes: VimState[];
};

export function createChallengeDefinition(
  initialBuffer: string[],
  initialCursor: VimCursor,
  instruction: string,
  acceptedCommands: string[],
): ChallengeDefinition {
  return {
    initialBuffer: [...initialBuffer],
    initialCursor: { ...initialCursor },
    instruction,
    acceptedCommands,
    expectedOutcomes: acceptedCommands.map((command) =>
      applyVimCommand(initialBuffer, initialCursor, command),
    ),
  };
}

export function challengeReached(
  definition: ChallengeDefinition,
  state: VimState,
) {
  return (
    state.mode === "normal" &&
    !state.pending &&
    definition.expectedOutcomes.some((expected) => sameOutcome(state, expected))
  );
}
