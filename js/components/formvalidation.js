const form = document.querySelector(".contact-form");
const firstName = document.querySelector("#firstname");
const firstError = document.querySelector("#firstNameError");

const lastName = document.querySelector("#lastname");
const lastError = document.querySelector("#lastNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const message = document.querySelector("#message");
const textError = document.querySelector("#textError");

const successMessage = document.querySelector(".successMessage");


function validateForm(event) {
  event.preventDefault();

  if (checkLength(firstName.value, 0) === true) {
    firstError.style.display = "none";
  } else {
    firstError.style.display = "block";
  }

  if (checkLength(lastName.value, 2) === true) {
    lastError.style.display = "none";
  } else {
    lastError.style.display = "block";
  }

  if(validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(message.value, 10) === true) {
    textError.style.display = "none";
  } else {
    textError.style.display = "block";
  }

  if (firstName.value !== '' && lastName.value !== '' && validateEmail(email.value) && checkLength(message.value, 10)) {
    successMessage.style.display = "block";
  } else {
    successMessage.style.display = "none";
  }

  console.log("elo")
}


function checkLength(value, len) {
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


form.addEventListener("submit", validateForm);