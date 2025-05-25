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