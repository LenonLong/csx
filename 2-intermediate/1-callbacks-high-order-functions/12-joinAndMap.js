/*
Construct a function joinAndMap with three parameters: array1, array2, and a callback function. 
The function should combine the two arrays then invoke the callback function on each element, 
returning the resulting array. This function should not mutate the passed-in arrays.
*/
// ADD CODE HERE
const joinAndMap = (arr1, arr2, callback) => {
    const joinArr = arr1.concat(arr2);
    const result = [];
    for (let ele of joinArr) {
       result.push(callback(ele))
    }
    return result
}
// Uncomment these to check your work!
const arrRed = ['strawberry', 'cherry', 'wine'];
const arrBlue = ['blueberry', 'sky', 'ocean'];
const capitalize = str => str.toUpperCase();
console.log(joinAndMap(arrRed, arrBlue, capitalize)); // should log: ['STRAWBERRY', 'CHERRY', 'WINE', 'BLUEBERRY', 'SKY', 'OCEAN']
