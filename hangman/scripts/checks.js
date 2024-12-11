import showModal from './showModal.js';

export function checkChar(k, state) {
  const countMistakes = document.querySelector('.count');
  const key = k.toUpperCase();
  const word = state.word.toUpperCase();

  if (state.isGamePaused) return;

  let correctGuess = false;

  for (let i = 0; i < word.length; i += 1) {
    if (!/^[A-Z]$/.test(key)) {
      return;
    }

    if (word[i] === key) {
      state.displayedWord[i].innerText = key;
      state.guessedChars.add(key);
      correctGuess = true;
    }
  }

  if (!correctGuess) {
    state.count += 1;
  }

  countMistakes.innerText = state.count;

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
  const guessWord = state.displayedWord.map((item) => item.innerText).join('');
  const word = state.word.toUpperCase();

  if (word === guessWord) {
    state.isGameWon = true;
    return true;
  }
  return false;
}
