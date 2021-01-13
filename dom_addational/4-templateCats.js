'use strict';

export const templateCats = cat => {
  const { id, src, nameCat } = cat;
  return `<li data-IdNow="${id}">
   <h2>${nameCat} </h2>
      <img src="${src}" alt="${nameCat}" width="100">

   </li>
`;
};

// Шаблоны к задаче №5
const templateName = name => {
  return;
  `<li>
   ${name}
   </li>`;
};

export const templateCatsMiddle = cat => {
  const { id, src, nameCat, listKittes } = cat;
  return `
   <li data-IdNow="${id}">
    <h2>${nameCat} </h2>
       <img src="${src}" alt="${nameCat}" width="100">
       <ul>
        <li>${listKittes}</li>
      </ul>
      </li>
 `;
};
