"use strict";

//console.log("ready");

/***
 * //STEP 1 - START
 * Button start >> seconds ++ UNTIL 60 THEN minutes ++
 * ADDITIONAL: add validation boolean: when clock is running, pressing start btn should have no effect
 *
 * //STEP 2 - STOP
 * Button stop >> PAUSE seconds and minutes
 * Time should still be displayed
 * ??: keep time in variabel for lap?
 *
 * // STEP 3 - RESET
 * set timer back to 00:00 >> clearInterval?
 * set start boolean to false
 * LATER: set lap variable to null
 *
 *
 * STEP 4 - LAP
 * "print" current time to variable
 * HTML/CSS: add div for lap notation
 * add lap to lap list
 * EXTRA: highlight fastest time
 *
 *
 */

/** STEP 1 - START */
let running = false;
const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
const resetBtn = document.querySelector(".btn-reset");
const displaySeconds = document.querySelector(".seconds");
const displayMinutes = document.querySelector(".minutes");
let seconds = 0;
let minutes = 0;

let timer; //variable for set/clear Interval

startBtn.onclick = function () {
    //console.log("start clicked");
    //validation: has start already been clicked?
    if (!running) {
        //console.log("start running");

        running = true;

        timer = setInterval(runTimer, 1000);


    }
}

stopBtn.onclick = function () {
    running = false;
    clearInterval(timer);
}

resetBtn.onclick = function () {
    running = false;
    displaySeconds.innerText = (0).toLocaleString("en-US", { minimumIntegerDigits: 2 });
    displayMinutes.innerText = (0).toLocaleString("en-US", { minimumIntegerDigits: 2 });
    seconds = 0;
    minutes = 0;
}


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

}
