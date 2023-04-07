const sliderContent = document.querySelector('.slider');
const prevButton = sliderContent.querySelector('.prev');
const nextButton = sliderContent.querySelector('.next');
const sliderImage = sliderContent.querySelector('.image');

const imageName = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg'];
let currentImageIndex = 0;

function changeImage(index) {
    sliderImage.setAttribute('src', imageName[index]);
    if (index === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }

    if (index === imageName.length - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }

    currentImageIndex = index;
}

prevButton.addEventListener('click', () => {
    changeImage(currentImageIndex - 1);
});

nextButton.addEventListener('click', () => {
    changeImage(currentImageIndex + 1);
});

changeImage(0);