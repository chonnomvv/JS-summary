let todos = [];
let todosCopys = [];
const $input = document.querySelector('.input-todo');
const $todos = document.querySelector('.todos');
const $completeAll = document.querySelector('.custom-checkbox');
const $clearCompleted = document.querySelector('.btn');
const $completeAlls = document.querySelector('.complete-all');
const $nav = document.querySelector('.nav');
// let $todoItem = [];

function getId() {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

function render() {
  let html = '';
  todos.forEach((todo) => {
    html += `<li id = "${todo.id}" class="todo-item">
    <input class= "custom-checkbox" type = "checkbox" id = "ck-${todo.id}" ${todo.completed ? 'checked' : ''}>
    <label for="ck-${todo.id}">${todo.content}</label><i class="remove-todo far fa-times-circle"></i>
    </li>`;
  });
  $todos.innerHTML = html;
  // $todoItem = document.querySelector('.todo-item');
  document.querySelector('.active-todos').innerHTML = $todos.childElementCount;
}

function renderCopy() {
  let html = '';
  todosCopys.forEach((todo) => {
    html += `<li id = "${todo.id}" class="todo-item">
    <input class= "custom-checkbox" type = "checkbox" id = "ck-${todo.id}" ${todo.completed ? 'checked' : ''}>
    <label for="ck-${todo.id}">${todo.content}</label><i class="remove-todo far fa-times-circle"></i>
    </li>`;
  });
  $todos.innerHTML = html;
  document.querySelector('.active-todos').innerHTML = $todos.childElementCount;
}

function renderFooter() {
  document.querySelector('.completed-todos').innerHTML = todos.filter(todo => todo.completed).length;
}

$input.addEventListener('keyup', function (e) {
  const content = $input.value.trim();
  if (content === '' || e.keyCode !== 13) return;
  todos = [{ id: getId(), content, completed: false }, ...todos];
  todosCopys = todos;
  render();
  e.target.value = '';
});

$completeAlls.addEventListener('click', function () {
  // todos = todos.filter( todo => todo.id === );
  render();
});

$completeAll.addEventListener('click', function () {
  if ($completeAll.checked) {
    console.log($completeAll.checked);
    todos = todos.map(todo => Object.assign({}, todo, { completed: true }));
  } else {
    console.log($completeAll.checked);
    todos = todos.map(todo => Object.assign({}, todo, { completed: false }));
  }
  render();

  renderFooter();
});

$clearCompleted.addEventListener('click', function () {
  todos = todos.filter(todo => !todo.completed);

  render();
  renderFooter();
});

$todos.addEventListener('click', function (e) {
  if (!e.target.classList.contains('custom-checkbox') && !e.target.classList.contains('remove-todo'));
  else if (e.target.classList.contains('custom-checkbox')) {
    todos = todos.map(todo => todo.id === +e.target.parentNode.id ?  Object.assign({}, todo, { completed: !todo.completed}) : todo);
    todosCopys = todos;
    todosCopys = todosCopys.filter(todo => !todo.completed);
    renderFooter();
    if ($nav.children[1].className === 'active') {
      todosCopys = todos;
      todosCopys = todosCopys.filter(todo => !todo.completed);
      renderCopy();
      renderFooter();
    }
  } else if (e.target.classList.contains('remove-todo')) {
    todos = todos.filter(todo => todo.id !== +e.target.parentNode.id);
    todosCopys = todos;
    renderFooter();
    render();
  }
});

$nav.addEventListener('click', function (e) {
  const navChildren = [...$nav.children];
  navChildren.map(nav => nav.className = '');
  if (e.target.id === 'all') {
    navChildren[0].className = 'active';
    render();
  } else if (e.target.id === 'active') {
    navChildren[1].className = 'active';
    todosCopys = todos.filter(todo => !todo.completed);
    renderCopy(todosCopys);
  } else if (e.target.id === 'completed') {
    navChildren[2].className = 'active';
    todosCopys = todos.filter(todo => todo.completed);
    renderCopy(todosCopys);
  }
});
