// GAME CODE : COOKIE CLICKER
// LANGAGE : JAVASCRIPT
// LANGUE : FRANCAIS ANGLAIS / FR / EN (0 IA UTILISEE ON EST JUSTE BILINGUE)


//  🗒️ - Constantes du Code : 


// ------Constantes HTML--------\\
const countDiv = document.getElementById('count');
const secDiv = document.getElementById('sec');
const block = document.getElementById('block');

// Text :
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');
// Text Power
const power1 = document.getElementById('power1');
const power2 = document.getElementById('power2');
const power3 = document.getElementById('power3');
const power4 = document.getElementById('power4');
// Images :
const image = document.querySelector('.image');
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
//nombre de tools
const nbr1 = document.querySelector("#nbr1");
const nbr2 = document.querySelector("#nbr2");
const nbr3 = document.querySelector("#nbr3");
const nbr4 = document.querySelector("#nbr4");
// Buttons :
const buyShovelButton = document.querySelector('.shop #add1');
const buyAxeButton = document.querySelector('.shop #add2');
const buyPickaxeButton = document.querySelector('.shop #add3');
const buySwordButton = document.querySelector('.shop #add4');
const buttonWorld = document.querySelector('.shop #levelup'); 

const main = document.querySelector('.main .cookie'); // divs pour Front End
const container = document.querySelector('.main .shop'); // divs pour Front End

// ------Constantes Strings---------\\
const secTitle = "/s";
const cookieTitleCount = " Cookies - Cookie-Cliker";
const cookieNone = "Cookies : none";
// ----------------------------------------\\


// -------Variables Objets et Class-------------\\

// Amélioration Outils prix

let shovelPrice = 15;
let axePrice = 100; 
let pickaxePrice = 1500; 
let swordPrice = 5000;

// Amélioration Cookies/s 
let shovelPower = 1; 
let axePower = 12; 
let pickaxePower = 77;
let swordPower = 160;

// Amélioration Niveau prix
let cavePrice = 300000;
let mine1Price = 1200000;
let mine2Price = 2400000;
let filonMinePrice = 4800000;
let netherPrice= 9600000;


// Boolean Activé ou non pour les améliorations
let shovel = false;
let axe = false;
let pickaxe = false;
let sword = false;


// Boolean pour les mondes : 
// let forestBool = false;
let caveBool = false;
let mine1Bool = false;
let mine2Bool = false;
let filonMineBool = false;
let netherBool = false;

let toolsCount = {
    shovel:0,
    axe:0,
    pickaxe:0,
    sword:0,
}


// ----------------------------------------\\


// ------Variables Globales----------\\
let count; // COMPTEUR DES COOKIES
let sec = 0; // COMPTEUR DES COOKIES PAR SECONDES 
let interval; // Variable Interval


// --- Fonctions GagneTemps --- \\

 // VISUEL


function updateAddCookie(nombre=0) { // Ajoute un Nombre de Cookie et Update le compteur
    let displayCount;
    count+=nombre;
    if (count >= 1000000000) { // MILLIARDS
        let millions = Math.floor(count / 1000000000); 
        let temp = Math.floor((count % 10000000) / 100000); 
        displayCount = millions + "Md" + temp; 
    } 
    else if (count >= 1000000) { // MILLIONS
        let millions = Math.floor(count / 1000000); 
        let temp = Math.floor((count % 1000000) / 10000); 
        displayCount = millions + "M" + temp; 
    } 
    else if(count<999999){ // BASIC
        displayCount = count; 
    }
    countDiv.innerText = displayCount; 
    document.getElementById('title').innerText = displayCount + cookieTitleCount;
    saveProgression();
}

