import {
    handleOpenModal, handleCloseModal, handleSubmitProject, handleClickNav, handleOpenModalTodo,
    handleCloseTodoModal, handleSumbitTodo, handleTodoClick, handleSpecialNavClick, handleInputSearch
} from "../../coordinator/coordinator"

export default function initEvents() {
    const $addProjectBtn = document.querySelector(".add-btn");
    const $closeProjectModalBtn = document.querySelector(".closeProject-modal-Btn");
    const $submitProjectModal = document.querySelector(".submit-btn");
    const $submitTodoModal = document.querySelector(".submit-todo-btn");
    const $navContainer = document.querySelector(".projects-container");
    const $addTodoBtn = document.querySelector(".addTask-btn");
    const $closeTodoModal = document.querySelector(".closeTask-modal-Btn");
    const $todoTable = document.querySelector(".todo-container")
    const $specialContainer = document.querySelector(".special-options");
    const $searchInput = document.querySelector(".search-input");

    $addProjectBtn.addEventListener("click", handleOpenModal);
    $closeProjectModalBtn.addEventListener("click", handleCloseModal);
    $submitProjectModal.addEventListener("click", (e) => handleSubmitProject(e));
    $navContainer.addEventListener("click", (e) => handleClickNav(e));
    $addTodoBtn.addEventListener("click", handleOpenModalTodo);
    $closeTodoModal.addEventListener("click", handleCloseTodoModal);
    $submitTodoModal.addEventListener("click", (e) => handleSumbitTodo(e));
    $todoTable.addEventListener("click", (e) => handleTodoClick(e));
    $specialContainer.addEventListener("click", (e) => handleSpecialNavClick(e));
    $searchInput.addEventListener('keyup', (e) => handleInputSearch(e))
}

