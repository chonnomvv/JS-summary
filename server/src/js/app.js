let todos = [];
let todosCopys = [];
const $input = document.querySelector('.input-todo');
const $todos = document.querySelector('.todos');
const $clearCompleted = document.querySelector('.btn');
const $completeAlls = document.querySelector('#ck-complete-all');
const $nav = document.querySelector('.nav');
let menu = 0;

function getId() {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

function renderFooter() {
  document.querySelector('.completed-todos').innerHTML = todos.filter(todo => todo.completed).length;
}

function render(res) {
  todos = res;
  let menu1Todos = '';
  let menu2Todos = '';
  let html = '';
  todos.forEach(todo => {
    html += `<li id = "${todo.id}" class="todo-item">
     <input class= "custom-checkbox" type = "checkbox" id = "ck-${todo.id}" ${todo.completed ? 'checked' : ''}>
     <label for="ck-${todo.id}">${todo.content}</label><i class="remove-todo far fa-times-circle"></i>
     </li>`;
  });

  if (menu === 1) {
    html = '';
    menu1Todos = todos.filter(({ completed }) => !completed);
    menu1Todos.forEach(todo => {
      html += `<li id = "${todo.id}" class="todo-item">
       <input class= "custom-checkbox" type = "checkbox" id = "ck-${todo.id}" ${todo.completed ? 'checked' : ''}>
       <label for="ck-${todo.id}">${todo.content}</label><i class="remove-todo far fa-times-circle"></i>
       </li>`;
    });
  } else if (menu === 2) {
    html = '';
    menu2Todos = todos.filter(({ completed }) => completed);
    menu2Todos.forEach(todo => {
      html += `<li id = "${todo.id}" class="todo-item">
       <input class= "custom-checkbox" type = "checkbox" id = "ck-${todo.id}" ${todo.completed ? 'checked' : ''}>
       <label for="ck-${todo.id}">${todo.content}</label><i class="remove-todo far fa-times-circle"></i>
       </li>`;
    });
  }
  $todos.innerHTML = html;
  document.querySelector('.active-todos').innerHTML = $todos.childElementCount;
  renderFooter();
}

// GET
function getTodos() {
  fetch('/todos')
    .then(res => res.json())  /* json 타입의 데이터만 뽑아온다(원하는 todos만 뽑아내는 것) */
    .then(render)  // then(todos => render(todos))
    .catch(console.log);
}

window.onload = () => { getTodos(); };

// POST
function postTodos(content) {
  fetch('/todos', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ id: getId(), content, completed: false })
  }).then(res => res.json())
    .catch(console.log);
  getTodos();
}

// DELETE
function deleteTodos(id) {
  fetch(`/todos/${id}`, {
    method: 'DELETE'
  }).catch(console.log);
  getTodos();
}

// Toggle Completed (patch)
function toggleCompleted(id) {
  todos.forEach(todo => {
    if (todo.id === +id) {
      fetch(`/todos/${todo.id}`, {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ completed: !todo.completed })
      }).then(console.log);
    }
  });
  getTodos();
}

// completeAll todos
function completeAllTodos(checked) {
  console.log(typeof checked);
  fetch('/todos', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed: checked })
  }).then(res => res.json())
    .catch(console.log);
}

// clear completed
function clearCompleted() {
  fetch('/todos/completed', {
    method: 'DELETE'
  }).then(res => res.json())
    .then(render)
    .catch(console.log);
}

function renderCopy() {
  let html = '';
  todosCopys.forEach(todo => {
    html += `<li id = "${todo.id}" class="todo-item">
    <input class= "custom-checkbox" type = "checkbox" id = "ck-${todo.id}" ${todo.completed ? 'checked' : ''}>
    <label for="ck-${todo.id}">${todo.content}</label><i class="remove-todo far fa-times-circle"></i>
    </li>`;
  });
  $todos.innerHTML = html;
  document.querySelector('.active-todos').innerHTML = $todos.childElementCount;
}

$input.addEventListener('keyup', function (e) {
  const content = $input.value.trim();
  if (content === '' || e.keyCode !== 13) return;
  postTodos(content);
  e.target.value = '';
});

$completeAlls.addEventListener('click', function (e) {
  console.log(e.target);
  const checked = e.target.checked;
  completeAllTodos(checked);
  getTodos();
});

// 완료된 항목들 지우기 (clear completed)
$clearCompleted.addEventListener('click', function () {
  clearCompleted();
});

$todos.addEventListener('click', function (e) {
  if (!e.target.classList.contains('custom-checkbox') && !e.target.classList.contains('remove-todo'));
  else if (e.target.classList.contains('custom-checkbox')) {
    toggleCompleted(e.target.parentNode.id);
    renderFooter();
    if ($nav.children[1].className === 'active') {
      todosCopys = todos.filter(todo => !todo.completed);
      renderCopy();
      renderFooter();
    }
  } else if (e.target.classList.contains('remove-todo')) {
    deleteTodos(e.target.parentNode.id);
  }
});

$nav.addEventListener('click', function (e) {
  const navChildren = [...$nav.children];
  navChildren.map(nav => nav.className = '');
  if (e.target.id === 'all') {
    navChildren[0].className = 'active';
    menu = 0;
    render(todos);
  } else if (e.target.id === 'active') {
    navChildren[1].className = 'active';
    menu = 1;
    render(todos);
  } else if (e.target.id === 'completed') {
    navChildren[2].className = 'active';
    menu = 2;
    render(todos);
  }
});
