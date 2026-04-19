const products = [
  { name: "Cocopeat Block", price: "Rp 5.000" },
  { name: "Cocopeat Brick", price: "Rp 3.000" },
  { name: "Cocopeat Loose", price: "Rp 2.000/kg" }
];

function loadProducts() {
  const container = document.getElementById("productList");
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>${p.name}</h3><p>${p.price}</p>`;
    container.appendChild(div);
  });
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Pesan berhasil dikirim!");
});

window.onload = loadProducts;