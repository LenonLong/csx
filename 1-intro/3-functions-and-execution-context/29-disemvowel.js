/*
Challenge: disemvowel
Write a function disemvowel that takes in a string and returns a new string with all vowels removed.
*/
function disemvowel(string) {
    let newStr = ''
    let vowels = 'aeiouAEIOU';
    
    for (let i = 0; i < string.length; i++) {
       if (!vowels.includes(string[i])) {
        newStr += string[i]
       }
    }
    return newStr;
  }
  
  // Uncomment these to check your work!
  console.log(disemvowel('CodeSmith')); // => 'CdSmth'
  console.log(disemvowel('BANANA')); // => 'BNN'
  console.log(disemvowel('hello world')); // => 'hll wrld'
