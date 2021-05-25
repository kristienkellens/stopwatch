"use strict";

const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
const resetBtn = document.querySelector(".btn-reset");
const lapBtn = document.querySelector(".btn-lap");
const displaySeconds = document.querySelector(".seconds");
const displayMinutes = document.querySelector(".minutes");

/** object Stopwatch */

function Stopwatch() {
    //properties
    let running = false;
    let seconds = 0;
    let minutes = 0;
    let lapCounter = 0;
    let previousMinutes = 0;
    let previousSeconds = 0;
    let timer; //variable for set/clear Interval

    //methods
    this.runTimer = function () {
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

    }


    this.start = function () {
        if (!running) {
            running = true;
            timer = setInterval(this.runTimer, 1000);
        }
    };

    this.stop = function () {
        //stop code here
        running = false;
        console.log("stop timer");
        clearInterval(timer);
    };

    this.lap = function () {
        if (running) {
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
        }
    }

    this.reset = function () {
        window.location.reload();

    }

}

const stopwatch = new Stopwatch();

startBtn.addEventListener('click', () => { stopwatch.start(); });

stopBtn.addEventListener('click', () => { stopwatch.stop() });

resetBtn.addEventListener('click', () => { stopwatch.reset() });

lapBtn.addEventListener('click', () => { stopwatch.lap() });