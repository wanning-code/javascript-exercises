const removeFromArray = function (array, ...argRemove) {
    const sortedArray = array.sort(function (a, b) {
      return a - b;
    });
    const sortedArg = argRemove.sort(function (a, b) {
      return a - b;
    });
    const newArray = [];
  
    if (Array.isArray(array)) {
      for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArg.includes(sortedArray[i])) {
          console.log("continue");
          continue;
        }
        newArray.push(sortedArray[i]);
      }
      console.log(newArray);
      return newArray;
    }
  };

// Do not edit below this line
module.exports = removeFromArray;
