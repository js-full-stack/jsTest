// Получаем ссылку на H1 по классу
const titleRef = document.querySelector('.page-title');

console.log(
  'Получение ссылки на элемент через querySelector по классу: ',
  titleRef,
);

// Получаем  текстовый контент DOM-элемента titleRef
const getTextTitle = titleRef.textContent;
console.log(
  'Получение текстового контента элемента через  textContent: ',
  getTextTitle,
);
// // Меняем  текстовый контент DOM-элемента titleRef
// const changeTextTitle = (titleRef.textContent = 'Привет, добро пожаловать ');
// console.log('Изменение заголовка через textContent: ', changeTextTitle);

// // Получаем ссылку на первый элемент с классом nav__link
// const linkRef = document.querySelector('.nav__link');
// console.log(linkRef);

// // Получаем ссылку на все элементы с классом nav__link

// const allLinkRef = document.querySelectorAll('.nav__link');
// console.log('Ссылки на все элементы с классом .nav-link :', allLinkRef);

// // Получаем ссылку на изображение
// const imgRef = document.querySelector('.hero-image');
// console.log('Ссылка на элемент-картинку:', imgRef);

// // Изменяем атрибут alt изображения
// imgRef.alt = 'Это моя фотка';

// // Узнаем, есть ли у элемента атрибут
// console.log('Если есть атрибут, получим true:', imgRef.hasAttribute('alt'));
// console.log('Получим значение атрибута: ', imgRef.getAttribute('alt'));
// const newAlt = imgRef.setAttribute('alt', 'Моя Новая Фотка!');
// console.log(
//   'Получим значение атрибута после изменения: ',
//   imgRef.getAttribute('alt'),
// );

// // Методы для работы с классами элементов
// const activeLinkRef = document.querySelector('.nav__link--active');
// console.dir(activeLinkRef);

// Меняем ссылку и добавляем инлайн стили
// activeLinkRef.href = '/blog';
// activeLinkRef.style.color = 'red';

// //Работа с классами через свойство classList
// console.log(
//   'Получаем массив из всех классов элемента:',
//   activeLinkRef.classList,
// );

// console.log(
//   'Проверяем, содержит ли элемент класс nav__link--primary через метод contains(пока такого класса нет - false):',
//   activeLinkRef.classList.contains('nav__link--primary'),
// );

// activeLinkRef.classList.add('nav__link--primary');
// console.log(
//   'Добавили класс nav__link--primary через метод add, проверим теперь:',
//   activeLinkRef.classList.contains('nav__link--primary'),
// );
