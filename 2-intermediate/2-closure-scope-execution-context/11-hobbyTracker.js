/*
Challenge: hobbyTracker
Create a function hobbyTracker that takes an array of hobbies as a parameter and creates a cache object with each hobby as a key. 
hobbyTracker should return a function that takes a string representing the hobby and an integer representing how many hours practiced as parameters.

When the returned function is invoked, it should update the cache object adding the value of the passed in integer to the cache at the 
key corresponding with the passed in 'hobby' then should return the updated cache object. If the returned function is invoked with no arguments, 
it should reset all values in the cache object to zero and return the string 'tracker has been reset!'

const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);

updateHobbies('yoga', 2); 
// { yoga: 2, baking: 0, piano: 0 }

updateHobbies('baking', 3);
// { yoga: 2, baking: 3, piano: 0 }

updateHobbies(); 
// 'tracker has been reset!'
*/
function hobbyTracker(hobbies) {
    // Initialize the cache object with each hobby as a key
    const cache = {};
    hobbies.forEach((hobby) => {
      cache[hobby] = 0;
    });
  
    // Return the function that updates the cache
    return  (hobby, hours) => {
      if (hobby && hours !== undefined) {
        // Update the cache with the provided hours
        cache[hobby] += hours;
        return cache;
      } else {
        // Reset all values in the cache to zero
        Object.keys(cache).forEach((key) => {
          cache[key] = 0;
        });
        return 'tracker has been reset!';
      }
    };
  }
// Uncomment the code below to check your code:
const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);
updateHobbies('baking', 4);
updateHobbies('yoga', 1);
console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}

/*
1. Initialization of Cache Object: The function takes an array of hobbies as its parameter. It initializes a cache object where each hobby is a key, 
    and the initial value for each hobby is set to 0. This ensures that each hobby starts with zero hours tracked.
    
2. Return Inner Function: After initializing the cache object, the function returns an inner function. This inner function is what actually 
    updates the cache based on the provided hobby and hours, or resets the cache if invoked without arguments.

3. Inner Function: This function takes two parameters: hobby and hours. If both hobby and hours are provided (i.e., truthy), it updates the cache 
    with the provided hours for the specified hobby. It increments the existing value for that hobby in the cache by the provided hours.

4. Resetting the Tracker: If either hobby or hours is not provided (or hours is explicitly undefined), the function interprets it as a request to reset the tracker.
     In this case, it resets all values in the cache to zero by iterating over the keys of the cache object and setting their values to 0.

5. Return Value: Depending on whether the tracker is reset or updated, the function returns either the updated cache object or a string indicating 
    that the tracker has been reset.
*/
