/* 
Перебирает
Не изменяет
Возвращает что угодно

acc — промежуточный результат (аккумулятор)
number — текущий элемент массива
index — индекс текущего элемента массива
array — оригинальный массив
*/

// basic
// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce(function (acc, number, index, array) {
//   console.log('acc:', acc);
//   console.log(number);
//   console.log(index);
//   console.log(array);
// }, 0);

// index и array почти никогда не нужны
// Подсчет суммы массива
// 0 - начальное значение аккумулятора, с которого начинаются итерации (указывать необязательно)
// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

// useCase: подсчет общей суммы зарплат объекте
const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

// let total = 0;
// const salaryList = Object.values(salary);
// for (const element of salaryList) {
//   total += element;
// }

// console.log(total);
// то же самое через reduce
// const values = Object.values(salary);
// const totalSalary = values.reduce((acc, number) => acc + number, 0);
// console.log(totalSalary);

// _______________________________________________________________
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];

// // Подсчет общего количества часов игры (timePlayed)
// const totalTimePlayed = players.reduce(
//   (time, player) => time + player.timePlayed,
//   0,
// );
// console.log(totalTimePlayed);

// _____________________________________________________________
// Корзина товаров
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];
// // Подсчет общей суммы с учетом кол-ва товаров
// const totalAmount = cart.reduce(
//   (acc, amount) => acc + amount.price * amount.quantity,
//   0,
// );
// console.log(totalAmount);

// Сбор тегов из твитов
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 9, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.reduce(function (tags, tweet) {
//   // собираем и пушим теги
//   tags.push(...tweet.tags);
//   // возвращаем собранные теги
//   return tags;
//   // [] - изначальное значением аккумулятора
// }, []);
// console.log(allTags);

// // Выводим статистику тегов
// const tagsStats = allTags.reduce(function (acc, tag) {
//   console.log('tag:', tag);
//   console.log('acc', acc);
//   if (acc.hasOwnProperty(tag)) {
//     console.log('Увеличить значение');
//     acc[tag] += 1;
//     return acc;
//   }
//   console.log('Добавить свойство');
//   acc[tag] = 1;
//   return acc;
// }, {});

// console.log(tagsStats);
