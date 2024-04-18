"use strict";

/*

   Planisphere Script
   Author: Rick Smith
   Date: 04/15/2024    

*/

/*

// Get timestamp
var thisTime = new Date("February 3, 2018 03:15:28");
var timeStr = thisTime.toLocaleString();
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = (2 * thisMonth + thisHour % 24); // This formula chooses which image of the sky to insert.
var imgStr = "<img src='images/sd_sky" + mapNum + ".png'>";

// Sets the image of the sky here.
document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);

// Used to confirm variables are being set correctly. Comment out when not in use. 
// window.alert("Printing var: " + imgStr); 

// Sets timestamp
var timeStamp = document.getElementById("timeStamp");
timeStamp.innerHTML = timeStr;

*/


// Modified to display the current time
var currentDay = new Date();
var timeStr = currentDay.toLocaleString();
var thisHour = currentDay.getHours();

var thisMonth = currentDay.getMonth();
var mapNum = ((2 * thisMonth + thisHour) % 24); // This formula chooses which image of the sky to insert.
var imgStr = "<img src='images/sd_sky" + mapNum + ".png'>";

// Sets the image of the sky here.
document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);



// Sets timestamp
var timeStamp = document.getElementById("timeStamp");
timeStamp.innerHTML = timeStr;