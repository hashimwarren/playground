const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

//remove todo from list
const removeTodo = function (id) {

    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id

    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)

    }
}

// Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })


    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })


    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Get the DOM elements for an individual todo
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div')
    const todoText = document.createElement('span')
    const checkbox = document.createElement('input')
    const removeButton = document.createElement('button')

    //setup the todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkbox)
    if (todo.completed === true) {
        checkbox.setAttribute('checked', '')

    }



    //setup the todos text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    //setup the remove button
    removeButton.textContent = '✖'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}


// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left!`
    return summary
}
