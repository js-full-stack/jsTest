// Событие submit. Слушатель вешается на саму форму, а не на кнопку
const formRef = document.querySelector('.js-register-form');

formRef.addEventListener('submit', event => {
  event.preventDefault();
  // Через event.target можно достучаться до свойств объекта формы и получить их в переменную, а не делать кучу QuerySelector
  // console.dir(event.target.elements);

  const formELements = event.target.elements;
  // можно достучаться до отдельных элементов формы, например, до значения чекбокса
  console.log(formELements.subscription.value);
  // если нужно получить объект с заполненными данными из формы, используем конструктор FormData
  const formData = new FormData(formRef);

  // Если нужно отправить данные пользователя, заполнившего форму, на backend, можно создать объект и собрать его значения таким образом:

  const submittedData = {};

  // В proto formData лежат свойства, для перебора можно использовать forEach, куда приходит значение и ключ объекта, где ключ - значение атрибута name, а значение - input поля
  formData.forEach((value, key) => {
    console.log('key: ', key);
    console.log('value: ', value);
    submittedData[key] = value;
  });
  console.log(submittedData);
});
