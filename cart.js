document.addEventListener("DOMContentLoaded", function() {
    const cartCount = document.querySelector(".cart-count");
    const cartList = document.getElementById("cart-list");
    const totalPriceElement = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");

    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

        // Remove item from cart
        function removeItem(index) {
            cartItems.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cartItems));
            displayCart();
        }
    
        // Event listener for remove button clicks
        cartList.addEventListener("click", function(event) {
            if (event.target.classList.contains("remove-btn")) {
                const index = parseInt(event.target.dataset.index);
                removeItem(index);
            }
        });

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
                updateCart();
            });
            li.appendChild(deleteBtn);
            cartList.appendChild(li);
            totalPrice += item.price;
        });
        totalPriceElement.textContent = `$${totalPrice}`;
    }

    function updateCart() {
        updateCartCount();
        displayCart();
    }

    function updateCheckout() {
        let totalPrice = 0;
        cartItems.forEach(item => {
            totalPrice += item.price;
        });
        totalPriceElement.textContent = `$${totalPrice}`;
    }

    checkoutBtn.addEventListener("click", function() {
        alert("Checkout functionality is not implemented yet.");
    });

    updateCart();
    updateCheckout();
});
