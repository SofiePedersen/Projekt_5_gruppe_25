//Peters Javascript - START

// Definerer variabler ud fra HTML-elementer
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("kontaktForm"); // Formular
    
      // event, der kører når brugeren trykker på send-knappen
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
    
      //Validering af e-mail ud over standard 
      // Regexpattern, der fortæller hvilke tegn der er nødvendige for validering
        function gyldigEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
          }

          // Kontrolstruktur: if-else 
        
        if (!gyldigEmail(email)) {
            alert("Indtast en gyldig e-mail");
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