/*
Запись: array.filter(callback[currentValue, index, array])

Параметры: 
currentValue - текущий элемент 
index - индекс текущего элемента 
array - перебираемый массив 

Применение: 
Используется для трансформации массива
Перебирает
Не изменяет
Возвращает коллекцию в новом массиве, который может иметь отличную длину от оригинального
Если ни один элемент не подошел по условию, возвращает пустой массив 
 */

// Basic
// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter(function (number) {
//   return number >= 15;
// });
// console.log(filteredNumbers);

// useCase - возвращаем массив игроков со статусом online и offline
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

// Ищем online
// const onlinePlayers = players.filter(function (player) {
//   return player.online;
// });
// стрелками
const onlinePlayers = players.filter(player => player.online);
console.table(onlinePlayers);

// // Ищем офлайн
// const offlinePlayers = players.filter(player => !player.online);
// console.log(offlinePlayers);

// // Возвращаем игроков с более чем 250 часами игры
const hardPlayers = players.filter(player => player.timePlayed > 250);
console.log(hardPlayers);

// Реализация filter руками

// Создаем массив и возвращаем его
// вызываем callback для каждого элемента
// если callback вернул true - добавляем элемент в новый массив

const filter = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const passed = callback(array[i], i, array);
    if (passed) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

const numbers = [5, 10, 15, 20, 25];

const filteredNumbers = filter(numbers, function (number, index, array) {
  console.log(number);
  console.log(index);
  console.log(array);

  return number > 15;
});

console.log(filteredNumbers);
