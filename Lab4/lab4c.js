/*jshint esversion: 6 */
/*jshint browser: true */


//Part C
//Question C

let questionPartC = document.getElementById("questionPartC")
    .innerHTML = "<p>Write a small app that determines if a positive number entered by the user is part of" +
    "the Fibonacci sequence.<br>" + "The Fibonacci sequence has the starting values of: <br>" +
    "F<sub>0</sub> = 0, F<sub>1</sub>=1 <br>" + "And the recurrence relationship of <br> " +
    "F<sub>n + 1</sub> = F<sub>n</sub> + F<sub>n - 1</sub> </p> ";


//variables
let inputtedNumber;
let fibo_0 = 0,
    fibo_1 = 1,
    fibo_n = 0;
let concat = fibo_0 + ", " + fibo_1 + ", ";

do {
    inputtedNumber = Number(window.prompt("Type a number you think it's in the fibonacci sequence:"));
} while (isNaN(inputtedNumber) || inputtedNumber < 0);

while ((fibo_0 + fibo_1) < inputtedNumber) {

    fibo_n = fibo_0 + fibo_1;
    fibo_0 = fibo_1;
    fibo_1 = fibo_n;
    concat += (fibo_0 + fibo_1) >= inputtedNumber ? fibo_n : fibo_n + ", ";
}

let answerPartC = document.getElementById("answerPartC");

if (fibo_0 + fibo_1 === inputtedNumber)
    answerPartC.innerHTML = "<p>" + concat + ", <b>" + (fibo_0 + fibo_1) + "</b>.</p>";
else
    answerPartC.innerHTML = "<p>" + concat + "." + "Sorry, your number " + inputtedNumber + " is not in the" + " sequence. </p>";
