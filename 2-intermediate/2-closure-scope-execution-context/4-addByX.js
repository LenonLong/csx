/*
Challenge: addByX
Now we are going to create a function addByX that returns a function that will add an input by x.

const addByTwo = addByX(2);
addByTwo(1); //should return 3
addByTwo(2); //should return 4
addByTwo(3); //should return 5

const addByThree = addByX(3);
addByThree(1); //should return 4
addByThree(2); //should return 5

const addByFour = addByX(4);
addByFour(4); //should return 8
addByFour(10); //should return 14
*/
// ADD CODE HERE
const addByX = (x) => {
    return (input) => {
        return input + x
    }
}
const addByTwo = addByX(2);

// Now call addByTwo with an input of 1 and log the output
console.log(addByTwo(1)) // 2 + 1 = 3
// Now call addByTwo with an input of 2 and log the output
console.log(addByTwo(2)) // 2 + 2 = 4
