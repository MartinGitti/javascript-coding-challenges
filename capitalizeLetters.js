// This Sheet is for the purpose of testing various & possible javaScript interview questions:

// Capitalize Letters:
// Convert all letter characters to uppercase.
// eg. "hello" === "HELLO";

// Using the following function:
function capitalizeLetters(str) {
    const strArr = str.toLowerCase().split(' '); // Add space when working with sentences.

    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].substring(0, 1).toUpperCase() +
            strArr[i].substring(1);
    }
    return strArr.join(' ');// add space when working with sentences.
}

// Using the the map method for this function, solution two:
function capitalizeLettersMap(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word[0].toUpperCase() + word.substring(1))
        .join(' ');
}

/*
The above function using a normal function instead of an arrow function:
function capitalizeLettersMap(str) {
    return str

        .toLowerCase()
        .split(' ')
        .map(function (word) {
            return word[0].toUpperCase() + word.substring(1);
        })
        .join(' ');
}
*/

// last option s a solution using regular expressions:
function capitalizeLettersExp(str) {
    // Regular expression takes in slashes, using \b word boundary,[a-z] range, g for global & i for case insensitive:
    return str.replace(/\b[a-z]/gi, function (char) {
        return char.toUpperCase();
    })
}



// Test Outputs for all functions with sample 'string' provided:
const outputOne = capitalizeLetters('i love javascript!'); // 1st Solution.
const outputTwo = capitalizeLettersMap('i still love javascript!'); // 2nt Solution.
const outputThree = capitalizeLettersExp('love for javascript to be continued!'); // 1rd Solution.

// Display outputs in console:
console.log(outputOne);
console.log(outputTwo);
console.log(outputThree);

/////////////////////////////////////////////////////////////////////////The End//////////////////////////////////////////////////////////////////////////////////////////






