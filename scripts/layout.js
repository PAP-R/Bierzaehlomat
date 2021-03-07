var pageSize = [null, null];
var pageMiddle = [null, null];



function windowSize(){
    if(typeof window.innerWidth != 'undefined'){
        pageSize[0] = window.innerWidth;
        pageSize[1] = window.innerHeight;
        pageMiddle[0] = pageSize[0] / 2;
        pageMiddle[1] = pageSize[1] / 2;
        return true;
    }
    return false;
}
window.onresize = function(){
    windowSize() ? pageSizeUpdate() : null;
}

var btnOffset = 90;
var margin = [25, 25];
var size = [0, 0, 0];

function textSet(){
    drinkTitle.textContent = drinkTitle[drinkChoice[0]];
    drinkAmount.textContent = drinkAmount[drinkChoice[0]];
    drinkAPC.textContent = drinkAPC[drinkChoice[0]];
}

textSet();

canvas.style.position = "fixed";

windowSize() ? pageSizeUpdate() : null;

function pageSizeUpdate(){
    /*if(drinkChoice[0] == drinkChoice[1]){
        pageSizeUpdateNew();
    } else {*/
        pageSizeUpdateNormal();
    //}
}

function pageSizeUpdateNormal(){
    canvas.style.left = margin[0] + "px";
    canvas.setAttribute("width", (pageSize[0] - (margin[0] * 2)) + "px");

    canvas.style.top = margin[1] + "px";
    canvas.setAttribute("height", (pageSize[1] - (margin[1] * 2)) + "px");
    
    size = [0, parseInt(pageSize[0] / 100), parseInt(pageSize[1] / 100)];
    size[1] < size[2] ? size[0] = size[1] : size[0] = size[2];
    btnPlus.width = size[0] * 25; btnPlus.height = size[0] * 25;
    btnMinus.width = size[0] * 25; btnMinus.height = size[0] * 25;
    btnMid.width = size[0] * 50; btnMid.height = size[0] * 50;
    btnOffset = size[0] * 22.5;

    btnPlus.style.left = (pageMiddle[0] - (btnPlus.width / 2)) + "px";
    btnMinus.style.left = (pageMiddle[0] - (btnMinus.width / 2)) + "px";
    btnMid.style.left = (pageMiddle[0] - (btnMid.width / 2)) + "px";

    btnPlus.style.top = (pageMiddle[1] - (btnPlus.height / 2) - btnOffset) + "px";
    btnMinus.style.top = (pageMiddle[1] - (btnMinus.height / 2) + btnOffset) + "px";
    btnMid.style.top = (pageMiddle[1] - (btnMid.height / 2)) + "px";

    btnMidOutMove(0);
}

function pageSizeUpdateNew(){
    canvas.style.left = margin[0] + "px";
    canvas.setAttribute("width", (pageSize[0] - (margin[0] * 2)) + "px");

    canvas.style.top = margin[1] + "px";
    canvas.setAttribute("height", (pageSize[1] - (margin[1] * 2)) + "px");
    
    size = [0, parseInt(pageSize[0] / 100), parseInt(pageSize[1] / 100)];
    size[1] < size[2] ? size[0] = size[1] : size[0] = size[2];
    btnPlus.width = size[0] * 25; btnPlus.height = size[0] * 25;
    btnMinus.width = size[0] * 25; btnMinus.height = size[0] * 25;
    btnMid.width = size[0] * 50; btnMid.height = size[0] * 50;
    btnOffset = size[0] * 22.5;

    btnPlus.style.left = (pageMiddle[0] - (btnPlus.width / 2)) + "px";
    btnMinus.style.left = (pageMiddle[0] - (btnMinus.width / 2)) + "px";
    btnMid.style.left = (pageMiddle[0] - (btnMid.width / 2)) + "px";

    btnPlus.style.top = (pageMiddle[1] - (btnPlus.height / 2)) + "px";
    btnMinus.style.top = (pageMiddle[1] - (btnMinus.height / 2)) + "px";
    btnMid.style.top = (pageMiddle[1] - (btnMid.height / 2)) + "px";

    btnMidOutMove(0);
}

