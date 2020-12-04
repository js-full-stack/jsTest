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
// function checkStorage(available, ordered) {
//   let message;
  // Пиши код ниже этой строки
// 	if (ordered === 0) {
//       message = `В заказе еще нет товаров`
//     }
//   else if (available < ordered) {
//   message = 'Слишком большой заказ, на складе недостаточно товаров!'}
  
//   else {
//     message = 'Заказ оформлен, с вами свяжется менеджер'
//   }
//  
//   return message;
// }

//   function checkStorage(available, ordered) {
//     let message;
//     message = available < ordered ? 'Слишком большой заказ, на складе недостаточно товаров!' : ordered === 0 ? 'В заказе еще нет товаров' : 'Заказ оформлен, с вами свяжется менеджер';
//     return message;
//   }

// console.log(checkStorage(100, 50))
// console.log(checkStorage(100, 130))
// console.log(checkStorage(70, 0))
// console.log(checkStorage(200, 20))
// console.log(checkStorage(200, 250))

// var firstCheck = false,
//     secondCheck = false,
//     access = firstCheck ? "Доступ запрещен" : secondCheck ? "Доступ запрещен" : "Доступ разрешен";
  
// console.log( access ); // выводит в консоль "Доступ разрешен"

// _________________________________________________________
// Задание
// Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от srart до end. То есть число должно быть больше либо равно start и меньше либо равно end. Результатом выражения проверки будет буль true или false.

// function isNumberInRange(start, end, number) {
//   const isInRange = start <= number && end >= number;

  
//   // дополни эту строку

//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17))
// console.log(isNumberInRange(10, 30, 5) )
// console.log(isNumberInRange(20, 50, 24))
// console.log(isNumberInRange(20, 50, 76))

// totalSpent - определяет сумму потраченных денег; 
// discount - переменная, куда записываются скидки;


// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
  
  // if (totalSpent >= 50000) {
  //   discount = GOLD_DISCOUNT;
    
  //   return discount;
  // }
    
  // if (totalSpent >= 20000 && totalSpent < 50000) {
  //   discount = SILVER_DISCOUNT;

  //   return discount;
  // }

  // if (totalSpent >= 5000 && totalSpent < 20000) {
  //   discount = BRONZE_DISCOUNT;
    
  //   return discount;
  // }

  // if (totalSpent < 5000) {
  //   discount = BASE_DISCOUNT;
  //   return discount;
  // }
// function getSubscriptionPrice(type) {
//   let price;
//   // Пиши код ниже этой строки
  
//   switch (type) { 
   
//     case 'starter': 
//       price = 0; 
//       break;

//     case 'professional': 
//       price = 20; 
//       break;

//     case 'organization':  
//       price = 50; 
//       break;
//   }

//   // Пиши код выше этой строки
//   return price;
// }


// if (type === 'starter') {
//   price = 0;
// } else if (type === 'professional') {
//   price = 20;
// } else if (type === 'organization') {
//   price = 50;
// }

// if (password === null) {
//     message = 'Отменено пользователем!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
//   } else {
//     message = 'Доступ запрещён, неверный пароль!';
//   }

//   return message;

// console.log(getSubscriptionPrice('starter')) 

// console.log(getSubscriptionPrice('organization')) 

// console.log(getSubscriptionPrice('professional'))



// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
  
//   let message;
//   switch (password) {

//     case ADMIN_PASSWORD:
//       message = 'Добро пожаловать!';
//       break;
    
//     case null:
//       message = 'Отменено пользователем!';
//       break;

//     default: message = 'Доступ запрещен, неверный пароль!';
//   }
//   return message; 

// }

//   console.log(checkPassword('mangohackzor'));
//   console.log(checkPassword(null));
//   console.log(checkPassword('polyhax'));
//   console.log(checkPassword('jqueryismyjam'));

// function getShippingCost(country) {
//     let cost = 0;
//   let message = 'Извините, в вашу страну доставка невозможна';


