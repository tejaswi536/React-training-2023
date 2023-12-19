// Create an object 
let person = {
  name: "John",
  age: 30,
  isEmployee: true,
  sayHello: function() {
    console.log("Hello!");
  }
};

let employee=person;

console.log("Comparision of Objects")
console.log(person===employee); //true  because both refer to same memory location
console.log(person==employee); //true  because both refer to same memory location

console.log("person:",person); 
console.log("employee:", employee); // Output same as person
person.gender="Male"; 
console.log("person after adding new property:", person);  //
console.log("employee after new property:", employee);  ///

delete person.age;
console.log("person after deleting age property:", person);  //
console.log("employee deleting age property:", employee);  //

person = {
  name: "Adam",
  age: 20,
  isEmployee: false,
  sayHello: function() {
    console.log("Hello!");
  }
};

console.log("person:",person); // reasssigned value
console.log("employee:", employee); //still references john  even after reassigning happened to person object
/*Answer to the above behavior:

person and employee initially reference the same location.
Operations on person affect employee because they point to the same object.
Reassigning person to a new values breaks the reference, and changes to one object
no longer affect the other. */

employee = {
  name: "Adam",
  age: 20,
  isEmployee: false,
  sayHello: function() {
    console.log("Hello!");
  }
}; //when reassigning happens it takes new location
console.log("Comparision of Objects after reassigning to same values")
console.log(person===employee); //false because comparsion happens between memeory locations not values
console.log(person==employee); //false because comparsion happens between memeory locations not values

/*note: objects and arrays cannot be compared same way so please forget the values even if they are same while comparing */

//access the value in object by using key
console.log("Access value with key:", person.name);//

// check number of properties in  object because there is no direct length proprty  for object
let numberOfProperties = Object.keys(person).length;
console.log("numberOfProperties:",numberOfProperties); // 




//---------------------------------------------------------------

var old= {
  name: "Adam",
  age: 20,
  isEmployee: false,
  sayHello: function() {
    console.log("Hello!");
  }
};

console.log("-----------with var----------");

console.log("Original obj:",old);
console.log("Before New obj declartion:", newObj); //  no error because of hoisting concept

var newObj=old;

console.log("New Obj:", newObj); // Output: New Array2: 1,2,3

old= {
  name: "Adam",
  age: 25,
  isEmployee: true,
  sayHello: function() {
    console.log("Hello!");
  }
}; //reassigning happens and it takes new location
console.log("Original obj after reassigning:", old); // Output:reassigned value
//check this below behavior it will still take the New Array: 11,12,13??
console.log("New Obj after reassigning :", newObj); // Output: displays old obj value before reassigning

//---------------------

const student= {
  name: "Adam",
  age: 20,
  isStudent: false,
  sayHello: function() {
    console.log("Hello!");
  }
};

student= {
  name: "Adam",
  age: 20,
  isStudent: true,
  sayHello: function() {
    console.log("Hello!");
  }
}; // cannot reaasign because initially declared as const



/* Intersting fact in console.log,
 console is an object too where log is property. console has number of proprties*/

 /* Additional notes

Reference Types:
Objects and arrays are reference types in programming, meaning they store references or addresses 
to memory locations where data is stored.

Object:In JavaScript, an object is a composite data type that allows you to store and organize data in 
key-value pairs. Objects are used to represent real-world entities, and they provide a way to
structure and group related data and functionality. Objects are one of the fundamental building blocks
in JavaScript and are widely used in web development.

Here's a basic overview of objects in JavaScript:
1)Key-Value Pairs: An object consists of key-value pairs, where each value can be any data type,
including other objects.
2)Properties and Methods: The keys in an object are referred to as properties. If a property's value
is a function, it is called a method. Methods represent actions that can be performed on the object.
3)Dynamic Nature: Objects in JavaScript are dynamic, meaning you can add or remove properties and
methods at runtime.

example:
let person = {
  name: "John",
  age: 30,
  isStudent: false,
  sayHello: function() {
    console.log("Hello!");
  }
};

4)Accessing Properties:
console.log(person.name); // "John"
console.log(person["age"]); // 30

5)Object Methods:
person.sayHello(); // Calls the sayHello method

Note: In summary, objects and arrays are used to organize and structure data in more complex
ways than primitive types. Objects use named properties, while arrays use numeric indices to access 
their elements. Both objects and arrays are dynamic, 
meaning their size can change during runtime by adding or removing elements or properties.

*/