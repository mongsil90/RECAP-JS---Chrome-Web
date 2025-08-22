const clock = document.querySelector("#clock");

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
