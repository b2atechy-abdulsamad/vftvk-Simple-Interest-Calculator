function compute() {
    //Get the values and calculate 
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var yearInTheFuture = new Date().getFullYear() + years;
    //Create the Interest text
    document.getElementById("result").innerHTML = 
        "Interest : If you deposit <mark>" + principal + "</mark>,<br/>\n" +
        "at an interest rate of <mark>" + rate + "%</mark>,<br/>\n" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/>\n " +
        "in the year <mark>" + yearInTheFuture + "</mark>";

}

//Update the rate value
function getSliderValue() {
    document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value;
}

//Check for positive value
function validateAmount() {
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}