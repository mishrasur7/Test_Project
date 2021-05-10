 

for(var i = 0; i < 1; i++) {
    console.log("Suraj"); 
}


for(var i = 0; i <= 10; i++) {
    var randomNum = Math.floor(Math.random() * 51 + 200)
    console.log(randomNum); 
}


var players = ["suraj", "shova", "sujan", "ram"]; 
var scores = [10, 34, 15, 11]; 

//finding the total scores of all players 

var sum = 0; 

for(var i = 0; i < scores.length; i++) {
    sum += scores[i]; 
}

console.log("The total sum is " + sum); 

//finding the maximum score and the player name with maximum score

var maxSoFar = scores[0]; 
for(var i = 0; i < scores.length; i++) {
    if(scores[i] > maxSoFar) {
        maxSoFar = scores[i]; 
    }
}
 var outPutText; 
 for(var i = 0; i < players.length; i++) {
     if(maxSoFar === scores[i]) {
         outPutText = players[i] + " has the maximum score " + maxSoFar;  
     }
 }
 console.log(outPutText); 

 //Finding the minimum score and the player name with minimum score
 var minSoFar = scores[0]; 
 var outputText; 

 for(var i = 0; i < scores.length; i++) {
     if(scores[i] < minSoFar) {
         minSoFar = scores[i]; 
     }
 }

 for(var i = 0; i < players.length; i++) {
     if(minSoFar === scores[i]) {
         outputText = players[i] + " has the minimum score " + minSoFar; 
     }
 }

 console.log(outputText); 

 //Finding the average score of all players

 var average = sum/scores.length; 
 console.log("Average score of all players is " + average.toFixed(2)); 

 //finding the second highest score 
