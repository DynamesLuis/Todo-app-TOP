import { openModal, closeModal, openModalTodo, closeTodoModal } from "../modules/modals/modalController"
import renderProjects from "../modules/ui/renderProjects"
import { createProject, deleteProyect } from "../modules/projects/projectService"
import { createTodo, changeStatus, deleteTodo, getTodoData } from "../modules/todo/todoService"
import { $inputName, $todoForm } from "../modules/ui/domSelectors";
import { saveStorage } from "../modules/storage/storage";
import { getProjects, setActiveProject } from "../state/globalState";
import renderTodos from "../modules/ui/renderTodos";
import { setTodoEditing } from "../modules/modals/todoEditing";

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
    }

    if ($element.tagName === "BUTTON") {
        const isDeleteBtn = $element.classList.contains("delete-btn");
        todoId = $element.parentElement.parentElement.dataset.id;
        if (isDeleteBtn) {
            deleteTodo(todoId);
            renderTodos();
        } else {
            const todo = getTodoData(todoId);
            setTodoEditing(todo);
            openModalTodo();
        }

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
