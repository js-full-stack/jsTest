// const add = (a, b) => a + b;

// console.log(add(2, 4));

// const greet = () => console.log('Привет');

// greet();

// ________________________________________
// const add = (...args) => {
//   console.log(args);
// };

// add(1, 2, 6, 8, 0, 2, 5);

// ____________________________
// this в стрелочной функции - определяется в момент объявления, а не вызова (в отличии от обычной функции)
// const showThis = () => console.log('this in showThis: ', this);

// showThis();

// const user = { name: 'Mango' };
// user.showContext = showThis;
// user.showContext();

// const user = {
//   fullName: 'Mango',
//   showName() {
//     console.log('this --- ', this);
//     console.log('this.fullName ---', this.fullName);

//     const inner = () => console.log('this is inner ---', this);
//     inner();
//   },
// };
// user.showName();

// __________________________________________
// Стрелки как методы объекта - не использовать. Функция в данном случае объявляется в контексте объекта, который находится в глобальной области видимости
// const user = {
//   fullName: 'Mango',
//   showName() /*=>*/ {
//     console.log('this---', this);
//     console.log('this.fullName ---', this.fullName);
//   },
// };
// //  )
// const boundShowName = user.showName.bind(user);
// boundShowName();

// _______________________________________
// Стрелки не могут быть конструктором - у них нет метода Construct

const User = function (name) {
  this.name = name;
};

console.log(new User('Mango'));
