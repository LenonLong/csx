/*
Challenge: Functions - Function Expression
Convert the function named functionDeclaration to an anonymous function expression and assign it to a variable called myFunc.
*/
// Modify this code:
// function functionDeclaration() {
//     return "Hi there!";
//   }

  const myFunc = (() => `Hi there!`)

  console.log(myFunc()) //should log: "Hi there!"
