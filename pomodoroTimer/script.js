// Get DOM elements
let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');
let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let workTime = 25;
let breakTime = 5;
let minutes = workTime;
let seconds = 0;
let isBreak = false;
let timer = null;

// Initial display
window.onload = () => {
    updateDisplay();
    workTittle.classList.add('active');

    // Enable click switching
    workTittle.addEventListener('click', switchToWork);
    breakTittle.addEventListener('click', switchToBreak);
};

// Display update
function updateDisplay() {
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

// Start timer
function start() {
    startBtn.style.display = "none";
    stopBtn.style.display = "inline-block";
    resetBtn.style.display = "inline-block";

    if (!timer) {
        timer = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    isBreak = !isBreak;
                    minutes = isBreak ? breakTime : workTime;
                    seconds = 0;
                    updateModeUI();
                } else {
                    minutes--;
                    seconds = 59;
                }
            } else {
                seconds--;
            }
            updateDisplay();
        }, 1000);
    }
}

// Stop timer
function stop() {
    clearInterval(timer);
    timer = null;
    startBtn.style.display = "inline-block";
    stopBtn.style.display = "none";
}

// Reset timer
function reset() {
    clearInterval(timer);
    timer = null;
    isBreak = false;
    minutes = workTime;
    seconds = 0;
    updateDisplay();
    updateModeUI();

    startBtn.style.display = "inline-block";
    stopBtn.style.display = "none";
    resetBtn.style.display = "none";
}

// Switch manually to Work mode
function switchToWork() {
    clearInterval(timer);
    timer = null;
    isBreak = false;
    minutes = workTime;
    seconds = 0;
    updateDisplay();
    updateModeUI();

    startBtn.style.display = "inline-block";
    stopBtn.style.display = "none";
    resetBtn.style.display = "none";
}

// Switch manually to Break mode
function switchToBreak() {
    clearInterval(timer);
    timer = null;
    isBreak = true;
    minutes = breakTime;
    seconds = 0;
    updateDisplay();
    updateModeUI();

    startBtn.style.display = "inline-block";
    stopBtn.style.display = "none";
    resetBtn.style.display = "none";
}

// Highlight active mode
function updateModeUI() {
    if (isBreak) {
        breakTittle.classList.add('active');
        workTittle.classList.remove('active');
    } else {
        workTittle.classList.add('active');
        breakTittle.classList.remove('active');
    }
}