function btnMidOutSize(size, offset){
    var os = offset / 50;
    for(var j = 1; j < 5; j++){
        btnMidOut[j].width = (size + os) * 15; btnMidOut[j].height = (size + os) * 22.5;
    }
}

function btnMidOutMove(offset){
    btnMidOutSize(size[0], offset);

    btnMidOut[1].style.right = (pageMiddle[0] - (btnMid.width) / 2) - offset + "px";
    btnMidOut[1].style.bottom = pageMiddle[1] + offset / 2 + "px";
    
    btnMidOut[2].style.right = (pageMiddle[0] - (btnMid.width) / 2) - offset + "px";
    btnMidOut[2].style.top = pageMiddle[1] + offset / 2 + "px";

    btnMidOut[3].style.left = (pageMiddle[0] - (btnMid.width) / 2) - offset + "px";
    btnMidOut[3].style.top = pageMiddle[1] + offset / 2 + "px";
    
    btnMidOut[4].style.left = (pageMiddle[0] - (btnMid.width) / 2) - offset + "px";
    btnMidOut[4].style.bottom = pageMiddle[1] + offset / 2 + "px";
}

var btnMidInterval = null;
function btnMidOutMoveSmooth(start, end){
    var offset = start;
    if(start <= end){
    }
    clearInterval(btnMidInterval);
    btnMidInterval = setInterval(frame, 0.1);
    function frame(){
        if(start <= end){
            btnMidOut[0].style.visibility = "visible";
            btnMid.style.visibility = "hidden";
            if(offset >= end){
                clearInterval(btnMidInterval);
            } else {
                btnMidOutMove(offset);
                offset++;
            }
        } else {
            if(offset <= end){
                btnMid.style.visibility = "visible";
                btnMidOut[0].style.visibility = "hidden";
                clearInterval(btnMidInterval);
            } else {
                btnMidOutMove(offset);
                offset--;
            }
        }
    }
    btnMidOutMove(end);
}

//Mouse Hover
if(!mobile){
    btnPlus.onmouseenter = function(){
        btnPlus.setAttribute("src", "images/btnPlusHover.png");
    }

    btnPlus.onmouseleave = function(){
        btnPlus.setAttribute("src", "images/btnPlus.png");
    }

    btnMinus.onmouseenter = function(){
        btnMinus.setAttribute("src", "images/btnMinusHover.png");
    }

    btnMinus.onmouseleave = function(){
        btnMinus.setAttribute("src", "images/btnMinus.png");
    }
}

//Canvas Move
/*if(!mobile){
    //Mouse
    document.onmousemove = function(event){
        var mousePos = [event.clientX, event.clientY];
        
        cursorCircle.style.left = (mousePos[0] - 50) + "px";
        cursorCircle.style.top = (mousePos[1] - 50) + "px";

        cursorTextX.style.left = (mousePos[0] + 60) + "px";
        cursorTextX.style.top = (mousePos[1] - 50) + "px";
        cursorTextX.textContent = "X:" + mousePos[0];

        cursorTextY.style.left = (mousePos[0] + 60) + "px";
        cursorTextY.style.top = (mousePos[1] - 25) + "px";
        cursorTextY.textContent = "Y:" + mousePos[1];
    }
} else {
    //Touch
    document.ontouchmove = function(event){
        event.preventDefault();
        var mousePos = [event.targetTouches[0].clientX, event.targetTouches[0].clientY];
        
        cursorCircle.style.left = (mousePos[0] - 50) + "px";
        cursorCircle.style.top = (mousePos[1] - 50) + "px";

        cursorTextX.style.left = (mousePos[0] + 60) + "px";
        cursorTextX.style.top = (mousePos[1] - 50) + "px";
        cursorTextX.textContent = "X:" + mousePos[0];

        cursorTextY.style.left = (mousePos[0] + 60) + "px";
        cursorTextY.style.top = (mousePos[1] - 25) + "px";
        cursorTextY.textContent = "Y:" + mousePos[1];
    }
}*/

