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
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88)
];

/**
 * find : returns the fisrt item that matches the condition
 * "Find a student with the score 90"
 */
const find = students.find((student) => student.score >= 90);
console.log(find);

/**
 * findIndex : returns the index of first item that matches the condition
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
 * "Compute students's average score"
 */
const reduce = students.reduce((prev, current) => prev + current.score, 0);
console.log(reduce / students.length);

/**
 * reduceRight : same as reduce but from 'right to left'
 */
const reduceRight = students.reduceRight((prev, current) => prev + current.score, 0);
console.log(reduceRight / students.length);

/**
 * sort : returns sorted original array
 * "Sort the scores in ascending order" -> [20, 45, 66, 88, 90]
 */
const sort = students.map((student) => student.score).sort((a, b) => a - b); // ascending order
const sort = students.map((student) => student.score).sort((a, b) => b - a); // descending order

/**
 * from : returns a new, shallow copied Array instance from an array-like or iterable object
 */

const from = Array.from('student');
console.log(from); // ["s", "t", "u", "d", "e", "n", "t", "s"]

console.log(Array.from([1, 2, 3], (x) => x + x)); // [2, 4, 6]
