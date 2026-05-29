import { $projectModal, $inputName } from "../ui/domSelectors";

function openModal() {
    $projectModal.classList.remove("hidden");
}

function closeModal() {
    $projectModal.classList.add("hidden");
    $inputName.value = "";
}

export {
    openModal,
    closeModal
}