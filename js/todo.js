const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");


function onToDoList(event) {
    event.preventDefault();
    const inputValue = todoInput.value;
    
}

todoForm.addEventListener("submit", onToDoList);