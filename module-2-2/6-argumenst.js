// const add = function () {
// Array.from - преобразовывает arguments в массив - олдскул
//   const args = Array.from(arguments);
//   console.log(arguments);
//   console.log(args);

//   // Перебор через for
//   for (let i = 0; i < args.length; i += 1) {
//     console.log(args[i]);
//   }
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6, 7));

// Сбор аргументов в массив через операцию ...rest
// const add = function (...args) {
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// };


let cost;
const subscription = 'premium';

switch (subscription) {
  case 'free':
    cost = 0;
    break;

  case 'pro':
    cost = 100;
    break;

  case 'premium':
    cost = 500;
    break;

  default:
    console.log('Invalid subscription type');
}

console.log(cost); // 500










function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) {
    message = 'Отменено пользователем!';
  } else if (password === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
  } else {
    message = 'Доступ запрещён, неверный пароль!';
  }

  return message;
}












// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6, 7));

//Функция прикрепления тега к строке
//  const posts = ['post-1', 'post-2', 'post-3', 'post-4', 'post-5'];
// const tag = '#jqueryrules';

// // Создаем пустой массив
// // const postsWithTag = [];

// // // Перебираем массив posts и добавляем push post + tag для каждого элемента
// // for (const post of posts) {
// //   postsWithTag.push(`${post}${tag}`);
// // }

// // console.log(postsWithTag);

// // Создаем функцию для перевода массива постов в отдельные аргументы
// const addTagToPost = function (tag, ...args) {
//   const postsWithTag = [];

//   for (const arg of args) {
//     postsWithTag.push(`${arg}${tag}`);
//   }
//   return postsWithTag;
// };

// console.log(addTagToPost('#jqueryrules', 'post-1', 'post-2'));
// console.log(addTagToPost('#react', 'post-3', 'post-4'));

// function isLoginValid (login, min = 4, max = 16) {
//     // Write code under this line
//     if (login.length > max || login.length < min) {
//       return false;
//     }
//     return true;
//   }

//   function isLoginUnique  (allLogins, login) {
//     'use strict';
//     // Write code under this line
//     if (allLogins.includes(login)) {
//       return false;
//     }
//         return true;
//   }

//   function addLogin (allLogins, login) {
//     'use strict';
//     const SUCCESS = 'Логин успешно добавлен!';
//     const REFUSAL = 'Такой логин уже используется!';
//     const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//     let message;
//     // Write code under this line
//     if (isLoginValid(login) === false) {
//       return (message = ERROR);
//   }

//     if (isLoginUnique(allLogins, login) === false {
//         return  REFUSAL
//         }

//       allLogins.push(login);
//         return (message = SUCCESS);
//   }
