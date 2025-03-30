document.addEventListener("DOMContentLoaded", function () {
  function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      return;
    }

    cart.forEach((item, index) => {
      const cartItemDiv = document.createElement("div");
      cartItemDiv.classList.add("cart-item");
      cartItemDiv.innerHTML = `
                <span>${item.name} - <strong>$${item.price.toFixed(
        2
      )}</strong></span>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            `;
      cartContainer.appendChild(cartItemDiv);
    });
  }

  window.removeFromCart = function (index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
  };

  displayCart();
});
