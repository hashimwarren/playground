import uuidv4 from 'uuid/v4';
import validator from 'validator'
import Hangman from './hangman'
import getPuzzle from './requests'

console.log(uuidv4);
console.log(validator.isEmail('hashimwarren@gmail.com'));

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {

    puzzleEl.textContent = ""
    puzzleArray = game1.puzzle.split('').map((letter) => {
        const puzzleSpan = document.createElement('span')
        puzzleSpan.innerHTML = letter
        puzzleEl.appendChild(puzzleSpan)

    })

    guessesEl.textContent = game1.statusMessage

}

const startGame = async () => {
    const puzzle = await getPuzzle(2)
    game1 = new Hangman(puzzle, 5)
    render()

}



document.querySelector('#reset').addEventListener('click', startGame)

startGame()

