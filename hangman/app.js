const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Car Parts', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

getPuzzle('3', (error, puzzle) => {

    if (error) {
        console.log(`Error: ${error}`);

    } else {
        console.log(puzzle)

    }

})

getCountryDetails("JM", (error, country) => {

    if (error) {
        console.log(`Error: ${error}`);

    } else {
        console.log(country.name);

    }
})


// // Making an HTTP request
