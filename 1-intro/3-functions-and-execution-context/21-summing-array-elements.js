/*
Challenge: For Loops - Summing Array Elements
Using a FOR loop, write a function getTheSum which adds each element in arr to find the array total.
*/
function getTheSum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
  }
  
  // Uncomment these to check your work!
  console.log(getTheSum([3, 6, 9])); // expected log 18
  console.log(getTheSum([10, 11, 12])); // expected log 33
