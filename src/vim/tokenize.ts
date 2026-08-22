export function tokenizeCommand(command: string) {
  return command.match(/<[^>]+>|./g) || [];
}
