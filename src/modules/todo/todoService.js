import Todo from "./Todo";
import {
    setTodoActiveProject, changeTodoStatus, deleteTodoFromState, getOneTodo, editTodoFromState,
    getProjects, getTodos, getCurrentView
} from "../../state/globalState"

function createTodo(name, description, date, priority) {
    const newTodo = new Todo(name, description, date, priority);
    setTodoActiveProject(newTodo);
}

function createUpdatedToto(editingTodo, todoData) {
    const updatedTodo = new Todo(
        todoData.name,
        todoData.description,
        todoData.date,
        todoData.priority,
        editingTodo.getCompleted(),
        editingTodo.getId());
    return updatedTodo
}

function changeStatus(todoId) {
    changeTodoStatus(todoId);
}

function deleteTodo(todoId) {
    deleteTodoFromState(todoId)
}

function getTodoData(todoId) {
    return getOneTodo(todoId)
}

function editTodo(todoEditing, todoData) {
    editTodoFromState(todoEditing, todoData)
}

function getTodayTodos() {
    const projects = getProjects();
    let todayTodos = [];
    projects.forEach(projects => {
        const todos = projects.getTodos();
        todos.forEach(todo => {
            const todayDate = new Date().toISOString().split("T")[0];
            if (todo.getDate() === todayDate) {
                todayTodos.push(todo);
            }
        })
    })

    return todayTodos;
}

function getSevenDaysTodos() {
    const projects = getProjects();
    let nextSevenDaysTodos = [];
    projects.forEach(projects => {
        const todos = projects.getTodos();
        todos.forEach(todo => {
            if (isWithinNext7Days(todo.getDate())) {
                nextSevenDaysTodos.push(todo);
            }
        })
    })

    return nextSevenDaysTodos;

    function isWithinNext7Days(dateString) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const [year, month, day] = dateString.split("-").map(Number);

        const targetDate = new Date(year, month - 1, day);

        const diffInDays = (targetDate - today) / (1000 * 60 * 60 * 24);

        return diffInDays >= 0 && diffInDays <= 7;
    }
}

function filterTodos(search) {
    const todos = getVisibleTodos();
    const filteredTodos = todos.filter(todo => todo.name.toLowerCase().includes(search.toLowerCase()))
    return filteredTodos
}

function getVisibleTodos() {
    const view = getCurrentView()
    if (view === "project") return getTodos();

    if(view === "today") return getTodayTodos();

    if(view === "next7days") return getSevenDaysTodos();
}

export {
    createTodo,
    changeStatus,
    deleteTodo,
    getTodoData,
    editTodo,
    createUpdatedToto,
    getTodayTodos,
    getSevenDaysTodos,
    filterTodos,
    getVisibleTodos
}