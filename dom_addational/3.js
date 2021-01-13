const inputRef = document.querySelector('#id888');
const pharagraph = document.querySelector('.js-text-input-part-2');

inputRef.addEventListener('input', _.debounce(outputsText, 200));

function outputsText(event) {
  pharagraph.textContent = event.target.value;
}
