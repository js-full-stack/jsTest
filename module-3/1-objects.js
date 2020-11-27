// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// console.log(hotel);
// console.log(hotel.stars);
// console.log(hotel['stars']);

// Если ключа нет в теле объекта, но он указан в переменной, получить
// доступ к нему через console.log можно при такой записи:
// const key = 'stars';
// console.log(hotel[key]);

// Замена значения свойства
// hotel.stars = 3;
// console.log(hotel);

//
//

//ОБращение к объекту через контекст this в функции
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,

//   //   Создание методов без : function (синтаксис метода объекта)
// updateName(newName) {
// console.log(newName);
//     this.someMethod();
//     this.name = newName;
//   },
//   someMethod() {
//     console.log('Hello from someMethod');
//   },
// };

// hotel.updateName('Lagoon');
// console.log(hotel);
// console.log(hotel);
// hotel.someMethod();

//
//
// Перебор ключей объекта через for... in - олдскул
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// for (const key in feedback) {
//   console.log('Key: ', key);

//   totalFeedback += feedback[key];

//   console.log(feedback.key);
//   - не работает, т.к. свойства key нет в объекте;
//   console.log(feedback[key]);
//   - работает, т.к [key] - доступ к ключу, если он переменная
// }

// console.log('Total: ', totalFeedback);

//
// Перебор объектов через статические методы

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };
// let totalFeedback = 0;

// Перебор ключей

// const keys = Object.keys(feedback);
// // console.log(keys);
// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);
//   totalFeedback += feedback[key];
// }

// console.log(totalFeedback);

//  t.values

// Подсчет значений
// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//   console.log(value);

//   totalFeedback += value;
// }

// console.log('Total: ', totalFeedback);
