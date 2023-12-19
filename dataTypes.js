//Numbers
//Boolean
//String
//Null
//Object -> has key and value pair
//Eg:
//{
// "key":"value"
//}
// variable -> holds only one value
// array -> holds multiple values

//Variable :-
// var age(variable name); -> declaration of variable.
//   console.log(type(age)); -> Gives the type of variable.

// <script></script>

//we can write the <script> inside head or inside body.

// We can link the js file in the html file.

// variables created using var can used throught the whole function but variables created using let can be used only in the block where they are defined.

//If you assign a value to variable using const then "const" will not allow you to update the assigned value type.

//javascript execution stops once it hits the error.

// const arr1 = [12, 12, 10];
// console.log(arr1[2]);

//Part1:-

var originalValue = 20;
var newValue = originalValue;
originalValue = 30;
console.log(originalValue);
console.log(newValue);

//Part2:-

const originalArray = [10, 20, 30];
const newArray = originalArray;
originalArray.push(40);
console.log(originalArray);
console.log(newArray);
originalArray.pop(40);
console.log(originalArray);
console.log(newArray);

//Part3:-

let multiplyByTwo = (num) => num * 2;
console.log(multiplyByTwo(5));

// variable type a variable name = (parameters) => logic
// return the value;
