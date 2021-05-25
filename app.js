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
const displaySeconds = document.querySelector(".seconds");
const displayMinutes = document.querySelector(".minutes");
let seconds = 0;
let minutes = 0;

let

    startBtn.onclick = function () {
        //console.log("start clicked");
        //validation: has start already been clicked?
        if (!running) {
            //console.log("start running");

            running = true;

            setInterval(runTimer, 1000);

        } /*else {
        console.log("already running");
        //can probably leave out else since no further actions are needed in this case
    }*/
    }

stopBtn.onclick = function () {
    console.log("pause the timer")
    running = false;
    clearInterval(runTimer);

}

function runTimer() {
    //show seconds
    seconds++;
    displaySeconds.innerText = seconds.toLocaleString("en-US", { minimumIntegerDigits: 2 });

    //show minutes
    if (seconds === 10) {
        displaySeconds.innerText = (0).toLocaleString("en-US", { minimumIntegerDigits: 2 });
        seconds = 0;

        minutes++;
        displayMinutes.innerText = minutes.toLocaleString("en-US", { minimumIntegerDigits: 2 });
    }

}
