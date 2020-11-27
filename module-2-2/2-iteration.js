// Перебор массива
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const numbers = [1, 2, 3, 4, 5];

// // Создание функции и вызов массива
// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };

// logItems(friends);
// logItems(numbers);
// logItems(['qwe', 1, 2, '23']);

// Поиск друга

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const nameToFind = 'Poly';

// Функция для поиска друга
// const findFriend = function (allFriends, name) {
//   console.log(allFriends);
//   console.log('name: ', name);

//   for (const friend of allFriends) {
//     if (name === friend) {
//       return `Нашли друга ${name}`;
//     }
//   }
//   console.log('Друг не найден');
// };

// const r1 = findFriend(friends, 'Poly');
// console.log(r1);

// const r2 = findFriend(friends, 'Chelsy');
// console.log(r2);

// Поиск друга через функцию с методом includes
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const nameToFind = 'Poly';

// const findFriend = function (allFriends, name) {
//   const isInFriends = allFriends.includes(name);

//   return isInFriends ? `Нашли друга ${name}` : `Друг ${name} не найден`;
// };

// const r1 = findFriend(friends, 'Poly');
// console.log(r1);

// const r2 = findFriend(friends, 'Chelsy');
// console.log(r2);
