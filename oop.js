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
    let lapCounter = 0;
    let timer; //variable for set/clear Interval
    let startTime, currentTime, lapTime //variables for date objects

    //methods
    this.runTimer = function () {
        currentTime = new Date();
        //time diff in seconds
        let diffTime = Math.round((currentTime - startTime) / 1000);

        let seconds = diffTime % 60;
        let minutes = Math.floor(diffTime / 60);

        displaySeconds.innerText = seconds.toLocaleString("en-US", { minimumIntegerDigits: 2 });
        displayMinutes.innerText = minutes.toLocaleString("en-US", { minimumIntegerDigits: 2 });
    }

    this.start = function () {
        if (!running) {
            running = true;
            startTime = new Date();
            lapTime = startTime; //for first lap
            timer = setInterval(this.runTimer, 1000);
        }
    };

    this.stop = function () {
        //stop code here
        running = false;
        console.log("stop timer", startTime);
        clearInterval(timer);
    };

    this.lap = function () {
        if (running) {
            lapCounter++;
            let diffTime = Math.round((currentTime - lapTime) / 1000);

            let seconds = diffTime % 60;
            let minutes = Math.floor(diffTime / 60);

            //create new li in ul.laps
            let lapsUl = document.querySelector(".laps");
            let li = document.createElement('li');

            li.innerText = `Lap ${lapCounter}: ${minutes.toLocaleString("en-US", { minimumIntegerDigits: 2 })} : ${seconds.toLocaleString("en-US", { minimumIntegerDigits: 2 })}`;
            lapsUl.appendChild(li);

            //make ul.laps visible
            lapsUl.style.visibility = "visible";

            lapTime = currentTime;

        }
    }

    this.reset = function () {
        window.location.reload();
    }

}

const stopwatch = new Stopwatch();

startBtn.addEventListener('click', () => { stopwatch.start() });

stopBtn.addEventListener('click', () => { stopwatch.stop() });

resetBtn.addEventListener('click', () => { stopwatch.reset() });

lapBtn.addEventListener('click', () => { stopwatch.lap() });