const featuredUrl = "https://rainydaystidemand.local/wp-json/wc/store/products?featured=true";
const featuredContainer = document.querySelector(".featured-container");

async function getFeatured(){

  try{
    const response = await fetch(featuredUrl);
    const results = await response.json();
    console.log(results);
    createFeatured(results);
  }
  catch(error){
    console.log(error);
  }
};

getFeatured();

function createFeatured(products){
  console.log(products)
  products.forEach(function(product){
      featuredContainer.innerHTML += `<div class="grid-product-card">
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
};
