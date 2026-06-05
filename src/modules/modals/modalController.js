import { $projectModal, $inputName, $todoModal, $todoForm } from "../ui/domSelectors";
import { getTodoEditing, resetTodoEditing } from "../todo/todoEditing";

function openModal() {
    $projectModal.classList.remove("hidden");
}

function closeModal() {
    $projectModal.classList.add("hidden");
    $inputName.value = "";
}

function openModalTodo() {
    const todoEditing = getTodoEditing();
    if (todoEditing) {
       $todoForm.querySelector("#task-name").value = todoEditing.getName();
       $todoForm.querySelector("#task-description").value = todoEditing.getDescription();
       $todoForm.querySelector("#task-date").value = todoEditing.getDate();
       $todoForm.querySelector(`input[name=priority][value=${todoEditing.getPriority()}`).checked = true;
    }
    $todoModal.classList.remove("hidden");
}

function closeTodoModal() {
    $todoModal.classList.add("hidden");
    $todoForm.reset();
    resetTodoEditing();
}

export {
    openModal,
    closeModal,
    openModalTodo,
    closeTodoModal,
}