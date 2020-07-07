// Prototypal inheritance


const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.likes = likes
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
        //"this" is not bound in arrow function
        //so it uses function above
    })

    return bio

}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]

}

const me = new Person('Hashim', 'Warren', 40, ['Writing Copy', 'Writing Code'])

me.getBio = function () {
    return `this is fake`

}

me.setName('Derrick Waller')
//console.log(me);
console.log(me.getBio());


const person2 = new Person('Clancey', 'Turner', 38)





console.log(person2.getBio()); //?

