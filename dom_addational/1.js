// Задача: менять background страницы при клике на кнопку
const btn = document.querySelector('.styling-button');
const body = document.body;
console.log();

btn.addEventListener('click', () => {
  buttonClickHandler();
});

function buttonClickHandler() {
  const isActiveClass = body.classList.contains('bodyActive');
  console.log(isActiveClass);
  if (isActiveClass) {
    body.classList.remove('bodyActive');
    return;
  }
  body.classList.add('bodyActive');
  //   body.classList.toggle('bodyActive');
}
