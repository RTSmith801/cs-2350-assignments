/*

   Filename: pet_formsubmit.js

*/

window.onload = setForm;

function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Pet registration information has been saved. Thank you.");
      return false;
   }
}
