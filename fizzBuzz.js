// This Sheet is for the purpose of testing various & possible javaScript interview questions:

// FizzBuzz challenge:
// Write a fuction that prints all numbers from 0-100 for multiples of 3,
// instead of the number, print 'Fizz' in place of 3.
// For all multiples of 5, print 'buzz' instead of 5.
// For all multiples of 3 & 5, print 'FizzBuzz'.
// example. "Hello" === 'l';

// Using the following function:
function fizzBuzz() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) { // i % 15 === 0 will include both 3 & 5 multiples.
            console.log('FizzBuzz')
        } else if (i % 3 === 0) { // Using modular operator.
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i);// console.log(i);// Prints all numbers from 0-100 in console.
        }
    }

}

// Test Outputs for all functions:
const output = fizzBuzz(); // 1st Solution.

// Display outputs in console:
console.log(output);

/////////////////////////////////////////////////////////////////////////The End//////////////////////////////////////////////////////////////////////////////////////////






