import showModal from './showModal.js';
export function checkChar(e, state) {
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
        state.sound?.();
    }
    if (!correctGuess) {
        state.count += 1;
        state.draw?.(state.count);
    }
    countMistakes.textContent = `${state.count}`;
    checkGameEnd(state);
}
// check
function checkGameEnd(state) {
    const isLost = checkErrorsCount(state);
    const isGuess = isWordGuess(state);
    if (isLost || isGuess) {
        showModal(state);
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
