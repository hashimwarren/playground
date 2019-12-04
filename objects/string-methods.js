let name = 'Hashim Warren'

name.length //?

// convert to uppercase

name.toUpperCase() //?

let password = '   123password456 '
password.includes('password') //?

// trim

password.trim() //?

let isValidPassword = function (password) {
    return password.length > 4 && !password.includes('password') 
    
}

isValidPassword('asdf') //?
isValidPassword('asdfasdfasdf') //?
isValidPassword('asdfpasswordasdfg') //?
