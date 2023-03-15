const checkAccordion = document.querySelectorAll(".checkout-question");

checkAccordion.forEach((check) => {
  check.addEventListener("click", () => {
    console.log("hello");
    check.classList.toggle("active");
  });
});