// SEKTION - Alberte, slide show, START
let slideIndex = 1;
let autoSlideInterval;
let isPlaying = true;

showSlides (slideIndex);

// slide kontrol, mellem slides
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

// start automatisk slide
function startAutoSlide () {
    autoSlideInterval = setInterval(function() {
        plusSlides (1);
    }, 5000);
}
// stop automatisk slide
function stopAutoSlide () {
    clearInterval(autoSlideInterval);
}

// pauseknap 
document.getElementById("slideshowPause").addEventListener("click", function(){
    if (isPlaying) {
        stopAutoSlide();
        this.textContent = "▶";
    } else {
        startAutoSlide();
        this.textContent = "⏸";
    }

    isPlaying = !isPlaying
});

startAutoSlide();

// Alberte's Javascript - SLUT
