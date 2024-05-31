// JavaScript code for adding items to the cart
document.addEventListener("DOMContentLoaded", function() {
    const chooseButtons = document.querySelectorAll(".choose-btn");
    const cartIcon = document.querySelector(".cart-icon");
    const cartCount = document.querySelector(".cart-count");
    const cartModal = document.getElementById("cart-modal");
    const closeBtn = document.querySelector(".close");
    const cartList = document.getElementById("cart-list");
    const totalPriceElement = document.getElementById("total-price");

    // Retrieve cart items from localStorage or initialize an empty array
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Function to update cart count
    function updateCartCount() {
        const totalCount = cartItems.length;
        cartCount.textContent = totalCount;
    }

    // Function to display cart items and total price
    function displayCart() {
        cartList.innerHTML = "";
        let totalPrice = 0;
        cartItems.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            cartList.appendChild(li);
            totalPrice += item.price;
        });
        totalPriceElement.textContent = `$${totalPrice}`;
    }

    // Function to open cart modal
    function openCartModal() {
        displayCart();
        cartModal.classList.remove("hidden");
    }

    // Function to close cart modal
    function closeCartModal() {
        cartModal.classList.add("hidden");
    }

    // Add item to cart
    function addItemToCart(item) {
        cartItems.push(item);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        updateCartCount();
    }

    // Add event listener to each "Choose" button
    chooseButtons.forEach(button => {
        button.addEventListener("click", function() {
            const itemName = this.dataset.name;
            const itemPrice = parseFloat(this.dataset.price);
            const item = { name: itemName, price: itemPrice };
            addItemToCart(item);
        });
    });

    // Toggle cart modal when cart icon is clicked
    cartIcon.addEventListener("click", openCartModal);

    // Close cart modal when close button is clicked
    closeBtn.addEventListener("click", closeCartModal);

    // Update cart count on page load
    updateCartCount();
});
