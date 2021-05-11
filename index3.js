var players = ["suraj", "ram", "sujan", "shova", "alpo"]; 
var scores = [10, 10, 30, 10, 5]; 

//finding the minimum scores in the array 
var minSoFar = scores[0]; 
var outPutText = "The players having minimum scores are: "; 

for(var i = 0; i < scores.length; i++) {
    if(scores[i] < minSoFar) {
        minSoFar = scores[i]; 
    }
}

for(var i = 0; i < scores.length; i++) {
    if(scores[i] === minSoFar) {
        outPutText += players[i] + " " + scores[i] + " scores." + "<br />"; 
    }
}

document.getElementById("output").innerHTML = outPutText; 