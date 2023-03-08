// NAVBAR

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector("header");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navBar.classList.toggle("clicked");
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
    navBar.classList.remove("clicked");
  } else {
    header.classList.remove("header-scrolled");
  }
})

document.addEventListener("scroll", () => {
  if(window.scrollY > 0 ) {
    navMenu.classList.add("scrolled");
  } else {
    navMenu.classList.remove("scrolled");
  }
})

document.addEventListener("click", () => {
    if(window.scrollY > 1) {
      navBar.classList.remove("clicked");
      navBar.classList.add(".header-scrollClick");
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



// To-top button 

const toTopButton = document.querySelector(".to-top");

window.addEventListener("scroll", () =>  {
  if(window.pageYOffset > 500) {
    toTopButton.classList.add("active");
  } else {
    toTopButton.classList.remove("active");
  }
})
