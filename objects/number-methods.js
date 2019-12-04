let num = 103.941

num.toFixed(2) //?

Math.round(num) //?
Math.floor(num) //?
Math.ceil(num) //?

let min = 0
let max = 1

let randomNum = Math.floor(Math.random() * (max - min * 1)) + min //?
randomNum



Math.random() //?

// Challenge
// 1 - 5 true if correct and false if not correct

let makeGuess = function (number) {
    let min = 0
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min * 1)) + min
    return {
        result: randomNum === number,
        randomNum
    }
    

    
}

makeGuess(1).result //? 
makeGuess(1).randomNum //?