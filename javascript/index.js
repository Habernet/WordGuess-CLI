// 1. The completed game should be able to receive user input using the `inquirer` or `prompt` npm packages.
var inquirer = require('inquirer');
var Word = require('./Word.js');

var wordBank = ['chief', 'cortana', 'warthog', 'pelican', 'scorpion', 'halo', 'reclaimer', 'reach', 'harvest', 'mombasa', 'zanzibar', 'ascension', 'lockout', 'containment', 'arbiter', 'icon', 'flood', 'ghost', 'wraith', 'scarab', 'banshee', 'elephant', 'phantom'
];
var guessesRemaining = 12;
var chosenWord;
var wordIsChosen = false;

// Inquirer Prompts
let gamePrompt = {
    name: 'gameprompt',
    type: 'confirm',
    message: 'Would you like to play the game?'
};
let guessPrompt = {
    name: 'guessprompt',
    type: 'input',
    message: 'What is your guess?',
    // validate: validateInput
};

// Beginning of the game
function start() {
    //   * Prompts the user for each guess and keeps track of the user's remaining guesses
    inquirer.prompt(gamePrompt).then(answer => {
        if (answer.gameprompt) {
            // The user wants to play, the game is on
            game();
        } else {
            console.log("That's fine, you don't have to play!");
        };
    });
};

// Function to choose a word for gameplay
function chooseWord() {
    // Use random number generator on the length of the wordBank to select a random one
    var chosen = wordBank[Math.floor(Math.random() * wordBank.length)];
    // Pass that word to the Word constructor to create a new word
    chosenWord = new Word(chosen);
    chosenWord.createWord();
    chosenWord.displayWord();
    wordIsChosen = true;
};

// Function for determining whether or not the word has been guessed
function isComplete() {
    for (let i = 0; i < chosenWord.wordArray.length; i++) {
        if (!chosenWord.wordArray[i].guessed) {
            return false;
        };
    };
    return true;
};

// Function for resetting the game, will be used when game is over (either way)
function reset() {
    wordIsChosen = false;
    guessesRemaining = 12;
    start();
};


// Function for filtering input to only one CHARACTER and upper/lower...needs to deal with keycodes (still not done)
// function validateInput(input) {
    // Check keycodes on input to make sure only characters make it in.
//     if (input.length !== 1) {
//         return name !== "" || "Please enter only 1 character";
//     };
// };

// Main game function that will prompt the question and check for answers
function game() {
    // If a word isn't chosen...choose one.
    if (!wordIsChosen) {
        chooseWord();
    };

    // If you have guesses remaining, ask for a guess
    if (guessesRemaining > 0) {
        inquirer.prompt(guessPrompt).then(answer => {
            // Loop over the wordarray and check the guess against each letter object
            for (let i = 0; i < chosenWord.wordArray.length; i++) {
                chosenWord.wordArray[i].check(answer.guessprompt);
            };
            // Display the word after its all been checked
            chosenWord.displayWord();
            // Test if isComplete
            if (isComplete()) {
                console.log("YOU WON!!");
                reset();
            } else {
                game();
            };
        });
    } else {
        // Reset functionality in another function yet to be defined
        console.log("No more guesses! You lost!");
        reset();
    };
    // Subtract a guess
    guessesRemaining--;
};


// Start the game!
start();





// TO DO
// 1. Input validation function
// 3. 
// 6. Dealing with uppercase and lowercase
// 8. Display the spaces before the first prompt (after the game prompt?)
// 7. Keep track of user wins...
