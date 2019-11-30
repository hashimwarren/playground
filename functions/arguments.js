let add = function (a, b, c) {
    return a + b + c

}

let result = add(10, 1, 5)
console.log(result)

//defaul arguments

let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 10) //?

//challenge
// total, tipPercent (as decimal) and default to .2

    // let tipCalculator = function (total, tipPercent = .2) {
    //     return total * tipPercent
        
    // }

    // let myBill = tipCalculator(100, .3) 



// challenge 
// a 25% tip on $40 would be $10

let tipCalculator = function (total, tipPercent = .2) {
    return `a ${tipPercent * 100} tip on ${total} would be $${total * tipPercent}`
    
}

let myBill = tipCalculator(100, .6) 

console.log(myBill)