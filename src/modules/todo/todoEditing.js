let todoEditing = null;

function setTodoEditing(todo) {
    todoEditing = todo;
}

function resetTodoEditing() {
    todoEditing = null;
}

function getTodoEditing() {
    return todoEditing;
}

export {
    setTodoEditing,
    getTodoEditing,
    resetTodoEditing
}