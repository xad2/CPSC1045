/*jshint esversion: 6 */
/*jshint browser: true */

//Problem 0

/*
let prob0 = document.getElementById("problem0").innerHTML = "<p>Write a JS program to ask the user " +
    "for a number and output 1 more than the number to the screen.</p>";
let ans0 = document.getElementById("answer0");

let userResponse = window.prompt("Input a number:");

if (!isNaN(userResponse)) {
    let number = Number(userResponse);
    number += 1;
    ans0.innerHTML = "Adding one to it ->" + number;
} else
    ans0.innerHTML = "Sorry, \"" + userResponse + "\" is not a number!";
*/

//Part A
//Question
let partAQst = document.getElementById("partAQst")
    .innerHTML = "<p>Xiv	was	asked	to	prototype	an	ordering	system	for	a	new	McDonalds	burger " +
    "ordering	system.		In this	new	system,	customers	to	build	their	own	burgers	by	" +
    "specifying	which	options	they	want	included	on	the	burger.	Help	Xiv	write	a	simple	" +
    "app	that	prompts	the	users	for	each	option	to	include	on	the	burger,	and	then	" +
    "display	the	final	price,	a	list	of	the	options	they've	chosen	and	the	total	number	of	" +
    "calories	for the	meal.		If	the	user	has	not	chosen	an	option (or	if	they	have entered" +
    "an	illegal	value),	it	should	not	be	listed	on	the	final	order	summary.	For	example	if	" +
    "they	chose	0	pickles,	pickles	should	not	be	printed	as	part	of	their	order. </p>";


window.alert("Please choose what you would like on your burger. Click Cancel or type 0 if you rather not have it. " +
    "Thanks.");

//input variables
let pattiesInput, tomatoesInput, lettuceInput, baconInput, ketchupInput, mustardInput, picklesInput, onionsInput;
//boolean variable to check whether the number of buns is acceptable
let checkBuns = true;

//gather user input
let bunsInput = window.prompt("How many buns would you like? $1.00 each, 75 calories", 2);
if (bunsInput < 2 || isNaN(bunsInput)) {
    window.alert("Illegal value! Minimum 2 buns.");
    checkBuns = false;
} else {
    pattiesInput = Number(window.prompt("How many patties would you like? $1.00 each, 100 calories", 1));
    tomatoesInput = Number(window.prompt("How many tomato slices would you like? $0.15 a slice, 10 calories", 1));
    lettuceInput = Number(window.prompt("How many lettuce leaves would you like? $0.15 a leaf, no calories", 1));
    baconInput = Number(window.prompt("How many bacon strips  would you like? $0.50 a strips, 80 calories", 0));
    ketchupInput = Number(window.confirm("Would you like ketchup? Free cost, no calories", false));
    mustardInput = Number(window.confirm("Would you like mustard? Free cost, no calories", false));
    picklesInput = Number(window.prompt("How many pickles  would you like? $0.10 each, no calories", 0));
    onionsInput = Number(window.prompt("How many onions would you like? $0.15 per Tablespoon, no calories", 0));
}

//calories
let bunCalories = 75;
let pattyCalories = 100;
let tomatoCalories = 0.15;
let baconCalories = 80;
let totalCalories = 0;

//prices
let bunPrice = 1;
let pattyPrice = 1;
let tomatoPrice = 0.15;
let lettucePrice = 0.15;
let baconPrice = 0.5;
let picklesPrice = 0.1;
let onionsPrice = 0.15;
let finalPrice = 0;

//strings
let bunString = "";
let pattyString = "";
let tomatoesString = "";
let lettuceString = "";
let baconString = "";
let ketchupString = ketchupInput ? "with Ketchup," : "";
let mustardString = mustardInput ? "with Mustard" : "";
let picklesString = "";
let onionsString = "";
let resultingString = "";

//check inputs
if (!checkBuns) {
    bunString = "No buns!";
    resultingString += bunString;
} else {
    bunString = "buns";
    resultingString += bunsInput + " " + bunString + ", ";
    totalCalories += bunsInput * bunCalories;
    finalPrice += bunsInput * bunPrice;
    //if it is a number and is larger than 0 then calculate price, calories and concatenate resultingString
    if (pattiesInput > 0 && !isNaN(pattiesInput)) {
        totalCalories += pattiesInput * pattyCalories;
        finalPrice += pattiesInput * pattyPrice;
        pattyString = pattiesInput == 1 ? "patty" : "patties";
        resultingString += pattiesInput + " " + pattyString + ", ";
    }
    if (tomatoesInput > 0 && !isNaN(tomatoesInput)) {
        totalCalories += tomatoesInput * tomatoCalories;
        finalPrice += tomatoesInput * tomatoPrice;
        tomatoesString = tomatoesInput == 1 ? "tomato slice" : "tomato slices";
        resultingString += tomatoesInput + " " + tomatoesString + ", ";
    }
    if (lettuceInput > 0 && !isNaN(lettuceInput)) {
        finalPrice += lettuceInput * lettucePrice;
        lettuceString = lettuceInput == 1 ? "lettuce leaf" : "lettuce leaves";
        resultingString += lettuceInput + " " + lettuceString + ", ";
    }
    if (baconInput > 0 && !isNaN(baconInput)) {
        totalCalories += baconInput * baconCalories;
        finalPrice += baconInput * baconPrice;
        baconString = baconInput == 1 ? "strip of bacon" : "strips of bacon";
        resultingString += baconInput + " " + baconString + ", ";
    }
    if (picklesInput > 0 && !isNaN(picklesInput)) {
        finalPrice += picklesInput * picklesPrice;
        picklesString = picklesInput == 1 ? "pickle" : "pickles";
        resultingString += picklesInput + " " + picklesString + ", ";
    }
    if (onionsInput > 0 && !isNaN(onionsInput)) {
        finalPrice += onionsInput * onionsPrice;
        onionsString = onionsInput == 1 ? "onion" : "onions";
        resultingString += onionsInput + " " + onionsString + ", ";
    }
    resultingString += ketchupString + " " + mustardString + ".";
}

//output section
let partAans = document.getElementById("partAans");
partAans.innerHTML = "<h1>McDonald's Burger Help</h1>" + "<h2>Your Order</h2>" + "<p>" + resultingString + "</p>" +
    "<p>Calories: " + totalCalories + "</p> <p>Price: $" + finalPrice + "</p>";
