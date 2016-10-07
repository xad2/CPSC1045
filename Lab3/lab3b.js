/*jshint esversion: 6 */
/*jshint browser: true */


//Part A
//Question
let partBQst = document.getElementById("partBQst")
    .innerHTML = "<p>Create	a	simple	math	quiz where	you	will	use	prompt	to	obtain	input	and	ultimately" +
    "display	the	results	of	the	quiz	onto	the	web-page itself</p>";

//variables
let num1, num2, num3;
let checkA = false,
    checkB = false,
    checkC = false,
    checkD = false,
    checkE = false;
let inputA, inputB, inputC, inputD, inputE;
let questAString, questBString, questCString, questDString, questEString;
let questAans, questBans, questCans, questDans, questEans;
let grade = 0;

//random numbers
num1 = Math.floor((Math.random() * 10) + 1);
num2 = Math.floor(((Math.random() / 2.5) * 10) + 1);
num3 = Math.floor(((Math.random() / 2) * 10) + 1);

//for each question:
//build the string, prompt user and convert answer to number, calculate correct answer, check if input is the correct answer
questAString = num1 + " + " + num2 + " - " + num3 + " = ?";
inputA = Number(window.prompt(questAString));
questAans = num1 + num2 - num3;
if (inputA == questAans) {
    checkA = true;
    grade++;
} else if (inputA === null || isNaN(inputA) || inputA === '')
    inputA = 'Not answered or illegal value.';

questBString = num2 + " * " + num1 + " - " + num3 + " = ?";
inputB = Number(window.prompt(questBString));
questBans = num2 * num1 - num3;
if (inputB == questBans) {
    checkB = true;
    grade++;
} else if (inputB === null || isNaN(inputB) || inputB === '')
    inputB = 'Not answered or illegal value.';

questCString = num2 + " - " + num3 + " * " + num1 + " = ?";
inputC = Number(window.prompt(questCString));
questCans = num2 - num3 * num1;
if (inputC == questCans) {
    checkC = true;
    grade++;
} else if (inputC === null || isNaN(inputC) || inputC === '')
    inputC = 'Not answered or illegal value.';

questDString = num1 + " * " + num3 + " + " + num2 + " = ?";
inputD = Number(window.prompt(questDString));
questDans = num1 * num3 + num2;
if (inputD == questDans) {
    checkD = true;
    grade++;
} else if (inputD === null || isNaN(inputD) || inputD === '')
    inputD = 'Not answered or illegal value.';

questEString = num3 + " * " + num2 + " * " + num1 + " = ?";
inputE = Number(window.prompt(questEString));
questEans = num3 * num2 * num1;
if (inputE == questEans) {
    checkE = true;
    grade++;
} else if (inputE === null || isNaN(inputE) || inputE === '')
    inputE = 'Not answered or illegal value.';

//output
let output = document.getElementById("partBans");

output.innerHTML = "<h4>" + questAString + "</h4>" + "<p>Your answer: <b>" + inputA + "</b></p>";
if (checkA)
    output.innerHTML += "<p>Your answer is <b>correct</b>!</p>";
else
    output.innerHTML += "<p>Your answer is <b>incorrect</b>! Correct answer: <b>" + questAans + "</b></p>";

output.innerHTML += "<h4>" + questBString + "</h4>" + "<p>Your answer: <b>" + inputB + "</b></p>";
if (checkB)
    output.innerHTML += "<p>Your answer is <b>correct</b>!</p>";
else
    output.innerHTML += "<p>Your answer is <b>incorrect</b>! Correct answer: <b>" + questBans + "</b></p>";

output.innerHTML += "<h4>" + questCString + "</h4>" + "<p>Your answer: <b>" + inputC + "</b></p>";
if (checkC)
    output.innerHTML += "<p>Your answer is <b>correct</b>!</p>";
else
    output.innerHTML += "<p>Your answer is <b>incorrect</b>! Correct answer: <b>" + questCans + "</b></p>";

output.innerHTML += "<h4>" + questDString + "</h4>" + "<p>Your answer: <b>" + inputD + "</b></p>";
if (checkD)
    output.innerHTML += "<p>Your answer is <b>correct</b>!</p>";
else
    output.innerHTML += "<p>Your answer is <b>incorrect</b>! Correct answer: <b>" + questDans + "</b></p>";

output.innerHTML += "<h4>" + questEString + "</h4>" + "<p>Your answer: <b>" + inputE + "</b></p>";
if (checkE)
    output.innerHTML += "<p>Your answer is <b>correct</b>!</p>";
else
    output.innerHTML += "<p>Your answer is <b>incorrect</b>! Correct answer: <b>" + questEans + "</b></p>";


output.innerHTML += "You got " + grade + " out of 5 questions correctly.";
