const removeFromArray = function(array, ...argRemove) {
    if (Array.isArray(array)) {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] != argRemove) {
                newArray.push(array[i]);
            }
            
        }
        return newArray;
    }
    return false;
};

// Do not edit below this line
module.exports = removeFromArray;
