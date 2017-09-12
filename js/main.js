let coins = 0;

let toIndia = 0;
let toAfrica = 0;
let toAsia = 0;
let toEurope = 0;
let toAmericas = 0;
let toAtlantis = 0;

let toIndiaCost = 10;
let toAfricaCost = 100;
let toAsiaCost = 1000;
let toEuropeCost = 10000;
let toAmericasCost = 100000;
let toAtlantisCost = 1000000;

let work = 0.5;

let savegame = null;

try {
    savegame = JSON.parse(localStorage.getItem("save"));
}
catch (error) {
    console.log(error);
}

try {
    if (typeof savegame.coins !== "undefined") coins = savegame.coins;
    document.getElementById("coins").innerHTML = coins;
    
} 

catch (error) {
    console.log(error);
}


try {

        
    if (typeof savegame.toIndia !== "undefined") toIndia = savegame.toIndia;
    if (typeof savegame.toAfrica !== "undefined") toAfrica = savegame.toAfrica;
    if (typeof savegame.toAsia !== "undefined") toAsia = savegame.toAsia;
    if (typeof savegame.toEurope !== "undefined") toEurope = savegame.toEurope;
    if (typeof savegame.toAmericas !== "undefined") toAmericas = savegame.toAmericas;
    if (typeof savegame.toAtlantis !== "undefined") toAtlantis = savegame.toAtlantis;

    document.getElementById( "toIndia" ).innerHTML = toIndia;
    document.getElementById( "toAfrica" ).innerHTML = toAfrica;
    document.getElementById( "toAsia" ).innerHTML = toAsia;
    document.getElementById( "toEurope" ).innerHTML = toEurope;
    document.getElementById( "toAmericas" ).innerHTML = toAmericas;
    document.getElementById( "toAtlantis" ).innerHTML = toAtlantis;
} 

catch (error) {
    console.log(error);
}

try {
    var indiaCost = Math.floor(toIndiaCost * Math.pow(1.1, toIndia  ));
    document.getElementById( "toIndiaCost" ).innerHTML = indiaCost;
    
    var africaCost = Math.floor(toAfricaCost * Math.pow(1.1, toAfrica  ));
    document.getElementById( "toAfricaCost" ).innerHTML = africaCost;

    var asiaCost = Math.floor(toAsiaCost * Math.pow(1.1, toAsia  ));
    document.getElementById( "toAsiaCost" ).innerHTML = asiaCost;
    
    var europeCost = Math.floor(toEuropeCost * Math.pow(1.1, toEurope  ));
    document.getElementById( "toEuropeCost" ).innerHTML = europeCost;
    
    var americasCost = Math.floor(toAmericasCost * Math.pow(1.1, toAmericas  ));
    document.getElementById( "toAmericasCost" ).innerHTML = americasCost;
    
    var atlantisCost = Math.floor(toAtlantisCost * Math.pow(1.1, toIndia  ));
    document.getElementById( "toAtlantisCost" ).innerHTML = atlantisCost;
} 

catch (error) {
    console.log(error);
}

var save = {
    coins: coins,
    toIndia: toIndia,
    toAfrica: toAfrica,
    toAsia: toAsia,
    toEurope: toEurope,
    toAmericas: toAmericas,
    toAtlantis: toAtlantis
}

console.log(save);

function coinClick(number) {
    coins = coins + number;
    document.getElementById("coins").innerHTML = coins;
};

function expandIndia() {
    var cost = Math.floor(toIndiaCost * Math.pow(1.1, toIndia));      //works out the cost of this cursor
    if (coins >= cost) {                                   //checks that the player can afford the cursor
        toIndia = toIndia + 1;                                     //increases number of cursors
        coins = coins - cost;                              //removes the cookies spent
        
        document.getElementById( "toIndia" ).innerHTML = toIndia;    //updates the number of cursors for the user
        document.getElementById('coins').innerHTML = coins;    //updates the number of cookies for the user
    };
    
    var nextCost = Math.floor(toIndiaCost * Math.pow(1.1, toIndia  ));    //works out the cost of the next cursor
    document.getElementById( "toIndiaCost" ).innerHTML = nextCost;  //updates the cursor cost for the user
};

