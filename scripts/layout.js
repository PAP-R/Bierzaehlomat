var pageSize = [null, null];

var pageMiddle = [null, null];

let someText = document.querySelector("h1");
if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // some code..
}
someText.textContent = navigator.userAgent;

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

const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

var margin = [25, 25];

canvas.style.position = "fixed";

windowSize() ? pageSizeUpdate() : null;

function pageSizeUpdate(){
    canvas.style.left = margin[0] + "px";
    canvas.setAttribute("width", (pageSize[0] - (margin[0] * 2)) + "px");

    canvas.style.top = margin[1] + "px";
    canvas.setAttribute("height", (pageSize[1] - (margin[1] * 2)) + "px");

    btnPlus.style.left = (pageMiddle[0] - 50) + "px";
    btnMinus.style.left = (pageMiddle[0] - 50) + "px";
    btnMid.style.left = (pageMiddle[0] - 100) + "px";

    btnPlus.style.top = (pageMiddle[1] - 50 - 90) + "px";
    btnMinus.style.top = (pageMiddle[1] -50 + 90) + "px";
    btnMid.style.top = (pageMiddle[1] - 100) + "px";
}

//Hover
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
canvas.ontouchstart = function(){
    canvas.style.color = "rgb(0, 0, 0)";
}

canvas.ontouchend = function(){
    canvas.style.color = "rgb(255, 255, 255)";
}