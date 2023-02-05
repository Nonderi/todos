function getTodos(){
  const json = localStorage.getItem('todos') ?? '[]'
  return JSON.parse(json);
}
function addTodo(todo){
  const todos = [...getTodos(), todo];
  localStorage.setItem('todos', JSON.stringify(todos))
}

export function setupTodos(element) {

}
