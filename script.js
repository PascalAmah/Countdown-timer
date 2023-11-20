const daysCount = document.getElementById('days');
const hoursCount = document.getElementById('hours');
const minsCount = document.getElementById('mins');
const secondsCount = document.getElementById('seconds');

const babyBirthday = "8 Dec 2023";

function countdown() {
    const birthDay = new Date(babyBirthday);
    const currentDate = new Date;

    const totalSeconds = (birthDay - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysCount.innerHTML = days;
    hoursCount.innerHTML = formatTime(hours);
    minsCount.innerHTML = formatTime(mins);
    secondsCount.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);