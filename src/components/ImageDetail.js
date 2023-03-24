import { Component } from "../core/template";
import animalStore from "../store/animal";
import pictureStore, { searchPicture } from "../store/picture";

export default class ImageDetail extends Component {
  constructor() {
    super();
    animalStore.subscribe("species", () => {
      this.render();
    });
    pictureStore.subscribe("url", () => {});
    pictureStore.subscribe("description", () => {});
  }

  async render() {
    this.el.classList.add("img-about");
    const { species } = animalStore.state;
    await searchPicture(species);

    this.el.innerHTML = /* html */ `
      <div style="background-image: url(${pictureStore.state.url})" class="dog-image"></div>
      <div class="dog-description">${pictureStore.state.description}</div>
    `;
  }
}
