const products = [
    {
        name: "Lille chokolade",
        brand: "Summerbird",
        price: "45,-",
        img: "../product_images/summerbird_lille.webp",
        category: "candy",
    },
    {
        name: "Stor chokolade",
        brand: "Summerbird",
        price: "69,-",
        img: "../product_images/summerbird_stor.webp",
        category: "candy",
    },
    {
        name: "Mixed sweets",
        brand: "Summerbird",
        price: "86,-",
        img: "../product_images/summerbird_mixed.webp",
        category: "candy",
    },
    {
        name: "Lille Mixed",
        brand: "Summerbird",
        price: "36,-",
        img: "../product_images/summerbird_mixed.webp",
        category: "candy",
    },
    {
        name: "Orange sweets",
        brand: "Summerbird",
        price: "60,-",
        img: "../product_images/summerbird_orange.webp",
        category: "candy",
    },
    {
        name: "Sølv æg",
        brand: "Summerbird",
        price: "150,-",
        img: "../product_images/summerbird_soelv.webp",
        category: "candy",
    },
    {
        name: "Body scrub",
        brand: "Meraki",
        price: "99,-",
        img: "../product_images/meraki_a_scrub.webp",
        category: "skincare",
    },    
    {
        name: "Barber børste",
        brand: "Meraki",
        price: "30,-",
        img: "../product_images/meraki_barber.webp",
        category: "skincare",
    },    
    {
        name: "Conditioner",
        brand: "Meraki",
        price: "100,-",
        img: "../product_images/meraki_conditioner.webp",
        category: "skincare",
    },    
    {
        name: "Cleansing foam",
        brand: "Meraki",
        price: "80,-",
        img: "../product_images/meraki_foam.webp",
        category: "skincare",
    },    
    {
        name: "Meraki herbs",
        brand: "Meraki",
        price: "25,-",
        img: "../product_images/meraki_herb.webp",
        category: "skincare",
    },    
    {
        name: "Multi balm",
        brand: "Meraki",
        price: "20,-",
        img: "../product_images/meraki_multi.webp",
        category: "skincare",
    },    
    {
        name: "Sugar scrub",
        brand: "Meraki",
        price: "40,-",
        img: "../product_images/meraki_s_scrub.webp",
        category: "skincare",
    },   
    {
        name: "Shampoo",
        brand: "Meraki",
        price: "100,-",
        img: "../product_images/meraki_shampoo.webp",
        category: "skincare",
    },
    {
        name: "Nicaragua special",
        brand: "KoffiRoast",
        price: "130,-",
        img: "../product_images/koffiroast_n.webp",
        category: "drinks",
    },
    {
        name: "Espresso Super",
        brand: "KoffiRoast",
        price: "130,-",
        img: "../product_images/koffiroast_s.webp",
        category: "drinks",
    },
    {
        name: "Æblemost",
        brand: "Naturfri",
        price: "30,-",
        img: "../product_images/most_naturfri.webp",
        category: "drinks",
    },
    {
        name: "Keramisk flag",
        brand: "Speedtsberg",
        price: "40,-",
        img: "../product_images/speedtsberg_flag.webp",
        category: "art",
    },
    {
        name: "Keramisk hus",
        brand: "Speedtsberg",
        price: "60,-",
        img: "../product_images/speedtsberg_hus.webp",
        category: "art",
    },
    {
        name: "Keramisk lysestage",
        brand: "Speedtsberg",
        price: "45,-",
        img: "../product_images/speedtsberg_lys.webp",
        category: "art",
    },
    {
        name: "Træ elefanter",
        brand: "Spring",
        price: "80,-",
        img: "../product_images/spring_elefanter.webp",
        category: "art",
    },
    {
        name: "Grønne lys",
        brand: "Liwira",
        price: "30,-",
        img: "../product_images/lys_groen.webp",
        category: "waxes",
    },
    {
        name: "Hvide lys",
        brand: "Vance kiblra",
        price: "30,-",
        img: "../product_images/lys_hvid.webp",
        category: "waxes",
    },
    {
        name: "Graviditets lys",
        brand: "Liwira",
        price: "35,-",
        img: "../product_images/lys_mave.webp",
        category: "waxes",
    },
    {
        name: "Siruis LED-Lys",
        brand: "Siruis",
        price: "35,-",
        img: "../product_images/sirius_I.webp",
        category: "waxes",
    },
        {
        name: "Høje LED-Lys",
        brand: "Siruis",
        price: "35,-",
        img: "../product_images/siruis_II.webp",
        category: "waxes",
    },
]

