var players = ["suraj", "ram", "sujan", "shova", "alpo"]; 
var scores = [10, 19, 30, 10, 5]; 

var result = ""; 
for(var i = 0; i < scores.length; i++) {
    if(scores[i] > 10) {
        result += players[i] + " score: " + scores[i] + " "; 
    }
}
console.log(result); 


//finding the minimum scores in the array 
var minSoFar = scores[0]; 
var secondMin = undefined; 

function updateIfSmaller(newValue) {
    if((secondMin === undefined && newValue !== minSoFar) || newValue > secondMin) {
        secondMin = newValue; 
        return secondMin; 
    }
}

for(var i = 0; i < scores.length; i++) {
    if(scores[i] < minSoFar) {
        var oldMinSoFar = minSoFar; 
        minSoFar = scores[i]; 
        secondMin = updateIfSmaller(oldMinSoFar); 
    } else if(scores[i] > minSoFar) {
        secondMin = updateIfSmaller(scores[i]); 
    }
}

var firstLooser = "First looser is "; 
for(var i = 0; i < scores.length; i++) {
    if(scores[i] === minSoFar) {
        firstLooser += players[i] + " score: " + scores[i]; 
    }
}

var secondLooser = "Second looser is "; 
if(secondMin !== undefined) {
    for(var i = 0; i < scores.length; i++) {
        if(scores[i] === secondMin) {
            secondLooser += players[i] + " score: " + scores[i]; 
        }
    }
}
document.getElementById("output").innerHTML = firstLooser + "<br />" + secondLooser; 

////////////////////////////////////////////////////////


var a = [1, 2, 3, 4];
var sum = 0; 
for(var i = 0; i < a.length; i++) {
    sum += a[i]; 
}
////////////////////////////////////////////////////////
var average = sum/a.length; 

console.log(average); 

function calculateSalary() {
var hourInput = document.getElementById("hour").value; 
if(hourInput.trim() === "" || isNaN(hourInput)) {
    alert("Please put your hours!"); 
} else {
    var hour = Number(hourInput);
    var totalSalary;  
    if(hour <= 8) {
        totalSalary = hour * 10; 
    } else {
        totalSalary = 80 + (hour-8) * 15; 
    }
    console.log(totalSalary); 
}
}

var total; 
for(var i = 0; i <= 2; i++){
    console.log(total += i); 
}

