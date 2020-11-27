// Есть объект
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// Неудобно каждый раз вызывать отдельное свойство объекта через точку

// console.log(hotel.name);
// console.log(hotel.stars);
// console.log(hotel.capacity);

// Решение - деструктуизация
// {скобки} слева от равно - всегда деструктуризация
// в {скобках} указывается ключ, значение которого нужно получить
// справа указывает, что нужно деструктуризировать (массив, объект)
// ну нжно прописывать высов через точку, просто указывается ключ в {скобках}
// имена переменных в {скобках} должны соответствовать именам ключей объекта
// rating = 9.6 -  пример создания свойства при деструктуризации, которого нет в объекте,
// таким же образом создаются дефолтные значения для существующих свойств объекта

// const { name, stars, capacity, rating = 9.6 } = hotel;
// console.log(name);
// console.log(stars);
// console.log(capacity);
// console.log(rating);
// //

// _______________________________________________________
// Деструктуризация в функции
// Деструктуризировать можно в параметрах функции
// const showHotelInfo = function ({ name, stars, capacity = 0 }) {
//   Или черех такой синтаксис:
//   const { name, stars, capacity } = hotelStats;
//   console.log(hotelStats);

//   Консоль для каждого параметра объекта
//   console.log('Name: ', name);
//   console.log('Stars: ', stars);
//   console.log('Capacity', capacity);
// };

// Вызываем функцию
// showHotelInfo(hotel);

// _______________________________________________________
// Деструктуризация свойства объекта в переменную с другим именем
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const { name: hotelName, stars, capacity } = hotel;
// console.log(hotelName);

// _______________________________________________________
// Глубокая деструктуризация
// Пример: профиль соцсетей
// const profile = {
//   name: 'Alex Tea',
//   tag: '@alextea',
//   location: 'Kharkov, Ukraine,',
//   avatar: 'link -- --',
//   //   stats - объект в объекте, где хранится статистика юзера
//   stats: {
//     followers: 4525,
//     views: 2252,
//     likes: 324,
//   },
// };

// const { name, tag, location, avatar, stats } = profile;

// console.log(name, tag, location, avatar);
// Делаем еще одну деструктуризацию для объекта stats
// const { followers, views, likes } = stats;
// console.log(followers, views, likes);

// Вариант глубокой деструктуризации
// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes: myLikes = 0 },
// } = profile;

// console.log(name, tag, location, avatar, followers, views, myLikes);

// ________________________________________________
// Деструктуризация массива
// !порядок деструктуризации массива - по очереди, т.е - по индексу (0,1,2,3...)

// const rgb = [255, 100, 80];
// const [red, green, blue] = rgb;

// console.log('red:', red);
// console.log('green: ', green);
// console.log('blue:', blue);

// const profile = {
//   name: 'Alex Tea',
//   tag: '@alextea',
//   location: 'Kharkov, Ukraine,',
//   avatar: 'link -- --',
//   //   stats - объект в объекте, где хранится статистика юзера
//   stats: {
//     followers: 4525,
//     views: 2252,
//     likes: 324,
//   },
};

// ________________________________________________
// Использование оператора ...rest для сбора коллекции

// const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);
