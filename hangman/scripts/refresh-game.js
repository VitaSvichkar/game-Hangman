import eventKey from './event-key.js';

export default function refreshGame(questions) {
  let ind = 0;
  const answer = questions[ind].answer;
  const question = questions[ind].hint;
  const hint = document.querySelector('p');
  console.log(question);
  hint.innerHTML = `<span class="hint-accent">Hint: </span>${question}`;
  const mistakes = document.querySelector('.mistakes-wrap');
  console.log(mistakes);
  const chars = document.querySelector('.word-items');
  mistakes.innerHTML = `<span class="mistakes">Incorrect guesses: 0 / 6 </span> `;
  [...answer].forEach((el) => {
    const item = document.createElement('li');
    item.classList.add('item');
    item.innerText = '_';
    chars.append(item);
  });
  eventKey(answer);
}
