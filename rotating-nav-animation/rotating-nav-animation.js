const close = document.querySelector(".icon-close");
const open = document.querySelector(".icon-other");
const container = document.querySelector(".container");
const content = document.querySelector(".content");

open.addEventListener("click", () => {
  container.classList.add("show");
});
close.addEventListener("click", () => {
  container.classList.remove("show");
});

function getContentTop() {
  let top = window.pageYOffset;
  content.style.transformOrigin = `0 ${top}px`;
  console.log('111')
}

function  debounce(fn,delay){
  let timer;
  return ()=>{
    clearTimeout(timer)
    timer = setTimeout(()=>{
      fn();
      clearTimeout(timer)
    },delay)
  }
}

document.addEventListener('scroll',debounce(getContentTop,200))