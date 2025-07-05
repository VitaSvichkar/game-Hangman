"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkChar = void 0;
const showModal_js_1 = __importDefault(require("./showModal.js"));
function checkChar(e, state) {
    var _a, _b;
    const countMistakes = document.querySelector('.count');
    let key;
    if (e instanceof KeyboardEvent) {
        key = e.key.toUpperCase();
    }
    else {
        const target = e.target;
        key = target.innerText;
    }
    const keyKeyboard = Array.from(document.querySelectorAll('.key'));
    const keyStyle = keyKeyboard.filter((item) => item.innerText === key);
    const word = state.word.toUpperCase();
    let correctGuess = false;
    if (state.isGamePaused)
        return;
    if ([...state.pressedChars].includes(key)) {
        correctGuess = true;
        return;
    }
    state.pressedChars.add(key);
    keyStyle.forEach((el) => el.classList.add('key-inactive'));
    for (let i = 0; i < word.length; i += 1) {
        if (!/^[A-Z]$/.test(key)) {
            return;
        }
        if (word[i] === key) {
            state.displayedWord[i].textContent = key;
            correctGuess = true;
        }
        (_a = state.sound) === null || _a === void 0 ? void 0 : _a.call(state);
    }
    if (!correctGuess) {
        state.count += 1;
        (_b = state.draw) === null || _b === void 0 ? void 0 : _b.call(state, state.count);
    }
    countMistakes.textContent = `${state.count}`;
    checkGameEnd(state);
}
exports.checkChar = checkChar;
// check
function checkGameEnd(state) {
    const isLost = checkErrorsCount(state);
    const isGuess = isWordGuess(state);
    if (isLost || isGuess) {
        (0, showModal_js_1.default)(state);
    }
}
function checkErrorsCount(state) {
    if (state.count === 6) {
        state.isGamePaused = true;
        state.isGameLost = true;
        return true;
    }
    return false;
}
function isWordGuess(state) {
    const guessWord = state.displayedWord
        .map((item) => item.innerText)
        .join('');
    const word = state.word.toUpperCase();
    if (word === guessWord) {
        state.isGameWon = true;
        return true;
    }
    return false;
}
