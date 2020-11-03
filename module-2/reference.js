// Примитивы - создание копий
// let a = 5;
// let b = a;

// console.log('a', a);
// console.log('b', b);

// a = 10;

// console.log('a', a);
// console.log('b', b);

// Сложный тип данных - доступ по ссылке

let a = [1, 2, 3];
let b = a;

console.log('a', a);
console.log('b', b);

a[0] = 10;
b[1] = 20;
console.log('a', a);
console.log('b', b);
