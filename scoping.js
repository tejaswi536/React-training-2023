/* Scoping:In JavaScript, the scoping of variables is determined by the keywords used to declare
 them—var, let, and const. Understanding the scoping rules is crucial for writing robust and 
 predictable code.
 1) var (Function-Scoped)
 Function Scope: Variables declared with var are function-scoped, meaning they are accessible throughout 
 the entire function in which they are declared, regardless of where within the function they are 
 declared.
 2) let and const (Block-Scoped)
Block Scope: Variables declared with let and const are block-scoped, meaning they are only 
accessible within the block (enclosed by curly braces) in which they are declared.

Note:The scope of a function is generally larger than the scope of a block in JavaScript.
 */

 //example for  var (Function-Scoped)


 //how to know the order of execution in console??
 console.log("Function scoped")
 function example() {
    if (true) {
      var functionScopedVar = "I am function-scoped";
      console.log("Inside if block:");
      console.log("functionScopedVar:", functionScopedVar);
      console.log(a); //undefined because trying to print before declaration no error because of hoisting
    }
  
    // Accessing the variable outside the block
    console.log("Outside if block:");
    console.log("functionScopedVar:", functionScopedVar);
    var a=1;
  }
  
  // Invoking the function
  example();
  //console.log("functionScopedVar:", functionScopedVar); //out of scope so throws error

  console.log("------------------")

  console.log("Block scoped ")
  function example1() {
    if (true) {
      let blockScopedLet = "I am block-scoped";
      const blockScopedConst = "I am also block-scoped";
      console.log("Inside if block:");
      console.log("blockScopedLet:", blockScopedLet);
      console.log("blockScopedConst:", blockScopedConst);
    }
     console.log("Outside if block:");
     // Uncommenting the lines below would result in an error
     // since blockScopedLet and blockScopedConst are not accessible here
    //console.log("blockScopedLet:", blockScopedLet);
    // console.log("blockScopedConst:", blockScopedConst);
  }
  example1();


  function add(a,b){
    return a+b;
  }
  console.log("sum :",add(1,2)); //Nan because add function is overridden and now it takes 3 variables
  
  /*Imp Note: In JavaScript, you can call a function before its declaration due to a feature called "hoisting."
   Hoisting is a behavior where function and variable declarations are moved to the top of their 
   containing scope during the compilation phase. As a result, you can invoke a function before its 
   actual declaration in the code */
   console.log("sum :",add(1,2,3)); // output:6

  function add(a,b,c){
    return a+b+c;
  }

  console.log("sum :",add(1,2,3)); //output:6
  /*note: even though if we give same names for different functions it will not throw
   error but it is not good practice becuase the recntly written function overrides all the functions with
   same name which are declared earlier */

  /*obervation even if we try to call a function before its actual declaration in the code,
   it will print the  results.
   But if we try to print the value of var before its actyal declaration in the code, it will
   neither print the value nor throws error but displays undefined */