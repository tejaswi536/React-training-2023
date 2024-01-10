let condition1 = true;
let condition2 = true;


//if statement
console.log("if statement example")
if (condition1) {
    console.log("The condition1 is true. This block is executed.");
}
console.log("======================================================================")

//if-else Statement
condition1 = false;

console.log("if-else statement example 1")
if (condition1) {
    console.log("The condition is true. This block is executed.");
} else {
    console.log("The condition is false. This block is executed.");
}
console.log("======================================================================")
console.log("if-else statement example 2");

const isStudent = false;
let age = 18;

//Note:If no parentheses are given, conditions are evaluated from left to right based on operator precedence. In the absence of parentheses, logical AND (&&) is evaluated before logical OR (||).

//The condition (isStudent || age >= 18 && age <= 30) evaluates to true because isStudent is true (the person is a student), and the || (logical OR) operator short-circuits, meaning it doesn't need to evaluate the second part (age >= 18 && age <= 30). In logical OR, if the first operand is true, the entire condition is considered true. Therefore, the age condition is not checked in this case.
if (isStudent || age >= 18 && age <= 30) { //false || true && true 
    console.log("You qualify for a special offer!");
} else {
    console.log("You are not eligible for the special offer.");
}
console.log("======================================================================")
console.log("if-else statement example 3");
if (age >= 19 && age <= 30 || isStudent) { // false && true || false
    console.log("You qualify for a special offer!");
} else {
    console.log("You are not eligible for the special offer.");
}
console.log("======================================================================")
console.log("if-else statement example 4");
let temperature = 25;
let timeOfDay = "morning";
let isWeekend = false;
let isHoliday = true;
let hasMeeting = true;
//(true && true) || ((true && true) && true || (false && false)) true
//false || (false  && false) || (true && false)  false|| false || false
if (temperature > 20 && temperature < 30 || timeOfDay === "morning" && !isWeekend && isHoliday || !hasMeeting && isWeekend) {
    console.log("Condition 1 is true. Providing special offer for the morning.");
} else if (temperature >= 30 || timeOfDay === "evening" && isWeekend || hasMeeting && !isHoliday) {
    console.log("Condition 2 is true. Preparing for the evening event.");
} else {
    console.log("None of the conditions is true. Normal operations.");
}
console.log("======================================================================")

//if-else if-else Statement
console.log("if-else-if-else statement example")
if (condition1) {
    console.log("Condition 1 is true. This block is executed.");
} else if (condition2) {
    console.log("Condition 2 is true. This block is executed.");
} else {
    console.log("None of the conditions is true. This block is executed.");
}
console.log("======================================================================")

//switch
let expression = "value2";

console.log("switch statement example 1")
switch (expression) {
    case "value1":
        console.log(expression);
        console.log("Expression equals value1. This block is executed.");
        break;
    case "value2":
        console.log(expression);
        console.log("Expression equals value2. This block is executed.");
        break;
    default:
        console.log("None of the cases match. This block is executed.");
}
console.log("======================================================================")

console.log("switch statement example 2")
let dayOfWeek = new Date().getDay(); // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)

//The switch statement determines the current day of the week and outputs a corresponding message, providing real-time information based on the day.

switch (dayOfWeek) {
    case 0:
        console.log("It's Sunday! Time to relax.");
        break;
    case 1:
        console.log("It's Monday! Time to start the week.");
        break;
    case 2:
        console.log("It's Tuesday! Keep going.");
        break;
    case 3:
        console.log("It's Wednesday! Halfway through the week.");
        break;
    case 4:
        console.log("It's Thursday! Almost there.");
        break;
    case 5:
        console.log("It's Friday! Weekend is coming.");
        break;
    case 6:
        console.log("It's Saturday! Enjoy your weekend.");
        break;
    default:
        console.log("Invalid day of the week.");
}

console.log("======================================================================")

//getMonth() is a JavaScript method that retrieves the month (0 to 11) from a Date object, and to obtain the current month with a base of 1 (January to December), you add 1 to the result.
let month = new Date().getMonth() + 1;
console.log(month);

let month1 = new Date().getMonth();
console.log(month1);

let month2 = new Date();
console.log(month2);

let currentMonth = new Date().getMonth() + 1;

switch (currentMonth) {
    case 1:
        console.log('It\'s January.');
        break;
    case 2:
        console.log('It\'s February.');
        break;
    case 3:
        console.log('It\'s March.');
        break;
    case 4:
        console.log('It\'s April.');
        break;
    case 5:
        console.log('It\'s May.');
        break;
    case 6:
        console.log('It\'s June.');
        break;
    case 7:
        console.log('It\'s July.');
        break;
    case 8:
        console.log('It\'s August.');
        break;
    case 9:
        console.log('It\'s September.');
        break;
    case 10:
        console.log('It\'s October.');
        break;
    case 11:
        console.log('It\'s November.');
        break;
    case 12:
        console.log('It\'s December.');
        break;
    default:
        console.log('Invalid month.');
}
console.log("======================================================================")

let userAgent = navigator.userAgent.toLowerCase();
console.log(userAgent)
console.log(typeof(userAgent))
switch (true) {
    case userAgent.includes('chrome'):
        console.log('Your browser is Chrome.');
        break;
    case userAgent.includes('firefox'):
        console.log('Your browser is Firefox.');
        break;
    case userAgent.includes('safari'):
        console.log('Your browser is Safari.');
        break;
    case userAgent.includes('edge'):
        console.log('Your browser is Edge.');
        break;
    default:
        console.log('Sorry, your browser is not supported or could not be identified.');
}


console.log("======================================================================")
//ternary 
console.log("ternary statement example")
let result = (condition1) ? "True Value" : "False Value";
console.log(result);
console.log("======================================================================")

// Ternary operator to check eligibility
let eligibilityMessage = age >= 18 ? "Eligible to vote" : "Not eligible to vote";

console.log(eligibilityMessage);


for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('Breaking out of the loop at i = 5.');
        break; //The break statement in a loop terminates the loop, not just the current iteration.
    }
    console.log(i);
    
}