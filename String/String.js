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
// 01. concat() - returns a new joined strings
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
// 12. slice (startPos, endPos - not including) - returns a new string
console.log(one.slice(1, 3)); // ear

// 13. substr (startPos, number of characters to include) - returns a extracted string
console.log(one.substr(1, 3)); // // ear

// 14. substring (startPos, endPos) - returns a extracted string
console.log(one.substring(1, 3)); // ear

/**
 * Other methods
 */
// 15. split()
console.log(one.split(' ')); // ["learning", "20", "javascript", "string", "methods"]
console.log(two.split(',')); // [" searches: ynd", " and", " end", " tend", " owed "]

// 16. trim() - returns a new string with whitespace from both ends of a string removed
console.log(two.trim());

// 17. replace() - returns s new string with value replaced
console.log(three.replace('an', 'oo')); // only the first occurrence => There is a booana and an orange,
console.log(three.replace(/an/g, 'oo')); // all occurrences => There is a booooa ood oo orooge,

// 18. repeat() - returns a new string which contains the specified number of copies
console.log(four.repeat(3)); // HELLOHELLOHELLO

// 19. toUpperCase() - returns a new string that is converted to lowercase letters
console.log(three.toUpperCase()); // THERE IS A BANANA AND AN ORANGE,

// 20. toLowerCase() - returns a new string that is converted to uppercase letters
console.log(four.toLocaleLowerCase()); // hello

// 21. toString()
const num = 12;
console.log(num.toString()); // "12"

/**
 * Simplified list!
 */
// 01. concat() : returns a two or more joined string

// 02. charAt() : returns a UTF-16 code of specified character
// 03. charCodeAt() : returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index
// 04. fromCharCode() :  returns a string created from the specified sequence of UTF-16 code units

// 05. indexOf() : returns an index of the first occurrence of the specified value, returns -1 if doesn't exist
// 06. lastIndexOf() : returns an index of the last occurrence of the specified value, search backwards, returns -1 if doesn't exist
// 07. search() : returns the index of the first match from regular expression, -1 if no match is found

// 08. match() : returns an array of matches found, null if no matches are found

// 09. includes() : returns true/false depends on whether the string in included or not, case-sensitive search
// 10. endsWith() : true/false, whether a string ends with the characters of a specified string
// 11. startsWith() : true/false, whether a string starts with the characters of a specified string

// 12. slice() : returns a new string of extracted section of the string
// 13. substr() : returns a portion of the string, from startPos and to endPost but not including
// 14. substring()

// 15. split() : returns an array of split string
// 16. trim() : returns a new string with whitespace from both ends of a string removed
// 17. replace() : returns s new string with value replaced
// 18. repeat() : returns a new string which contains the specified number of copies
// 19. toUpperCase() : returns a new string that is converted to lowercase letters
// 20. toLowerCase() : returns a new string that is converted to uppercase letters
// 21. toString() : returns a string representing the specified object

// 22. localeCompare()
// 23. tolocaleLowerCase()
// 24. toLocaleUpperCase()
// 25. valueOf()
