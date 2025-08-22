const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "toDos";

let toDos = [];


function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function onDeletTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newList) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newList;
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", onDeletTodo);
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
}

function onAddTodo(event) {
    event.preventDefault();
    const newList = todoInput.value;
    todoInput.value = "";
    paintToDo(newList);
    toDos.push(newList);
    saveToDo();
}


todoForm.addEventListener("submit", onAddTodo);


const savedToDo = localStorage.getItem(TODOS_KEY);
if (savedToDo !== null) {
    const parsedToDo = JSON.parse(savedToDo);
    toDos = parsedToDo;
    parsedToDo.forEach(paintToDo);
}