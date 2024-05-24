// Dodavanje artikla u košaricu
document.addEventListener('DOMContentLoaded', function() {
    const cartButtons = document.querySelectorAll('.add-to-cart');

    cartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const bookBox = button.closest('.box');
            const bookId = bookBox.getAttribute('data-book-id');
            const bookTitle = bookBox.getAttribute('data-book-title');
            const bookPrice = bookBox.getAttribute('data-book-price');
            const bookImage = bookBox.getAttribute('data-book-image');

            dodajUKosaricu(bookId, bookTitle, bookPrice, bookImage);
        });
    });
});

function dodajUKosaricu(id, title, price, image) {
    let kosarica = JSON.parse(localStorage.getItem('kosarica')) || [];
    kosarica.push({ id, title, price, image });
    localStorage.setItem('kosarica', JSON.stringify(kosarica));
    alert('Artikl dodan u košaricu');
}

// Inicijalizacija Swiper-a
const swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Ostale opcije prema potrebi
});
