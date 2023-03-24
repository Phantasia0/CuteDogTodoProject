import { Component } from "../core/template";
import animalStore from "../store/animal";

export default class Animal extends Component {
  constructor() {
    super();
    this.el.classList.add("cat", "walking");

    animalStore.subscribe("status", () => {
      const { status } = animalStore.state;
      console.log(animalStore.state.status);
      switch (status) {
        case 100: {
          this.el.classList.add("walking");
          this.el.classList.remove("hungry");
          break;
        }
        case 99: {
          this.el.classList.remove("walking");
          this.el.classList.add("hungry");
          break;
        }
        default: {
          this.el.classList.add("walking");
          this.el.classList.remove("hungry");
        }
      }
    });
  }

  render() {
    this.el.innerHTML = /* html */ `


    `;
  }
}
