/*
Challenge: Loops - Multiple Conditions

Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 to each element under 10 in array1. 
Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.

BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.
*/
function addingAllTheWeirdStuff(array1, array2){
    let evenSum = 0;
    let oddSum = 0;

    for(let i = 0; i < array2.length; i++) {
        if(array2[i] % 2 !== 0) {
            oddSum += array2[i];
        } else {
            evenSum += array2[i];
        }
    }
     // Check if any element in array2 is greater than 20
    let shouldIncrement = false;
    for (let i = 0; i < array2.length; i++) {
      if (array2[i] > 20) {
        shouldIncrement = true;
        break;
      }
    }
    // Modify elements in array1 based on conditions
  const result = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] < 10) {
      result.push(array1[i] + oddSum);
    } else if (array1[i] > 10) {
      result.push(array1[i] + evenSum);
    } else {
      result.push(array1[i]);
    }
  }

  // Increment all elements in array1 if any element in array2 is greater than 20
  if (shouldIncrement) {
    for (let i = 0; i < result.length; i++) {
      result[i]++;
    }
  }

  return result;
}
  
  // Uncomment these to check your work!
  console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
  console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
  