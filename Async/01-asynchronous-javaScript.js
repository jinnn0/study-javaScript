/*
* Asynchronous JavaScript

* JavaScript is synchronous
* It executes the code block by order after hoisting
* However, there are many times when it is beneficial to have code executed "after something has happened" and not "sequentially"
* Modern software design increasingly revolves around using asynchronous programming, to allow programs to do more than one thing at a time

* callback
* promise
* async / await

* ↑ these are all ways to deal with asynchronous data
* which basically means that you want to "continue" while something is happening in the background "asynchronously"
* rather than wait until it's finished and move on with synchronous programming
*/

/*
 * We can't run synchronous style code in the example below, because we don't have the data yet.
 * This is where asynchronous programming comes in
 */

function loginUser(email, password) {
  setTimeout(() => {
    console.log('login user');
    return { email };
  }, 1500);
}

const user = loginUser('abc@gmail.com', 123);
console.log(user);
