const reverseString = function(word) {
    let string = word.split("");
    let reversedArray = [];
    let i = string.length;
    console.log(i);
    for(; i >= 0; i--) {
        reversedArray.push(string[i]);
    }
    let reversedString = reversedArray.join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
