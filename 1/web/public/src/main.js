import {diffDates, diffToHtml} from "./datecalc.js";
import {formatError} from "./utils.js";
import {formSwitch} from "./switch.js";
import {startTimer} from "./timer.js";

import "../css/style.css";
import "../media/death.mp3";

formSwitch();

//datecalc
const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();
    let {firstDate, secondDate} = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;
    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    } else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}

// timer
const timerForm = document.getElementById("timer");
timerForm.addEventListener("submit", handleTimerForm);

function handleTimerForm(event) {
    event.preventDefault();

    let {hours, minutes, seconds} = event.target.elements;
    hours = +hours.value, minutes = +minutes.value, seconds = +seconds.value;
    startTimer(hours, minutes, seconds);
}