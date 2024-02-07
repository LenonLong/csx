/*
Challenge: makePlural

Create a function makePlural that accepts an array argument. makePlural will iterate through the array, 
add an 's' to the end of each array element, and return the mutated array.
*/
function makePlural(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(`${arr[i]}s`)
    }
    return result;
  } 
  
  
  const arr1 = ['lion', 'tiger', 'bear']
  const arr2 = ['computer', 'video game', 'system']
  
  // Uncomment these to check your work!
  console.log(makePlural(arr1)); // should log: ['lions', 'tigers', 'bears']
  console.log(makePlural(arr2)); // should log: ['computers', 'video games', 'systems']
