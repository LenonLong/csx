/*
Challenge: While Loops - Conditional Expression

Initialize a variable addThis to 0 and a variable sum to 0. Use a while loop to repeat a code block as long as addThis is less than 10. 
In the code block, add the value of addThis to sum, then increment addThis by 1. After the while loop runs, the value of sum should be 
the sum of the numbers 0 through 9. It's crucial to note that if there's more than one statement in the loop block, the entire block needs 
to be enclosed in curly braces {}. This ensures that all statements within the block are executed together in each iteration of the loop.
*/
// ADD CODE HERE
let addThis = 0;
let sum = 0;

while (addThis < 10) {
    sum += addThis;
    addThis++;
}
// Uncomment the line below to check your work!
console.log(sum); // => 45

console.log(addThis) // => 10
