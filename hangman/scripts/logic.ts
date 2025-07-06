import refreshGame from './refreshGame.js';
import { checkChar } from './checks.js';
import draw from './drawBody.js';
import { Questions } from '../src/types.js';

export default function logic(arr: Questions[]) {
  const modalBtn = document.querySelector<HTMLDivElement>('.modal-btn')!;
  const modalWrap = document.querySelector<HTMLDivElement>('.modal-wrap')!;
  const keyboard = document.querySelector<HTMLDivElement>('.keyboard')!;
  const updateGame = refreshGame(arr);
  const canvas = document.getElementById('canvas')! as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  let drawBody = draw(ctx);
  let gameState = updateGame();
  gameState.draw = drawBody; //
  gameState.sound = addSound;

  const audio: HTMLAudioElement = new Audio('./click.mp3');

  window.addEventListener('keydown', (e: KeyboardEvent) => {
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

  keyboard.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('key')) {
      checkChar(e, gameState);
    }
  });

  function addSound(): void {
    audio.currentTime = 0;
    audio.play();
  }

  function newGame(): void {
    addSound();

    modalWrap.classList.remove('modal-visible');
    gameState = updateGame();
    gameState.draw = drawBody;
    gameState.sound = addSound;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBody = draw(ctx);
    const keyKeyboard = Array.from(
      document.querySelectorAll<HTMLDivElement>('.key')
    );

    keyKeyboard.forEach((item) => {
      item.classList.remove('key-inactive');
    });
  }
}
