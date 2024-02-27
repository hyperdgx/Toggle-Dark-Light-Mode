let tuggu = document.getElementById("tuggu");
let source_parent = document.getElementById("source_parent");
let moder = document.getElementById("moder")
let logomode = document.getElementById("logomode");
let marq = document.getElementById("marq");
let dl = document.getElementById("dl");
let ns = document.getElementById("ns");
let inns = document.getElementById("inns");
const popsound = new Audio("./pop.wav")
const popsec = new Audio("./popsec.mp3")

function like(){

    if(tuggu.innerText == "toggle_on"){
        tuggu.innerText = "toggle_off";
        light();
        popsound.play();
    }
    else{
        tuggu.innerText = "toggle_on";
        dark();
        popsec.play();
    }
}

function light(){
    tuggu.style.fontVariationSettings = `'FILL' 1,'wght' 200,'GRAD' 0,'opsz' 48`;
    tuggu.style.transform = "translate(-50%,-50%) scale(1.2)"
    source_parent.style.background = "var(--secondary-color)";
    tuggu.style.color = "var(--primary-color)";
    moder.innerText = "Light Mode"
    moder.style.background = "var(--primary-color)";
    moder.style.color = "var(--secondary-color)";
    logomode.style.color = "var(--primary-color)";
    dl.style.color = "var(--primary-color)";
    dl.innerText = "LIGHT";
    ns.style.background = "var(--primary-color)";
    ns.style.color = "var(--secondary-color)";
}
function dark(){
    tuggu.style.fontVariationSettings = `'FILL' 0,'wght' 200,'GRAD' 0,'opsz' 48`;
    tuggu.style.transform = "translate(-50%,-50%) scale(1)"
    source_parent.style.background = "var(--primary-color)";
    tuggu.style.color = "var(--secondary-color)";
    moder.innerText = "Dark Mode"
    moder.style.background = "var(--secondary-color)";
    moder.style.color = "var(--primary-color)";
    logomode.style.color = "var(--secondary-color)";
    dl.style.color = "var(--secondary-color)";
    dl.innerText = "DARK";
    ns.style.background = "var(--secondary-color)";
    ns.style.color = "var(--primary-color)";
}