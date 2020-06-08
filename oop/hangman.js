// create constructor function
// two attributes - word itself and number of missed guesses
// create two instances and priont to console

const Hangman = function (word, remainingGuesses) {
    this.word = word,
        this.remainingGuesses = remainingGuesses

}

const gameOne = new Hangman('bathroom', 3)
const gameTwo = new Hangman('toilet', 4)

console.log(gameOne, gameTwo);
