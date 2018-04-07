"use strict";

    function clock() {

        var fullDate = new Date();
        var day = fullDate.getDay();
        var date = fullDate.getDate();
        var month = fullDate.getMonth();
        var hour = fullDate.getHours();
        var min = fullDate.getMinutes();
        var monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        if (hour > 12) {
            hour += -12;
            min += " PM";
        } else if (hour < 12) {
            hour = "0" + hour;
            min += " AM";
        }
        if (min < 10) {
            min = "0" + min;
        }

        document.getElementById('day').innerHTML = daylist[day];
        document.getElementById('month').innerHTML = monthList[month] + " " + date + ",";
        document.getElementById('hours').innerHTML = hour;
        document.getElementById('minutes').innerHTML = ": " + min;

        setInterval(clock, 100);

    }