// Конспект
// const animal = { eats: true };
// const dog = { barks: true };

// dog.__proto__ = animal;

// // В dog можно найти оба свойства
// console.log(dog.barks); // true
// console.log(dog.eats); // true

// // Прототипирование объекта через Object.create()

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// console.log(dog.barks); // true
// console.log(dog.eats); // true

// __________________________________________________________________________________________
// hasOwnProperty() - проверяет, принадлежит свойство объекту или его прототипу
// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) {
//     continue;
//   }
//   console.log(key); // barks
// }

/* Метод Object.keys(obj) вернет массив только собственных ключей объекта obj, 
поэтому рекомендуется использовать именно его.*/

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// const dogKeys = Object.keys(dog);

// console.log(dogKeys); // ['barks']

/* __________________________________________________________________________________________
Свойство f.prototype
Является объектом
В него можно записывать свойства и методы
Свойства и методы prototype будут доступны по ссылке __proto__ объекта
У свойства prototype изначально есть метод constructor*/

// const Guest = function (name, room) {
//   this.name = name;
//   this.room = room;
// };

// console.log(Guest.prototype); // {constructor: ƒ}

// const Guest = function (name, room) {
//   this.name = name;
//   this.room = room;
// };

// Guest.prototype.showGuestInfo = function () {
//   console.log(`name: ${this.name}, room: ${this.room}`);
// };

// const mango = new Guest('Mango', 28);
// const poly = new Guest('Poly', 36);

// mango.showGuestInfo(); // name: Mango, room: 28
// poly.showGuestInfo(); // name: Poly, room: 36

// const Guest = function (name, room) {
//   this.name = name;
//   this.room = room;
// };

// Guest.prototype = {
//   constructor: Guest,
// };

// const animal = { eats: true };
// const dog = { barks: true };

// dog.__proto__ = animal;

// // В dog можно найти оба свойства
// console.log(dog.barks); // true
// console.log(dog.eats); // true

// console.log(Object.prototype);

// ____________________________________________________
// // Вебинар Репеты
// const objB = {
//   z: 10,
// };

// const objA = Object.create(objB);
// objA.x = 1;
// objA.y = 2;

// console.log(objA.z);
// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

/*
 * Теперь у нас есть конструктор базового класса героя,
 * добавим в prototype какой-то метод.
 */
// Hero.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const mango = new Hero('Mango', 1000);
// console.log(mango); // Hero { name: 'Mango', xp: 1000 }

// // Так как mango это экземпляр Hero, то ему доступны методы из Hero.prototype
// mango.gainXp(500); // Mango gained 500 experience points
// console.log(mango); // Hero { name: 'Mango', xp: 1500 }

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// Пиши код ниже этой строки
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[tags.length - 1];

// console.log(firstTag);
// console.log(lastTag);

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };




