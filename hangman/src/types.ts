export interface GameState {
  word: string;
  hint: string;
  count: number;
  pressedChars: Set<string>;
  displayedWord: HTMLLIElement[];
  isGamePaused: boolean;
  isGameWon: boolean;
  isGameLost: boolean;
  draw?: (count: number) => void;
  sound?: () => void;
}

export interface Questions {
  hint: string;
  answer: string;
}
