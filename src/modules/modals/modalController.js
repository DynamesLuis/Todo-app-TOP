import { $projectModal, $inputName, $todoModal, $todoForm } from "../ui/domSelectors";

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
    $todoForm.reset();
}

export {
    openModal,
    closeModal,
    openModalTodo,
    closeTodoModal
}