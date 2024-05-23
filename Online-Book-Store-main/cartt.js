document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();

            const parentBox = this.closest(".box");
            const bookId = parentBox.getAttribute("data-book-id");
            const bookTitle = parentBox.getAttribute("data-book-title");
            const bookPrice = parentBox.getAttribute("data-book-price");
            const bookImage = parentBox.getAttribute("data-book-image");

            const cartItem = {
                id: bookId,
                title: bookTitle,
                price: parseFloat(bookPrice),
                image: bookImage,
                quantity: 1
            };

            addToCart(cartItem);
        });
    });

    function addToCart(item) {
        let cartItems = localStorage.getItem("cartItems");
        cartItems = cartItems ? JSON.parse(cartItems) : [];

        // Check if the item already exists in the cart
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            // If item exists, increase its quantity
            cartItems[existingItemIndex].quantity++;
        } else {
            // If item does not exist, add it to the cart
            cartItems.push(item);
        }

        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        // Optional: You can update the UI to reflect that the item has been added to the cart
        alert("Proizvod je dodan u košaricu!");
    }
});
