const sumAll = function (num1, num2) {
  let temp = 0;
  // Changed from if statement with body to Single line
  // You can write the if statement in one line when it dont need multi line
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  if (num1 <= 0 || num2 <= 0) return "ERROR";

  // An alternative way to swap the values of min and max like above 
  // is to use the array destructuring syntax.
  // Here's an optional article on it: 
  // https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
  // if (min > max) [min, max] = [max, min];
  if (num1 > num2) {
    temp = num1;
    num1 = num2;
    num2 = temp;
  }
  let result = 0;
  for (num1; num1 <= num2; num1++) {
    result += num1;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
