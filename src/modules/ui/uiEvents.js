import { handleOpenModal,handleCloseModal,handleSubmitProject } from "../../coordinator/coordinator"


export default function initEvents() {
    const $addProjectBtn = document.querySelector(".add-btn");
    const $closeProjectModalBtn = document.querySelector(".closeProject-modal-Btn");
    const $submitProjectModal = document.querySelector(".submit-btn");
    
    $addProjectBtn.addEventListener("click", handleOpenModal);
    $closeProjectModalBtn.addEventListener("click", handleCloseModal);
    $submitProjectModal.addEventListener("click", (e) => handleSubmitProject(e));
}

