"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showKeyboard() {
    const keyboard = document.querySelector('.keyboard');
    const keys = [
        'Q',
        'W',
        'E',
        'R',
        'T',
        'Y',
        'U',
        'I',
        'O',
        'P',
        'A',
        'S',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'Z',
        'X',
        'C',
        'V',
        'B',
        'N',
        'M',
    ];
    keys.forEach((el) => {
        const keyWrap = document.createElement('div');
        keyWrap.classList.add('key');
        keyWrap.textContent = el;
        keyboard.append(keyWrap);
    });
}
exports.default = showKeyboard;
