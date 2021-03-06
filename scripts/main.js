const drink = 0;
const counter = [0];

let btnPlus = document.getElementById("btnPlus")
let btnMinus = document.getElementById("btnMinus");
let btnMid = document.getElementById("btnMid");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Clicks
btnPlus.onclick = function(){
}

btnMinus.onclick = function(){
}

canvas.addEventListener('touchstart', handleTouchStart, false);
canvas.addEventListener('touchmove', handleTouchMovement, false);

var xDown = null;

function handleTouchStart(evt){
    const firtsTouch = getTouches(evt)[0];
    xDown = firtsTouch.clientX;
}

function handleTouchMovement(evt){
    if(!xDown){
        return;
    }

    var xUp = evt.touches[0].clientX;
    var xDiff = xDown - xUp;

}