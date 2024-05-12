"use strict";

/*

   Payment Form Script
   
   Author: 
   Date:   
   
   Filename: co_payment.js
   
   Function List
   =============
   
   runSubmit()
      Runs validation tests when the submit button is clicked
      
   validateCVC()
      Validates the credit card CVC number
      
   validateMonth()
      Validates that the user has selected the expiration month of the credit card
      
   validateYear()
      Validates that the user has selected the expiration year of the credit card
      
   validateNumber()
      Validates that the user has entered a valid and legitimate card number
      
   validateCredit()
      Validates that the user has selected a credit card type
      
   validateName()
      Validates that the user has specified the name on the credit card
      
   sumDigits(numStr)
      Sums the digits characters in a text string
      
   luhn(idNum)
      Returns true of idNum satisfies the Luhn Algorithm

*/

window.addEventListener("load", function() {
    this.document.getElementById("subButton").onclick = runSubmit;
    this.document.getElementById("cardName").oninput = validateName;
    this.document.getElementById("cardNumber").oninput = validateNumber;
    this.document.getElementById("expMonth").onchange = validateMonth;
    this.document.getElementById("expYear").onchange = validateYear;
    this.document.getElementById("cvc").oninput = validateCVC;

    // Retrieve the field/value pairs from URL
    var formData = location.search.slice(1);
    formData = formData.replace(/\+/g, " "); // globally replace the '+' with spaces
    formData = decodeURIComponent(formData); // decoding to render correct symbols
    var formField = formData.split(/[&=]/g);

    // Write values out to form

    this.document.forms.order.elements.orderDate.value = formField[1];
    this.document.forms.order.elements.modelName.value = formField[5];
    this.document.forms.order.elements.qty.value = formField[7];
    this.document.forms.order.elements.initialCost.value = formField[9];
    this.document.forms.order.elements.protectionName.value = formField[13];
    this.document.forms.order.elements.protectionCost.value = formField[15];
    this.document.forms.order.elements.subtotal.value = formField[17];
    this.document.forms.order.elements.salesTax.value = formField[19];
    this.document.forms.order.elements.totalCost.value = formField[21];


})

function validateName() {
    var cardName = document.getElementById("cardName");
    if (cardName.validity.valueMissing) {
        cardName.setCustomValidity("Enter your name as it appears on the card");
    } else {
        cardName.setCustomValidity("");
    }
}

function runSubmit() {
    validateName();
    validateCredit();
    validateNumber();
    validateMonth();
    validateYear();
    validateCVC();
}

function validateCredit() {
    var creditCard = document.forms.payment.elements.credit[0];
    if (creditCard.validity.valueMissing) {
        creditCard.setCustomValidity("Select your Credit Card");
    } else {
        creditCard.setCustomValidity("");
    }
}

function validateNumber() {
    var cardNumber = document.getElementById("cardNumber");
    if (cardNumber.validity.valueMissing) {
        cardNumber.setCustomValidity("Enter card number");
    } else if (cardNumber.validity.patternMismatch) {
        cardNumber.setCustomValidity("Enter a valid card number");
    } else if (luhn(cardNumber.value) === false) {
        cardNumber.setCustomValidity("Enter a legitimate card number");
    } else {
        cardNumber.setCustomValidity("");
    }
}

function validateMonth() {
    var cardMonth = document.getElementById("expMonth");
    if (cardMonth.selectedIndex === 0) {
        cardMonth.setCustomValidity("Select the expiration month");
    } else {
        cardMonth.setCustomValidity("");
    }
}

function validateYear() {
    var cardYear = document.getElementById("expYear");
    if (cardYear.selectedIndex === 0) {
        cardYear.setCustomValidity("Select the expiration year");
    } else {
        cardYear.setCustomValidity("");
    }
}

function validateCVC() {
    var cardCVC = document.getElementById("cvc");
    var creditCard = document.querySelector('input[name="credit"]:checked').value;

    if (cardCVC.validity.valueMissing) {
        cardCVC.setCustomValidity("Enter your CVC number");
    } else if ((creditCard === "amex") && (/^\d{4}$/.test(cardCVC.value) === false)) {
        cardCVC.setCustomValidity("Enter a 4 digit CVC number");
    } else if ((creditCard !== "amex") && (/^\d{3}$/.test(cardCVC.value) === false)) {
        cardCVC.setCustomValidity("Enter a 3 digit CVC number");
    } else {
        cardCVC.setCustomValidity("");
    }
}

function sumDigits(numStr) {
    var digitTotal = 0;
    for (var i = 0; i < numStr.length; i++) {
        digitTotal += parseInt(numStr.charAt(i));
    }
    return digitTotal;
}

function luhn(idNum) {
    var string1 = "";
    var string2 = "";

    // Retrieve the odd number digits
    for (var i = idNum.length - 1; i >= 0; i -= 2) {
        string1 += idNum.charAt(i);
    }

    // Retrieve the even number digits and double them
    for (var i = idNum.length - 2; i >= 0; i -= 2) {
        string2 += 2 * idNum.charAt(i);
    }

    // Return wheter the sum of the digits is divisible by 10
    return sumDigits(string1 + string2) % 10 === 0;

}