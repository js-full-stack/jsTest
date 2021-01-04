// Создание DOM - элементов (тегов)
// const titleRef = document.createElement('h1');
// console.log('На странице тега h1 нет, он создан в памяти браузера', titleRef);
// console.dir(titleRef);

// // // Добавляем текст
// titleRef.textContent = 'Динамически созданный заголовок';
// console.log('Теперь в памяти браузера в заголовок добавился текст :', titleRef);

// // Добавляем класс и id
// titleRef.classList.add('size-title');
// titleRef.id = 'title';

// Создадим карточку товаров
const product = {
  name: 'Сервоприводы',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
  price: 2000,
  available: true,
};

// Создаем контейнер div с классом product-card
const containerRef = document.createElement('div');
containerRef.classList.add('product-card');
// console.log(containerRef);

// // Создаем h2 с названием товара
const titleRef = document.createElement('h2');
titleRef.textContent = product.name;
titleRef.classList.add('product-card__name');

// console.log(titleRef);

// Создаем абзац с описанием
const descrRef = document.createElement('p');
descrRef.textContent = product.description;
// console.log(descrRef);

// Создаем абзац со стоимостью
const priceRef = document.createElement('p');
priceRef.textContent = `Цена: ${product.price} кредитов`;
// console.log(priceRef);

// // Объединяем созданные элементы в DOM-узел
// containerRef.appendChild(titleRef);
// containerRef.appendChild(descrRef);
// containerRef.appendChild(priceRef);

// То же самое через метод append (лучше использовать при вставке сразу нескольких элементов)
containerRef.append(titleRef, descrRef, priceRef);
console.log(containerRef);

// Вставляем containerRef в уже существующий на странице div, чтобы он отобразился в DOM
const cardRootRef = document.querySelector('#root');
cardRootRef.appendChild(containerRef);
