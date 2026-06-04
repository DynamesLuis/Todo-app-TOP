import Project from "./Project";
import { setNewProject, setActiveProject, removeProyect } from "../../state/globalState"

function createProject(name) {
    const newProject = new Project(name);
    const idProject = newProject.getId();

    setNewProject(newProject);
    setActiveProject(idProject);
}

function deleteProyect(projectId) {
    removeProyect(projectId);
}

export {
    createProject,
    deleteProyect
}