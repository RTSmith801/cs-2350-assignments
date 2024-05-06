"use strict";

/*

   Author: Rick Smith
   Date: 05/03/2024   

   Filename: bc_keys.js

   Functions
   =========
   
   findKeyWords()
      Locate the keywords in the article indicated by the <dfn> tag
      and add those keywords in alphabetical order to a keyword box.
      
   makeKeyStyles()
      Create an embedded style sheet for the keyword box.

      
   replaceWS(textStr)
      Replaces occurences of one or more consecutive white space
      characters with the "_" character.

*/


// Run findKeyWords on window load
window.addEventListener("load", findKeyWords);

// Run makeKeyStyles on window load
window.addEventListener("load", makeKeyStyles);

function findKeyWords() {
    // Create an aside element with ID 'keywords' and containing an h1 heading with the text 'Keyword List'
    var aside = document.createElement("aside");
    aside.setAttribute("id", "keywords");
    aside.innerHTML = "<h1>Keyword List</h1>";

    // Create an ol element and append it to the keywords aside element
    var listElem = document.createElement("ol");
    aside.appendChild(listElem);

    // Insert the keywords list box as the first child of the article element with the ID "doc"
    var article = document.getElementById("doc");
    article.insertBefore(aside, article.firstChild);

    // Generate the list of keywords and add IDs to each keyword entry in the source article.
    var keyWordElems = document.querySelectorAll("dfn");
    var keyWords = new Array(keyWordElems.length);

    for (var i = 0; i < keyWordElems.length; i++) {
        // Set the value of each item in the keyWords array to the text of the corresponding item in the keyWordElems object collection.
        keyWords[i] = keyWordElems[i].textContent;
        // Set the ID of the current item in the keyWords array using the replaceWS function.
        var linkID = replaceWS(keyWordElems[i].textContent);
        // Set the ID of the current item in the keyWordElems object collection to "keyword_linkID" where linkID is the value of the linkID variable.
        keyWordElems[i].setAttribute("id", "keyword_" + linkID);
    }

    // Sort the keyWords array in alphabetical order.
    keyWords.sort();

    // Generate the list items in the keyword list.
    for (var j = 0; j < keyWords.length; j++) {
        // Declare the keyWordListItem variable, storing an li element.
        var keyWordListItem = document.createElement("li");
        // Declare the keyWordLink variable storing an a element.
        var keyWordLink = document.createElement("a");
        // Change the innerHTML of the keyWordLink to the value of the text of the current keyword.
        keyWordLink.innerHTML = keyWords[j];
        // Declare the linkID variable containing the value returned by the replaceWS() function using the current keyword as the parameter value.
        var linkID = replaceWS(keyWords[j]);
        // Change the href attribute of keyWordLink to  "#keyword_linkID" where linkID is the value of the linkID variable.
        keyWordLink.setAttribute("href", "#keyword_" + linkID);
        // Append keyWordLink to keyWordListItem
        keyWordListItem.appendChild(keyWordLink);
        // Append keyWordListItem to listElem
        listElem.appendChild(keyWordListItem);
    }
}

function makeKeyStyles() {
    // Create a link element for the stylesheet
    var link = document.createElement("link");
    // Set the attributes of the link element
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", "styles/bc_keys.css");
    // Append the link element to the document head
    document.head.appendChild(link);
}



/*Supplied Functions*/

function replaceWS(textStr) {
    var revText = textStr.replace(/\s+/g, "_");
    return revText;
}