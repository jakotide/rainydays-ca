// NAVBAR

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
  addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))




document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if(window.scrollY > 0){
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
})

const bars = document.querySelectorAll(".bar");

window.addEventListener("scroll", () => {
  if(window.scrollY > 0){
    bars.forEach(bar => bar.classList.add("bar-scrolled"));
  } else {
    bars.forEach(bar => bar.classList.remove("bar-scrolled"));
  }
});
