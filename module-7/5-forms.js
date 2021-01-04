// Событие submit
const formRef = document.querySelector('.js-register-form');
formRef.addEventListener('submit', event => {
  event.preventDefault();
  console.log('event.target:', event.target);
  console.log('Submit');
});
