const product = (window.location.hash.slice(1) || "");
const image = document.getElementById("image");
const imageUrl = `/images/tarts/${product}.jpeg`;
image.src = imageUrl;