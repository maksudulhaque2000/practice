  const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => showPosts(data))
}
const showPosts = (data) => {
  const todosContainer = document.getElementById("todos")
  data.forEach((todo) => {
    const todoCard = document.createElement("div")
    todoCard.innerHTML = `
      <div class="todo-card">
        <h2>${todo.title}</h2>
        <h4>${todo.completed}</h4>
      </div>
    `
  todosContainer.appendChild(todoCard)
  });
}