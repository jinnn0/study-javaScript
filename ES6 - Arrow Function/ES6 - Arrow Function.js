/**
 * Arrow Function

 * Sometimes we do not need to name our functions (ex. passing function as an argument)
 * Syntactic sugar to write concise anonymous function
 *
 */
// 01
const one = () => console.log('one');

// 02
const two = (a) => a;

// 03 : parenthese for multiple parameters
const three = (a, b) => a * b;

// 04 : explicit return for multi line
const four = (a, b) => {
  // do something
  return a * b;
};

// 05 : explicit return for single line
const five = (a) => {
  return a;
};

// 05 : return an object with parentheses
const five = () => ({ name: 'Mike' });
