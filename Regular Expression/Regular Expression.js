/**
 * Regular expression

 * Often refered as 'regex' is pattern that help programmers match, search and replace text
 * You can create patterns to help you do that matching
 * /regex/i (flag)
 */

// 01 - Check if a single literal match exists or not - test()
const string1 = 'There is a banana and an orange, ';
const string2 = 'Twinkle, twinkle, little star';

const regex1 = /a/;
const regex2 = /an/;
const regex3 = /An/;

console.log(regex2.test(string1)); // true, pattern found something
console.log(regex3.test(string1)); // false, not match

// 02 - Check if any of these (is, hello, banana) patterns exist or not - "or (|)" operator
const regex4 = /is|hello|banana/;

console.log(regex4.test(string1)); // true

// 03 - Check if a single pattern exists or not no matter its case  - "i flag" (ignores case)
const regex5 = /Banana/i;

console.log(regex5.test(string1)); // true

// 04 - Extract the first match
console.log(string1.match(regex1)); // ["a", index: 9, input: "There is a banana and an orange", groups: undefined]
console.log(string1.match(regex5)); // ["banana", index: 11, input: "There is a banana and an orange", groups: undefined]

// 05 - Extract all matches rather than stopping ater first match - "g flag"
const regex6 = /an/g;
const regex7 = /Twinkle/gi;

console.log(string1.match(regex6)); // (5) ["an", "an", "an", "an", "an"]
console.log(string2.match(regex7)); // ["Twinkle", "twinkle"]

// 06 - Extract single match with multiple possibilities - [character classes]
const array1 = ['hug', 'hog', 'heg', 'hag'];
const string3 = 'Beware of bugs in the above code; I have only proved it correct, not tried it.';

const regex8 = /h[uoa]g/;

array1.forEach((item) => {
  console.log(item.match(regex8));
});

const regex9 = /[aeiou]/gi;

console.log(string3.match(regex9)); // ["e", "a", "e", "o", "u", "i", "e", "a", "o", "e", "o", "e", "I", "a", "e", "o", "o", "e", "i", "o", "e", "o", "i", "e", "i"]

// 07 - Define a range of characters to match - hyphen
const array2 = ['and', 'hend', 'hynd'];

const regex10 = /h[a-g]nd/g;

array2.forEach((item) => {
  console.log(item.match(regex10)); // null, ["hend"], null
});

// 08 - Define a range of numbers to match - hyphen
const string4 = 'my birthday is 17062000 aab and';

const regex11 = /[a-z0-9]/gi;

console.log(string4.match(regex11));

// 09 - Define a character set you don't want to match - ^
const regex12 = /[^my]/gi;

console.log(string4.match(regex12));

// 10 - Match character that occurs one or more - +
const regex13 = /a+/gi;

console.log(string4.match(regex13)); // ["a", "aa", "a"]
