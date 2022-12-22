import './style.css'
import { app } from './src/todos/app'
import todostore from './src/store/todo.store'

todostore.initStore();
app('#app');


