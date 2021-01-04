/*
Запись: array.find(callback[currentValue, index, array])

Параметры: 
currentValue - текущий элемент 
index - индекс текущего элемента 
array - перебираемый массив 


Используется для поиска уникального элемента массива
Ищет до первого совпадения 
Перебирает
Не изменяет
Возвращает элемент *не массив)
Прерывается при первом совпадении 
 */

//  Basic
// const numbers = [5, 10, 15, 20, 25];
// // const number = numbers.find(function (n) {
// //   return n > 10;
// // });
// const number = numbers.find(n => n > 10);
// console.log(number);

// Поиск игрока по id
const players = [
  {
    id: 'player-1',
    name: 'Mango',
    timePlayed: 310,
    points: 54,
    online: false,
  },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  {
    id: 'player-5',
    name: 'Chelsy',
    timePlayed: 280,
    points: 48,
    online: true,
  },
];

const playerIdToFind = 'player-3';

const player = players.find(player => player.id === playerIdToFind);
console.log(player);
