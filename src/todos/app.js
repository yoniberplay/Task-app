import HTML from "./app.HTML?raw";
import todoStore from "../store/todo.store";
import { Filters } from "../store/todo.store";
import { renderTodos } from "./use-cases";
import { RenderPending } from "./use-cases/render-pendig";

const ElementIDs = {
  clearcompleted: ".clear-completed",
  TodoList: ".todo-list",
  newtodoinput: "#new-todo-input",
  filtro: ".filtro",
  pendingCount: "#pending-count",
  
};

/**
 *
 * @param {elementId} El id del elemento al cual se le agregara el div
 * @returns nada
 */
export const app = (elementId) => {
  const displayTodos = () => {
    const todos = todoStore.GetAll(todoStore.getCurrentFilter());
    renderTodos(ElementIDs.TodoList, todos);
    RenderPending(ElementIDs.pendingCount,todoStore.GetAll(Filters.Pending).length);
  };

  (() => {
    const app = document.createElement("div");
    app.innerHTML = HTML;
    app.style.textAlign = "center";
    const element = document.querySelector(elementId);
    element.append(app); 
    displayTodos();
  })();

  // HTML REFERENCES
  const newDescriptionInput = document.querySelector(ElementIDs.newtodoinput);
  const todoListUL = document.querySelector(ElementIDs.TodoList);
  const clearcompleted = document.querySelector(ElementIDs.clearcompleted);
  const filtroLIS = document.querySelectorAll(ElementIDs.filtro);
  const Borrarcompletados = document.querySelectorAll(ElementIDs.Borrarcompletados);
  

  // Listener
  newDescriptionInput.addEventListener("keyup", (event) => {
    if (event.keyCode !== 13) return;
    if (event.target.value.trim().length === 0) return;
    todoStore.addTodo(event.target.value);
    event.target.value = "";
    displayTodos();
  });

  todoListUL.addEventListener("click", (event) => {
    const element = event.target.closest("[data-id]");
    todoStore.toggleTodo(element.getAttribute("data-id"));
    console.log(event.target.className);
    displayTodos();
  });

  todoListUL.addEventListener("click", (event) => {
    const element = event.target.closest("[data-id]");
    if (event.target.className === "destroy") {
      todoStore.deleteTodo(element.getAttribute("data-id"));

      displayTodos();
    }
  });

  clearcompleted.addEventListener("click", (event) => {
    todoStore.deleteCompleted();
    displayTodos();
  });

  filtroLIS.forEach((e) => {
    e.addEventListener("click", (e) => {
      filtroLIS.forEach((el) => el.classList.remove("selected"));
      filtroLIS.forEach((el) => el.classList.remove("completada"));

      e.target.classList.add("selected");
      e.target.classList.add("completada");

      switch (e.target.getAttribute("id")) {
        case "Pendientes":
          todoStore.setFilters(Filters.Pending);
          break;
        case "Todos":
          todoStore.setFilters(Filters.All);
          break;
        case "Completados":
          todoStore.setFilters(Filters.Completed);
          break;
      }
      displayTodos();
    });
  });
};
