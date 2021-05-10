 

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
 
