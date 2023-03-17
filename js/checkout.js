const checkAccordion = document.querySelectorAll(".checkout-question");

const selectedSize = localStorage.getItem("selectedSize");
if (selectedSize) {
  const sizeDisplay = document.querySelector(".selected-size");
  sizeDisplay.innerText = selectedSize;
}



checkAccordion.forEach((check) => {
  check.addEventListener("click", () => {
    console.log("hello");
    check.classList.toggle("active");
  });
});