function updateRmCookie(nombre){ // Enleve un Nombre de Cookie et Update le compteur
    let displayCount;
    count-=nombre;
    if (count >= 1000000000) { // MILLIARDS
        let milliard = Math.floor(count / 1000000000); 
        let reste = Math.floor((count % 10000000) / 100000); 
        displayCount = milliard + "Md" + reste; 
    } 
    else if (count >= 1000000) { // MILLIONS
        let millions = Math.floor(count / 1000000); 
        let reste = Math.floor((count % 1000000) / 10000); 
        displayCount = millions + "M" + reste; 
    } 
    else if(count<999999){ // Basic
        displayCount = count; 
    }
    countDiv.innerText = displayCount; 
    document.getElementById('title').innerText = displayCount + cookieTitleCount; 
    saveProgression();
}

function updateBackground(){ // UPDATE SHOP, COOKIE BG, TEXT
    title.style.background = 'url(./images/stonetxt.jpg)';
    main.style.background = 'url(./images/cave.png)';
    main.style.backgroundRepeat = 'no-repeat'
    main.style.backgroundPosition = 'center',
    main.style.backgroundSize = 'cover',
    container.style.background = 'url(./images/stonetxt.jpg)';
}

function update2() {
    main.style.background = 'url(./images/bg3.png)';
    title.style.background = 'url(./images/stonetxt.jpg)';
    main.style.backgroundRepeat = 'no-repeat'
    main.style.backgroundPosition = 'center',
    main.style.backgroundSize = 'cover',
    container.style.background = 'url(./images/stonetxt.jpg)';
    image1.setAttribute("src", "./images/Golden_Shovel.webp")
    image2.setAttribute("src", "./images/Golden_Axe.webp")
    image3.setAttribute("src", "./images/Golden_Pickaxe.webp")
    image4.setAttribute("src", "./images/Golden_Sword.webp")
    block.setAttribute("src", "./images/Gold_Ingot.webp")
}

function update3() {
    main.style.background = 'url(./images/bg4.png)';
    title.style.background = 'url(./images/stonetxt.jpg)';
    main.style.backgroundRepeat = 'no-repeat'
    main.style.backgroundPosition = 'center',
    main.style.backgroundSize = 'cover',
    container.style.background = 'url(./images/stonetxt.jpg)';
    image1.setAttribute("src", "./images/Iron_Shovel.webp")
    image2.setAttribute("src", "./images/Iron_Axe.webp")
    image3.setAttribute("src", "./images/Iron_Pickaxe.webp")
    image4.setAttribute("src", "./images/Iron_Sword.webp")
    block.setAttribute("src", "./images/Iron_Ingot.webp")
}

function update4() {
    main.style.background = 'url(./images/bg5.png)';
    title.style.background = 'url(./images/stonetxt.jpg)';
    main.style.backgroundRepeat = 'no-repeat'
    main.style.backgroundPosition = 'center',
    main.style.backgroundSize = 'cover',
    container.style.background = 'url(./images/stonetxt.jpg)';
    image1.setAttribute("src", "./images/Diamond_Shovel.webp")
    image2.setAttribute("src", "./images/Diamond_Axe.webp")
    image3.setAttribute("src", "./images/Diamond_Pickaxe.webp")
    image4.setAttribute("src", "./images/Diamond_Sword.webp")
    block.setAttribute("src", "./images/Diamant.webp")
}

function update5() {
    main.style.background = 'url(./images/bg6.png)';
    title.style.background = 'url(./images/stonetxt.jpg)';
    main.style.backgroundRepeat = 'no-repeat'
    main.style.backgroundPosition = 'center',
    main.style.backgroundSize = 'cover',
    container.style.background = 'url(./images/stonetxt.jpg)';
    image1.setAttribute("src", "./images/Netherite_Shovel.webp")
    image2.setAttribute("src", "./images/Netherite_Axe.webp")
    image3.setAttribute("src", "./images/Netherite_Pickaxe.webp")
    image4.setAttribute("src", "./images/Netherite_Sword.webp")
    block.setAttribute("src", "./images/Netherite_Ingot.webp")
}

