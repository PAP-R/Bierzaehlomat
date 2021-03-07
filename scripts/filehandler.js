const request = new XMLHttpRequest();
const url = "drinks.json";
request.open("GET", url);
request.send();

const drinks ={
    "drinkChoices": [0, 1],
    "drinkTitle": ["Bier"],
    "drinkCounter": [0],
    "drinkAPC": [0.5]
}

request.onload = function(){
    drinks = request.response;
}

var drinkChoice = drinks["drinkChoices"];
var drinkTitleText = drinks["drinkTitle"];
var drinkCounterText = drinks["drinkCounter"];
var drinkAPCText = drinks["drinkAPC"];