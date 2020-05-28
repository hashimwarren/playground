const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Hashim',
    age: 31
}, {
    name: 'Moses',
    age: 5
}, {
    name: 'Alex',
    age: 22

}

]

// const under30 = people.filter(function (person) {
//     return person.age < 30

// })

const under30 = people.filter((person) => person.age < 30)

console.log(under30)

const age22 = people.filter((person) => person.age === 22) //?


