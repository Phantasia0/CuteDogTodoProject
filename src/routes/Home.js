import { Component } from "../core/template";
import Headline from "../components/Headline";

export default class Home extends Component {
  render() {
    const headline = new Headline().el;
    this.el.classList.add("home");

    this.el.append(headline);
  }
}

//홈화면에
//여러 추가하고하려는 기능, 컴포넌트 구현 후 컴포넌트로 추가
