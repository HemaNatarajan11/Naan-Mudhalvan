const mobile = JSON.parse(localStorage.getItem("cartdata"));
console.log(mobile);
const con = document.getElementById("container");
for (let i = 0; i < mobile.length; i++) {
  con.innerHTML += `<div class="item">
    <img src=${mobile[i].image}>
    <div class="data"></div>
<h1>${mobile[i].brand}</h1>
<p>${mobile[i].model}</p>
<p>${mobile[i].description}</p>
<p>${mobile[i].price}</p>
<button onclick="cart(${mobile[i].productId})">Add to Cart </button></div>  </div>
`;
}
