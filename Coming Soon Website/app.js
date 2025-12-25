const days = document.querySelector(".time-in-days");
const hours = document.querySelector(".time-in-hours");
const minutes = document.querySelector(".time-in-minutes");
const secs = document.querySelector(".time-in-seconds");
// console.log(days, hours, minutes, secs);
const deadline = "Dec 12, 2025 23:59:59";

function timefunc() {

    let lastDate = new Date(deadline);
    let currentDate = new Date();
    
    let time = (lastDate - currentDate) / 1000;
    

    days.innerText = `${Math.floor(time / 86400)}`;
    hours.innerText = `${Math.floor((time % 86400) / 3600)}`;
    minutes.innerText = `${Math.floor((time % 3600) / 60)}`;
    secs.innerText = `${Math.floor(time % 60)}`;

}
timefunc();

setInterval(timefunc, 1000);