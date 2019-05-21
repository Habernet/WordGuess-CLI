// 1. The completed game should be able to receive user input using the `inquirer` or `prompt` npm packages.
var inquirer = require('inquirer');
var Word = require('./Word.js');

var wordBank = ['Hello', 'Sup', 'Hi'];
var guessesRemaining;
var chosenWord;

var chooseWord = function () {
    // Use random number generator on the length of the wordBank to select a random one
    var chosen = wordBank[Math.floor(Math.random() * wordBank.length)];
    // Pass that word to the Word constructor to create a new word
    chosenWord = new Word(chosen);
    chosenWord.createWord();
};

// validate the answer...must be only one character
function validateInput(input) {
    if (input.length !== 1){
        return name !== "" || "Please enter only 1 character";
    };
};

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
    validate: validateInput
};

//   * Prompts the user for each guess and keeps track of the user's remaining guesses
inquirer.prompt(gamePrompt).then(answer => {
    if(answer.guessPrompt){
        // The user wants to play, the game is on
    } else {
        console.log("That's fine, you don't have to play!");
    }
});





// TO DO
// 1. Callback with the Word constructor??
// 2. Word displayWord needs to display on one line!
// 3. Check keycodes on input to make sure only characters make it in.