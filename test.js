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

//-------------------------------------------------------
var players = [];  

function addPlayer() {
    var inputPlayerName = document.getElementById("player").value;
    if (inputPlayerName === "" || isNaN(inputPlayerName) === false) {
        alert("Please put player's name in the field");
        document.getElementById("player").value = ""; 

    } else {
        players.push(inputPlayerName); 
        document.getElementById("player").value = ""; 
    }
}

function listPlayer() {
    for (var i = 0; i < players.length; i++){
        document.getElementById("listplayer").innerHTML += players[i] + "<br />";  

    }

}

function searchPlayer() {
   var nameInput = document.getElementById("name").value; 
    var count = 0;
    var outPutText; 
    for (var i = 0; i < players.length; i++) {
        if (nameInput === players[i]) {
            count++; 
            outPutText = "Player exists"; 
        }
    }
    if (count === 0) {
        outPutText = "Player doesn't exists."; 
    } 

    document.getElementById("pPlayer").innerHTML = outPutText; 
  
    /*
   var nameInput = document.getElementById("name").value; 
   var playerFound = false; 
   var outPutText; 

   for(var i = 0; i < player.length; i++) {
       if(player[i] === nameInput) {
           playerFound = true;
           outPutText = "Player found, " + player[i]; 
       }
   }

   if(playerFound === false) {
       outPutText =  nameInput + " not founnd"; 
   }

   document.getElementById("pPlayer").innerHTML = outPutText; 
   */
}

//-------------------------------------------------------
var numbers = []; 

function addToList() {
    var numText = document.getElementById("numbers").value; 
    var num = Number(numText); 
    if (numText === "" || isNaN(num) === true) {
        alert("Please enter a valid number"); 
    } else {
        numbers.push(num);
        document.getElementById("numbers").value = ""; 
    }
}
function listNumbers() {
    var outPutText = ""; 
    for (var i= 0; i < numbers.length; i++) {
        outPutText += numbers[i] + "<br />"; 
    }
    document.getElementById("listnumbers").innerHTML = outPutText; 
}

function calculateAverage() {
    var sum = 0; 
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i]; 
    }
    var average = sum / numbers.length; 
    document.getElementById("average").innerHTML = "The average of the above list of numbers is " + average.toFixed(2); 
}

function findMinimum() {
    //Let us consider that the first value in the list is minimum
    var minimum = numbers[0]; 
    for (var i = 1; i < numbers.length; i++) {
        if (minimum > numbers[i]) {
            minimum = numbers[i]; 
        }
    }
    document.getElementById("minimum").innerHTML = "The minimum value from the above list is " + minimum; 
}

function findMaximum() {
    //Lets consider that the first occurance in the list is the maximum number.
    var maximum = numbers[0]; 
    for (var i = 0; i < numbers.length; i++) {
        if (maximum < numbers[i]) {
            maximum = numbers[i]; 
        }
    }
    document.getElementById("maximum").innerHTML = "The maximum value from the above list is " + maximum; 

}

//-------------------------------------------------------
var x = 15; 
while(x >= 5) {
    x = x - 7; 
}
document.getElementById("while").innerHTML = x; 

//-------------------------------------------------------


function calculateTotalOay() {
    var hourInput = document.getElementById("hour").value; 
    var hour = Number(hourInput); 
    var totalPay; 
    if(hour <= 8) {
        totalPay = hour * 10; 
    } else {
        totalPay = 80 + (hour - 8) * 15; 
    }

    document.getElementById("result").innerHTML = totalPay; 

}

//-------------------------------------------------------

var teachers = ["suraj", "alpo", "mariia", "shova", "ram", "sujan", "kasper"]; 
var ages = [23, 24, 10, 23, 51, 53, 52]; 

function findTeacher() {
    var inputTeacher = document.getElementById("teacher").value; 
    var teacherFound = false; 
    var text; 
    for(var i = 0; i < teachers.length; i++) {
        if(teachers[i] === inputTeacher) {
            teacherFound = true; 
            text = teachers[i] + " found!"; 
        }
    }
    if(teacherFound === false) {
        text = inputTeacher + " not found!"; 
    }
    document.getElementById("presult").innerHTML = text; 
}

function totalAge() {
    var ageTotal = 0; 
    for(var i = 0; i < ages.length; i++) {
        ageTotal += ages[i]; 
    }

    document.getElementById("agetotal").innerHTML = ageTotal; 
}

function oldestAge() {
    var oldestSoFar = ages[0]; 
    var outPutText = ""; 
    for(var i = 0; i < ages.length; i++) {
        if(oldestSoFar < ages[i]) {
            oldestSoFar = ages[i]; 
        }
    }
    for(var i = 0; i < ages.length; i++) {
        if(oldestSoFar === ages[i]) {
            outPutText += teachers[i] +  " is oldest. His age is " + oldestSoFar + "<br />"; 
        } 
    }

    document.getElementById("ageResult").innerHTML = outPutText; 
}

function averageAge() {
    var sum = 0; 
    for(var i = 0; i < ages[i]; i++) {
        sum += ages[i]/ages.length; 
    }

    document.getElementById("averageAge").innerHTML = "Average age of all teachers is " + sum.toFixed(2); 
}

function youngestTeacher() {
    var youngestAgeSoFar = ages[0];
    var outPutText;  
    for(var i = 0; i < ages.length; i++) {
        if(youngestAgeSoFar > ages[i]) {
            youngestAgeSoFar = ages[i]; 
        }
    }
    for(var i = 0; i < ages.length; i++) {
        if(youngestAgeSoFar === ages[i]) {
            outPutText = teachers[i] + " is youngest. His age is " + youngestAgeSoFar; 
        }
    }
    document.getElementById("youngTeacher").innerHTML = outPutText; 
}
//Finding the teachers who has age greater than 25 

var teacherNameGreaterThanAge_25 = ""; 
for(var i = 0; i < ages.length; i++) {
    if(ages[i] > 23) {
        teacherNameGreaterThanAge_25 += teachers[i] + " age " + ages[i] + ","; 
    }
}

console.log(teacherNameGreaterThanAge_25); 


//This solution is not working need to fix this more..
function secondOldest() {
    var firstMaxSoFar = ages[0]; 
    var secondMax = undefined; 
    
    document.getElementById("secondoldest").innerHTML = outPutText; 
}
//-------------------------------------------------------

//This is just for testing purpose
 
//-------------------------------------------------------


var randomNum = "";
for(var i = 0; i <= 10; i++) {
    randomNum += Math.floor(Math.random() * 31 + 20) + "<br />"; 
}
console.log(randomNum); 