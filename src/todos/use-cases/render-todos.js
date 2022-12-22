import { createTodoHTML } from "./create-todo-html";

let element;
/**
 *
 * @param {String} elementId le id del elemento
 * @param {Array} todos el array de elementos
 */
export const renderTodos = (elementId, todos = []) => {
  if (!element) element = document.querySelector(elementId);
  if (!element) throw new Error(`Element ${elementId} not found.`);

  element.innerHTML = "";

  todos.forEach((t) => {
    element.append(createTodoHTML(t));
  });
};
