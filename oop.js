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
    let timer;

    //methods
    this.start = function () {
        //startcode here
        if (!running) {
            running = true;
            console.log("running")
            //timer = setInterval(runTimer, 1000);
        }
    };

    this.stop = function () {
        //stop code here
    };

    this.lap = function () {
        //lap code here
    }

    this.reset = function () {
        window.location.reload();

    }

}

const stopwatch = new Stopwatch();

startBtn.addEventListener(onclick,)