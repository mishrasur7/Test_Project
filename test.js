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
    var num = Math.floor(Math.random() * 51 + 50); 
    document.getElementById("number").innerHTML = num; 
}