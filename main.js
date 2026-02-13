const products = [
  { id:1, name:"Rose Bouquet", price:799 },
  { id:2, name:"Lily Bunch", price:699 },
  { id:3, name:"Orchid Vase", price:999 },
  { id:4, name:"Tulips", price:899 },
  { id:5, name:"Sunflower", price:599 },
  { id:6, name:"Mixed Flowers", price:1099 }
];

function loadProducts() {
  const box = document.getElementById("products");
  products.forEach(p => {
    box.innerHTML += `
      <div class="col-md-4">
        <div class="card p-3">
          <h5>${p.name}</h5>
          <p>₹${p.price}</p>
          <button onclick="addToCart(${p.id})" class="btn btn-dark">Add to Cart</button>
        </div>
      </div>`;
  });
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(products.find(p => p.id === id));
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "cart.html";
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const box = document.getElementById("cartItems");
  let total = 0;
  cart.forEach(item => {
    total += item.price;
    box.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
  });
  box.innerHTML += `<h5>Total: ₹${total}</h5>`;
}

function submitForm() {
  alert("Thank you! We will contact you shortly 🌸");
  return false;
}

document.addEventListener("DOMContentLoaded", () => {
  const aboutText = `
Gull Blooms is a boutique floral studio inspired by timeless beauty and emotion.
We craft every arrangement with care, precision, and artistic elegance.
Our flowers are sourced fresh to ensure lasting fragrance and visual grace.
Each bloom tells a story of love, celebration, and heartfelt connection.
From intimate moments to grand occasions, we design with purpose.
We believe flowers are not just gifts, but expressions of the soul.
Our passion lies in turning moments into unforgettable floral memories.
At Gull Blooms, every petal is placed with love.
`;

  const typingEl = document.getElementById("typing-text");
  let index = 0;
  const speed = 35;

  function type() {
    if (index < aboutText.length) {
      typingEl.textContent += aboutText.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  type();
});
