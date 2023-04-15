
// const specificContainer = document.querySelector(".specific-container");
// const specNav = document.querySelector(".specific-nav");

// const queryString = window.location.search;

// const params = new URLSearchParams(queryString);

// const id = params.get("id");

// const baseUrl = "http://rainydaystidemand.local/wp-json/wc/store/products/" + id;


// async function getProduct(){

//     try{
//       const response = await fetch(baseUrl);
//       const product = await response.json();
//       console.log(product);

//       createHTML(product)
//       // createNav(product)
//     } 
//     catch(error){
//       console.log(error);
//     }
// };

// getProduct();

// // function createNav(product){
// //   specNav.innerHTML = `<div>${product.name}</div>` 
// // }


// function createHTML(product){
//   specNav.innerHTML = `<div>${product.name}</div>`; 
//   specificContainer.innerHTML = `
//   <div class="specific-img-container">
//       <img class="img-item1" src="${product.images[0].src}" alt="${product.images[0].alt}">
//       <div class="spec-img-flex">
//         <img class="img-item2" src="images/productpagered.jpg" alt="Model wearing the jacket - Red - Sailor, front">
//         <img class="img-item3" src="images/red3.jpg" alt="Model wearing the jacket - Red - Sailor, behind">
//       </div>
//     </div>
//     <div class="specific-text-container">
//       <h1>${product.name}</h1>
//       <div class="specific-price">
//         <div class="card-price">£89</div>
//         <div class="specific-old-price">£129</div>
//       </div>
//       <div class="size-b-container">
//       <div class="size-button">S</div>
//       <div class="size-button">M</div>
//       <div class="size-button">L</div>
//       <div class="size-button">XL</div>
//     </div>
//     <a class="cart-button">ADD TO CART</a>
//       <div class="specific-text">
//         <p>Introducing the perfect companion for those chilly outdoor evenings - Red - Sailor. Made from 100% polyester and crafted with a high collar. It comes with three pockets and elasticated cuffs.This jacket is both stylish and practical.</p>

//         <p>Designed in Oslo, this rugged jacket falls below the waist in a regular fit and has dropped shoulders for maximum comfort.</p>

//         <p class="specific-last-p">The model in the picture is wearing a size M, which measures 77.50cm in length and has a height of 1.87m.</p>
//       </div>
//     </div>`
// };

document.addEventListener("DOMContentLoaded", () => {
  
const specificContainer = document.querySelector(".specific-container");
const specNav = document.querySelector(".specific-nav");

const queryString = window.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const baseUrl = "http://rainydaystidemand.local/wp-json/wc/store/products/" + id;


async function getProduct(){

    try{
      const response = await fetch(baseUrl);
      const product = await response.json();
      console.log(product);

      createHTML(product)
      // createNav(product)
    } 
    catch(error){
      console.log(error);
    }
};

getProduct();

// function createNav(product){
//   specNav.innerHTML = `<div>${product.name}</div>` 
// }


function createHTML(product){
  specNav.innerHTML = `<div>${product.name}</div>`; 
  specificContainer.innerHTML = `
  <div class="specific-img-container">
      <img class="img-item1" src="${product.images[0].src}" alt="${product.images[0].alt}">
      <div class="spec-img-flex">
        <img class="img-item2" src="${product.images[1].src}" alt="${product.images[1].alt}">
        <img class="img-item3" src="${product.images[2].src}" alt="${product.images[2].alt}">
      </div>
    </div>
    <div class="specific-text-container">
      <h1>${product.name}</h1>
      <div class="specific-price">
        <div class="card-price">£89</div>
        <div class="specific-old-price">£129</div>
      </div>
      <div class="size-b-container">
      <div class="size-button">S</div>
      <div class="size-button">M</div>
      <div class="size-button">L</div>
      <div class="size-button">XL</div>
    </div>
    <a class="cart-button">ADD TO CART</a>
      <div class="specific-text">
        ${product.description}
      </div>
    </div>`
};
});
