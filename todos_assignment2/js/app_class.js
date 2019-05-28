class Todos {
  constructor() {
    this.todos = [];
    this.$input = document.querySelector('.input-todo');
    this.$todos = document.querySelector('.todos');
    this.$completeAll = document.querySelector('.custom-checkbox');
    this.$clearCompleted = document.querySelector('.btn');
    this.$completeAlls = document.querySelector('.complete-all');

    this.$input.onkeyup = this.addTodo.bind(this);
    this.$completeAlls.onclick = this.completeAlls(this);
    this.$completeAll.onclick = this.completeAll(this);
    this.$clearCompleted.onclick = this.clearCompleted(this);
    this.$todos.onclick = this.todosClick(this);
    
  }



  $todos.addEventListener('click', function (e) {
    if (!e.target.classList.contains('remove-todo')) return;
    todos = todos.filter( todo => todo.id !== +e.target.parentNode.id);
    render();
  });


  todosClick(e) {
    if (!e.target.classList.contains('cumstom-checkbox')) return;
    this.todos = todos.map( todo => todo.id === +e.target.parentNode.id ? Object.assign({}. todo, { completed: !todo.completed}) : todo);
    this.renderFooter();
  }

  getId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }

  render() {
    let html = '';
    this.todos.forEach( todo => {
      html += `<li id = "${todo.id}" class="todo-item">
      <input class= "custom-checkbox" type = "checkbox" id = "ck-${todo.id}" ${todo.completed ? 'checked' : ''}>
      <label for="ck-${todo.id}">${todo.content}</label><i class="remove-todo far fa-times-circle"></i>
      </li>`;
    });
    this.$todos.innerHTML = html;
    document.querySelector('.active-todos').innerHTML = this.$todos.childElementCount;
  }

  renderFooter() {
    document.querySelector('.completed-todos').innerHTML = this.todos.filter( todo => todo.completed).length;
  }

  addTodo(e) {
    const content = this.$input.value.trim();
    if (content === '' || e.keyCode !== 13) return;
    this.todos = [{ id: this.getId(), content, completed: false }, ...this.todos];
    this.render();
    e.target.value = '';
  }

  completeAlls() {
    this.render();
  }

  completeAll() {
    this.todos = this.todos.map(todo => Object.assign({}, todo, { completed: !todo.completed }));
    this.render();
    this.renderFooter();
  }

  clearCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed);
    this.render();
    this.renderFooter();
  }

}
