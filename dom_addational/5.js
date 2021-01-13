import listCats from './4-listCats.js';
import { templateCatsMiddle } from './4-templateCats.js';

const catsListRef = document.querySelector('.js-list_cats--middle');
const btn = document.querySelector('.change-positioning');

const alLi = listCats
  .map(item => {
    const markup = templateCatsMiddle(item);
    // console.log(markup);
    return markup;
  })
  .join('');

catsListRef.insertAdjacentHTML('beforeend', alLi);

btn.addEventListener('click', onClickChangePositioning);

function onClickChangePositioning(event) {
  const isColumn = catsListRef.classList.contains('listItemColumn');
  const button = event.currentTarget;

  if (isColumn) {
    catsListRef.classList.remove('listItemColumn');

    button.textContent = 'В ряд';
    return;
  }
  catsListRef.classList.add('listItemColumn');
  btn.textContent = 'В столбик';
}

// Так лучше не делать
// const allItems = catsListRef.querySelectorAll('li img');
// allItems.forEach(item => {
//   item.addEventListener('click', doChangeTextSizeOnClickImg);
// });
// function doChangeTextSizeOnClickImg(event) {
//   console.log('sgfag');
// }

catsListRef.addEventListener('click', doChangeTextSizeOnClickPictures);

function doChangeTextSizeOnClickPictures(event) {
  // console.log(event.target.nodeName);
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const activeLi = catsListRef.querySelector('.titleNameActive');
  if (activeLi) {
    activeLi.classList.remove('titleNameActive');
  }
  const parentLi = event.target.closest('li');
  const titleName = parentLi.querySelector('h2');
  titleName.classList.add('titleNameActive');
}
