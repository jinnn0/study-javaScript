/**
 * Destructuring

 * Destructuring Objects
 * Neatly assigns values taken directly from an object
 * Create and assign values
 * Assign a new variable name when extracting
 * Nested objects

 * Destructuring Arrays

 */

/**
 * Object Destructuring
 */
const user = {
  name: 'Sarah Kim',
  age: 27,
  bio: {
    city: 'Paris',
    color: 'orange'
  }
};

const name = user.name; // 'Sarah Kim'
const age = user.age; // 27

// 01 - The variables are created and assigned the values of user object
const { name, age } = user; // name = 'Sarah Kim', age = 27

// 02 - Assign a new variable name when extracting values
const { name: userName, age: userAge } = user; // userName = 'Sarah Kim', userAge = 27

// 03 - Nested object
const {
  bio: { city, color }
} = user;

// 04 - Object as a function's parameters - only pass in the values you want
const getData = (data) => {
  const { name, age, city } = data;
};

const getData = ({ name, city }) => {};

/**
 * Array Destructuring
 */
const array = [1, 2, 3, 4, 5];

const x = array[0]; // 1
const y = array[1]; // 2

// 05
const [x, y] = array; // 1, 2

// 06 - Use commas to reach the desired index
const [x, , , y] = array; // 1, 4

// 07
let a = 8,
  b = 6;
[a, b] = [b, a]; // a = 6, b = 8

// 08 - rest parameter for the last variable in the list
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7]; // a = 1, b = 2, arr = [3, 4, 5, 7]
