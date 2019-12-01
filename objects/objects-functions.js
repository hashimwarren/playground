let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`  
    }
    
    
}

let bookSummary = getSummary(myBook) //?
let otherBookSummary = getSummary(otherBook) //?

bookSummary.pageCountSummary //?
bookSummary.summary //?

// Challenge
// create function that returns an object with farenheit converted to kelvin and celcius

let tempConverter = function (fahrenheit) {
    return {
        fahrenheit,
        celcius: (fahrenheit - 32) / 1.8,
        kelvin: (fahrenheit + 459.67) * (5/9)
    }
    
}

let convertedTemp = tempConverter(32)

convertedTemp.celcius //?
convertedTemp.fahrenheit //?
convertedTemp.kelvin //?