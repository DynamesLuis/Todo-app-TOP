import { openModal, closeModal, openModalTodo, closeTodoModal } from "../modules/modals/modalController"
import renderProjects from "../modules/ui/renderProjects"
import { createProject, deleteProyect } from "../modules/projects/projectService"
import { createTodo, changeStatus } from "../modules/todo/todoService"
import { $inputName, $todoForm } from "../modules/ui/domSelectors";
import { saveStorage } from "../modules/storage/storage";
import { getProjects, setActiveProject } from "../state/globalState";
import renderTodos from "../modules/ui/renderTodos";

function handleOpenModal() {
    openModal();
}

function handleCloseModal() {
    closeModal();
}

function handleSubmitProject(e) {
    e.preventDefault();
    createProject($inputName.value);
    renderProjects(getProjects());
    closeModal();
    saveStorage();
}

function handleClickNav(e) {
    const $element = e.target;
    let projectId = "";

    if ($element.tagName === 'BUTTON') {
        //checar la class
        const isDeleteBtn = $element.classList.contains("delete-project-btn");
        const $li = $element.parentElement.parentElement;
        projectId = $li.dataset.id;
        if (isDeleteBtn) {

            deleteProyect(projectId);
            projectId = getProjects()[0].getId();
            //renderizar refactorizar para solo usar 1
        } else {
            console.log("edit clicked");

            //si no editar
        }
    }

    if ($element.tagName === 'LI') {
        projectId = $element.dataset.id;
    }

    if ($element.tagName === 'SPAN' || $element.tagName === "DIV") {
        const $li = $element.parentElement;
        projectId = $li.dataset.id;
    }

    setActiveProject(projectId);
    renderProjects(getProjects());
    renderTodos();
    saveStorage();
}

function handleOpenModalTodo() {
    openModalTodo();
}

function handleCloseTodoModal() {
    closeTodoModal();
}

function handleSumbitTodo(e) {
    e.preventDefault();
    const formData = new FormData($todoForm);
    const task = {
        name: formData.get("name"),
        description: formData.get("description"),
        dueDate: formData.get("dueDate"),
        priority: formData.get("priority"),
    };
    createTodo(task.name, task.description, task.dueDate, task.priority);
    renderTodos();
    closeTodoModal();
    saveStorage();
}

function handleTodoClick(e) {
    const $element = e.target;
    let todoId = "";
    if ($element.tagName === "INPUT") {
        todoId = $element.parentElement.parentElement.dataset.id;       
        changeStatus(todoId);
        renderTodos();
        console.log("input cliecked");
        
    }

    if ($element.tagName === "BUTTON") {
        console.log("button clicked");
        
    }

    saveStorage()
       
}

export {
    handleOpenModal,
    handleCloseModal,
    handleSubmitProject,
    handleClickNav,
    handleOpenModalTodo,
    handleCloseTodoModal,
    handleSumbitTodo,
    handleTodoClick
}
