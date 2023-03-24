import { Component } from "../core/template";
import Animal from "./Animal";
import Control from "./Control";

export default class Section extends Component {
  constructor() {
    super({
      tagName: "section",
    });
  }
  render() {
    this.el.classList.add("animal");
    this.el.innerHTML = /* html */ `
      <div class="inner">
        <div class="layout">
        </div>
      </div>
    `;
    const layoutEl = this.el.querySelector(".layout");

    const animalEl = new Animal().el;
    const controlEl = new Control().el;

    layoutEl.append(animalEl, controlEl);
  }
}
