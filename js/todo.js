const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");




// 4. 로컬 스토리지에 저장하는 array, 함수
// array에 리스트를 받아서 텍스트 형태로 변환 후 로컬 스토리지에 저장
let toDos = [];

function saveList() {
    localStorage.setItem("toDos", JSON.stringify(toDos));
}


// 3. 삭제 함수
// 화면의 리스트를 삭제
// 화면의 리스트와 array의 리스트의 id가 같으면 삭제
// 남은 데이터를 다시 저장
function onDeleteList(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveList();
}


// 2. 화면 출력 함수
// ul에 리스트, 삭제 버튼 생성
// 삭제 버튼 누르면 이벤트 리스너 실행
function onPaintToDo(newList){
    const li = document.createElement("li");
    li.id = newList.id;
    const span = document.createElement("span");
    span.innerText = newList.text;
    const btn = document.createElement("button");
    btn.innerText = "❌";
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
    btn.addEventListener("click", onDeleteList);
}

// 1. 시작 함수
function onToDoList(event) {
    event.preventDefault();
    const newList = todoInput.value;
    const newListObj = {
        text : newList,
        id : Date.now(),
    };
    todoInput.value = "";
    onPaintToDo(newListObj);
    toDos.push(newListObj);
    saveList();
}



todoForm.addEventListener("submit", onToDoList);

// 로컬 스토리지 데이터 불러오기
const savedList = localStorage.getItem("toDos");

// 조건문
if(savedList !== null) {
    const parsedList = JSON.parse(savedList);
    toDos = parsedList;
    parsedList.forEach(onPaintToDo);
}