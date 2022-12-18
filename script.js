let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let stopWatch = document.getElementById("display");

let seconds = 0;
let minutes = 0;
let hours = 0;
var interval = null;

function startTimer () {
    seconds++;
    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hours * 3600)) / 60);
    let sec = seconds % 60;
    if (sec < 10) sec = "0" + sec;
    if (mins < 10) mins = "0" + mins;
    if (hours < 10) hours = "0" + hours;
    stopWatch.innerText = `${hours}:${mins}:${sec}`;
}

function startWatchCounter () {
    if(interval) {
        return
    }

    interval = setInterval(startTimer, 1000);
}

function stopWatchCounter () {
    clearInterval(interval);
   
    interval = null;
}

function resetWatchCounter () {
    stopWatchCounter();
    seconds = 0;
    minutes = 0;
    hours = 0;
    stopWatch.innerHTML = "00:00:00"
}

startButton.addEventListener("click", startWatchCounter);
stopButton.addEventListener("click", stopWatchCounter);
resetButton.addEventListener("click", resetWatchCounter);