import isWordGuess from './is-word-guess.js';

export default function showChar(array, el, word) {
  const items = [...document.querySelectorAll('.item')];
  console.log(word);
  array.forEach((ind) => {
    items[ind].innerText = el;
  });
  const charsItem = items.map((el) => el.innerText);

  isWordGuess(word, charsItem);
}
