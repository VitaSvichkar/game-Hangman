import refreshGame from './refreshGame.js';
import { checkChar } from './checks.js';

export default function logic(arr) {
  const updateGame = refreshGame(arr);
  const gameState = updateGame();

  window.addEventListener('keydown', (e) => {
    checkChar(e.key, gameState);
  });
}
