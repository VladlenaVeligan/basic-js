const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (Array.isArray(arr)) {
            let count = 1;
            arr.forEach((element) => {
                count = Math.max(this.calculateDepth(element) + 1, count);
            });
            return count;
        } else {
            return 0;
        }
    }
};