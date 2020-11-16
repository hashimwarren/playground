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


getLocation().then((location) => {

    const { _ip, city, region, country } = location
    console.log(`You live in ${city} in ${region} in ${country}`)

}).catch((err) => {
    console.log(`Error: ${err}`);
})
