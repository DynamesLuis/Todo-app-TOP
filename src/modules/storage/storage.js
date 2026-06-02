import { getProjects } from "../../state/globalState"
import Project from "../projects/Project";
import Todo from "../todo/Todo";

function saveStorage() {
    const projects = getProjects();
    localStorage.setItem("projects", JSON.stringify(projects));
}

function getStorage() {
    const storageProjects = JSON.parse(localStorage.getItem('projects'));
    if (storageProjects) {
        const projects = storageProjects.map(project => {
            const rehydratedProject = new Project(project.name)
            const rehydratedTodos = project.todos.map(todo => new Todo(todo.name, todo.description, todo.date, todo.priority, todo.completed))
            rehydratedProject.setAllTodos(rehydratedTodos);
            return rehydratedProject;
        })
        return projects
    }
    return storageProjects
}

export {
    saveStorage,
    getStorage,
}