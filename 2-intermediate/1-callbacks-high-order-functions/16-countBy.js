/*
Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array 
and perform the callback on each element. Each return value from the callback will be saved as a key on the object. 
The value associated with each key will be the number of times that particular return value was returned.
*/
// ADD CODE HERE
const countBy = (arr, callback) => {
    let result = {};
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i]) === 'even') {
            evenCount++
            result['even'] = evenCount
        } else {
            oddCount++
            result['odd'] = oddCount
        }
    }
    return result
}
// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
