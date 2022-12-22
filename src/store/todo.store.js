import { Todo } from "../todos/models/todo.models.js";
//C:\Users\yonib\Desktop\JavaScript\Task-app\src\todos\models\todo.models.js


/**
 * Para filtrar las la lista a imprimir
 */
export const Filters = {
  All: "all",
  Completed: "Completed",
  Pending: "Pending",
};

const state = {
  todos: [
    new Todo("Test this code."),
    
  ],
  Filter: Filters.All,
};
  
const initStore = () => {
  loadstore();
  console.log("InitStore");
};


const loadstore = () => {
  if ( !localStorage.getItem('state') ) return;

  const {todos = [],filter = Filters.All } = JSON.parse(localStorage.getItem('state'));
  state.todos=todos;
  state.Filter = filter;
}

const saveStateToLocalStorage = () => {
  localStorage.setItem('state',JSON.stringify(state));
}

const GetAll = ( newFilter  = Filters.All) => {

  switch (newFilter) {

    case Filters.All:
      return [...state.todos];
      
    case Filters.Completed:
      return state.todos.filter (todo => todo.done);

    case Filters.Pending:
        return state.todos.filter (todo => !todo.done);      

    default:
      throw new Error(`Option ${ newFilter } is not valid.`);
  }

}

const addTodo = (Descripcion) => {

   if(!Descripcion) throw new Error('Descripcion requerida');
   state.todos.push(new Todo(Descripcion));
   saveStateToLocalStorage();

}

const toggleTodo = (todoId ) => {
  state.todos = state.todos.map ( t => {
    if (t.id === todoId) {
      t.done = !t.done;
    }
    return t;
  }) 
  saveStateToLocalStorage();
}

const deleteTodo = (todoId) => {
  state.todos = state.todos.filter( i => i.id !== todoId );
  saveStateToLocalStorage();
  }


const deleteCompleted = () => {
  state.todos = state.todos.filter( i => !i.done );
  saveStateToLocalStorage();
}

const setFilters = ( newFilter  = Filters.All) => {
  state.Filter = newFilter;
  saveStateToLocalStorage();
}

const getCurrentFilter = ( ) => {
 return  state.Filter ;
 }


export default {
  //Filters,
  addTodo,
  deleteCompleted,
  getCurrentFilter,
  initStore,
  loadstore,
  setFilters,
  toggleTodo,
  GetAll, 
  deleteTodo,
};
