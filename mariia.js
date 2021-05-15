//solving array problems in a logical way and printing the results in browser console 
//lets create an arrays with number and string values in it, please note that arrays are synchronized!

var names = ["suraj", "alpo", "mariia", "kasper", "juhani"];
var ages = [30, 24, 25, 45, 41]; 

//here the above mentioned arrays are in global scope, meaning you can access them all over this mariia.js file 
/*----------------------------------------------------------------------------*/
//Task 1 - Find the length of names array without using array.length method. 
/*----------------------------------------------------------------------------*/
//lets define a function that will add length by 1 until there is no any values in an array
function lengthOfArray(array) {
    var length = 0; 
    while(array[length] !== undefined) {
        length++; 
    }
    return length; 

}
 var namesArrayLength = lengthOfArray(names); 
 console.log("The length of names array is: " + namesArrayLength); 
 //This solution should work for any array 
/*----------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------*/


