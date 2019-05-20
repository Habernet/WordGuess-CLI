
// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:


var Letter = require('./Letter');


//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
function Word(word){
    // variable representing the word
    this.word = word;
    //array of 'new' Letter objects representing the letters of the underlying word
    this.wordArray= [];
    // Fill the array based on the word
    this.createWord = function() {
        for (let i = 0; i < word.length; i++) {
            this.wordArray.push(new Letter(this.word[i]));
        };
    };
    this.test = function () {
        console.log(this.wordArray);
    };
    //   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    this.displayWord = function(){
        for (let i =0; i < wordArray.length; i++) {

        }
    };
};

var test = new Word('Hello');
test.createWord();
test.test();
module.exports = Word;