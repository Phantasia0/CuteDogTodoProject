import { Component } from "../core/template";

export default class Headline extends Component {
  render() {
    this.el.classList.add("headline");
    this.el.innerHTML = /* html */ `
      <h1>홈화면</h1>
      <p>
        1.강아지 상태 요약 시각화<br>
        2.진행사항 상위 숏리스트<br>
        3.현재 진행 중인 체크리스트<br>
        4.오늘 날짜, 날씨, 온도
      </p>
    `;
  }
}
