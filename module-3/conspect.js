// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// console.log(hotel.name); // Resort Hotel
// console.log(hotel['name']); // Resort Hotel

// hotel.name = 'Coastline Resort';
// console.log(hotel.name); // Coastline Resort
// console.log(hotel['name']); // Coastline Resort

// hotel['name'] = 'Stardust Hotel';
// console.log(hotel.name); // Stardust Hotel
// console.log(hotel['name']); // Stardust Hotel

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// hotel.address = '1, Beach ave.';
// hotel['manager'] = 'Chuck Norris';

// console.log(hotel.address); // 1, Beach ave.
// console.log(hotel.manager); // Chuck Norris

// const key = 'person';
// const getKey = function () {
//   return 'age';
// };

// const get = function () {
//   return 'sad';
// };

// // Computed properties
// const object = {
//   [key]: 'Mango',
//   [getKey()]: 2,
//   [getKey()]: '3',
// };

// console.log(object); // {person: 'Mango', age: 2}

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
//   showName() {
//     console.log(this.name);
//   },
//   changeCapacity(value) {
//     this.capacity = value;
//   },
// };

// hotel.showName();
// hotel.changeCapacity(200);
// console.log(hotel.capacity);

// Цикл for... in
// Перебор ключей объекта через for...in

// ______________________________________________________

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// for (const key in hotel) {
//   console.log('Key: ', key);
// }

// ______________________________________________________________________________________________________________
// Доступ к свойствам через for... in

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// for (const key in hotel) {
//   console.log('Value: ', hotel[key]);
// }

// ______________________________________________________________________________________________________________
// Методы объектов - Object.keys(), Object.values(), Object.entries()

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
// const values = Object.values(hotel); // ["Resort Hotel", 5, 100]
// const entries = F.entries(hotel); // [Array(2), Array(2), Array(2)]

// console.log(keys);
// console.log(values);
// console.log(entries);

// ______________________________________________________________________________________________________________
// Перебор значений объекта с Object.keys() и for...in

// const hotel = {
//   name: 'Restor Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel);

// for (const key of keys) {
//   console.log('Value: ', hotel[key]);
// }

// ________________________________________________________________________________________________________________
// Перебор объекта через Object.entries()
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const entries = Object.entries(hotel);

// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];
//   console.log(`${key}: ${value}`);
// }

// ________________________________________________________________________________________________________________
// Перебор объекта через Object.values и for...of

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods);

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total);

// ________________________________________________________________________________________________________________
// ...srpead - распылением аргументов
// const temperatures = [18, 14, 12, 21, 17, 29];

// const min = Math.min(...temperatures); // 12
// console.log(min);

// ________________________________________________________________________________________________________________
// ...spread - распыление массивов
// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const copyOfHouses = [...houses];

// console.log(houses);
// console.log(copyOfHouses);
// console.log(houses === copyOfHouses);

// ________________________________________________________________________________________________________________
// ...spread - объединение массивов

// const firstBatch = ['Arryn', 'Frey', 'Greyjoy'];
// const secondBatch = ['Stark', 'Lannister', 'Tyrell'];

// const houses = [...firstBatch, ...secondBatch];

// console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']

// ________________________________________________________________________________________________________________
// ...spread - объединение массивов
// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const completeHouses = [...houses, 'Targaryen'];

// ________________________________________________________________________________________________________________
// ...spread и slice() - создание нового массива
// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const housesInDebt = [...houses.slice(0, 4), ...houses.slice(5)];

// console.log(housesInDebt); // ['Arryn','Frey','Greyjoy','Stark','Tyrell']

// ________________________________________________________________________________________________________________
// Создание нового массива на основе старого без изменения старого
// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const updatedHouses = [
//   ...houses.slice(0, 1),
//   'Frey of the Crossing',
//   ...houses.slice(2),
// ];

// console.log(updatedHouses);
// ['Arryn', 'Frey of the Crossing', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell']

// ________________________________________________________________________________________________________________
// ________________________________________________________________________________________________________________
// Oblect.assign() и ...spread - распыление объектов

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign(a, b);

// console.log(c); // {x: 0, y: 2, z: 3}

// // Через операцию spread
// const d = { ...a, ...b };

// console.log(d); // {x: 0, y: 2, z: 3}

// ______________________________________________________________________________________________
// ...spread - добавление свойств в произвольное место при слиянии
// Во время слияния можно добавлять свойства в произвольное место. Но следует помнить, что свойства распыляемого объекта могут перезаписать значение существующего свойства, если имена ключей совпадают, а распыление происходит после указания свойства

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = { j: 10, z: 15, x: 5, ...b, ...a };

// console.log(c);

// ________________________________________________________________________________________________________________
// ________________________________________________________________________________________________________________
// ...rest - сбор аргументов из функции в массив
// const add = function (...args) {
//   console.log(args);
// };

// add(1, 2, 3);
// add(1, 2, 3, 4, 5);

// _____________________________________________________________________________________________
// ...rest - первый аргумент число, остальные - массив чисел
// ... rest должен идти последним в свойствах объекта

// const add = function (value, ...args) {
//   console.log(value); // первый аргумент
//   console.log(args); // массив всех остальных аргументов
// };

// add(10, 1, 2, 3);
// add(15, 1, 2, 3, 4, 5);

// ________________________________________________________________________________________________________________
// ________________________________________________________________________________________________________________
// Деструктуризация объекта - присваивание свойств объектов переменным
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };
//Присвоения undefined можно избежать, задав переменным значения по умолчанию, в случае если такого свойства в объекте нет.
// const { name, stars, status = 'VIP' } = hotel;
// console.log(name, stars, status); //

// _____________________________________________________________________________________________
//
// Деструктуризация объекта - переопределение имен переменных

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const { name: hotelName, stars, status: hotelStatus = 'empty' } = hotel;

// console.log(hotelName, stars, hotelStatus);

// _____________________________________________________________________________________________
// Частичная деструктуризация объекта - ...rest

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const { name, ...rest } = hotel;

// console.log(name);
// console.log(rest);

// ________________________________________________________________________________________________________________
// ________________________________________________________________________________________________________________
// Деструктуризация массивов

// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;
// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);

// Еще пример
// const rgb = [200, 255, 100];
// let red, green, blue;

// [red, green, blue] = rgb;

// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);

// _____________________________________________________________________________________________
// Деструктуризация массивов - указание значений по умолчанию
// const rgb = [200, 100, 255];

// const [red, green, blue, alfa = 0.3] = rgb;

// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}, Alfa: ${alfa}`);

// _____________________________________________________________________________________________
// Частичная деструктуризация массивов - оператор ...rest
// const rgb = [200, 255, 100];

// const [red, ...colors] = rgb;

// console.log(`Red: ${red}, Colors: ${colors}`);

// // Элементы можно пропускать
// const rgb = [200, 100, 255];

// const [, , blue] = rgb;

// console.log(`Blue: ${blue}`); // Blue: 255

// const target = {
//   id: 24,
//   isOnline: true,
//   ...{ name: 'Mango', age: 2 },
//   ...{ age: 7, isOnline: false },
// };

// console.log(target);
