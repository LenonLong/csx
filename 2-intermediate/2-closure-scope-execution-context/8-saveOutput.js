/*
Challenge: saveOutput
Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). 
saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. 
When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values
*/
// ADD CODE HERE
const saveOutput = (func, password) => {
  const output = {};

  return (arg) => {
     if (arg === password) {
        return output
     } else {
        const result = func(arg)
        output[arg] = result
        return result
     }
  }
}
// Uncomment these to check your work!
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }
/*
The saveOutput function takes two parameters: func (the function to be wrapped) and password (the password string).
Inside saveOutput, an empty object output is created to store the output values corresponding to the function arguments.
saveOutput returns an anonymous function that takes a single argument arg.
If the arg passed to the returned function matches the password, it returns the output object.
Otherwise, it calls the original function func with the argument arg, stores the result in the output object with arg as the key, and returns the result.
*/
