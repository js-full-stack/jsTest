// Ветвление

// console.log('before');

// if (5 > 3) {
//   console.log('inside ');
// }

// console.log('after');

// Пример ветвления с балансом

// let balance = 2500;
// const payment = 1000;

// console.log(
//   `Общая стоимость заказа ${payment} кредитов. Проверка средств на счету`,
// );

// if (balance >= payment) {
//   balance -= payment;
//   balance = balance - payment;
//   console.log('Спасибо за покупку!');
//   console.log(`На счету осталось ${balance} кредитов`);
// } else {
//   console.log('На счету недостаточно средств');
// }

// console.log(balance);

// Пример множественного ветвления с else if

// const totalExpenses = 20000;
// const payment = 10000;
// let discount = 0;

// if (totalExpenses >= 100 && totalExpenses < 1000) {
//   discount = 0.02;
//   console.log('Бронзовый партнер, скидка 2%');
// } else if (totalExpenses >= 1000 && totalExpenses < 5000) {
//   discount = 0.05;
//   console.log('Серебрянный партнер, скидка 5%');
// } else if (totalExpenses >= 5000) {
//   discount = 0.1;
//   console.log('Золотой партнер, скидка 10%');
// } else {
//   console.log('У вас еще нет партнерской скидки');
// }

// const finalAmount = payment - payment * discount;

// console.log(
//   `Заказ на сумму - ${payment}. Сумма к оплате - ${finalAmount} кредитов. Скидка ${
//     discount * 100
//   }%`,
// );

// console.log('Операция завершена');