//   // Пиши код ниже этой строки
//   switch (country) {
//     case 'Китай':
//       cost = 100;
//       message = `Доставка в ${country} будет стоить ${cost} кредитов`;
//       break;
        
//     case 'Чили':
//       cost = 250;
//       message = `Доставка в ${country} будет стоить ${cost} кредитов`;
//       break;
        
//     case 'Австралия':
//       cost = 170;
//       message = `Доставка в ${country} будет стоить ${cost} кредитов`;
//       break;  
        
//     case 'Ямайка':
//       cost = 120;
//       message = `Доставка в ${country} будет стоить ${cost} кредитов`;
//       break;

//   }
//   // Пиши код выше этой строки
//   return message;
// }


// console.log(getShippingCost('Австралия'))
// console.log(getShippingCost('Германия'))
// console.log(getShippingCost('Китай'))
// console.log(getShippingCost('Чили'))
// console.log(getShippingCost('Ямайка'))

// const productName = 'Ремонтный дроид';
// console.log(productName[0]); // 'P'
// console.log(productName[5]); // 'т'
// console.log(productName[14]); // 'д'
// console.log(productName[productName.length - 1])



// const courseTopic = 'JavaSript для начинающих';
// // Пиши код ниже этой строки

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopicLength); 
// console.log(firstElement); 
// console.log(lastElement); 

// const array = [1, 2, 3, 4, 5]; 
// const copyArray = array.slice(); 

// console.log(array); 
// console.log(copyArray); 
// const newArray = copyArray.slice(0, 3); 
// console.log(array); 
// console.log(newArray); 


// function formatMessage(message, maxLength) {
//   let result;
// // Пиши код ниже этой строки
  
//   message.length <= maxLength ? result = message : result = message.slice(0, maxLength) + '...'; 
  
// 	if (message.length <= maxLength) {
//       result = message; 
    
//   } else {
//     result = message.slice(0, maxLength) + '...';
//   }

//   return result;

// }


// console.log(formatMessage('Curabitur ligula sapien', 16))
// console.log(formatMessage('Curabitur ligula sapien', 22))
// console.log(formatMessage('Vestibulum facilisis purus nec', 20))
// console.log(formatMessage('Vestibulum facilisis purus nec', 30) )
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15))

// debugger; 
// function checkForSpam(message) {
//   let result = false;
//   if (message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale'.toLowerCase())) {
//     result = true; 
//   }

//   message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale'.toLowerCase()) ? result = true : result = false; 


//   return result;
// }


// console.log(checkForSpam('Latest technology news')); 
// console.log(checkForSpam('JavaScript weekly newsletter'))
// console.log(checkForSpam('Get best sale offers now!'))
// console.log(checkForSpam('Amazing SalE, only tonight!'))
// console.log(checkForSpam('Trust me, this is not a spam message'))
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'))
// console.log(checkForSpam('[SPAM] How to earn fast money?'))


// const age = 20;  
// const number = 1; 


// console.log('Имя : ', name)
// console.log('Возрсат: ', age)
// console.log('Номер страховки: ', number);


// const name = 'Lola'; 
// // const name = 'John'; 

// if (name = 'John') {
//   console.log('Жекан')
// } else if (name === 'Lola') {
//   console.log('Лолита')
// }

// const array = [1, 2, 3, 4, 5]



// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Пиши код ниже этой строки

//   if (password === ADMIN_PASSWORD) {
//     return 'Добро пожаловать!';
//   } 
//     return 'Доступ запрещен, неверный пароль!';
//   // Пиши код выше этой строки
// }


// console.log(checkPassword('mangohackzor'))
// console.log(checkPassword('polyhax'))
// console.log(checkPassword('jqueryismyjam'))


// function checkStorage(available, ordered) {
//   // Пиши код ниже этой строки

