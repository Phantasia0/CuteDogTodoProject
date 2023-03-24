import { Component } from "../core/template";
import ImageDetail from "../components/ImageDetail";
import Search from "../components/Search";

export default class About extends Component {
  constructor() {
    super();
    this.el.classList.add("about");
  }
  render() {
    const imageEl = new ImageDetail().el;
    const searchEl = new Search().el;
    this.el.append(imageEl, searchEl);
  }
}
