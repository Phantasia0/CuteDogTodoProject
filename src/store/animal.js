import { Store } from "../core/template";

export default new Store({
  species: "pomeranian",
  status: 100,
});

//여기 밑에 상태(공복도) 지지고 볶고 함수 만들기
//status 상태에 따른 다른 css 적용. -idle, -walking, -happy ,-hungry,-angry, -dying

//Sprite 애니메이션용
function calculateFrame(n) {
  let x = 0;
  let y = 0;
  let frames = "";

  for (let i = 0; i < n; i++) {
    frames += `${((100 / n) * i).toFixed(2)}% { background-position: ${x}${x === 0 ? "" : "px"} ${y}${y === 0 ? "" : "px"}; }\n`;
    if (x <= -1024) {
      //(가로 개수 -1) * 1개 가로 길이
      x = 0;
      y -= 128; //1개 세로 길이
      continue;
    }
    x -= 128; //1개 가로 길이
  }

  return frames;
}

document.styleSheets[2].insertRule(`@keyframes sprite-animal {${calculateFrame(54)}}`); //전체 낱개 사진 수
