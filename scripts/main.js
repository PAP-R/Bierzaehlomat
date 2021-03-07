

function changeDrink(direction){
    if(drinkChoice[0] + direction > drinkChoice[1]){
        return;
    } else if(drinkChoice[0] + direction < 0){
        return;
    } else if(drinkChoice[0] + direction == drinkChoice[1]){
        drinkChoice[0] =+ direction;
        creteNewDrink();
    } else {
        drinkChoice[0] =+ direction;
        drinkTitle.textContent = drinkTitleText[drinkChoice[0]];
        drinkAmount.textContent = drinkCounter[drinkChoice[0]];
    }
}

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

var touchPos = [[0, 0], [0, 0], [0, 0]];
var canvasPos = [0, 0];
canvas.ontouchstart = function(evt){
    evt.preventDefault();
    touchPos[0] = [evt.targetTouches[0].clientX, evt.targetTouches[0]. clientY];
    canvasPos = [parseInt(canvas.style.left), parseInt(canvas.style.top)];
}

canvas.ontouchmove = function(evt){
    evt.preventDefault();
    touchPos[1] = [evt.targetTouches[0].clientX, evt.targetTouches[0].clientY];

    touchPos[2] = [touchPos[1][0] - touchPos[0][0], touchPos[1][1] - touchPos[0][1]];
    
    canvas.style.left = canvasPos[0] + touchPos[2][0] + "px";

    console.log(touchPos[0], touchPos[1], touchPos[2]);
}

canvas.ontouchend = function(evt){
    if(parseInt(canvas.style.left) >= pageMiddle[0]){
        console.log('Tab nach Links');
    } else if(parseInt(canvas.style.left) + parseInt(canvas.width) <= pageMiddle[0]){
        console.log('Tab nach Rechts');
    }
    windowSize() ? pageSizeUpdate() : null;
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