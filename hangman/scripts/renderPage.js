import refreshGame from './refreshGame.js';
import logic from './logic.js';

export default function renderPage(questionsArray) {
  const body = document.querySelector('body');

  // canvas
  const canvas = document.createElement('canvas');
  canvas.width = 600;
  canvas.height = 600;
  const ctx = canvas.getContext('2d');

  // modal
  const modalWrap = document.createElement('div');
  modalWrap.classList.add('modal-wrap');

  const modal = document.createElement('div');
  modal.classList.add('modal');

  const resultText = document.createElement('h3');
  resultText.classList.add('modal-result');

  const secretWord = document.createElement('p');
  secretWord.classList.add('modal-secret-word');
  secretWord.innerHTML = `<span class="modal-secret-word">rkogirn</span>`;

  const button = document.createElement('button');
  button.classList.add('modal-btn');

  // page
  const wrap = document.createElement('div');
  wrap.classList.add('wrap');

  const content = document.createElement('div');
  content.classList.add('content');

  const chars = document.createElement('ul');
  chars.classList.add('word-items');

  const hintWrap = document.createElement('div');
  hintWrap.classList.add('hint-wrap');
  const hint = document.createElement('p');
  const mistakesWrap = document.createElement('div');
  mistakesWrap.classList.add('mistakes-wrap');

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  hintWrap.append(hint, mistakesWrap);
  content.append(chars, hintWrap, keyboard);
  wrap.append(canvas, content);
  modal.append(resultText, secretWord, button);
  modalWrap.append(modal);
  body.append(wrap, modalWrap);

  logic(questionsArray);

  // virtual keyboard
  function showKeyboard() {
    for (let i = 65; i <= 90; i += 1) {
      const keyWrap = document.createElement('div');
      const char = String.fromCharCode(i);
      keyWrap.innerText = char;
      keyboard.append(keyWrap);
    }
  }
  showKeyboard();

  button.addEventListener('click', () => {
    modalWrap.classList.remove('modal-visible');
    refreshGame(questionsArray);
  });
}
