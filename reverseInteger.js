// This Sheet is for the purpose of testing various & possible javaScript interview questions:

// 1st Question:
// Reverse a simple javascript number by displaying it backwards.
// eg. "12345" = "54321";

// Using the following function:
function revNumber(int) {
    /* Convert integer to string, split, reverse order, join as string again and dispaly.*/
    const revString = int.toString()
        .split('')
        .reverse()
        .join('');
    return parseInt(revString)/* add following to handle negative numbers: */
        * Math.sign(int);
}

// Test Outputs for all functions with sample number provided:
const output = revNumber(12345); // 1st Solution.
const outputNeg = revNumber(-12345); // 1st Solution.

// Display outputs in console:
console.log(output);
console.log(outputNeg);


/////////////////////////////////////////////////////////////////////////The End//////////////////////////////////////////////////////////////////////////////////////////





