/*jshint esversion: 6 */
/*jshint browser: true */


//Part A
//Question A

let questionPartA = document.getElementById("questionPartA")
    .innerHTML = "<p>Ulimately we’re going to solve this problem:" +
    "Write a JavaScript program outputs a sequence of numbers starting and ending" +
    "at any numbers and incrementing by any amount. At the end the sum of that" +
    "sequence is outputted.</p>";

//variables
let inputStartNumber;
let inputEndNumber;
let inputIncrement;
let concatList = "";
let sum = 0;
//input
do {
    inputStartNumber = Number(window.prompt("Starting value:"));
    inputEndNumber = Number(window.prompt("Ending value:"));
    inputIncrement = Number(window.prompt("Increment value:"));
} while (inputStartNumber > inputEndNumber);


for (let i = inputStartNumber; i <= inputEndNumber; i += inputIncrement) {
    sum += i;
    concatList += i;
    concatList += (i + inputIncrement) >= inputEndNumber ? " = " : ", ";
}

//output answer
let answerPartA = document.getElementById("answerPartA")
    .innerHTML = "<p>" + concatList + sum + "</p>";
