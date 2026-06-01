import { $projectModal, $inputName, $todoModal } from "../ui/domSelectors";

function openModal() {
    $projectModal.classList.remove("hidden");
}

function closeModal() {
    $projectModal.classList.add("hidden");
    $inputName.value = "";
}

function openModalTodo() {
    $todoModal.classList.remove("hidden");
}

function closeTodoModal() {
    $todoModal.classList.add("hidden");
}

export {
    openModal,
    closeModal,
    openModalTodo,
    closeTodoModal
}