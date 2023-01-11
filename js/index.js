const hamburger = document.querySelector(".hamburger");
const mobilenav = document.querySelector(".nav-mobile");

hamburger.addEventListener("click", () => {
  mobilenav.classList.toggle("nav-show");
});
