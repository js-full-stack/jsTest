/*
Запись: array.map(callback[currentValue, index, array])

Параметры: 
currentValue - текущий элемент 
index - индекс текущего элемента 
array - перебираемый массив 

Применение: 
Используется для трансформации массива
Перебирает
Не изменяет
Возвращает коллекцию в новом массиве
 */

//  Basic
// const numbers = [5, 10, 15, 20, 25];
// const mappedNumbers = numbers.map(function (element) {
//   console.log(element);

//   return element * 2;
// });

// console.log(mappedNumbers);

// UserCase
/*Задачи: 
1. Получить массив из всех имен игроков;
2. Увеличить кол-во points каждого игрока; 
3. Увеличить timePlayed игроков по id. 

*/

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// // Получаем массив имен игроков
// const namePlayers = players.map(function (player) {
//   return player.name;
// });
// // стрелками
// // const namePlayers = players.map(player => player.name);

// console.log(namePlayers);

// // Увеличиваем кол-во очков
// const updatePlayers = players.map(function (player) {
//   return {
//     ...player,
//     points: player.points + player.points * 0.1,
//   };
// });
// // стрелками
// // const records = players.map(point => point.points * 2);
// console.table(players);
// console.table(updatePlayers);

// // Увеличиваем timePlayed по id
// const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(function (player) {
//   console.log(player.id);

//   if (player.id === playerIdToUpdate) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 50,
//     };
//   }
//   return player;
// });

// console.table(updatedPlayers);

// Реализация map руками
// const numbers = [5, 10, 15, 20, 25];
// // 1 - Создает и возвращает новый массив
// // 2- Перебирает оригинальный массив
// // 3 - Вызывает callback для каждого э
// const map = function (array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     // console.log(array[i]);
//     const result = callback(array[i], i, array);
//     newArray.push(result);
//   }
//   return newArray;
// };

// const doubledNumbers = map(numbers, function (number, index, array) {
//   console.log(number);
//   console.log(index);
//   console.log(array);

//   return (newArr = number * 2);
// });

// console.log(doubledNumbers);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// // Получаем массив имен игроков
// const namePlayers = players.map(function (player) {
//   return player.name;
// });
// стрелками
// const namePlayers = players.map(player => player.name);

// console.log(namePlayers);

// const users = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '249b6175-5c30-44c6-b154-f120923736f5',
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];
// // const getUserNames = array => array.map(array => array.name);
// const getUserNames = array => array.map(({ name }) => name);
// const getEmailAddress = array => array.map(({ email }) => email);
// console.log(getUserNames(users));
// console.log(getEmailAddress(users));

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// const updatePlayers = players.map(function (player) {
//   return {
//     ...player,
//     points: player.points + player.points * 0.1,
//   };
// });

// Рефакторинг
// const updatePlayers = players.map(player => {
//   return {
//     ...player,
//     points: player.points + player.points * 0.1,
//   };
// });

// console.log(updatePlayers);

// Рефакторинг - предпочтительный вариант - объект оборачивается в ()
// const updatePlayers = players.map(player => ({
//   ...player,
//   points: player.points + player.points * 0.1,
// }));
// console.log(updatePlayers);

// _____________________________________________________________________
// // Увеличиваем timePlayed по id
// const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(function (player) {
//   if (player.id === playerIdToUpdate) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 50,
//     };
//   }
//   return player;
// });

// console.log(updatedPlayers);

// Рефакторинг
// const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(player => {
//   if (player.id === playerIdToUpdate) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 50,
//     };
//   }
//   return player;
// });

// console.log(updatedPlayers);

// Рефакторинг с тернарным оператором и с неявным

const playerIdToUpdate = 'player-3';

const updatedPlayers = players.map(player =>
  player.id === playerIdToUpdate
    ? { ...player, timePlayed: player.timePlayed + 50 }
    : player,
);
console.log(updatedPlayers);
