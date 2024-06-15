// checkout.js
const items = [
  { name: "Rice", price: 400, image: "rice.png" },
  { name: "Eggs", price: 300, image: "eggs.png" },
  { name: "Chicken", price: 700, image: "chicken.png" },
];

const itemsContainer = document.getElementById("items");
const totalAmountElement = document.getElementById("totalAmount");
const checkoutButton = document.getElementById("checkoutButton");

let totalAmount = 0;

// Display items and calculate total amount
items.forEach((item) => {
  const itemElement = document.createElement("div");
  itemElement.innerHTML = `<img src="${item.image}" alt="${item.name}"><span>${item.name}</span><span>R${item.price.toFixed(2)}</span>`;
  itemsContainer.appendChild(itemElement);
  totalAmount += item.price;
});

totalAmountElement.textContent = totalAmount.toFixed(2);

// Redirect to payment page with total amount
checkoutButton.addEventListener("click", () => {
  window.location.href = `submit_button.html?amount=${totalAmount.toFixed(2)}`;
});
