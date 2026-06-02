export default class Project {

  constructor(name) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.todos = [];
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
  
}