function updateTools(){ // UPDATE TOOLS VISUAL
    image1.setAttribute("src", "./images/stone-shovel.png")
    image2.setAttribute("src", "./images/Stone-Axe.webp")
    image3.setAttribute("src", "./images/Stone-Pickaxe.webp")
    image4.setAttribute("src", "./images/Stone-Sword.webp")
    block.setAttribute("src", "./images/stone.png")
}
function updatePrice(){ // UPDATE PRICE OF TOOLS
    text1.innerText = shovelPrice;
    text2.innerText = axePrice;
    text3.innerText = pickaxePrice;
    text4.innerText = swordPrice;
}

function updateNbr1(){
    nbr1.innerText = toolsCount.shovel;
}
function updateNbr2(){
    nbr2.innerText = toolsCount.axe;
}
function updateNbr3(){
    nbr3.innerText = toolsCount.pickaxe;
}
function updateNbr4(){
    nbr4.innerText = toolsCount.sword;
}
function updatePower(){ // UPDATE POWER OF TOOLS /S
    power1.innerText = shovelPower + secTitle;
    power2.innerText = axePower + secTitle;
    power3.innerText = pickaxePower + secTitle;
    power4.innerText = swordPower + secTitle;
}

function saveProgression() { // SAVE LA PROGRESSION ⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️ A ENCAPSULER  // JSON
    localStorage.setItem('cookieSec', sec);
    localStorage.setItem('cookieCount', count);
    localStorage.setItem('toolsCount.shovel', toolsCount.shovel);
    localStorage.setItem('toolsCount.axe', toolsCount.axe);
    localStorage.setItem('toolsCount.pickaxe', toolsCount.pickaxe);
    localStorage.setItem('toolsCount.sword', toolsCount.sword);
    localStorage.setItem('shovelPrice', shovelPrice);
    localStorage.setItem('axePrice', axePrice);
    localStorage.setItem('pickaxePrice', pickaxePrice);
    localStorage.setItem('swordPrice', swordPrice);
    localStorage.setItem('shovelPower', shovelPower);
    localStorage.setItem('axePower', axePower);
    localStorage.setItem('pickaxePower', pickaxePower);
    localStorage.setItem('swordPower', swordPower);
    localStorage.setItem('shovel', shovel);
    localStorage.setItem('axe', axe);
    localStorage.setItem('pickaxe', pickaxe);
    localStorage.setItem('sword', sword);
    localStorage.setItem('caveBool', caveBool);
    localStorage.setItem('mine1Bool', mine1Bool);
    localStorage.setItem('mine2Bool', mine2Bool);
    localStorage.setItem('filonMineBool', filonMineBool);
}
function loadSave() { // LOAD SAUVEGARDE ⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️ A ENCAPSULER  // JSON
    // Pattern pour les INT :
    // variable = parseInt(localStorage.getitem('nomItem), Base de comptage || Valeur de base souhaitée); // valeur de base = null
    sec = parseInt(localStorage.getItem('cookieSec'), 10) || 0;
    count = parseInt(localStorage.getItem('cookieCount'), 10) || 0;
    toolsCount.shovel = parseInt(localStorage.getItem('toolsCount.shovel'), 10) || toolsCount.shovel;
    toolsCount.axe = parseInt(localStorage.getItem('toolsCount.axe'), 10) || toolsCount.axe;
    toolsCount.pickaxe = parseInt(localStorage.getItem('toolsCount.pickaxe'), 10) || toolsCount.pickaxe;
    toolsCount.sword = parseInt(localStorage.getItem('toolsCount.sword'), 10) || toolsCount.sword;
    shovelPrice = parseInt(localStorage.getItem('shovelPrice'), 10) || shovelPrice;
    axePrice = parseInt(localStorage.getItem('axePrice'), 10) || axePrice;
    pickaxePrice = parseInt(localStorage.getItem('pickaxePrice'), 10) || pickaxePrice;
    swordPrice = parseInt(localStorage.getItem('swordPrice'), 10) || swordPrice;
    shovelPower = parseInt(localStorage.getItem('shovelPower'), 10) || shovelPower;
    axePower = parseInt(localStorage.getItem('axePower'), 10) || axePower;
    pickaxePower = parseInt(localStorage.getItem('pickaxePower'), 10) || pickaxePower;
    swordPower = parseInt(localStorage.getItem('swordPower'), 10) || swordPower;

    // Pattern pour les Bools :
    // variable = localStorage.getitem('nomItem), VALEUR SOUHAITE || Valeur de base souhaitée // valeur de base = null
    shovel = localStorage.getItem('shovel') === 'true' || false;
    axe = localStorage.getItem('axe') === 'true' || false;
    pickaxe = localStorage.getItem('pickaxe') === 'true' || false;
    sword = localStorage.getItem('sword') === 'true' || false;
    caveBool = localStorage.getItem('caveBool') === 'true' || false;
    mine1Bool = localStorage.getItem('mine1Bool') === 'true' || false;
    mine2Bool = localStorage.getItem('mine2Bool') === 'true' || false;
    filonMineBool = localStorage.getItem('filonMineBool') === 'true' || false;
}

