// const  block = document.getElementById("block");
const dragon = document.querySelector(".dragon");
const life = document.querySelector("#life");
const explode = document.querySelector("#explode");
const button1 = document.querySelector("#add1");
const button2 = document.querySelector("#add2");
const button3 = document.querySelector("#add3");
const button4 = document.querySelector("#add4");
const screen = document.querySelector(".cookie");
//variables
let vie_boss = 101;
let interval1;
var myAudio = document.createElement("audio");
myAudio.src = "./sound/Minecraft TNT Explosion - Sound Effect (HD) (mp3cut.net).mp3";

// Prix Crystaux
let Crystaux1price = 10;
let Crystaux2price = 100; 
let Crystaux3price = 500; 
let Crystaux4price = 1000;

// Boolean Activé ou non pour les améliorations
let Crystaux1 = false;
let Crystaux2 = false;
let Crystaux3 = false;
let Crystaux4 = false;

let toolsCount = {
    Crystaux1,
    Crystaux2,
    Crystaux3,
    Crystaux4
}

// mort du boss
function dead(){
    dragon.style.display = "none";
    explode.style.display = "block"
    explode.style.annimationPlayState = "play"
    myAudio.play();
    vie_boss = 0;
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


if (vie_boss === 0) {
    clearInterval(interval1);
}

if (vie_boss != 0){
    // regene
    interval1 = setInterval(() => {
        if (vie_boss <= 100){
            vie_boss+=4;
        }
    }, 400);
    // actualisation de la barre de vie
    interval1 = setInterval(() => {
        life.style.gridTemplateColumns = vie_boss+"% 1fr";
    }, 10);
}

// Quand boss est cliker
dragon.addEventListener("click", () => {
    life.style.gridTemplateColumns = vie_boss+"% 1fr";
    //style dragon

    if(Crystaux1 && Crystaux2 && Crystaux3 && Crystaux4 === true){
        screen.style.display = "block";
    }
    
    dragon.classList.add("active");
    setTimeout(() => {
        console.log("active")
        dragon.classList.remove("active");
    },80);
    // + vie boss
    vie_boss -= 2;
    // mort boss
    if(vie_boss <= 0){
        dead();
        setTimeout(() => {
        explode.style.display = "none"
        },300);
        screen.style.background = "url(../images/End_Poem_Header.webp)";
        screen.style.backgroundRepeat = 'no-repeat'
        screen.style.backgroundPosition = 'center',
        screen.style.backgroundSize = 'cover',
        screen.style.zindex = "11";
        life.style.display = "none";
    }
    
});

button1.addEventListener('click', () => {
    if(count>=Crystaux1price){ // Si Nombre de Cookies est supérieur ou égal au prix du bouton
        Crystaux1 = true;
        updateRmCookie(Crystaux1price)
        toolsCount.Crystaux1 += 1;
    }
    else if(count<Crystaux1price){
        window.alert("Pas assez de Cookies !");
    }
});

// document.getElementsByClassName("life").style.gridTemplateColumns = `${vie_boss}% 1fr`;