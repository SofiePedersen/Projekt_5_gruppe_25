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


//Mikkel's Javascript - START

const burgerIcon = document.getElementById("burgermenu");
    const showMenu = document.getElementById("showMenu");

    burgerIcon.addEventListener("click", function () {
        if (showMenu.style.display === "block") {
            showMenu.style.display = "none";
        } else {
            showMenu.style.display = "block";
            showMenu.style.position = "absolute"
        }
    });

    const dropdownItems = [
        document.getElementById("gavekurve-dropdown-item"),
        document.getElementById("produkter-dropdown-item")
    ];

    dropdownItems.forEach(function (item) {
        item.addEventListener("click", function () {
            item.classList.toggle("open");
        });
    });

    const desktopDropdowns = document.querySelectorAll(".desktop-dropdown");

    desktopDropdowns.forEach((item) => {
        const trigger = item.querySelector("a");

        trigger.addEventListener("click", () => {
            // Luk andre åbne dropdowns først
            desktopDropdowns.forEach((el) => {
                if (el !== item) {
                    el.classList.remove("open");
                }
            });

            // Toggle den aktuelle dropdown
            item.classList.toggle("open");
        });
    });

const subDropdownItems = document.querySelectorAll(".has-sub-dropdown");

subDropdownItems.forEach(function (item) {
    const link = item.querySelector("a");
    link.addEventListener("click", function (e) {
        e.preventDefault(); // prevent the page from jumping
        e.stopPropagation();// prevent the even from bubbling up
        item.classList.toggle("open");
    });
});

    // Luk dropdowns ved klik udenfor
    document.addEventListener("click", (e) => {
        desktopDropdowns.forEach((item) => {
            if (!item.contains(e.target)) {
                item.classList.remove("open");
            }
        });
    });

//Mikkel's Javascript - SLUT

//Peters Javascript - START


//Peters Javascript - SLUT