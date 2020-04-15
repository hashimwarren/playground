// get saved todos from local storage

const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        todos = JSON.parse(todosJSON)
    }

}

// saved todos to local storage

const saveTodos = function () {
    localStorage.setItem('todos', JSON.stringify(todos))

}



const generateTodoDOM = function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('#todos').appendChild(p)

}

const generateSummaryDOM = function (filteredTodos) {
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)
}

// display todos

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })



    document.querySelector('#todos').innerHTML = ''

    generateSummaryDOM(filteredTodos)

    filteredTodos.forEach(function (todo) {
        generateTodoDOM(todo)

    })
}