const profile = {
  name: 'Alex Tea',
  tag: '@alextea',
  location: 'Kharkov, Ukraine,',
  //   Если location: undefined, то подставляет дефолтное значение location = 'Platen Earth'
  //   location: undefined,
  avatar: 'link -- --',
  //   stats - объект в объекте, где хранится статистика юзера
  stats: {
    followers: 4525,
    views: 2252,
    likes: 324,
  },
};

// Создаем функцию, которая возвращает разметку данных профиля
// Указываем в параметрах функций ключи, значения которых хотим деструктуризировать
const makeProfileMarkup = function ({
  avatar,
  name,
  tag,
  location = 'Planet Earth',

  stats: { followers, views, likes },
}) {
  return `<div>
        <img src="${avatar}" alt = "user avatar">
            <p>${name} <span> Тэг: ${tag}</span></p>
            <p>Location: ${location}</p>
            <ul>
                <li>Followers: ${followers}/li>
                <li>Views: ${views}</li>
                <li>Likes: ${likes}</li>
            </ul>
    </div>`;
};

// Возвращаем разметку с конкантенацией значений свойств объекта
console.log(makeProfileMarkup(profile));
// dociment.body.insertAdjacentHTML('after-begin', makeProfileMarkup(profile));
