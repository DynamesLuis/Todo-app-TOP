import Todo from "./Todo";
import { setTodoActiveProject, changeTodoStatus, deleteTodoFromState, getOneTodo } from "../../state/globalState"

function createTodo(name, description, date, priority) {
    const newTodo = new Todo(name, description, date, priority);
    setTodoActiveProject(newTodo);
}

function changeStatus(todoId) {
    changeTodoStatus(todoId);
}

function deleteTodo(todoId) {
    deleteTodoFromState(todoId)
}

function getTodoData(todoId) {
    return getOneTodo(todoId)
}

function editTodo(todoId) {

}

export {
    createTodo,
    changeStatus,
    deleteTodo,
    getTodoData
}