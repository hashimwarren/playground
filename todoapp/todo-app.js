let todos = [];

// filter
let filters = {
  searchText: "",
  hideCompleted: false
};

// Read todos when app starts

const todosJSON = localStorage.getItem("todos");
if (todosJSON !== null) {
  todos = JSON.parse(todosJSON);
}

// filter todos

const renderTodos = function(todos, filters) {
  const filteredTodos = todos.filter(function(todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter(function(todo) {
    return !todo.completed;
  });

  document.querySelector("#todos").innerHTML = "";

  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector("#todos").appendChild(summary);

  filteredTodos.forEach(function(todo) {
    let todoEl = document.createElement("p");
    todoEl.textContent = todo.text;
    document.querySelector("#todos").appendChild(todoEl);
  });
};

renderTodos(todos, filters);

// filter input

document.querySelector("#search-todos").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

// capture addNewTodo submits
document.querySelector("#yes").addEventListener("submit", function(e) {
  e.preventDefault();
  todos.push({
    text: e.target.elements.addNewTodo.value,
    completed: false
  });
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos(todos, filters);
  e.target.elements.addNewTodo.value = "";
  console.log("working....");
});

//hide completed filter

const hideCompleted = todos.filter(function(todo) {
  return !todo.completed;
});

// hide completed checkbox
document
  .querySelector("#hide-completed")
  .addEventListener("change", function(e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
  });
