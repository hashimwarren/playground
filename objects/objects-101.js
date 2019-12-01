//challenge
// name, age, location
// Hashim is 39 and lives in Greensboro
// increase age by 1 and print again

let person = {
    name: 'Hashim',
    age: 39,
    location: 'Greensboro',
    ageIncrease: function () {
        return this.age++
        
        console.log('yolo')


    }

}

let statement = `${person.name} is ${person.age} and lives in ${person.location}`

console.log(statement)
person.age //?
person.ageIncrease() //?

person.age //?
let statement2 = `${person.name} is ${person.age} and lives in ${person.location}`

console.log(statement2)
