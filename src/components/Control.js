import { Component } from "../core/template";
import animalStore from "../store/animal";

export default class Control extends Component {
  render() {
    this.el.classList.add("decrease-satiety");
    this.el.innerHTML = /* html */ `
      <button class="btn btn-increase">
        Increase
      </button>
      <button class="btn btn-decrease">
        Decrease
      </button>
    `;

    const btnInEl = this.el.querySelector(".btn-increase");
    btnInEl.addEventListener("click", () => {
      if (animalStore.state.status > 0) {
        animalStore.state.status += 1;
      }
    });
    const btnDeEl = this.el.querySelector(".btn-decrease");
    btnDeEl.addEventListener("click", () => {
      if (animalStore.state.status > 0) {
        animalStore.state.status -= 1;
      }
    });
  }
}
