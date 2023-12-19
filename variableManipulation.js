/*Part 1 - Value (Primitive Type):

Create two variables, originalValue and newValue, both initialized with a numeric value.
Assign the value of originalValue to newValue.
Modify the value of originalValue.
Print both originalValue and newValue to observe their values.
 In Part 1, the variables are primitive types, and modifying one doesn't affect the other.  */

//Create two variables, originalValue and newValue 
console.log("example 1")
console.log("--------------------------------")
let originalValue = 5;
let newValue = originalValue;

console.log("Original Value:", originalValue); // Output: Original Value: 5
console.log("New Value:", newValue); // Output: New Value: 5

// Reassigning the value to originalValue
originalValue = 10;

// Print both originalValue and newValue
//originalValue is changed to 10, but this does not affect newValue.
console.log("Original Value after reassigning:", originalValue); // Output: Original Value: 10 
//newValue remains 5 because it holds the initial value of originalValue (which was 5) when it was assigned.
console.log("New Value even after Original Value is being reassigned:", newValue); // Output: New Value: 5 

newValue = 20;
//originalValue remains 10 because it holds the value 10 when it was re-assigned.
console.log("Original Value even after New Value is being reassigned", originalValue); // Output: Original Value: 10
//newValue is changed to 20, but this does not affect originalValue.
console.log("New Value after reassigning:", newValue); // Output: New Value: 20 

console.log('increment using +1',newValue+1);
newValue=newValue++; //doesnt increment
console.log('increment using ++',newValue);
/* Note: In JavaScript, primitive values such as numbers are assigned by value,
meaning that when you assign originalValue to newValue, a copy of the actual value is made. 
Any subsequent changes to originalValue do not affect newValue, as it is a separate copy of the original value.

If you want newValue to reflect the changes in originalValue, 
you would need to use reference types (objects or arrays)
Primitive types are copied by value, and changes to one variable do not affect another if they
are of primitive types.
/*-------------------------------------------------------------------*/
console.log("example 2")
console.log("--------------------------------")
let originalValue1 = 5;
let newValue1 = 10;

console.log("Original Value 1:", originalValue1); // Output: Original Value: 5
console.log("New Value 1:", newValue1); // Output: New Value: 10

newValue1 = originalValue1;
//let newValue1 = originalValue1;

console.log("Original Value 1:", originalValue1); // Output: Original Value: 5
console.log("New Value 1:", newValue1); // Output: New Value: 5

// Reassigning the value to originalValue1
originalValue1 = 15;

// Print both originalValue1 and newValue1
//originalValue1 is changed to 15, but this does not affect newValue1.
console.log("Original Value 1:", originalValue1); // Output: Original Value: 15
//newValue1 remains 5 because it holds the initial value of originalValue1 (which was 5) when it was assigned.
console.log("New Value 1:", newValue1); // Output: New Value: 5 

/*-------------------------------------------------------------------*/
console.log("example 3")
console.log("--------------------------------")
const originalValue2 = 5;
const newValue2 = 10;
//let newValue2 = 10;

console.log("Original Value 2:", originalValue2); // Output: Original Value: 5
console.log("New Value 2:", newValue2); // Output: New Value: 10

newValue2 = originalValue2; //cannot reaasign because declared as const will throw error

console.log("Original Value 2:", originalValue2); // Output: Original Value: 5
console.log("New Value 2:", newValue2); // Output: New Value: 5

// Reassigning the value to originalValue1
originalValue2 = 15; //cannot reaasign because declared as const will throw error


// additional notes
/*
Primitive Types:
These types are considered primitive because they are immutable and directly store the actual value in memory. They contrast with reference types, such as objects and arrays, which store references or addresses to the memory locations where data is held.

Number: Represents numeric values, including integers and floating-point numbers.
let age = 25;  // integer
let pi = 3.14; // floating-point number


String: Represents sequences of characters or text.
let greeting = "Hello, World!";
let name = 'Alice';

Boolean: Represents true or false values.
let isRaining = true;
let hasPizza = false;


Null: Represents the intentional absence of any object value.
let emptyBox = null;

In these examples:

Number: age is a variable storing an integer, and pi is storing a floating-point number.
String: greeting and name are variables storing sequences of characters.
Boolean: isRaining and hasPizza are variables storing true or false values.
Null: emptyBox intentionally represents the absence of an object value.
These variables directly store the values in memory and are considered immutable because their values cannot be altered directly.
*/