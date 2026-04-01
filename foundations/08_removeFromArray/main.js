const removeFromArray = require("./removeFromArray");
let str = removeFromArray([1, 1, 2, 3, 4, 3], 1, 3); // should remove 3 and return [1,2,4]
console.log(str);