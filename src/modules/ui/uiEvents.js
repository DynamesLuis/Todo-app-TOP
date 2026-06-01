import { handleOpenModal, handleCloseModal, handleSubmitProject } from "../../coordinator/coordinator"
import setActiveProjectOnNav from "./setActiveProject";


export default function initEvents() {
    const $addProjectBtn = document.querySelector(".add-btn");
    const $closeProjectModalBtn = document.querySelector(".closeProject-modal-Btn");
    const $submitProjectModal = document.querySelector(".submit-btn");
    const $navContainer = document.querySelector(".projects-container");
    $addProjectBtn.addEventListener("click", handleOpenModal);
    $closeProjectModalBtn.addEventListener("click", handleCloseModal);
    $submitProjectModal.addEventListener("click", (e) => handleSubmitProject(e));
    // meter en un for each
    $navContainer.addEventListener("click", (e) => setActiveProjectOnNav(e));
}

