/**
 * Promise

 * Promise introduced with ES6 (2015) is a JavaScript object for asynchronous operation
 * State
   * pending -> fulfilled or rejected
 * Producer vs Consumer
 * Error handling
 * Transform callback functions to Promises
 */

/**
 * Producer
 */
const promise = new Promise((resolve, reject) => {
  // Do some heavy work (network, read files)
  console.log('Do something'); // When new Promise is created, the executor runs automatically

  setTimeout(() => {
    const error = true;
    if (error) {
      resolve();
    } else {
      reject(new Error('No network'));
    }
  }, 1000);
});

/**
 * Conumser : then, catch, finally
 */
promise //
  .then((res) => console.log(res)) // Do this when it succeed
  .catch((err) => console.log(err)) // Do this when it fails
  .finally(() => console.log('finally')); // Do this no matter what

/**
 * Error handling
 */
const writeHTML = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('HTML');
    }, 1000);
  });

const writeCSS = (html) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${html} => CSS`);
    }, 1000);
  });

const writeJS = (css) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(`${css} => JS`);
      reject(new Error(`Error : ${css} => JS`));
    }, 1000);
  });

const buildWepApp = (js) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${js} => ‍web app!`);
    }, 1000);
  });

writeHTML() //
  .then((html) => writeCSS(html))
  .then(writeJS) // pass in the returned value to writeJS
  .catch((err) => 'catch error')
  .then(buildWepApp)
  .then(console.log)
  .catch(console.log);

/**
 * Callback to Promise 01
 */
const users = ['John', 'Sarah', 'David', 'Kim'];

function getUsers() {
  setTimeout(() => {
    users.forEach((user) => {
      console.log(user);
    });
  }, 1000);
}

// callback
function createUser(user, callback) {
  setTimeout(() => {
    users.push(user);
    callback();
  }, 2000);
}

createUser('Flora', getUsers);

// Promise
function createUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        users.push(user);
        resolve();
      } else {
        reject('Error: something went wrong');
      }
    }, 1500);
  });
}

createUser('Flora')
  .then(getUsers)
  .catch((err) => console.log(err));

/**
 * Callback to Promise 02
 */
// callback
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

// Promise
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 'John' && password === '123') {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 'John') {
          resolve({ name: 'John', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = 'John';
const password = '123';

userStorage
  .loginUser(id, password)
  .then((id) => userStorage.getRoles(id))
  .then(console.log(id))
  .catch(console.log);
