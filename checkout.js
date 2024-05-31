document.addEventListener("DOMContentLoaded", function() {
    const cartIcon = document.querySelector(".cart-icon");
    const cartCount = document.querySelector(".cart-count");
    const cartModal = document.getElementById("cart-modal");
    const closeBtn = document.querySelector(".close");
    const cartList = document.getElementById("cart-list");
    const totalPriceElement = document.getElementById("modal-total-price");
    const checkoutBtn = document.getElementById("checkout-btn");

    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCartCount() {
        const totalCount = cartItems.length;
        cartCount.textContent = totalCount;
    }

    function displayCart() {
        cartList.innerHTML = "";
        let totalPrice = 0;
        cartItems.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", function() {
                cartItems.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cartItems));
                updateCartCount();
                displayCart();
            });
            li.appendChild(deleteBtn);
            cartList.appendChild(li);
            totalPrice += item.price;
        });
        totalPriceElement.textContent = `$${totalPrice}`;
    }

    function openCartModal() {
        displayCart();
        cartModal.classList.remove("hidden");
    }

    function closeCartModal() {
        cartModal.classList.add("hidden");
    }

    cartIcon.addEventListener("click", openCartModal);
    closeBtn.addEventListener("click", closeCartModal);

    function addItemToCart(item) {
        cartItems.push(item);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        updateCartCount();
    }

    checkoutBtn.addEventListener("click", function() {
        alert("Checkout functionality is not implemented yet.");
    });

    updateCartCount();
});

// JavaScript code for checkout page
document.addEventListener("DOMContentLoaded", function() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartDetails = document.getElementById("cart-details");
    const totalPriceElement = document.getElementById("total-price");

    // Function to display cart items and total price
    function displayCart() {
        cartDetails.innerHTML = "";
        let totalPrice = 0;
        cartItems.forEach(item => {
            const cartItem = document.createElement("p");
            cartItem.textContent = `${item.name} - $${item.price}`;
            cartDetails.appendChild(cartItem);
            totalPrice += item.price;
        });
        totalPriceElement.textContent = `$${totalPrice}`;
    }

    // Display cart items and total price on page load
    displayCart();
});
