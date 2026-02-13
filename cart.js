let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateQty(i, change){
  cart[i].qty += change;
  if(cart[i].qty <= 0){
    cart.splice(i,1);
  }
  renderCart();
}

function renderCart(){
  const box = document.getElementById("cartItems");
  box.innerHTML = "";
  let total = 0;

  cart.forEach((item,i)=>{
    total += item.price * item.qty;
    box.innerHTML += `
      <div class="cart-item">
        <div>
          <strong>${item.name}</strong><br>
          ₹${item.price}
        </div>
        <div class="qty">
          <button onclick="updateQty(${i},-1)">−</button>
          ${item.qty}
          <button onclick="updateQty(${i},1)">+</button>
        </div>
      </div>
    `;
  });

  document.getElementById("total").innerText = total;

  document.getElementById("upiPayLink").href =
    `upi://pay?pa=6280732691@ybl&pn=Gull%20Blooms&am=${total}&cu=INR`;

  localStorage.setItem("cart", JSON.stringify(cart));
}

renderCart();
