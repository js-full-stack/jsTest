// const selectedById = document.querySelector('#menu');
// selectedById.style.textTransform = 'uppercase';
// selectedById.style.fontSize = '3rem';
// console.log(selectedById);

// const menuItemsByTagName = document.querySelectorAll('li');
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll('.menu-item');
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector('.menu-item');
// firstMenuItem.style.color = 'green';
// console.log(firstMenuItem);

// const text = document.querySelector('.article-text').textContent;
// console.log(text);
const item = document.createElement('a');
item.href = '#';
item.classList.add('btn');
item.textContent = 'item 4';

const nav = document.querySelector('.nav');
nav.appendChild(item);

// Создадим заголовок и вставим его в container перед списком
const heading = document.createElement('h1');
heading.textContent = 'Nav heading';

const container = document.querySelector('.container');
container.insertBefore(heading, nav);

//
