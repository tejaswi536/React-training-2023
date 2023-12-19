//part1
var originalValue=10;
var newValue=20;
originalValue=newValue;
console.log(originalValue);
console.log(newValue);
var originalValue=30;
console.log(originalValue);
console.log(newValue);

//part2
const originalArray=[10,20,30,40,50];
const newArray=originalArray;
originalArray.push(60);
console.log(originalArray);
console.log(newArray);
originalArray.pop(50);
console.log(originalArray);
console.log(newArray);

//part3
const multiplyByTwo=(num)=> num*2;
console.log(multiplyByTwo(10));

