// Функция для создания массива слагов
// const slugify = function (string)
const slugify = string => {
  const words = string.toLocaleLowerCase().split(' ');
  const slug = words.join('-');

  return slug;
};

// Создаем массив строк articles
const articles = [
  'Top 10 benefits of React frameword',
  'Data Protecting and protecting your users in light of GDPR',
  'How to find Unique and Memorable Name for Your Priduct',
];

//
const slugs = [];

// Перебираем строки в массиве articles
for (const article of articles) {
  const slug = slugify(article);

  //   Переводим строки в массив
  slugs.push(slug);
}

// Выводим массив слагов
console.log(slugs);
