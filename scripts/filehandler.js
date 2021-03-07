const url = "drinks.json";

let drinks = {
    "drinkChoices": [0, 1],
    "drinkTitle": ["Bier"],
    "drinkCounter": [0],
    "drinkAPC": [0.5]
}

var drinkChoice;
var drinkTitleText;
var drinkCounterText;
var drinkAPCText;

function getData(){
    drinkChoice = drinks["drinkChoices"];
    drinkTitleText = drinks["drinkTitle"];
    drinkCounterText = drinks["drinkCounter"];
    drinkAPCText = drinks["drinkAPC"];
}

function prepareData(){
    drinks["drinkChoices"] = drinkChoice;
    drinks["drinkTitle"] = drinkTitleText;
    drinks["drinkCounter"] = drinkCounterText;
    drinks["drinkAPC"] = drinkAPCText;
}

function getFile(){
    const request = new XMLHttpRequest();
    
    request.open("GET", url, true);
    request.send();

    request.onload = function(){
        if(this.status == 4){
            drinks = request.response;
        }
    }

    getData();
}

function sendFile(){
    prepareData();

    const request = new XMLHttpRequest();

    request.open("PUT", url, true);
    request.send(JSON.stringify(drinks));
}