import { Component } from "../core/template";
import animalStore from "../store/animal";
import { searchPicture } from "../store/picture";

export default class Search extends Component {
  render() {
    this.el.classList.add("search");
    this.el.innerHTML = /* html */ `        
      <input value="${animalStore.state.species}"/>
      <button class="btn btn-primary">Search!</button>
    `;

    const inputEl = this.el.querySelector("input");
    // inputEl.addEventListener("input", () => {
    //   animalStore.state.species = inputEl.value;
    // });
    inputEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && animalStore.state.species.trim()) {
        animalStore.state.species = inputEl.value;
        //searchPicture(inputEl.value);
      }
    });

    const btnEl = this.el.querySelector(".btn");
    btnEl.addEventListener("click", () => {
      if (animalStore.state.species.trim()) {
        animalStore.state.species = inputEl.value;
      }
    });
  }
}
