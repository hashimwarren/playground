
const todos = [{
    text: 'Buy Alex flowers',
    completed: false

}, { 
    text: 'help Moses practice writing',
    completed: true

}, {
    text: 'share a coding tutorial with Madison',
    completed: true

}, {
    text: 'call Darique on his birthday',
    completed: false 

}, {
    text: 'offer to help with Derrick wedding',
    completed: false

}]

// switch to objects - text, complted - true, false
// function to remove todo by text value, case insensitive

const deleteTodo = function (todos, text) {
    const index = todos.findIndex(function (todo, index) {
        return todo.text.toLowerCase() === text.toLowerCase()
    })
    if (index > -1) {
        return todos.splice(index, 1)
        
    }
    
}

deleteTodo(todos, 'help Moses practice writinG')

todos //?