//   if (ordered === 0) {
//    return 'В заказе еще нет товаров';
//   } else if (ordered > available) {
//     return 'Слишком большой заказ, на складе недостаточно товаров!';
//   } 
//   return 'Заказ оформлен, с вами свяжется менеджер';;
// }
//   console.log(checkStorage(100, 50)); 
//   console.log(checkStorage(100, 130))
//   console.log(checkStorage(70, 0))
//   console.log(checkStorage(200, 20))
//   console.log(checkStorage(200, 250))
//   console.log(checkStorage(150, 0))

// function getExtremeElements(array) {
//   // Пиши код ниже этой строки
  
 
//   array = [array[0], array[array.length - 1]]; 
//   return array;

//     // Пиши код выше этой строки
//   }


// console.log(getExtremeElements([1, 2, 3, 4, 5]))
// console.log(getExtremeElements(['Земля', 'Марс', 'Венера']))
// console.log(getExtremeElements(['яблоко', 'персик', 'груша', 'банан']))

// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки
//   let cost;
//   message = [message.length];
//   cost = message * pricePerWord;
//   return cost;
// // }


// function slugify(title) {
//   // Пиши код ниже этой строки
 
//   const slug = title.toLowerCase().split(' '); 
//   title = slug.join('-')
//   return title; 

// }

// console.log(slugify('Массивы для новичков'))
// console.log(slugify('Английский для разработчика'))
// console.log(slugify('Десять секретов JavaScript'))
// console.log(slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ'))

// const message = 'Top 10 benefits of React framework'; 
// console.log(message.split(' '))

// const numb = [1, 2, 3, 4, 5]
// console.log(numb.join('-'))

// function calculateTotal(number) {
//   let total; 
//   for (let i = 0; i <= number; i += 1) {
//     total += number[i];  
//  }
//   return total; 
//   // Пиши код выше этой строки
// }
//   // Пиши код выше этой строки

// console.log(calculateTotal(1))
// console.log(calculateTotal(3))
// console.log(calculateTotal(7))


// ______________________________________________________________________________
//  !!! ПОВТОРИТЬ
// Поиск самого длинного слова
// Задание
// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   const arr = string.split(' ');
//   let longestWord = '';
//   for (let i = 0; i < arr.length; i ++) {
//     if (arr[i].length > longestWord.length) {
//       longestWord = arr[i];
//     }
//   }
//   return longestWord;
// }
//   console.log(findLongestWord('The quick brown fox  jumped over the lazy dog'))
// //   // Пиши код выше этой строки
// // }

// // debugger;


// ______________________________________________________________________________
// !!!Повторить 
// function createArrayOfNumbers(min, max) {
//   const numbers = [] ;
//   // // Пиши код ниже этой строки
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i); 
//   }  
//     // Пиши код выше этой строки
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3)); 
// console.log(createArrayOfNumbers(14, 17)); 


// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

// Тесты

// debugger;

// function filterArray(numbers, value) {
//   let newArr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//      newArr.push(numbers[i])
//     }
//    }
//     return newArr; 
//   }

// console.log(filterArray([1, 2, 3, 4, 5], 3))
// console.log(filterArray([12, 24, 8, 41, 76], 38))
// const array1 = [1, 2, 3]; 
// const array2 = [2, 1, 17, 19]
// const combinedArray = array1.concat(array2)
// console.log(combinedArray); 

function getCommonElements(array1, array2) {

  const newArray = array1.concat(array2);
  const arr = []

  for (let i = 0; i < newArray.length; i++) {
    if (array1[i].includes(array2[i])) {
      continue;
    }
    arr.push(newArray[i])
  }
    
return arr; 
}
  

//   // Пиши код выше этой строки

console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))


// const colors = ['red', 'green', 'blue'];
// colors.forEach(function(color) {
//   console.log(color);
// });


// var a = array1.concat(array2);
// for (var i = 0; i < a.length; ++i) {
//     for (var j = i + 1; j < a.length; ++j) {
//         if (a[i] === a[j])
//             a.splice(j--, 1);
//     }
