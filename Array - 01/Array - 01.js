/*
 * Array 01
 
 * Array stores a list of data separated by comma 
 * The insertion order is preserved
 * Elements can be accessed by its index
 * Duplicate values are allowed
 * Iterable
 * The size/length of the array is adjusted dynamically 

 * Declaration
 * Index position
 * Looping over an array
 * Add, delete, copy
 * Searching through an array
 * Return a string out of an array
 */

/**
 * Declaration
 */
const array1 = new Array();
const array2 = []; // array literal

/**
 * Index position
 */
const users = ['Wes', 'Flora', 'Apple', 'Mango', 'Flora', 'Casey'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[users.length - 1]); // last element in the list

/**
 * Looping over an array
 * for loop / for of loop / 01. forEach
 */
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

for (let user of users) {
  console.log(user);
}

users.forEach((user, index) => console.log(user, index));

/**
 * Add, delete
 * 02 - 05 : push, pop / unshift, shift
 * unshift and shift are much slower than push, pop, since they need to re-arrange the whole list from the start
 */
users.push('Jane'); // add from the end
users.pop(); // remove from the end
users.unshift('Mike'); // add from the start
users.shift(); // remove from the start

/**
 * Combine two arrays
 * 06. concat
 */
const users_2 = ['user1', 'user2', 'user3'];
const combinedUsers = users.concat(users_2);
console.log(combinedUsers); // ["Wes", "Flora", "Apple", "Mango", "Flora", "Casey", "user1", "user2", "user3"]

/**
 * Searching through an array
 * 07 - 09 : indexOf / lastIndexOf / includes
 */
console.log(users.indexOf('C')); // returns -1 if the item doesn't exist
console.log(users.indexOf('Flora')); // retuns the index of first item it finds
console.log(users.lastIndexOf('Flora')); // returns the index of last item it finds
console.log(users.includes('Wes')); // true

/**
 * Return a string out of an array
 * 10 - 11 : join / toString
 */
console.log(users.toString()); // Wes,Flora,Apple,Mango,Flora,Casey
console.log(users.join()); // Wes,Flora,Apple,Mango,Flora,Casey
console.log(users.join('')); // WesFloraAppleMangoFloraCasey
console.log(users.join('//')); // Wes//Flora//Apple//Mango//Flora//Casey

/**
 * 12. slice : returns a new array with portion of original array
 */
users.slice(1, 4); // start, end (not included)

/**
 * 13. splice : changes the content of an original array
 */
users.splice(2, 1);
users.splice(2, 1, 'A', 'B'); // start, deleteCount, itemToAdd

/**
 * 14. reverse : reverse an original array
 */
console.log(users.reverse());
console.log(users);

/**
 * Array use case 01 : Rotate elements in an array
 */
const array = [3, 8, 9, 7, 6]; // -> [9, 7, 6, 3, 8]
const rotation = 3;

function rotateArray(array, rotation) {
  for (let i = 0; i < rotation; i++) {
    console.log(i);
    array.unshift(array.pop());
  }
  return array;
}

rotateArray(array, rotation);
