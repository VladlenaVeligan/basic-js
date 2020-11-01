const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
    let sum = 0;
    let newArr = arr.flat();

    newArr.map(function(elem) {
        if (elem === '^^') return sum++
            else {
                return sum
            }
    });
    return sum;
}