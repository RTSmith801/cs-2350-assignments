/*

    Author: Rick Smith
    Date: 05/06/2024   

    Filename: mycollection.js
*/


// Run attachStyles on window load
window.addEventListener("load", attachStyles);
window.addEventListener("load", addNavButton);


// Change the body tag's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = "Arial, sans-serif";

var movies = [{
        title: "The Arrival",
        director: "David Twohy",
        alreadyWatched: true
    },
    {
        title: "The Abyss",
        director: "James Cameron",
        alreadyWatched: true
    },
    {
        title: "Spider-Man: Into the Spider-Verse",
        director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
        alreadyWatched: true
    },
    {
        title: "The King of Staten Island",
        director: "Judd Apatow",
        alreadyWatched: false
    },
    {
        title: "Baby Driver",
        director: "Edgar Wright",
        alreadyWatched: false
    },
    {
        title: "Oppenheimer",
        director: "Christopher Nolan",
        alreadyWatched: true
    }
];

// Create the table and append it under the <h1>
var collectionTable = createTable();
collectionTable.addEventListener("click", toggleWatchStatus);
document.querySelector("h1").insertAdjacentElement("afterend", collectionTable);


function createTable() {
    // Create table element
    var table = document.createElement("table");

    // Create table header
    var thead = document.createElement("thead");
    var headerRow = document.createElement("tr");
    var headers = function(movies) {
        var keys = {};
        for (var i = 0; i < movies.length; i++) {
            var objKeys = Object.keys(movies[i]);
            for (var j = 0; j < objKeys.length; j++) {
                keys[objKeys[j]] = true;
            }
        }
        return Object.keys(keys);
    }(movies);

    // Dynamically set the 
    headers.forEach(function(header) {
        var th = document.createElement("th");


        if (header !== header.toLowerCase()) {
            var words = [];
            for (var i = 0; i < header.length; i++) {
                if (header[i] === header[i].toUpperCase()) {
                    words.push(header.slice(i));
                    break;
                }
            }
            // Extract the last word after splitting at the capital letter 
            var lastWord = words.pop();
            th.textContent = lastWord + "?";
        } else {
            th.textContent = header.charAt(0).toUpperCase() + header.slice(1);
        }
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    var tbody = document.createElement("tbody");
    movies.forEach(function(movie) {
        var row = document.createElement("tr");
        Object.values(movie).forEach(function(value, index) {
            var cell = document.createElement("td");
            if (index === headers.length - 1 && typeof value === "boolean") {
                // If the value is boolean, replace with appropriate image
                var img = document.createElement("img");
                if (value) {
                    img.src = "images/check.png";
                    img.alt = "Watched";
                } else {
                    img.src = "images/un_check.png";
                    img.alt = "Unwatched";
                }
                img.classList.add("watch-toggle");
                cell.appendChild(img);
            } else {
                // Otherwise, just set the text content
                cell.textContent = value;
            }
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    return table;
}


// Function to toggle watch status when clicked
function toggleWatchStatus(event) {
    if (event.target.classList.contains("watch-toggle")) {
        var img = event.target;
        var isWatched = img.alt === "Watched";
        if (isWatched) {
            img.src = "images/un_check.png";
            img.alt = "Unwatched";
        } else {
            img.src = "images/check.png";
            img.alt = "Watched";
        }
    }
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


// Button to navigate to aboutme.html
function addNavButton() {
    var buttonDIV = document.createElement("div");
    buttonDIV.setAttribute("id", "navButton");

    var navButton = document.createElement("input");
    navButton.setAttribute("type", "button");
    navButton.setAttribute("value", "About Me");

    navButton.addEventListener("click", function() {
        window.location.href = "aboutme.html";
    });

    buttonDIV.appendChild(navButton);
    document.body.insertBefore(buttonDIV, document.body.lastChild);
}