const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");


function onGreeting(username) {
    greeting.classList.remove("hidden");
    greeting.innerText = `Welcome ${username}`;
}


function onLogin(event) {
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem("username", userName);
    loginForm.classList.add("hidden");
    onGreeting(userName);
}


const savedName = localStorage.getItem("username");

if (savedName === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLogin);
} else {
    onGreeting(savedName);
}

