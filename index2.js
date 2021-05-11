var players = ["suraj", "ram", "shova", "sujan", "alpo"]; 
var scores = [10, 23, 43, 9, 13]; 

//finding the player name 
function searchPlayer() {
    var nameInput = document.getElementById("name").value; 

    var playerFound = false; 
    var outPutText; 

    for(var i = 0; i < players.length; i++) {
        if(players[i] === nameInput) {
            playerFound = true;
            outPutText = nameInput + " found!";  
        } 
    }

    if(playerFound === false) {
        outPutText = nameInput + " not found!"; 
    }
    document.getElementById("result").innerHTML = outPutText; 

}

//finding the maximum and second maximum scores
var maxSoFar = scores[0]; 
var secondMax = undefined; 

function update(newValue) {
    if((secondMax === undefined && newValue !== maxSoFar) || newValue > secondMax) {
        secondMax = newValue; 
        return secondMax; 
    }
}

for(var i = 0; i < scores.length; i++) {
    if(scores[i] > maxSoFar) {
        var oldMaxSoFar = maxSoFar; 
        maxSoFar = scores[i]; 
        secondMax = update(oldMaxSoFar); 
    } else if(scores[i] < maxSoFar) {
        secondMax = update(scores[i]); 
    }
}

var winners = "The winners are: "; 
for(var i = 0; i < scores.length; i++) {
    if(scores[i] === maxSoFar) {
        winners += players[i] + " with score " + scores[i]; 
    }
}

var secondWinners = "The second winners are: "; 
if(secondMax !== undefined) {
    for(var i = 0; i < scores.length; i++) {
        if(scores[i] === secondMax) {
            secondWinners += players[i] + " with score " + scores[i]; 
        }
    }
}
document.getElementById("output").innerHTML = winners + "<br />" + secondWinners; 
