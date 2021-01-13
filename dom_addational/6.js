const formRef = document.querySelector('.js-form');
formRef.addEventListener('submit', toSendForm);

function toSendForm(event) {
  event.preventDefault();

  const fieldsForm = new FormData(event.currentTarget);
  const object = {};

  fieldsForm.forEach((value, name) => {
    console.log(value);
    console.log(name);
    object[name] = value;
  });
  console.log(object);
}
