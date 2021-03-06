const drink = 0;
const counter = [0];

btnPlus = document.getElementById("btnPlus");
btnMinus = document.getElementById("btnMinus");
btnMid = document.getElementById("btnMid");

btnMidOut = [document.getElementById("btnMidOut"), document.getElementById("btnMidNE"), document.getElementById("btnMidSE"), document.getElementById("btnMidSW"), document.getElementById("btnMidNW")];

//Clicks
btnPlus.onclick = function(){
}

btnMinus.onclick = function(){
}

btnMid.ontouchstart = function(evt){
    btnMidOutMoveSmooth(0, 75);
}

btnMid.ontouchend = function(evt){
    btnMidOutMoveSmooth(75, 0);
}

/*canvas.addEventListener('touchstart', handleTouchStart, false);
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

}*/