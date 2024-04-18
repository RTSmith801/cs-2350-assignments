"use strict";

/*

   The eventDates array contains the dates of events at the LHT
   The eventDescriptions array contains the event names
   The eventPrices array contains the cost of the events
*/

var eventDates = ["July 29, 2022 11:00:00", "July 30, 2022 19:00:00", "July 31, 2022 19:30:00", 
                 "August 2, 2022 19:00:00", "August 3, 2022 20:00:00", "August 4, 2022 19:30:00", 
                 "August 5, 2022 11:00:00", "August 6, 2022 19:00:00", "August 8, 2022 19:00:00", 
                 "August 9, 2022 19:30:00", "August 10, 2022 19:30:00", "August 11, 2022 19:30:00", 
                 "August 12, 2022 11:00:00", "August 14, 2022 19:00:00", "August 15, 2022 19:30:00", 
                 "August 16, 2022 19:30:00", "August 17, 2022 19:30:00", "August 18, 2022 19:30:00", 
                 "August 19, 2022 11:00:00", "August 20, 2022 19:00:00", "August 22, 2022 18:00:00", 
                 "August 23, 2022 19:00:00", "August 24, 2022 20:00:00", "August 25, 2022 20:00:00", 
                 "August 26, 2022 11:00:00", "August 28, 2022 18:00:00", "August 29, 2022 18:00:00", 
                 "August 31, 2022 19:30:00", "September 1, 2022 19:00:00", "September 2, 2022 11:00:00", 
                 "September 4, 2022 19:00:00", "September 5, 2022 19:00:00", "September 6, 2022 19:00:00", 
                 "September 7, 2022 19:00:00", "September 8, 2022 19:00:00", "September 9, 2022 11:00:00",
                 "September 10, 2022 19:00:00", "September 12, 2022 20:00:00", "September 13, 2022 20:00:00"];
                 
var eventDescriptions = ["Classics Brunch", "Lasers and Light", "Dixieland Jazz Masters", 
                        "Classic Cinema: Wings", "The Future is Prologue", "American Favorites", 
                        "Classics Brunch", "LHT Jazz Band", "Civic Forum", "Hamilton", "Hamilton", 
                        "Hamilton", "Classics Brunch", "Hacking your Dreams", "Hamilton", "Hamilton", 
                        "Hamilton", "Hamilton", "Classics Brunch", "What Einstein Got Wrong", 
                        "Governor's Banquet", "Classic Cinema: City Lights", "Stardust Memories", 
                        "Summer Concert", "Classics Brunch", "Childrens Shakespeare", "Kids Fair", 
                        "Have Spacesuit, Will Travel", "Cabaret", "Classics Brunch", 
                        "Visions of Light and Dreams", "San Diego Blues", "Cabaret", "Cabaret", 
                        "Cabaret", "Classics Brunch", "Classic Cinema: Safety First", "Exit Stage Left", "Antonio Perez"];

var eventPrices = ["$12", "$12/$18/$24", "$22/$31/$47", "$5", "$18/$24/$36", "$24/$36/$48", "$12", "$24", 
                 "free", "$48/$64/$88", "$48/$64/$88", "$48/$64/$88", "$12", "free", "$48/$64/$88", 
                 "$48/$64/$88", "$48/$64/$88", "$48/$64/$88", "$12", "free", "by invitation", "$5", 
                 "$24/$36/$48", "$16/$24", "$12", "free", "free", "$22/$36/$48", "$48/$64/$88", "$12", 
                 "$18/$32", "$24/$36", "$48/$64/$88", "$48/$64/$88", "$48/$64/$88", "$12", "$12",
                 "$18/$28/$36", "$32/$48/$64"];
