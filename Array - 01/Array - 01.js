/*
 * Array 01

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
 * for loop / for of loop / forEach
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
 * push, pop / unshift, shift / splice / concat
 * unshift and shift are much slower than push, pop, since they need to re-arrange the whole list from the start
 */
users.push('Jane'); // add from the end
users.pop(); // remove from the end
users.unshift('Mike'); // add from the start
users.shift(); // remove from the start

// combine two arrays
const users_2 = ['user1', 'user2', 'user3'];
const combinedUsers = users.concat(users_2);

/**
 * Searching through an array
 * indexOf / lastIndexOf / includes
 */
console.log(users.indexOf('C')); // returns -1 if the item doesn't exist
console.log(users.indexOf('Flora')); // retuns the index of first item it finds
console.log(users.lastIndexOf('Flora')); // returns the index of last item it finds
console.log(users.includes('Wes')); // true

/**
 * Return a string out of an array
 * join / toString
 */
console.log(users.toString()); // Wes,Flora,Apple,Mango,Flora,Casey
console.log(users.join()); // Wes,Flora,Apple,Mango,Flora,Casey
console.log(users.join('')); // WesFloraAppleMangoFloraCasey
console.log(users.join('//')); // Wes//Flora//Apple//Mango//Flora//Casey

/**
 * slice : returns a new array with portion of original array
 */
users.slice(1, 4); // start, end (not included)

/**
 * splice : changes the content of an original array
 */
users.splice(2, 1);
users.splice(2, 1, 'A', 'B'); // start, deleteCount, itemToAdd

/**
 * reverse : reverse an original array
 */
console.log(users.reverse());
console.log(users);