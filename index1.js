 

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
         document.getElementById("result").innerHTML = "Empty array!"; 
     } else {
         var maxSoFar = points[0]; 
         var secondBiggestSoFar = undefined; 

         function updateIfBig(newValue) {
             if((secondBiggestSoFar === undefined && newValue !== maxSoFar) || newValue > secondBiggestSoFar) {
                 secondBiggestSoFar = newValue; 
                 return secondBiggestSoFar; 
             }
         }

         for(var i = 0; i < points.length; i++) {
             if(points[i] > maxSoFar) {
                 var oldMaxSoFar = maxSoFar; 
                 maxSoFar = points[i];
                 secondBiggestSoFar = updateIfBig(oldMaxSoFar); 
             } else if(scores[i] < maxSoFar) {
                 secondBiggestSoFar = updateIfBig(scores[i]); 
             }
         }

         var winners = "The winners are: "; 

         for(var i = 0; i < points.length; i++) {
             if(maxSoFar === points[i]) {
                winners += students[i] + " with points " + points[i]; 
             }
         }
         var secondPlacers = "The second biggest are: "; 

         if(secondBiggestSoFar !== undefined) {
             for(var i = 0; i < points.length; i++) {
                 if(secondBiggestSoFar === points[i]) {
                     secondPlacers += students[i] + " with points " + points[i]; 
                 }
             }

         }
         document.getElementById("result").innerHTML = winners + "<br />" + secondPlacers; 
     }

























     
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
