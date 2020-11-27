// printMessage - функция обратного вызова(callback)(принимает как параметры др. функции)
// higherOrderFunction - функция высшенго порядка(передается др. функции как аргумент)

const printMessage = function (message) {
  console.log(message);
};

// Функция высшего порядка
// const higherOrderFunction = function (callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// higherOrderFunction(printMessage);

// ___________________________________________________________________________
// Абстрагирование повторений - функция, кот. вызывает console.log X раз

// const repeatLog = function (n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// };

// repeatLog(5);

// // Пример сложнее
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

// Передаем printValue как callback-функцию
// repeat(9, printValue);

// Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2
