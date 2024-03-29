/**
 * Extended Parameter handling
 */

/**
 * Default parameters - Before ES6
 */
function showMessage(x, message, from) {
  if (x === undefined) {
    x = 'new';
  }

  if (from === undefined) {
    from = 'unknown';
  }

  console.log(`${message} by ${from}`);
}

showMessage('Hello!');

/**
 * Default parameters - ES6
 */
function showMessage(x = 'new', message, from = 'unknown') {
  console.log(`${x} ${message} by ${from}, `);
}

showMessage('Hello!');

/**
 * Rest parameters - Before ES6
 */
function printList(param1, param2) {
  const args = Array.prototype.slice.call(arguments, 2);
  args.forEach((arg) => console.log(arg));
}

printList('param1', 'param2', 'one', 'two', 'three');

const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
};

/**
 * Rest parameters - ES6
 */
function printList(param1, param2, ...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}

printList('param1', 'param2', 'one', 'two', 'three'); // args.length : 3, output : 'one', 'two', 'three'
//  printList('param1', 'param2', ['one', 'two', 'three']) // ...args.length : 1, output : ['one', 'two', 'three']

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0); 
};

/**
 * Rest parameters / Spread Operator - ES6
 */
function printList(param1, param2, ...args) {
  args.forEach((arg) => console.log(arg)); // one, two, three
}

const args = ['one', 'two', 'three'];
printList('param1', 'param2', ...args);
