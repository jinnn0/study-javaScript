/**
* Callback

* Callback function is simply a function passed into another function as an argument,
* which is then invoked inside the outer function to complete some kind of routine or action
* This is possible because JS supports "higher-order funtions"

* Synchronous callback
* gets executed immediately

* Asynchronous callback
* gets invoked after something else happened - "called back"

* Some common application of callbacks in JS are
* setTimeout()
* setInterval()
* requestAnimationframe()
* addEventlistener()
*/

console.log('1');
setTimeout(() => {
  console.log('2, in setTimeout');
}, 1000);
console.log('3');

// Synchronous callback
function synchronousCallback(callback) {
  callback();
}

synchronousCallback(() => console.log('In synchronous callback'));

// Asynchronous callback
function asynchronousCallback(callback, timeout) {
  setTimeout(() => {
    callback();
  }, timeout);
}

asynchronousCallback(() => console.log('In asynchronous callback'), 2000);

/**
 * Callback Hell
 * What are the problems with callback hell ?
 * 1. Hard to follow
 * 2. Difficult to write and maintain
 * 3. Hard to debug
 */
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (id === 'John' && password === '123') {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(id, onSuccess, onError) {
    setTimeout(() => {
      if (id === 'John') {
        onSuccess({ name: 'John', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = 'John';
const password = '123';

userStorage.loginUser(
  id,
  password,
  (id) =>
    userStorage.getRoles(
      id,
      (user) => console.log(user),
      (err) => console.log(err)
    ),
  (err) => console.log(err)
);