function retrieveTools() { // FONCTION POUR RELANCER LES EVENTS LISTENERS 
    // DECLA DES VARIABLES TOOLS TEMPORAIRES
    let s;
    let a;
    let p;
    let sw;
    let total;
    // MULTIPLICATION DU COUT EN COOKIES
    s = toolsCount.shovel * shovelPrice;
    a = toolsCount.axe * axePrice;
    p = toolsCount.pickaxe * pickaxePrice;
    sw = toolsCount.sword * swordPrice;
    // TOTAL DES OUTILS EN COOKIES
    total = s + a + p + sw; 
    // AJOUTER A LA BALANCE "TEMPORAIREMENT"
    count += total;
    // SERIES DE BOUCLES FOR POUR SIMULER DES CLIQUES SUR LES BOUTONS
    for (let i = 0; i != toolsCount.shovel; i++) {
        toolsCount.shovel -= 1;  //ENLEVER 1 CAR +=1 DANS LES BOUTONS (SUITE AU AJOUT TEMPORAIRE DE COOKIES)
        sec-=shovelPower;
        buyShovelButton.click(); 
    }
    for (let i = 0; i != toolsCount.axe; i++) {
        toolsCount.axe -= 1; //ENLEVER 1 CAR +=1 DANS LES BOUTONS (SUITE AU AJOUT TEMPORAIRE DE COOKIES)
        sec-=axePower;
        buyAxeButton.click();
    }
    for (let i = 0; i != toolsCount.pickaxe; i++) {
        // tools.pickaxes.lenght 
        toolsCount.pickaxe -= 1; //ENLEVER 1 CAR +=1 DANS LES BOUTONS (SUITE AU AJOUT TEMPORAIRE DE COOKIES)
        sec-=pickaxePower;
        buyPickaxeButton.click(); 
    }
    for (let i = 0; i != toolsCount.sword; i++) {
        toolsCount.sword -= 1; //ENLEVER 1 CAR +=1 DANS LES BOUTONS (SUITE AU AJOUT TEMPORAIRE DE COOKIES)
        sec-=swordPower;
        buySwordButton.click(); 
    }
}

function onStart(){
    if(count === 0){ // Si compteur à 0 affiche 0 cookies sur le titre
        document.getElementById('title').innerText = cookieNone;
    }
    loadSave();
    retrieveTools();
    updateAddCookie();
    updatePrice();
    updatePower();
    updateNbr1()
    updateNbr2()
    updateNbr3()
    updateNbr4()
    console.log(toolsCount);
    console.log(count);
}
// 🧪 -  Main Et Fonctions principales du jeu :


// 🍪 - Bouton Main Cookie +1;
image.addEventListener('click', () => {
    image.classList.toggle('active');
    // console.log("Cookie clicked. Current count:", count);
    updateAddCookie(1);
});

// 💞 - Bouton Bonus +1/s
buyShovelButton.addEventListener('click', () => {
    if(count>=shovelPrice){ // Si Nombre de Cookies est supérieur ou égal au prix du bouton
        toolsCount.shovel += 1;
        shovelPrice+=3;
        shovel = true;
        updatePrice();
        updateNbr1();
        console.log(toolsCount);
        updateRmCookie(shovelPrice)
        sec += shovelPower;
        secDiv.innerText = sec +secTitle;
        interval = setInterval(() => {
            image.click();
            updateAddCookie(shovelPower-1);
        }, 1000);
    }
    else if(count<shovelPrice){
        //("Pas assez de Cookies !");
    }
});

