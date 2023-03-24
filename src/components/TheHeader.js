import { Component } from "../core/template";

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: "header",
      state: {
        menus: [
          {
            name: "Home",
            href: "#/",
          },
          {
            name: "TodoList",
            href: "#/todo",
          },
          {
            name: "About",
            href: "#/about",
          },
        ],
      },
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
    <div class="inner">
      <nav>
          <ul>
            ${this.state.menus
              .map((menu) => {
                return /* html */ `
              <li>
                <a href="${menu.href}">${menu.name}</a>
              </li>
              `;
              })
              .join("")}
          </ul>
      </nav>
    </div>
      
    `;
  }
}
