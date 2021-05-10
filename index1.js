 

for(var i = 0; i < 1; i++) {
    console.log("Suraj"); 
}


for(var i = 0; i <= 10; i++) {
    var randomNum = Math.floor(Math.random() * 51 + 200)
    console.log(randomNum); 
}


var players = ["suraj", "shova", "sujan", "ram"]; 
var socres = [10, 34, 15, 11]; 

//finding the total scores of all players 

var sum = 0; 

for(var i = 0; i < socres.length; i++) {
    sum += socres[i]; 
}

console.log("The total sum is " + sum); 

//finding the maximum score and the player with maximum score
