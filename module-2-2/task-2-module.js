// task-1

// const getItemsString = function (array) {
//   'use strict';
//   let result = '';
//   // Write code under this line

//   for (let i = 0; i < array.length; i += 1) {
//     result += `${i + 1} - ${array[i]}\n`;
//   }
//   return result;
// };

// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));

//tack-2

// const calculateEngravingPrice = (message = '', pricePerWord = 0) => {
//   return message.split(' ').length * pricePerWord;
// };

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// );

// tack-3

// function findLongestWord(string = '') {
//   // Write code under this line
// const splitString = string.split(' ');
// let longersWord = splitString[0];
// for (let i = 1; i < splitString.length; i += 1) {
//   if (splitString[i].length > longersWord.length) {
//     longersWord = splitString[i];
//   }
// }
// return longersWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

// tack-4

// function formatString(string, maxLength = 40) {
//   // Write code under this line
//   let stringLength = '';
//   if (string.length < maxLength) {
//     stringLength = string;
//   } else {
//     stringLength = string.slice(0, maxLength) + '...';
//   }
//   return stringLength;
// }

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// ('Vestibulum facilisis, purus nec pulvinar...');

// tack-5
// function checkForSpam(str) {
//   ('use strict');
//   // Write code under this line
//   let message = str.toLowerCase();
//   if (message.includes('sale') || message.includes('spam')) {
//     return true;
//   }
//   return false;
// }

// console.log(checkForSpam('Latest sale technology news')); // false

// console.log(checkForSpam('JavaScript spam weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// tack-6
// function mapArray(array) {
//   'use strict';
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     numbers[i] = array[i] * 10;
//   }
//   return numbers;
// }

// console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20];

// console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25];

// Напиши функцию filterArray(array), принимающую 1 параметр array - массив.
// Функция проверяет каждое значение массива - является ли значение конечным числом(Number.isFinite).
// Для проверки используй цикл for.Числа добавляются в новый массив numbers с помощью метода push, а не числа - игнорируются.
// По завершению проверки массива array возвращается массив numbers.

// tack-7
// function filterArray(array) {
//   'use strict';
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (Number.isFinite(array[i]) === true) {
//       numbers.push(array[i]);
//     }
//     // Write code under this line
//   }

//   return numbers;
// }

// console.log(filterArray([-2, 0, 2]));

// console.log(filterArray([NaN, 'fsaf', Infinity]));

// tack 8
// function reduceArray(array) {
//   'use strict';
//   let total = 0;
//   // Write code under this line
//   if (array.length > 0) {
//     for (let i = 0; i < array.length; i += 1) {
//       total += array[i];
//     }
//   }

//   return total;
// }

// console.log(reduceArray([1, 2, 3]));

// console.log(reduceArray([-2, 0, 2]));

// tack-9

function isLoginValid(login, min = 4, max = 16) {
  if (login.length >= min || login.length <= max) {
    return true;
  }
  return false;
}

function isLoginUnique(allLogins, login) {
  'use strict';
  // Write code under this line
  if (allLogins.includes(login)) {
    return false;
  }
  return true;
}

function addLogin(allLogins, login) {
  'use strict';
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;
  // Write code under this line
  if (isLoginValid(login) === false) {
    return (message = ERROR);
  }

  if (isLoginUnique(allLogins, login) === false) {
    return (message = REFUSAL);
  }
  allLogins.push(login);
  return (message = SUCCESS);
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

console.log(addLogin(logins, 'Ajax'));
// 'Логин успешно добавлен!'

console.log(addLogin(logins, 'robotGoogles'));

console.log(addLogin(logins, 'Zod'));
// ('Ошибка! Логин должен быть от 4 до 16 символов');
