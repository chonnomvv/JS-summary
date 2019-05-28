// class Todos {
//   constructor {
//     this.todos = [];
//     this.$input = document.querySelector('.input-todo');
//     this.$todos = document.querySelector('.todos');
//     this.$completeAll = document.querySelector('.custom-checkbox');
//     this.$clearCompleted = document.querySelector('.btn');
//     this.$completeAlls = document.querySelector('.complete-all');
//   }

//   getId() {
//     return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
//   };

//   render() {
//     todos.forEach( todo => {
//       html += `<li id = "${todo.id}" class="todo-item">
//       <input class= "custom-checkbox" type = "checkbox" id = "ck-${todo.id}" ${todo.completed ? 'checked' : ''}>
//       <label for="ck-${todo.id}">${todo.content}</label><i class="remove-todo far fa-times-circle"></i>
//       </li>`;
//     });
//     $todos.innerHTML = html;
//     document.querySelector('.active-todos').innerHTML = $todos.childElementCount;
//   };

//   renderFooter() {
//     document.querySelector('.completed-todos').innerHTML = todos.filter( todo => todo.completed).length;
//   }
// }
let todos = [];
const $input = document.querySelector('.input-todo');
const $todos = document.querySelector('.todos');
const $completeAll = document.querySelector('.custom-checkbox');
const $clearCompleted = document.querySelector('.btn');
const $completeAlls = document.querySelector('.complete-all');

function getId() {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

function render() {
  let html = '';
  todos.forEach( todo => {
    html += `<li id = "${todo.id}" class="todo-item">
    <input class= "custom-checkbox" type = "checkbox" id = "ck-${todo.id}" ${todo.completed ? 'checked' : ''}>
    <label for="ck-${todo.id}">${todo.content}</label><i class="remove-todo far fa-times-circle"></i>
    </li>`;
  });
  $todos.innerHTML = html;
  document.querySelector('.active-todos').innerHTML = $todos.childElementCount;
}

function renderFooter() {
  document.querySelector('.completed-todos').innerHTML = todos.filter( todo => todo.completed).length;
}

$input.addEventListener('keyup', function (e) {
  const content = $input.value.trim();
  if (content === '' || e.keyCode !== 13) return;
  todos = [{ id: getId(), content, completed: false }, ...todos];
  render();
  e.target.value = '';
});

$completeAlls.addEventListener('click', function () {
  // todos = todos.filter( todo => todo.id === );
  render();
});

$completeAll.addEventListener('click', function () {
  todos = todos.map( todo => Object.assign({}, todo, { completed: !todo.completed }));
  render();
  renderFooter();
});

$clearCompleted.addEventListener('click', function () {
  todos = todos.filter(todo => !todo.completed);
  render();
  renderFooter();
});

$todos.addEventListener('click', function (e) {
  if (!e.target.classList.contains('custom-checkbox')) return;
  todos = todos.map( todo => todo.id === +e.target.parentNode.id ?  Object.assign({}, todo, { completed: !todo.completed}) : todo);
  renderFooter();

});

$todos.addEventListener('click', function (e) {
  if (!e.target.classList.contains('remove-todo')) return;
  todos = todos.filter( todo => todo.id !== +e.target.parentNode.id);
  render();
});
