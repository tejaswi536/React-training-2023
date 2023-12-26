// Number
let age = 25;

// String
let name = "John";

// Null
let nullValue = null;

// Object
let person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 30,
  isStudent: false,
};

// Array
let fruits = ["apple", "banana", "orange"];

// Displaying the values
console.log("Age:", age);                 // Number
console.log("Name:", Name);               // String
console.log("Null Value:", nullValue);    // Null
console.log("Person:", person);           // Object
console.log("Fruits:", fruits);           // Array

//to display type of the variable
console.log(typeof(person));
console.log(typeof(age));

//variables created in one page cannot be accessed in another page
//variables can be of any datatype
//variables can be created in 3 ways using keyword var,let and const(cannot be reassigned).
//avoid using var because it has scoping issues
//In JS execution happens line by line so if it encountrers errors then
// it stops there itself no moving forward even other syntaxes are correct

//type converting

let a=1;
console.log(a); //initially it is number
a='john'
console.log(a); //later converted to string


/* this is bad feature though it provides flexibility,
 it can also lead to unexpected behavior and errors if not used carefully.
 This behaviour is called type casting and this can be handled by using typescript extension in js.
 It is provided by microsoft
 */

