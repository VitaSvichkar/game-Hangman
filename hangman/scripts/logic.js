import refreshGame from './refreshGame.js';
import { checkChar } from './checks.js';

export default function logic(arr) {
  const modalBtn = document.querySelector('.modal-btn');
  const modalWrap = document.querySelector('.modal-wrap');
  const keyboard = document.querySelector('.keyboard');
  const updateGame = refreshGame(arr);
  let gameState = updateGame();
  const audio = new Audio('./click.mp3');

  window.addEventListener('keydown', (e) => {
    if (modalWrap.classList.contains('modal-visible')) {
      if (e.key === 'Enter') {
        newGame();
      }
    }

    checkChar(e, gameState, addSound);
  });

  modalBtn.addEventListener('click', () => {
    newGame();
  });

  keyboard.addEventListener('click', (e) => {
    if (e.target.classList.contains('key')) {
      checkChar(e, gameState, addSound);
    }
  });

  function addSound() {
    audio.currentTime = 0;
    audio.play();
  }

  function newGame() {
    addSound();

    modalWrap.classList.remove('modal-visible');
    gameState = updateGame();
    const keyKeyboard = [...document.querySelectorAll('.key')];

    keyKeyboard.forEach((item) => {
      item.classList.remove('key-inactive');
    });
  }
}
