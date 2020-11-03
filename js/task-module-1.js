// task-1
// const name = '«Генератор защитного поля»'; // Write code on this line
// let price = 1000; // Write code on this line
// const firstMessage = `Выбран «Генератор защитного поля», цена за штуку 1000 кредитов`; // Write code on this line
// price = 2000;
// const secondMessage = `Выбран «Генератор защитного поля», цена за штуку 2000 кредитов`; // Write code on this line

// console.log(firstMessage);
// ('Выбран «Генератор защитного поля», цена за штуку 1000 кредитов');

// console.log(secondMessage);
// ('Выбран «Генератор защитного поля», цена за штуку 2000 кредитов');

// task - 2
// const invoice = 100;
// const stock = 100;

// const message = (invoice =
//   50 && invoice < 150
//     ? 'Заказ оформлен, с вами свяжется менеджер'
//     : 'На складе недостаточно товаров!');

// console.log(message);

// task - 3
// const userPassword = 'jqueryismyjam';

// const ADMIN_PASSWORD = 'jqueryismyjam';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message;

// // Write code under this line
// if (userPassword === ADMIN_PASSWORD) {
//   message = ACCESS_IS_ALLOWED;
// } else if (userPassword === null) {
//   message = CANCELED_BY_USER;
// } else {
//   message = ACCESS_DENIED;
// }

// console.log(message);

// tack - 4;
// const orderPieces = 4;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// let totalPrice = orderPieces * pricePerDroid;
// let balanceCredit = credits - totalPrice;
// let message;

// // Write code under this line

// if (totalPrice <= credits) {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
// } else if (orderPieces === null) {
//   message = CANCELED_BY_USER;
// } else if (totalPrice >= credits) {
//   message = ACCESS_DENIED;
// }

// console.log(message);
// ``;
// tack-5

// const countryName = 'КитаЙ';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
// const CHINA = 'Китай';
// const AUSTRALIA = 'Австралия';
// const INDIA = 'Индия';
// const JAMAICA = 'Ямайка';
// let message;
// let price = 0;
// let country;
// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
//   switch (country) {
//     // Write code under this line
//     case CHINA:
//       price = 100;
//       break;

//     case AUSTRALIA:
//       price = 170;
//       break;

//     case INDIA:
//       price = 80;
//       break;

//     case JAMAICA:
//       price = 120;
//       break;

//     default:
//       message = NO_DELIVERY;
//   }
// }

// if (price > 0) {
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// }

// console.log(message);
