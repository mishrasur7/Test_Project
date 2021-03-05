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