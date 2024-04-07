async function listProducts(source) {
  const response = await fetch(source);
  if (!response.ok) {
    console.log("Couldnt fetch products");
    return [];
  }
  try {
    return await response.json();
  } catch (error) {
    console.error("Product list JSON invalid: " + error);
    return [];
  }
}

