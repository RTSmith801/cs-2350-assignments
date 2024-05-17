"use strict";

/*
   
   Author: Rick Smith
   Date: 05/11/2024  
   
   Filename: pet_competition.js
   
*/

// Global variables
var weightInput = document.getElementById('weight');
var sizeInput = document.getElementById('size');
var daysInput = document.getElementById('days');
var boardingFeeInput = document.getElementById('boardingFee');
var singCheckbox = document.getElementById('sing');
var cuteCheckbox = document.getElementById('cute');
var trickCheckbox = document.getElementById('trick');
var singAdd = document.getElementById('singAdd');
var cuteAdd = document.getElementById('cuteAdd');
var trickAdd = document.getElementById('trickAdd');
var boardingCostInput = document.getElementById('boardingCost');
var registrationCostInput = document.getElementById('registrationCost');
var totalCostInput = document.getElementById('totalCost');

// Start of program - Add event listeners to input options
window.addEventListener('load', function() {
    weightInput.addEventListener('change', updateKennelSize);
    daysInput.addEventListener('change', updateBoardingCost);
    singCheckbox.addEventListener('change', updateEvents);
    cuteCheckbox.addEventListener('change', updateEvents);
    trickCheckbox.addEventListener('change', updateEvents);
});

// Updates to kennel
function updateKennelSize() {
    var weight = parseFloat(weightInput.value);
    var size = "";

    if (isNaN(weight)) {
        size = "";
    } else if (weight <= 4) {
        size = "mini";
    } else if (weight <= 12) {
        size = "small";
    } else if (weight <= 50) {
        size = "medium";
    } else {
        size = "large";
    }

    sizeInput.value = size;
}

// Updates to boarding costs
function updateBoardingCost() {
    var days = parseInt(daysInput.value);

    if (isNaN(days)) {
        days = 0;
        boardingFeeInput.value = "0.00";
    } else {
        boardingFeeInput.value = (days * 19.99).toFixed(2);
    }

    daysInput.value = days;

    updateTotalCosts();
}


// Updats to events
function updateEvents(event) {
    var competitionCheckbox = event.target;
    var competitionDiv = document.getElementById(competitionCheckbox.id + 'Add');

    // Reveals / hides div based on checkbox selection
    if (competitionCheckbox.checked) {
        competitionDiv.style.display = 'block';
    } else {
        competitionDiv.style.display = 'none';
    }

    updateTotalCosts();
}

// Updates to total costs
function updateTotalCosts() {
    var registrationCost = 0;
    var numberOfEvents = 0;
    var boardingCost = parseFloat(boardingFeeInput.value);

    if (isNaN(boardingCost)) {
        boardingCost = 0;
    }

    if (singCheckbox.checked) {
        numberOfEvents += 1;
    }

    if (cuteCheckbox.checked) {
        numberOfEvents += 1;
    }

    if (trickCheckbox.checked) {
        numberOfEvents += 1;
    }

    registrationCost = numberOfEvents * 120;
    boardingCostInput.value = boardingCost.toFixed(2);
    registrationCostInput.value = registrationCost.toFixed(2);

    var totalCost = boardingCost + registrationCost;
    totalCostInput.value = totalCost.toFixed(2);
}