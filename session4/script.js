let mobile = [
  {
    productId: 1,
    brand: "ViVo",
    model: "Y200 5G",
    image:
      "https://th.bing.com/th/id/OIP.C6UyWRoxtOShHYTIULy-_QHaHa?w=164&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "vivo Y200 5G (Jungle Green, 128 GB)  (8 GB RAM) ",
    price: 80000,
  },
  {
    productId: 2,
    brand: "samsung",
    model: "Galaxy s26",
    image:
      "https://www.bing.com/th?id=OIP.3xvb1Ty8gR2B_gPp0xEONgHaHa&w=172&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    description: "samsung Galaxy s26 AI smartphone(Silver ,12GB Storage) ",
    price: 80000,
  },
  {
    productId: 3,
    brand: "Nothing",
    model: "Nothing s26",
    image:
      "https://th.bing.com/th/id/OIP.DRh4Z3OYV44BARNOPpLEKwAAAA?w=166&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "samsung Galaxy s26 AI smartphone(Silver ,12GB Storage) ",
    price: 80000,
  },
  {
    productId: 4,
    brand: "Apple",
    model: "Apple s26",
    image:
      "https://th.bing.com/th/id/OIP.JYriuVLeEpcTNpGjWFTFBwHaHa?w=180&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "samsung Galaxy s26 AI smartphone(Silver ,12GB Storage) ",
    price: 80000,
  },
];
const con = document.getElementById("container");
for (let i = 0; i < mobile.length; i++) {
  con.innerHTML += `<div>
    <img src=${mobile[i].image}>
   

<h1>${mobile[i].brand}</h1>
<p>${mobile[i].model}</p>
<p>${mobile[i].description}</p>
<p>${mobile[i].price}</p>
<button onclick="cart(${mobile[i].productId})">Add to Cart </button></div>    
`;
}
let arr = [];
function cart(proid) {
  //   console.log(mobile.proid - 1);
  if (localStorage.length == 0) {
    arr = [];
  }
  arr.push(mobile[proid - 1]);
  localStorage.setItem("cartdata", JSON.stringify(arr));
}
