let todos = []

const filters = {
  searchText: '',
  hideCompleted: false
}

getSavedTodos()



renderTodos(todos, filters)



document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
  e.preventDefault()
  todos.push({
    text: e.target.elements.text.value,
    completed: false
  })
  saveTodos()
  renderTodos(todos, filters)
  e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})


// fetch existing todos from local storage
// getSavedTodos

// save todos to local storage
// saveTodos

// render application todos based on filters
// renderTodos

// get the DOM elements for an individual note
// generateTodoDOM

// get the DOM elements for the list summary
// generateSummaryDOM