/*Part 2 - Reference (Object/Array):
Create an array originalArray with some elements.
Assign originalArray to a new variable newArray.
Add or remove elements from originalArray.
Print both originalArray and newArray to observe their content */

/* Primitive types in programming languages represent simple values and are stored directly in memory. 
They include types like numbers, strings, and booleans.
 When you assign a primitive variable to another, they become independent, 
 and changing one does not affect the other. */

/*Reference types, on the other hand, include objects and arrays. 
Instead of storing the actual data, they store references or addresses to the memory location where the data is stored.
When you assign a reference variable to another, they both point to the same underlying data.
IMP NOTE:Modifying the data through one reference will affect the other.
Note: when displaying the array it displays both the array and its length in the console
In Part 2, both variables point to the same array object, so changes to the array are reflected in both variables. */

/* In general, it is recommended to use const by default, and only use let when you need to 
reassign a variable.
Avoid using var in modern JavaScript, as let and const provide better scoping behavior.
Using const for variables that should not be reassigned helps make the code more predictable and prevents accidental reassignments. */

// Create an array originalArray with some elements
const originalArray=[1,2,3];

/*this will throw error arrayManipulation.js:20 Uncaught ReferenceError: 
Cannot access 'newArray' before initialization because hositing doesnt apply for const */
//console.log("Before New Array declartion:", newArray); 
console.log("-----------with const----------");
// Assign originalArray to a new variable newArray
console.log("Original Array:",originalArray); //1,2,3

const newArray=originalArray;
console.log("New Array:", newArray); // Output: New Array: 1,2,3
originalArray.push(4); 
console.log("Original Array after pushing element:", originalArray);  //1,2,3,4
console.log("New Array after pushing element:", newArray);  //1,2,3,4

originalArray.pop();
// Print both originalArray and newArray

console.log("Original Array after deleting the item:", originalArray); // Output: Original Array: 1,2,3
console.log("New Array after deleting the item:", newArray); // Output: New Array: 1,2,3

/*
console.log("test");
originalArray=[11,12,13]; //Check this behaviour - expectation the reassigning should be done even when declared as const
console.log(" Array after reassigning:", originalArray); // Output: Original Array: 1,2,3
console.log("New Array after reassigning the Array:", newArray); // Output: New Array: 1,2,3
*/
//note: reassigning cannot be done to array once it is declared as const

//originalArray=[11,12,13]; //reassigning doesnt happen because it takes new location so constant varaible doesnt work
//console.log(" Array after reassigning:", originalArray); // Output: Original Array: 1,2,3
//console.log("New Array after reassigning the Array:", newArray); // Output: New Array: 1,2,3

console.log("Comparision of arrays")
const a= [1,2];
const b= [1,2];
console.log(a===b); //false because comparsion happens between memeory locations not values
console.log(a==b); //false

/*note: objects and arrays cannot be compared same way so please forget the values even if they are same while comparing */
//---------------------------------------------------------------
let originalArray1=[1,2,3];


console.log("-----------with let----------");
// Assign originalArray1 to a new variable newArray1
console.log("Original Array 1:",originalArray1); //1,2,3
//console.log("Before New Array1:", newArray1);  // this will throw error Uncaught ReferenceError: Cannot access 'newArray1' before initialization
let newArray1=originalArray1;
console.log("New Array 1:", newArray1); // Output: New Array: 1,2,3
originalArray1.push(4);  //value added at the end
console.log("Original Array1 after pushing element:", originalArray1);  //1,2,3,4
console.log("New Array1 after pushing element:", newArray1);  //1,2,3,4

originalArray1.pop(); //value deleted from the end
// Print both originalArray1 and newArray1
console.log("Original Array1 after deleting the item:", originalArray1); // Output: Original Array: 1,2,3
console.log("New Array1 after deleting the item:", newArray1); // Output: New Array: 1,2,3

//access the value in array by using index
//console.log("Access value with index:", originalArray1(1));//use square barckets
console.log("Access second element in the array:", originalArray1[1]);


//push one array to other array

newArray1.push([4,5]);
console.log("New Array1 after inserting another array:", newArray1); // Output: New Array: 1,2,3,[4,5]
//does changes made to new array effects orignal array?? yes
console.log("Original Array1 after inserting another array:", originalArray1); // Output: New Array: 1,2,3,[4,5]

//access the value of array inside array 
console.log("Access second element in the nested array:", originalArray1[3][1]); //5
//console.log("Access second element in the nested array:", originalArray1[3][2]); //undefined but no error

