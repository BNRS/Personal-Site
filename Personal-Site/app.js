"use strict";

//this adds a clock to the page//
function clock() {

    var fullDate = new Date();
    var hour = fullDate.getHours();
    var min = fullDate.getMinutes();
    var sec = fullDate.getSeconds();

    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    document.getElementById('hours').innerHTML = hour;
    document.getElementById('minutes').innerHTML = ": " + min;
    document.getElementById('seconds').innerHTML = ": " + sec;

    setInterval(clock, 100);

}

clock();
