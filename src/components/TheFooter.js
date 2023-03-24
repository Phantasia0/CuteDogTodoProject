import { Component } from "../core/template";
import footerStore from "../store/footer";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }

  render() {
    const { elice, github, blog } = footerStore.state;
    this.el.innerHTML = /* html */ `
    <div class="inner">
      <div>
        <a href="${elice}">
          Elice
        </a>
      </div>
      <div>
        <a href="${github}">
          GitHub
        </a>
      </div>
      <div>
        <a href="${blog}">
          Blog
        </a>
      </div>
    </div>
      
    `;
  }
}