// 💞 - Bouton Bonus +2/s
buyAxeButton.addEventListener('click', () => {
    if(count>=axePrice){
        toolsCount.axe += 1;
        axe = true;
        axePrice+=15;
        updatePrice();
        updateNbr2();
        updateRmCookie(axePrice)
        sec += axePower;
        secDiv.innerText = sec +secTitle;
        interval = setInterval(() => {
            image.click(); // [1] - ANIMATION ET +1 AU COMPTEUR
            updateAddCookie(axePower-1);// [2] - Ajouter 1 cookies pour Matcher avec la Valeur de Sec (1+1=2)
        }, 1000);
    }
    else if(count<axePrice){
        //("Pas assez de Cookies !");
    }
});

// 💞 - Bouton Bonus +5/s
buyPickaxeButton.addEventListener('click', () => {
    if(count>=pickaxePrice){
        toolsCount.pickaxe += 1;
        pickaxe = true;
        pickaxePrice+=130;
        updatePrice();
        updateNbr3();
        updateRmCookie(pickaxePrice)
        sec += pickaxePower;
        secDiv.innerText = sec +secTitle;
        interval = setInterval(() => {
            image.click(); // [1] - ANIMATION ET +1 AU COMPTEUR
            updateAddCookie(pickaxePower-1); // [2] - Ajouter 4 cookies pour Matcher avec la Valeur de Sec (1+4=5)
        }, 1000);
    }
    else if(count<pickaxePrice){
        //("Pas assez de Cookies !");
    }
});

// 💞 - Bouton Bonus +15/s
buySwordButton.addEventListener('click', () => {
    if(count>=swordPrice){
        toolsCount.sword += 1;
        sword = true;
        swordPrice+=550;
        updatePrice();
        updateNbr4();
        updateRmCookie(swordPrice)
        sec += swordPower;
        secDiv.innerText = sec + secTitle;
        interval = setInterval(() => {
            image.click();  // [1] - ANIMATION ET +1 AU COMPTEUR
            updateAddCookie(swordPower-1); // [2] - Ajouter 14 cookies pour Matcher avec la Valeur de Sec (1+14=15)
        }, 1000);
    }
    else if(count<swordPrice){
        //("Pas assez de Cookies !");
    }
});


