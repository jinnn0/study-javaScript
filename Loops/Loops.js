/**
 * Loops
 
 * Loops can execute a block of code a number of time

 * For      : loops through a block of code a number of times until a specified condition evaluates to "false"
 * For in   : loops through the properties / keys of an object
 * For of   : loops through the values of an iterable object (Array, Map, Set, String, etc)
 * while    : loops through a block of code while a specified condition is true
 * do while : same as while loop
 */

/*
 * For loop
 */
for (let i = 0; i < 10; i++) {
  console.log(i);
}

/*
 * For in 
 */
const song = {
  title: 'untitled',
  artist: 'Daniel',
  genre: 'pop'
};

// Variable : a different property name is assigned to variable on each iteration.
for (variable in object) {
  ...statement
}

for (key in song) {
  console.log(key, song[key]); // title, artist, genre
}

/*
 * For of  (added in ES6)
 */
const array = [3, 5, 7];
array.foo = 'hello';

const set = new Set('string');

// variable : on each literation a value of a different property is assigned to variable
for (variable of iterable) {
  ...statement
}

for (let item in array) {
  console.log(item); // logs "0", "1", "2", "foo"
}

for (let item of set) {
  console.log(item); // logs "s", "t", "r", "i", "n", "g"
}


/*
 * While
 */
let i = 0;
while (i < 5) {
  i++;
  console.log(i); // 1,2,3,4,5
}


/*
 * Do while
 */
let result = '';
let i = 0;

do {
  i = i + 1;
  result += i;
} while (i < 5); // "12345"


