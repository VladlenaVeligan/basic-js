const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof(sampleActivity) !== 'string' || sampleActivity > MODERN_ACTIVITY.toString() || sampleActivity <= '0') return false;

    let t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
    return t;
};