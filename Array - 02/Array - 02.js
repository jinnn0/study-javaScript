/**
 * Array 02
 */

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('Blake, William', 29, true, 45),
  new Student('Jean, Lynne', 28, false, 80),
  new Student('Charlie, Jaimie', 30, true, 90),
  new Student('Lauren, Carlene', 40, false, 66),
  new Student('Jeffrey, Blake', 18, true, 88)
];

/**
 * find (added in ES6) : returns the fisrt item that matches the condition
 * "Find a student with the score 90"
 */
const find = students.find((student) => student.score >= 90);
console.log(find);

/**
 * findIndex (added in ES6): returns the index of first item that matches the condition
 */
const findIndex = students.findIndex((student) => student.score >= 90);
console.log(findIndex);

/**
 * some : checks whether at least one element passes the condition
 * "Check if there is a student with the score lower than 50"
 */
const some = students.some((student) => student.score < 50);
console.log(some); // true

/**
 * every : checks whether all elements passe the condition
 * "Check if scores of all student is lower than 50"
 */
const every = students.every((student) => student.score < 50);
console.log(every); // false

/**
 * filter : creates a new array with elements that matches the condition
 * "Make an array of enrolled students"
 */
const filter = students.filter((student) => student.enrolled);
console.log(filter);

/**
 * map : creates a new array with the result of calling a callback
 * "Make an array containing only the students' scores"
 */
const map = students.map((student) => student.score);
console.log(map);

/**
 * reduce : returns a single accumulated output value
 * Accumulate all the values from a reducer function in an array into a single value
 */

// 01
function stringConcat(arr) {
  return arr.reduce((acc, current) => {
    let toString = current.toString();

    return (acc += toString);
  }, '');
}

console.log('output: ', stringConcat([1, 2, 3, 4])); // "1234"

// 02
// prettier-ignore
const fruits = ['banana','banana','kiwi','kiwi','Blueberries','Strawberry','banana','Pear','Blueberries','Strawberry','banana','van','banana','kiwi'];

const reduce2 = fruits.reduce((object, current) => {
  if (!object[current]) {
    object[current] = 0;
  }
  object[current]++;

  return object;
}, {});

console.log(reduce2); // {banana: 5, kiwi: 3, Blueberries: 2, Strawberry: 2, Pear: 1, …}

// 03
const reduce3 = students.reduce((prev, current) => prev + current.score, 0);
console.log(reduce3 / students.length); // "Compute students's average score"

/**
 * reduceRight : same as reduce but from 'right to left'
 */
const reduceRight = students.reduceRight((prev, current) => prev + current.score, 0);
console.log(reduceRight / students.length);

/**
 * sort : returns the sorted array
 */

// 01
const array = [30, 20, 70, 40, 10];
array.sort((a, b) => {
  // 1. (a - b) < 0 -> a comes first
  // 2. (a - b) == 0 -> no change
  // 3. (a - b) > 0 -> b comes first

  return a - b; // [10, 20, 30, 40, 70]
});

// 02 - "Sort the scores in ascending order and create a new array like this -> [20, 45, 66, 88, 90]"
const sort = students.map((student) => student.score).sort((a, b) => a - b); // ascending order
const sort = students.map((student) => student.score).sort((a, b) => b - a); // descending order

// 03 - sort by sutdent's last name
const sort2 = students.sort((a, b) => {
  const [a_first, a_last] = a.name.split(', ');
  const [b_first, b_last] = b.name.split(', ');

  return a_last > b_last ? 1 : -1;
});
console.log(sort2);

/**
 * from : returns a new, shallow copied Array instance from an array-like or iterable object
 */

const from = Array.from('student');
console.log(from); // ["s", "t", "u", "d", "e", "n", "t", "s"]

console.log(Array.from([1, 2, 3], (x) => x + x)); // [2, 4, 6]
