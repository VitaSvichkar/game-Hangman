export default function renderPage() {
  const body = document.querySelector('body');
  const canvas = document.createElement('canvas');
  canvas.width = 500;
  canvas.height = 500;
  const ctx = canvas.getContext('2d');
  const word = 'canvas';
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

  content.append(chars, hintWrap, keyboard);
  wrap.append(canvas, content);
  body.append(wrap);

  console.log('page');

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

  function showChar() {
    for (let i = 0; i < word.length; i += 1) {
      const char = document.createElement('li');
      char.innerText = '_';
      chars.append(char);
    }
  }
  showChar();
}
