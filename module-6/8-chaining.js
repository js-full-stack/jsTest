// Цепочка вызовов - chaining

// Выбрать числа больше двух, потом умножить их на 3 и отсортировать в порядке возрастания
const numbers = [1, 5, 2, 4, 3];
// const greaterThenTwo = numbers.filter(num => num > 2);

// console.log(greaterThenTwo);

// const multByThree = greaterThenTwo.map(num => num * 3);

// console.log(multByThree);

// const sorted = multByThree.sort((a, b) => a - b);

// console.log(sorted);

// Chaining
const res = numbers
  .filter(num => num > 2)
  .map(num => num * 3)
  .sort((a, b) => a - b);

console.log(res);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 270, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

const onlineAndSort = players
  .filter(player => player.online)
  .sort(
    (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed,
  );
console.log(onlineAndSort);
