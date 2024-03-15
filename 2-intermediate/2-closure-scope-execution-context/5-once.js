/*
Challenge: once
Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, 
it should call the callback and return that output. If it is called any additional times, instead of calling the callback again 
it will simply return the output value from the first time it was called.
*/
// ADD CODE HERE

const once = (callback) => {
    let hasBeenCalled = false;
    let result; 

    return (...args) => {
       if (!hasBeenCalled) {
        result = callback(...args);
        hasBeenCalled = true;
       }
       return result
    }
}
  
const addByTwoOnce = once(function(num) {
    return num + 2;
});
  // UNCOMMENT THESE TO TEST YOUR WORK!
  console.log(addByTwoOnce(5));  //should log 7
  console.log(addByTwoOnce(10));  //should log 7
  console.log(addByTwoOnce(9001));  //should log 7

  /*
1. The once function creates a closure over the hasBeenCalled flag and the result.
2. The returned function checks if hasBeenCalled is false. If it is, it calls the callback function with the provided arguments, 
   stores the result, and sets hasBeenCalled to true. If hasBeenCalled is true, it returns the stored result without calling the callback function again.
3. When you call addByTwoOnce for the first time with 5, it executes the callback function num + 2, which results in 7.
4. When you call addByTwoOnce again with 10, it doesn't execute the callback function again; instead, it returns the previous result 7.
  */
