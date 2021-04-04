function showGreetings() {
    document.getElementById("pOutput").innerHTML = "Hello Sir, good to see you here"; 
}

function showDateAndTime () {
    document.getElementById("pOutPut").innerHTML = "You have a following date and time in your location " + "<br />" + Date(); 
}

function showYourEmail() {
    var email = document.getElementById("textEmail").value; 
    if (isNaN(email) === false) {
        alert("Please enter your email address"); 
    } 
    document.getElementById("poutPut").innerHTML = "Your email address is " + email; 
}

function showPriceWithTax() {
    var price = Number(document.getElementById("price").value); 
    var priceWithTax = price + price * 0.24; 
    document.getElementById("withTax").innerHTML = "Final price with tax is " + priceWithTax.toFixed(2) + " euros !"; 
}

function turnOnTheLight() {
    document.getElementById("myImage").src = "images/bulbon.gif"; 
}

function turnOffTheLight() {
    document.getElementById("myImage").src = "images/bulboff.gif"; 
}

function styleChange() {
    document.getElementById("style").style.fontSize = "50px"; 
    document.getElementById("style").style.color = "red"; 
}

function changeColor() {
    document.getElementById("color").style.color = "royalblue"; 
}
//-------------------------------------------------------
function showAgeCategory() {
    var ageText = document.getElementById("age").value; 
    var age = Number(ageText); 
    var outPutText; 
    if (isNaN(age) === true || ageText === "") {
        alert("Please kindly enter your age in number format!"); 
    } else if (age < 0 || age > 122) {
        outPutText = "Please enter an age between 0 and 122"; 
    } else if (age > 0 && age < 19) {
        outPutText = "You are minor citizen"; 
    } else if (age > 18 && age < 66) {
        outPutText = "You are an adult citizen"; 
    } else {
        outPutText = "You are senior citizen"; 
    }
    document.getElementById("ageOutPut").innerHTML = outPutText;  
}
//-------------------------------------------------------
function randomNumber() {
    var i = 1; 
    while (i <= 10) {
        var num = Math.floor(Math.random() * 51 + 50); 
        document.getElementById("number").innerHTML += num + "<br />"; 
        i++; 
    }
   
}

for (var i = 0; i > -10; i-=2) {
    console.log(i); 
}

//-------------------------------------------------------
var player = ["ram", "suraj", "sujan"];  

function addPlayer() {
    var inputPlayerName = document.getElementById("player").value;
    if (inputPlayerName === "" || isNaN(inputPlayerName) === false) {
        alert("Please put player's name in the field");
        document.getElementById("player").value = ""; 

    } else {
        player.push(inputPlayerName); 
        document.getElementById("player").value = ""; 
    }
}

function listPlayer() {
    for (var i = 0; i < player.length; i++){
        document.getElementById("listplayer").innerHTML += player[i] + "<br />";  

    }

}

function searchPlayer() {
    var nameInput = document.getElementById("name").value; 
    var count = 0; 
    for (var i = 0; i < player.length; i++) {
        if (nameInput === player[i]) {
            count++; 
        }
    }
    if (count === 0) {
        document.getElementById("pPlayer").innerHTML = "Player doesn't exists."; 
    } else {
        document.getElementById("pPlayer").innerHTML = "Player exists."; 
    }
}