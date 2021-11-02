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
var model_1 = __importDefault(require("./mongoose/model"));
var sec_1 = require("../../config/sec");
var date_1 = require("../../utils/date");
var User = /** @class */ (function () {
    function User() {
    }
    User.signUp = function (name, email, pass) {
        return __awaiter(this, void 0, void 0, function () {
            var existedUser, paper, settings, onboarding, data, user, e_1;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, User.getUserByEmail(email)];
                    case 1:
                        existedUser = _b.sent();
                        if (existedUser)
                            return [2 /*return*/, { userData: null, userExist: true }];
                        paper = sec_1.createPaper();
                        settings = {
                            lang: 'ru-RU',
                            theme: 'white'
                        };
                        onboarding = {
                            firstTime: false
                        };
                        data = {
                            sex: '',
                            age: 0,
                            weight: 0,
                            height: 0
                        };
                        user = new model_1["default"]({
                            name: name,
                            email: email,
                            pass: sec_1.createPassword(pass, paper),
                            paper: paper,
                            isBanned: false,
                            status: 'user',
                            token: [sec_1.createToken()],
                            ips: [],
                            data: data,
                            settings: settings,
                            onboarding: onboarding,
                            createdAt: date_1.dateNow()
                        });
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        _a = {};
                        return [4 /*yield*/, user.save()];
                    case 3: return [2 /*return*/, (_a.userData = _b.sent(), _a.userExist = false, _a)];
                    case 4:
                        e_1 = _b.sent();
                        console.log(e_1);
                        return [2 /*return*/, { userData: null, userExist: false }];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    User.signIn = function (email, pass) {
        return __awaiter(this, void 0, void 0, function () {
            var user, hashPass, token, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User.getUserByEmail(email)];
                    case 1:
                        user = _a.sent();
                        if (!user)
                            return [2 /*return*/, { token: null, auth: false }];
                        hashPass = sec_1.createPassword(pass, user.paper);
                        if (!(hashPass === user.pass)) return [3 /*break*/, 6];
                        token = sec_1.createToken();
                        if (user.token.length > 3) {
                            user.token.shift();
                        }
                        user.token.push(token);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, user.save()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, { token: token, auth: true }];
                    case 4:
                        err_1 = _a.sent();
                        return [2 /*return*/, { token: null, auth: false }];
                    case 5: return [3 /*break*/, 7];
                    case 6: return [2 /*return*/, { token: null, auth: false }];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    User.getUserPublicData = function (_id) {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, User.getUserById(_id)];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            return [2 /*return*/, {
                                    name: user.name,
                                    email: user.email,
                                    status: user.status,
                                    isBanned: user.isBanned,
                                    data: user.data,
                                    settings: user.settings,
                                    onboarding: user.onboarding,
                                    createdAt: user.createdAt
                                }];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    User.saveUserData = function (id, sex, age, weight, height) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data = {
                            sex: sex,
                            age: age,
                            weight: weight,
                            height: height
                        };
                        return [4 /*yield*/, model_1["default"].updateOne({ _id: id }, { data: data })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    User.changeUserName = function (name, _id) {
        return __awaiter(this, void 0, void 0, function () {
            var user, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User.getUserById(_id)];
                    case 1:
                        user = _a.sent();
                        if (!user) return [3 /*break*/, 6];
                        user.name = name;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, user.save()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 4:
                        err_2 = _a.sent();
                        return [2 /*return*/, false];
                    case 5: return [3 /*break*/, 7];
                    case 6: return [2 /*return*/, false];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    User.changeUserPass = function (oldPass, pass, _id) {
        return __awaiter(this, void 0, void 0, function () {
            var user, hashPass, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User.getUserById(_id)];
                    case 1:
                        user = _a.sent();
                        if (!user) return [3 /*break*/, 8];
                        hashPass = sec_1.createPassword(oldPass, user.paper);
                        if (!(hashPass === user.pass)) return [3 /*break*/, 6];
                        user.pass = sec_1.createPassword(pass, user.paper);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, user.save()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, 200];
                    case 4:
                        err_3 = _a.sent();
                        return [2 /*return*/, 500];
                    case 5: return [3 /*break*/, 7];
                    case 6: return [2 /*return*/, 403];
                    case 7: return [3 /*break*/, 9];
                    case 8: return [2 /*return*/, 403];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    User.setUserPass = function (pass, email) {
        return __awaiter(this, void 0, void 0, function () {
            var user, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User.getUserByEmail(email)];
                    case 1:
                        user = _a.sent();
                        if (!user)
                            return [2 /*return*/, false];
                        user.pass = sec_1.createPassword(pass, user.paper);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, user.save()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 4:
                        err_4 = _a.sent();
                        return [2 /*return*/, false];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    User.getUserById = function (_id) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, model_1["default"].findOne({ _id: _id })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    User.getUserByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, model_1["default"].findOne({ email: email })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Method using only in middleware
    User.getUserIdByToken = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, model_1["default"].findOne({ token: token })];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            return [2 /*return*/, user._id.toString()];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return User;
}());
exports["default"] = User;
//# sourceMappingURL=index.js.map