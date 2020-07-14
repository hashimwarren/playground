// 1. set up the word instance property as an array of lower case letters
// 2. set up anoter instance property to store guessed letters
// 3. create a method that gives you the word puzzle back

// no guesses? --> ***
// guessed "c", "b", and "t" --> c*t

const Hangman = function (word, remainingGuesses, guess) {

    this.word = word.toLowerCase().split(''),
        this.remainingGuesses = remainingGuesses

}

// Hangman.prototype.getPuzzle = function () {

//     //     if (this.guess = []) {
//     //         return `***`

//     //     } else {
//     //         this.guess
//     //         return `aaa`

//     //     }



// }

const gameOne = new Hangman('Bathroom', 3, 'a')
console.log(gameOne.guess);


const gameTwo = new Hangman('toilet', 4, 'b')

console.log(gameOne.guess);
console.log(gameTwo.guess);

// console.log(gameOne.getPuzzle());
// console.log(gameTwo.getPuzzle());