/*jshint esversion: 6 */
/*jshint browser: true */


//Part B
//Question B

let questionPartB = document.getElementById("questionPartB")
    .innerHTML = "<p>Xiv	left	her	position	at	McDonalds	because	it	has	taken	too	much	of	her" +
    "time	away from her research.She has taken on a part time job as an elementary school math teacher to" + "help fund her graduate degree, instead." +
    "Doing research and teaching at the same time makes her very" + "tired because of being overworked.Help Xiv out by writing a program that helps her automatically" +
    "generate math quizzes.</p>";


//variables
let num1, num2, num3, num4 = 1,
    num5 = 1;
let answerInput, questionConcat = "",
    realAnswer = "",
    answerConcat = "",
    outputString = "";
let grade = 0;
let numOfQuestions;
let index = 0;
let pickQuestion;
// repeat while input is illegal
do {
    numOfQuestions = Number(window.prompt("How many questions would you like?", 5));
} while (isNaN(numOfQuestions) || numOfQuestions < 0);

for (index = 0; index < numOfQuestions; index++) {

    //reset string concatenator variables
    questionConcat = "";
    answerConcat = "";
    //random numbers
    //repeat while input is illegal
    do {
        num1 = Math.floor(((Math.random() / 2.5) * 100) + 10); // 10 to 50
        num2 = Math.floor((Math.random() * 10) + 2); // 2 to 11
        num3 = Math.floor(((Math.random() / 3) * 10) + 1); // 1 to 4
    } while (num1 === num2);
    pickQuestion = Number(Math.floor((Math.random() * 10) + 1));

    //find factor for num1 then store in num4, another factor for num2 then store in num5
    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0 && i > num2) {
            num4 = i;
            break; // break at first occurrence of a factor > num2
        } else if (num2 % i === 0) {
            num5 = i;
        }
    }

    // pick question according to random number between 1-10
    switch (pickQuestion) {
        case 1:
            questionConcat += num1 + " + " + num2 + " / " + num5 + " - " + num3;
            realAnswer = num1 + num2 / num5 - num3;
            break;
        case 2:
            questionConcat += num1 + " / " + num4 + " - " + num2 + " * " + num3;
            realAnswer = num1 / num4 - num2 * num3;
            break;
        case 3:
            questionConcat += num1 + " + " + num3 + " + " + num3;
            realAnswer = num1 + num3 + num3;
            break;
        case 4:
            questionConcat += num3 + " + " + num3 + " * " + num2;
            realAnswer = num3 + num3 * num2;
            break;
        case 5:
            questionConcat += num3 + " * " + num3 + " * " + num2;
            realAnswer = num3 * num3 * num2;
            break;
        case 6:
            questionConcat += num2 + " + " + num3 + " * " + num2;
            realAnswer = num2 + num3 * num2;
            break;
        case 7:
            questionConcat += num3 + " + " + num3 + " * " + num2;
            realAnswer = num3 + num3 * num2;
            break;
        case 8:
            questionConcat += num1 + " / " + num4 + " - " + num3 + " + " + num2;
            realAnswer = num1 / num4 - num3 + num2;
            break;
        case 9:
            questionConcat += num2 + " / " + num5 + " + " + num3 + " + " + num2;
            realAnswer = num2 / num5 + num3 + num2;
            break;
        case 10:
            questionConcat += num2 + " / " + num5 + " - " + num1 + " + " + num2;
            realAnswer = num2 / num5 - num1 + num2;
            break;
    }


    questionConcat += " = ?";
    answerInput = Number(window.prompt(questionConcat));

    if (answerInput === realAnswer) {
        grade++;
        answerConcat += "<p>Your answer, " + answerInput + ", is <b>correct!</b> </p>";
    } else if (isNaN(answerInput) || answerInput === null) {
        answerConcat += "<p><b>Illegal</b> answer detected.</p>";
    } else {
        answerConcat += "<p>Your answer " + answerInput + " is <b>incorrect</b>.</p>";
        answerConcat += "<p>Correct answer should be <b>" + realAnswer + "</b>.</p>";
    }

    outputString += "<h3>" + questionConcat + "</h3>";
    outputString += answerConcat;


}

//output
let partBans = document.getElementById("answerPartB");
partBans.innerHTML = outputString;
partBans.innerHTML += "You got <b>" + grade + " out of " + numOfQuestions + "</b> correctly.";
