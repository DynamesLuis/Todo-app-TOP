import Project from "../modules/projects/Project";

const defaultProject = new Project("My project");

const globalState = {
    projects: [defaultProject],
    activeProject: defaultProject.getId(), 
}

const getProjects = () => globalState.projects;
const getActiveProject = () => globalState.activeProject;

const setNewProject = (newProject) => {
    globalState.projects.push(newProject);
}

const setProjects = (array) => {
    globalState.projects = array;
}

const setActiveProject = (idProject) => {
    globalState.activeProject = idProject;
}

export {
    getProjects,
    getActiveProject,
    setProjects,
    setNewProject,
    setActiveProject,
}