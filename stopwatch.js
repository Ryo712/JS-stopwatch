let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}`;
}

function printTime() {
    elapsedTime = Date.now() - startTime;
    document.getElementById("display").innerHTML = timeToString(elapsedTime);
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(printTime, 1000);
    document.getElementById("startStop").innerHTML = "停止";
}

function stop() {
    clearInterval(timerInterval);
    document.getElementById("startStop").innerHTML = "スタート";
}

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "スタート";
}

document.getElementById("startStop").addEventListener("click", function () {
    if (this.innerHTML === "スタート") {
        start();
    } else {
        stop();
    }
});

document.getElementById("reset").addEventListener("click", reset);
