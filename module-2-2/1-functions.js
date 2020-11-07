// // a, b, c это параметры
// const add = function (a, b, c) {
//   return a + b + c;
// };
// const result = add(1, 2, 3);
// console.log(result); // 6

// // 1, 2, 3 это аргументы
// const result = add(1, 2, 3);
// console.log(result); // 6

// // 5, 10, 15 это аргументы
// console.log(add(5, 10, 15));

// const fnA = function () {
//   console.log('Начала выполняться [fnA]');
//   fnB();
//   console.log('Продолжила выполняться [fnA] после выхода из [fnB]');
// };

// Значение функции по умолчанию
// const count = function (countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// };

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(undefined, 5, 2); // countFrom = 0, countTo = 5, step = 2
// count(); // countFrom = 0, countTo = 10, step = 1

// Псевдомассив с переменной arguments - суммирование любого количества аргументов
// const sum = function () {
//   let total = 0;

//   for (const argument of arguments) {
//     total += argument;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3)); //  6
// console.log(sum(1, 2, 3, 4)); //  10
// console.log(sum(1, 2, 3, 4, 5)); //  15

// Паттерн Guard Clause - плоский, читабельный, одномерный код
// const withdraw = function (amount, balance) {
//   if (amount === 0) {
//     console.log('Для проведения операции введите сумму больше нуля.');
//     return;
//   }

//   if (amount > balance) {
//     console.log('Недостаточно средств на счету.');
//     return;
//   }

//   console.log('Операция снятия средств проведена.');
// };

// withdraw(0, 300); // Для проведения операции введите сумму больше нуля.
// withdraw(500, 300); // Недостаточно средств на счету.
// withdraw(100, 300); // Операция снятия средств проведена.

// const value = 50;

// const add = function (num) {
//   const value = 10;
//   const innerValue = 5;

//   return num + value + innerValue;
// };

// // value объявлен глобально и поэтому доступен
// console.log(value); // 50

// console.log(add(20)); // 35

// // Ошибка, переменная innerValue не объявлена в этой области
// // видимости, она доступна только внутри функции add
// console.log(innerValue);]

// const fn = (a, b, c) => {
//   return a + b + c;
// };

// // Если параметр один, то он может быть без круглых скобок.
// const fn = x => {
//   return x * 2;
// };

// // Если параметров нет, то обязательно должны быть пустые круглые скобки.
// const fn = () => {
//   console.log('Hello! :]');
// };

const add = function (a, b) {
  console.log('a = ', a);
  console.log('b = ', b);

  const result = a + b;

  return result;
};

const r1 = add(1, 2);
console.log(r1);

const r2 = add(16, 6);
console.log(r2);
r2;

const r3 = add(60, 40);
console.log(r3);
