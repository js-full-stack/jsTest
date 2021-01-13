// События инпутов: change или инпут
// change изменяет при потере фокуса (лучше для чекбоксов)
// input изменяет сразу при вводе (лучше для полей ввода)

// Получаем ссылку на основное поле ввода
const inputRef = document.querySelector('.js-input');
// Получаем ссылку на кнопку
const btnRef = document.querySelector('.js-button');
// Получаем ссылку на span кнопки, чтобы изменить подпись
const nameLabelRef = document.querySelector('.js-button > span');

// Получаем ссылку на span чекбокса
const licenseRef = document.querySelector('.js-license');

//   Добавляем слушателей событий

inputRef.addEventListener('focus', handleInputFocus);
inputRef.addEventListener('blur', handleInputBlur);
inputRef.addEventListener('input', handleInputChange);
licenseRef.addEventListener('change', handleLicenseChange);

// Callback на событие при фокусе
function handleInputFocus() {
  console.log('Получил фокус!');
}

// Callback на событие при потере фокуса
function handleInputBlur() {
  console.log('Потерял фокус!');
}

// Callback на событие ввода

function handleInputChange(event) {
  nameLabelRef.textContent = event.target.value;
}

//   Callback на событие клика на чекбокса=
function handleLicenseChange(event) {
  btnRef.disabled = !event.target.checked;
}
