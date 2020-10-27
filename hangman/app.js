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

getPuzzle((error, puzzle) => {

    if (error) {
        console.log(`Error: ${error}`);

    } else {
        console.log(puzzle)

    }

})


// // Making an HTTP request

// const countryCode = 'US'
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         console.log("country name: " + country.name)
//         console.log(data);
//     } else if (e.target.readyState === 4) {
//         console.log('An error has taken place');
//     }
// })

// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
// countryRequest.send()