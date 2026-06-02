import { openModal, closeModal, openModalTodo, closeTodoModal } from "../modules/modals/modalController"
import renderProjects from "../modules/ui/renderProjects"
import { createProject } from "../modules/projects/projectService"
import { createTodo } from "../modules/todo/todoService"
import { $inputName } from "../modules/ui/domSelectors";
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
    if ($element.tagName === 'LI') {
        const projectId = $element.dataset.id;
        setActiveProject(projectId);
        renderProjects(getProjects());
    }
}

function handleOpenModalTodo() {
    openModalTodo();
}

function handleCloseTodoModal() {
    closeTodoModal();
}

function handleSumbitTodo(e) {
    e.preventDefault();
    const formData = new FormData(document.querySelector(".task-form"));
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

export {
    handleOpenModal,
    handleCloseModal,
    handleSubmitProject,
    handleClickNav,
    handleOpenModalTodo,
    handleCloseTodoModal,
    handleSumbitTodo
}