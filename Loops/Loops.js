/**
 * Loops

 * For loop
 * For in loop
 * For of loop
 */

/*
 * For loop
 * Loops through a block of code a number of times
 */
for (let i = 0; i < 10; i++) {
  console.log(i);
}

/*
 * For in loop
 * Loops through the properties / key of an object
 */
const song = {
  title: 'untitled',
  artist: 'Daniel',
  genre: 'pop'
};

for (key in song) {
  console.log(key, song[key]); // title, artist, genre
}

/*
 * For of loop (added in ES6)
 * Loops through the values of an iterable object including Array, Map, Set and more
 */
const array = [3, 5, 7];
array.foo = 'hello';

const set = new Set('string');

for (let item in array) {
  console.log(item); // logs "0", "1", "2", "foo"
}

for (let item of set) {
  console.log(item); // logs "s", "t", "r", "i", "n", "g"
}