/* VARIABLER */
const categorySweets = document.getElementById('categorySweets');
const categorySkincare = document.getElementById('categorySkincare');
const categoryDrinks = document.getElementById('categoryDrinks');
const categoryArt = document.getElementById('categoryArt');
const categoryWaxes = document.getElementById('categoryWaxes');
const selectedProductList = document.getElementById('selectedProductList');

const cardBox = document.querySelectorAll('.card-box');

//Der oprettes et click event som kalder function choosecategory med parameteret "candy".
categorySweets.addEventListener('click', () => chooseCategory('candy'));
categorySkincare.addEventListener('click', () => chooseCategory('skincare'));
categoryDrinks.addEventListener('click', () => chooseCategory('drinks'));
categoryArt.addEventListener('click', () => chooseCategory('art'));
categoryWaxes.addEventListener('click', () => chooseCategory('waxes'));

//Opretter en function der opretter et nyt product array baseret på det vi filter fra det oprindelige array
function chooseCategory(chosenCategory) {
    const filteredProducts = products.filter(
        products => products.category === chosenCategory
    )

    //Switch er en kort formet if-else statement (kontrolstruktur)

    //Hvis kategorien er candy, kalder jeg på functionen createcard og sender det filteret 
    //array og nummer på hvilken div createcard skal køres i.
    switch (chosenCategory) {
        case "candy":
            if (cardBox[0].innerHTML !== ''){
                cardBox[0].innerHTML = '';
            } else {
                createCard(filteredProducts, 0); //<--- Dette sendes med til createCard som parameter
            };
        break;

        case "skincare":
            if (cardBox[1].innerHTML !== ''){
                cardBox[1].innerHTML = '';
            } else {
                createCard(filteredProducts, 1); //<--- Dette sendes med til createCard som parameter
            };
        break;

        case "drinks":
            if (cardBox[2].innerHTML !== ''){
                cardBox[2].innerHTML = '';
            } else {
                createCard(filteredProducts, 2); //<--- Dette sendes med til createCard som parameter
            };
        break;

        case "art":
            if (cardBox[3].innerHTML !== ''){
                cardBox[3].innerHTML = '';
            } else {
                createCard(filteredProducts, 3); //<--- Dette sendes med til createCard som parameter
            };
        break;

        case "waxes":
            if (cardBox[4].innerHTML !== ''){
                cardBox[4].innerHTML = '';
            } else {
                createCard(filteredProducts, 4); //<--- Dette sendes med til createCard som parameter
            };
        break;
    
        default:
        console.log("Vi fandt desværre ikke nogen kategori :(")
        break;
    }
};

function createCard(filteredProducts, cardBoxIndex){

    const showCards = document.createElement("div");
    showCards.classList.add("build-basket--cardbox");
    cardBox[cardBoxIndex].appendChild(showCards);

    for (let i = 0; i < filteredProducts.length; i++) {

        const createCardDiv = document.createElement("div");
        createCardDiv.classList.add("build-basket__card")
        showCards.appendChild(createCardDiv);

        const createImgBox = document.createElement("div");
        createImgBox.classList.add("build-basket__img-box");
        createImgBox.style.backgroundImage = `url(${filteredProducts[i].img})`;
        createCardDiv.appendChild(createImgBox);

        const createParagraphBox = document.createElement("div");
        createParagraphBox.classList.add("build-basket__p-box");
        createCardDiv.appendChild(createParagraphBox);

        const createParagraphName = document.createElement("p");
        createParagraphName.innerHTML = filteredProducts[i].name;
        createParagraphBox.classList.add("build-basket__p-name");
        createParagraphBox.appendChild(createParagraphName);
        
        const createParagraphBrand = document.createElement("p");
        createParagraphBrand.innerHTML = filteredProducts[i].brand;
        createParagraphBox.classList.add("build-basket__p-brand");
        createParagraphBox.appendChild(createParagraphBrand);
            
        const createParagraphPrice = document.createElement("p");
        createParagraphPrice.innerHTML = filteredProducts[i].price;
        createParagraphBox.classList.add("build-basket__p-price");
        createParagraphBox.appendChild(createParagraphPrice);

        createCardDiv.addEventListener('click', () => addToBasket(filteredProducts[i].name));
    }
}

const productsInBasket = [];

function addToBasket(selectedItem) {
    productsInBasket.push(selectedItem);
    
    let html = '';

    for (let i = 0; i < productsInBasket.length; i++) {
        html += `<p>${productsInBasket[i]}</p>`;
    }
    selectedProductList.innerHTML = html;
}

