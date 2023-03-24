import { Component } from "../src/core/template";
import TheHeader from "./components/TheHeader";
import SectionAnimal from "./components/SectionAnimal";
import SectionContent from "./components/SectionContent";
import TheFooter from "./components/TheFooter";

export default class App extends Component {
  render() {
    //헤더
    const theHeader = new TheHeader().el;

    //강아지 보여줄 영역
    const theSectionAnimal = new SectionAnimal().el;

    //컨텐츠 영역 = 라우터 페이지 컨텐츠 영역
    const theSectionContent = new SectionContent().el;
    const layout = theSectionContent.querySelector(".layout");
    const routerView = document.createElement("router-view");
    layout.append(routerView);

    //푸터
    const theFooter = new TheFooter().el;

    //합체
    this.el.append(theHeader, theSectionAnimal, theSectionContent, theFooter);
  }
}
