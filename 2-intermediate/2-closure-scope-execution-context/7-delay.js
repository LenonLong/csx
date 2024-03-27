/*
Challenge: delay
Write a function delay that accepts two arguments, a callback and the wait time in milliseconds. 
Delay should return a function that, when invoked waits for the specified amount of time before executing. HINT - research setTimeout();
*/
// ADD CODE HERE
const delay = (callback, wait) => {
 return (...args) => {
    setTimeout(() => callback(...args), wait)
 }
}
// UNCOMMENT THE CODE BELOW TO TEST DELAY
let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); 						 // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second


/*
The delay function is used to create delayedFunc, which delays the execution of the callback function () => count++ by 1 second.
When delayedFunc is invoked, it schedules the execution of the callback function after a 1-second delay.
The first console.log statement immediately prints 0 because the callback function has not been executed yet.
After approximately 1 second, both the callback function inside delayedFunc and the console.log statement inside the setTimeout are executed.
The callback function increments count to 1.
The console.log statement prints 1 to the console.
*/
