const btnBeer05Plus = document.getElementById("btnBeer05Plus");
const btnBeer05Minus = document.getElementById("btnBeer05Minus");
const counterBeer05 = document.getElementById("counterBeer05");

const drinkCounter = [0, 0, 0, 0];

btnBeer05Plus.onclick = function(){
    drinkCounter[0]++;
    counterBeer05.textContent = drinkCounter[0];
}

btnBeer05Plus.onmouseenter = function(){
    btnBeer05Plus.setAttribute("src", "images/btnPlusHover.png");
}

btnBeer05Plus.onmouseleave = function(){
    btnBeer05Plus.setAttribute("src", "images/btnPlus.png");
}

btnBeer05Minus.onclick = function(){
    drinkCounter[0]--;
    counterBeer05.textContent = drinkCounter[0];
}

btnBeer05Minus.onmouseenter = function(){
    btnBeer05Minus.setAttribute("src", "images/btnMinusHover.png");
}

btnBeer05Minus.onmouseleave = function(){
    btnBeer05Minus.setAttribute("src", "images/btnMinus.png");
}