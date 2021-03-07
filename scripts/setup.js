var mobile = false;
if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    mobile = true;
}

let btnPlus = document.getElementById("btnPlus")
let btnMinus = document.getElementById("btnMinus");

let btnMid = document.getElementById("btnMid");
let btnMidOut = [document.getElementById("btnMidOut"), document.getElementById("btnMidNE"), document.getElementById("btnMidSE"), document.getElementById("btnMidSW"), document.getElementById("btnMidNW")];

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let drinkTitle = document.getElementById("drinkTitle");
let drinkCounter = document.getElementById("drinkCounter");
let drinkAPC = document.getElementById("drinkAPC");

console.log("Check 1");