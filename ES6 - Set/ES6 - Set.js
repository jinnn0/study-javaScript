/**
* Set

* Sets are a collection of UNIQUE values

* Set vs Array
* Set is a data structure that allows you to store a collection of unique values
* Set often get confused with array because they are both a collection of data

* Set is unordered colletion thus insertion order is not maintained
* Elements can be accessed via its methods
* Duplicate values are not allowed 
* Iterable (order is not guaranteed)
* The size/length of the array is adjusted dynamically 
* Deletion and finding elements are faster than regular array since it Set doesn't go through every single elements 

* Practical Use case
* To remove duplicate elements in an array
* Basic Set operations like isSuperset(), union(), intersect(), symmetricDifference(), difference() are easily implemented
*/

// 1. Create an empty Set
new Set();

// 2. Create a Set with iterable object
const newSet = new Set(['hello', 'there']);
console.log(newSet); // Set(2) {"hello", "there"}

const newSet = new Set('hello');
console.log(newSet); // Set(4) {"h", "e", "l", "o"}

const newSet = new Set({ one: 1, two: 2 });
console.log(newSet); // Uncaught TypeError: object is not iterable


// 3. Add
newSet.add('new item'); // the value is added in its entirety
console.log(newSet); // Set(3) {"hello", "there", "new item"}

// 4. Size
console.log(newSet.size); // 3

// 5. Check for value
console.log(newSet.has('new item')); // true

// 6. Delete a single value : returns true if value was already in the Set otherwise false
newSet.delete('there');
console.log(newSet); // Set(2) {"hello", "new item"}

// 7. Delete the entire Set
newSet.clear();
console.log(newSet); // Set(0) {}

// 8. Iterating Set
for (let item of newSet) {
  console.log(item);
}

newSet.forEach((item) => console.log(item));

// 9. Covert Set into Array
console.log([...newSet]);

// 10. Remove duplicates from the Array
const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
console.log([...new Set(numbers)]); // [2,3,4,5,6,7,32]
console.log(Array.from(new Set(numbers))); // same as above

// 11. Set with String value
const string = 'Ireland';
console.log(new Set(string)); // Set(7) {"I", "r", "e", "l", "a", "n", "d"}

// Set use case 01 - Find an unpaired element in an array
const array = [11, 3, 5, 11, 7, 5, 5, 3, 7, 9];
function getUniqueItem(array) {
  const set = new Set();

  array.forEach((item) => {
    // set.delete(item) || set.add(item);

    if (set.delete(item)) return;
    else {
      set.add(item);
    }
  });

  return set.values().next().value;
}

getUniqueItem(array); // 5
