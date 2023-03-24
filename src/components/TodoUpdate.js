import { Component } from "../core/template";

export default class TodoUpdate extends Component {
  render() {
    this.el.classList.add("info-update");
    this.el.innerHTML = /* html */ `
      <button class="btn btn-primary">Update</button>
    `;
  }
}
