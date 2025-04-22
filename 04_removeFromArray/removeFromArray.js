const removeFromArray = function (array, ...args) {
//   const sortedArray = array.sort(function (a, b) {
//     return a - b;
//   });
//   const sortedArg = args.sort(function (a, b) {
//     return a - b;
//   });
  const newArray = [];
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      if (args.includes(array[i])) {
        console.log("continue");
        continue;
      }
      newArray.push(array[i]);
    }
    return newArray;
  }
};

// Task solutions

// const removeFromArray = function (array, ...args) {
//   const newArray = [];
//   array.forEach((item) => {
//     if (!args.includes(item)) {
//       newArray.push(item);
//     }
//   });
//   return newArray;
// };

// const removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }

// Do not edit below this line
module.exports = removeFromArray;
