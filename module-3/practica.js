// tack-10

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// tack-12
// function countProps(object) {
//   const arr = [];
//   let propCount = 0;
//   // Пиши код ниже этой строки
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       arr.push(key);
//       propCount = arr.length;
//     }
//   }
//   // Пиши выше ниже этой строки
//   return propCount;
// }

// console.log(countProps({ name: 'Mango', age: 2 }));

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   // Пиши код ниже этой строки
//   const newArr = Object.values(salaries);
//   for (const employee of newArr) {
//     totalSalary += employee;
//   }

//   // Пиши код выше этой строки
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);

// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 4 },
// ];

// ПОВТОРИТЬ
// function getAllPropValues(propName) {
//   let result = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       result.push(product[propName]);
//     }
//   }
//   return result;
// }

// console.log(getAllPropValues('name'));

//

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let result = 0;

//   for (const product of products) {
//     const { price, quantity, name } = product;
//     if (name === productName) {
//       result = price * quantity;
//     }
//   }
//   return result;
// }

// console.log(calculateTotalPrice(''));

// Пиши код ниже этой строки
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;
// console.log('lowToday: ', lowToday);
// console.log('highToday: ', highToday);
// console.log('todayIcon: ', todayIcon);
// console.log('lowTomorrow: ', lowTomorrow);
// console.log('highTomorrow: ', highTomorrow);
// console.log('tomorrowIcon: ', tomorrowIcon);

// Пиши код ниже этой строки
// function findMatches(arr, ...otherNumbers) {
//   const matches = []; // Не изменяй эту строку

//   for (const number of arr) {
//     for (const num of otherNumbers) {
//       if (num === number) {
//         matches.push(number);
//       }
//     }
//   }

//   // Пиши код выше этой строки
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));

// Доступ к свойствам объекта в его методах
// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
//     const oldBookIndex = this.books.indexOf(oldName);
//     this.books.splice(oldBookIndex, 1, newName);

//     return this.books;
//   },
// };

// console.log(bookShelf.updateBook('Мгла', 'Хроники подземелий'));

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     const idxPotion = this.potions.indexOf(potionName);
//     this.potions.splice(idxPotion, 1);
//     return this.potions;
//     // Пиши код выше этой строки
//   },
// };

// console.log(atTheOldToad.removePotion('Дыхание дракона'));
// console.log(atTheOldToad.removePotion('Зелье скорости'));

//Tack-40

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//     const idxPotions = this.potions.indexOf(oldName);
//     this.potions.splice(idxPotions, 1, newName);
//     return this.potions;
//     // Пиши код выше этой строки
//   },
// };

// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
// console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Невидимка'));

// Tack 41
const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },

  addPotion(potionName) {
    for (const items of this.potions) {
      // console.log(items);
      if (items.name === potionName.name) {
        return `Зелье ${potionName.name} уже есть в инвентаре!`;
      }
      this.potions.push(potionName);

      return this.potions;
    }
  },

  removePotion(potionName) {
    for (let element of this.potions) {
      if (element.name !== potionName) {
        return `Зелья ${potionName} нет в инвентаре!`;
      }
      this.potions.splice(this.potions.indexOf(element), 1);
      return this.potions;
    }
  },

  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    for (const element of this.potions) {
      if (element.name !== oldName) return `Зелья ${oldName} нет в инвентаре!`;
    }
    this.potions.splice(this.potions.indexOf(element), 1, newName);
    return thisPotions;
  },

  // Пиши код выше этой строки
};

// console.log(
//   'Вызов метода atTheOldToad.getPotions() для исходного массива: \n',
//   atTheOldToad.getPotions(),

//    ,// );
// console.log(atTheOldToad.addPotion({ name: 'Зелье', price: 460 }));
// console.log(atTheOldToad.removePotion('Дыхание дракона'));

// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
// );
// console.log();
