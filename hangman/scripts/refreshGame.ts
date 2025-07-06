import { GameState, Questions } from '../src/types';

export default function refreshGame(questions: Questions[]) {
  let index: number = 0;

  return function (): GameState {
    const gameState: GameState = {
      word: questions[index].answer,
      hint: questions[index].hint,
      count: 0,
      pressedChars: new Set(),
      displayedWord: [],
      isGamePaused: false,
      isGameWon: false,
      isGameLost: false,
    };

    index += 1;

    if (index >= questions.length) {
      index = 0;
    }

    const hint = document.querySelector<HTMLDivElement>('.hint-wrap p')!;
    hint.innerHTML = `<span class="hint-accent">Hint: </span>${gameState.hint}`;

    const mistakes = document.querySelector<HTMLDivElement>('.mistakes-wrap')!;
    mistakes.innerHTML = `<span class="mistakes">Incorrect guesses: <span class="style-count"><span class="count">${gameState.count}</span> / 6 </span></span>`;

    const chars = document.querySelector<HTMLDivElement>('.word-items')!;
    chars.innerHTML = '';

    gameState.displayedWord = Array.from(
      { length: gameState.word.length },
      () => {
        const item = document.createElement('li');
        item.classList.add('item');
        item.innerText = '_';
        return item;
      }
    );

    gameState.displayedWord.forEach((item) => chars.append(item));
    return gameState;
  };
}
