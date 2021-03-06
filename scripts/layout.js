var pageSize = [null, null];
var pageMiddle = [null, null];

var mobile = false;

if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    mobile = true;
}

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

let btnPlus = document.getElementById("btnPlus")
let btnMinus = document.getElementById("btnMinus");
let btnMid = document.getElementById("btnMid");

var btnOffset = 90;

let mouseCircle = document.getElementById("mouseCircle");
let mouseTextX = document.getElementById("mouseX");
let mouseTextY = document.getElementById("mouseY");

var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");

var margin = [25, 25];

canvas.style.position = "fixed";

windowSize() ? pageSizeUpdate() : null;

function pageSizeUpdate(){
    canvas.style.left = margin[0] + "px";
    canvas.setAttribute("width", (pageSize[0] - (margin[0] * 2)) + "px");

    canvas.style.top = margin[1] + "px";
    canvas.setAttribute("height", (pageSize[1] - (margin[1] * 2)) + "px");

    for(var i = 1; i * 250 < pageSize[0] && i * 100 < pageSize[1]; i++){
        btnPlus.width = i * 50; btnPlus.height = i * 50;
        btnMinus.width = i * 50; btnMinus.height = i * 50;
        btnMid.width = i * 100; btnMid.height = i * 100;
        btnOffset = i * 45;
    }

    btnPlus.style.left = (pageMiddle[0] - (btnPlus.width / 2)) + "px";
    btnMinus.style.left = (pageMiddle[0] - (btnMinus.width / 2)) + "px";
    btnMid.style.left = (pageMiddle[0] - (btnMid.width / 2)) + "px";

    btnPlus.style.top = (pageMiddle[1] - (btnPlus.height / 2) - btnOffset) + "px";
    btnMinus.style.top = (pageMiddle[1] - (btnMinus.height / 2) + btnOffset) + "px";
    btnMid.style.top = (pageMiddle[1] - (btnMid.height / 2)) + "px";
}

//Mouse Hover
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

//Canvas Move
//Mouse
canvas.ondragstart = function(){
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

canvas.ondragend = function(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

document.onmousemove = function(event){
    var mousePos = [event.clientX, event.clientY];
    
    mouseCircle.style.left = (mousePos[0] - 50) + "px";
    mouseCircle.style.top = (mousePos[1] - 50) + "px";

    mouseTextX.style.left = (mousePos[0] + 60) + "px";
    mouseTextX.style.top = (mousePos[1] - 50) + "px";
    mouseTextX.textContent = "X:" + mousePos[0];

    mouseTextY.style.left = (mousePos[0] + 60) + "px";
    mouseTextY.style.top = (mousePos[1] - 25) + "px";
    mouseTextY.textContent = "Y:" + mousePos[1];
}



//Touch
canvas.ontouchstart = function(){
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

canvas.ontouchend = function(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}