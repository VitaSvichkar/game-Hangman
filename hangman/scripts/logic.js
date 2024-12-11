import refreshGame from './refreshGame.js';
import { checkChar } from './checks.js';

export default function logic(arr) {
  const modalBtn = document.querySelector('.modal-btn');
  const modalWrap = document.querySelector('.modal-wrap');
  const keyboard = document.querySelector('.keyboard');
  const updateGame = refreshGame(arr);
  let gameState = updateGame();

  window.addEventListener('keydown', (e) => {
    checkChar(e, gameState);
  });

  modalBtn.addEventListener('click', () => {
    modalWrap.classList.remove('modal-visible');
    gameState = updateGame();
    const keyKeyboard = [...document.querySelectorAll('.key')];

    keyKeyboard.forEach((item) => {
      item.classList.remove('key-inactive');
    });
  });

  keyboard.addEventListener('click', (e) => {
    if (e.target.classList.contains('key')) {
      checkChar(e, gameState);
    }
  });
}
