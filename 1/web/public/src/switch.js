export function formSwitch() {
    const dateCalcHead = document.getElementById("head_datecalc");
    const dateTimerHead = document.getElementById("head_timer");
    let switchedHeads = [dateCalcHead, dateTimerHead];

    switchedHeads.forEach(function (switchedHead) {
        switchedHead.addEventListener('click', function (event) {
            switchedHeadHandler(event);
        });
    });
}

function switchedHeadHandler(event) {
    const switchedDataGroup = event.target.getAttribute('data-group');
    const forms = document.querySelectorAll('form');

    forms.forEach(function (form) {
        const formDataGroup = form.getAttribute('data-group');
        if (switchedDataGroup === formDataGroup) {
            form.style.display = '';
        } else {
            form.style.display = 'none';
        }
    });
}