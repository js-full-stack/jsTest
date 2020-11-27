// Массив объектов и функция поиска друзей

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];

// console.table(friends);
// // // Обращение к объекту в массиве по индексу
// console.log(friends[0]);

// // Перебор объектов в массиве, поиск друга
// const nameToFind = 'Poly';

// for (const friend of friends) {
//   console.log(friend);
//   //   console.log(friend.name);
//   //   console.log(friend.online);

//   if (friend.name === 'Poly') {
//     console.log('Нашли Poly!');
//     break;
//   }
//   console.log('Друг не найден!');
// }

// // Функция для поиска друзей
// const findFriend = function (allFriends, name) {
//   for (const friend of allFriends) {
//     console.log(friend);

//     if (friend.name === name) {
//       return 'Нашли!!!';
//     }
//   }
//   return 'Не нашли!!!';
// };

// console.log(findFriend(friends, 'Mango'));
// console.log(findFriend(friends, 'Chelsy'));

//
// Суммирование значений свойств объекта
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. Функция считает общую сумму зарплаты работников и возвращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// for (const key in feedback) {
//   console.log('Key: ', key);

//   totalFeedback += feedback[key];
//   console.log(feedback[key]);

// console.log(feedback.key) - не работает, т.к. свойства keyc

// - работает, т.к [key] - доступ к ключу, если он переменная
// }

// _______________________________________________________________________________;
// tack-4

// const countTotalSalary = function (employees) {
//   'use strict';
//   // Write code under this line
//   let totalSum = 0;
//   //   const sumSalaries = Object.values(employees);
//   for (const key in employees) {
//     totalSum += employees[key];
//   }
//   return totalSum;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   mango: 300,
//   poly: 250,
//   alfred: 450,
// };
// console.log(countTotalSalary(developers));

// const supports = {a
//   kiwi: 200,
//   lux: 150,
//   chelsy: 150,
// };
// console.log(countTotalSalary(supports))

// function findEmployeeNameWithHighestSalary(salaries) {
//   const employees = Object.entries(salaries);
//   console.log(employees);
//   let highestSalary = employees[0][1];
//   let employeeName = employees[0][0];

//   for (const employee of employees) {
//     if (employee[1] > highestSalary) {
//       employeeName = employee[0];
//       highestSalary = employee[1];
//     }
//   }
//   return { name: employeeName, salary: highestSalary };
// }

// const result = findEmployeeNameWithHighestSalary(salaries);
// console.log(
//   'Employee name: ',
//   result.name,
//   '| Employee salary: ',
//   result.salary,
// );

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// for (const key in hotel) {
//   console.log('Value: ', hotel[key]);
// }

//

// Оператор in и метод push
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.

// Функция возвращает массив значений определенного свойства prop из каждого объекта в массиве.

// Используй метод push для добавления значения в массив и оператор in для проверки наличия свойства в объекте.
// Объекты и ожидаемый результат

// function getAllPropValues(array, prop) {
//   const newArray = [];
// }

// function getAllPropValues(array, prop) {
//   let allValuesArray = [];
//   for (const item of array) {
//     if (prop in item) {
//       allValuesArray.push(item[prop]);
//     }
//   }
//   return allValuesArray;
// }

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];
// for (... of ...) {
//     if (...in ...) {
//             ....push(...[...]);
//     }
//   }

// console.log(getAllPropValues(products, 'name'));
// // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват'];

// //console.log(getAllPropValues(products, 'quantity'));
// // [4, 2, 1, 1, 3, 7, 2]

// //console.log(getAllPropValues(products, 'category'));
// //  []

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// function findEmployeeNameWithHighestSalary(salaries) {
//   const employees = Object.entries(salaries);
//   console.log(employees);
//   let highestSalary = employees[0][1];
//   let employeeName = employees[0][0];

//   for (const employee of employees) {
//     if (employee[1] > highestSalary) {
//       employeeName = employee[0];
//       highestSalary = employee[1];
//     }
//   }
const add = function (value, ...args) {
  console.log(value); // первый аргумент
  console.log(args); // массив всех остальных аргументов
};

add(10, 1, 2, 3);
add(15, 1, 2, 3, 4, 5);

//   return { name: employeeName, salary: highestSalary };
// }
