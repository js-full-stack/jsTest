const counterValue = document.querySelector('#value');
const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]',
);
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]',
);

decrementBtnRef.addEventListener('click', decrementCounterOnClick);
incrementBtnRef.addEventListener('click', incrementCounterOnClick);

function decrementCounterOnClick() {
  counterValue.textContent--;
}

function incrementCounterOnClick() {
  counterValue.textContent++;
}
