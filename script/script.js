document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    alert(`Searching for: ${query}`);
});
document.getElementById('navbar-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
});
const shopImages = document.querySelectorAll('.shop-images');

shopImages.forEach((shop) => {
    const images = shop.querySelectorAll('img');
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
        images[currentIndex].classList.add('active');
    }, 3000); // Change image every 3 seconds
});

document.addEventListener('DOMContentLoaded', () => {
    const offerCards = document.querySelectorAll('.offer-card');

    offerCards.forEach(card => {
        const images = card.querySelectorAll('.offer-image');
        let currentIndex = 0;

        setInterval(() => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
            images[currentIndex].classList.add('active');
        }, 3000); // Change image every 3 seconds
    });
});
