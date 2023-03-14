// const boxes = document.querySelectorAll(".size-button");

// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     box.classList.toggle("active");
//   });
// });

const boxes = document.querySelectorAll(".size-button");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Remove "active" class from all boxes
    boxes.forEach((otherBox) => {
      if (otherBox !== box) {
        otherBox.classList.remove("active");
      }
    });
    // Toggle "active" class on clicked box
    box.classList.toggle("active");
  });
});


const addToCartBtn = document.querySelector(".cart-button");

addToCartBtn.addEventListener("click", () => {
  if (addToCartBtn.dataset.clicked === "true") {
    // The button has already been clicked, so redirect to checkout
    window.location.href = "checkout.html";
  } else {
    // Change the button to a link and update its href
    const checkoutLink = document.createElement("a");
    checkoutLink.href = "checkout.html";
    checkoutLink.innerText = "Checkout";
    checkoutLink.classList.add("to-checkout");
    addToCartBtn.parentNode.replaceChild(checkoutLink, addToCartBtn);
    addToCartBtn.dataset.clicked = "true";
  }
});