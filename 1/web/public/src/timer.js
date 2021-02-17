import {getSound} from "./sound.js";

const timerResult = document.getElementById("timer__result");

export function startTimer(hours, minutes, seconds) {
    timerResult.innerHTML = "";

    let countDownDate = new Date();
    if (hours > 0) {
        countDownDate.setHours(countDownDate.getHours() + hours);
    }

    if (minutes > 0) {
        countDownDate.setMinutes(countDownDate.getMinutes() + minutes);
    }

    if (seconds > 0) {
        countDownDate.setSeconds(countDownDate.getSeconds() + seconds);
    }

    countDownDate = countDownDate.getTime();

    let x = setInterval(function () {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerResult.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            getSound();
            timerResult.innerHTML = "Время истекло!";
        }

        const stopButton = document.getElementById("stopButton");
        stopButton.addEventListener("click", () => {
            clearInterval(x);
            timerResult.innerHTML = "Таймер остановлен!";
        });

    }, 1000);
}