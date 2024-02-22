let tuggu = document.getElementById("tuggu");
let source_parent = document.getElementById("source_parent");
let moder = document.getElementById("moder")

function like(){

    if(tuggu.innerText == "toggle_on"){
        tuggu.innerText = "toggle_off";
        light();
    }
    else{
        tuggu.innerText = "toggle_on";
        dark();
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
}
function dark(){
    tuggu.style.fontVariationSettings = `'FILL' 0,'wght' 200,'GRAD' 0,'opsz' 48`;
    tuggu.style.transform = "translate(-50%,-50%) scale(1)"
    source_parent.style.background = "var(--primary-color)";
    tuggu.style.color = "var(--secondary-color)";
    moder.innerText = "Dark Mode"
    moder.style.background = "var(--secondary-color)";
    moder.style.color = "var(--primary-color)";
}