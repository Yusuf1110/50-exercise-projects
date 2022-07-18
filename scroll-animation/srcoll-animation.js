const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", boxMoving);
function boxMoving() {
  const height = (window.innerHeight / 6) * 5;
  boxes.forEach((box) => {
    let boxTop = box.getBoundingClientRect().top;
    if (boxTop < height) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
