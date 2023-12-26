
/*Assignment: Book Inventory Management

You've been tasked with managing a library's inventory system. The library contains an array of book objects, each representing a book in the inventory. Each book object has properties like title, author, genre, publishedYear, and available (boolean indicating if the book is available for borrowing).

Your task is to perform the following operations using array methods:

Map: Create a new array containing titles and authors of all the books in the inventory in the format "Title by Author".

Filter: Filter out all the books that belong to a particular genre (e.g., "Fantasy" or "Mystery").

Find: Find a specific book by its title and return its details.

ForEach: Update the availability status of all the books published before a certain year (e.g., 2010) to mark them as unavailable.

Create a JavaScript program that includes an array of book objects and demonstrates the use of these array methods to achieve the tasks outlined above. You can use console logs to display the results or modifications performed on the book inventor
*/

library = [
    {
        title: "The Guide",
        author: "R.K. Narayan",
        genre: "Fiction",
        publishedYear: 1958,
        available: true,
        numPages: 250
    },
    {
        title: "The White Tiger",
        author: "Aravind Adiga",
        genre: "Fiction",
        publishedYear: 2008,
        available: true,
        numPages: 200
    },
    {
        title: "Eternal Shadows",
        author: "Chetan Bhagat",
        genre: "Thriller",
        publishedYear: 2023,
        available: true,
        numPages: 300
    }
];

console.log(typeof(library));

//Are all books in the library available for borrowing?
// every(): Tests whether all elements in the array pass the provided function.
console.log("Using every method");
console.log("Checking availabilty before updating library");
const allAvailable = library.every(value=> value.available);
console.log("Are all books available?",allAvailable); // Output: true only if all books are available
console.log("----------------");

// map(): Creates a new array with the results of calling a provided function on every element in the array.
// since it creates a new array, I have directed that array to title_by_author array
/* additional concept:
Template literal :

Template literals in JavaScript are a way to create strings that include dynamic content. They use backticks (` `) to enclose the string and allow for easy embedding of variables or expressions using ${}. This feature simplifies string concatenation and multiline string creation in a more readable and concise manner.

The backticks (`) are used to define the string. ${name} is a placeholder for the value of the variable name. The expression inside ${} is evaluated, and its result is concatenated into the string.
*/
console.log("Using map method");
const title_by_author = library.map(value => `${value.title} by ${value.author}`);
console.log("title_by_author:",title_by_author); //output of filter is an array so it is allowing this also map doesnt override the original array
console.log("----------------")


// filter(): Creates a new array with elements that pass a test implemented by a provided function.
console.log("Using Filter method");
const filterGenre = library.filter(value => value.genre === 'Fiction'); 
//const filterGenre = library.filter(value => value.genre === 'Friction');  //since the output is array if conditions are not mathcing output will be empty array
console.log("filterGenre:",filterGenre); //output of filter is an array so it is allowing this
console.log("----------------")


// find(): Returns the first element in the array that satisfies the provided testing function.
console.log("Using find method");
findBook=library.find(value => value.title === 'Eternal Shadows');
console.log("findBook:",findBook) //If element satisfies the condition,returns the value(not array) if not find method returns undefined.

/* alternate way
library.find(value => {
    if (value.title === 'Eternal Shadows')
        console.log(value);
}); */

console.log("----------------")
// forEach(): Calls a function for each element in the array.
console.log("Using forEach method");
library.forEach(value => ((value.publishedYear < 2010) && (value.available = false)));
console.log("Updated library",library)
// this method doesn't return an array, so assigning it to a new array will result in undefined when used with that array
// const setUnavailable = library.forEach(value => //If no matching value is found during the iteration, the forEach method won't produce any specific output. It doesn't return an array or any other value.

/*
library.forEach(value => {
    if (value.publishedYear < 2010) {
        value.available = false;
        console.log(value);
    }
});
// console.log('setUnavailable', setUnavailable); // undefined because the output of forEach is not an array
*/


//Additional methods discussed in the session
//includes():	
//reduce(): 	
//every():	
//some(): 	



//Are all books in the library available for borrowing?
// every(): Tests whether all elements in the array pass the provided function.
console.log("Updated library",library);
console.log("Using every method");
console.log("Checking availabilty after updating library");
const allAvailableafterupdate = library.every(value=> value.available);
console.log("Are all books available?",allAvailableafterupdate); // Output: true only if all books are available
console.log("----------------"); 


//Is there at least one book in the library available for borrowing?
// some(): Tests whether at least one element in the array passes the provided function.
console.log("Using some method");
const someAvailable=library.some(value=>value.available);
console.log("Is atleast one book available?",someAvailable);
console.log("----------------");

console.log("Using reduce method")
// Displaying the total number of pages in the library.
//reduce():Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. 
const totalnumPages=library.reduce((totalnumPages,value) =>{return totalnumPages+value.numPages},0 );
console.log("Total number of pages in the library:",totalnumPages);
console.log("----------------------------------------------");

//------------check this-----
console.log("Using includes method");
const a=[1,2,3];
const b=a.includes(3);
console.log('is given values included in array a',b);
console.log("end of Using includes method");

//Does the library include any books that are available for borrowing?
// includes(): Determines whether an array includes a certain value among its entries.If there are multiple values matching the specified value, includes() will return true as soon as it finds the first matching value. It does not continue searching for additional occurrences once a match is found.


//how to check if a array contains set of objects and how to check if it includes specific object in it or not??
//doubtful snippet 
const isAvl=true;
//const isAvailable = library.includes(value => stringify(value.available) === stringify(isAvl));
const isAvailable = library.includes(value => 
    {
        stringify(value.available) === stringify(isAvl)
    });
console.log("isAvl",isAvl);
console.log("Is any book available?", isAvailable); // Output: true if atleast one book is available
console.log("----------------");

//similar example discussed in sesssion but not working const xx=a.includes(7);

const g={
    title: "The White Tiger",
    author: "Aravind Adiga",
    genre: "Fiction",
    publishedYear: 2008,
    available: true
}
const v=library.includes(g);
console.log("vd",v)

console.log(typeof(allAvailable));
console.log(typeof(someAvailable));
console.log(typeof(isAvailable)); //check further

//check above






console.log("Using includes method");
const issAvl=true;
x=true;
const issAvailable = library.includes(true);
console.log("Is any book available?", issAvailable); // Output: true if atleast one book is available
console.log("----------------");


const bb = library.includes({ available: true });
console.log('bb', bb);

