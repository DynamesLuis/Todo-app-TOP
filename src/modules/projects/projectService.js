import Project from "./Project";
import { setNewProject, setActiveProject, removeProyect, getOneProject, editProjectFromState } from "../../state/globalState"

function createProject(name) {
    const newProject = new Project(name);
    const idProject = newProject.getId();

    setNewProject(newProject);
    setActiveProject(idProject);
}

function getProjectData(projectId) {
    return getOneProject(projectId)
}

function deleteProyect(projectId) {
    removeProyect(projectId);
}

function editProject(projectEditing, projectName) {
    editProjectFromState(projectEditing, projectName)
}

function createUpdateProject(projectEditing, projectName) {
      const updatedProject = new Project(projectName, projectEditing.getId(), projectEditing.getTodos());
      return updatedProject;
}

export {
    createProject,
    deleteProyect,
    getProjectData,
    editProject,
    createUpdateProject
}