document.addEventListener("DOMContentLoaded", function () {
  const productContainer = document.getElementById("products");

  function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => {
        products.forEach((product) => {
          const productDiv = document.createElement("div");
          productDiv.classList.add("product");
          productDiv.innerHTML = `
                        <img src="${product.image}" alt="${product.title}">
                        <h4>${product.title}</h4>
                        <p><strong>$${product.price.toFixed(2)}</strong></p>
                        <button onclick="addToCart('${product.title.replace(
                          /'/g,
                          "\\'"
                        )}', ${product.price})">Add to Cart</button>
                    `;
          productContainer.appendChild(productDiv);
        });
      })
      .catch((error) => console.error("Error fetching products:", error));
  }

  window.addToCart = function (name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
  };

  fetchProducts();
});
