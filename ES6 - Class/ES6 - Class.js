/**
 * Class

 * "class" keyword declares a new function - adding "constructor"
 * UpperCamelCase convention for ES6 class names
 * Creating a class
 * Getter and setter
   * Hide internal implementation details
   * Obtain values from an object and set the value of a property within an object
   * Underscore (_) naming convention for private variable ie. _update

   * Getter : behaves like a properties
   * Setter update the properties
 */

// 01. Creating a class
class Person {
  constructor(name) {
    this.name = name;
  }
}

const Mike = new Person('Mike');
console.log(Mike);

// 02. Getter and setter to control access to an object
class Comment {
  constructor(message) {
    this._message = message;
  }

  // getter
  get message() {
    return this._message;
  }

  // setter
  set message(message) {
    this._message = message;
  }
}

const comment = new Comment('hello');

console.log(comment.message); // 'hello'
comment.message = 'hi!';
console.log(comment.message); // 'hi!'

// 03. Inheritance
