const checkAccordion = document.querySelectorAll(".checkout-question");
const checkoutPayNowBtn = document.querySelector(".checkoutpage-btn");

const checkoutName = document.querySelector("#name");
const checkoutNameError = document.querySelector("#nameError");

const checkoutEmail = document.querySelector("#email");
const checkoutEmailError = document.querySelector("#emailError");

const checkoutAddress = document.querySelector("#address");
const checkoutAddressError = document.querySelector("#addressError");

const postal = document.querySelector("#postal");
const postalError = document.querySelector("#postalError");

const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");

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




function checkoutValidation(event){
  
  if (checkLength(checkoutName.value, 0 ) === true) {
    checkoutNameError.style.display = "none";
  } else {
    checkoutNameError.style.display = "block";
  }

  if (validateEmail(checkoutEmail.value) === true) {
    checkoutEmailError.style.display = "none";
  } else {
    checkoutEmailError.style.display = "block";
  }

  if (checkLength(checkoutAddress.value, 3) === true) {
    checkoutAddressError.style.display = "none";
  } else {
    checkoutAddressError.style.display = "block";
  }

  const postalRegex = /^\d{4}$/; 
  if (postalRegex.test(postal.value.trim())) {
    postalError.style.display = "none";
  } else {
    postalError.style.display = "block";
  }

  if (checkLength(city.value, 1) === true) {
    cityError.style.display = "none";
  } else {
    cityError.style.display = "block";
  }

  if (
    checkLength(checkoutName.value, 0) &&
    validateEmail(checkoutEmail.value) &&
    checkLength(checkoutAddress.value, 3) &&
    postalRegex.test(postal.value.trim()) &&
    checkLength(city.value, 1)
  ) {
    window.location.href = "success.html";
  } else {
    event.preventDefault();
  }
  }


function checkLength (value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}


checkoutPayNowBtn.addEventListener("click", checkoutValidation);