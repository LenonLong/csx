/*
Challenge: cycleIterator
Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. 
When first invoked, the returned function will return the first element of the array. When invoked a second time, 
the returned function will return the second element of the array, and so forth. After returning the last element of the array,
the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.
*/
// ADD CODE HERE
const cycleIterator = (arr) => {
    let index = 0;
    
    return () => {
       const result = arr[index];
       index = (index + 1) % arr.length
       return result;
    }
}
// Uncomment these to check your work!
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'
/*
1.We initialize a variable called index which will keep track of the current position in the array.
2. We return an inner function. This function is a closure, meaning it retains access to variables from its containing scope (in this case, the cycleIterator function).
3. We retrieve the element from the array arr at the current index and store it in the variable result.
4. We update the value of index to move to the next element in the array. If index is at the last position in the array (arr.length - 1), 
   we reset it to 0, allowing the iteration to cycle back to the beginning of the array.

5. We return the result, which is the element at the current index.

Now, when you create an iterator using cycleIterator and invoke it repeatedly (getDay() in this case), it will return each element of the array cyclically, 
starting from the first element, moving to the second, and so on, until it reaches the end of the array, at which point it loops back to the beginning.
*/
