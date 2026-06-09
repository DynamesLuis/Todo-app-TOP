import { openModal, closeModal, openModalTodo, closeTodoModal } from "../modules/modals/modalController"
import renderProjects from "../modules/ui/renderProjects"
import { createProject, deleteProyect, editProject, getProjectData } from "../modules/projects/projectService"
import {
    createTodo, changeStatus, deleteTodo, getTodoData, editTodo, getTodayTodos, getSevenDaysTodos,
    filterTodos

} from "../modules/todo/todoService"
import { $inputName, $searchInput, $todoForm } from "../modules/ui/domSelectors";
import { saveStorage } from "../modules/storage/storage";
import { getProjects, setActiveProject, setCurrentView } from "../state/globalState";
import renderTodos from "../modules/ui/renderTodos";
import { getTodoEditing, setTodoEditing } from "../modules/todo/todoEditing";
import { getEditingProject, setEditingProject } from "../modules/projects/projectEditing";

function handleOpenModal() {
    openModal();
}

function handleCloseModal() {
    closeModal();
}

function handleSubmitProject(e) {
    e.preventDefault();
    const editingProject = getEditingProject();
    if (editingProject) {
        editProject(editingProject, $inputName.value)
    } else {
        createProject($inputName.value);
        renderTodos();
    }
    renderProjects(getProjects());
    closeModal();
    saveStorage();
}

function handleClickNav(e) {
    const $element = e.target;
    let projectId = "";
    if ($element.tagName === 'UL') return;

    if ($element.tagName === 'BUTTON') {
        const isDeleteBtn = $element.classList.contains("delete-project-btn");
        const $li = $element.parentElement.parentElement;
        projectId = $li.dataset.id;
        if (isDeleteBtn) {
            deleteProyect(projectId);
            projectId = getProjects()[0].getId();
        } else {
            const project = getProjectData(projectId);
            setEditingProject(project);
            openModal()
            return;
        }
    }

    if ($element.tagName === 'LI') {
        projectId = $element.dataset.id;
        removeNavItemActive(document.querySelector(".date-item.active-nav"))
    }

    if ($element.tagName === 'SPAN' || $element.tagName === "DIV") {
        const $li = $element.parentElement;
        projectId = $li.dataset.id;
        removeNavItemActive(document.querySelector(".date-item.active-nav"))
    }

    setActiveProject(projectId);
    renderProjects(getProjects());
    setCurrentView("project");
    $searchInput.value = "";
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
    const todoData = {
        name: formData.get("name"),
        description: formData.get("description"),
        date: formData.get("dueDate"),
        priority: formData.get("priority"),
    };

    const todoEditing = getTodoEditing();
    if (todoEditing) {
        editTodo(todoEditing, todoData);
    } else {
        createTodo(todoData.name, todoData.description, todoData.date, todoData.priority);
    }
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

function handleSpecialNavClick(e) {
    const $element = e.target;
    if ($element.tagName == "UL") return;
    const $specialNav = document.querySelectorAll(".date-item");
    $specialNav.forEach(item => item.classList.remove("active-nav"))
    $element.classList.add("active-nav");
    removeNavItemActive(document.querySelector(".project-item.active-nav"));
    const isToday = $element.classList.contains("today")
    if (isToday) {
        setCurrentView("today")
    } else {
        setCurrentView("next7days")
    }
    $searchInput.value = "";
    renderTodos();
}


function removeNavItemActive($item) {
    if ($item) {
        $item.classList.remove("active-nav");
    }
}

function handleInputSearch(e) {
    const search = e.target.value
    if (search === "") renderTodos();
    
    const todosFiltered = filterTodos(search);
    renderTodos(todosFiltered);
}

export {
    handleOpenModal,
    handleCloseModal,
    handleSubmitProject,
    handleClickNav,
    handleOpenModalTodo,
    handleCloseTodoModal,
    handleSumbitTodo,
    handleTodoClick,
    handleSpecialNavClick,
    handleInputSearch
}
