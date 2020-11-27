// Работа с коллекцией товаров в корзине

// {name: apple, price: 50}
// {name: grapes, price: 70}
// {name: lemon, price: 60}
// {name: strawberry, price: 110}

// ______________________________________________________________
// Добавляем товар в корзину
// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     product.quantity = 1;
//     this.items.push(product);
//   },
//   //   Удаляем товар из корзины
//   remove(productName) {
//     console.log(productName);

//     // for (const item of this.items)
//     for (let i = 0; i < this.items.length; i += 1) {
//       const item = this.items[i];
//       console.log(item);

//       //   if (productName === item.name)
//       if (productName === item.name) {
//         console.log('Нашли, удаляем!');

//         this.items.splice(i, 1);
//       }
//     }
//   },
// };

// console.table(cart.getItems());
// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'grapes', price: 70 });

// console.table(cart.getItems());

// cart.remove('apple');
// console.table(cart.getItems());
// ______________________________________________________________
// Удаляем товар из корзины
