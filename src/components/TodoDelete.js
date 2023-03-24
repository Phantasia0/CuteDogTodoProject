import { Component } from "../core/template";

export default class TodoDelete extends Component {
  render() {
    this.el.classList.add("info-delete");
    this.el.innerHTML = /* html */ `
      <button class="btn btn-primary">Delete</button>
    `;
  }
}
