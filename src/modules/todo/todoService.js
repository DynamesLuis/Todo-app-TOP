import Todo from "./Todo";
import { setTodoActiveProject, changeTodoStatus } from "../../state/globalState"

function createTodo(name, description, date, priority) {
    const newTodo = new Todo(name, description, date, priority);
    setTodoActiveProject(newTodo);
}

function changeStatus(todoId) {
    changeTodoStatus(todoId);
}

export {
    createTodo,
    changeStatus
}