let images = document.getElementsByClassName('images');
let sliderMove = document.getElementById('sliderMove');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const allImages = (images.length-1) * 800;
let currentPosition = 0;

next.addEventListener('click', function() {
    currentPosition += 800;
    if (currentPosition === allImages) {
        currentPosition = 0;
    } 
    sliderMove.style.right = currentPosition + 'px';
})

prev.addEventListener('click', function() {
    currentPosition -= 800;
    if (currentPosition === -800) {
        currentPosition = allImages-800;
    } 
    sliderMove.style.right = currentPosition + 'px';
})


