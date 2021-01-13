/*  Keydown, Keypress, KeyUp 
Keypress срабатывает только на нажатие символьных клавиш
Keydown - для обработки в том числе служебных клавиш (alt, shift...)*/

// document.addEventListener('keypress', event => {
//   console.log(event);
// });

// В key хранится нажатая клавиша с учетом раскладки клавиатуры, а в code - без учета

// document.addEventListener('keydown', event => {
//     console.log('event.key: ', event.key);
//     console.log('event.code: ', event.code);
//   });

const outputRef = document.querySelector('.js-output');
const clearBtnRef = document.querySelector('.js-clear');

// Делаем строку ввода прямо в окне браузера
window.addEventListener('keypress', onKeypress);
// Очищаем строку ввода нажатием кнопки
clearBtnRef.addEventListener('click', onClearOutput);

function onKeypress(event) {
  outputRef.textContent += event.key;
}
function onClearOutput() {
  outputRef.textContent = '';
}
