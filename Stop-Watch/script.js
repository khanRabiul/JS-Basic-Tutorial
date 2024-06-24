

const display = document.getElementById('display');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning) {

/* The Need for startTime = Date.now() - elapsedTime
When starting or resuming the timer, you want to ensure the timer continues from where it left off. Here's why the line is needed:

Starting Fresh: If the timer is starting for the first time (i.e., elapsedTime is 0), you simply want to capture the current time as startTime. This can be done with startTime = Date.now().

Resuming: If the timer was previously running and then paused, elapsedTime will hold the amount of time the timer had been running before it was paused. To resume the timer correctly, you need to adjust startTime to account for this previously elapsed time. */

/* Detailed Step-by-Step Explanation
When Timer Starts:

First Start:
elapsedTime is 0 (no time has elapsed yet).
startTime = Date.now() - elapsedTime becomes startTime = Date.now() - 0.
This sets startTime to the current time.
After Pause:
elapsedTime holds the total time the timer was running before being paused.
startTime = Date.now() - elapsedTime adjusts startTime to the current time minus the previously elapsed time. */


        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
    if(isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = `00:00:00:00`;
}

function update(){
const currentTime = Date.now();
elapsedTime = currentTime - startTime;

let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
let seconds = Math.floor(elapsedTime / 1000 % 60);
let milliseconds = Math.floor(elapsedTime % 1000 / 10 );

hours = String(hours).padStart(2, "0");
minutes = String(minutes).padStart(2, "0");
seconds = String(seconds).padStart(2, "0");
milliseconds = String(milliseconds).padStart(2, "0");

display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds};`
}