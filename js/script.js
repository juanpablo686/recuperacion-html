document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    // Función para mover el carrusel
    function updateCarousel() {
        const newTransformValue = -currentIndex * 25;
        document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue}%)`;
    }

    // Función para siguiente imagen
    nextButton.addEventListener('click', function() {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    // Función para imagen anterior
    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalImages - 1;
        }
        updateCarousel();
    });
});

