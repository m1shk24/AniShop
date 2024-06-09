import { addToCart } from './scripts.js';

document.addEventListener("DOMContentLoaded", function () {
    // Find all buy buttons
    const buyButtons = document.querySelectorAll(".btn.buy");

    // Add click event listener to each button
    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Redirect to checkout page
            window.location.href = "checkout.html";
        });
    });
});