function expandAfrica() {
    var cost = Math.floor(toAfricaCost * Math.pow(1.1, toAfrica));      //works out the cost of this cursor
    if (coins >= cost) {                                   //checks that the player can afford the cursor
        toAfrica = toAfrica + 1;                                     //increases number of cursors
        coins = coins - cost;                              //removes the cookies spent
        
        document.getElementById( "toAfrica" ).innerHTML = toAfrica;    //updates the number of cursors for the user
        document.getElementById('coins').innerHTML = coins;    //updates the number of cookies for the user
    };
    
    var nextCost = Math.floor(toAfricaCost * Math.pow(1.1, toIndia  ));    //works out the cost of the next cursor
    document.getElementById( "toAfricaCost" ).innerHTML = nextCost;  //updates the cursor cost for the user
};

function expandAsia() {
    var cost = Math.floor(toAsiaCost * Math.pow(1.1, toAsia));      //works out the cost of this cursor
    if (coins >= cost) {                                   //checks that the player can afford the cursor
        toAsia = toAsia + 1;                                     //increases number of cursors
        coins = coins - cost;                              //removes the cookies spent
        
        document.getElementById( "toAsia" ).innerHTML = toAsia;    //updates the number of cursors for the user
        document.getElementById('coins').innerHTML = coins;    //updates the number of cookies for the user
    };
    
    var nextCost = Math.floor(toAsiaCost * Math.pow(1.1, toAsia  ));    //works out the cost of the next cursor
    document.getElementById( "toAsiaCost" ).innerHTML = nextCost;  //updates the cursor cost for the user
};

function expandEurope() {
    var cost = Math.floor(toEuropeCost * Math.pow(1.1, toEurope));      //works out the cost of this cursor
    if (coins >= cost) {                                   //checks that the player can afford the cursor
        toEurope = toEurope + 1;                                     //increases number of cursors
        coins = coins - cost;                              //removes the cookies spent
        
        document.getElementById( "toEurope" ).innerHTML = toEurope;    //updates the number of cursors for the user
        document.getElementById('coins').innerHTML = coins;    //updates the number of cookies for the user
    };
    
    var nextCost = Math.floor(toEuropeCost * Math.pow(1.1, toEurope  ));    //works out the cost of the next cursor
    document.getElementById( "toEuropeCost" ).innerHTML = nextCost;  //updates the cursor cost for the user
};

function expandAmericas() {
    var cost = Math.floor(toAmericasCost * Math.pow(1.1, toAmericas));      //works out the cost of this cursor
    if (coins >= cost) {                                   //checks that the player can afford the cursor
        toAmericas = toAmericas + 1;                                     //increases number of cursors
        coins = coins - cost;                              //removes the cookies spent
        
        document.getElementById( "toAmericas" ).innerHTML = toAmericas;    //updates the number of cursors for the user
        document.getElementById('coins').innerHTML = coins;    //updates the number of cookies for the user
    };
    
    var nextCost = Math.floor(toAmericasCost * Math.pow(1.1, toAmericas  ));    //works out the cost of the next cursor
    document.getElementById( "toAmericasCost" ).innerHTML = nextCost;  //updates the cursor cost for the user
};

function expandAtlantis() {
    var cost = Math.floor(toAtlantisCost * Math.pow(1.1, toAtlantis));      //works out the cost of this cursor
    if (coins >= cost) {                                   //checks that the player can afford the cursor
        toAtlantis = toAtlantis + 1;                                     //increases number of cursors
        coins = coins - cost;                              //removes the cookies spent
        
        document.getElementById( "toAtlantis" ).innerHTML = toAtlantis;    //updates the number of cursors for the user
        document.getElementById('coins').innerHTML = coins;    //updates the number of cookies for the user
    };
    
    var nextCost = Math.floor(toAtlantisCost * Math.pow(1.1, toAtlantis  ));    //works out the cost of the next cursor
    document.getElementById( "toAtlantisCost" ).innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function () {
    //console.log(save);

    coinClick(toIndia);
    coinClick(toAfrica);
    coinClick(toAsia);
    coinClick(toEurope);
    coinClick(toAmericas);
    coinClick(toAtlantis);
}, 5000);

window.setInterval(function () {

    console.log("I save now");
    
    save = {
        coins: coins,
        toIndia: toIndia,
        toAfrica: toAfrica,
        toAsia: toAsia,
        toEurope: toEurope,
        toAmericas: toAmericas,
        toAtlantis: toAtlantis
    }
    
    console.log(save);

      localStorage.setItem("save", JSON.stringify(save));
}, 10000);