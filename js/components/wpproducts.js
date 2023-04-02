const baseUrl = "http://rainydaystidemand.local/wp-json/wc/store/products";
const productContainer = document.querySelector(".carousel");

async function getProducts(url) {
  try {
      const response = await fetch(url);
      const results = await response.json();
      createHTML(results);
    
      
  } catch(error) {
    console.log(error)
  }
}

getProducts(baseUrl);

function createHTML(products) {
  console.log(products);
  products.forEach(function(product){
    productContainer.innerHTML += `<div class="product-card">
    <div class="product-image">
      <span class="image-tag">New In</span>
      <a href="productspecific.html"><img src="${product.images[0].src}" class="image-thumb" alt="Model wearing the jacket, Red - Sailor"></a> 
      <a  href="productspecific.html" class="card-btn">Order Now</a>
    </div>
    <div class="product-info">
      <a href="productspecific.html" class="no-underline"><h2 class="card-title">${product.name}</h2></a>
      <span class="card-price">£89.00</span>
      <span class="actual-price">£129.00</span>
    </div>
  </div>`;
  });
}