// HEADER - Search Button Show/Hide
const searchIcon = document.querySelector("#search-icon");
const searchField = document.querySelector("#search-field");

searchIcon.addEventListener("click", () => {

  searchField.style.opacity == "1" ? searchField.style.opacity = "0" : searchField.style.opacity = "1";
  searchField.style.pointerEvents == "auto" ? searchField.style.pointerEvents = "none" : searchField.style.pointerEvents = "auto";

})

//HEADER - Menu Responsivo
let show = true;
const navSection = document.querySelector(".nav");
const navBurger = document.querySelector(".nav-burger");

navBurger.addEventListener("click", () => {

  document.body.style.overflowY = show ? "hidden" : "initial";

  navSection.classList.toggle("open", show);
  show = !show;
})

//HEADER - Sticky
const header = document.getElementById("main-header");

window.addEventListener("scroll", ()=>{
  header.classList.toggle("sticky", window.scrollY > 0);
})

