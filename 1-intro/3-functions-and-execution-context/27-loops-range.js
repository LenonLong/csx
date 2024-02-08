/*
Challenge: Loops - Range

Using a loop, write a function getTheRange which finds the range (difference between high and low) of arr. 
The value returned should be an array with the low, high, and range.
*/
function getTheRange(arr){
    let low = Math.min(...arr);
    let max = Math.max(...arr);

    return [low, max, (max - low)]
}
  
  // Uncomment these to check your work!
  console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]
