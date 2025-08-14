const logInForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const greetingText = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const CLASS_HIDDEN = "hidden"

function onLogin(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    logInForm.classList.add(CLASS_HIDDEN);
    greeting(username);
}

function greeting(username) {
    greetingText.innerText = `welcome! ${username}`;
    greetingText.classList.remove(CLASS_HIDDEN);
}

const savedName = localStorage.getItem(USERNAME_KEY);

if (savedName === null) {
    logInForm.classList.remove(CLASS_HIDDEN);
    logInForm.addEventListener("submit", onLogin);
} else {
    greeting(savedName);
}