import refreshGame from './refreshGame.js';
import { checkChar } from './checks.js';
import draw from './drawBody.js';

export default function logic(arr) {
  const modalBtn = document.querySelector('.modal-btn');
  const modalWrap = document.querySelector('.modal-wrap');
  const keyboard = document.querySelector('.keyboard');
  const updateGame = refreshGame(arr);
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let drawBody = draw(ctx);
  let gameState = updateGame();
  gameState.draw = drawBody;
  gameState.sound = addSound;

  const audio = new Audio('./click.mp3');

  window.addEventListener('keydown', (e) => {
    if (modalWrap.classList.contains('modal-visible')) {
      if (e.key === 'Enter') {
        newGame();
      }
    }

    checkChar(e, gameState);
  });

  modalBtn.addEventListener('click', () => {
    newGame();
  });

  keyboard.addEventListener('click', (e) => {
    if (e.target.classList.contains('key')) {
      checkChar(e, gameState);
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
    gameState.draw = drawBody;
    gameState.sound = addSound;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBody = draw(ctx);
    const keyKeyboard = [...document.querySelectorAll('.key')];

    keyKeyboard.forEach((item) => {
      item.classList.remove('key-inactive');
    });
  }
}
