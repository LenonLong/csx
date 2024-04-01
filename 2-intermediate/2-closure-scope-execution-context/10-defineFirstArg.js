/*
Challenge: defineFirstArg
Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. 
defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. 
Additional arguments needed by the passed-in function will need to be passed into the returned function.
*/
// ADD CODE HERE
const defineFirstArg = (callback, arg) => {

    return (...args) => {
       return callback(arg, ...args)
    }
}
// Uncomment these to check your work!
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15

/*
1. defineFirstArg is a higher-order function that takes callback and arg as parameters.
2. It returns an arrow function that accepts any number of arguments (...args).
3. Inside the returned function, it invokes the callback function with arg as the first argument followed by spreading args (additional arguments passed to the returned function).
4. Finally, it returns the result of invoking callback with the modified argument list.

This implementation ensures that the callback function provided to defineFirstArg receives the specified arg as its first argument, 
followed by any additional arguments passed when invoking the returned function.
*/
