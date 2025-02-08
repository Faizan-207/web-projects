let index = 0;
const images = document.querySelectorAll('.slider-image');

function changeImage() {
    images.forEach((img, i) => {
        img.classList.remove('active');
    });
    images[index].classList.add('active');
    index = (index + 1) % images.length;
}

setInterval(changeImage, 3000); // Change image every 3 seconds
