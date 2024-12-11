export default function showKeyboard() {
  const keyboard = document.querySelector('.keyboard');

  for (let i = 65; i <= 90; i += 1) {
    const keyWrap = document.createElement('div');
    keyWrap.classList.add('key');
    const char = String.fromCharCode(i);
    keyWrap.innerText = char;
    keyboard.append(keyWrap);
  }
}
