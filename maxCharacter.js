// This Sheet is for the purpose of testing various & possible javaScript interview questions:

// Max character challenge:
// Return the character that is most common in the string.
// example. "Hello" === 'l';

// Using the following function:
function maxCharacter(str) {
    const charMap = {} // Character Map set to empty object literal.
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(function (char) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    });
    // console.log(charMap);// This will show the amount of times each character appears in the string.

    for (let char in charMap) {
        if (charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char
        }
    }

    return maxChar;
}

// Test Outputs for all functions with sample 'string' provided:
const output = maxCharacter('WhichLetterIsMostCommon?'); // 1st Solution.

// Display outputs in console:
console.log(output);

/////////////////////////////////////////////////////////////////////////The End//////////////////////////////////////////////////////////////////////////////////////////






