function addItem(item) {
  let cart = getCart();
  cart.push(item);
  setCart(cart);
}

function removeItem(index) {
  let cart = getCart();
  cart.splice(index, 1);
  setCart(cart);
}

function getCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (cart == null) {
    cart = [];
  }
  return cart;
}

function setCart(items) {
  localStorage.setItem("cart", JSON.stringify(items));
}