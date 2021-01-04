// Вызов callback со ссылкой на функцию высшего порядка

// debugger;
// const greet = function (name) {
//   console.log(`Hello ${name}`);
// };

// const greetWithName = function (callback) {
//   const name = 'Mango';
//   console.log(callback);
//   callback(name);
// };

// greetWithName(greet);
// ____________________________________________________
// // Функция, которая вызывает консоль лог указанное кол-во раз
// for (let i = 1; i < 10; i += 1) {
//   console.log(i);
// }

// const repeatLog = function (n) {
//   for (let i = 1; i < n; i += 1) {
//     console.log(i);
//   }
// };

// repeatLog(6);
// ____________________________________________________
// const printValue = function (value) {
//   console.log(value);
// };

// const prettyPrint = function (value) {
//   console.log('Logging value: ', value);
// };

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// // Передаем printValue как callback-функцию
// repeat(3, printValue);

// // Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);

// ____________________________________________________
// Объявление callback функции анонимно как стрелочной, во время передачи

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// const labels = [];

// repeat(5, value => {
//   labels.push(`Label ${value + 1}`);
// });

// console.log(labels);

// Перебор элементов массива. 1 параметр - массив, 2 - callback// ___________________________________________________
// debugger;
const filter = function (array, test) {
  const filteredElements = [];

  for (const element of array) {
    const passed = test(element);

    if (passed) {
      filteredElements.push(element);
    }
  }

  return filteredElements;
};

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const freshFruits = filter(fruits, fruit => fruit.isFresh);
console.log(freshFruits);
// массив с объектами apples и bananas
