import { openModal, closeModal } from "../modules/modals/modalController"
import renderProjects from "../modules/ui/renderProjects"
import {createProject} from "../modules/projects/projectService"
import { $inputName } from "../modules/ui/domSelectors";
import { saveStorage } from "../modules/storage/storage";
import { getProjects } from "../state/globalState";

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

export {
    handleOpenModal,
    handleCloseModal,
    handleSubmitProject
}