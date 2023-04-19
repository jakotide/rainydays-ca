const specificContainer = document.querySelector(".specific-container");
const titleContainer = document.querySelector(".title-container");
const textContainer = document.querySelector(".text-container");
const payButton = document.querySelector(".pay-now-btn");
const specNav = document.querySelector(".specific-nav");

const queryString = window.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

// const baseUrl = "https://rainydaystidemand.local/wp-json/wc/store/products/" + id;
const baseUrl = "https://wordpress.rainydays-jakob.no/wp-json/wc/store/products/" + id;


async function getProduct(){

    try{
      const response = await fetch(baseUrl);
      const product = await response.json();
      console.log(product);

      createHTML(product)
    
    } 
    catch(error){
      console.log(error);
    }
};

getProduct();


function createHTML(product){
  specNav.innerHTML = `<div>${product.name}</div>`; 
  specificContainer.innerHTML = `
  <div class="specific-img-container">
      <img class="img-item1" src="${product.images[0].src}" alt="${product.images[0].alt}">
      <div class="spec-img-flex">
        <img class="img-item2" src="${product.images[1].src}" alt="${product.images[1].alt}">
        <img class="img-item3" src="${product.images[2].src}" alt="${product.images[2].alt}">
      </div>
    </div>`
    titleContainer.innerHTML = `
    <div class="specific-text-container">
      <h1>${product.name}</h1>
      <div class="specific-price">
        <div class="card-price">£89</div>
        <div class="specific-old-price">£129</div>
      </div>`
      payButton.innerHTML = `<a class="pay-button" href="checkout.html?id=${product.id}">Pay Now</a>`;

    textContainer.innerHTML = `
      <div class="specific-text">
        ${product.description}
      </div>
    </div>`
};

