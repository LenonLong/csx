/*
Challenge: Functions - Adding Arguments

Examine the code given to you. Determine what arguments must be passed into isX and isY respectively to obtain an output of true for both, 
and pass in the arguments accordingly.
*/
const x = 23

function isX(num) {
  const x = 44;
  return num === x;
}

function isY(num) {
  return num ===x;
}

const one = isX(44);
const two = isY(x);

// Uncomment these to check your work!
console.log(one); // should log: true
console.log(two); // should log: true
