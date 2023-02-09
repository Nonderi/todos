//import "./style.css";
/*import { setupTodos } from "./todos.js";

document.querySelector("#app").innerHTML = `
  <div>
  </div>
`;

setupTodos(document.querySelector("#counter")); */

const input = document.getElementById("input");
const todos = document.getElementById("todos");
const form = document.getElementById("new-todo");
let todosList = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleCreateTodo();
});

function getAllTodos() {
  todosList = JSON.parse(localStorage.getItem("tasks"));
  if (todosList === null) {
    todosList = [];
  }
  // Read todos from local storage
  // If there is no todos in localStorage return empty array
  // If there is todos in localStorage parse them to javascript list then return the list of todos
}

function setTodos(todos) {
  localStorage.setItem("tasks", JSON.stringify(todosList));
  // Stringify todos list to JSON
  // Save them to localStorage
}

// When application starts
// Read all todos from localStorage
// Create html elements from each todo using `createTodoListItem`
function createTodoListItem(todo) {
  const { id, isDone, text } = todo;
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.onclick = () => {
    li.remove();
    removeTodo(id);
  };
  // Create list item with text, remove button, and checkbox
  // On checkbox change update todo's `isDone` (also from localStorage)
  // On remove click, remove todo from UI and locale storage
  // Append the list item to the todo html list
}

function createTodo(text) {
  const todo = {
    id: Math.random(),
    text,
    isDone: false,
  };
  todosList.push(todo);
  setTodos(JSON.stringify(todosList));
  // Create new todo with unique id with isDone false
  // Store getAllTodos from local storage
  // push the todo from list of todos
  // setTodos with the updated list
  // Return the newly created todo
  //localStorage.setItem(key, value);
}
function removeTodo(id) {
  let todos = localStorage.getAllItems(JSON.parse(todos));
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key[i];
    let value = localStorage.getItem(key);
    if (value.id === id) {
      localStorage.remove(value);
      localstorage.setItem(JSON.stringify(todos));
    }
  }
  // getAllTodos and remove the todo that has the given id
  // setTodos with the list that no longer has the todo with given id
}
function toggleTodo(id) {
  // getAllTodos and toggle its isDone
  // setTodos with the list that has the updated todo
}

function handleCreateTodo() {
  const todo = createTodo(input.value);
  createTodoListItem(todo);
  input.value = "";
  /*const li = document.createElement("li");
  li.className = "row";
  li.innerText = input.value;h

  const deleteButton = document.createElement("button");
  deleteButton.className = "fas fa-trash-alt delete-button icon-button";
  deleteButton.onclick = li.remove;

  const updateButton = document.createElement("button");
  updateButton.className = "fas fa-edit edit-button icon-button";

  li.append(deleteButton, updateButton);
  todos.append(li);
  listOfTodos.push(input.value);*/
}
