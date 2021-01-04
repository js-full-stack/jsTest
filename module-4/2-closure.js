// _________________________________________________________
// Замыкания
// Создаем имя повора с именем и без

// Enviroment: Global env
// Record: {}
// Parent:null
// //
// const foo = function () {
//   // Enviroment: Foo env
//   // Record: ({})
//   // Parent: Global env
//   const x = 5;

//   //   Enviroment: Foo env
//   // Record: (x: 5)
//   // Parent: Global env

//   return function () {
//     console.log(x);
//   };
// };

// // Global env
// // Record: {foo: f}
// // Parent:null
// //

// const outerFn = foo();

// // Global env
// // Record: {foo: f, outerFn: f}
// // Parent:null

// outerFn();
