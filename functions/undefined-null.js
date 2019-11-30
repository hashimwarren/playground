// undefined for variable
let name

name = 'jen'

if (name === undefined) {
    console.log('please provide a name')
    
}

console.log(name) //

// undefined for function arguments
// undefined as the function default return value

let square = function (num) {
    console.log(num)
}

let result = square() //?

// null as assigned value

let age = 27

age = null