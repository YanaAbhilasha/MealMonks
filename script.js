const images = document.querySelectorAll('.green-image img');
let currentIndex = 0;

function showImage(index) {
    for (let i = 0; i < images.length; i++) {
        if (i === index) {
            images[i].style.display = 'block';
        } else {
            images[i].style.display = 'none';
        }
    }
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
}

document.querySelector('.left-arrow').addEventListener('click', prevImage);
document.querySelector('.right-arrow').addEventListener('click', nextImage);

// Show the first image initially
showImage(currentIndex);

document.querySelector('.left-arrow').addEventListener('click', prevImages);
document.querySelector('.right-arrow').addEventListener('click', nextImages);

// Show the first 3 images initially
showImages();




