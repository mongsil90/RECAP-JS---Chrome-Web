const clock = document.querySelector("#clock");

<<<<<<< HEAD
function start(a) {
    return String(a).padStart(2, "0");
}

function onClock() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    clock.innerText = `${start(hour)} : ${start(minute)} : ${start(second)}`;
}

onClock();
setInterval(onClock, 1000);
=======
function onTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

onTime()
setInterval(onTime, (1000));
>>>>>>> f9e70787eb252b963c89ac7ea788e3456e0ff6d7
