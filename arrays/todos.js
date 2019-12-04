// create an array with five todos
// print you have x todos
// print the fist and second to last items

const todos = [
    'Buy Alex flowers',
    'help Moses practice writing',
    'share a coding tutorial with Madison',
    'call Darique on his birthday',
    'offer to help with Derrick wedding'

]
// delete the 3rd item
// add a new item onto the end
// remove the first item from the list

todos.splice(2, 1) //?
todos.push('Watch TV with Alex')
todos.shift()

todos //?

// 1. the first item
// 2. the second item

todos.forEach(function (item, index) {
    console.log(`${index + 1}. ${item}`)

}) //?

todos //?

for (count = 0; count <= todos.length; count++) {
    console.log(count + '. ' + todos[count])

}