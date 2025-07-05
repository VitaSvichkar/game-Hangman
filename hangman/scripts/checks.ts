import { GameState } from '../src/types.js';
import showModal from './showModal.js';

export function checkChar(e: KeyboardEvent | MouseEvent, state: GameState) {
  const countMistakes = document.querySelector<HTMLDivElement>('.count')!;

  let key: string;

  if (e instanceof KeyboardEvent) {
    key = e.key.toUpperCase();
  } else {
    const target = e.target as HTMLElement;
    key = target.innerText;
  }

  const keyKeyboard = Array.from(
    document.querySelectorAll<HTMLDivElement>('.key')
  );
  const keyStyle = keyKeyboard.filter((item) => item.innerText === key);
  const word: string = state.word.toUpperCase();
  let correctGuess: boolean = false;

  if (state.isGamePaused) return;

  if ([...state.pressedChars].includes(key)) {
    correctGuess = true;
    return;
  }

  state.pressedChars.add(key);

  keyStyle.forEach((el) => el.classList.add('key-inactive'));

  for (let i = 0; i < word.length; i += 1) {
    if (!/^[A-Z]$/.test(key)) {
      return;
    }

    if (word[i] === key) {
      state.displayedWord[i].textContent = key;
      correctGuess = true;
    }

    state.sound?.();
  }

  if (!correctGuess) {
    state.count += 1;
    state.draw?.(state.count);
  }

  countMistakes.textContent = `${state.count}`;
  checkGameEnd(state);
}

// check

function checkGameEnd(state: GameState): void {
  const isLost: boolean = checkErrorsCount(state);
  const isGuess: boolean = isWordGuess(state);

  if (isLost || isGuess) {
    showModal(state);
  }
}

function checkErrorsCount(state: GameState): boolean {
  if (state.count === 6) {
    state.isGamePaused = true;
    state.isGameLost = true;
    return true;
  }
  return false;
}

function isWordGuess(state: GameState): boolean {
  const guessWord: string = state.displayedWord
    .map((item) => item.innerText)
    .join('');
  const word: string = state.word.toUpperCase();

  if (word === guessWord) {
    state.isGameWon = true;
    return true;
  }
  return false;
}
