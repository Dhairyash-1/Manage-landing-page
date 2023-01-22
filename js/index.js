const hamburger = document.querySelector(".hamburger");
const mobilenav = document.querySelector(".nav-mobile");
const iconSwitch = document.querySelector(".iconsSwitch");
console.log(iconSwitch);
hamburger.addEventListener("click", () => {
  mobilenav.classList.toggle("nav-show");
  // iconSwitch.classList.remove("uli-bars");
  // iconSwitch.classList.add("uli-times");
});
