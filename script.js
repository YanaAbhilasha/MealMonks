document.addEventListener('DOMContentLoaded', function() {
    const images1 = document.querySelectorAll('.green-image img');
    let currentIndex1 = 0;

    function showImage1(index) {
        for (let i = 0; i < images1.length; i++) {
            if (i === index) {
                images1[i].style.display = 'block';
            } else {
                images1[i].style.display = 'none';
            }
        }
    }

    function nextImage1() {
        currentIndex1++;
        if (currentIndex1 >= images1.length) {
            currentIndex1 = 0;
        }
        showImage1(currentIndex1);
    }

    function prevImage1() {
        currentIndex1--;
        if (currentIndex1 < 0) {
            currentIndex1 = images1.length - 1;
        }
        showImage1(currentIndex1);
    }

    document.querySelector('.left-arrow-green').addEventListener('click', prevImage1);
    document.querySelector('.right-arrow-green').addEventListener('click', nextImage1);

    // Show the first image initially
    showImage1(currentIndex1);


    const images2 = document.querySelectorAll('.gulal-image img');
    let currentIndex2 = 0;

    function showImage2(index) {
        for (let i = 0; i < images2.length; i++) {
            if (i === index) {
                images2[i].style.display = 'block';
            } else {
                images2[i].style.display = 'none';
            }
        }
    }

    function nextImage2() {
        currentIndex2++;
        if (currentIndex2 >= images2.length) {
            currentIndex2 = 0;
        }
        showImage2(currentIndex2);
    }

    function prevImage2() {
        currentIndex2--;
        if (currentIndex2 < 0) {
            currentIndex2 = images2.length - 1;
        }
        showImage2(currentIndex2);
    }

    document.querySelector('.left-arrow-gulal').addEventListener('click', prevImage2);
    document.querySelector('.right-arrow-gulal').addEventListener('click', nextImage2);

    // Show the first image initially
    showImage2(currentIndex2);
});
