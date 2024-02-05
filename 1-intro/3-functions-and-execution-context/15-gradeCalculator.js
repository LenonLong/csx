/*
Challenge: gradeCalculator

Create a function gradeCalculator which takes a grade (number) and returns its letter grade.

grades 90 and above should return "A"

grades 80 to 89 should return "B"

grades 70 to 79 should return "C"

grades 60 to 69 should return "D"

59 and below should return "F"
*/
const gradeCalculator = grade => {
    return  grade <= 59 ? `F` : 
            grade >= 60 && grade <= 69 ? `D` : 
            grade >= 70 && grade <= 79 ? `C` : 
            grade >= 80 && grade <= 89 ? `B` : `A`
  }
  
  // Uncomment the lines below to test your code
  console.log(gradeCalculator(92)); // => "A"
  console.log(gradeCalculator(84)); // => "B"
  console.log(gradeCalculator(70)); // => "C"
  console.log(gradeCalculator(61)); // => "D"
  console.log(gradeCalculator(43)); // => "F"
