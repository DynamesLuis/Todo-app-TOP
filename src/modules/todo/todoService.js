import Todo from "./Todo";
import {setTodoActiveProject, getProjects} from "../../state/globalState"

function createTodo(name, description, date, priority) {
    const newTodo = new Todo(name, description, date, priority);
    setTodoActiveProject(newTodo);
}

export {
    createTodo,
}