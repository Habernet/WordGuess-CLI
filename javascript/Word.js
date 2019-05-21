var Letter = require('./Letter');

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
function Word(word) {
    // variable representing the word
    this.word = word;
    //array of 'new' Letter objects representing the letters of the underlying word
    this.wordArray = [];
    // Function to fill the array based on the word
    this.createWord = function () {
        for (let i = 0; i < word.length; i++) {
            this.wordArray.push(new Letter(this.word[i]));
        };
    };
    //   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    this.displayWord = function () {
        return this.wordArray.join(' '); //JS calls toString automatically on each char object and then joins them together
    };
};
module.exports = Word;