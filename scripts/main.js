// SEKTION - Alberte, slide show, START
let slideIndex = 1;
showSlides (slideIndex);

// prev og next kontrol
function plusSlides (n) {
    showSlides (slideIndex += n);
}

function currentSlide (n) {
    showSlides (slideIndex = n);
}

// array
function showSlides (n) {
    let i;
    let slides = document.getElementsByClassName ("slide__box");
    let dots = document.getElementsByClassName ("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace (" active", "");
    };

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// automatisk slide
setInterval(function() {
    plusSlides (1);
}, 5000);

// Alberte's Javascript - SLUT