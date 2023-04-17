const baseUrl = "http://rainydaystidemand.local/wp-json/wc/store/products";
const productContainer = document.querySelector(".product-grid");
const categories = document.querySelectorAll(".category");
const searchButton = document.querySelector(".search-button");


async function getProducts(url) {
  try {
      const response = await fetch(url);
      const results = await response.json();
      createHTML(results);
      console.log(results)
      
  } catch(error) {
    console.log(error)
  }
}

getProducts(baseUrl);

function createHTML(products) {
  console.log(products);
  products.forEach(function(product){
    productContainer.innerHTML += `<div class="grid-product-card">
    <div class="product-image">
      <div class="tag-group">
      <span class="image-tag">${product.tags[0].name}</span>
      </div>
      <a href="productspecific.html?id=${product.id}">
      <img src="${product.images[0].src}" class="image-thumb" alt="${product.images[0].alt}"> 
      </a>
    </div>
    <a href="productspecific.html" class="product-info">
      <h2 class="card-title">${product.name}</h2>
      <span class="card-price">£${product.prices.sale_price}</span>
      <span class="actual-price">£${product.prices.regular_price}</span>
    </a>
  </div>`;
  });
}

categories.forEach(function(category) {
  category.onclick = function(event) {
    
    let newUrl;
    if (event.target.id === "featured") {   
      console.log(event.target.id)
      newUrl = baseUrl + "?featured=true";
    } else {
      const chosenCategory = event.target.value;
      newUrl = baseUrl + `?category=${chosenCategory}`
    }
    productContainer.innerHTML = "";
    getProducts(newUrl);
  } 
})


searchButton.onclick = function(){
  const searchInput = document.querySelector("#search-input").value;
  let newUrl = baseUrl + `?search=${searchInput}`;

  productContainer.innerHTML = "";
  getProducts(newUrl);
};

