var slideIndex = 1;
showSlides(slideIndex);

// Вперед/назад элементы управления
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Элементы управления миниатюрами изображений
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function scope() {
    var scoped = document.getElementsByClassName("scoped-img");
    var black = document.getElementById("darker");
    black.style.display = "flex";
    for (i = 0; i < scoped.length; i++){
        scoped[i].style.display = "none";
    }

    scoped[slideIndex-1].style.display = "flex";
}

function hideBlack() {
    var scoped = document.getElementsByClassName("scoped-img");
    var black = document.getElementById("darker");
    black.style.display = "none";
    for (i = 0; i < scoped.length; i++){
        scoped[i].style.display = "none";
    }
}