import Todo from "./Todo";
import { setTodoActiveProject, changeTodoStatus, deleteTodoFromState, getOneTodo, editTodoFromState } from "../../state/globalState"

function createTodo(name, description, date, priority) {
    const newTodo = new Todo(name, description, date, priority);
    setTodoActiveProject(newTodo);
}

function createUpdatedToto(editingTodo, todoData) {
    const updatedTodo = new Todo(
        todoData.name,
        todoData.description,
        todoData.date,
        todoData.priority,
        editingTodo.getCompleted(),
        editingTodo.getId());
    return updatedTodo
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

function editTodo(todoEditing, todoData) {
    editTodoFromState(todoEditing, todoData)
}

export {
    createTodo,
    changeStatus,
    deleteTodo,
    getTodoData,
    editTodo,
    createUpdatedToto
}