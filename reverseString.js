// This Sheet is for the purpose of testing various & possible javaScript interview questions:

// 1st Question:
// Reverse a simple javascript string by displaying it backwards.
// eg. "Hello" = "olleh";

// Using the following function:

function revStringOri(str) {
    const stringArray = str.split(''); // Seperate each letter from the string into their own arrays.
    stringArray.reverse();// Pass in the variable with the split letters and reverse the letters.
    return stringArray.join('');// Convert the reversed letters back into a string.
    console.log(stringArray);// Test output
}

// Simpler/Neater way of writing this:
function revStringNeat(str) {

    return str
        .split('')
        .reverse()
        .join('')
}

// Solution using de-incrementing For Loop:
function revStringForLoopDe(str) {
    let revString = '';
    for (let i = str.length - 1; i >= 0; i--) { // minus 1 because loop has more character spaces than letters of string.
        revString = revString + str[i];
        console.log(i)// To show that the loop has 5 spaces and letters of string are 1 space less.
        // The string 'Hello 3' takes 7 spaces and the loop is actually 8 spaces long because it loops from 0.
    }
    return revString;
}

// Solution using an incrementing For Loop:
function revStringForLoopIn(str) {
    let revString = '';
    for (let i = 0; i <= str.length - 1; i++) { // minus 1 because loop has more character spaces than letters of string.
        revString = str[i] + revString;
        console.log(i)// To show that the loop has 5 spaces and letters of string are 1 space less.
        // The string 'Hello 3' takes 7 spaces and the loop is actually 8 spaces long because it loops from 0.
    }
    return revString;
}

// Solution using a ForOf Loop with ES6:
function revStringForOfLoop(str) {
    let revString = '';
    for (char of str) { // 'char' can be anything.
        revString = char + revString;
    }
    return revString;
}

// Solution using a ForEach Loop:
function revStringForEachLoop(str) {
    let revString = '';
    str.split('').forEach(function (char) {
        revString = char + revString;
    });
    return revString;
}

/*
//Neater way of coding this...
//Using an arrow function:

function revStringForEachLoop(str) {
    let revString = '';
    str.split('').forEach(char => {
        revString = char + revString;
    });
    return revString;
}
*/

// Reduce method used to reverse string:
function revStringReduce(str) {
    return str.split('').reduce((revString, char) =>
        char + revString, '');
}

// Test Outputs for all functions with sample 'string' provided:
const outputOne = revStringOri('Hello 1'); // 1st Solution.
const outputTwo = revStringNeat('Hello 2'); // 2nd Solution.
const outputThree = revStringForLoopDe('Hello 3'); // 3rd Solution.
const outputFour = revStringForLoopIn('Hello 4'); // 4rth Solution.
const outputFive = revStringForOfLoop('Hello 5'); // 4rth Solution.
const outputSix = revStringForEachLoop('Hello 6'); // 4rth Solution.
const outputSeven = revStringReduce('Hello 7'); // 4rth Solution.

// Display outputs in console:
console.log(outputOne);
console.log(outputTwo);
console.log(outputThree);
console.log(outputFour);
console.log(outputFive);
console.log(outputSix);
console.log(outputSeven);

/////////////////////////////////////////////////////////////////////////The End//////////////////////////////////////////////////////////////////////////////////////////






