"use strict";

/*

   Author: Rick Smith
   Date: 04/17/2024

	
*/



/*
    Why were there no instructions to modify the date to provided eventDates in lht_list.js? 
    I found nothing in the book or the 5-4 Try it Out: Lyman Hall Events activity that mention this requirement. 
*/

var thisDay = new Date("July 29, 2022 11:00:00");
var tableHTML = "<table id='eventTable'>\
                    <caption>Upcoming Events</caption>\
                    <tr><th>Date</th><th>Event</th><th>Price</th></tr>";

var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);

for (var i = 0; i < eventDates.length; i++) {
    var eventDate = new Date(eventDates[i]);
    var eventDay = eventDate.toDateString();
    var eventTime = eventDate.toLocaleTimeString();
    if(thisDay <= eventDate && eventDate <= endDate){
        tableHTML += "<tr>\
                        <td>" + eventDay + " @ " + eventTime + "</td>\
                        <td>" + eventDescriptions[i] + "</td>\
                        <td>" + eventPrices[i] + "</td>\
                      </tr>";
    }
}

tableHTML += "</table>"

document.getElementById("eventList").innerHTML = tableHTML;