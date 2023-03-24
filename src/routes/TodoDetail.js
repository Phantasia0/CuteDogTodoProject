import { Component } from "../core/template";
import todoStore, { readTodo } from "../store/todo";
import TodoUpdate from "../components/TodoUpdate";

export default class TodoDetail extends Component {
  constructor() {
    super();
    todoStore.subscribe("todo", () => {
      // this.render();
    });
  }

  async render() {
    this.el.classList.add("todo-detail");

    await readTodo(history.state.id);
    console.log(todoStore.state.todo);
    this.el.innerHTML = /* html */ `
      <div class="read-date">
        <input value="${todoStore.state.todo.date}"/>
      </div>
      <div class="read-title">
      <input value="${todoStore.state.todo.title}"/>
      </div>
      <div class="read-description">
      <input value="${todoStore.state.todo.description}"/>
      </div>
    `;

    const updateBtn = new TodoUpdate().el;
    this.el.append(updateBtn);

    const updateBtnEl = this.el.querySelector(".info-update .btn");
    updateBtnEl.addEventListener("click", () => {
      const readDateEl = this.el.querySelector(".read-date input");
      const readTitleEl = this.el.querySelector(".read-title input");
      const readDescriptionEl = this.el.querySelector(".read-description input");

      todoStore.state.todo.date = readDateEl.value;
      todoStore.state.todo.title = readTitleEl.value;
      todoStore.state.todo.description = readDescriptionEl.value;
      console.log(todoStore.state.todo);

      todoStore.state.todos[history.state.id] = todoStore.state.todo;

      localStorage.setItem("todoList", JSON.stringify(todoStore.state.todos));

      window.location.href = "./#/todo";
    });
  }
}
