import products from './products.js';
console.table(products);

const createProductCard = product => {
  const containerRef = document.createElement('div');
  containerRef.classList.add('product-card');

  const titleRef = document.createElement('h2');
  titleRef.textContent = product.name;
  titleRef.classList.add('product-card__name');

  const descrRef = document.createElement('p');
  descrRef.textContent = product.description;

  const priceRef = document.createElement('p');
  priceRef.textContent = `Цена: ${product.price} кредитов`;

  containerRef.append(titleRef, descrRef, priceRef);

  return containerRef;
};

// console.log(createProductCard(products[0]));
// console.log(createProductCard(products[1]));

// Перебираем все элементы
// products.forEach(product => {
//   console.log(createProductCard(product));
// });

// Получаем массив из элементов
const productCards = products.map(product => createProductCard(product));
console.log(productCards);

const productsListRef = document.querySelector('.js-products');
console.log(productsListRef);

// Распыляем productCard
productsListRef.append(...productCards);
