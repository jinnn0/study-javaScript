/**
* Hoisting

* Variable declarations are processed before any code gets executed

* When you're creating a variable, there are two things you are doing :
   1. declaring a variable
   2. assigning a value to it

* Hoisting refers to the JS behavior that the variables and named function "declarations"
  are moved to the top of their scope (but not the values assinged to it)

* The "var" declarations are moved up to the top and automatically and set to "undefined"
* Named functions are moved up to the top of their scope therefore available anywere in your code

* "let" / "const" variables and "class" are hoisted but remain unintialized
* Annonymous functions and arrow functions are not hoisted

* Why should you avoid hoisting ?
* It will slow down the performacne since it takes up spaces in the browser
* Avoiding hoisting makes the code easier to understand and bug free!

* How to avoid hoisting
* Create variables inside the function
* Use "let" and "const"
* Use annonymous function
* Use 'strict mode'
*/

/*
 * =======================================================
 */
console.log(user); // Uncaught ReferenceError: user is not defined

/*
 * =======================================================
 */
console.log(user); // undefined
var user = 'user';

/*
 * =======================================================
 * Variable declarations are being run first and
 * It makes spaces in memory for those variables and set them to undefined
 */
var user;
console.log(user); // undefined
user = 'user';

/*
 * =======================================================
 */

user = 'user';
console.log(user); // "user"
var user;

/*
 * =======================================================
 * The issue with using "var" and hoisting
 */
var defaultColor = 'orange';
var color = 'skyblue';

function printColor() {
  if (!color) {
    var color = defaultColor;
  }
  return color;
}

console.log(printColor()); // orange

/*
 * =======================================================
 * The printColor function above is basically equal to the code below
 */
function printColor() {
  // hoisted, set to undefined,
  // code inside the scope of the function takes precedence over the ones outside the function
  var color;

  if (!color) {
    color = defaultColor;
  }

  return color;
}

/*
 * ===================================================================
 * The named functions get hosited sand available anywhere in your code
 */
console.log(sayHello());

function sayHello() {
  const message = 'hi there!';
  return message;
}
