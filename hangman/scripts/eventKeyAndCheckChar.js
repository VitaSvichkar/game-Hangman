import showChar from './showChar.js';
import checkErrorsCount from './checkErrorsCount.js';

let word;
let count = 0;

export default function eventKey(answer) {
  word = answer;
  console.log(word);
}

export function checkChar(k) {
  console.log(word);

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
