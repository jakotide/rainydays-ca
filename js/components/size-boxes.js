
const boxes = document.querySelectorAll(".size-button");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    boxes.forEach((otherBox) => {
      if (otherBox !== box) {
        otherBox.classList.remove("active");
      }
    });
    box.classList.toggle("active");
    localStorage.setItem("selectedSize", box.innerText);
    console.log(`Selected size: ${localStorage.getItem("selectedSize")}`);
  });
});


const addToCartBtn = document.querySelector(".cart-button");

addToCartBtn.addEventListener("click", () => {
  if (addToCartBtn.dataset.clicked === "true") {
    window.location.href = "checkout.html";
  } else {
    const checkoutLink = document.createElement("a");
    checkoutLink.href = "checkout.html";
    checkoutLink.innerText = "CHECKOUT";
    checkoutLink.style.transition = "background-color .7s ease";
    checkoutLink.classList.add("to-checkout");
    addToCartBtn.parentNode.replaceChild(checkoutLink, addToCartBtn);
    addToCartBtn.dataset.clicked = "true";
    setTimeout(() => {
      checkoutLink.style.backgroundColor = "#FFF";
      checkoutLink.style.color = "#1f605c";
    }, 0);

    addToCartBtn.dataset.clicked = "true";
  }
});