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

const getTodos = () => {
    const activeProject = globalState.projects.find((project) => project.getId() == globalState.activeProject);
    return activeProject.getTodos();
}

const setTodoActiveProject = (newTodo) => {
    const index = globalState.projects.findIndex(project => project.getId() == globalState.activeProject);
    globalState.projects[index].setTodos(newTodo);
}

const removeProyect = (projectId) => {
    const selectedIndex = globalState.projects.findIndex((project) => project.getId() == projectId);
    const filteredProjects =  globalState.projects.filter((_, index) => index !== selectedIndex);
    setProjects(filteredProjects);
}

export {
    getProjects,
    getActiveProject,
    setProjects,
    setNewProject,
    setActiveProject,
    getTodos,
    setTodoActiveProject,
    removeProyect
}