//Метод Split Преобразовывает строку в массив через разделитель
// let title = 'Top 10 benefits of React framework';
// console.log(title.split(' '));

// // Метод join - преобразовывает массив в строку через разделитель

// const x = [1, 2, 3, 4, 5];
// console.log(x.join(' - '));

// Запись заголовка в URL через дефисы
// let title = 'Top 10 benefits of React framework';

// // Переводим в нижний регистр
// const normalizeTitle = title.toLocaleLowerCase();
// console.log(normalizeTitle);

// // Разбиваем заголовок по пробелу через метод Split
// const words = normalizeTitle.split(' ');
// console.log(words);

// // Снова приводим заголовок к строке и разбиваем тире
// const slug = words.join('-');
// console.log(slug);

// Еще вариант (с циклом) - join "руками"
// const title = 'Top 10 benefits of React framework';
// const words = title.toLowerCase().split(' ');
// let slug = '';

// console.log(words);

// for (let i = 0; i < words.length; i += 1) {
//   console.log(words[i]);
//   //   if (i !== words.length - 1) {
//   //     slug += words[i] + '-';
//   //   } else {
//   //     slug += words[i];
//   //   }

//   // Представление в шаблонной строке
//   const isNotLastValue = i !== words.length - 1;
//   slug += isNotLastValue !== words.length - 1 ? words[i] + '-' : words[i];
// }

// console.log(slug);

// Альтернативный вариант - лучший
// const title = 'Top 10 benefits of React framework';
// const words = title.toLowerCase().split(' ');
// const slug = words.join('-');

// console.log(slug);
