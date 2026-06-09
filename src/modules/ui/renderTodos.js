import { getTodos } from "../../state/globalState";
import { $todoContainer } from "./domSelectors";

export default function renderTodos(todos = getTodos()) {
    const $table = document.querySelector(".tasks-table");
    const $emptyMessage = document.querySelector(".empty-tasks-message");

    if (todos.length == 0) {
        $table.classList.add("hidden");
        $emptyMessage.classList.remove("hidden");
        return
    };

    $table.classList.remove("hidden");
    $emptyMessage.classList.add("hidden");

    $todoContainer.innerHTML = "";
    $todoContainer.innerHTML = todos.map(task => `
    <tr data-id="${task.getId()}">
        <td>
            <input
                type="checkbox"
                class="task-checkbox"
                ${task.getCompleted() ? "checked" : ""}
            >
        </td>

        <td class="task-name">
            ${task.getName()}
        </td>

        <td class="task-description">
            ${task.getDescription()}
        </td>

        <td>
            ${task.getDate()}
        </td>

        <td>
            <span class="priority-badge ${task.getPriority()}">
                ${task.getPriority()}
            </span>
        </td>

        <td class="actions">

            <button
                class="action-btn edit-btn"
                data-id="${task.getId()}"
            >
                Edit
            </button>

            <button
                class="action-btn delete-btn"
                data-id="${task.getId()}"
            >
                Delete
            </button>

        </td>

    </tr>
`).join("");
}