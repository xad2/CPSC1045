/*jshint esversion: 6 */ //warn
/*jshint browser: true */

//Code for Lab2b.html
//Question 1
let qst1 = document.getElementById("question1");
qst1.innerHTML = "<p>(Math.pow(3, 2) === 9) && (Math.sin(Math.PI) === 0)</p>";
let ans1 = document.getElementById("answer1");
let calc = (Math.pow(3, 2) === 9) && (Math.sin(Math.PI) === 0);
ans1.innerHTML = "<p>" + calc + "</p>";

//Question 2
let qst2 = document.getElementById("question2");
qst2.innerHTML = "<p>(((100 === \"100\") && (100 == \"100\"))</p>";
let ans2 = document.getElementById("answer2");
calc = ((100 === "100") && (100 == "100"));
ans2.innerHTML = "<p>" + calc + "</p";

//Question 3
let qst3 = document.getElementById("question3");
qst3.innerHTML = "<p>200 * 300 + 30 + 40 + 50 + 90 + 12.3 + 4 % 3</p>";
let ans3 = document.getElementById("answer3");
calc = 200 * 300 + 30 + 40 + 50 + 90 + 12.3 + 4 % 3;
ans3.innerHTML = "<p>" + calc + "</p>";

//Question 4
let qst4 = document.getElementById("question4");
qst4.innerHTML = "<p> 3 / 4 + \" quarts of milk. \" + 1 + 2 + \"cookies - very tasty.</p>";
let ans4 = document.getElementById("answer4");
ans4.innerHTML = "<p>" + 3 / 4 + " quarts of milk. " + (1 + 2) + "cookies - very tasty. </p>";

//Question 5
let qst5 = document.getElementById("question5");
qst5.innerHTML = "<p> \"The Orwellian cat had \" + 8 + 1 + \" lives.</p>";
let ans5 = document.getElementById("answer5");
ans5.innerHTML = "<p>" + "The Orwellian cat had " + (8 + 1) + " lives. </p>";

//Question 6
let qst6 = document.getElementById("question6");
qst6.innerHTML = "<p>Xiv's car has a fuel efficiency of 0.5L/km. Xiv needs to drive to Nunavut to count" +
    " seals.It is 239 km away and she starts with 25 L of fuel.Her gas tank can hold 45 L of" +
    " fuel.How many times does she need to refuel in order to reach Nunavut ? Write an" +
    " expression to calculate the number of times she needs to refuel and display the" +
    " result on the HTML page.You may need the <b>Math.ceil</b> or <b>Math.floor</b> commands as" +
    " the answer needs to be a whole number. </p>";

let iniLitres = 25;
let maxFuel = 45;
let fuelEfficiency = 0.5;
let totalKms = 239;
let litresNeeded = (fuelEfficiency * totalKms) - iniLitres;
calc = Math.ceil(litresNeeded / maxFuel); // round up

let ans6 = document.getElementById("answer6");
ans6.innerHTML = "<p> She'll need to refuel at least " + calc + " times.</p>";
