const hamburger = document.querySelector(".hamburger");
const mobilenav = document.querySelector(".nav-mobile");
const overlay = document.querySelector(".overlayBg");

function showNav() {
  mobilenav.classList.toggle("nav-show");
}

hamburger.addEventListener("click", showNav);
overlay.addEventListener("click", showNav);

const iconChange = document.querySelector(".iconChange");
iconChange.addEventListener("click", () => {
  iconChange.classList.toggle("uil-bars");
  iconChange.classList.toggle("uil-times");
});

const submit = document.getElementById("submit");
const email = document.getElementById("email");

submit.addEventListener("click", () => {});
