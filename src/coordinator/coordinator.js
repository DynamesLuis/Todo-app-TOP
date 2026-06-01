import { openModal, closeModal } from "../modules/modals/modalController"
import renderProjects from "../modules/ui/renderProjects"
import { createProject } from "../modules/projects/projectService"
import { $inputName } from "../modules/ui/domSelectors";
import { saveStorage } from "../modules/storage/storage";
import { getProjects,setActiveProject } from "../state/globalState";

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

export {
    handleOpenModal,
    handleCloseModal,
    handleSubmitProject,
    handleClickNav
}