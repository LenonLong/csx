/*
Challenge: arrayBuilder
Write a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. 
The order of the elements in the array does not matter, but repeated elements should be grouped.
*/
const arrayBuilder = obj => {
    let result = [];
    
    // Iterate over the keys of the object
    for (let key in obj) {
    // Determine the count of the current element
    let count = obj[key]; 
    
    for (let i = 0; i < count; i++) {
        // Add the current element to the result array 'count' times
        result.push(key);
     }
    }
    return result
  }
  
  // Uncomment these to check your work!
  console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
  // console.log(arrayBuilder({})); // => []
