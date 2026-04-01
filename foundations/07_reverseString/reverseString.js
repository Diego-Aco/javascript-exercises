const reverseString = function(string) {
    result ='';
    let i = string.length-1;
    while (i>=0) {
        result += string[i];
        i--;
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
