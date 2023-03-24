import { Component } from "../core/template";

export default class Section extends Component {
  constructor() {
    super({
      tagName: "section",
    });
  }
  render() {
    this.el.classList.add("content");
    this.el.innerHTML = /* html */ `
      <div class="inner">
        <div class="layout">
        </div>
      </div>
    `;
  }
}
