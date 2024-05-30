document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsList = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');
    const clearCartButton = document.querySelector('.clear-cart');
    const cartIcon = document.querySelector('.cart-icon');
    const cartContainer = document.querySelector('.cart-container');
    const cartCount = document.querySelector('.cart-count');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    // Function to update cart UI
    function updateCartUI() {
        cartItemsList.innerHTML = '';
        let total = 0;
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price}`;
            cartItemsList.appendChild(listItem);
            total += item.price;
        });
        cartTotal.textContent = total;
        cartCount.textContent = cartItems.length;
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    // Function to add item to cart
    function addToCart(name, price) {
        cartItems.push({ name, price });
        updateCartUI();
    }

    // Add click event to all 'add-to-cart' buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const name = event.target.getAttribute('data-name');
            const price = parseFloat(event.target.getAttribute('data-price'));
            addToCart(name, price);
        });
    });

    // Clear cart
    clearCartButton.addEventListener('click', () => {
        cartItems.length = 0;
        updateCartUI();
    });

    // Toggle cart visibility
    cartIcon.addEventListener('click', () => {
        cartContainer.classList.toggle('hidden');
        overlay.style.display = cartContainer.classList.contains('hidden') ? 'none' : 'block';
    });

    // Close cart when clicking outside
    overlay.addEventListener('click', () => {
        cartContainer.classList.add('hidden');
        overlay.style.display = 'none';
    });

    // Initialize cart UI
    updateCartUI();
});

