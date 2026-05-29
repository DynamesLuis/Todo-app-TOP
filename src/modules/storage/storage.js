import { getProjects } from "../../state/globalState"
import Project from "../projects/Project";

function saveStorage() {
    const projects = getProjects();
    localStorage.setItem("projects", JSON.stringify(projects));
}

function getStorage() {
    const storageProjects = JSON.parse(localStorage.getItem('projects'));
    if (storageProjects) {
        const projects = storageProjects.map(project => {
            const rehydratedProject = new Project(project.name)
            rehydratedProject.setTodos(project.todos)
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