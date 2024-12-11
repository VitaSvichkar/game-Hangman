export default function showModal(state) {
  const modal = document.querySelector('.modal-wrap');
  modal.classList.add('modal-visible');

  const resultText = document.querySelector('.modal-result');
  const button = document.querySelector('.modal-btn');
  const secretWord = document.querySelector('.modal-secret-word');

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
