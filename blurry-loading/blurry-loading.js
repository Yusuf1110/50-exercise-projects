const num = document.querySelector(".num");
const bg = document.querySelector(".bg");
let tempNum = 0;
let tempBlur = 20;
let timer = setInterval(int, 50);
function int() {
  tempNum++;
  tempBlur = tempBlur - 0.2;
  num.innerText = `${tempNum}%`;
  bg.style.filter = `blur(${tempBlur}px)`;
  num.style.opacity = `${100 - tempNum}%`;
  if (tempNum === 100) {
    clearInterval(timer);
  }
}
