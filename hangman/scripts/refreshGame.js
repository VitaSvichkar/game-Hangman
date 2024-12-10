import eventKey from './eventKeyAndCheckChar.js';

export default function refreshGame(questions) {
  let ind = 0;
  const answer = questions[ind].answer;
  const question = questions[ind].hint;
  const hint = document.querySelector('.hint-wrap p');
  console.log(question);
  hint.innerHTML = `<span class="hint-accent">Hint: </span>${question}`;
  const mistakes = document.querySelector('.mistakes-wrap');
  mistakes.innerHTML = `<span class="mistakes">Incorrect guesses: <span class="count">0</span> / 6 </span> `;

  const chars = document.querySelector('.word-items');

  [...answer].forEach((el) => {
    const item = document.createElement('li');
    item.classList.add('item');
    item.innerText = '_';
    chars.append(item);
  });

  eventKey(answer);
}
