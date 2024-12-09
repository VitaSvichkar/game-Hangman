export default function showChar(array, el) {
  const charItems = [...document.querySelectorAll('.item')];

  array.forEach((ind) => {
    charItems[ind].innerText = el;
  });
}
