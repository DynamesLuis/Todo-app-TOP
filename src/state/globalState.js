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

const getOneTodo = (todoId) => {
    const activeProject = globalState.projects.find((project) => project.getId() == globalState.activeProject)
    const todo = activeProject.getTodos().find(todo => todo.getId() == todoId) 
    return todo
}

const setTodoActiveProject = (newTodo) => {
    const index = globalState.projects.findIndex(project => project.getId() == globalState.activeProject);
    globalState.projects[index].setTodos(newTodo);
}

const removeProyect = (projectId) => {
    const selectedIndex = globalState.projects.findIndex((project) => project.getId() == projectId);
    const filteredProjects = globalState.projects.filter((_, index) => index !== selectedIndex);
    setProjects(filteredProjects);
}

const changeTodoStatus = (todoId) => {
    const projectIndex = globalState.projects.findIndex((project) => project.getId() == getActiveProject());
    const todoIndex = globalState.projects[projectIndex].getTodos().findIndex((todo) => todo.getId() == todoId);
    globalState.projects[projectIndex].changeTodoStatus(todoIndex);
}

const deleteTodoFromState = (todoId) => {
    const projectIndex = globalState.projects.findIndex((project) => project.getId() == getActiveProject());
    const newArray = globalState.projects[projectIndex].getTodos().filter(todo => todo.getId() !== todoId);
    globalState.projects[projectIndex].setAllTodos(newArray);
}

export {
    getProjects,
    getActiveProject,
    setProjects,
    setNewProject,
    setActiveProject,
    getTodos,
    setTodoActiveProject,
    removeProyect,
    changeTodoStatus,
    deleteTodoFromState,
    getOneTodo
}