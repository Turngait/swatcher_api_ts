"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var User_1 = __importDefault(require("../models/User"));
var Mailer_1 = __importDefault(require("../models/Mailer"));
var Restore_1 = __importDefault(require("../models/Restore"));
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.signUp = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var status, token, _a, email, name, pass, _b, userData, userExist;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        status = 500;
                        token = null;
                        _a = req.body, email = _a.email, name = _a.name, pass = _a.pass;
                        return [4 /*yield*/, User_1["default"].signUp(name, email, pass)];
                    case 1:
                        _b = _c.sent(), userData = _b.userData, userExist = _b.userExist;
                        if (!(userData && !userExist)) return [3 /*break*/, 3];
                        return [4 /*yield*/, Mailer_1["default"].sendSignUpMail(email, pass, name)];
                    case 2:
                        _c.sent();
                        status = 200;
                        token = userData.token[0];
                        return [3 /*break*/, 4];
                    case 3:
                        if (userExist) {
                            status = 403;
                        }
                        else {
                            status = 500;
                        }
                        _c.label = 4;
                    case 4:
                        res.status(status);
                        res.json({ status: status, token: token });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.signIn = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var status, _a, email, pass, _b, token, auth;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        status = 500;
                        _a = req.body, email = _a.email, pass = _a.pass;
                        return [4 /*yield*/, User_1["default"].signIn(email, pass)];
                    case 1:
                        _b = _c.sent(), token = _b.token, auth = _b.auth;
                        if (auth) {
                            status = 200;
                        }
                        else {
                            status = 403;
                        }
                        res.status(status);
                        res.json({ status: status, token: token });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.saveData = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var status, _a, sex, age, weight, height, userId, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        status = 500;
                        _a = req.body, sex = _a.sex, age = _a.age, weight = _a.weight, height = _a.height, userId = _a.userId;
                        return [4 /*yield*/, User_1["default"].saveUserData(userId, sex, age, weight, height)];
                    case 1:
                        result = _b.sent();
                        if (result) {
                            status = 200;
                        }
                        res.status(status);
                        res.json({ status: status });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.changeUserName = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, userId, status, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, userId = _a.userId;
                        status = 500;
                        return [4 /*yield*/, User_1["default"].changeUserName(name, userId)];
                    case 1:
                        result = _b.sent();
                        if (result) {
                            status = 200;
                        }
                        res.status(status);
                        res.json({ status: status });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.changeUserPass = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, oldPass, pass, userId, status;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, oldPass = _a.oldPass, pass = _a.pass, userId = _a.userId;
                        return [4 /*yield*/, User_1["default"].changeUserPass(oldPass, pass, userId)];
                    case 1:
                        status = _b.sent();
                        res.status(status);
                        res.json({ status: status });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.restoreUserPass = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var status, _a, email, pass, code, start, user, newCode, isSend, isCodeExist, isChange, isSend;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        status = 500;
                        _a = req.body, email = _a.email, pass = _a.pass, code = _a.code, start = _a.start;
                        return [4 /*yield*/, User_1["default"].getUserByEmail(email)];
                    case 1:
                        user = _b.sent();
                        if (!!user) return [3 /*break*/, 2];
                        status = 403;
                        return [3 /*break*/, 12];
                    case 2:
                        if (!start) return [3 /*break*/, 5];
                        return [4 /*yield*/, Restore_1["default"].saveCode(email)];
                    case 3:
                        newCode = _b.sent();
                        return [4 /*yield*/, Mailer_1["default"].sendRecoveryMail(email, newCode)];
                    case 4:
                        isSend = _b.sent();
                        if (isSend)
                            status = 200;
                        return [3 /*break*/, 12];
                    case 5: return [4 /*yield*/, Restore_1["default"].hasCode(email, code)];
                    case 6:
                        isCodeExist = _b.sent();
                        if (!isCodeExist) return [3 /*break*/, 11];
                        return [4 /*yield*/, User_1["default"].setUserPass(pass, email)];
                    case 7:
                        isChange = _b.sent();
                        if (!isChange) return [3 /*break*/, 9];
                        return [4 /*yield*/, Mailer_1["default"].sendPassWasChanged(email, pass)];
                    case 8:
                        isSend = _b.sent();
                        if (isSend)
                            status = 200;
                        _b.label = 9;
                    case 9: return [4 /*yield*/, Restore_1["default"].delCode(email)];
                    case 10:
                        _b.sent();
                        return [3 /*break*/, 12];
                    case 11:
                        status = 403;
                        _b.label = 12;
                    case 12:
                        res.status(status);
                        res.json({ status: status });
                        return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
exports["default"] = UserController;
//# sourceMappingURL=UserController.js.map