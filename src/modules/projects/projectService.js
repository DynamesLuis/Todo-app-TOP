import Project from "./Project";
import { setNewProject, setActiveProject } from "../../state/globalState"

function createProject(name) {
    const newProject = new Project(name);
    const idProject = newProject.getId();

    setNewProject(newProject);
    setActiveProject(idProject);
}

function deleteProyect(id) {
}

export {
    createProject,
}