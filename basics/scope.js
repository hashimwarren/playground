// javascript uses lexical scoping
// global scope = defined outside code block
// local scope = defined within code block
// in a scope, can access variables defined in that scope or any parent scope

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
}

console.log(varTwo)