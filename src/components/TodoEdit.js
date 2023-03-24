import { Component } from "../core/template";
import todoStore from "../store/todo";

export default class TodoEdit extends Component {
  render() {
    this.el.classList.add("todo-edit");

    this.el.innerHTML = /* html */ `
      <h1>Todo Editor</h1>
      <form class="edit-form">
        <input class="edit-date" placeholder="Date"/>
        <input class="edit-title" placeholder="Title"/>
        <input class="edit-description" placeholder="Description"/>
        <button class="btn btn-submit" type="submit">Done!</button>
        <button class="btn btn-reset" type="reset">Reset</button>
      </form>
    `;

    const formEl = this.el.querySelector(".edit-form");

    //Form 제출시 : Create
    formEl.addEventListener("submit", (event) => {
      event.preventDefault();

      const data = {
        date: event.target[0].value,
        title: event.target[1].value,
        description: event.target[2].value,
      };

      todoStore.state.todos = [...todoStore.state.todos, data];
      localStorage.setItem("todoList", JSON.stringify(todoStore.state.todos));

      formEl.reset();
    });
  }
}
