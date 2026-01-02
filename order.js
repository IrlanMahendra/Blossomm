const menuSelect = document.getElementById("menuSelect");
const qtyInput = document.getElementById("qty");
const totalPrice = document.getElementById("totalPrice");
const orderForm = document.getElementById("orderForm");

function updateTotal() {
  const price = parseInt(menuSelect.value);
  const qty = parseInt(qtyInput.value);
  const total = price * qty;

  totalPrice.textContent = "Rp" + total.toLocaleString("id-ID");
}

menuSelect.addEventListener("change", updateTotal);
qtyInput.addEventListener("input", updateTotal);

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Order berhasil! Kami akan menghubungi Anda.");
});
