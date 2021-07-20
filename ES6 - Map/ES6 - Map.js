/*
 * Map

 * Map is a data structure that stores a key : value pairs

 * Ordered key-value pairs of data
 * The insertion order is kept
 * Elements are accessed by key
 * Iterable ("for of" loop can be used)
 * Key must be unique and can be any reference values like array, object, strings, numbers and symbols

 * Difference between Object and Map
     * Map allows any values including object and array to be used as a key unlike object
     * Object only allows string or symbol

     * Map allows multiple unique objects
     * Object would overrides with last one

     * Map iterates entries, keys, and values in the order of entry insertion
     * Object does not gurantee its order, so it's best not to rely on the orders in object

     * Map can be used with "for .. of" loop
     * Object can be used with "for .. in" loop, "for ..of" can't be implemented

     * Size of Map can be easily retrieved by map.size
     * The number of items in an Object must be determined manually
 */

// 1. Create an empty Map
new Map(); // Map(0) {}

// 2. Create a Map with iterable object
const map = new Map([
  ['name', 'john'],
  ['city', 'paris'],
  ['city', 'dublin']
]);

// console.log(map) // Map(2) {"name" => "john", "city" => "dublin"}

// 3. Set - Map.set(key, value)
const passwords = {};
const collection = [];

map.set('city', 'london'); // Map(2) {"name" => "john", "city" => "london"}
map.set(2021, 'year 2021'); // Map(3) {"name" => "john", "city" => "london", 2021 => "year 2021"}
map.set({}, 'users'); // Map(4) {"name" => "john", "city" => "london", 2021 => "year 2021", {…} => "users"}
map.set(passwords, 'passwords..'); // Map(5) {"name" => "john", "city" => "london", 2021 => "year 2021", {…} => "users", {…} => "passwords..."}
map.set([], 'list'); // Map(6) {"name" => "john", "city" => "london", 2021 => "year 2021", {…} => "users", Array(0) => "list"}
map.set(collection, 'collection'); // Map(7) {"name" => "john", "city" => "london", 2021 => "year 2021", {…} => "users", Array(0) => "list", Array(0) => "collection"}
map.set(true, 'true'); // Map(8) {"name" => "john", "city" => "london", 2021 => "year 2021", {…} => "users", Array(0) => "list", Array(0) => "collection", true => "true"}

// 4. Size - map.size
console.log(map.size); // 8

// 5. Get - map.get(key)
console.log(map.get(passwords)); // passwords..
console.log(map.get(true)); // true
console.log(map.get(2021)); // year 2021

// 6. Delete map.delete(key)
console.log(map.delete('city')); // true
console.log(map); // Map(7) {"name" => "john", 2021 => "year 2021", {…} => "users", {…} => "passwords..", Array(0) => "list", …}

const objectAsReferenceValue = { name: 'john', age: 21 };
map.set({ name: 'john', age: 21 });

map.delete({ name: 'john', age: 21 }); // this will not poit to "objectAsReferenceValue" but only create a brand new object
map.delete(objectAsReferenceValue); // you have to use its reference name

// 7. Has - map.has(key)
console.log(map.has(collection)); // true

// 8. values - map.values() => Get all values
console.log(map.values()); // MapIterator {"john", "london", "year 2021", "users", "passwords..", …}

// 9. keys - map.keys()
console.log(map.keys()); // MapIterator {name, city, 2021, {...}, {...}, …}

// 9. Map iterates its elements in insertion order
for (const ele of map) {
  console.log(ele); //  ["name", "john"], [2021, "year 2021"] ...
}

// for .. of loop returns the key first
for (const [key, value] of map) {
  console.log(key, value); // name john, city london, 2021 year 2021 ...
}

// forEach returns a value first
map.forEach((value, key) => {
  console.log(value, key);
});

// 9. Difference between Object and Map
// Object
const fruits = {};
const a = { item: 'banana' };
const b = { item: 'cherry' };

fruits[a] = 'Banana'; // {[object Object]: "Banana"}
fruits[b] = 'Cherry'; // {[object Object]: "Cherry"}

console.log(fruits[a], fruits[b]); // Cherry Cherry

// Map
const list = new Map();
list.set(a, 'Banana');
list.set(b, 'Cherry');

console.log(list.get(a), list.get(b)); // Banana Cherry

for (let [key, value] of list) {
  console.log(key, value);

  // {item: "banana"} "Banana"
  // {item: "cherry"} "Cherry"
}
