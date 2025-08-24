const logInForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const greetingText = document.querySelector("#greeting");

// 변수 정리
const USERNAME_KEY = "username";
const CLASS_HIDDEN = "hidden"


// 로그인 함수
function onLogin(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    logInForm.classList.add(CLASS_HIDDEN);
    greeting(username);
}

// 환영 인사 함수
function greeting(username) {
    greetingText.innerText = `welcome! ${username}`;
    greetingText.classList.remove(CLASS_HIDDEN);
}


// 로컬 스토리지에 저장된 유저 이름 불러오기
const savedName = localStorage.getItem(USERNAME_KEY);


// 로컬 스토리지에 따라 조건문 실행
if (savedName === null) {
    logInForm.classList.remove(CLASS_HIDDEN);
    logInForm.addEventListener("submit", onLogin);
} else {
    greeting(savedName);
}