import {
  applyVimTokens,
  cloneVimState,
  createVimState,
  sameOutcome,
  type VimCursor,
  type VimState,
} from "./vimEngine";
import { tokenizeCommand } from "./vimEngine";

export type ChallengeDefinition = {
  initialBuffer: string[];
  initialCursor: VimCursor;
  instruction: string;
  acceptedCommands: string[];
  expectedOutcomes: VimState[];
  initialState: VimState;
};

export function createChallengeDefinition(
  initialBuffer: string[],
  initialCursor: VimCursor,
  instruction: string,
  acceptedCommands: string[],
  initialState = createVimState(initialBuffer, initialCursor),
): ChallengeDefinition {
  return {
    initialBuffer: [...initialBuffer],
    initialCursor: { ...initialCursor },
    instruction,
    acceptedCommands,
    initialState: cloneVimState(initialState),
    expectedOutcomes: acceptedCommands.map((command) =>
      applyVimTokens(cloneVimState(initialState), tokenizeCommand(command)),
    ),
  };
}

export function challengeReached(
  definition: ChallengeDefinition,
  state: VimState,
) {
  return definition.expectedOutcomes.some((expected) =>
    sameOutcome(state, expected),
  );
}
