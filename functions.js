/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

let l1 = 7
let l2 = 9

function area(l1, l2) {
  return l1 * l2
}

console.log("The area of the associated rectangle is: " + area(l1, l2))

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

let int1 = 10
let int2 = 12
let sum = int1 + int2

function crazySum(int1, int2) {
  if (int1 === int2) {
    let newSum = (int1 + int2) * 3
    return newSum
  } else {
    return sum
  }
}

console.log("The resulting sum is: " + crazySum(int1, int2))

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

let givenNumber = 25
let comparitiveNumber = 19

function crazyDiff(givenNumber, comparitiveNumber) {
  if (givenNumber > comparitiveNumber) {
    return (givenNumber - comparitiveNumber) * 3
  } else {
    return givenNumber - comparitiveNumber
  }
}

console.log(
  "The absolute difference is: " + crazyDiff(givenNumber, comparitiveNumber)
)

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

let n = 35

function boundary(n) {
  if (n > 20 && n <= 100) {
    return true
  } else {
    return n === 400
  }
}

console.log(boundary(n))

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

let myStr = "Capybara"

function strivify(myStr) {
  if (myStr === "Strive") {
    return myStr
  } else {
    return (myStr = myStr.replace(/^/, "Strive "))
  }
}

console.log(strivify(myStr))

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

let posNum = 10

function check3and7(posNum) {
  if (posNum % 3 === 0 || posNum % 7 === 0) {
    return true
  } else {
    return false
  }
}

console.log(check3and7(posNum))

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

let favouriteIceCream = "Mint Choc Chip"

function reverseString(favouriteIceCream) {
  return favouriteIceCream.split("").reverse().join("")
}

console.log(reverseString(favouriteIceCream))

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

let fullName = "joe mama"

function upperFirst(fullName) {
  return fullName.charAt(0).toUpperCase() + fullName.substring(1)
}

console.log(upperFirst(fullName))

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

let str = "Epicode"

function cutString(str) {
  return str.slice(1, -1)
}

console.log(cutString(str))

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

let number = function giveMeRandom() {}

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
