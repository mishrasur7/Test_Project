 

for(var i = 0; i < 1; i++) {
    console.log("Suraj"); 
}


for(var i = 0; i <= 10; i++) {
    var randomNum = Math.floor(Math.random() * 51 + 200)
    console.log(randomNum); 
}


var players = ["suraj", "shova", "sujan", "ram"]; 
var scores = [107, 34, 185, 113]; 

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


 function secondBiggest() {
     var students = ["suraj", "sujan", "shova", "alpo", "mariia"]; 
     var points = [20, 30, 21, 45, 56];
     if(points.length < 1) {
         console.log("Error: Empty array!"); 
     } else {
         var maxSoFar = points[0]; 
         var secondMaxSoFar = undefined; 
         //defining a function to return the value of second maximum points
         function updateIfBigger(newValue) {
             if((secondMaxSoFar === undefined && newValue !== maxSoFar) || newValue > secondMaxSoFar) {
                 secondMaxSoFar = newValue; 
                 return secondMaxSoFar; 
             }
         }
         //finding the maximum and second maximum points

         for(var i = 0; i < points.length; i++) {
             if(points[i] > maxSoFar) {
                 var oldMaxSoFar = maxSoFar; 
                 maxSoFar = points[i]; 
                 secondMaxSoFar = updateIfBigger(oldMaxSoFar); 
             } else if(points[i] < maxSoFar) {
                 secondMaxSoFar = updateIfBigger(points[i]); 
             }
         }
         //finding the winner
         var winners = "The winners are: "; 
         for(var i = 0; i < points.length; i++) {
             if(maxSoFar === points[i]) {
                 winners += students[i] + " with points " + points[i]; 
             }
         }

         //finding the second winner 
         var secondWinner = "The second winners are: "; 
         if(secondMaxSoFar !== undefined) {
             for(var i = 0; i < points.length; i++) {
                 if(secondMaxSoFar === points[i]) {
                     secondWinner += students[i] + " with points " + points[i]; 
                 }
             }
         }
     }

     //////////////////////
     console.log(winners);
     console.log(secondWinner); 

     var a = {x:5,y:3,z:1}; 
     var b = {x:2,y:9,z:1}; 

     b.x = 7; 
     b = a; 
     a.x = a.x + b.x; 
     console.log(b.x); 


























     
    /*
    if(scores.length >= 1) {
         var maxSoFar = scores[0]; 
         var secondBiggestSoFar = undefined; 

         function updateIfBigger(newValue) {
             if((secondBiggestSoFar === undefined && newValue !== maxSoFar) || newValue > secondBiggestSoFar) {
                 secondBiggestSoFar = newValue; 
             }
         }
        for(var i = 0; i < scores.length; i++) {
            if(scores[i] > maxSoFar) {
                var oldMaxSoFar = maxSoFar; 
                maxSoFar = scores[i]; 
                updateIfBigger(oldMaxSoFar); 
            } else if(scores[i] < maxSoFar) {
                updateIfBigger(scores[i]); 
            }
        }

        var winnerNames = "The winners are: "; 
        for(var i = 0; i < scores.length; i++) {
            if(scores[i] === maxSoFar) {
                winnerNames += players[i] + ":" + scores[i] + " points"; 
            }
        }
        if(secondBiggestSoFar !== undefined) {
            var secondPlacerNames = "The second placers are: " ; 
            for(var i = 0; i < scores.length; i++) {
                if(scores[i] === secondBiggestSoFar) {
                    secondPlacerNames += players[i] + ":" + scores[i] + " points"; 
                }
            }
        }
        document.getElementById("result").innerHTML = winnerNames + "<br />" + secondPlacerNames; 
     } else {
        document.getElementById("result").innerHTML = "Error: Empty array!";  
     }
   */
 }
