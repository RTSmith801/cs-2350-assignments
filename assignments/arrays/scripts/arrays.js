"use strict"

/* 

    Author: Rick Smith
    Date: 04/18/2024
    
*/


// Part 1: Declare, Initialize and Display Arrays

var arrayFamilyNames = ["Dale", "Sherri", "Dennis", "Conner", "Danny", "Nadia", "Marrin"];
var arrayFamilyRelationships = ["Father", "Mother", "Brother", "Brother", "Uncle", "Aunt", "Cousin"];

document.getElementById("family").innerHTML = createFamilyTable();

function createFamilyTable() {
    var familyTable = "<table id='familyTable'>\
                            <tr><th>Name</th><th>Relationship</th></tr>";
    for(var i = 0; i < arrayFamilyNames.length; i++) {
        familyTable += "<tr><td>" + arrayFamilyNames[i] + "</td><td>" + arrayFamilyRelationships[i] + "</td></tr>";
    }
    
    familyTable += "</table>";
    
 
    return familyTable;
}


// Part 2: Select Items From an Array

var arrayAllColorStrings = [];
arrayAllColorStrings.push("brown");
arrayAllColorStrings.push("red");
arrayAllColorStrings.push("green");
arrayAllColorStrings.push("blue");
arrayAllColorStrings.push("purple");
arrayAllColorStrings.unshift("pink");
arrayAllColorStrings.unshift("yellow");
arrayAllColorStrings.unshift("orange");


// Display all colors
document.getElementById("allColors").innerHTML = createAllColorList();
function createAllColorList() {
    var allColorStrings = "<ul>";
    for(var i = 0; i < arrayAllColorStrings.length; i++){
        allColorStrings += "<li>" + arrayAllColorStrings[i] + "</li>";
    }
    
    
    allColorStrings += "<ul>";
    return allColorStrings;
}   


// Display 'P' colors
document.getElementById("pColors").innerHTML = createPColorList();

function createPColorList() {
    var pColorStrings = "<ul>";
    for(var i = 0; i < arrayAllColorStrings.length; i++){
        var colorStringInReview = arrayAllColorStrings[i];
        if(colorStringInReview[0] === "p") {
            pColorStrings += "<li>" + colorStringInReview + "</li>";    
        }
    }
    pColorStrings += "<ul>";
    return pColorStrings;
}

// Display 'non-b' colors
document.getElementById("nonBColors").innerHTML = createNonBColorList();

function createNonBColorList() {
    var nonBColorStrings = "<ul>";
    for(var i = 0; i < arrayAllColorStrings.length; i++){
        var colorStringInReview = arrayAllColorStrings[i];
        if(colorStringInReview[0] != "b") {
            nonBColorStrings += "<li>" + colorStringInReview + "</li>";    
        }
    }
    
    nonBColorStrings += "<ul>";
    return nonBColorStrings;
}


// Display contains 'n' colors
document.getElementById("filterColors").innerHTML = createFilterColorList();

function createFilterColorList() {
    var filterColorStrings = "<ul>";
    for(var i = 0; i < arrayAllColorStrings.length; i++){
        var colorStringInReview = arrayAllColorStrings[i];
        if(colorStringInReview.includes("n")) {
            filterColorStrings += "<li>" + colorStringInReview + "</li>";
        }
    }
    
    filterColorStrings += "<ul>";
    return filterColorStrings;
}


// Part 3: Sorting Arrays

var arrayRandomStrings = ["Bravo", "Delta", "Alpha", "Echo", "Charlie"];
var arrayRandomNumbers = [7, 11, 5, 3, 2, -13];

document.getElementById("twoArrays").innerHTML = "<p>" + arrayRandomStrings.toString() + "</p>" + "<p>" + arrayRandomNumbers.toString() + "</p>";

document.getElementById("sortedArrays").innerHTML = "<p>" + arrayRandomStrings.sort().toString() + "</p>" + "<p>" + arrayRandomNumbers.sort().toString() + "</p>";

document.getElementById("sortedNumberArray").innerHTML = "<p>" + arrayRandomNumbers.sort(function(a, b){return a - b}).toString() + "</p>";

// Part 4: Add Dates to the Footer Section 

var docLastModified = document.lastModified;
var currentDate = new Date();

document.getElementById("dates").innerHTML = "<p><h4>Last Modified: " + docLastModified + "</h4></p><p><h4>Current Date: : " + currentDate + "</h4></p>";