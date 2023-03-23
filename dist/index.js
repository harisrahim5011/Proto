"use strict";
let sliderDiv = document.getElementById('sliderImg');
const sliderImges = ['./images/sliderPics/pic1.jpg', './images/sliderPics/pic2.jpg', './images/sliderPics/pic3.jpg', './images/sliderPics/pic4.jpg'];
setInterval(sliderImageChanger, 3000);
let imageIndex = 0;
function sliderImageChanger(images = sliderImges) {
    sliderDiv.src = sliderImges[imageIndex];
    if (imageIndex < images.length - 1) {
        imageIndex++;
    }
    else {
        imageIndex = 0;
    }
}
