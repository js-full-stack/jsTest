// _________________________________________________________________________________
// Task-1
// const addIndex = (element, index) => element + index;
// // Write code under this line
// const subIndex = (element, index) => element - index;

// function mapArray(array, cb) {
//   'use strict';
//   // Write code under this line
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     numbers[i] = cb(element, index);
//   }
//   return numbers;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(mapArray(arr, addIndex));
// [1, 3, 5, 7, 9];

// console.log(mapArray(arr, subIndex));
// [1, 1, 1, 1, 1];

// _________________________________________________________________________________
// Task-2

// const isUniq = (element, index, arr) => arr.indexOf(element) === index;
// const isEven = (element) => element % 2 === 0;

// function filterArray(array, cb) {
//   'use strict';
//   const numbers = [];
//   for(let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     const arr  = [1,2,3,4,5,1,2,5];
//     // Write code under this line
//     const isTrue = cb(element, index, arr)
//     if (isTrue) {
//       numbers[i] = numbers.push(element)
//   }
//   return numbers;
// }

// console.log(filterArray(arr, isUniq));

// // Tack-2
// const isUniq = (element, index, arr) => arr.indexOf(element) === index;
// const isEven = (element) => element % 2 === 0;

// function filterArray(array, cb) {
//   'use strict';
//   const numbers = [];
//   for(let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     // Write code under this line
//     if (cb (element, index, array)) {
//       numbers.push(element);
//   }
//   }
//   return numbers;
// }

// const arr  = [1,2,3,4,5,1,2,5];

// _________________________________________________________________________________
// Task-3
// Callback функция для получения одного вычисляемого значения массива
// Функции add, sub и mult принимают два параметра - accum и element , возвращает число - сумму, разность или произведение параметров.

// Дополни тело функции reduceArray строкой присвоения accum вызова функции cb. Функция reduceArray должна будет подсчитать сумму или разность или произведение всех элементов массива в зависимости от того какая именно из трех функция (add, mult, sub) будет передана в качестве cb.

const add = (accum, element) => accum + element;
const mult = (accum, element) => accum * element;
const sub = (accum, element) => accum - element;

function reduceArray(array, cb, initial) {
  'use strict';
  let i;
  let accum;
  if (arguments.length >= 3) {
    accum = initial;
    i = 0;
  }
  if (arguments.length === 2) {
    accum = array[0];
    i = 1;
  }
  for (i; i < array.length; i += 1) {
    const element = array[i];
    // Write code under this line
    accum = cb(accum, element);
  }
  return accum;
}

const arr = [1, 2, 3, 4, 5];

//console.log(reduceArray(arr, add)); // 15
//console.log(reduceArray(arr, add, 10)); // 25

//console.log(reduceArray(arr, mult)); // 120
//console.log(reduceArray(arr, mult, 10)); // 1200

//console.log(reduceArray(arr, sub)); // -13
//console.log(reduceArray(arr, sub, 10)); // -5
