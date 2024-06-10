let countdown;
const display = document.querySelector('.display');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const alarmSound = document.getElementById('alarmSound')

function startTimer(minutes) {
    const now = Date.now();
    const then = now + minutes * 60000;

    displayTimeLeft(minutes * 60);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondLeft < 0) {
            clearInterval(countdown);
            playAlarm();
            return;
        }
        displayTimerLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const displayText = `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    display.textContent = displayText;
}
function playAlarm() {
    alarmSound.play();
}
function stopTimer() {
    clearInterval(countdown);
    alarmSound.onpause();
    alarmSound.currentTime = 0;
}
startButton.addEventListener('click',() => {
    const minutes =parseInt(prompt('Nhap phut'));
    startTimer(minutes);
});
resetButton.addEventListener('click',() => {
    stopTimer();
    display.textContent = '00:00';
});