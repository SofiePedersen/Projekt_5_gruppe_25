console.log("tester at javascript kører");

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

// Definerer variabler ud fra HTML-elementer
document.addEventListener("DOMContentLoaded", function () {
const form = document.getElementById("kontaktForm"); // Formular

  // event, der kører når brugeren trykker på send-knappen
  console.log("Formular fundet:", form);
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Forhindrer siden i at refreshe  

const emailInput = document.getElementById("email"); // emailfelt
const radios = document.querySelectorAll('input[name="henvendelse"]'); // Radios hentes fra DOM
const beskedTextarea = document.getElementById("besked"); // beskedfelt

// Funktion med for-loop, der tjekker hvilken radio-knap der er valgt 
function hentValgtHenvendelse() {
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        // Break for at stoppe loop så snart den valgte er fundet
        return radios[i].value;
      }
    }
    // Hvis ingen er valgt, returneres der "null"
    return null;
  }

// funktion, der tjekker om formularen kan godkendes
  function validerFormular() {
    const email = emailInput.value;
    const valgt = hentValgtHenvendelse();
    const besked = beskedTextarea.value;

    // Kontrolstruktur: if-else
  
    if (!email.includes("@")) {
      alert("E-mail skal være gyldig");
      return false;
    }
    if (valgt === null) {
      alert("Vælg hvorfor du henvender dig");
      return false;
    }
    if (besked.trim() === "") {
      alert("Du skal skrive en besked");
      return false;
    }

    //.trim gør, at den ikke godkender, hvis der f.eks. kun er indtastet mellemrum 
    return true; // Indtastede oplysninger er godkendt 
  }
    // Danner objekt med de indtastede oplysninger 

    if (validerFormular()) {
    const formData = {
      email: emailInput.value,
      henvendelse: hentValgtHenvendelse(),
      besked: beskedTextarea.value,
    };
      
      console.log("Formular data:");
      console.log("E-mail:", formData.email);
      console.log("Henvendelse:", formData.henvendelse);
      console.log("Besked:", formData.besked);

      alert("Tak for din besked, vi vender tilbage hurtigst muligt. - Liwira");

      form.reset(); // Nulstiller formularen, hvis den er godkendt

    } else {
      console.log("Fejl i input. Formularen blev ikke sendt.");
    }
    });
}); 
//Peters Javascript - SLUT