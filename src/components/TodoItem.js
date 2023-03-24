import { Component } from "../core/template";
import TodoDelete from "./TodoDelete";
import todoStore from "../store/todo";
import animalStore from "../store/animal";

export default class TodoItem extends Component {
  constructor(props) {
    super({
      tagName: "a",
      props,
    });

    this.el.classList.add("todo-item");
  }

  render() {
    const { todo, idx } = this.props;

    //this.el.setAttribute("href", `#/todoDetail?id=${idx}`);

    this.el.innerHTML = /* html */ `
      <a class="info" href="#/todoDetail?id=${idx}">
          <div class="info-date">
            ${todo.date}
          </div>
          <div class="info-title">
            ${todo.title}
          </div>
          <div class="info-description">
            ${todo.description}
          </div>
      </a>
    `;

    const delButton = new TodoDelete().el;
    this.el.append(delButton);

    const btnDeleteEl = this.el.querySelector(".info-delete .btn");
    btnDeleteEl.addEventListener("click", (event) => {
      todoStore.state.todos = todoStore.state.todos.filter((_, index) => index !== idx);
      localStorage.setItem("todoList", JSON.stringify(todoStore.state.todos));
      if (animalStore.state.status < 100) {
        animalStore.state.status += 1;
      }
      event.stopPropagation();
    });
  }
}
