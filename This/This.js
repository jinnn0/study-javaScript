/*
 * "this"

 * Refers to the object it belongs to (the owner of the function)
 * Refers to the object that is executing the current bits of JS code
 * "this" gets re-defined automatically depends on the object that called the function

 * Arrow function and "this"
   * "this" refers to its current surrounding scope and no further
   * They inherit one from their parent scope called "lexical scoping"
   * Refers to the scope of the function defined using the "function" keyword
   * Always represents the object that defined the arrow function
   * Arrow function doesn't re-define the value of "this"
   * Normal function defines "this" based on where the function is called ex. "person".greet()

 * Good use cases of Arrow function
   * When working with closures and callbacks

 * Bad use cases of arrow function
   * as a method in an object / calss or constructor
 */

/*
 * Regular function & "this" example 01
 */
const user_1 = {
  name: 'user',
  age: 23,
  greet: function () {
    console.log(this);
  }
};

user_1.greet(); // user object, greet function is called on "user_1" -> "user_1".greet()

/*
 * Regular function & "this" example 02
 */
const user_2 = {
  name: 'user',
  age: 23,
  greet: function () {
    function inner() {
      console.log(this);
    }
    inner();
  }
};

user_2.greet(); // window object, this is re-defined to window object

/*
 * Regular function & "this" example 03
 */
function changeColor(e) {
  console.log(this); // <h1> </h1>
  this.style.backgroundColor = 'orange';
}

document.querySelector('h1').addEventListener('click', changeColor);

/*
 * Arrow function & "this" example 01
 */
const user_3 = {
  name: 'user',
  age: 23,
  greet: () => {
    console.log(this);
  }
};

user_3.greet(); // window object, inherited from the parent which is window or the global object

/*
 * Arrow function & "this" example 02
 */
const user_4 = {
  name: 'user',
  age: 23,
  greet: () => {
    const inner = () => {
      console.log(this);
    };

    inner();
  }
};

user_4.greet(); // window object

/*
 * Arrow function & "this" example 03
 */
const user_5 = {
  name: 'user',
  age: 23,
  greet: function () {
    const inner = () => {
      console.log(this);
    };

    inner();
  }
};

user_5.greet(); // user object

/*
 * Arrow function & "this" example 04
 */
const updateColor = (e) => {
  console.log(this); //  Uncaught TypeError: Cannot set property 'backgroundColor' of undefined
  this.style.backgroundColor = 'orange';
};

document.querySelector('h1').addEventListener('click', updateColor);
