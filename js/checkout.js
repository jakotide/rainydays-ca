const checkAccordion = document.querySelectorAll(".checkout-question");
const checkoutPayNowBtn = document.querySelector(".checkoutpage-btn");

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




function checkoutValidation(){
  console.log("hello");
}




checkoutPayNowBtn.addEventListener("click", checkoutValidation);