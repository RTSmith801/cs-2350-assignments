"use strict";

/*
   Countdown Clock
   Author: Rick Smith
   Date: 04/15/2024   

*/

window.alert("Welcome to Tulsa");

setInterval("runClock()", 1000);

function runClock() {

    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();


    var dateDiv = document.getElementById("dateNow");
    dateDiv.innerHTML = dateStr + "<br>" + timeStr;

    var newYear = new Date("January 1, 2018");
    var nextYear = currentDay.getFullYear() + 1;
    newYear.setFullYear(nextYear);
    var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);
    var hoursLeft = (daysLeft - Math.floor(daysLeft)) * 24;
    var minsLeft = (hoursLeft - Math.floor(hoursLeft)) * 60;
    var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hrs").textContent = Math.floor(hoursLeft);
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);

}

