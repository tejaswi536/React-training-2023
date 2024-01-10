//Write a program to display numbers from 1 to 10 using a for loop.

for(let a=1;a<=10;a++)
{
    console.log(`a is ${a}`);
}
console.log("=============================")

//Create a multiplication table for a given number using a for loop.
const i=5;
//console.log(i);
for(let j=1;j <= 10;j++){
    console.log(`${i}*${j} = ${i*j}`);
    // console.log(i+ " * " + j + " = ", i*j);
}
console.log("=============================")

//Iterate through an array and print each element using a for loop.
const gadgets = ['watch','ipad','phone','laptop'] ;
for(let g=0;g<gadgets.length;g++){
   // console.log(`${i}+1 gadget is $gadgets.[i]`)
   console.log(`${g+1}st gadget is ${gadgets[g]}`);
}
console.log("=============================")

//Create a multiplication table grid (2D array) using nested for loops.
const numRows = 5;
const numColumns = 5;

for (let r = 1; r <= numRows; r++) {
    let rowOutput = '';
    for (let c = 1; c <= numColumns; c++) {
        rowOutput += `${r * c}\t`; // In JavaScript strings, \t is an escape sequence that represents the horizontal tab character. When used within a string, it creates a horizontal tab space.
    }
    console.log(rowOutput); // Output the row after each inner loop
}

//Generate a pattern of stars in the shape of a triangle using nested for loops.
for (let row = 1; row <= numRows; row++) {
    let rowOutput = '';
    for (let star = 1; star <= row; star++) {
        rowOutput += '*';
    }
    console.log(rowOutput);
}

//Iterate through a 2D array and print each element using nested for loops.
const array2D = [[1, 2, 3], [6, 4, 8, 0]];
console.log(array2D);

for (let i = 0; i < array2D.length; i++) {
    let output = '';
    for (let j = 0; j < array2D[i].length; j++) {
        output += `${array2D[i][j]}\t`;
    }
    console.log(output);
}

//Write a program to display numbers from 1 to 10 using a while loop.
let k=6;
while(k<=10){
    console.log(k);
}