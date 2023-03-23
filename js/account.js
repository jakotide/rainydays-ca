const logInBtn = document.querySelector(".account-btn");
const email = document.querySelector("#accountEmail");
const emailError = document.querySelector("#accountEmailError");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");




function validateLogin(event) {
  event.preventDefault();

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (password.value.trim().length > 7) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
  }

  console.log("bob");
}

logInBtn.addEventListener("click", validateLogin);

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}