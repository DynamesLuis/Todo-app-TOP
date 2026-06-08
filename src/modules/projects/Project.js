export default class Project {

  constructor(name, id = crypto.randomUUID(), todos = []) {
    this.id = id;
    this.name = name;
    this.todos = todos;
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getTodos() {
    return this.todos;
  }

  setName(newName) {
    this._name = newName;
  }
  setTodos(newTodo) {
    this.todos.push(newTodo);
  }

  setAllTodos(todos) {
    this.todos = todos;
  }

  changeTodoStatus(todoIndex) {
    this.todos[todoIndex].setCompleted();
  }

}
