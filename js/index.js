const form = document.querySelector(".form");
const todo = document.querySelector(".todo");
const todoAdd = document.querySelector(".submit-todo");
const container = document.querySelector(".container");

todoAdd.addEventListener("click", addTodo);

const clearInputField = () => (todo.value = "");

function addTask(input) {
    const task = document.createElement("p");
    task.innerText = input;
    task.classList.add("todos");
    container.appendChild(task);
}

function addTodo(e) {
    const todoValue = todo.value;
    noExtraTask(todoValue);
    clearInputField();
    e.preventDefault();
}

function noExtraTask(todoValue) {
    if (todoValue !== "") {
        addTask(todoValue);
    } else {
        alert("Please add a valid todo");
    }
}
