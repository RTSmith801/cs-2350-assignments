/*

    Author: Rick Smith
    Date: 05/06/2024   

    Filename: aboutme.js
*/


// Run attachStyles on window load
window.addEventListener("load", attachStyles);
window.addEventListener("load", addNavButton);

// Change the body tag's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = "Arial, sans-serif";

// Replace each of the spans (nickname, favorites, hometown) with your own information.
document.getElementsByTagName("ul")[0].setAttribute("id", "favoritesList");
document.getElementById("nickname").innerText = "Rick";
document.getElementById("nickname").innerText = "Rick";
document.getElementById("favorites").innerHTML = "<ul><li>Hiking</li><li>Watching Movies</li><li>Attending Music Events</li></ul>";
document.getElementById("hometown").innerText = "Draper, UT";

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
var listItems = document.querySelectorAll("li");
for (var i = 0; i < listItems.length; i++) {
    listItems[i].setAttribute("class", "listItem");
    listItems[i].style.color = "red";
}

// Create an img container for styling
var container = document.createElement("div")
container.setAttribute("id", "imgContainer");


// Create a new img element and set its src attribute to a picture of you with the picture being named "me1.jpg".   
var profileImage = document.createElement("img");
profileImage.setAttribute("src", "images/me1.jpg");
profileImage.addEventListener("click", ChangePic);
container.appendChild(profileImage);

// Append image under the <h1>.
document.querySelector("h1").appendChild(container);

// Call a function ChangePic() function when the user clicks on your image, and change the src property of the image to display another random picture of you*.
function ChangePic() {
    var randNum = Math.floor(Math.random() * 11);
    profileImage.src = "images/me" + randNum + ".jpg";
}

function attachStyles() {
    // Create a link element for the stylesheet
    var resetStyle = document.createElement("link");
    // Set the attributes of the link element
    resetStyle.setAttribute("rel", "stylesheet");
    resetStyle.setAttribute("type", "text/css");
    resetStyle.setAttribute("href", "styles/reset.css");
    // Append the link element to the document head
    document.head.appendChild(resetStyle);


    // Create a link element for the stylesheet
    var pageStyle = document.createElement("link");
    // Set the attributes of the link element
    pageStyle.setAttribute("rel", "stylesheet");
    pageStyle.setAttribute("type", "text/css");
    pageStyle.setAttribute("href", "styles/styles.css");
    // Append the link element to the document head
    document.head.appendChild(pageStyle);
}


// Button to navigate to mycollection.html
function addNavButton() {
    var buttonDIV = document.createElement("div");
    buttonDIV.setAttribute("id", "navButton");

    var navButton = document.createElement("input");
    navButton.setAttribute("type", "button");
    navButton.setAttribute("value", "Movie Collection");

    navButton.addEventListener("click", function() {
        window.location.href = "movie_collection.html";
    });

    buttonDIV.appendChild(navButton);

    document.body.insertBefore(buttonDIV, document.body.lastChild);
}