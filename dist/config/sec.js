"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.createHashForRecovery = exports.createToken = exports.createPaper = exports.createPassword = void 0;
var crypto_1 = __importDefault(require("crypto"));
var SALT = process.env.SALT || '';
var SALT2 = process.env.SALT2 || '';
function createPassword(pass, paper) {
    var newPass = crypto_1["default"].createHash('md5').update(pass).digest('hex');
    return paper + newPass + SALT;
}
exports.createPassword = createPassword;
function createPaper() {
    return crypto_1["default"].createHash('md5').update(String(Date.now())).digest('hex');
}
exports.createPaper = createPaper;
function createToken() {
    return crypto_1["default"].createHash('md5').update(String(Date.now())).digest('hex');
}
exports.createToken = createToken;
function createHashForRecovery(email) {
    return crypto_1["default"].createHash('md5').update(email + SALT2).digest('hex');
}
exports.createHashForRecovery = createHashForRecovery;
//# sourceMappingURL=sec.js.map