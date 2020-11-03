// Тернарный оператор

// const age = 15;
// const category = age >= 18 ? 'adult' : 'child';
// console.log(category);

// Инструкция switch - аналог if else при сравнении

// if (stars === 1) {
//   console.log('1');
// } else if (stars === 2) {
//   console.log('2');
// } else if (stars === 3) {
//   console.log('3');
// } else if (stars === 4) {
//   console.log('4');
// } else if (stars === 5) {
//   console.log('5');
// } else {
//   console.log('Выберите отель');
// }

// const stars = 2;
// let price = 0;

// switch (stars) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//   case 3:
//     price = 30;
//     break;

//   case 4:
//     price = 70;
//     break;

//   case 5:
//     price = 100;
//     break;

//   default:
//     console.log('Неверный выбор');
// }

// console.log(price);

// Пример цикла со счетчиком (for)

// let userInput = prompt('Введите число');
// userInput = Number(userInput);
// let total = 0;

// for (let i = 1; i <= userInput; i += 1) {
//   total += i;
// }

// console.log(`Total = ${total}`);

// Пример цикла со счетчиком (while)
// const number = 5;
// let total = 1;
// let i = 1;

// while (i <= number) {
//   total += i;

//   i += 1;
// }

// console.log(`Total = ${total}`);

// Пример цикла do... while

// let userInput;

// do {
//   userInput = prompt('Введи 5');

//   if (userInput === null) {
//     console.log('Выход совершен');
//     break;
//   }
//   userInput = Number(userInput);
// } while (userInput !== 5);

// console.log(userInput);

// Алгоритм задачи
// 1-создать цикл, который запрашивает ввод числа
// 2- есди введи null - прервать
// 3 - если не null - преобразовать в число и добавить в total
// 4 - в конце вывести общую сумму введенных чисел

let total = 0;

while (true) {
  let input = prompt('введи число');

  if (input === null) {
    console.log('Отменено пользователем');
    break;
  }

  input = Number(input);

  const notANumber = Number.isNaN(input);

  if (notANumber) {
    console.log('В строку введено не число');
    continue;
  }

  total += input;
}
true;

console.log(`сумма ${total}`);
