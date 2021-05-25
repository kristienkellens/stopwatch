"use strict";

/** GLOBAL VARIABLES */
let running = false;
const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
const resetBtn = document.querySelector(".btn-reset");
const lapBtn = document.querySelector(".btn-lap");
const displaySeconds = document.querySelector(".seconds");
const displayMinutes = document.querySelector(".minutes");
let seconds = 0;
let minutes = 0;
let lapCounter = 0;
let previousMinutes = 0;
let previousSeconds = 0;
let timer; //variable for set/clear Interval

/** FUNCTIONS **/
function runTimer() {
    //show seconds
    seconds++;
    displaySeconds.innerText = seconds.toLocaleString("en-US", { minimumIntegerDigits: 2 });

    //show minutes
    if (seconds === 60) {
        displaySeconds.innerText = (0).toLocaleString("en-US", { minimumIntegerDigits: 2 });
        seconds = 0;

        minutes++;
        displayMinutes.innerText = minutes.toLocaleString("en-US", { minimumIntegerDigits: 2 });
    }

    //in case timer goes over 60min, restart count at 00:00
    if (minutes === 60) {
        displaySeconds.innerText = (0).toLocaleString("en-US", { minimumIntegerDigits: 2 });
        seconds = 0;

        displayMinutes.innerText = (0).toLocaleString("en-US", { minimumIntegerDigits: 2 });
        minutes = 0;
    }
};


/** MAIN **/
startBtn.onclick = function () {
    if (!running) {
        running = true;
        timer = setInterval(runTimer, 1000);
    }
}

stopBtn.onclick = function () {
    running = false;
    clearInterval(timer);
}

resetBtn.onclick = function () {
    window.location.reload();
}

lapBtn.onclick = function () {
    lapCounter++;

    //calculate currenttime - previoustime
    let diffMinutes = displayMinutes.innerText - previousMinutes;
    let diffSeconds = displaySeconds.innerText - previousSeconds;


    //create new li in ul.laps
    let lapsUl = document.querySelector(".laps");
    let li = document.createElement('li');

    li.innerText = `Lap ${lapCounter}: ${diffMinutes.toLocaleString("en-US", { minimumIntegerDigits: 2 })} : ${diffSeconds.toLocaleString("en-US", { minimumIntegerDigits: 2 })}`;
    lapsUl.appendChild(li);

    //make ul.laps visible
    lapsUl.style.visibility = "visible";

    //change currenttime to previoustime
    previousMinutes = displayMinutes.innerText;
    previousSeconds = displaySeconds.innerText;

    //EXTRA: highlight smallest time
}

function Timer() {
    let laps = 0;
    this.start = function () {
        // hier code van start zetten
        console.log(laps);
    }
}

const stopwatch = new Timer();
/*
    button.onclick = function() {
        stopwatch.start();
    }
*/

// onclick vervangen door addEventListener