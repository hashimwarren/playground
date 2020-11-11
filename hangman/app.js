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

getPuzzle(3).then((puzzle) => {
    console.log(puzzle);
}).catch((err) => {
    console.log(`Error: ${err}`);
})

// .then((puzzle) => {
//     console.log(puzzle)

// }, (err) => {
//     console.log(`Error: ${err}`);

// })

getCountryDetails("JM").then((details) => {
    console.log(details.name);
}).catch((err) => {
    console.log(`Error: ${err}`);
})


// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if (response.status === 200) {
//         return response.json() // returns another Promise

//     } else {
//         throw new Error('unable to fetch puzzle')
//     }

// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((error) => {
//     console.log(error);
// })
