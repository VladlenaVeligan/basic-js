// const CustomError = require("../extensions/custom-error");

// module.exports = function createDreamTeam(members) {
//     if (!(members instanceof Array)) return false;
//     let result = [];
//     members.map((el) => {
//         if (typeof(el) == 'string') {
//                 // result = el.replace(/\s/g, ' ').split('').splice(1).join('');
//         }

//     });
//     return result;
// };

const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let rez = [];
    if (!(members instanceof Array)) return false;
    members.map((elem) => {
        if (typeof elem === "string") {
            rez.push(elem.trim()[0].toUpperCase());
        }
    });
    return rez.sort().join("");
};