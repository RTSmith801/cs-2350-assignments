// Variables to keep track of the game state
var firstCard = null;
var secondCard = null;
var totalFlips = 0;
var matches = 0;
var numSymbols;

// Get the counter element and hide it initially
var counter = document.getElementById('counter');
counter.style.display = 'none';

// When the page is fully loaded, set up the event listener for the start button
document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', startGame);
});

// Function to start the game
function startGame() {
    // Get the number of symbols from the input field
    const numInput = document.getElementById('numSymbols').value;

    // Check if the number is between 1 and 8
    if (numInput < 1 || numInput > 8) {
        alert("Please select a number between 1 and 8.");
        return;
    }

    // Set the number of symbols for the game
    numSymbols = numInput;

    // Hide the start form
    const startForm = document.getElementById('startForm');
    startForm.style.display = 'none';

    // Display the counter
    displayCounter();

    // Create the game board with the selected number of symbols
    createGameBoard(numSymbols);
}

// Function to create and show the counter
function displayCounter() {
    counter.style.display = 'block'; // Show the counter
    counter.textContent = '#?\'s: ' + totalFlips; // Set the initial text of the counter
}

// Function to create the game board
function createGameBoard(numSymbols) {
    // Create a new div element to hold the game board
    const gameBoard = document.createElement('div');
    gameBoard.id = 'gameBoard'; // Set the ID of the game board

    // Add the game board to the #game div in the HTML
    document.getElementById('game').appendChild(gameBoard);

    // Get the symbols to use based on numSymbols
    const allSymbols = '!@#$%^&*';
    const symbols = allSymbols.slice(0, numSymbols).split('');

    // Create pairs of symbols
    const cards = [];
    symbols.forEach(function(symbol) {
        cards.push(symbol, symbol); // Add each symbol twice to create pairs
    });

    // Shuffle the cards
    cards.sort(function() {
        return Math.random() - 0.5;
    });

    // Create a card for each symbol and add it to the game board
    cards.forEach(function(symbol) {
        const card = document.createElement('div'); // Create a new div for the card
        card.classList.add('card'); // Add the 'card' class to the div
        card.dataset.symbol = symbol; // Store the symbol in a data attribute
        card.addEventListener('click', onCardClick); // Add a click event listener to the card
        gameBoard.appendChild(card); // Add the card to the game board
    });

    // Calculate the number of rows and columns for the grid
    const totalCards = cards.length; // Total number of cards
    const gridSize = Math.ceil(Math.sqrt(totalCards)); // Number of rows/columns for a square grid

    // Set the game board to be a grid with the calculated number of rows and columns
    gameBoard.style.display = 'grid';
    gameBoard.style.gridTemplateColumns = 'repeat(' + gridSize + ', auto)';
    gameBoard.style.gridTemplateRows = 'repeat(' + gridSize + ', auto)';
}


// Function to handle the click event on a card
function onCardClick(event) {
    const card = event.target; // Get the clicked card

    // If the card is already flipped or we are checking another pair, do nothing
    if (card.classList.contains('flipped') || secondCard) return;

    // Flip the card and show its symbol
    card.classList.add('flipped');
    card.textContent = card.dataset.symbol;

    // Check if this is the first or second card being flipped
    if (!firstCard) {
        firstCard = card; // Set the first card
    } else {
        secondCard = card; // Set the second card
        totalFlips++; // Increment the flip counter
        document.getElementById('counter').textContent = '#?\'s: ' + totalFlips; // Update the counter text
        checkForMatch(); // Check if the two cards match
    }
}

// Function to check if the two flipped cards match
function checkForMatch() {
    // If the symbols match, increase the match count and reset the first and second card
    if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
        matches++;
        firstCard = null;
        secondCard = null;
        // If all matches are found, show a winning message and reset the game
        if (matches == numSymbols) {
            // Call reset game after small delay.
            setTimeout(function() {
                resetGame();
            }, 500);
        }
    } else {
        // If the symbols don't match, flip the cards back over after a short delay
        setTimeout(function() {
            firstCard.classList.remove('flipped');
            firstCard.textContent = '';

            secondCard.classList.remove('flipped');
            secondCard.textContent = '';

            firstCard = null;
            secondCard = null;
        }, 500);
    }
}

// Function to reset the game
function resetGame() {
    // Create a div for the winning message
    const winningMessage = document.createElement('div');
    winningMessage.textContent = 'You won! Thanks for playing! :)';
    winningMessage.style.backgroundColor = '#E6026F';
    winningMessage.style.padding = '20px';
    winningMessage.style.margin = '20px auto';
    winningMessage.style.textAlign = 'center';

    // Replace the game board with the winning message
    const gameDiv = document.getElementById('game');
    const gameBoard = document.getElementById('gameBoard');
    gameDiv.replaceChild(winningMessage, gameBoard);

    // Hide the counter
    counter.style.display = 'none';

    // Reset the game variables
    matches = 0;
    totalFlips = 0;

    // Show the start form again after a delay
    setTimeout(function() {
        const startForm = document.getElementById('startForm');
        startForm.style.display = 'block';

        // Remove the winning message after delay
        gameDiv.removeChild(winningMessage);
    }, 3000);

}