function Letter(character) {
    // a string value to store the underlying character for the letter
    this.character = character;
    // a boolean value that stores whether underlying has been guessed yet
    this.guessed = false;
    this.toString = function () {
        // a function that returns underlying if guessed is true...or an underscore if guessed is false

        if (this.character === ' ') {
            // return space if word has space
            return ' ';
        } else if (!this.guessed) {
            // return underscore if it was not guessed correctly
            return '_';
        } else {
            // return the underlying character because it was guessed correctly
            return this.character;
        };
    };
    this.check = function (guess) {
        if (guess === this.character) {
            this.guessed = true;
        };
        // takes a character as an arg and checks against underlying... if it is equal to underlying..update guessed accordingly
    };
};
module.exports = Letter;