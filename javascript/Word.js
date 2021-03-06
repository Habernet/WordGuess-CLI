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
    this.displayWord = function () {
        console.log(this.wordArray.join(' ')); //JS calls toString automatically on each char object and then joins them together
    };
};
module.exports = Word;