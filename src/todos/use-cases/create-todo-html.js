import { Todo } from "../models/todo.models"

/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHTML = ( todo ) => {
    if (!todo)  throw new Error("A TODO object is required.");       
    
    const {done,descripcion,id} = todo;
    const html = `
    <div class="view ">
        <input class="toggle  " type="checkbox" ${done ? 'checked' : ''}>
        <label >${descripcion}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">`;
    const lielement = document.createElement('li');
    lielement.innerHTML = html;
    lielement.setAttribute('data-id',id);
    if(todo.done) lielement.classList.add('completed');

    return lielement;
}

