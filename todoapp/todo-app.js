const todos = [
  {
    text: "Buy Alex flowers",
    completed: false
  },
  {
    text: "help Moses practice writing",
    completed: true
  },
  {
    text: "share a coding tutorial with Madison",
    completed: true
  },
  {
    text: "call Darique on his birthday",
    completed: false
  },
  {
    text: "offer to help with Derrick wedding",
    completed: false
  }
];

// 1. setup div container for todos
// 2. setup filters (searchText) and wire up a new filter input to change it
// 3. create a renderTodos function to render and rerender the latest filtered data

// filter
let filters = {
  searchText: "",
  hideCompleted: false
};

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
  let newTodo = {
    text: e.target.elements.addNewTodo.value,
    completed: false
  };
  todos.push(newTodo);
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
