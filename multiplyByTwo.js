//Create an arrow function named multiplyByTwo that takes a parameter num 
//and returns its value multiplied by 2.

//regular representation of function
function multiplyByTwo(num){
  return num*2;
}

const result=multiplyByTwo(2);
console.log("regular function:",result)

//equivalent Arrow functions

const multiplyByTwoArrowFunc1 = num => { num * 2 }; 
console.log("Arrow function 1:",multiplyByTwoArrowFunc1(2)); //undefined

/*Issue is due to the absence of the return keyword in the arrow function body. 
When you use curly braces {}, it creates a block, and if you want the arrow function to
 return a value, you need to explicitly use the return keyword.
In JavaScript, when using curly braces {} in an arrow function,
 it treats the block as a set of statements and not as an expression to be returned.
 If you omit the return keyword, the function returns undefined by default.

To resolve issue use below ways either () or use return with {} or omit {};
In contrast, when you use parentheses () instead of curly braces,
JavaScript treats the expression inside as the return value, and you don't need the return keyword: */
const multiplyByTwoArrowFunc2 = num => ( num * 2 ); 
console.log("Arrow function 2:",multiplyByTwoArrowFunc2(2)); //undefined

const multiplyByTwoArrowFunc3 = num => { return num * 2 };
console.log("Arrow function 3:",multiplyByTwoArrowFunc3(2)); //4

//const multiplyByTwoArrowFunc4 = num => return num * 2 ; // throws syntax error because return keyword has to be part of block {}
//console.log("Arrow function 4",multiplyByTwoArrowFunc4(2)); //4

//simplified version
// we can omit {} and return keyword too
const multiplyByTwoArrowFunc = num => num * 2; 
console.log("Simplified Arrow function:",multiplyByTwoArrowFunc(2)); //4


/*
Additional notes

Arrow functions in JavaScript provide a shorter and cleaner way to write functions. They are especially useful for concise expressions and situations like callback functions, making code more modern and streamlined.

generic syntax of arrow function

const functionName = (parameter1, parameter2, ..., parameterN) => {
// Function body
// Return statement (if applicable)
};

Is it necessary to declare Arrow function only with const?
No, it's not necessary to declare arrow functions only with const.
While using const is a common practice for declaring arrow functions,
you can also use let or var depending on your needs.
The choice between const, let, or var depends on whether you intend to reassign
the variable later in your code:

Use const if the function's value will not be reassigned.
This is a good practice as it makes your code more robust by preventing unintentional reassignments.

example:
const add = (a, b) => a + b;

Use let if you plan to reassign the variable to a new function later in your code:
example:
let multiply = (a, b) => a * b;
multiply = (a, b) => a * b * 2; // Example of reassignment

Avoid using var in modern JavaScript unless you have specific reasons to use it. 
var has different scoping behavior than const and let, and it is generally considered 
outdated in favor of const and let.

Choose the appropriate declaration based on the intended behavior of your arrow function 
and your overall coding style preferences
*/