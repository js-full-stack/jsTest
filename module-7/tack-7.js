const inputRef = document.getElementById('font-size-control');
const spanRef = document.getElementById('text');

inputRef.addEventListener('input', changeInputValue);

function changeInputValue(event) {
  const inputValue = event.target.value;
  spanRef.style.fontSize = `${inputValue}px`;
  return;
}
