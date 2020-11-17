const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage

}

const startGame = async () => {
    const puzzle = await getPuzzle(2)
    game1 = new Hangman(puzzle, 5)
    render()

}



document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle(3).then((puzzle) => {
//     console.log(puzzle);
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// })

// .then((puzzle) => {
//     console.log(puzzle)

// }, (err) => {
//     console.log(`Error: ${err}`);

// })

// getCountryDetails("JM").then((details) => {
//     console.log(details.name);
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// })


// getCurrentCountry().then((country) => {
//     console.log("Country name:" + country.name);
// }).catch((error) => {
//     console.log(error);
// })


