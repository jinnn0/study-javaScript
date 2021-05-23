/**
 * String Methods
 */

const one = 'learning 20 javascript string methods';
const two = ' searches: ynd, and, end, tend, owed ';
const three = 'There is a banana and an orange, ';
const four = 'HELLO';

// 00. length
console.log(one.length);

/**
 * Joins two or more strings
 */
// 01. concat()
console.log(one.concat(two, three)); // learning 20 javascript string methods searches: ynd, and, end, tend, owedThere is a banana and an orange,

/**
 * Character code
 */
// 02. charAt()
console.log(one.charAt(1)); // e

// 03. charCodeAt()
console.log(one.charCodeAt(1)); // 101

// 04. fromCharCode()
console.log(String.fromCharCode(101)); // e

/**
 * Find the index of ..
 */
// 05. indexOf() - first found occurrence
console.log(three.indexOf('an')); // 12
console.log(three.indexOf('foo')); // -1, if deosn't exist

// 06. lastIndexOf() - last found occurrence
console.log(three.lastIndexOf('an')); // 27

// 07. search() - accept string or regex
console.log(two.search('apple')); // -1 if doesn't exist
console.log(two.search(/[aey]nd/g)); // 11, indes of 'and'

/**
 * Returns the array of matches
 */
// 08. match()
console.log(two.match('ynd')); // ["ynd", index: 11, input: "searches: ynd, and, end, tend, owed", groups: undefined]
console.log(two.match(/[aey]nd/g)); // ["ynd", "and", "end", "end"]

/**
 * Does it include / startWith / endsWith ? (true / false)
 */
// 09. includes()
console.log(one.includes('foo')); // false

// 10. endsWith()
console.log(one.endsWith('methods')); // true
console.log(one.endsWith('method')); // false
console.log(one.endsWith('ds')); // true

// 11. startWith()
console.log(one.startsWith('learning')); // true

/**
 * Extracting parts of the string
 */
// 12. slice (startPos, endPos - not including)
console.log(one.slice(1, 3)); // ear

// 13. substr (startPos, number of characters to include)
console.log(one.substr(1, 3)); // // ear

// 14. substring (startPos, endPos)
console.log(one.substring(1, 3)); // ear

/**
 * Other methods
 */
// 15. split()
console.log(one.split(' ')); // ["learning", "20", "javascript", "string", "methods"]
console.log(two.split(',')); // [" searches: ynd", " and", " end", " tend", " owed "]

// 16. trim() - Removes whitespace from both ends of a string
console.log(two.trim());

// 17. replace()
console.log(three.replace('an', 'oo')); // only the first occurrence => There is a booana and an orange,
console.log(three.replace(/an/g, 'oo')); // all occurrences => There is a booooa ood oo orooge,

// 18. repeat()
console.log(four.repeat(3)); // HELLOHELLOHELLO

// 19. toUpperCase() - doesn't change the original string
console.log(three.toUpperCase()); // THERE IS A BANANA AND AN ORANGE,

// 20. toLowerCase() - doesn't change the original string
console.log(four.toLocaleLowerCase()); // hello

// 21. toString()
const num = 12;
console.log(num.toString()); // "12"
