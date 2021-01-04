// _________________________________________________________________________________
// tack-1

// const Account = function (login, email) {
//   this.login = login;
//   this.email = email;
// };

// Account.prototype.getInfo = function () {
//   return `login : ${this.login}, email: ${this.email}`;
// };

// console.log(typeof Account.prototype.getInfo);
// const mango = new Account('Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo());

// ___________________________________________________________________
// tack-2
// class User {
//   constructor(name, age, followers) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }

//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
//   }
// }

// console.log(typeof User);
// // 'function'

// const mango = new User('Mango', 2, 20);
// console.log(mango.getInfo());
// 'User Mango is 2 years old and has 20 followers'

// console.log(typeof mango.getInfo);
// 'function'

// const poly = new User( 'Poly', 3, 17);
// console.log(poly.getInfo());
// 'User Poly is 3 years old and has 17 followers'

// tack-3
// debugger;
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     this.items.push(item);
//     // return this.items;
//   }
//   /*removeItem(item) {
//       const index = this.items.indexOf('Пролонгер');
//       if (index === 1) {
//         this.items.splice(index, 1);
//         return this.items;
//       }*/
//   removeItem(item) {
//     // for (let i = this.items.length; i--; )
//     for (let i = 0; i < this.items.length; i++) {
//       if (this.items[i] === item) {
//         this.items.splice(i, 1);
//         return this.items;
//       }
//     }
//   }
// }
// console.log(typeof Storage);
// // 'function'

// const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];

// const storage = new Storage(goods);

// console.log(storage.getItems());
// ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];

// tack-4
//   constructor(str) {
//     this._value = str;
//   }
//   get value() {
//     return this._value;
//   }

//     append(str) {
//     this._value += str;
//   }
//   prepend(str) {
//     this._value = str + this._value;
//   }
//   pad(str) {
//     this.append(str) + this.prepend(str);
//   }
// }

// tack-5
// class Car {
//   // Write code under this line
//   static getSpecs(car) {
//     return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
//   }
//   constructor({maxSpeed = 0, speed = 0, isOn = false, distance = 0, price = 0}) {
//     this.speed = speed;
//     this.maxSpeed = maxSpeed;
//     this.isOn = isOn;
//     this.distance = distance;
//     this._price = price;
//   }
//   get price() {
//     return this._price;
//   }
//   set price(value) {
//     this._price = value;
//   }
//   turnOn() {
//     this.isOn = true;
//   }
//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }
//   accelerate(value) {
//     if (this.speed + value <= this.maxSpeed) {
//       this.speed += value;
//     } else { this.speed = this.maxSpeed };
//   }
//   decelerate(value) {
//     if (this.speed - value > 0) {
//       this.speed -= value;
//     } else { this.speed = 0 };
//   }
//   drive(hours) {
//     if (this.isOn) {
//       this.distance += this.speed * hours;
//     }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// // console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// // console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// // console.log(mustang.price); // 2000
// mustang.price = 4000;
// // console.log(mustang.price); // 4000
