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