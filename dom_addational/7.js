const dataTodo = {
  listTodo: [],
  addTodo(text) {
    const todo = {
      id: Date.now(),
      text,
    };
    this.listTodo = [...this.listTodo, todo];
    return todo;
  },

  deleteTodo(idDelete) {
    this.listTodo = this.listTodo.filter(todo => todo.id !== idDelete);
    return { status: 201 };
  },
};

const formRef = document.querySelector('.js-form-2');
const ulRef = document.querySelector('.list_todo');

formRef.addEventListener('submit', submitOnClickToBtn);
ulRef.addEventListener('click', clickUl);

const templateTodo = todo => {
  return `
  <li data-idx = "${todo.id}" >
  <h2>${todo.text}</h2> 
  <button type="button">Delete</button>
  </li>`;
};

function submitOnClickToBtn(event) {
  event.preventDefault();
  const formNow = event.currentTarget;
  const inputRef = formNow.elements.todo;
  const todo = dataTodo.addTodo(inputRef.value);
  const markupLi = templateTodo(todo);

  ulRef.insertAdjacentHTML('beforeend', markupLi);
}

function clickUl(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const parentLi = event.target.closest('li');

  console.log(dataTodo.listTodo);
  //   console.log(parentLi.dataset.idx);
  console.log(dataTodo.listTodo);
  const idDel = parentLi.dataset.idx;
  const info = dataTodo.deleteTodo(idDel);

  if (info.status === 201) {
    parentLi.remove();
  }
}
