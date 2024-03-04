/*
Challenge: groupBy
Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array 
and perform the callback on each element. Each return value from the callback will be saved as a key on the object. 
The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.
*/
// ADD CODE HERE
const groupBy = (arr, callback) => {
    const result = {}; // Initialize an empty object to store the grouped elements
    
    // Iterate through each element of the input array
    arr.forEach(element => {
        
        // Apply the callback to the current element to get the key
       const key = callback(element); // 1, 2, 2
       
       // If the key doesn't exist in the result object
        if(!result[key]) {
            // Initialize an empty array for the key
            result[key] = []
        }
        // Push the current element to the array associated with the key
        result[key].push(element)
    });
        // Return the object with grouped elements
        return result
    
 }
// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
