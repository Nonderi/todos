const input = document.getElementById("input");
const form = document.getElementById("new-todo");
const ul = document.getElementById("todos");
const progress = document.getElementById("progress-bar");

//document.body.style.background =

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleCreateTodo();
});

getAllTodos().forEach(createTodoListItem);
updateProgress();
function getAllTodos() {
  return JSON.parse(localStorage.getItem("tasks")) ?? [];
}

function setTodos(todosList) {
  localStorage.setItem("tasks", JSON.stringify(todosList));
  updateProgress();
}

function createTodo(text) {
  let number = Math.random() * 50;
  number = Math.floor(number);
  let todo = {
    id: number,
    text,
    isDone: false,
  };
  const todosList = getAllTodos();
  todosList.push(todo);
  setTodos(todosList);
  return todo;
}

function handleCreateTodo() {
  const todo = createTodo(input.value);
  createTodoListItem(todo);
  input.value = "";
}

function createTodoListItem(todo) {
  const { id, isDone, text } = todo;
  const li = document.createElement("li");
  //li.className = "flex-container";
  const span = document.createElement("span");
  span.className = "todo-text";
  span.innerText = text;
  const inputCheckbox = document.createElement("input");
  inputCheckbox.className = "checkbox-style";
  inputCheckbox.type = "checkbox";
  inputCheckbox.checked = isDone;
  inputCheckbox.onchange = () => {
    toggleTodo(id);
  };

  const deleteButton = document.createElement("button");
  deleteButton.className = "fas fa-trash-alt delete-button icon-button";
  deleteButton.onclick = () => {
    li.remove();
    removeTodo(id);
  };

  const updateButton = document.createElement("button");
  updateButton.className = "fas fa-edit edit-button icon-button";
  updateButton.onclick = () => {
    removeTodo(id);
    input.value = li.innerText;
    li.remove();
  };

  li.append(inputCheckbox, span, deleteButton, updateButton);
  ul.append(li);
}

function removeTodo(id) {
  const todosList = getAllTodos();
  let todoIndex = todosList.findIndex((item) => item.id === id);
  todosList.splice(todoIndex, 1);
  setTodos(todosList);
}
function toggleTodo(id) {
  const todosList = getAllTodos();
  let item = todosList.find((item) => item.id === id);
  item.isDone = !item.isDone;
  setTodos(todosList);
}

function updateProgress() {
  const todosList = getAllTodos();
  const done = todosList.filter((todo) => todo.isDone === true);
  progress.value = (done.length / todosList.length) * 100 || 0;
}