// Bouton Level Up
buttonWorld.addEventListener('click', () => { 
    // Function Pattern for Level Up 
    // Cave Level UP
    if(caveBool === true && mine1Bool === true && mine2Bool === true && filonMineBool === true && netherBool === true){
        document.location.href = './dragon/index.html'
    }

    if(caveBool === true && mine1Bool === true && mine2Bool === true && filonMineBool === true && netherBool === false){
        if(count>=cavePrice){
            if(shovel && axe && pickaxe && sword === true){
                update5();
                netherBool = true;
                cavePrice*=2;
                shovel=false;
                axe=false;
                pickaxe=false;
                sword=false;
                // Change Price Outils
                shovelPrice*=2;
                axePrice*=2;
                pickaxePrice*=2;
                swordPrice*=2;
                // x2 sur les gains des outils !! :
                shovelPower*=2;
                axePower*=2;
                pickaxePower*=2;
                swordPower*=2;
                // Enlever les cookies nécessaire au level up du porte monnaie de l'utilisateur
                updateRmCookie(cavePrice);
                  // Update visuel
                updatePrice();
                updatePower()

            }
            else{
                //("Vous Avez assez d'argent mais pas tout les outils !");
            };
        }
    else if(count<cavePrice){
        //("Pas assez de Cookies !");
        }
    }
    if(caveBool === true && mine1Bool === true && mine2Bool === true && filonMineBool === false && netherBool === false){
        if(count>=cavePrice){
            if(shovel && axe && pickaxe && sword === true){
                update4();
                filonMineBool = true;
                cavePrice*=2;
                shovel=false;
                axe=false;
                pickaxe=false;
                sword=false;
                // Change Price Outils
                shovelPrice*=2;
                axePrice*=2;
                pickaxePrice*=2;
                swordPrice*=2;
                // x2 sur les gains des outils !! :
                shovelPower*=2;
                axePower*=2;
                pickaxePower*=2;
                swordPower*=2;
                // Enlever les cookies nécessaire au level up du porte monnaie de l'utilisateur
                updateRmCookie(cavePrice);
                  // Update visuel
                updatePrice();
                updatePower()

            }
            else{
                //("Vous Avez assez d'argent mais pas tout les outils !");
            };
        }
    else if(count<cavePrice){
        //("Pas assez de Cookies !");
        }
    }

    if(caveBool === true && mine1Bool === true && mine2Bool === false && filonMineBool === false && netherBool === false){
        if(count>=cavePrice){
            if(shovel && axe && pickaxe && sword === true){
                update3();
                mine2Bool = true;
                cavePrice*=2;
                shovel=false;
                axe=false;
                pickaxe=false;
                sword=false;
                // Change Price Outils
                shovelPrice*=2;
                axePrice*=2;
                pickaxePrice*=2;
                swordPrice*=2;
                // x2 sur les gains des outils !! :
                shovelPower*=2;
                axePower*=2;
                pickaxePower*=2;
                swordPower*=2;
                // Enlever les cookies nécessaire au level up du porte monnaie de l'utilisateur
                updateRmCookie(cavePrice);
                  // Update visuel
                updatePrice();
                updatePower()

            }
            else{
                //("Vous Avez assez d'argent mais pas tout les outils !");
            };
        }
    else if(count<cavePrice){
        //("Pas assez de Cookies !");
        }
    }
    
    if(caveBool === true && mine1Bool === false && mine2Bool === false && filonMineBool === false && netherBool === false){
        if(count>=cavePrice){
            if(shovel && axe && pickaxe && sword === true){
                update2();
                mine1Bool = true;
                cavePrice*=2;
                shovel=false;
                axe=false;
                pickaxe=false;
                sword=false;
                // Change Price Outils
                shovelPrice*=2;
                axePrice*=2;
                pickaxePrice*=2;
                swordPrice*=2;
                // x2 sur les gains des outils !! :
                shovelPower*=2;
                axePower*=2;
                pickaxePower*=2;
                swordPower*=2;
                // Enlever les cookies nécessaire au level up du porte monnaie de l'utilisateur
                updateRmCookie(cavePrice);
                  // Update visuel
                updatePrice();
                updatePower()

            }
            else{
                //("Vous Avez assez d'argent mais pas tout les outils !");
            };
        }
    else if(count<cavePrice){
        //("Pas assez de Cookies !");
        }
    }
    
    if(caveBool === false && mine1Bool === false && mine2Bool === false && filonMineBool === false && netherBool === false){
        if(count>=cavePrice){
            if(shovel && axe && pickaxe && sword === true){
                cavePrice*=2;
                caveBool=true;
                shovel=false;
                axe=false;
                pickaxe=false;
                sword=false;
                // Change Price Outils
                shovelPrice*=2;
                axePrice*=2;
                pickaxePrice*=2;
                swordPrice*=2;
                // x2 sur les gains des outils !! :
                shovelPower*=2;
                axePower*=2;
                pickaxePower*=2;
                swordPower*=2;
                // Enlever les cookies nécessaire au level up du porte monnaie de l'utilisateur
                updateRmCookie(cavePrice);
                  // Update visuel
                updateBackground();
                updateTools();
                updatePrice();
                updatePower()

            }
            else{
                //("Vous Avez assez d'argent mais pas tout les outils !");
            };
        }
    else if(count<cavePrice){
        //("Pas assez de Cookies !");
        }
    }
    // Level Up for Mine
    
});


// START SCRIPT AFTER L'INITIALISATION 

// 🚦- Début du jeu et checkup nécessaires

onStart();