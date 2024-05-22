document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.btn'); // Select all "dodaj u košaricu" buttons

    const cart = []; // Array to store cart items

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default form submission

            const item = {
                name: this.parentElement.querySelector('h3').innerText,
                price: parseFloat(this.parentElement.querySelector('.price').innerText.replace('€', '')), // Extract price and convert to number
                quantity: 1 // Default quantity
            };

            addToCart(item); // Add item to cart
            updateCartIcon(); // Update cart icon and count
        });
    });

    function addToCart(item) {
        const existingItem = cart.find(cartItem => cartItem.name === item.name);

        if (existingItem) {
            existingItem.quantity++; // If item already exists, increase quantity
        } else {
            cart.push(item); // Otherwise, add new item to cart
        }
    }

    function updateCartIcon() {
        const cartIcon = document.querySelector('.fa-shopping-cart');
        const cartCount = document.querySelector('.cart-count');

        if (cartIcon && cartCount) {
            cartIcon.classList.add('cart-added'); // Add class to indicate item added to cart
            cartCount.innerText = cart.length; // Update cart count
        }
    }
});
