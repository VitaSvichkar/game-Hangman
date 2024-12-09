import showChar from './show-char.js';

export default function eventKey(word) {
  window.addEventListener('keydown', (e) => {
    checkChar(e.key);
  });

  function checkChar(k) {
    const indexChar = [];
    const key = k.toUpperCase();
    const guessWord = word.toUpperCase().split('');

    guessWord.forEach((el, index) => {
      if (el === key) {
        indexChar.push(index);
        showChar(indexChar, key, guessWord);
      }
      // ошибка +1
    });
  }
}
