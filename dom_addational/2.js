const TypeInput = {
  TEXT: 'text',
  PASSWORD: 'password',
};

const btnRef = document.querySelector('button[data-action="toggleTypeInput"]');
const inputRef = document.querySelector('#id777');
const pharagraph = document.querySelector('.js-text-input');

inputRef.addEventListener('input', onlineText);
btnRef.addEventListener('click', toggleTypeInput);

function onlineText(event) {
  const stringContent = event.target.value;

  pharagraph.textContent = stringContent;
}

function toggleTypeInput() {
  if (inputRef.type === TypeInput.PASSWORD) {
    inputRef.type = TypeInput.TEXT;
    btnRef.textContent = 'Make do not see';
    return;
  }
  inputRef.type = 'password';
  btnRef.textContent = 'Show';
}
