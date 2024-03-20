/*
Challenge: after
Write a function after that takes the number of times the callback needs to be called before being executed 
as the first parameter and the callback as the second parameter.
*/
// ADD CODE HERE
const after = (count, callback) => {
    let callCount = 0;

    return (...args) => {
        callCount++;

        if (callCount >= count) {
          return  callback(...args);
        }
    }
}

const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed
/*
1. It takes two parameters: count (the number of times the callback needs to be called before being executed) and 
   callback (the function to be executed after being called the required number of times).

2. Inside the after function, we declare a variable callCount and initialize it to 0. This variable will keep 
   track of how many times the callback has been called.

3. The after function returns a new function which will be called each time the callback needs to be called.
4. Inside the returned function, we increment the callCount variable.
5. If the callCount is greater than or equal to the count parameter, we execute the callback function with the arguments that were passed to the returned function.
6. If the callCount is less than the count parameter, we simply return undefined.

In the provided example, we create a function called that takes a string and returns 'hello ' + string. Then, we create a new function 
afterCalled using the after function, passing 3 as the count parameter and called as the callback parameter.

When we call afterCalled('world') the first two times, it returns undefined because the callCount is still less than 3. 
On the third call, it executes the called function with the argument 'world' and returns 'hello world'
*/
