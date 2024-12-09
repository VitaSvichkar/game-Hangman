import showChar from './show-char.js';
import checkErrorsCount from './check-errors-count.js';

export default function eventKey(word) {
  let count = 0;

  window.addEventListener('keydown', (e) => {
    checkChar(e.key);
  });

  function checkChar(k) {
    const countMistakes = document.querySelector('.count');
    const indexChar = [];
    const key = k.toUpperCase();
    const guessWord = word.toUpperCase().split('');

    if (/^[A-Z]$/.test(key) && !guessWord.includes(key)) {
      count += 1;
      countMistakes.innerText = count;
      checkErrorsCount(count);
    } else {
      guessWord.forEach((el, index) => {
        if (el === key) {
          indexChar.push(index);
          showChar(indexChar, key, guessWord);
        }
      });
    }
  }
}
