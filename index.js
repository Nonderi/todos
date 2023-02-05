import './style.css'
import { setupTodos } from './todos.js'

document.querySelector('#app').innerHTML = `
  <div>
  </div>
`

setupTodos(document.querySelector('#counter'))
