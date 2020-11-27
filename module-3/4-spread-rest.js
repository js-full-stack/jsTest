// _______________________________________________________________________
// ...spread - распыление

// const temperatures = [16, 45, 82, 45, 34];

// console.log(Math.min(...[...temperatures]));

// const minTemp = Math.min(...[...temperatures]);
// console.log(minTemp);

// Создаем новый массив температур

// Через конкат
// const nextTemps = temperatures.concat([1, 2, 3]);

// Через ...rest
// const nextTemps = [1, 2, 3, ...temperatures];
// console.log(nextTemps);

// concat() и ...rest
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [6, 1, 8];
// const nextWeekTemps = [12, 14, 8];

// const temps = lastWeekTemps.concat(currentTemps, nextWeekTemps);
// console.log(temps);

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

// Можно добавить элемент в любое место коллекции
// const temps = lastWeekTemps.concat(currentTemps, 'HI', nextWeekTemps);
// console.log(temps);

// const allTemps = [...lastWeekTemps, ...currentTemps, 'Hello', ...nextWeekTemps];
// console.log(allTemps);

// Вывод минимальной температуры через метод Math.min
// console.log(Math.min(...[18, 14, 12, 21, 17, 29]));

// _______________________________________________________________________
// Распыление объектов
// !!! Последние в коде значения уже созданныз ключей перезаписываются
// !!! После расыпления элементы отображаются в новом массиве в порядке их перечисления
// !!!СПРАВА ОТ РАВНО ВСЕГДА ...spread - распыление; СЛЕВА - ...rest - сбор

const a = { x: 1, Y: 2 };
const b = { x: 0, z: 3 };

// Через метод Object.assign(); {} - возвращает новый объект
// const c = Object.assign({}, a, b);
// console.log(c);

// Изменение старых и добавление новых свойств через Object.assign()
// const d = Object.assign({}, a, b, { z: 6, x: 23, n: 123 });
// console.log(d);

// Используем ...rest
// const c = { ...a, ...b, ...{ z: 5, x: 8, g: 1 }, x: 100 };
// console.log(c);

// Расыпление в функции
const fn = function (a, b, c) {};

const x = [1, 2, 3];
fn(...x);
// // fn(...x) - это распыление, т.к. fn - это функция,
