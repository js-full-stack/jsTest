/*Позволяет сортировать элементы массива на месте. Помимо возврата отсортированного массива метод sort также отсортирует массив, на котором он был вызван. По умолчанию метод sort сортирует, преобразуя элементы к строке.

Перебирает
Изменяет
Возвращает коллекцию */

// basic
// const numbers = [1, 9, 6, 2, 4];
// // numbers.sort();
// // console.log(numbers);
// // Сортировка в обратном порядке
// numbers.sort(function (prev, next) {
//   return next - prev;
// });
// console.log(numbers);

// const letters = ['c', 'a', 'B', 'd'];
// letters.sort();
// console.log(letters);

// useCase
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

const sortedByTopPlayers = [...players].sort(function (prevPlayer, nextPlayer) {
  return nextPlayer.points - prevPlayer.points;
});
//   (prevPlayer, nextPlayer) => nextPlayer.points - prevPlayer.points,
// );

console.log(players);
console.log(sortedByTopPlayers);
