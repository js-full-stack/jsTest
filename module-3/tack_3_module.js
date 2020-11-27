// Tack -3

// const findBestEmployee = function (employees) {
//   'use strict';
//   // Write code under this line

//   let workload = 0;
//   let name = '';

//   for (const key in employees) {
//     if (employees[key] > workload) {
//       workload = employees[key];
//       name = key;
//     }
//   }
//   return name;
// };

// [key] - передает переменную const key
// если написать employees.key - передаст клбч объекта
// Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// console.log(findBestEmployee(developers));

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };

// console.log(findBestEmployee(supports));

//

// console.log('Total: ', totalFeedback);

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
//   //   return employees;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   mango: 300,
//   poly: 250,
//   alfred: 450,
// };
// console.log(countTotalSalary(developers));

// const supports = {
//   kiwi: 200,
//   lux: 150,
//   chelsy: 150,
// };
// console.log(countTotalSalary(supports));
