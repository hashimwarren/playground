

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

const sortTodos = function (todos) {
    return todos.sort(function (a, b) {
        if (a.completed === false) {
            return -1
             
        }
    })
    
}

sortTodos(todos)
todos //?

// find things todo

    // const getThingsToDo = function (todos) {
    //     return todos.filter(function (todo) {
    //         return todo.completed === false

    //     })
        
        
    // }

    // getThingsToDo(todos) //?

// switch to objects - text, complted - true, false
// function to remove todo by text value, case insensitive

    // const deleteTodo = function (todos, text) {
    //     const index = todos.findIndex(function (todo, index) {
    //         return todo.text.toLowerCase() === text.toLowerCase()
    //     })
    //     if (index > -1) {
    //         return todos.splice(index, 1)
            
    //     }
        
    // }

    // deleteTodo(todos, 'help Moses practice writinG')

todos //?