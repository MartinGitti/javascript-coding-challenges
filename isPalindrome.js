// This Sheet is for the purpose of testing various & possible javaScript interview questions:

// Validate Palidrame:
// Testing to see if a string is a palindrone or not(true || false).
// Palindrome means that you can read a word from left to right and visa versa and it'll still be the same word.
// eg. left-right= "racecar" === right-left= "racecar" || "madam" === "madam";

// Using the following function:
function isPalindrome(str) {
    const revString = str.split('').reverse().join('');

    return revString === str;
}

// Test Outputs for all functions with sample 'string' provided:
const outputOne = isPalindrome('racecar'); // 1st Solution.
const outputTwo = isPalindrome('Hello'); // 2st Solution.

// Display outputs in console:
console.log(outputOne);
console.log(outputTwo);


/////////////////////////////////////////////////////////////////////////The End//////////////////////////////////////////////////////////////////////////////////////////






