import { GameState } from '../src/types';

export default function showModal(state: GameState): void {
  const modal = document.querySelector<HTMLDivElement>('.modal-wrap')!;
  modal.classList.add('modal-visible');

  const resultText = document.querySelector<HTMLDivElement>('.modal-result')!;
  const button = document.querySelector<HTMLDivElement>('.modal-btn')!;
  const secretWord =
    document.querySelector<HTMLDivElement>('.modal-secret-word')!;

  if (state.isGameLost) {
    resultText.innerText = 'You lost';
    button.innerText = 'Try again';
    secretWord.innerText = state.word;
  } else if (state.isGameWon) {
    resultText.innerText = 'You win';
    button.innerText = 'Next word';
    secretWord.innerText = state.word;
  }
}
