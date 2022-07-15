const next = document.querySelector("button.next");
const prev = document.querySelector("button.prev");
const circles = document.querySelectorAll(".circle");
const fillLine = document.querySelector(".progress-line.fill");
let progress = 0;
let lineWidth = 0;
const tempWidth = 100 / (circles.length - 1);

next.addEventListener("click", () => {
  if (progress < circles.length - 1) {
    progress++;
    updated();
  }
});
prev.addEventListener("click", () => {
  if (progress > 0) {
    progress--;
    updated();
  }
});
circles.forEach((item, index) => {
  item.addEventListener("click", () => {
    progress = index;
    updated();
  });
});
function updated() {
  fillLine.style.width = `${tempWidth * progress}%`;
  circles.forEach((item, index) => {
    if (index <= progress) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  prev.disabled = false;
  next.disabled = false;
  if (progress === 0) {
    prev.disabled = true;
  } else if (progress === circles.length - 1) {
    next.disabled = true;
  }
}
