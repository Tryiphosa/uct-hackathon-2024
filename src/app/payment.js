// payment.js
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const amount = urlParams.get("amount");
  const amountInput = document.getElementById("amount");
  amountInput.value = amount;
});

document.getElementById("paymentForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const amount = document.getElementById("amount").value;
  const paymentMethod = document.getElementById("paymentMethod").value;
  const messageElement = document.getElementById("message");

  try {
    // Replace this URL with your backend endpoint
    const response = await fetch("http://localhost:3000/pay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount, paymentMethod }),
    });

    if (response.ok) {
      window.location.href = `success.html`;
    } else {
      messageElement.textContent = "Payment failed";
      messageElement.classList.add("error");
      messageElement.classList.remove("success");
    }
  } catch (error) {
    messageElement.textContent = "Payment failed";
    messageElement.classList.add("error");
    messageElement.classList.remove("success");
  }
});
