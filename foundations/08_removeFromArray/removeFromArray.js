const removeFromArray = function(array, value, v2, v3, v4) {
    for (let i = 1; i < arguments.length; i++) {    //skip first arg, iterate through all search vals
        //remove multiple values
        while (true) {
            let index = array.indexOf(arguments[i]);
            if (index===-1) {
                break;
            }
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
