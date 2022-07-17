const searchBtn = document.querySelector(".search-btn");
const search = document.querySelector(".search");
searchBtn.addEventListener("click", () => {
  search.classList.toggle("active");
  search.focus();
});
