// import eventKey from './eventKeyAndCheckChar.js';

export default function refreshGame(questions) {
  let index = 0;

  return function () {
    const gameState = {
      word: questions[index].answer,
      hint: questions[index].hint,
      count: 0,
      pressedChars: new Set(),
      displayedWord: [],
      isGamePaused: false,
      isGameWon: false,
      isGameLost: false,
    };

    index += 1;

    if (index >= questions.length) {
      console.log(index);
      index = 0;
      console.log(index);
    }

    const hint = document.querySelector('.hint-wrap p');
    hint.innerHTML = `<span class="hint-accent">Hint: </span>${gameState.hint}`;
    const mistakes = document.querySelector('.mistakes-wrap');
    mistakes.innerHTML = `<span class="mistakes">Incorrect guesses: <span class="count">${gameState.count}</span> / 6 </span> `;

    const chars = document.querySelector('.word-items');
    chars.innerHTML = '';

    gameState.displayedWord = Array.from(
      { length: gameState.word.length },
      () => {
        const item = document.createElement('li');
        item.classList.add('item');
        item.innerText = '_';
        return item;
      }
    );

    gameState.displayedWord.forEach((item) => chars.append(item));
    console.log(gameState.displayedWord);

    return gameState;
  };
}
