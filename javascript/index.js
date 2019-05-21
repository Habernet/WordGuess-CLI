// 1. The completed game should be able to receive user input using the `inquirer` or `prompt` npm packages.
var inquirer = require('inquirer');
var Word = require('./Word.js');

var wordBank = ['Hello'];
var guessesRemaining = 8;
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

// Function to choose a word for gameplay
function chooseWord() {
    // Use random number generator on the length of the wordBank to select a random one
    var chosen = wordBank[Math.floor(Math.random() * wordBank.length)];
    // Pass that word to the Word constructor to create a new word
    chosenWord = new Word(chosen);
    chosenWord.createWord();
    wordIsChosen = true;
};

// Function for filtering input to only one character...needs to deal with keycodes (still not done)
// function validateInput(input) {
//     if (input.length !== 1) {
//         return name !== "" || "Please enter only 1 character";
//     };
// };

// Main game function that will prompt the question and check for answers
function game() {
    // If a word isn't chosen...choose one.
    if(!wordIsChosen) {
        chooseWord();
    };
    
    // If you have guesses remaining, ask for a guess
    if(guessesRemaining > 0) {
        inquirer.prompt(guessPrompt).then(answer => {
            // loop over the wordarray and check the guess against each letter object
            for (let i = 0; i < chosenWord.wordArray.length; i++) {
                chosenWord.wordArray[i].check(answer.guessprompt);
            };
            //display the word after its all been checked
            chosenWord.displayWord();
            // subtract a guess
            console.log(guessesRemaining)
            game();
        });
    } else {
        // reset functionality
        console.log("No more guesses!");
        wordIsChosen = false;
    };
    // call the game again, it should test for guesses remaining.
    guessesRemaining--;  
};

//   * Prompts the user for each guess and keeps track of the user's remaining guesses
inquirer.prompt(gamePrompt).then(answer => {
    if (answer.gameprompt) {
        // The user wants to play, the game is on
        game();
    } else {
        console.log("That's fine, you don't have to play!");
    };
});





// TO DO
// 1. Callback with the Word constructor??
// 2. Word displayWord needs to display on one line!
// 3. Check keycodes on input to make sure only characters make it in.
// 4. Get word bank from old homework
// 5. Write a reset function