// check the length of the array using length property
console.log("length of New Array1", newArray1.length);
console.log("length of the nested array ",newArray1[3].length);
//there are multiple properties for array check them
newArray1.pop();
console.log("New Array1 after deleting :", newArray1); // Output: New Array: 1,2,3
//does changes made to new array effects orignal array?? yes
console.log("Original Array1 after deleting", originalArray1); // Output: New Array: 1,2,3

// we can add multiple elements at once
newArray1.push(4,5);
console.log("New Array1 after inserting :", newArray1); // Output: New Array: 1,2,3,4,5
//does changes made to new array effects orignal array?? yes
console.log("Original Array1 after inserting :", originalArray1); // Output: New Array: 1,2,3,4,5

originalArray1=[11,12,13]; //when reassigning happens it takes new location
console.log("OriginalArray after reassigning:", originalArray1); // Output: Original Array: 11,12,13
//check this below behavior why output is not New Array: 11,12,13??
console.log("New Array after reassigning the Array:", newArray1); // Output: New Array: 1,2,3,4,5

/*Answer to the above behavior:
When you reassign a variable in JavaScript, it means you are giving it a new value or pointing it to 
a new location in memory. So, the variable no longer references the original value or location;
instead, it now references the new value or location.

originalArray1 and newArray1 initially reference the same array.
Operations on originalArray1 affect newArray1 because they point to the same array.
Reassigning originalArray1 to a new array breaks the reference, and changes to one array
no longer affect the other. */
//---------------------------------------------------------------

var originalArray2=[1,2,3];

console.log("-----------with var----------");
// Assign originalArray2 to a new variable newArray2
console.log("Original Array2:",originalArray2); //1,2,3
console.log("Before New Array2:", newArray2); //  no error because of hoisting concept

var newArray2=originalArray2;
console.log("New Array2:", newArray2); // Output: New Array2: 1,2,3
originalArray2.push(4); 
console.log("Original Array2 after pushing element:", originalArray2);  //1,2,3,4
console.log("New Array2 after pushing element:", newArray2);  //1,2,3,4

originalArray2.pop();
// Print both originalArray2 and newArray2
console.log("Original Array2 after devaring the item:", originalArray2); // Output: Original Array2: 1,2,3
console.log("New Array2 after devaring the item:", newArray2); // Output: New Array2: 1,2,3

originalArray2=[11,12,13]; //reassigning happens and it takes new location
console.log("OriginalArray2 after reassigning:", originalArray2); // Output: Original Array: 11,12,13
//check this below behavior why output is not New Array: 11,12,13??
console.log("New Array2 after reassigning the Array:", newArray2); // Output: New Array: 1,2,3

/* Additional notes

Reference Types:
Objects and arrays are reference types in programming, meaning they store references or addresses 
to memory locations where data is stored.

Object:An object is a complex data type that allows you to store key-value pairs. 
Each key (also called a property) is associated with a value.
example : let person = {
  name: "John",
  age: 30,
  city: "Example City"
};


Array: An array is a special type of object that stores elements in an ordered list. 
Each element has a numeric index, starting from 0.Arrays are useful for storing collections of
similar items.

Note: In summary, objects and arrays are used to organize and structure data in more complex
ways than primitive types. Objects use named properties, while arrays use numeric indices to access 
their elements. Both objects and arrays are dynamic, 
meaning their size can change during runtime by adding or removing elements or properties.

In JavaScript, arrays can be multidimensional, meaning they can contain other arrays as elements. This allows you to create 2D arrays (arrays of arrays) and 3D arrays (arrays of arrays of arrays), and so on.

2D Array:
A 2D array in JavaScript is an array of arrays. Each element of the main array is an array itself. It's like a table with rows and columns.

Here's an example of a 2D array:

javascript
Copy code
let twoDArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Accessing elements
console.log(twoDArray[0][1]); // Output: 2
console.log(twoDArray[1][2]); // Output: 6
In this example, twoDArray is a 2D array with three rows and three columns.
*/

console.log('test2');
let x=[1,2,3];
y=x;

console.log(x); //[1, 2, 3]
console.log(y); //[1, 2, 3]

y.push(4);

console.log(x); //[1 , 2, 3, 4]
console.log(y); //[1 , 2, 3, 4]

x=[5,6];

console.log(x); //[5,6]  
console.log(y); //[1,2,3,4] // check why y is not getting updated to [5,6]

y=[7,8];

console.log(y); //[7, 8]
console.log(x); //[5,6]  //check why x is not getting updated to [7,8]