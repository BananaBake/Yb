function displayTart(image, name, description, price) {
  if (!(image && name && description && price)) console.error(new Error("Missing tart parameters"));
  let tart = document.createElement("center");
  tart.classList.add("background");
  tart.classList.add("product");
  let tartHTML = `
    <img class="product-image" src="../images/tarts/${image}.jpeg">
    <div class="product-text">
      <p class="bold">${name}</p>
      <p>${description}</p>
      <p>£${price}</p>
      <button class="add-to-cart">Add to cart</button>
    </div>`;
  tart.innerHTML = tartHTML;
  document.getElementById("products").appendChild(tart);
}

function displayCategory(image, name, description, url) {
  if (!(image && name && description && url)) console.error(new Error("Missing category parameters"));
  let cat = document.createElement("center");
  cat.classList.add("background");
  cat.classList.add("product");
  let catHTML = `
  <a href="/categories/${url}.html">
    <img class="product-image" src="images/categories/${image}.jpeg">
    <div class="product-text">
      <p class="bold">${name}</p>
      <p>${description}</p>
    </div>
  </a>`;
  cat.innerHTML = catHTML;
  document.getElementById("products").appendChild(cat);
}

async function displayProducts(src, type) {
  let products = await listProducts(src);
  if (type == "t") {
    products.forEach(
      (tart) => {
        displayTart(
          tart.image,
          tart.name,
          tart.description,
          tart.price
        );
      }
    );
  } else if (type == "c") {
    products.forEach(
      (category) => {
        displayCategory(
          category.image,
          category.name,
          category.description,
          category.url
        );
      }
    );
  }
}