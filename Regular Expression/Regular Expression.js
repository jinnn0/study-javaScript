/**
 * Regular expression

 * Often refered as 'regex' is pattern that help programmers match, search and replace text
 * You can create patterns to help you do that matching
 * /regex/i (flag)
 */

const string = 'There is a banana and an orange, ';
const stringTwo = 'Twinkle, twinkle, little star';

// 01 - Check if a single literal match exists or not with test() method
const regexOne = /a/;
const regexTwo = /an/;
const regexThree = /An/;

console.log(regexTwo.test(string)); // true, pattern found something
console.log(regexThree.test(string)); // // false, not match

// 02 - Check if any of these patterns exist or not with "or (|)" operator
const regexFour = /is|hello|banana/;
console.log(regexFour.test(string)); // true

// 03 - Check if a single pattern exists or not no matter its case  with "i flag" (ignores case)
const regexFive = /Banana/i;
console.log(regexFive.test(string)); // true

// 04 - Extract the first matche
console.log(string.match(regexFive)); // ["banana", index: 11, input: "There is a banana and an orange", groups: undefined]
console.log(string.match(regexOne)); // ["a", index: 9, input: "There is a banana and an orange", groups: undefined]

// 05 - Extract all matches rather than stopping ater first match with "g flag"
const regexSix = /an/g;
const regexSeven = /Twinkle/gi;

console.log(string.match(regexSix)); // (5) ["an", "an", "an", "an", "an"]
console.log(stringTwo.match(regexSeven)); // ["Twinkle", "twinkle"]
