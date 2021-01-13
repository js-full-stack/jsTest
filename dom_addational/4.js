// Запись именованного импорта и экспорта - import/export слева от const
// При именованном экспорте имя всегда берется в фигурные скобки
// Внутри метода map не использовать  insertAdjacentHTML и innerHTML
import listCats from './4-listCats.js';
import { templateCats } from './4-templateCats.js';

const catsListRef = document.querySelector('.js-list_cats');

const alLi = listCats
  .map(item => {
    const markup = templateCats(item);
    // console.log(markup);
    return markup;
  })
  .join('');

catsListRef.insertAdjacentHTML('beforeend', alLi);
